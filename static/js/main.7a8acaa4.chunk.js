(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{12:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(19),i=c.n(n),a=(c(12),c(10)),s=c(1);var o=function(){var e={color:"white",textDecoration:"none"};return Object(s.jsxs)("nav",{children:[Object(s.jsx)("h3",{children:Object(s.jsx)("img",{className:"logo",src:"https://icon-library.com/images/icon-for-blog/icon-for-blog-28.jpg",alt:"logo"})}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)(a.b,{style:e,to:"/",children:Object(s.jsx)("li",{children:"Home"})}),Object(s.jsx)(a.b,{style:e,to:"/blog",children:Object(s.jsx)("li",{children:"Blog"})})]})]})},l=c(36);var j=function(){return Object(s.jsxs)(l.a,{style:{marginLeft:"4rem",marginTop:"1rem",width:"35rem",height:"25rem",background:"#fd7e14",borderRadius:"10px"},text:"light",children:[Object(s.jsx)(l.a.Title,{style:{padding:"3rem",marginTop:"1rem"},children:Object(s.jsx)("h1",{children:"Welcome To Simple Blog"})}),"        "]})},m=c(21),d=c(34);var h=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){i()}),[]);var i=function(){fetch("https://api.spaceflightnewsapi.net/v3/blogs").then((function(e){return e.json()})).then((function(e){n(e)}))};return Object(s.jsx)(l.a,{style:{marginLeft:"5rem",marginTop:"3rem",marginBottom:"2rem",width:"65%",height:"100%",borderRadius:"10px"},text:"light",bg:"success",children:Object(s.jsx)(d.a,{style:{padding:"50px"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"blog-title",children:"Blog Page"}),c.map((function(e,t){var c=e.id,r=e.title;e.url,e.imageUrl,e.summary;return Object(s.jsx)("h4",{style:{marginBottom:"20px"},children:Object(s.jsxs)(a.b,{to:{pathname:"/blog/".concat(c),state:{articles:e}},style:{textDecoration:"none",color:"white"},children:["Article: ",Object(s.jsxs)("span",{style:{color:"yellow",fontSize:"1.4rem"},children:[r," "]})]})},c)}))]})})})},b=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{style:{marginLeft:"4rem",marginTop:"3rem",marginBottom:"2rem",width:"35rem",height:"20rem",padding:"5rem"},bg:"secondary",text:"light",children:Object(s.jsx)("h1",{children:"404 Page Not Found"})})})},g=(c(32),c(35)),x=c(37),p=function(e){var t=e.location.state.articles.id,c=e.location.state.articles.title,r=(e.location.state.articles.url,e.location.state.articles.imageUrl),n=e.location.state.articles.summary;return console.log(r),Object(s.jsxs)(l.a,{style:{marginLeft:"4rem",marginTop:"1rem",marginBottom:"2rem",width:"38rem"},bg:"secondary",text:"light",children:[Object(s.jsx)(g.a,{xs:6,md:8,children:Object(s.jsx)(l.a.Img,{variant:"bottom",src:r,style:{marginLeft:"6rem",marginBottom:"1rem",marginTop:"2rem",borderRadius:"10px"},className:"text-center"})}),Object(s.jsxs)(l.a.Title,{style:{paddingLeft:"30px",paddingRight:"30px"},children:[Object(s.jsxs)("h4",{children:["Id:",t]}),Object(s.jsxs)("h3",{children:["Title: ",c]})]}),Object(s.jsx)(l.a.Text,{style:{paddingLeft:"30px",paddingRight:"30px"},children:Object(s.jsxs)("p",{children:["Single Blog Summary: ",n]})}),Object(s.jsx)(a.b,{to:"/blog",children:Object(s.jsx)(x.a,{variant:"success",style:{width:"8rem",marginLeft:"14rem",marginBottom:"1.5rem"},children:" Back"})})]})},O=c(3);var u=function(){return Object(s.jsx)(a.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/",exact:!0,component:j}),Object(s.jsx)(O.a,{path:"/react-blog-hw",exact:!0,component:j}),Object(s.jsx)(O.a,{path:"/blog",exact:!0,component:h}),Object(s.jsx)(O.a,{path:"/blog/:id",component:p}),Object(s.jsx)(O.a,{component:b})]})]})})};i.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7a8acaa4.chunk.js.map