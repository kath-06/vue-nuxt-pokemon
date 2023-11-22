import{_ as T}from"./nuxt-link.5492127a.js";import{d as U,g as S,h as z,q as V,s as E,o as i,c,a as l,k as $,v as I,u as t,t as O,i as h,w as L,_ as H,j as J,r as o,F as B,l as D,n as Q,b as G}from"./entry.30bdaf5c.js";import{u as K}from"./vue.f36acd1f.27e66059.js";import{_ as W,a as X,u as Y}from"./VnPageHeader.vue.022e2ef5.js";const Z={class:"flip-card card-primary"},ee={class:"flip-card-inner preserve-3d"},te={class:"flip-card-front"},ae=["src"],se={class:"text-title-default"},ne={class:"flip-card-back"},oe={class:"text-title-primary"},le={class:"p-2"},ie=["src"],ce=["src"],re=U({__name:"PokemonCard",props:{pokemonData:{type:Object,default:()=>{}}},setup(r){const u=r;let e=S({}),g="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",d="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",v="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";return z(()=>{Object.assign(e,{}),Object.assign(e,u.pokemonData)}),V(()=>E(u.pokemonData),()=>{Object.assign(e,{}),Object.assign(e,u.pokemonData)}),(P,_)=>{const p=T;return i(),c("div",Z,[l("div",ee,[l("div",te,[$(l("img",{class:"w-3/4 h-1/2",src:`${t(g)}${t(e).id}.png`},null,8,ae),[[I,t(e).id!=="1013"]]),l("p",se,O(t(e).name),1)]),l("div",ne,[l("div",oe,O(t(e).name),1),l("div",le,[parseInt(t(e).id)<650?(i(),c("img",{key:0,src:`${t(v)}${t(e).id}.gif`},null,8,ie)):(i(),c("img",{key:1,src:`${t(d)}${t(e).id}.png`},null,8,ce))]),h(p,{to:`/pokemons/${t(e).id}`},{default:L(()=>[h(H,null,{default:L(()=>[J("View")]),_:1})]),_:1},8,["to"])])])])}}});const ue={class:"flex justify-end"},de=["disabled","onClick"],pe=U({__name:"VnPagination",props:{count:{type:Number,default:0},itemPerPage:{type:Number,default:120},showPrev:{type:Boolean,default:!1},showNext:{type:Boolean,default:!1},activePage:{type:Number,default:0}},emits:["prev","next","page"],setup(r,{emit:u}){const e=r,g=u;let d=o(0);const v=()=>{g("prev",e.activePage-1)},P=()=>{g("next",e.activePage+1)},_=p=>{g("page",p*e.itemPerPage,p)};return V(()=>e.count,()=>{d.value=Math.ceil(e.count/e.itemPerPage)}),(p,N)=>(i(),c("div",ue,[$(l("button",{class:"pagination-prv-btn",onClick:v}," Prev ",512),[[I,r.showPrev]]),(i(!0),c(B,null,D(t(d),(k,m)=>(i(),c("button",{disabled:r.activePage===m,class:Q(r.activePage===m?"disable-pagination-btn":"pagination-btn"),key:m,onClick:j=>_(m)},O(m+1),11,de))),128)),$(l("button",{class:"pagination-nxt-btn",onClick:P}," Next ",512),[[I,r.showNext]])]))}}),me={class:"p-4"},ge={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5"},Pe=U({__name:"index",setup(r){K({title:"Vue-Nuxt | Pokemon List"});let u=S([]),e=o(120),g=o(0),d=o(0),v=o(0),P=o(0),_=o(!0),p=o(!0),N=o(!0),k=o(0),m=o(120);const j=async a=>{let s=[];const{data:n,refresh:w}=await Y(`/api/pokemon?offset=${a}&limit=${e.value}`,{query:{type:"getList"}},"$Uu84QUJyNM");n.value===null&&await w();const y=n.value.next,C=n.value.previous;if(y){const f=new URL(y);v.value=f.searchParams.get("offset")||0}if(C){const f=new URL(C);P.value=f.searchParams.get("offset")||0}s=n.value.results,s.map(f=>{const q=A(f.url);Object.assign(f,{...f,id:q})}),d.value=1017,N.value=!(v.value>d.value),p.value=C!==null,Object.assign(u,s),_.value=!1},A=a=>{const s=a.lastIndexOf("/"),n=a.lastIndexOf("/",s-1);return a.slice(n+1,s)},x=a=>{const s=localStorage.getItem("activePage");let n=a;_.value=!0,k.value===0&&s&&(b(parseInt(s)),n=parseInt(s)*m.value),setTimeout(()=>{j(n)},2e3)},M=a=>{b(a),x(P.value)},R=a=>{b(a),x(v.value)},F=(a,s)=>{b(s),x(a)},b=a=>{localStorage.setItem("activePage",a.toString()),k.value=a};return G(()=>{x(g.value)}),(a,s)=>{const n=re;return i(),c("div",me,[h(W,{text:"Pokemon List"}),h(X,{loading:t(_)},null,8,["loading"]),$(l("div",null,[l("div",ge,[(i(!0),c(B,null,D(t(u),(w,y)=>(i(),c("div",{key:y},[h(n,{"pokemon-data":w},null,8,["pokemon-data"])]))),128))]),h(pe,{count:t(d),"show-prev":t(p),"show-next":t(N),"active-page":t(k),itemPerPage:t(m),onPrev:M,onNext:R,onPage:F},null,8,["count","show-prev","show-next","active-page","itemPerPage"])],512),[[I,!t(_)]])])}}});export{Pe as default};
