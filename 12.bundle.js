"use strict";(self.webpackChunkms_template=self.webpackChunkms_template||[]).push([[12,611],{87611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294);const a="CnNzBxLqCuPsMQ2_z9Am";const o=function(){return r.createElement("div",{className:a})}},36549:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var r=n(35666),a=n.n(r),o=n(67294),c=n(59685),l=n(81535),i=n(9807),u=n(24616),s=n(25592),f=n(73218),m=n(47711),v=n(2825),d=n(76570),y=n(64756),p=n(70438),h=n.n(p),E=n(62413),k=n(89317);const b="EvWdJGpivEmL52xNn91e",g="QGjO9kCP0pQLzNzJzLiT",S="twzCnjx_TosRBmIce2wg",w="h5dEn9QMw0kWHYcdN5ah",T="mb3_Hjvo95IUZ3xR8fIm";var O=function(){return o.createElement(o.Fragment,null,o.createElement(i.mQ,{centered:!0},o.createElement(i.mQ.TabPane,{tab:"消息(4)",key:"message",className:S},"消息内容"),o.createElement(i.mQ.TabPane,{tab:"代办(10)",key:"task",className:S},"代办内容")),o.createElement("div",{className:T},o.createElement("div",null,"清空通知"),o.createElement("div",null,"查看更多")))};const I=function(e){var t=e.count,n=o.createElement(i.v2,null,o.createElement(O,null));return o.createElement(i.Lt,{trigger:["click"],overlay:n,placement:"bottomLeft",overlayClassName:g},o.createElement("div",{className:w},o.createElement(i.Ct,{count:t,className:b},o.createElement(k.Z,null))))};var x=n(87611),C=n(48150),N=n(93164);const P="BegdgceivVMTNN0qsthR",j="Fjf_yZOiH1odFrqpPAca",L="AfOexQKn3gFDyOBUMf4S",R="d61RvbWS_xQvpMzAJK1l";function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}var Y=function(e){var t=e.name;return o.createElement(i.Lt,{overlay:o.createElement(i.v2,null,o.createElement(i.v2.Item,{key:"logout",icon:o.createElement(u.Z,null)},o.createElement("div",{role:"button","aria-hidden":"true",onClick:function(){(0,N.iA)(),window.location.href="/User/Login"}},"退出登录")))},o.createElement("div",{className:P},t))},q=function(e,t){return e.findIndex((function(e){return(e.key||e.path)===t}))},H=function(e,t){e.forEach((function(e){var n=t||"首页";/^\/.*/.test(n)&&(n=null==n?void 0:n.substring(1)),e.fullName=n,e.children&&H(e.children,"".concat(t||"","/").concat(e.name))}))};const K=function(e){var t=e.children,n=(0,c.useLocation)(),r=z((0,o.useState)({name:"",title:"",menus:[]}),2),u=r[0],p=r[1],k=z((0,o.useState)([{path:"/",name:"首页",closable:!1}]),2),b=k[0],g=k[1],S=z((0,o.useState)("/"),2),w=S[0],T=S[1];(0,o.useEffect)((function(){window.history.pushState({},"","".concat(w))}),[w]);var O=z((0,o.useState)(),2),P=O[0],A=O[1],Z=(0,o.useRef)(null),M=(0,o.useRef)(null),K=function(e){var t=[];return e.forEach((function(e,n){var r;e.children?(r=t).splice.apply(r,[n,0].concat(B(K(e.children)))):t.push(e)})),t},U=z((0,o.useState)([]),2),J=U[0],W=U[1];(0,o.useEffect)((function(){(0,E.OY)("ms-tabs").then((function(e){e&&(null==e?void 0:e.length)>0&&g(e)})),(0,E.OY)("ms-active-key").then((function(e){e&&T(e)}));var e=function(e){var t;"/"===e.key&&(e.stopPropagation(),null===(t=M.current)||void 0===t||t.focus())};return window.addEventListener("keyup",e),function(){window.removeEventListener("keyup",e)}}),[]),(0,o.useEffect)((function(){(0,E.xQ)("ms-tabs",b.map((function(e){return F({},e,{onClick:void 0})})))}),[b]),(0,o.useEffect)((function(){console.log(w),(0,E.xQ)("ms-active-key",w)}),[w]);var D,G={open:function(e){var t=e.item,n=e.active,r=void 0===n||n,a=e.params,o=t.key||t.path;-1===q(b,o||"")&&g(B(b).concat([F({},t,{params:a})])),r&&T(o||"/")},close:function(e){var t=e.key,n=e.goback,r=q(b,t);-1!==r&&(b.splice(r,1),g(B(b))),n&&T(n)},active:function(e){var t=e.key,n=e.params,r=q(b,t);b[r].params=n,g(B(b)),T(t)},status:"passive"},V=function(){return"multi"===N.vc.tabs&&"side"===N.vc.layout},$=[],X=function(e,t){var n,r,a=function(){t&&T(t),g(e)},o=$.find((function(e){return e.key===w}));try{var c,l,i,u=null==o||null===(c=o.hook)||void 0===c||null===(l=c.current)||void 0===l||null===(i=l.onBeforeCloseTab)||void 0===i?void 0:i.call(l);n=u,(null!=(r=Promise)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r)?u.then((function(e){!1!==e&&a()})).catch((function(e){a(),console.error("关闭标签页错误 - [".concat(w,"]"),e)})):!1!==u&&a()}catch(e){a(),console.error("关闭标签页错误 - [".concat(w,"]"),e)}};return o.createElement(o.Fragment,null,o.createElement(y.Z,{ref:Z}),o.createElement(l.ZP,{className:R,title:u.title,layout:N.vc.layout,logo:N.vc.logo,navTheme:N.vc.navTheme,headerTheme:N.vc.headerTheme,location:V()?{pathname:w.toString()}:n,fixedHeader:!0,fixSiderbar:!0,menu:{request:(D=a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.cb)();case 3:return t=e.sent,H(t.menus),p(t),n=K(t.menus).map((function(e){return{key:e.path||e.key||"",description:e.fullName,title:e.name||"",data:e}})),W(n),e.abrupt("return",t.menus);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=D.apply(e,t);function o(e){Q(a,n,r,o,c,"next",e)}function c(e){Q(a,n,r,o,c,"throw",e)}o(void 0)}))})},headerContentRender:function(){if(V()){return o.createElement(i.mQ,{type:"editable-card",hideAdd:!0,className:L,activeKey:w,renderTabBar:function(e,t){return o.createElement(t,_({},e),(function(e){return function(e){return o.createElement(i.Lt,{overlay:o.createElement(i.v2,null,o.createElement(i.v2.Item,{key:"reload",icon:o.createElement(s.Z,null),onClick:function(){var t,n;null===(t=Z.current)||void 0===t||t.continuousStart();var r=0;(null==P?void 0:P.key)===e.key&&(r+=((null==P?void 0:P.count)||0)+1),A({key:(null===(n=e.key)||void 0===n?void 0:n.toString())||"",count:r}),setTimeout((function(){var e;null===(e=Z.current)||void 0===e||e.complete()}),0)}},"重新加载"),o.createElement(i.v2.Item,{key:"closeOther",icon:o.createElement(f.Z,null),onClick:function(){var t,n=b.filter((function(t){var n=t.key||t.path||"";return!!["/",e.key].includes(n)}));X(n,(null===(t=e.key)||void 0===t?void 0:t.toString())||"")}},"关闭其他标签页"),o.createElement(i.v2.Item,{key:"closeRight",icon:o.createElement(m.Z,null),onClick:function(){var t,n,r=q(b,(null===(t=e.key)||void 0===t?void 0:t.toString())||""),a=b.slice(0,r+1);X(a,(null===(n=e.key)||void 0===n?void 0:n.toString())||"")}},"关闭右侧标签页"),o.createElement(i.v2.Item,{key:"closeForce",icon:o.createElement(v.Z,null),onClick:function(){var t,n=q(b,(null===(t=e.key)||void 0===t?void 0:t.toString())||"");if(-1!==n){var r;if(b.splice(n,1),g(B(b)),b.length>0){var a=b[b.length-1];r=a.key||a.path}T(r||"/")}}},"强制关闭标签")),trigger:["contextMenu"]},e)}(e)}))},onEdit:function(e,t){if("remove"===t){var n=q(b,e);if(-1!==n){var r,a=B(b);if(a.splice(n,1),a.length>0){var o=a[a.length-1];r=o.key||o.path}X(a,r||"/")}}},onChange:function(e){g(B(b)),T(e)}},b.map((function(e){return o.createElement(i.mQ.TabPane,{tab:e.name,key:e.key||e.path,closable:e.closable})})))}return null},rightContentRender:function(){return o.createElement(i.T,null,o.createElement(i.Ph,{ref:M,showSearch:!0,value:"",style:{width:250},filterOption:function(e,t){var n,r=null==t||null===(n=t.children)||void 0===n?void 0:n[0],a=h()(r,{style:h().STYLE_FIRST_LETTER}),o=h()(e,{style:h().STYLE_FIRST_LETTER});return new RegExp("^".concat(o.join(""),".*")).test(a.join(""))},onSelect:function(e){var t=J.find((function(t){return t.key===e}));(null==t?void 0:t.data)&&G.open({item:t.data})},suffixIcon:o.createElement(d.Z,null)},J.map((function(e){return o.createElement(i.Ph.Option,{key:e.key,value:e.key},e.title," ",o.createElement("br",null),o.createElement(i.ZT.Text,{type:"secondary"},e.description))}))),o.createElement(I,{count:20}),o.createElement(Y,{name:u.name}))},menuItemRender:function(e,t){var n=e.path;if(n){if("single"===N.vc.tabs)return o.createElement(c.Link,{to:n},t);if(V()){return o.createElement("div",{role:"link","aria-hidden":"true",onClick:function(){var t=e.key||e.path;-1===b.findIndex((function(e){var n=e.key||e.path;return t===n}))&&g(B(b).concat([e])),T(t||"")}},t)}}return t}},function(){if(V()){return o.createElement(i.mQ,{className:j,renderTabBar:function(){return o.createElement("div",null)},activeKey:w},b.map((function(e){var t=window.g_routers.find((function(t){return t.path===e.path})),n=(null==t?void 0:t.component)||x.default,r=e.key||e.path||"";G.status=r===w?"active":"passive";var a=(0,o.createRef)();return $.push({key:e.key||e.path,hook:a}),o.createElement(i.mQ.TabPane,{tab:e.name,key:e.key||e.path,closable:e.closable,forceRender:!0},o.createElement(o.Suspense,{fallback:o.createElement(C.Z,null)},o.createElement(n,{key:(null==P?void 0:P.key)===r?P.count:void 0,tabs:F({},G,{params:e.params,hooks:a})})))})))}return t}()))}}}]);