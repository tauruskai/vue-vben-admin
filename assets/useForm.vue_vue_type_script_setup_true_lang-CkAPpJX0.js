var g=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(t,o,e)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,v=(t,o)=>{for(var e in o||(o={}))h.call(o,e)&&_(t,e,o[e]);if(u)for(var e of u(o))x.call(o,e)&&_(t,e,o[e]);return t};var C=(t,o,e)=>new Promise((s,i)=>{var m=a=>{try{r(e.next(a))}catch(n){i(n)}},f=a=>{try{r(e.throw(a))}catch(n){i(n)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(m,f);r((e=e.apply(t,o)).next())});import{_ as k}from"./BasicForm.vue_vue_type_script_setup_true_lang-Bg5NxOYR.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BadE6ltK.js";import"./componentMap-C2ZbIOVz.js";import{u as w}from"./useForm-Dlm1Aq8N.js";import b from"./JsonModal-DLXhtVdP.js";import{M as y}from"./antd-BmrhB3rb.js";import{d as F,f as j,r as B,c as O,Z as R,a8 as T,a9 as D,k as M,u as p,ac as G}from"./vue-BjERyvPm.js";const A=F({__name:"useForm",setup(t,{expose:o}){const e=j(null),s=B({formModel:{},formConfig:{},visible:!1}),i=O(()=>v({},s.formConfig)),m=c=>{s.formConfig=c,s.visible=!0},[f,{validate:r}]=w(),a=()=>{s.visible=!1},n=()=>C(this,null,function*(){var l,d;let c=yield r();(d=(l=e.value)==null?void 0:l.showModal)==null||d.call(l,c)});return o({showModal:m}),(c,l)=>(R(),T(p(y),{title:"预览(不支持布局)",open:s.visible,onOk:n,onCancel:a,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:D(()=>[M(p(k),G(i.value,{onRegister:p(f)}),null,16,["onRegister"]),M(b,{ref_key:"jsonModal",ref:e},null,512)]),_:1},8,["open"]))}});export{A as _};
