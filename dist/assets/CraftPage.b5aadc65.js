import{x as G,r as c,c as $,l as L,a as t,b as p,d,f as l,p as E,y as m,e as V,t as h,z as B,n as z,F as N,k as w,m as _,o as I,E as O,u as P,O as j,T as C}from"./index.d754835a.js";import{g as A}from"./index.88fa00fc.js";import{s as S}from"./store.6128d89b.js";import M from"./LoupeIcon.3363942b.js";import{_ as F}from"./AppFilter.052e2d5d.js";import{_ as D}from"./AppPopup.da4d0e2e.js";import{o as H,b as K,c as R}from"./transitions.3f366a8f.js";import W from"./FilterIcon.7cc96d38.js";import"./RangeSlider.d56f2620.js";import"./ExitIcon.934b245f.js";const q={key:0,class:"text-orange-300"},J={key:0,class:"pl-3"},T={__name:"AppCraftItem",props:{item:{default:()=>{},type:Object},count:{type:Number,default:0}},setup(v){var f;const b=v,{item:i}=G(b),s=c(!1),r=$(()=>{var n;return!!((n=o==null?void 0:o.parents)!=null&&n.length)}),g=()=>{r.value&&(s.value=!s.value)},o=S.currentItem("items",((f=i.value)==null?void 0:f.id)||0),k=n=>o!=null&&o.count?Number(o.count[n]):0;return(n,x)=>{var a;const y=L("router-link");return t(),p("ol",null,[d("div",{class:z([{"font-bold":r.value},"flex items-center"]),onClick:g},[l(y,{to:`/item/${m(i).id}`,class:"mr-2"},{default:E(()=>[l(M)]),_:1},8,["to"]),V(" "+h(v.count?`${v.count}\u0448\u0442`:"")+" "+h(m(i).name)+" ",1),r.value?(t(),p("span",q," [ "+h(s.value?"-":"+")+" ] ",1)):B("",!0)],2),r.value&&s.value?(t(),p("ul",J,[(t(!0),p(N,null,w((a=m(o))==null?void 0:a.parents,(e,u)=>(t(),_(T,{count:k(e.id),key:u,item:e},null,8,["count","item"]))),128))])):B("",!0)])}}},Q={class:"flex w-full justify-between px-2 pb-20 pt-4"},U={class:"opacity-1 fixed right-4 top-8 rounded-lg border border-silver bg-gray p-4"},le={__name:"CraftPage",setup(v){const b=$(()=>S.entities.items),i=c(b.value),s=y=>i.value=y,r=c(null),g=()=>r.value.open(),o=c(null),k=c(null),f=c(null);I(()=>{O(()=>A.from(f.value,{duration:1,x:-200,autoAlpha:0,ease:"back.out(1)"}))});const{width:n}=P(),x=$(()=>["xxs","xs","sm"].includes(n.value));return(y,a)=>(t(),p("main",Q,[d("ul",{ref_key:"list",ref:f},[l(j,{tag:"ol",css:!1,onBeforeEnter:m(H),onEnter:m(K),onLeave:m(R)},{default:E(()=>[(t(!0),p(N,null,w(i.value.filter(e=>{var u;return(u=e==null?void 0:e.parents)==null?void 0:u.length}).sort((e,u)=>e.level-u.level),e=>(t(),_(T,{item:e,key:e.id},null,8,["item"]))),128))]),_:1},8,["onBeforeEnter","onEnter","onLeave"])],512),x.value?(t(),_(C,{key:1,to:"body"},[d("div",{ref_key:"mobileFilter",ref:k,class:"opacity-1 fixed right-4 top-4 rounded border border-silver bg-gray p-2"},[l(W,{color:"silver",onClick:g,width:40,height:40})],512)])):(t(),_(C,{key:0,to:"body"},[d("div",{ref_key:"filter",ref:o,class:"opacity-1 fixed right-8 top-8 rounded border border-silver bg-gray p-4"},[l(F,{onFilteredItems:a[0]||(a[0]=e=>s(e))})],512)])),x.value?(t(),_(C,{key:2,to:"body"},[l(D,{ref_key:"popup",ref:r},{default:E(()=>[d("div",U,[l(F,{onFilteredItems:a[1]||(a[1]=e=>s(e))})])]),_:1},512)])):B("",!0)]))}};export{le as default};
