"use strict";(self.webpackChunkengineerapart_website=self.webpackChunkengineerapart_website||[]).push([[650],{3402:function(e,t,a){a.d(t,{m:function(){return n}});var l=a(7294);const n=e=>{let{title:t,underline:a,cta:n}=e;return l.createElement("div",{className:"PageHeader-module--page_header_component--5970f page-container flex column pdg-top-l pdg-btm-l txt-light"},l.createElement("h1",{className:"txt-left txt-max-width-xl mrg-btm-xxs"},t),l.createElement("h2",{className:"page-header-underline txt-left txt-max-width-xs mrg-btm-xxs"},a),l.createElement("div",{className:"flex"},n))}},2435:function(e,t,a){a.d(t,{w:function(){return r}});var l=a(5785),n=a(7294);const m={services:[],hireMethod:[],name:"",lastname:"",company:"",phone:"",email:"",message:""},r=()=>{const[e,t]=n.useState(!1),[a,r]=n.useState(!1),[c,s]=n.useState(null),[o,i]=n.useState(m);return{loading:e,error:c,data:o,isSent:a,updateList:(e,t)=>{let a=(0,l.Z)(o[t]);a=-1===a.indexOf(e)?[].concat((0,l.Z)(a),[e]):a.filter((t=>t!==e)),i((e=>({...e,[t]:a})))},update:i,onSubmit:()=>{console.log("submit",o),r(!0)}}}},2868:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return x}});var l=a(7294),n=a(1883),m=a(2492),r=a(3402),c=a(4089),s=a(7913),o=a(318);const i=()=>l.createElement("div",{className:"Calendar-module--calendar_container--00651 gradient-blue-turquioise round-corner-primary",style:{height:"395px"}});var u=a(2435),d="ContactForm-module--form_input--068fd";const p=()=>{const{data:e,onSubmit:t,isSent:a,update:n}=(0,u.w)(),m=e=>{const{name:t,value:a}=e.currentTarget;n((e=>({...e,[t]:a})))};return l.createElement("form",{className:"flex column full-width"},l.createElement("div",{className:"ContactForm-module--form_row--03ded flex justify-between"},l.createElement("input",{onChange:m,className:d+" full-width mrg-btm-xs",name:"name",placeholder:"Name",value:e.name}),l.createElement("input",{onChange:m,className:d+" full-width mrg-btm-xs",name:"lastname",placeholder:"Lastname",value:e.lastname})),l.createElement("input",{onChange:m,className:""+d,name:"company",placeholder:"Company",value:e.company}),l.createElement("input",{onChange:m,className:""+d,name:"phone",placeholder:"Phone",value:e.phone}),l.createElement("input",{onChange:m,className:""+d,name:"email",placeholder:"Email",type:"email",value:e.email}),l.createElement("textarea",{onChange:m,className:""+d,name:"message",placeholder:"Message",cols:30,rows:10,value:e.message}),l.createElement("div",{className:"flex justify-end"},l.createElement("button",{className:"button small primary expand",disabled:a,onClick:e=>{e.preventDefault(),t()}},"Send")))},g=e=>{let{className:t,styles:a}=e;return l.createElement("svg",{id:"Layer_2","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 55.63 43.11",className:t,style:a},l.createElement("g",{id:"Capa_1","data-name":"Capa 1"},l.createElement("path",{d:"M46.87,0H8.76C3.93,0,0,3.93,0,8.76v25.59c0,4.83,3.93,8.76,8.76,8.76H46.87c4.83,0,8.76-3.93,8.76-8.76V8.76c0-4.83-3.93-8.76-8.76-8.76Zm0,1.95c1.32,0,2.56,.39,3.61,1.04L27.53,20.65,5.15,3c1.05-.66,2.29-1.05,3.62-1.05H46.87Zm6.81,32.4c0,3.76-3.06,6.81-6.81,6.81H8.76c-3.76,0-6.81-3.06-6.81-6.81V8.76c0-1.71,.64-3.28,1.69-4.48L26.92,22.64c.18,.14,.39,.21,.6,.21s.42-.07,.59-.2L51.99,4.28c1.05,1.2,1.69,2.76,1.69,4.48v25.59Z"})))};var h=a(7435);const E="contact@engineerapart.com",f=()=>l.createElement("ul",{className:"flex column"},l.createElement("li",{className:"flex align-center mrg-btm-xs",style:{gap:"1em"}},l.createElement("div",{className:"icon-container"},l.createElement(g,{className:"icon-blue",styles:{width:40,height:40}})),l.createElement("a",{href:"mailto:"+E},E)),l.createElement("li",{className:"flex align-center mrg-btm-xs",style:{gap:"1em"}},l.createElement("div",{className:"icon-container"},l.createElement(h.n,{className:"icon-blue",styles:{width:35,height:35}})),l.createElement("a",{href:"https://www.linkedin.com/company/engineerapart"},"LinkedIn")));var x=()=>l.createElement(l.Fragment,null,l.createElement("main",{className:"page"},l.createElement(c.Z,{color:"black",light:!0}),l.createElement(m.B,{light:!0}),l.createElement("section",{className:"bg-black full-width"},l.createElement(r.m,{title:"Our team of experts are ready to help",underline:"Doesn’t matter the problem, If it’s software we can help you.",cta:l.createElement(n.Link,{className:"button primary big",to:"/contact"},"Call the experts")})),l.createElement("section",{className:"page-container mrg-top-xl mrg-btm-l"},l.createElement(o.l,{leftSize:5,rightSize:3,leftColumn:l.createElement("h3",{className:"section-header"},"Meet the experts and grow your teams"),rightColumn:l.createElement("div",{className:"flex column align-start",style:{gap:"2em"}},l.createElement("h4",{className:"section-header-underline"},"We are happy and ready to aid you build your teams of qualified engineers. Doesn't matter the size or stack"),l.createElement("button",{className:"button primary"},"Schedule a call"))})),l.createElement("section",{className:"page-container pdg-btm-xl"},l.createElement(i,null)),l.createElement("section",{className:"page-container mrg-top-xl mrg-btm-xl"},l.createElement(o.l,{alignItems:"start",leftColumn:l.createElement("div",{className:"flex column"},l.createElement("h3",{className:"section-header mrg-btm-xs"},"Or leave a message"),l.createElement("h4",{className:"section-header-underline  mrg-btm-s"},"We will reach out to you to discuss in more detail how we can help you build or grow your software development teams."),l.createElement(f,null)),rightColumn:l.createElement(p,null)}))),l.createElement(s.$,null));const N=()=>l.createElement("title",null,"Contact Page")}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-4e94d170aa428526a1a9.js.map