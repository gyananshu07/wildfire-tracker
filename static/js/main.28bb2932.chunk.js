(this["webpackJsonpwildlife-tracker-react"]=this["webpackJsonpwildlife-tracker-react"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(3),s=n.n(a),r=(n(17),n(9)),i=n.n(r),o=n(10),j=n(5),l=(n(19),n(12)),d=n(6),u=n(7),b=n.n(u),O=n(1),f=function(e){e.lat,e.lng;var t=e.onClick;return Object(O.jsx)("div",{className:"location-marker",onClick:t,children:Object(O.jsx)(d.Icon,{icon:b.a,className:"location-icon"})})},h=function(e){var t=e.info;return Object(O.jsxs)("div",{className:"loaction-info",children:[Object(O.jsx)("h2",{children:"Event Location Info"}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["ID: ",Object(O.jsx)("strong",{children:t.id})]}),Object(O.jsxs)("li",{children:["TITLE: ",Object(O.jsx)("strong",{children:t.title})]})]})]})},x=function(e){var t=e.eventData,n=e.center,a=e.zoom,s=Object(c.useState)(null),r=Object(j.a)(s,2),i=r[0],o=r[1],d=t.map((function(e){return 8===e.categories[0].id?Object(O.jsx)(f,{lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return o({id:e.id,title:e.title})}}):null}));return Object(O.jsxs)("div",{className:"map",children:[Object(O.jsx)(l.a,{bootstrapURLKeys:{key:"AIzaSyCj_qqL_ij4TNRVrDGjUgGQNHv9W5OV1ls"},defaultCenter:n,defaultZoom:a,children:d}),i&&Object(O.jsx)(h,{info:i})]})};x.defaultProps={center:{lat:42.3265,lng:-122.8756},zoom:6};var v=x,m=n.p+"static/media/spinner.c42ba7a5.gif",p=function(){return Object(O.jsxs)("div",{className:"loader",children:[Object(O.jsx)("img",{src:m,alt:"Loading"}),Object(O.jsx)("h1",{children:"Loading Data"}),Object(O.jsx)("h3",{children:"Please Wait!"})]})},g=function(){return Object(O.jsx)("header",{className:"header",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)(d.Icon,{icon:b.a,className:"logo-icon"}),"WildFire Tracker (Developed by Gyananshu Kashyap)"]})})};var k=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(j.a)(s,2),l=r[0],d=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,a(c),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),l?Object(O.jsx)(p,{}):Object(O.jsx)(v,{eventData:n})]})};s.a.render(Object(O.jsx)(k,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.28bb2932.chunk.js.map