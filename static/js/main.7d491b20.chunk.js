(this.webpackJsonpcontactbook=this.webpackJsonpcontactbook||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(4),i=n.n(s),o=(n(12),n(6)),d=(n(13),n(3)),l=n.n(d),u=n(5),f=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Request"),e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?include=deals,geoIps.geoAddress,tags,contactTags.tag",{headers:{"Api-Token":"bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0"}});case 4:return t=e.sent,e.next=7,t.json();case 7:return n=e.sent,console.log(h(n)),e.abrupt("return",h(n));case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),h=function(e){return e.contacts.map((function(t){t.fullName=t.firstName+" "+t.lastName,t.dealCount=t.deals.length;var n="",c=t.deals.reduce((function(t,c){var a=e.deals.find((function(e){return e.id===c}));return a?(n=a.currency,t+Number(a.value)):t}),0);if(n&&c){var a=new Intl.NumberFormat("en-US",{style:"currency",currency:n.toUpperCase(),maximumFractionDigits:0,minimumFractionDigits:0});t.valueTotal=a.format(c)}else t.valueTotal="-";t.geoIps.forEach((function(n){var c=e.geoIps.find((function(e){return e.id===n}));if(c){var a=c.geoaddrid,r=e.geoAddresses.find((function(e){return e.id===a}));if(r)return void(t.location=r.city+", "+r.state+", "+r.country)}}));var r=e.contactTags.reduce((function(n,c){if(c.contact===t.id){var a=e.tags.find((function(e){return e.id===c.tag}));a&&n.push(a.tag)}return n}),[]);return t.tags=r.join(", "),t}))};var j=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsxs)("tr",{className:"header",children:[Object(c.jsx)("th",{className:"left-padding",children:"Contact"}),Object(c.jsx)("th",{children:"Total Value"}),Object(c.jsx)("th",{children:"Location"}),Object(c.jsx)("th",{id:"dealCell",children:"Deals"}),Object(c.jsx)("th",{children:"Tags"})]}),n.map((function(e){return Object(c.jsxs)("tr",{className:"row",children:[Object(c.jsx)("td",{className:"left-padding",id:"nameCell",children:e.fullName}),Object(c.jsx)("td",{children:e.valueTotal}),Object(c.jsx)("td",{children:e.location||"-"}),Object(c.jsx)("td",{id:"dealCell",children:e.deals.length}),Object(c.jsx)("td",{children:e.tags})]})}))]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.7d491b20.chunk.js.map