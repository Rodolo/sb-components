import{j as z}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const f=({allCaps:g,color:x,label:l,fontColor:h,size:L="normal"})=>z.jsx("span",{className:`${L} ${x} label`,style:{color:`${h}`},children:g?l.toUpperCase():l});f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{allCaps:{required:!1,tsType:{name:"boolean"},description:"Text in Caps"},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Text to display"},fontColor:{required:!1,tsType:{name:"string"},description:"Color of the Font"},label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}}}};const S={title:"My Label",component:f,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"}}},e={args:{allCaps:!1,label:"Basic Label"}},a={args:{allCaps:!0,label:"All Caps Label",size:"normal"}},r={args:{allCaps:!1,color:"text-secondary",label:"Secondary Label",size:"h2"}},s={args:{allCaps:!1,label:"Custom Color Label",fontColor:"blue",size:"h3"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    allCaps: false,
    label: 'Basic Label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    allCaps: true,
    label: 'All Caps Label',
    size: 'normal'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    allCaps: false,
    color: "text-secondary",
    label: 'Secondary Label',
    size: 'h2'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var C,y,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    allCaps: false,
    label: 'Custom Color Label',
    fontColor: 'blue',
    size: 'h3'
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,s as CustomColor,r as Secondary,q as __namedExportsOrder,S as default};
