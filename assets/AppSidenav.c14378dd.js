import{r as g,j as b,o as E,a as r,b as u,k as h,d as a,n as k,F as _,w as f,h as T,l as L,f as I,m as y,T as A,p as w,e as R,t as V,q as D,s as P,v as O,_ as o}from"./index.7c97bcc7.js";import{s as c}from"./store.01b5883f.js";const C=a("path",{"fill-rule":"evenodd",d:`M.974 8.504l1.728-.825a.94.94 0 00.323-1.439l-1.21-1.498a7.009 7.009 0 011.494-1.895l1.727.847a.931.931
            0 001.32-.642l.407-1.88a6.96 6.96 0 012.412.001L9.6 3.057a.934.934 0 001.323.637l1.721-.847a7.053 7.053 0
            011.511 1.894L12.957 6.24a.942.942 0 00.33 1.437l1.74.826a7.086 7.086 0 01-.529 2.362l-1.914-.012a.935
            .935 0 00-.912 1.155l.446 1.874a7.002 7.002 0 01-2.17 1.05l-1.194-1.514a.93.93 0 00-1.466.002l-1.18
            1.512a7.09 7.09 0 01-2.178-1.05l.43-1.878a.94.94 0 00-.917-1.15l-1.92.011a7.095 7.095 0 01-.06-.149 7.102
            7.102 0 01-.488-2.212zM9.96 7.409a2.11 2.11 0 01-1.18 2.74 2.11 2.11 0 01-2.733-1.195 2.11 2.11 0
            011.179-2.741A2.11 2.11 0 019.96 7.409z`},null,-1),B=[C],$={__name:"AppGears",setup(i){const e=g(!1);b(()=>(e.value=!e.value,!0)),E(()=>e.value=!e.value);const n=["top-[-18px] left-[-18px]","top-[-58px] left-[78px]","top-[86px] left-[-42px]"],d=[["rotate-90","rotate-0"],["rotate-[-55deg]","rotate-[30deg]"],["rotate-[-66deg]","rotate-[30deg]"]];return(p,l)=>(r(),u(_,null,h(d,(t,m)=>a("svg",{width:"128",height:"128",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",onClick:l[0]||(l[0]=v=>e.value=!e.value),class:k([[n[m],`${e.value?t[0]:t[1]}`],"absolute fill-second transition duration-1000 ease-in-out"]),key:m},B,2)),64))}};function z(i){switch(i){case"../icons/BinocularsIcon.vue":return o(()=>import("./BinocularsIcon.d7c93d69.js"),["assets/BinocularsIcon.d7c93d69.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/BossIcon.vue":return o(()=>import("./BossIcon.4cb0ece7.js"),["assets/BossIcon.4cb0ece7.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/CollapseIcon.vue":return o(()=>import("./CollapseIcon.b70a5730.js"),["assets/CollapseIcon.b70a5730.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/CraftIcon.vue":return o(()=>import("./CraftIcon.1963ffc2.js"),["assets/CraftIcon.1963ffc2.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/ExitIcon.vue":return o(()=>import("./ExitIcon.b5d185a6.js"),["assets/ExitIcon.b5d185a6.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/FilterIcon.vue":return o(()=>import("./FilterIcon.160f4886.js"),["assets/FilterIcon.160f4886.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/GrenadeIcon.vue":return o(()=>import("./GrenadeIcon.8480f251.js"),["assets/GrenadeIcon.8480f251.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/InfoIcon.vue":return o(()=>import("./InfoIcon.33e7fb60.js"),["assets/InfoIcon.33e7fb60.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/ItemsIcon.vue":return o(()=>import("./ItemsIcon.09d2c9dd.js"),["assets/ItemsIcon.09d2c9dd.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/LoupeIcon.vue":return o(()=>import("./LoupeIcon.f32207fd.js"),["assets/LoupeIcon.f32207fd.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);case"../icons/QuestionIcon.vue":return o(()=>import("./QuestionIcon.7ca8300c.js"),["assets/QuestionIcon.7ca8300c.js","assets/index.7c97bcc7.js","assets/index.c3c92d48.css"]);default:return new Promise(function(e,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+i)))})}}const M={class:"fixed hidden h-screen lg:block"},S={class:"mt-48 h-fit -translate-x-full animate-leftToRight rounded-r-2xl bg-second py-5 pr-5"},q={class:"fixed inset-x-0 bottom-0 z-10 flex justify-around overflow-x-auto bg-primary py-1 shadow-lg shadow-white lg:hidden"},N={__name:"AppSidenav",async setup(i){let e,n;[e,n]=f(()=>c.setItems("bosses")),await e,n(),[e,n]=f(()=>c.setItems("goblins")),await e,n(),[e,n]=f(()=>c.setItems("items")),await e,n();const d=t=>`animation-delay: ${t/4+.2}s`,p=[{title:"\u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442?",link:"/",icon:"QuestionIcon"},{title:"\u0441\u043D\u0430\u0440\u044F\u0434\u0438\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430",link:"/goblins",icon:"ItemsIcon"},{title:"\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0431\u043E\u0441\u0441\u043E\u0432",link:"/boss",icon:"BossIcon"},{title:"\u0434\u0435\u0440\u0435\u0432\u043E \u043A\u0440\u0430\u0444\u0442\u0430",link:"/craft",icon:"CraftIcon"},{title:"\u043A\u0432\u0435\u0441\u0442\u044B",link:"/quest",icon:"LoupeIcon"},{title:"\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435",link:"/about",icon:"InfoIcon"}],l=t=>O(()=>z(`../icons/${t}.vue`));return E(()=>{const t=T("version");t&&c.setVersion(t)}),(t,m)=>{const v=L("router-link");return r(),u(_,null,[a("section",M,[I($),a("div",S,[(r(),u(_,null,h(p,(s,x)=>I(v,{class:k(["link relative my-2 block w-max -translate-x-full animate-leftToRight rounded-r-2xl px-2 py-4 shadow-xl",s.link===t.$route.path?"bg-second text-primary":"bg-primary text-second hover:bg-second hover:text-primary"]),style:D(d(x)),key:x,to:s.link},{default:w(()=>[R(V(s.title),1)]),_:2},1032,["class","style","to"])),64))])]),(r(),y(A,{to:"body"},[a("section",q,[(r(),u(_,null,h(p,s=>I(v,{to:s.link,key:s.link},{default:w(()=>[(r(),y(P(l(s.icon)),{class:k(["w-full rounded-full border p-1 hover:border-red",{"border-red":s.link===t.$route.path}]),width:64,height:64,color:"white"},null,8,["class"]))]),_:2},1032,["to"])),64))])]))],64)}}};export{N as default};