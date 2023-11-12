import{_ as D}from"./AppItemsPopup.8d29a4ca.js";import{e as N}from"./transitions.3f366a8f.js";import{c as E,r as s,H as F,h as p,o as z,E as M,a as c,b as r,F as V,k as j,d as i,t as G,z as q,f as T,m as A,T as H}from"./index.d754835a.js";import{s as L,u as O}from"./store.6128d89b.js";import"./AppPopup.da4d0e2e.js";import"./ExitIcon.934b245f.js";import"./FilterIcon.7cc96d38.js";import"./AppSidebar.0c57e911.js";import"./AppFilter.052e2d5d.js";import"./RangeSlider.d56f2620.js";import"./QuestionIcon.f6e5f55d.js";import"./index.88fa00fc.js";const U=["onClick"],Z={class:"carousel-box absolute left-0 top-0 z-1 h-full w-full"},J={class:"absolute bottom-4 left-5 z-1 text-xl text-white md:text-3xl"},K=["src"],Q={key:0,class:"absolute bottom-10 text-sm font-semibold md:text-2xl lg:bottom-0"},R={__name:"GoblinCards",setup(C){const u=E(()=>L.entities.goblins);let v=s(0),d=s(0),f=s(!1);const S=s(-.1),I=(e,t)=>e.map((o,a)=>t===a?e.length:e.length-Math.abs(t-a)),l=s(null);let n=s(0);const P=(e,t,o)=>{const a=I([...l.value],o)[t];e.style.setProperty("--zIndex",a),e.style.setProperty("--active",(t-o)/l.value.length),e.style.setProperty("--items",l.value.length)},h=()=>{l.value&&(n.value=Math.max(0,Math.min(n.value,l.value.length*10)),d.value=Math.floor(n.value/(l.value.length*10)*(l.value.length-1)),l.value.forEach((e,t)=>P(e,t,d.value)))};let _=s(!1);const g=e=>{if(!f.value)return;_.value=!1;const t=e.clientX||e.touches&&e.touches[0].clientX||0,o=(t-v.value)*S.value;n.value=n.value+o,v.value=t,_.value||requestAnimationFrame(()=>{h(),_.value=!0})},b=e=>{f.value=!0,v.value=e.clientX||e.touches&&e.touches[0].clientX||0},x=()=>f.value=!1,X=s(null),$=()=>{M(()=>{var e;n.value=(10*((e=l.value)==null?void 0:e.length)||0)/2,h(),m.value=u.value[n.value/10]})},m=s(null),y=(e,t)=>{n.value=t/l.value.length*l.value.length*10+10,h(),m.value=e,k(e),localStorage.setItem("goblin",e.name)},{setGoblin:k}=O();F(u,async()=>{(!p("goblin").value||p("goblin").value==="undefined")&&localStorage.setItem("goblin","\u0418\u043D\u0436\u0435\u043D\u0435\u0440"),await w()}),z(async()=>{await w()});const w=async()=>{const e=p("goblin"),t=u.value.find(o=>o.name===e.value);t?(k(t),await M(),y(t,t.id-1)):$()};return(e,t)=>{var o;return c(),r("div",{class:"pointer-events-none relative z-1 h-full w-full overflow-hidden",ref_key:"carousel",ref:X,onMousedown:b,onMousemove:g,onMouseup:x,onTouchstart:b,onTouchmove:g,onTouchend:x},[(c(!0),r(V,null,j(u.value,(a,B)=>(c(),r("div",{class:"carousel-item pointer-events-auto absolute overflow-hidden bg-black",key:a.id,ref_for:!0,ref_key:"cards",ref:l,onClick:ee=>y(a,B)},[i("div",Z,[i("div",J,G(a.name),1),i("img",{src:a.src,class:"pointer-events-none h-full w-full object-cover"},null,8,K)])],8,U))),128)),m.value?(c(),r("div",Q,G((o=m.value)==null?void 0:o.description),1)):q("",!0)],544)}}},W={class:"mb-96 flex flex-1 flex-col justify-between px-2"},Y={class:"mb-10 flex h-full flex-col"},de={__name:"GoblinsPage",setup(C){const u=s(null);return z(()=>{N({el:u.value,transformOrigin:"top right"})}),(v,d)=>(c(),r("div",W,[i("div",Y,[i("div",{class:"headline my-8",ref_key:"title",ref:u},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0438",512),T(R,{class:"md:mb-10 lg:mb-0"})]),(c(),A(H,{to:"body"},[T(D,{class:"absolute right-2 top-20 block bg-second md:hidden"})]))]))}};export{de as default};