var f=(e,m,a)=>new Promise((u,i)=>{var d=t=>{try{r(a.next(t))}catch(n){i(n)}},l=t=>{try{r(a.throw(t))}catch(n){i(n)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(d,l);r((a=a.apply(e,m)).next())});import{l as v,C as g,a as b,c as C}from"./entry/index-OSvE6z0v-1715666910873.js";import{C as I}from"./index-tH7A13tx.js";import{_ as S}from"./BasicForm.vue_vue_type_script_setup_true_lang-Bg5NxOYR.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BadE6ltK.js";import"./componentMap-C2ZbIOVz.js";import{u as x}from"./useForm-Dlm1Aq8N.js";import{a as A}from"./account-B25hxS_h.js";import{u as w}from"./upload-D5udJuXz.js";import{h as B}from"./header-OZa5fSDc.js";import{b as U}from"./data-CMLH8mPi.js";import{d as V,o as k,c as y,a7 as M,Z as N,a8 as R,a9 as p,k as s,u as o,$ as h,G as F,a2 as G,a3 as T}from"./vue-BjERyvPm.js";import{U as $,V as _}from"./antd-BmrhB3rb.js";import"./index-C3yRS3Bf.js";import"./useWindowSizeFn-DpHSiK5q.js";import"./base64Conver-bBv-IO2K.js";import"./FormItem.vue_vue_type_script_lang-GIh9OUlw.js";import"./helper-ySEuMwrK.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-A3sbsMK-.js";import"./index-Bz62ArXL.js";import"./uuid-D0SLUWHI.js";import"./useSortable-C0cTzLdk.js";import"./download-B8HJkjAl.js";import"./index-DJtCR5Zx.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BZLj33Dx.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-C44fXN_-.js";const E=e=>(G("data-v-54663cbe"),e=e(),T(),e),P={class:"change-avatar"},W=E(()=>h("div",{class:"mb-2"},"头像",-1)),Z=V({__name:"BaseSetting",setup(e){const{createMessage:m}=b(),a=v(),[u,{setFieldsValue:i}]=x({labelWidth:120,schemas:U,showActionButtonGroup:!1});k(()=>f(this,null,function*(){const t=yield A();i(t)}));const d=y(()=>{const{avatar:t}=a.getUserInfo;return t||B});function l({src:t,data:n}){const c=a.getUserInfo;c.avatar=t,a.setUserInfo(c)}function r(){m.success("更新成功！")}return(t,n)=>{const c=M("a-button");return N(),R(o(g),{title:"基本设置",canExpand:!1},{default:p(()=>[s(o($),{gutter:24},{default:p(()=>[s(o(_),{span:14},{default:p(()=>[s(o(S),{onRegister:o(u)},null,8,["onRegister"])]),_:1}),s(o(_),{span:10},{default:p(()=>[h("div",P,[W,s(o(I),{uploadApi:o(w),value:d.value,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:l,width:"150"},null,8,["uploadApi","value"])])]),_:1})]),_:1}),s(c,{type:"primary",onClick:r},{default:p(()=>[F(" 更新基本信息 ")]),_:1})]),_:1})}}}),ht=C(Z,[["__scopeId","data-v-54663cbe"]]);export{ht as default};
