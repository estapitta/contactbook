import fetch from 'node-fetch'
const corsanywhere = "https://cors-anywhere.herokuapp.com/"
const baseUrl = "https://sahmed93846.api-us1.com/api/3"
const apiKey = "bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0"
const contactEndPoint = '/contacts'
const tagsEndPoint = '/tags'

export const fetchContactList = async() => {
  try{
const response = await fetch(corsanywhere + baseUrl + contactEndPoint + "?include=deals,geoIps.geoAddress,tags,contactTags.tag", {
  headers:{
    "Api-Token": apiKey
  }
})
const data = await response.json()
console.log(data)
return data
  } catch(error) {
    console.log(error)
  }
}

// const fetchAllTags = async () => {
//   try{
//     const response = await fetch(corsanywhere + baseUrl + tagsEndPoint, {
//       headers:{
//         "Api-Token": apiKey
//       }
//     })
//     const data = await response.json()
//     console.log(data)
//   } catch(error){
//     console.log(error)
//   }

//}

// const fetchContactTags = async(url) => {
//   try {
//   const response = await fetch(corsanywhere + url, {
//     headers:{
//       "Api-Token": apiKey
//     }
//   })
//   const data = await response.json()
//   console.log(data)
//   } catch(error) {
//     console.log(error)
//   }
//}