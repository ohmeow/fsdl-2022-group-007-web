(()=>{var e={2330:(e,t,r)=>{var o={"./pwa-action-sheet.entry.js":[9225,736],"./pwa-camera-modal-instance.entry.js":[497,736],"./pwa-camera-modal.entry.js":[1539,736],"./pwa-camera.entry.js":[4208,736],"./pwa-toast.entry.js":[8369,736]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return r.e(t[1]).then((()=>r(n)))}n.keys=()=>Object.keys(o),n.id=2330,e.exports=n},6618:(e,t,r)=>{"use strict";r(8964),r(702);var o=r(1957),n=r(1947),a=r(499),i=r(9835);function s(e,t,r,o,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const c=(0,i.aZ)({name:"App"});var l=r(1639);const u=(0,l.Z)(c,[["render",s]]),p=u;var f=r(3340),d=r(1809);const h=(0,f.h)((()=>{const e=(0,d.WB)();return e}));var v=r(8339);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(387)]).then(r.bind(r,5387)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(57)]).then(r.bind(r,2057))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=b,y=(0,f.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function w(e,t){const r=e(p);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const i=(0,a.Xl)("function"===typeof y?await y({store:o}):y);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}var g=r(6827),j=r(6950);const O={config:{},plugins:{Notify:g.Z,Loading:j.Z}},P="";async function _({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===n&&l<o.length;l++)try{await o[l]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:P})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.mount("#q-app"))}w(o.ri,O).then((e=>Promise.allSettled([Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,2939)),Promise.resolve().then(r.bind(r,3786))]).then((t=>{const r=t.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)})).filter((e=>"function"===typeof e));_(e,r)}))))},1569:(e,t,r)=>{"use strict";r.r(t),r.d(t,{api:()=>i,default:()=>s});var o=r(3340),n=r(9981),a=r.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2939:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var o=r(7226);const n=()=>{(0,o.q)(window)}},3786:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var o=r(3340),n=r(6827);const a=(0,o.xr)((async()=>{n.Z.setDefaults({position:"top-right",timeout:3500,progress:!0,textColor:"white",actions:[{icon:"close",color:"white"}]})}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i["default"]=()=>o,r.d(a,i),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{57:"b42fd726",387:"f0ffa266",862:"f14c2a4f"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"6a197b3f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="course_copilot_web:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var f=(t,r)=>{s.onerror=s.onload=null,clearTimeout(d);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,c=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,c]=o,l=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(t&&t(o);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkcourse_copilot_web"]=globalThis["webpackChunkcourse_copilot_web"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(6618)));o=r.O(o)})();