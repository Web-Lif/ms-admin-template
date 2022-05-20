"use strict";(self.webpackChunkms_template=self.webpackChunkms_template||[]).push([[110],{63005:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var a=r(67294),n=r(33227),l=r(59685),c=r(1413);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var s=r(27029),m=function(e,t){return a.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:t,icon:o}))};m.displayName="UserOutlined";const i=a.forwardRef(m);const u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};var f=function(e,t){return a.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:t,icon:u}))};f.displayName="LockOutlined";const d=a.forwardRef(f);var p=r(93164);const h="L1n7ELG66j3FuJ82QugE",v="dnx52b6joK3pnb_6BUO0",y="oJ0w23R7z6NYHMz8unRw",E="YtmJSxzOdqCmUgKf1IR3";function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){o=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw n}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const w=function(){var e=(0,l.useNavigate)();(0,a.useEffect)((function(){(0,p.He)()&&e("/")}),[]);var t=b((0,a.useState)(!1),2),r=t[0],c=t[1];return a.createElement("div",{className:E},a.createElement("div",{className:h},a.createElement("div",{className:y},a.createElement(n.ZT.Title,{level:3},"MS Template"),a.createElement(n.ZT.Text,{type:"secondary"},"立志打造成为湖北潜江具有影响力的模板")),a.createElement(n.mQ,{defaultActiveKey:"password",className:v,centered:!0},a.createElement(n.mQ.TabPane,{tab:"账号密码登录",key:"password"},a.createElement(n.l0,{name:"basic",labelCol:{span:0},wrapperCol:{span:24},initialValues:{remember:!0},autoComplete:"off",onFinish:function(t){c(!0),localStorage.setItem("ms-token",JSON.stringify(t)),c(!1),e("/")}},a.createElement(n.l0.Item,{name:"username",rules:[{required:!0,message:"用户名不能为空"}]},a.createElement(n.II,{prefix:a.createElement(i,null),size:"large",placeholder:"请输入用户名"})),a.createElement(n.l0.Item,{name:"password",rules:[{required:!0,message:"账号不能为空"}]},a.createElement(n.II.Password,{prefix:a.createElement(d,null),size:"large",placeholder:"请输入密码"})),a.createElement(n.l0.Item,null,a.createElement(n.l0.Item,{name:"remember",valuePropName:"checked",noStyle:!0},a.createElement(n.XZ,null,"自动登录")),a.createElement("a",{style:{float:"right"}},"忘记密码 ?")),a.createElement(n.l0.Item,null,a.createElement(n.zx,{type:"primary",htmlType:"submit",block:!0,size:"large",loading:r},"登录")))))))}}}]);