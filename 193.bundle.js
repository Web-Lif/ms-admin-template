(self.webpackChunkms_template=self.webpackChunkms_template||[]).push([[193],{24909:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=24909,e.exports=t},28935:(e,t,n)=>{"use strict";n.r(t);var r=n(67294),a=n(20745),l=n(59685),u=n(93164),c=(n(92337),r.lazy((function(){return Promise.all([n.e(281),n.e(523),n.e(751),n.e(394),n.e(92),n.e(530),n.e(355),n.e(610),n.e(666),n.e(227),n.e(352),n.e(460),n.e(808),n.e(644),n.e(95),n.e(247),n.e(385),n.e(234),n.e(930),n.e(520),n.e(86)]).then(n.bind(n,67536))})));const o=function(){return e=(0,l.useLocation)(),(0,u.QN)().includes(e.pathname)?r.createElement(r.Fragment,null,r.createElement(l.Outlet,null)):(0,u.He)()?r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(c,null,r.createElement(l.Outlet,null))):r.createElement(l.Navigate,{to:"/User/Login",replace:!0});var e};var s=n(48150),i=r.lazy((function(){return n.e(584).then(n.bind(n,41584))})),m=r.lazy((function(){return Promise.all([n.e(281),n.e(523),n.e(751),n.e(394),n.e(92),n.e(530),n.e(355),n.e(610),n.e(666),n.e(227),n.e(352),n.e(460),n.e(808),n.e(644),n.e(95),n.e(247),n.e(385),n.e(234),n.e(930),n.e(279)]).then(n.bind(n,85345))})),p=r.lazy((function(){return Promise.all([n.e(281),n.e(523),n.e(751),n.e(394),n.e(92),n.e(530),n.e(355),n.e(610),n.e(666),n.e(227),n.e(352),n.e(460),n.e(808),n.e(644),n.e(95),n.e(247),n.e(385),n.e(234),n.e(930),n.e(273)]).then(n.bind(n,90173))})),f=[{path:"/",component:i},{path:"/User/Login",component:m},{path:"/welcome",component:p}],v=[],d=r.lazy((function(){return n.e(596).then(n.bind(n,90596))}));const h=function(e){var t=e.routers,n=void 0===t?[]:t;return r.createElement(l.BrowserRouter,{basename:"/ms-template"},r.createElement(l.Routes,null,r.createElement(l.Route,{path:"/",element:r.createElement(o,null)},r.createElement(l.Route,{index:!0,element:r.createElement(r.Suspense,{fallback:r.createElement(s.Z,null)},r.createElement(i,null))}),r.createElement(l.Route,{path:"User/Login",element:r.createElement(r.Suspense,{fallback:r.createElement(s.Z,null)},r.createElement(m,null))}),r.createElement(l.Route,{path:"welcome",element:r.createElement(r.Suspense,{fallback:r.createElement(s.Z,null)},r.createElement(p,null))}),n.map((function(e){var t=e.component;return r.createElement(l.Route,{path:e.path,key:e.path,element:r.createElement(r.Suspense,{fallback:r.createElement(s.Z,null)},r.createElement(t,null))})}))),r.createElement(l.Route,{path:"*",element:r.createElement(r.Suspense,{fallback:r.createElement("div",null)},r.createElement(d,null))})))};if(window.g_routers=f.concat(v),document.querySelector("#root")){(0,a.s)(document.querySelector("#root")).render(r.createElement(h,{routers:v}))}else{var E=document.createElement("div");E.setAttribute("id","root"),E.style.width="100%",E.style.height="100%",document.body.appendChild(E),(0,a.s)(E).render(r.createElement(h,{routers:v}))}},93164:(e,t,n)=>{"use strict";n.d(t,{He:()=>m,QN:()=>s,cb:()=>i,iA:()=>p,vc:()=>f});var r=n(35666),a=n.n(r),l=n(62413);function u(e,t,n,r,a,l,u){try{var c=e[l](u),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(r,a)}var c,o,s=function(){return["/User/Login"]},i=(c=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"系统管理员",title:"MS Template",menus:[{path:"/",name:"欢迎页面",children:[{path:"/one/welcome",name:"第一个",children:[{path:"/welcome",name:"第二个"},{path:"/test/test-react",name:"React 微前端"},{path:"/test/test-vue",name:"Vue 微前端"}]}]}]});case 1:case"end":return e.stop()}}),e)})),o=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=c.apply(e,t);function l(e){u(a,n,r,l,o,"next",e)}function o(e){u(a,n,r,l,o,"throw",e)}l(void 0)}))},function(){return o.apply(this,arguments)}),m=function(){return!!localStorage.getItem("ms-token")},p=function(){localStorage.clear(),(0,l.O5)()},f={layout:"side",navTheme:"dark",headerTheme:"dark",tabs:"multi",logo:"https://avatars.githubusercontent.com/u/91562499?s=200&v=4"}},48150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(64756);const l=function(){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){var t;return null===(t=e.current)||void 0===t||t.continuousStart(),function(){var t;null===(t=e.current)||void 0===t||t.complete()}}),[]),r.createElement(r.Fragment,null,r.createElement(a.Z,{ref:e}))}},62413:(e,t,n)=>{"use strict";n.d(t,{O5:()=>m,OY:()=>s,xQ:()=>i});var r=n(35666),a=n.n(r);function l(e,t,n,r,a,l,u){try{var c=e[l](u),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function c(e){l(u,r,a,c,o,"next",e)}function o(e){l(u,r,a,c,o,"throw",e)}c(void 0)}))}}var c=new(n(49520).ZP)("ms-db");c.version(1).stores({"ms-config":"id,value"});var o,s=(o=u(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.table("ms-config").where("id").equals(t).first();case 2:return n=e.sent,e.abrupt("return",null==n?void 0:n.value);case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}),i=function(){var e=u(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.table("ms-config").put({id:t,value:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.table("ms-config").clear();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);