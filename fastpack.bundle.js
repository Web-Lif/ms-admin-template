(()=>{var e,t,r,n,o,a,i,l={},d={};function u(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return l[e].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=l,u.F={},u.E=e=>{Object.keys(u.F).map((t=>{u.F[t](e)}))},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);u.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,u.d(o,a),o},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>e+".bundle.js",u.miniCssF=e=>e+"."+{14:"c988a4a8612f0de739d9",245:"54e45b0253e8e0c5eebd",357:"f7505f5c7b089c9b0068",566:"3a1a024ed74a66e0e3b8"}[e]+".css",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="ms-admin-template:",u.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var s=d[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var p=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var t=u.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),o=e=>new Promise(((t,r)=>{var n=u.miniCssF(e),o=u.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=l,o.parentNode.removeChild(o),n(d)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),a={867:0},u.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{14:1,245:1,357:1,566:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={867:0};u.f.j=(t,r)=>{var n=u.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(14!=t){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=u.p+u.u(t),i=new Error;u.l(a,(r=>{if(u.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0},u.F.j=t=>{if((!u.o(e,t)||void 0===e[t])&&14!=t){e[t]=null;var r=document.createElement("link");u.nc&&r.setAttribute("nonce",u.nc),r.rel="prefetch",r.as="script",r.href=u.p+u.u(t),document.head.appendChild(r)}};var t=(t,r)=>{var n,o,[a,i,l]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);if(l)l(u)}for(t&&t(r);d<a.length;d++)o=a[d],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkms_admin_template=self.webpackChunkms_admin_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i={74:[885,449,918,450,850,460,808,253,508,764,557,773,488,136,357,566,505,245,565]},u.f.prefetch=(e,t)=>Promise.all(t).then((()=>{var t=i[e];Array.isArray(t)&&t.map(u.E)})),Promise.all([u.e(14),u.e(30),u.e(74)]).then(u.bind(u,2074))})();