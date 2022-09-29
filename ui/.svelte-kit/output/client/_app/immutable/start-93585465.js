import{S as Ge,i as We,s as He,a as Me,e as z,c as Xe,b as W,g as ie,t as F,d as le,f as K,h as x,j as Ye,o as be,k as Qe,l as Ze,m as et,n as ge,p as C,q as tt,r as nt,u as rt,v as H,w as Se,x as M,y as X,z as De}from"./chunks/index-9f68fa51.js";import{g as Ce,f as qe,s as G,a as ve,b as at,i as st}from"./chunks/singletons-d80b9215.js";const ot=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),it=function(r,e){return new URL(r,e).href},Ve={},se=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=it(o,c),o in Ve)return;Ve[o]=!0;const d=o.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":ot,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Be{constructor(e,t){this.status=e,this.location=t}}function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const c of ft){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(r,o),dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(r){let e=5381,t=r.length;if(typeof r=="string")for(;t;)e=e*33^r.charCodeAt(--t);else for(;t;)e=e*33^r[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;oe.delete(c)}return Re(r,e)};const oe=new Map;function ht(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&oe.set(e,{body:n,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(n,f))}return Re(r,t)}function mt(r,e){const t=oe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(r)}return Re(r,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(r){const e=[],t=[];let c=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((d,n,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map(($,S)=>{if(S%2){const N=_t.exec($);if(!N)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,j,T,q]=N;return e.push(T),t.push(q),j?"(.*?)":"([^/]+?)"}return b&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function yt(r,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],w=r[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}o[n]=w}return o}function bt(r,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:$,names:S,types:N}=gt(f),j={id:f,exec:T=>{const q=$.exec(T);if(q)return yt(q,S,N,c)},errors:[1,...b||[]].map(T=>r[T]),layouts:[0,..._||[]].map(n),leaf:d(w)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const w=f<0;return w&&(f=~f),[w,r[f]]}function n(f){return f===void 0?f:[o.has(f),r[f]]}}function vt(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=z()},l(n){e&&Se(e.$$.fragment,n),t=z()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&2&&(w.form=n[1]),o!==(o=n[0][0])){if(e){ie();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&F(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function kt(r){let e,t,c;var o=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Et]},$$scope:{ctx:n}}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=z()},l(n){e&&Se(e.$$.fragment,n),t=z()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&4&&(w.data=n[2]),f&523&&(w.$$scope={dirty:f,ctx:n}),o!==(o=n[0][0])){if(e){ie();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&F(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Et(r){let e,t,c;var o=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=new o(d(r))),{c(){e&&H(e.$$.fragment),t=z()},l(n){e&&Se(e.$$.fragment,n),t=z()},m(n,f){e&&M(e,n,f),W(n,t,f),c=!0},p(n,f){const w={};if(f&8&&(w.data=n[3]),f&2&&(w.form=n[1]),o!==(o=n[0][1])){if(e){ie();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),le()}o?(e=new o(d(n)),H(e.$$.fragment),K(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&F(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Je(r){let e,t=r[5]&&ze(r);return{c(){e=Qe("div"),t&&t.c(),this.h()},l(c){e=Ze(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=et(e);t&&t.l(o),o.forEach(x),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(c,o){W(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=ze(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function ze(r){let e;return{c(){e=tt(r[6])},l(t){e=nt(t,r[6])},m(t,c){W(t,e,c)},p(t,c){c&64&&rt(e,t[6])},d(t){t&&x(e)}}}function St(r){let e,t,c,o,d;const n=[kt,vt],f=[];function w(b,$){return b[0][1]?0:1}e=w(r),t=f[e]=n[e](r);let _=r[4]&&Je(r);return{c(){t.c(),c=Me(),_&&_.c(),o=z()},l(b){t.l(b),c=Xe(b),_&&_.l(b),o=z()},m(b,$){f[e].m(b,$),W(b,c,$),_&&_.m(b,$),W(b,o,$),d=!0},p(b,[$]){let S=e;e=w(b),e===S?f[e].p(b,$):(ie(),F(f[S],1,1,()=>{f[S]=null}),le(),t=f[e],t?t.p(b,$):(t=f[e]=n[e](b),t.c()),K(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,$):(_=Je(b),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(b){d||(K(t),d=!0)},o(b){F(t),d=!1},d(b){f[e].d(b),b&&x(c),_&&_.d(b),b&&x(o)}}}function Rt(r,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ye(c.page.notify);let _=!1,b=!1,$=null;return be(()=>{const S=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,$=document.title||"untitled page"))});return t(4,_=!0),S}),r.$$set=S=>{"stores"in S&&t(7,c=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,d=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,w=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&c.page.set(o)},[d,n,f,w,_,b,$,c,o]}class $t extends Ge{constructor(e){super(),We(this,e,Rt,St,He,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt={},ce=[()=>se(()=>import("./chunks/0-a2e1d50c.js"),["chunks\\0-a2e1d50c.js","components\\layout.svelte-743e6c5c.js","chunks\\index-9f68fa51.js"],import.meta.url),()=>se(()=>import("./chunks/1-80168ce3.js"),["chunks\\1-80168ce3.js","components\\error.svelte-67ed5395.js","chunks\\index-9f68fa51.js","chunks\\singletons-d80b9215.js"],import.meta.url),()=>se(()=>import("./chunks/2-b299848e.js"),["chunks\\2-b299848e.js","components\\pages\\_page.svelte-4391e8c1.js","chunks\\index-9f68fa51.js"],import.meta.url)],Pt=[],Ot={"":[2]},jt={handleError:({error:r})=>(console.error(r),{message:"Internal Error"})},It="/__data.js",xe="sveltekit:scroll",J="sveltekit:index",ne=bt(ce,Pt,Ot,Lt),ke=ce[0],Ee=ce[1];ke();Ee();let ee={};try{ee=JSON.parse(sessionStorage[xe])}catch{}function ye(r){ee[r]=ve()}function Ut({target:r,base:e,trailing_slash:t}){var Ne;const c=[],o={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,$=null,S=!1,N,j=(Ne=history.state)==null?void 0:Ne[J];j||(j=Date.now(),history.replaceState({...history.state,[J]:j},"",location.href));const T=ee[j];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let q=!1,V,$e;function Le(){if(!$){const a=new URL(location.href);$=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),$=null,S=!1})}return $}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,Ce(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=Ue(i),o.id=i.id,o.promise}async function Oe(a,i,p,s,l){var v,k;const h=$e={};let m=a&&await Ue(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await te({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Q(i),!1;if(i=(a==null?void 0:a.url)||i,$e!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await te({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await G.updated.check()&&await Q(i);if(_=!0,s&&s.details){const{details:y}=s,g=y.replaceState?0:1;y.state[J]=j+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){n=m.state,m.props.page&&(m.props.page.url=i);const y=ae();N.$set(m.props),y()}else je(m);if(s){const{scroll:y,keepfocus:g}=s;if(!g){const E=document.body,I=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?E.setAttribute("tabindex",I):E.removeAttribute("tabindex")}if(await De(),w){const E=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):E?E.scrollIntoView():scrollTo(0,0)}}else await De();o.promise=null,o.id=null,w=!0,m.props.page&&(V=m.props.page),l&&l(),_=!1}function je(a){var l,h;n=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),V=a.props.page;const p=ae();N=new $t({target:r,props:{...a.props,stores:G},hydrate:!0}),p();const s={from:null,to:re("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(s)),f=!0}async function Y({url:a,params:i,branch:p,status:s,error:l,route:h,form:m}){var I;const v=p.filter(Boolean),k={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map(L=>L.node.component)}};m!==void 0&&(k.props.form=m);let y={},g=!V;for(let L=0;L<v.length;L+=1){const U=v[L];y={...y,...U.data},(g||!n.branch.some(A=>A===U))&&(k.props[`data_${L}`]=y,g=g||Object.keys((I=U.data)!=null?I:{}).length>0)}if(g||(g=Object.keys(V.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==l||g){k.props.page={error:l,params:i,routeId:h&&h.id,status:s,url:a,data:g?y:V.data};const L=(U,A)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ue({loader:a,parent:i,url:p,params:s,routeId:l,server_data_node:h}){var y,g,E,I,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let U=function(...u){for(const R of u){const{href:O}=new URL(R,p);v.dependencies.add(O)}};const A={};for(const u in s)Object.defineProperty(A,u,{get(){return v.params.add(u),s[u]},enumerable:!0});const B={routeId:l,params:A,data:(g=h==null?void 0:h.data)!=null?g:null,url:ut(p,()=>{v.url=!0}),async fetch(u,R){let O;typeof u=="string"?O=u:(O=u.url,R={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...R});const P=new URL(O,p).href;return U(P),f?mt(P,R):ht(O,P,R)},setHeaders:()=>{},depends:U,parent(){return v.parent=!0,i()}};Object.defineProperties(B,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(E=await k.shared.load.call(null,B))!=null?E:null}return{node:k,loader:a,server:h,shared:(I=k.shared)!=null&&I.load?{type:"data",data:m,uses:v}:null,data:(L=m!=null?m:h==null?void 0:h.data)!=null?L:null}}function Ie(a,i,p){if(S)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const s of a.params)if(p.params.has(s))return!0;for(const s of p.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(a,i){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ue({id:a,invalidating:i,url:p,params:s,route:l}){var B;if(o.id===a&&o.promise)return o.promise;const{errors:h,layouts:m,leaf:v}=l,k=n.url&&{url:a!==n.url.pathname+n.url.search,params:Object.keys(s).filter(u=>n.params[u]!==s[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const E=y.reduce((u,R,O)=>{var D;const P=n.branch[O],Z=!!(R!=null&&R[0])&&((P==null?void 0:P.loader)!==R[1]||Ie(k,u.some(Boolean),(D=P.server)==null?void 0:D.uses));return u.push(Z),u},[]);if(E.some(Boolean)){try{g=await Fe(p,E)}catch(u){return te({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const I=g==null?void 0:g.nodes;let L=!1;const U=y.map(async(u,R)=>{var D;if(!u)return;const O=n.branch[R],P=I==null?void 0:I[R];if((!P||P.type==="skip")&&u[1]===(O==null?void 0:O.loader)&&!Ie(k,L,(D=O.shared)==null?void 0:D.uses))return O;if(L=!0,(P==null?void 0:P.type)==="error")throw P;return ue({loader:u[1],url:p,params:s,routeId:l.id,parent:async()=>{var Te;const me={};for(let _e=0;_e<R;_e+=1)Object.assign(me,(Te=await U[_e])==null?void 0:Te.data);return me},server_data_node:de(P===void 0&&u[0]?{type:"skip"}:P!=null?P:null,O==null?void 0:O.server)})});for(const u of U)u.catch(()=>{});const A=[];for(let u=0;u<y.length;u+=1)if(y[u])try{A.push(await U[u])}catch(R){if(R instanceof Be)return{type:"redirect",location:R.location};let O=500,P;for(I!=null&&I.includes(R)?(O=(B=R.status)!=null?B:O,P=R.error):R instanceof we?(O=R.status,P=R.body):P=Ke(R,{params:s,url:p,routeId:l.id});u--;)if(h[u]){let Z,D=u;for(;!A[D];)D-=1;try{return Z={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Y({url:p,params:s,branch:A.slice(0,D+1).concat(Z),status:O,error:P,route:l})}catch{continue}}await Q(p);return}else A.push(void 0);return await Y({url:p,params:s,branch:A,status:200,error:null,route:l,form:i?void 0:null})}async function te({status:a,error:i,url:p,routeId:s}){var y;const l={},h=await ke();let m=null;if(h.server)try{const g=await Fe(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Q(p);return}const v=await ue({loader:ke,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Y({url:p,params:l,branch:[v,k],status:a,error:i instanceof we?i.body:Ke(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ae(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const l=s.exec(p);if(l){const h=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:s,params:ct(l),url:h}}}}function Ae(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:k}){var L,U,A,B;let y=!1;const g=pe(a,!1),E={from:re("from",{params:n.params,routeId:(U=(L=n.route)==null?void 0:L.id)!=null?U:null,url:n.url}),to:re("to",{params:(A=g==null?void 0:g.params)!=null?A:null,routeId:(B=g==null?void 0:g.route.id)!=null?B:null,url:a}),type:h};m!==void 0&&(E.delta=m);const I={...E,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(I)),y){k();return}ye(j),v(),f&&G.navigating.set(E),await Oe(g,a,s,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(E)),G.navigating.set(null)})}function Q(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return Le()},invalidateAll:()=>(S=!0,Le()),prefetch:async a=>{const i=new URL(a,Ce(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?ne.filter(s=>a.some(l=>s.exec(l))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:s}=n;if(!s)return;let l=n.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Y({url:i,params:n.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:s});n=v.state;const k=ae();N.$set(v.props),k();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==V.status&&(i.page={...V,status:a.status});const p=ae();N.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:re("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(k=>k(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(j);try{sessionStorage[xe]=JSON.stringify(ee)}catch{}}});const a=s=>{const{url:l,options:h}=qe(s);if(l&&h.prefetch){if(Ae(l))return;Pe(l)}};let i;const p=s=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=qe(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){q=!0,ye(j),n.url=h,G.page.set({...V,url:h}),G.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[J]===j)return;const l=s.state[J]-j;he({url:new URL(location.href),scroll:ee[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[J]:++j},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:s,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let k;try{const g=p.map(async(E,I)=>{const L=h[I];return ue({loader:ce[E],url:v,params:s,routeId:l,parent:async()=>{const U={};for(let A=0;A<I;A+=1)Object.assign(U,(await g[A]).data);return U},server_data_node:de(L)})});k=await Y({url:v,params:s,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=ne.find(E=>E.id===l))!=null?y:null})}catch(g){const E=g;if(E instanceof Be){await Q(new URL(g.location,location.href));return}k=await te({status:E instanceof we?E.status:500,error:E,url:v,routeId:l})}je(k)}}}let At=1;async function Fe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+It,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(At++)),await se(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ke(r,e){var t;return(t=jt.handleError({error:r,event:e}))!=null?t:{message:e.routeId?"Internal Error":"Not Found"}}const Nt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function re(r,e){for(const t of Nt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)}});return e}function ae(){return()=>{}}async function Ct({env:r,hydrate:e,paths:t,target:c,trailing_slash:o}){at(t);const d=Ut({target:c,base:t.base,trailing_slash:o});st({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Ct as start};
