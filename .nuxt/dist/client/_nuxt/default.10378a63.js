import{_ as h}from"./nuxt-link.5492127a.js";import{d as u,k as i,v as c,o as r,c as m,a as e,r as p,b as x,i as o,u as a,w as n,j as l,N as w}from"./entry.30bdaf5c.js";import{_ as g}from"./pok-mon-go-logo-png-30.5c3629aa.js";const v={class:"w-full h-screen flex flex-col justify-center items-center",role:"status"},b=e("img",{class:"w-40 h-40 animate-bounce animate-ease-in-out",src:g},null,-1),k=e("div",{class:"text-2xl mt-4 font-bold text-yellow-500"}," Loading ",-1),y=[b,k],N=u({__name:"VnHomeLoading",props:{loading:{type:Boolean,default:!1}},setup(d){return(t,_)=>i((r(),m("div",v,y,512)),[[c,d.loading]])}}),$={class:"h-screen"},V={class:"shadow-sm bg-red-800 animate-fade-up animate-ease-in-out"},B={class:"p-4 flex justify-between"},j={class:"flex gap-4 text-yellow-500 font-semibold"},H={class:"h-full animate-fade-down animate-ease-in-out"},T=u({__name:"default",setup(d){let t=p(!0);x(()=>{_()});const _=()=>{setTimeout(()=>{t.value=!1},2e3)};return(f,L)=>{const s=h;return r(),m("div",$,[o(N,{loading:a(t)},null,8,["loading"]),i(e("header",V,[e("nav",B,[o(s,{class:"font-bold text-yellow-400",to:"/"},{default:n(()=>[l(" Vue-Nuxt-Pokemon ")]),_:1}),e("ul",j,[e("li",null,[o(s,{to:"/"},{default:n(()=>[l(" Home ")]),_:1})]),e("li",null,[o(s,{to:"/pokemons"},{default:n(()=>[l(" Pokemons ")]),_:1})])])])],512),[[c,!a(t)]]),i(e("div",H,[w(f.$slots,"default")],512),[[c,!a(t)]])])}}});export{T as default};