import{a as c,h as r,B as E,c as S,g as _}from"./index-pysBipdc.js";const g={xs:18,sm:24,md:32,lg:38,xl:46},M={size:String};function j(e,n=g){return c(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}function q(e,n){return e!==void 0&&e()||n}function V(e,n){if(e!==void 0){const u=e();if(u!=null)return u.slice()}return n}function l(e,n){return e!==void 0?n.concat(e()):n}function A(e,n,u,f,a,o){n.key=f+a;const s=r(e,n,u);return a===!0?E(s,o()):s}const x="0 0 24 24",b=e=>e,m=e=>`ionicons ${e}`,z={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":m,"ion-ios":m,"ion-logo":m,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},$={o_:"-outlined",r_:"-round",s_:"-sharp"},p={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},D=new RegExp("^("+Object.keys(z).join("|")+")"),Q=new RegExp("^("+Object.keys($).join("|")+")"),y=new RegExp("^("+Object.keys(p).join("|")+")"),C=/^[Mm]\s?[-+]?\.?\d/,F=/^img:/,I=/^svguse:/,O=/^ion-/,P=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,G=S({name:"QIcon",props:{...M,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:u}}=_(),f=j(e),a=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=c(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(u.iconMapFn!==null){const i=u.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(C.test(t)===!0){const[i,d=x]=t.split("|");return{svg:!0,viewBox:d,nodes:i.split("&&").map(w=>{const[R,k,B]=w.split("@@");return r("path",{style:k,d:R,transform:B})})}}if(F.test(t)===!0)return{img:!0,src:t.substring(4)};if(I.test(t)===!0){const[i,d=x]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:d}}let v=" ";const h=t.match(D);if(h!==null)s=z[h[1]](t);else if(P.test(t)===!0)s=t;else if(O.test(t)===!0)s=`ionicons ion-${u.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(y.test(t)===!0){s="notranslate material-symbols";const i=t.match(y);i!==null&&(t=t.substring(6),s+=p[i[1]]),v=t}else{s="notranslate material-icons";const i=t.match(Q);i!==null&&(t=t.substring(2),s+=$[i[1]]),v=t}return{cls:s,content:v}});return()=>{const s={class:a.value,style:f.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,s,q(n.default)):o.value.img===!0?r(e.tag,s,l(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r(e.tag,s,l(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r(e.tag,s,l(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),r(e.tag,s,l(n.default,[o.value.content])))}}}),U={size:{type:[String,Number],default:"1em"},color:String};function N(e){return{cSize:c(()=>e.size in g?`${g[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const J=S({name:"QSpinner",props:{...U,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:u}=N(e);return()=>r("svg",{class:u.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function K(e){return e.appContext.config.globalProperties.$router!==void 0}function L(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{G as Q,V as a,A as b,l as c,J as d,L as e,j as f,q as h,M as u,K as v};
