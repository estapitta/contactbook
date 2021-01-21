const corsanywhere = "https://cors-anywhere.herokuapp.com/"
const baseUrl = "https://sahmed93846.api-us1.com/api/3"
const apiKey = "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0"
const contactEndPoint = '/contacts'
const tagsEndPoint = '/tags'

export const fetchContactList = async() => {
  try {
    console.log("Request")
    const response = await fetch(corsanywhere + baseUrl + contactEndPoint + "?include=deals,geoIps.geoAddress,tags,contactTags.tag", {
      headers:{
        "Api-Token": apiKey
      }
    })
    const data = await response.json()
    console.log(normalizeData(data))

    return normalizeData(data)
  } catch(error) {
    console.log(error)
  }
}

const normalizeData = (obj) => {
  const contacts = obj.contacts.map((contact) => {
    contact.fullName = contact.firstName + " " + contact.lastName 
    contact.dealCount = contact.deals.length
    let currency = ""
    let totalValue = contact.deals.reduce((total, dealId) => {
      let foundDeal = obj.deals.find((deal) => deal.id === dealId)
      if(foundDeal){
        //Assuming every deal under one contact is of the same currency
        currency = foundDeal.currency
        return total + Number(foundDeal.value)
      } else {
        return total
      }
    }, 0)

    if(currency && totalValue) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.toUpperCase(),
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0
      });
      
      contact.valueTotal = formatter.format(totalValue);
    } else {
      contact.valueTotal = "-";
    }

    contact.geoIps.forEach((geoIpId) => {
      const foundGeoIp = obj.geoIps.find((ip) => ip.id === geoIpId)
      if(foundGeoIp) {
        const geoAddrId = foundGeoIp.geoaddrid
        const foundGeoAddr = obj.geoAddresses.find((addr) => addr.id === geoAddrId)
        if(foundGeoAddr) {
          contact.location = foundGeoAddr.city + ", " + foundGeoAddr.state + ", " + foundGeoAddr.country
          // return here to end forEach since we found our location
          return
        }
      }
    })

    const tags = obj.contactTags.reduce((acc, contactTag) => {
      if(contactTag.contact === contact.id) {
        const foundTag = obj.tags.find((tag) => tag.id === contactTag.tag)
        if(foundTag) {
          acc.push(foundTag.tag)
        }
      }

      return acc
    }, [])

    contact.tags = tags.join(", ")

    return contact
  })

  return contacts
}
