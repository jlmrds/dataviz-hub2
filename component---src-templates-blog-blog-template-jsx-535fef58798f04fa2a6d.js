(self.webpackChunkdatavizhub_tuos=self.webpackChunkdatavizhub_tuos||[]).push([[993],{55583:function(e,t,a){"use strict";a.r(t);var n=a(67294),r=a(25444),o=a(52634),s=a(6626),l=a(56292),i=a(20563),u=a.n(i),c=a(27681),d=a(12723),f=a(27505),v=a(23431);t.default=function(e){var t=e.data.allMdx,a=e.pageContext,i=(0,n.useState)(!1),g=i[0],m=i[1];function x(){(m(!g),screen.width<=1280&&!1===g)&&document.querySelector("#tagMenu").scrollIntoView()}return(0,f.s)("blogBackground"),(0,v.tZ)(n.Fragment,null,(0,v.tZ)(l.Z,{title:"Blog",keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),(0,v.tZ)("div",{className:(1!=a.currentPage?"min-h-60":"min-h-100")+" w-full overflow-hidden flex flex-col items-center justify-center text-center relative z-10"},(0,v.tZ)("div",{id:"blogBackground",className:"absolute top-0 left-0 w-full h-full transform scale-110",style:{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url("+d.Z+")",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}}),(0,v.tZ)(u(),{cascade:!0,top:!0,delay:700},(0,v.tZ)("div",{className:"text-black",style:{textShadow:"#fff 0px 0px 5px"}},(0,v.tZ)("h1",{className:"text-6xl font-extrabold"},"Blog"),(0,v.tZ)("p",{className:"text-md font-semibold mt-5 px-5",style:{maxWidth:"500px"}},"“The greatest value of a picture is when it forces us to notice what we never expected to see.” - John W. Tukey"))),(0,v.tZ)(u(),{cascade:!0,top:!0,delay:700},(0,v.tZ)("div",{className:1!==a.currentPage?"hidden":""},(0,v.tZ)(s.Z,{pageContext:a,handleTagMenu:x,tagMenu:g}),(0,v.tZ)("div",{className:"mt-10"},(0,v.tZ)(r.Link,{to:"/blog#read"},(0,v.tZ)(c.Zv,{className:"text-sm bg-gray-700 text-white hover:bg-black"},"Start reading")))))),(0,v.tZ)(o.Z,{allMdx:t,pageContext:a,pageType:"/blog",handleTagMenu:x,tagMenu:g}))}},27505:function(e,t,a){"use strict";a.d(t,{s:function(){return r}});var n=a(67294);function r(e,t,a,r){void 0===t&&(t=!0),void 0===a&&(a=.06),void 0===r&&(r=.05);var o=(0,n.useState)({x:0,y:0}),s=o[0],l=o[1];return(0,n.useEffect)((function(){var n=function(e){var t=e.clientX-s.x,n=e.clientY-s.y;l({x:e.clientX,y:e.clientY});var i=function(e){var t=getComputedStyle(e),a=t.transform||t.MozTransform;if(null==typeof a||!a||"none"==a)return{x:0,y:0};var n=a.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseInt(n[12])||parseInt(n[4]),y:parseInt(n[13])||parseInt(n[5])}}(o);o.style.transform="translate("+(-a*t+i.x)+"px, "+(-r*n+i.y)+"px) scale(1.1)"},o=document.querySelector("#"+e);if(o){o.style.transition="none";var i=o;return!0===t&&(i=o.parentElement),i.addEventListener("mousemove",n),i.addEventListener("mouseleave",(function(){o.style.transition=".5s ease",o.style.top=0,o.style.left=0})),function(){o&&(i.removeEventListener("mousemove",n),i.removeEventListener("mouseleave",(function(){o.style.transition="none"})))}}}),[s]),s}}}]);
//# sourceMappingURL=component---src-templates-blog-blog-template-jsx-535fef58798f04fa2a6d.js.map