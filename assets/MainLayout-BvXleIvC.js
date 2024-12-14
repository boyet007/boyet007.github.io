import{u as xo,a as ko,c as Ai,g as Po,Q as mn}from"./QBtn-CiJRBxnM.js";import{c as Z,a as v,h as O,r as F,i as Yn,o as ye,b as Re,n as $n,d as Be,g as ae,l as le,e as vt,f as te,j as yt,w as P,k as Ao,s as Kn,H as Li,m as ne,p as Lo,P as Mo,q as Oo,t as Do,u as Pt,v as gn,x as Mi,y as vn,z as Dn,A as yn,B as Fo,C as Us,D as qo,E as At,F as Wo,G as Vo,_ as Bo,I as Ho,J as je,K as Oi,L as V,S as Uo,M as q,N as Di,O as Fi,Q as Xe,R as Cn,T as Lt,U as wn,V as qi,W as Wi}from"./index-StjsLx5x.js";import{h as Ae,a as zs,v as zo,b as Vi,c as Gs,Q as Bi}from"./vm-CqDilmrJ.js";import{u as jn,a as Xn}from"./use-dark-DC83NuMQ.js";import{u as Go}from"./use-timeout-CyvIko_w.js";import{L as Qo,a as p,g as Ct,_ as Yo,b as $o,c as Ko,d as jo,e as Xo,C as Jo,r as Hi,s as B,j as Jn,f as fe,h as Zo,S as el,i as tl,k as He,m as Vt,l as Qs,n as wt,o as nl,p as Ys,D as $s,q as il,t as sl,u as Ui,v as Ks,w as rl,x as ol,y as en,z as ll,A as al,B as ul,E as zi}from"./firebase-o8BqybQN.js";const Gi=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(n,{slots:e}){const t=v(()=>"q-toolbar__title ellipsis"+(n.shrink===!0?" col-shrink":""));return()=>O("div",{class:t.value},Ae(e.default))}}),Qi=Z({name:"QToolbar",props:{inset:Boolean},setup(n,{slots:e}){const t=v(()=>"q-toolbar row no-wrap items-center"+(n.inset===!0?" q-toolbar--inset":""));return()=>O("div",{class:t.value,role:"toolbar"},Ae(e.default))}});function cl(){const n=F(!Yn.value);return n.value===!1&&ye(()=>{n.value=!0}),{isHydrated:n}}const js=typeof ResizeObserver<"u",Yi=js===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Bt=Z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:e}){let t=null,i,s={width:-1,height:-1};function r(a){a===!0||n.debounce===0||n.debounce==="0"?o():t===null&&(t=setTimeout(o,n.debounce))}function o(){if(t!==null&&(clearTimeout(t),t=null),i){const{offsetWidth:a,offsetHeight:u}=i;(a!==s.width||u!==s.height)&&(s={width:a,height:u},e("resize",s))}}const{proxy:l}=ae();if(l.trigger=r,js===!0){let a;const u=c=>{i=l.$el.parentNode,i?(a=new ResizeObserver(r),a.observe(i),o()):c!==!0&&Be(()=>{u(!0)})};return ye(()=>{u()}),Re(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():i&&a.unobserve(i))}),$n}else{let a=function(){t!==null&&(clearTimeout(t),t=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",r,le.passive),d=void 0)},u=function(){a(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",r,le.passive),o())};const{isHydrated:c}=cl();let d;return ye(()=>{Be(()=>{i=l.$el,i&&u()})}),Re(a),()=>{if(c.value===!0)return O("object",{class:"q--avoid-card-border",style:Yi.style,tabindex:-1,type:"text/html",data:Yi.url,"aria-hidden":"true",onLoad:u})}}}}),dl=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=ae(),s=vt(yt,te);if(s===te)return console.error("QHeader needs to be child of QLayout"),te;const r=F(parseInt(n.heightHint,10)),o=F(!0),l=v(()=>n.reveal===!0||s.view.value.indexOf("H")!==-1||i.platform.is.ios&&s.isContainer.value===!0),a=v(()=>{if(n.modelValue!==!0)return 0;if(l.value===!0)return o.value===!0?r.value:0;const g=r.value-s.scroll.value.position;return g>0?g:0}),u=v(()=>n.modelValue!==!0||l.value===!0&&o.value!==!0),c=v(()=>n.modelValue===!0&&u.value===!0&&n.reveal===!0),d=v(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(n.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus":"")),h=v(()=>{const g=s.rows.value.top,T={};return g[0]==="l"&&s.left.space===!0&&(T[i.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),g[2]==="r"&&s.right.space===!0&&(T[i.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),T});function f(g,T){s.update("header",g,T)}function _(g,T){g.value!==T&&(g.value=T)}function y({height:g}){_(r,g),f("size",g)}function E(g){c.value===!0&&_(o,!0),t("focusin",g)}P(()=>n.modelValue,g=>{f("space",g),_(o,!0),s.animate()}),P(a,g=>{f("offset",g)}),P(()=>n.reveal,g=>{g===!1&&_(o,n.modelValue)}),P(o,g=>{s.animate(),t("reveal",g)}),P(s.scroll,g=>{n.reveal===!0&&_(o,g.direction==="up"||g.position<=n.revealOffset||g.position-g.inflectionPoint<100)});const b={};return s.instances.header=b,n.modelValue===!0&&f("size",r.value),f("space",n.modelValue),f("offset",a.value),Re(()=>{s.instances.header===b&&(s.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const g=zs(e.default,[]);return n.elevated===!0&&g.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g.push(O(Bt,{debounce:0,onResize:y})),O("header",{class:d.value,style:h.value,onFocusin:E},g)}}}),$i=Z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(n,{slots:e}){const t=v(()=>parseInt(n.lines,10)),i=v(()=>"q-item__label"+(n.overline===!0?" q-item__label--overline text-overline":"")+(n.caption===!0?" q-item__label--caption text-caption":"")+(n.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),s=v(()=>n.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>O("div",{style:s.value,class:i.value},Ae(e.default))}}),En=Z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(n,{slots:e}){const t=v(()=>`q-item__section column q-item__section--${n.avatar===!0||n.side===!0||n.thumbnail===!0?"side":"main"}`+(n.top===!0?" q-item__section--top justify-start":" justify-center")+(n.avatar===!0?" q-item__section--avatar":"")+(n.thumbnail===!0?" q-item__section--thumbnail":"")+(n.noWrap===!0?" q-item__section--nowrap":""));return()=>O("div",{class:t.value},Ae(e.default))}}),Ki=Z({name:"QItem",props:{...jn,...xo,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=ae(),s=Xn(n,i),{hasLink:r,linkAttrs:o,linkClass:l,linkTag:a,navigateOnClick:u}=ko(),c=F(null),d=F(null),h=v(()=>n.clickable===!0||r.value===!0||n.tag==="label"),f=v(()=>n.disable!==!0&&h.value===!0),_=v(()=>"q-item q-item-type row no-wrap"+(n.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(r.value===!0&&n.active===null?l.value:n.active===!0?` q-item--active${n.activeClass!==void 0?` ${n.activeClass}`:""}`:"")+(n.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(n.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(n.focused===!0?" q-manual-focusable--focused":""):"")),y=v(()=>n.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+n.insetLevel*56+"px"});function E(T){f.value===!0&&(d.value!==null&&(T.qKeyEvent!==!0&&document.activeElement===c.value?d.value.focus():document.activeElement===d.value&&c.value.focus()),u(T))}function b(T){if(f.value===!0&&Ao(T,[13,32])===!0){Kn(T),T.qKeyEvent=!0;const N=new MouseEvent("click",T);N.qKeyEvent=!0,c.value.dispatchEvent(N)}t("keyup",T)}function g(){const T=zs(e.default,[]);return f.value===!0&&T.unshift(O("div",{class:"q-focus-helper",tabindex:-1,ref:d})),T}return()=>{const T={ref:c,class:_.value,style:y.value,role:"listitem",onClick:E,onKeyup:b};return f.value===!0?(T.tabindex=n.tabindex||"0",Object.assign(T,o.value)):h.value===!0&&(T["aria-disabled"]="true"),O(a.value,T,g())}}}),hl=["ul","ol"],fl=Z({name:"QList",props:{...jn,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(n,{slots:e}){const t=ae(),i=Xn(n,t.proxy.$q),s=v(()=>hl.includes(n.tag)?null:"list"),r=v(()=>"q-list"+(n.bordered===!0?" q-list--bordered":"")+(n.dense===!0?" q-list--dense":"")+(n.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(n.padding===!0?" q-list--padding":""));return()=>O(n.tag,{class:r.value,role:s.value},Ae(e.default))}});function _l(n,e,t){let i;function s(){i!==void 0&&(Li.remove(i),i=void 0)}return Re(()=>{n.value===!0&&s()}),{removeFromHistory:s,addToHistory(){i={condition:()=>t.value===!0,handler:e},Li.add(i)}}}const pl={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ml=["beforeShow","show","beforeHide","hide"];function gl({showing:n,canShow:e,hideOnRouteChange:t,handleShow:i,handleHide:s,processOnMount:r}){const o=ae(),{props:l,emit:a,proxy:u}=o;let c;function d(g){n.value===!0?_(g):h(g)}function h(g){if(l.disable===!0||g!==void 0&&g.qAnchorHandled===!0||e!==void 0&&e(g)!==!0)return;const T=l["onUpdate:modelValue"]!==void 0;T===!0&&(a("update:modelValue",!0),c=g,Be(()=>{c===g&&(c=void 0)})),(l.modelValue===null||T===!1)&&f(g)}function f(g){n.value!==!0&&(n.value=!0,a("beforeShow",g),i!==void 0?i(g):a("show",g))}function _(g){if(l.disable===!0)return;const T=l["onUpdate:modelValue"]!==void 0;T===!0&&(a("update:modelValue",!1),c=g,Be(()=>{c===g&&(c=void 0)})),(l.modelValue===null||T===!1)&&y(g)}function y(g){n.value!==!1&&(n.value=!1,a("beforeHide",g),s!==void 0?s(g):a("hide",g))}function E(g){l.disable===!0&&g===!0?l["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!1):g===!0!==n.value&&(g===!0?f:y)(c)}P(()=>l.modelValue,E),t!==void 0&&zo(o)===!0&&P(()=>u.$route.fullPath,()=>{t.value===!0&&n.value===!0&&_()}),r===!0&&ye(()=>{E(l.modelValue)});const b={show:h,hide:_,toggle:d};return Object.assign(u,b),b}const vl=[Element,String],yl=[null,document,document.body,document.scrollingElement,document.documentElement];function Cl(n,e){let t=Po(e);if(t===void 0){if(n==null)return window;t=n.closest(".scroll,.scroll-y,.overflow-auto")}return yl.includes(t)?window:t}function Xs(n){return n===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:n.scrollTop}function Js(n){return n===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:n.scrollLeft}let Mt;function Tn(){if(Mt!==void 0)return Mt;const n=document.createElement("p"),e=document.createElement("div");Ai(n,{width:"100%",height:"200px"}),Ai(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(n),document.body.appendChild(e);const t=n.offsetWidth;e.style.overflow="scroll";let i=n.offsetWidth;return t===i&&(i=e.clientWidth),e.remove(),Mt=t-i,Mt}function wl(n,e=!0){return!n||n.nodeType!==Node.ELEMENT_NODE?!1:e?n.scrollHeight>n.clientHeight&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-y"])):n.scrollWidth>n.clientWidth&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-x"]))}let Je=0,bn,Sn,it,In=!1,ji,Xi,Ji,Se=null;function El(n){Tl(n)&&Kn(n)}function Tl(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const e=Lo(n),t=n.shiftKey&&!n.deltaX,i=!t&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),s=t||i?n.deltaY:n.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(wl(o,i))return i?s<0&&o.scrollTop===0?!0:s>0&&o.scrollTop+o.clientHeight===o.scrollHeight:s<0&&o.scrollLeft===0?!0:s>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function Zi(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Ot(n){In!==!0&&(In=!0,requestAnimationFrame(()=>{In=!1;const{height:e}=n.target,{clientHeight:t,scrollTop:i}=document.scrollingElement;(it===void 0||e!==window.innerHeight)&&(it=t-e,document.scrollingElement.scrollTop=i),i>it&&(document.scrollingElement.scrollTop-=Math.ceil((i-it)/8))}))}function es(n){const e=document.body,t=window.visualViewport!==void 0;if(n==="add"){const{overflowY:i,overflowX:s}=window.getComputedStyle(e);bn=Js(window),Sn=Xs(window),ji=e.style.left,Xi=e.style.top,Ji=window.location.href,e.style.left=`-${bn}px`,e.style.top=`-${Sn}px`,s!=="hidden"&&(s==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,ne.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Ot,le.passiveCapture),window.visualViewport.addEventListener("scroll",Ot,le.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Zi,le.passiveCapture))}ne.is.desktop===!0&&ne.is.mac===!0&&window[`${n}EventListener`]("wheel",El,le.notPassive),n==="remove"&&(ne.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",Ot,le.passiveCapture),window.visualViewport.removeEventListener("scroll",Ot,le.passiveCapture)):window.removeEventListener("scroll",Zi,le.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=ji,e.style.top=Xi,window.location.href===Ji&&window.scrollTo(bn,Sn),it=void 0)}function bl(n){let e="add";if(n===!0){if(Je++,Se!==null){clearTimeout(Se),Se=null;return}if(Je>1)return}else{if(Je===0||(Je--,Je>0))return;if(e="remove",ne.is.ios===!0&&ne.is.nativeMobile===!0){Se!==null&&clearTimeout(Se),Se=setTimeout(()=>{es(e),Se=null},100);return}}es(e)}function Sl(){let n;return{preventBodyScroll(e){e!==n&&(n!==void 0||e===!0)&&(n=e,bl(e))}}}const Zn={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Il=Object.keys(Zn);Zn.all=!0;function ts(n){const e={};for(const t of Il)n[t]===!0&&(e[t]=!0);return Object.keys(e).length===0?Zn:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const Nl=["INPUT","TEXTAREA"];function ns(n,e){return e.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof e.handler=="function"&&Nl.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(e.uid)===-1)}function Rl(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),Mo.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Nn(n,e,t){const i=Dn(n);let s,r=i.left-e.event.x,o=i.top-e.event.y,l=Math.abs(r),a=Math.abs(o);const u=e.direction;u.horizontal===!0&&u.vertical!==!0?s=r<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?s=o<0?"up":"down":u.up===!0&&o<0?(s="up",l>a&&(u.left===!0&&r<0?s="left":u.right===!0&&r>0&&(s="right"))):u.down===!0&&o>0?(s="down",l>a&&(u.left===!0&&r<0?s="left":u.right===!0&&r>0&&(s="right"))):u.left===!0&&r<0?(s="left",l<a&&(u.up===!0&&o<0?s="up":u.down===!0&&o>0&&(s="down"))):u.right===!0&&r>0&&(s="right",l<a&&(u.up===!0&&o<0?s="up":u.down===!0&&o>0&&(s="down")));let c=!1;if(s===void 0&&t===!1){if(e.event.isFirst===!0||e.event.lastDir===void 0)return{};s=e.event.lastDir,c=!0,s==="left"||s==="right"?(i.left-=r,l=0,r=0):(i.top-=o,a=0,o=0)}return{synthetic:c,payload:{evt:n,touch:e.event.mouse!==!0,mouse:e.event.mouse===!0,position:i,direction:s,isFirst:e.event.isFirst,isFinal:t===!0,duration:Date.now()-e.event.time,distance:{x:l,y:a},offset:{x:r,y:o},delta:{x:i.left-e.event.lastX,y:i.top-e.event.lastY}}}}let xl=0;const Rn=Oo({name:"touch-pan",beforeMount(n,{value:e,modifiers:t}){if(t.mouse!==!0&&ne.has.touch!==!0)return;function i(r,o){t.mouse===!0&&o===!0?Kn(r):(t.stop===!0&&vn(r),t.prevent===!0&&Mi(r))}const s={uid:"qvtp_"+xl++,handler:e,modifiers:t,direction:ts(t),noop:$n,mouseStart(r){ns(r,s)&&Do(r)&&(Pt(s,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),s.start(r,!0))},touchStart(r){if(ns(r,s)){const o=r.target;Pt(s,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),s.start(r)}},start(r,o){if(ne.is.firefox===!0&&gn(n,!0),s.lastEvt=r,o===!0||t.stop===!0){if(s.direction.all!==!0&&(o!==!0||s.modifiers.mouseAllDir!==!0&&s.modifiers.mousealldir!==!0)){const u=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&Mi(u),r.cancelBubble===!0&&vn(u),Object.assign(u,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[s.uid]:r.qClonedBy.concat(s.uid)}),s.initialEvent={target:r.target,event:u}}vn(r)}const{left:l,top:a}=Dn(r);s.event={x:l,y:a,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:a}},move(r){if(s.event===void 0)return;const o=Dn(r),l=o.left-s.event.x,a=o.top-s.event.y;if(l===0&&a===0)return;s.lastEvt=r;const u=s.event.mouse===!0,c=()=>{i(r,u);let f;t.preserveCursor!==!0&&t.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Rl(),s.styleCleanup=_=>{if(s.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const y=()=>{document.body.classList.remove("no-pointer-events--children")};_!==void 0?setTimeout(()=>{y(),_()},50):y()}else _!==void 0&&_()}};if(s.event.detected===!0){s.event.isFirst!==!0&&i(r,s.event.mouse);const{payload:f,synthetic:_}=Nn(r,s,!1);f!==void 0&&(s.handler(f)===!1?s.end(r):(s.styleCleanup===void 0&&s.event.isFirst===!0&&c(),s.event.lastX=f.position.left,s.event.lastY=f.position.top,s.event.lastDir=_===!0?void 0:f.direction,s.event.isFirst=!1));return}if(s.direction.all===!0||u===!0&&(s.modifiers.mouseAllDir===!0||s.modifiers.mousealldir===!0)){c(),s.event.detected=!0,s.move(r);return}const d=Math.abs(l),h=Math.abs(a);d!==h&&(s.direction.horizontal===!0&&d>h||s.direction.vertical===!0&&d<h||s.direction.up===!0&&d<h&&a<0||s.direction.down===!0&&d<h&&a>0||s.direction.left===!0&&d>h&&l<0||s.direction.right===!0&&d>h&&l>0?(s.event.detected=!0,s.move(r)):s.end(r,!0))},end(r,o){if(s.event!==void 0){if(yn(s,"temp"),ne.is.firefox===!0&&gn(n,!1),o===!0)s.styleCleanup!==void 0&&s.styleCleanup(),s.event.detected!==!0&&s.initialEvent!==void 0&&s.initialEvent.target.dispatchEvent(s.initialEvent.event);else if(s.event.detected===!0){s.event.isFirst===!0&&s.handler(Nn(r===void 0?s.lastEvt:r,s).payload);const{payload:l}=Nn(r===void 0?s.lastEvt:r,s,!0),a=()=>{s.handler(l)};s.styleCleanup!==void 0?s.styleCleanup(a):a()}s.event=void 0,s.initialEvent=void 0,s.lastEvt=void 0}}};if(n.__qtouchpan=s,t.mouse===!0){const r=t.mouseCapture===!0||t.mousecapture===!0?"Capture":"";Pt(s,"main",[[n,"mousedown","mouseStart",`passive${r}`]])}ne.has.touch===!0&&Pt(s,"main",[[n,"touchstart","touchStart",`passive${t.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,e){const t=n.__qtouchpan;t!==void 0&&(e.oldValue!==e.value&&(typeof value!="function"&&t.end(),t.handler=e.value),t.direction=ts(e.modifiers))},beforeUnmount(n){const e=n.__qtouchpan;e!==void 0&&(e.event!==void 0&&e.end(),yn(e,"main"),yn(e,"temp"),ne.is.firefox===!0&&gn(n,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete n.__qtouchpan)}});function Dt(n,e,t){return t<=e?e:Math.min(t,Math.max(e,n))}const is=150,kl=Z({name:"QDrawer",inheritAttrs:!1,props:{...pl,...jn,side:{type:String,default:"left",validator:n=>["left","right"].includes(n)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:n=>["default","desktop","mobile"].includes(n),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ml,"onLayout","miniState"],setup(n,{slots:e,emit:t,attrs:i}){const s=ae(),{proxy:{$q:r}}=s,o=Xn(n,r),{preventBodyScroll:l}=Sl(),{registerTimeout:a,removeTimeout:u}=Go(),c=vt(yt,te);if(c===te)return console.error("QDrawer needs to be child of QLayout"),te;let d,h=null,f;const _=F(n.behavior==="mobile"||n.behavior!=="desktop"&&c.totalWidth.value<=n.breakpoint),y=v(()=>n.mini===!0&&_.value!==!0),E=v(()=>y.value===!0?n.miniWidth:n.width),b=F(n.showIfAbove===!0&&_.value===!1?!0:n.modelValue===!0),g=v(()=>n.persistent!==!0&&(_.value===!0||po.value===!0));function T(m,x){if($(),m!==!1&&c.animate(),ee(0),_.value===!0){const K=c.instances[xt.value];K!==void 0&&K.belowBreakpoint===!0&&K.hide(!1),pe(1),c.isContainer.value!==!0&&l(!0)}else pe(0),m!==!1&&fn(!1);a(()=>{m!==!1&&fn(!0),x!==!0&&t("show",m)},is)}function N(m,x){$e(),m!==!1&&c.animate(),pe(0),ee(Me.value*E.value),_n(),x!==!0?a(()=>{t("hide",m)},is):u()}const{show:w,hide:L}=gl({showing:b,hideOnRouteChange:g,handleShow:T,handleHide:N}),{addToHistory:$,removeFromHistory:$e}=_l(b,L,g),be={belowBreakpoint:_,hide:L},ue=v(()=>n.side==="right"),Me=v(()=>(r.lang.rtl===!0?-1:1)*(ue.value===!0?1:-1)),Ri=F(0),Oe=F(!1),un=F(!1),xi=F(E.value*Me.value),xt=v(()=>ue.value===!0?"left":"right"),cn=v(()=>b.value===!0&&_.value===!1&&n.overlay===!1?n.miniToOverlay===!0?n.miniWidth:E.value:0),dn=v(()=>n.overlay===!0||n.miniToOverlay===!0||c.view.value.indexOf(ue.value?"R":"L")!==-1||r.platform.is.ios===!0&&c.isContainer.value===!0),Ke=v(()=>n.overlay===!1&&b.value===!0&&_.value===!1),po=v(()=>n.overlay===!0&&b.value===!0&&_.value===!1),mo=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&Oe.value===!1?" hidden":"")),go=v(()=>({backgroundColor:`rgba(0,0,0,${Ri.value*.4})`})),ki=v(()=>ue.value===!0?c.rows.value.top[2]==="r":c.rows.value.top[0]==="l"),vo=v(()=>ue.value===!0?c.rows.value.bottom[2]==="r":c.rows.value.bottom[0]==="l"),yo=v(()=>{const m={};return c.header.space===!0&&ki.value===!1&&(dn.value===!0?m.top=`${c.header.offset}px`:c.header.space===!0&&(m.top=`${c.header.size}px`)),c.footer.space===!0&&vo.value===!1&&(dn.value===!0?m.bottom=`${c.footer.offset}px`:c.footer.space===!0&&(m.bottom=`${c.footer.size}px`)),m}),Co=v(()=>{const m={width:`${E.value}px`,transform:`translateX(${xi.value}px)`};return _.value===!0?m:Object.assign(m,yo.value)}),wo=v(()=>"q-drawer__content fit "+(c.isContainer.value!==!0?"scroll":"overflow-auto")),Eo=v(()=>`q-drawer q-drawer--${n.side}`+(un.value===!0?" q-drawer--mini-animate":"")+(n.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(Oe.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${y.value===!0?"mini":"standard"}`+(dn.value===!0||Ke.value!==!0?" fixed":"")+(n.overlay===!0||n.miniToOverlay===!0?" q-drawer--on-top":"")+(ki.value===!0?" q-drawer--top-padding":""))),To=v(()=>{const m=r.lang.rtl===!0?n.side:xt.value;return[[Rn,No,void 0,{[m]:!0,mouse:!0}]]}),bo=v(()=>{const m=r.lang.rtl===!0?xt.value:n.side;return[[Rn,Pi,void 0,{[m]:!0,mouse:!0}]]}),So=v(()=>{const m=r.lang.rtl===!0?xt.value:n.side;return[[Rn,Pi,void 0,{[m]:!0,mouse:!0,mouseAllDir:!0}]]});function hn(){Ro(_,n.behavior==="mobile"||n.behavior!=="desktop"&&c.totalWidth.value<=n.breakpoint)}P(_,m=>{m===!0?(d=b.value,b.value===!0&&L(!1)):n.overlay===!1&&n.behavior!=="mobile"&&d!==!1&&(b.value===!0?(ee(0),pe(0),_n()):w(!1))}),P(()=>n.side,(m,x)=>{c.instances[x]===be&&(c.instances[x]=void 0,c[x].space=!1,c[x].offset=0),c.instances[m]=be,c[m].size=E.value,c[m].space=Ke.value,c[m].offset=cn.value}),P(c.totalWidth,()=>{(c.isContainer.value===!0||document.qScrollPrevented!==!0)&&hn()}),P(()=>n.behavior+n.breakpoint,hn),P(c.isContainer,m=>{b.value===!0&&l(m!==!0),m===!0&&hn()}),P(c.scrollbarWidth,()=>{ee(b.value===!0?0:void 0)}),P(cn,m=>{me("offset",m)}),P(Ke,m=>{t("onLayout",m),me("space",m)}),P(ue,()=>{ee()}),P(E,m=>{ee(),pn(n.miniToOverlay,m)}),P(()=>n.miniToOverlay,m=>{pn(m,E.value)}),P(()=>r.lang.rtl,()=>{ee()}),P(()=>n.mini,()=>{n.noMiniAnimation||n.modelValue===!0&&(Io(),c.animate())}),P(y,m=>{t("miniState",m)});function ee(m){m===void 0?Be(()=>{m=b.value===!0?0:E.value,ee(Me.value*m)}):(c.isContainer.value===!0&&ue.value===!0&&(_.value===!0||Math.abs(m)===E.value)&&(m+=Me.value*c.scrollbarWidth.value),xi.value=m)}function pe(m){Ri.value=m}function fn(m){const x=m===!0?"remove":c.isContainer.value!==!0?"add":"";x!==""&&document.body.classList[x]("q-body--drawer-toggle")}function Io(){h!==null&&clearTimeout(h),s.proxy&&s.proxy.$el&&s.proxy.$el.classList.add("q-drawer--mini-animate"),un.value=!0,h=setTimeout(()=>{h=null,un.value=!1,s&&s.proxy&&s.proxy.$el&&s.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function No(m){if(b.value!==!1)return;const x=E.value,K=Dt(m.distance.x,0,x);if(m.isFinal===!0){K>=Math.min(75,x)===!0?w():(c.animate(),pe(0),ee(Me.value*x)),Oe.value=!1;return}ee((r.lang.rtl===!0?ue.value!==!0:ue.value)?Math.max(x-K,0):Math.min(0,K-x)),pe(Dt(K/x,0,1)),m.isFirst===!0&&(Oe.value=!0)}function Pi(m){if(b.value!==!0)return;const x=E.value,K=m.direction===n.side,kt=(r.lang.rtl===!0?K!==!0:K)?Dt(m.distance.x,0,x):0;if(m.isFinal===!0){Math.abs(kt)<Math.min(75,x)===!0?(c.animate(),pe(1),ee(0)):L(),Oe.value=!1;return}ee(Me.value*kt),pe(Dt(1-kt/x,0,1)),m.isFirst===!0&&(Oe.value=!0)}function _n(){l(!1),fn(!0)}function me(m,x){c.update(n.side,m,x)}function Ro(m,x){m.value!==x&&(m.value=x)}function pn(m,x){me("size",m===!0?n.miniWidth:x)}return c.instances[n.side]=be,pn(n.miniToOverlay,E.value),me("space",Ke.value),me("offset",cn.value),n.showIfAbove===!0&&n.modelValue!==!0&&b.value===!0&&n["onUpdate:modelValue"]!==void 0&&t("update:modelValue",!0),ye(()=>{t("onLayout",Ke.value),t("miniState",y.value),d=n.showIfAbove===!0;const m=()=>{(b.value===!0?T:N)(!1,!0)};if(c.totalWidth.value!==0){Be(m);return}f=P(c.totalWidth,()=>{f(),f=void 0,b.value===!1&&n.showIfAbove===!0&&_.value===!1?w(!1):m()})}),Re(()=>{f!==void 0&&f(),h!==null&&(clearTimeout(h),h=null),b.value===!0&&_n(),c.instances[n.side]===be&&(c.instances[n.side]=void 0,me("size",0),me("offset",0),me("space",!1))}),()=>{const m=[];_.value===!0&&(n.noSwipeOpen===!1&&m.push(Fo(O("div",{key:"open",class:`q-drawer__opener fixed-${n.side}`,"aria-hidden":"true"}),To.value)),m.push(Vi("div",{ref:"backdrop",class:mo.value,style:go.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",n.noSwipeBackdrop!==!0&&b.value===!0,()=>So.value)));const x=y.value===!0&&e.mini!==void 0,K=[O("div",{...i,key:""+x,class:[wo.value,i.class]},x===!0?e.mini():Ae(e.default))];return n.elevated===!0&&b.value===!0&&K.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push(Vi("aside",{ref:"content",class:Eo.value,style:Co.value},K,"contentclose",n.noSwipeClose!==!0&&_.value===!0,()=>bo.value)),O("div",{class:"q-drawer-container"},m)}}}),Pl=Z({name:"QPageContainer",setup(n,{slots:e}){const{proxy:{$q:t}}=ae(),i=vt(yt,te);if(i===te)return console.error("QPageContainer needs to be child of QLayout"),te;Us(qo,!0);const s=v(()=>{const r={};return i.header.space===!0&&(r.paddingTop=`${i.header.size}px`),i.right.space===!0&&(r[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(r.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(r[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),r});return()=>O("div",{class:"q-page-container",style:s.value},Ae(e.default))}}),Al=Z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=ae(),s=vt(yt,te);if(s===te)return console.error("QFooter needs to be child of QLayout"),te;const r=F(parseInt(n.heightHint,10)),o=F(!0),l=F(Yn.value===!0||s.isContainer.value===!0?0:window.innerHeight),a=v(()=>n.reveal===!0||s.view.value.indexOf("F")!==-1||i.platform.is.ios&&s.isContainer.value===!0),u=v(()=>s.isContainer.value===!0?s.containerHeight.value:l.value),c=v(()=>{if(n.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?r.value:0;const w=s.scroll.value.position+u.value+r.value-s.height.value;return w>0?w:0}),d=v(()=>n.modelValue!==!0||a.value===!0&&o.value!==!0),h=v(()=>n.modelValue===!0&&d.value===!0&&n.reveal===!0),f=v(()=>"q-footer q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-bottom"+(n.bordered===!0?" q-footer--bordered":"")+(d.value===!0?" q-footer--hidden":"")+(n.modelValue!==!0?" q-layout--prevent-focus"+(a.value!==!0?" hidden":""):"")),_=v(()=>{const w=s.rows.value.bottom,L={};return w[0]==="l"&&s.left.space===!0&&(L[i.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),w[2]==="r"&&s.right.space===!0&&(L[i.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),L});function y(w,L){s.update("footer",w,L)}function E(w,L){w.value!==L&&(w.value=L)}function b({height:w}){E(r,w),y("size",w)}function g(){if(n.reveal!==!0)return;const{direction:w,position:L,inflectionPoint:$}=s.scroll.value;E(o,w==="up"||L-$<100||s.height.value-u.value-L-r.value<300)}function T(w){h.value===!0&&E(o,!0),t("focusin",w)}P(()=>n.modelValue,w=>{y("space",w),E(o,!0),s.animate()}),P(c,w=>{y("offset",w)}),P(()=>n.reveal,w=>{w===!1&&E(o,n.modelValue)}),P(o,w=>{s.animate(),t("reveal",w)}),P([r,s.scroll,s.height],g),P(()=>i.screen.height,w=>{s.isContainer.value!==!0&&E(l,w)});const N={};return s.instances.footer=N,n.modelValue===!0&&y("size",r.value),y("space",n.modelValue),y("offset",c.value),Re(()=>{s.instances.footer===N&&(s.instances.footer=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const w=Gs(e.default,[O(Bt,{debounce:0,onResize:b})]);return n.elevated===!0&&w.push(O("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),O("footer",{class:f.value,style:_.value,onFocusin:T},w)}}}),{passive:ss}=le,Ll=["both","horizontal","vertical"],Ml=Z({name:"QScrollObserver",props:{axis:{type:String,validator:n=>Ll.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:vl},emits:["scroll"],setup(n,{emit:e}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,s,r;P(()=>n.scrollTarget,()=>{a(),l()});function o(){i!==null&&i();const d=Math.max(0,Xs(s)),h=Js(s),f={top:d-t.position.top,left:h-t.position.left};if(n.axis==="vertical"&&f.top===0||n.axis==="horizontal"&&f.left===0)return;const _=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";t.position={top:d,left:h},t.directionChanged=t.direction!==_,t.delta=f,t.directionChanged===!0&&(t.direction=_,t.inflectionPoint=t.position),e("scroll",{...t})}function l(){s=Cl(r,n.scrollTarget),s.addEventListener("scroll",u,ss),u(!0)}function a(){s!==void 0&&(s.removeEventListener("scroll",u,ss),s=void 0)}function u(d){if(d===!0||n.debounce===0||n.debounce==="0")o();else if(i===null){const[h,f]=n.debounce?[setTimeout(o,n.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];i=()=>{f(h),i=null}}}const{proxy:c}=ae();return P(()=>c.$q.lang.rtl,o),ye(()=>{r=c.$el.parentNode,l()}),Re(()=>{i!==null&&i(),a()}),Object.assign(c,{trigger:u,getPosition:()=>t}),$n}}),Ol=Z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:n=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(n.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(n,{slots:e,emit:t}){const{proxy:{$q:i}}=ae(),s=F(null),r=F(i.screen.height),o=F(n.container===!0?0:i.screen.width),l=F({position:0,direction:"down",inflectionPoint:0}),a=F(0),u=F(Yn.value===!0?0:Tn()),c=v(()=>"q-layout q-layout--"+(n.container===!0?"containerized":"standard")),d=v(()=>n.container===!1?{minHeight:i.screen.height+"px"}:null),h=v(()=>u.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=v(()=>u.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function _(N){if(n.container===!0||document.qScrollPrevented!==!0){const w={position:N.position.top,direction:N.direction,directionChanged:N.directionChanged,inflectionPoint:N.inflectionPoint.top,delta:N.delta.top};l.value=w,n.onScroll!==void 0&&t("scroll",w)}}function y(N){const{height:w,width:L}=N;let $=!1;r.value!==w&&($=!0,r.value=w,n.onScrollHeight!==void 0&&t("scrollHeight",w),b()),o.value!==L&&($=!0,o.value=L),$===!0&&n.onResize!==void 0&&t("resize",N)}function E({height:N}){a.value!==N&&(a.value=N,b())}function b(){if(n.container===!0){const N=r.value>a.value?Tn():0;u.value!==N&&(u.value=N)}}let g=null;const T={instances:{},view:v(()=>n.view),isContainer:v(()=>n.container),rootRef:s,height:r,containerHeight:a,scrollbarWidth:u,totalWidth:v(()=>o.value+u.value),rows:v(()=>{const N=n.view.toLowerCase().split(" ");return{top:N[0].split(""),middle:N[1].split(""),bottom:N[2].split("")}}),header:At({size:0,offset:0,space:!1}),right:At({size:300,offset:0,space:!1}),footer:At({size:0,offset:0,space:!1}),left:At({size:300,offset:0,space:!1}),scroll:l,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(N,w,L){T[N][w]=L}};if(Us(yt,T),Tn()>0){let N=function(){$=null,$e.classList.remove("hide-scrollbar")},w=function(){if($===null){if($e.scrollHeight>i.screen.height)return;$e.classList.add("hide-scrollbar")}else clearTimeout($);$=setTimeout(N,300)},L=function(be){$!==null&&be==="remove"&&(clearTimeout($),N()),window[`${be}EventListener`]("resize",w)},$=null;const $e=document.body;P(()=>n.container!==!0?"add":"remove",L),n.container!==!0&&L("add"),Wo(()=>{L("remove")})}return()=>{const N=Gs(e.default,[O(Ml,{onScroll:_}),O(Bt,{onResize:y})]),w=O("div",{class:c.value,style:d.value,ref:n.container===!0?void 0:s,tabindex:-1},N);return n.container===!0?O("div",{class:"q-layout-container overflow-hidden",ref:s},[O(Bt,{onResize:E}),O("div",{class:"absolute-full",style:h.value},[O("div",{class:"scroll",style:f.value},[w])])]):w}}});function rs(){return vt(Vo)}var os={};const ls="@firebase/database",as="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="";function Dl(n){Zs=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Jn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Fl(e)}}catch{}return new ql},Ne=er("localStorage"),Wl=er("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new Qo("@firebase/database"),Vl=function(){let n=1;return function(){return n++}}(),tr=function(n){const e=Zo(n),t=new el;t.update(e);const i=t.digest();return tl.encodeByteArray(i)},Et=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Et.apply(null,i):typeof i=="object"?e+=B(i):e+=i,e+=" "}return e};let st=null,us=!0;const Bl=function(n,e){p(!e,"Can't turn on custom loggers persistently."),We.logLevel=nl.VERBOSE,st=We.log.bind(We)},Q=function(...n){if(us===!0&&(us=!1,st===null&&Wl.get("logging_enabled")===!0&&Bl()),st){const e=Et.apply(null,n);st(e)}},Tt=function(n){return function(...e){Q(n,...e)}},Fn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Et(...n);We.error(e)},he=function(...n){const e=`FIREBASE FATAL ERROR: ${Et(...n)}`;throw We.error(e),new Error(e)},J=function(...n){const e="FIREBASE WARNING: "+Et(...n);We.warn(e)},Hl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ul=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ue="[MIN_NAME]",xe="[MAX_NAME]",Qe=function(n,e){if(n===e)return 0;if(n===Ue||e===xe)return-1;if(e===Ue||n===xe)return 1;{const t=cs(n),i=cs(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},zl=function(n,e){return n===e?0:n<e?-1:1},Ze=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},ei=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=B(e[i]),t+=":",t+=ei(n[e[i]]);return t+="}",t},ir=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function X(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sr=function(n){p(!nr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,l,a;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(a=t;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Gl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ql=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const $l=new RegExp("^-?(0*)\\d{1,10}$"),Kl=-2147483648,jl=2147483647,cs=function(n){if($l.test(n)){const e=Number(n);if(e>=Kl&&e<=jl)return e}return null},bt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw J("Exception was thrown by user callback.",t),e},Math.floor(0))}},Xl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){J(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(e)}}class Wt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Wt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="5",rr="v",or="s",lr="r",ar="f",ur=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cr="ls",dr="p",qn="ac",hr="websocket",fr="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t,i,s,r=!1,o="",l=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ne.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ne.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ea(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pr(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===hr)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===fr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ea(n)&&(t.ns=n.namespace);const s=[];return X(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.counters_={}}incrementCounter(e,t=1){fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ll(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={},kn={};function ni(n){const e=n.toString();return xn[e]||(xn[e]=new ta),xn[e]}function na(n,e){const t=n.toString();return kn[t]||(kn[t]=e()),kn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&bt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="start",sa="close",ra="pLPCommand",oa="pRTLPCB",mr="id",gr="pw",vr="ser",la="cb",aa="seg",ua="ts",ca="d",da="dframe",yr=1870,Cr=30,ha=yr-Cr,fa=25e3,_a=3e4;class Fe{constructor(e,t,i,s,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tt(e),this.stats_=ni(t),this.urlFn=a=>(this.appCheckToken&&(a[qn]=this.appCheckToken),pr(t,fr,a))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ia(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_a)),Ul(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ii((...r)=>{const[o,l,a,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ds)this.id=l,this.password=a;else if(o===sa)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[ds]="t",i[vr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[la]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rr]=ti,this.transportSessionId&&(i[or]=this.transportSessionId),this.lastSessionId&&(i[cr]=this.lastSessionId),this.applicationId&&(i[dr]=this.applicationId),this.appCheckToken&&(i[qn]=this.appCheckToken),typeof location<"u"&&location.hostname&&ur.test(location.hostname)&&(i[lr]=ar);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return Fe.forceAllow_?!0:!Fe.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Gl()&&!Ql()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ul(t),s=ir(i,ha);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[da]="t",i[mr]=e,i[gr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ii{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vl(),window[ra+this.uniqueCallbackIdentifier]=e,window[oa+this.uniqueCallbackIdentifier]=t,this.myIFrame=ii.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Q("frame writing exception"),l.stack&&Q(l.stack),Q(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Q("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[mr]=this.myID,e[gr]=this.myPW,e[vr]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cr+i.length<=yr;){const o=this.pendingSegs.shift();i=i+"&"+aa+s+"="+o.seg+"&"+ua+s+"="+o.ts+"&"+ca+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(fa)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=16384,ma=45e3;let Ht=null;typeof MozWebSocket<"u"?Ht=MozWebSocket:typeof WebSocket<"u"&&(Ht=WebSocket);class ie{constructor(e,t,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tt(this.connId),this.stats_=ni(t),this.connURL=ie.connectionURL_(t,o,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[rr]=ti,typeof location<"u"&&location.hostname&&ur.test(location.hostname)&&(o[lr]=ar),t&&(o[or]=t),i&&(o[cr]=i),s&&(o[qn]=s),r&&(o[dr]=r),pr(e,hr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ne.set("previous_websocket_failure",!0);try{let i;Ys(),this.mySock=new Ht(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ht!==null&&!ie.forceDisallow_}static previouslyFailed(){return Ne.isInMemoryStorage||Ne.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ne.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Jn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ir(t,pa);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ma))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2;ie.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static get ALL_TRANSPORTS(){return[Fe,ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ie&&ie.isAvailable();let i=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ie];else{const s=this.transports_=[];for(const r of ut.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ut.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ut.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=6e4,va=5e3,ya=10*1024,Ca=100*1024,Pn="t",hs="d",wa="s",fs="r",Ea="e",_s="o",ps="a",ms="n",gs="p",Ta="h";class ba{constructor(e,t,i,s,r,o,l,a,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tt("c:"+this.id+":"),this.transportManager_=new ut(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=rt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ca?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ya?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pn in e){const t=e[Pn];t===ps?this.upgradeIfSecondaryHealthy_():t===fs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_s&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ze("t",e),i=Ze("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ps,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ms,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ze("t",e),i=Ze("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ze(Pn,e);if(hs in e){const i=e[hs];if(t===Ta){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ms){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===wa?this.onConnectionShutdown_(i):t===fs?this.onReset_(i):t===Ea?Fn("Server Error: "+i):t===_s?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ti!==i&&J("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),rt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ga))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(va))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ne.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Er{static getInstance(){return new Ut}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ks()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=32,ys=768;class A{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new A("")}function R(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ce(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new A(n.pieces_,e)}function Tr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Sa(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function br(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Sr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new A(e,0)}function H(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof A)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new A(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=R(n),i=R(e);if(t===null)return e;if(t===i)return Y(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ir(n,e){if(Ce(n)!==Ce(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function se(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ce(n)>Ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Ia{constructor(e,t){this.errorPrefix_=t,this.parts_=br(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=en(this.parts_[i]);Nr(this)}}function Na(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=en(e),Nr(n)}function Ra(n){const e=n.parts_.pop();n.byteLength_-=en(e),n.parts_.length>0&&(n.byteLength_-=1)}function Nr(n){if(n.byteLength_>ys)throw new Error(n.errorPrefix_+"has a key path longer than "+ys+" bytes ("+n.byteLength_+").");if(n.parts_.length>vs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vs+") or object contains a cycle "+Ie(n))}function Ie(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Er{static getInstance(){return new si}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=1e3,xa=60*5*1e3,Cs=30*1e3,ka=1.3,Pa=3e4,Aa="server_kill",ws=3;class de extends wr{constructor(e,t,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=de.nextPersistentConnectionId_++,this.log_=Tt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=et,this.maxReconnectDelay_=xa,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ys())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");si.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ut.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(B(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new $s,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;de.warnOnListenWarnings_(a,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&fe(e,"w")){const i=He(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();J(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||il(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=sl(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Fn("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=et,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=et,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Pa&&(this.reconnectDelay_=et),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ka)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+de.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},u=function(d){p(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Q("getToken() completed but was canceled"):(Q("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new ba(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{J(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Aa)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&J(d),a())}}}interrupt(e){Q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ui(this.interruptReasons_)&&(this.reconnectDelay_=et,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ei(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new A(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ws&&(this.reconnectDelay_=Cs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ws&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Zs.replace(/\./g,"-")]=1,Ks()?e["framework.cordova"]=1:rl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ut.getInstance().currentlyOnline();return Ui(this.interruptReasons_)&&e}}de.nextPersistentConnectionId_=0;de.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new S(Ue,e),s=new S(Ue,t);return this.compare(i,s)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;class Rr extends tn{static get __EMPTY_NODE(){return Ft}static set __EMPTY_NODE(e){Ft=e}compare(e,t){return Qe(e.name,t.name)}isDefinedOn(e){throw wt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(xe,Ft)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Ft)}toString(){return".key"}}const Ve=new Rr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??z.RED,this.left=s??j.EMPTY_NODE,this.right=r??j.EMPTY_NODE}copy(e,t,i,s,r){return new z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return j.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return j.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class La{copy(e,t,i,s,r){return this}insert(e,t,i){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class j{constructor(e,t=j.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new j(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new j(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qt(this.root_,null,this.comparator_,!0,e)}}j.EMPTY_NODE=new La;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e){return Qe(n.name,e.name)}function ri(n,e){return Qe(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;function Oa(n){Wn=n}const xr=function(n){return typeof n=="number"?"number:"+sr(n):"string:"+n},kr=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fe(e,".sv"),"Priority must be a string or number.")}else p(n===Wn||n.isEmpty(),"priority of unexpected type.");p(n===Wn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class U{static set __childrenNodeConstructor(e){Es=e}static get __childrenNodeConstructor(){return Es}constructor(e,t=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:R(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=R(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sr(this.value_):e+=this.value_,this.lazyHash_=tr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=U.VALUE_TYPE_ORDER.indexOf(t),r=U.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr,Ar;function Da(n){Pr=n}function Fa(n){Ar=n}class qa extends tn{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(xe,new U("[PRIORITY-POST]",Ar))}makePost(e,t){const i=Pr(e);return new S(t,new U("[PRIORITY-POST]",i))}toString(){return".priority"}}const W=new qa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=Math.log(2);class Va{constructor(e){const t=r=>parseInt(Math.log(r)/Wa,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zt=function(n,e,t,i){n.sort(e);const s=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=n[a],h=t?t(d):d,new z(h,d.node,z.BLACK,null,null);{const f=parseInt(c/2,10)+a,_=s(a,f),y=s(f+1,u);return d=n[f],h=t?t(d):d,new z(h,d.node,z.BLACK,_,y)}},r=function(a){let u=null,c=null,d=n.length;const h=function(_,y){const E=d-_,b=d;d-=_;const g=s(E+1,b),T=n[E],N=t?t(T):T;f(new z(N,T.node,y,null,g))},f=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(_+1));y?h(E,z.BLACK):(h(E,z.BLACK),h(E,z.RED))}return c},o=new Va(n.length),l=r(o);return new j(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An;const De={};class ce{static get Default(){return p(De&&W,"ChildrenNode.ts has not been loaded"),An=An||new ce({".priority":De},{".priority":W}),An}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=He(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof j?t:null}hasIndex(e){return fe(this.indexSet_,e.toString())}addIndex(e,t){p(e!==Ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=zt(i,e.getCompare()):l=De;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new ce(c,u)}addToIndexes(e,t){const i=Vt(this.indexes_,(s,r)=>{const o=He(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===De)if(o.isDefinedOn(e.node)){const l=[],a=t.getIterator(S.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),zt(l,o.getCompare())}else return De;else{const l=t.get(e.name);let a=s;return l&&(a=a.remove(new S(e.name,l))),a.insert(e,e.node)}});return new ce(i,this.indexSet_)}removeFromIndexes(e,t){const i=Vt(this.indexes_,s=>{if(s===De)return s;{const r=t.get(e.name);return r?s.remove(new S(e.name,r)):s}});return new ce(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt;class C{static get EMPTY_NODE(){return tt||(tt=new C(new j(ri),null,ce.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&kr(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||tt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?tt:t}}getChild(e){const t=R(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new S(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?tt:this.priorityNode_;return new C(s,o,r)}}updateChild(e,t){const i=R(e);if(i===null)return t;{p(R(e)!==".priority"||Ce(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(M(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(W,(o,l)=>{t[o]=l.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xr(this.getPriority().val())+":"),this.forEachChild(W,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":tr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===St?-1:0}withIndex(e){if(e===Ve||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ve||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(W),s=t.getIterator(W);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ve?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ba extends C{constructor(){super(new j(ri),C.EMPTY_NODE,ce.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const St=new Ba;Object.defineProperties(S,{MIN:{value:new S(Ue,C.EMPTY_NODE)},MAX:{value:new S(xe,St)}});Rr.__EMPTY_NODE=C.EMPTY_NODE;U.__childrenNodeConstructor=C;Oa(St);Fa(St);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=!0;function G(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new U(t,G(e))}if(!(n instanceof Array)&&Ha){const t=[];let i=!1;if(X(n,(o,l)=>{if(o.substring(0,1)!=="."){const a=G(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),t.push(new S(o,a)))}}),t.length===0)return C.EMPTY_NODE;const r=zt(t,Ma,o=>o.name,ri);if(i){const o=zt(t,W.getCompare());return new C(r,G(e),new ce({".priority":o},{".priority":W}))}else return new C(r,G(e),ce.Default)}else{let t=C.EMPTY_NODE;return X(n,(i,s)=>{if(fe(n,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(G(e))}}Da(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends tn{constructor(e){super(),this.indexPath_=e,p(!I(e)&&R(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Qe(e.name,t.name):r}makePost(e,t){const i=G(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(t,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,St);return new S(xe,e)}toString(){return br(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends tn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qe(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const i=G(e);return new S(t,i)}toString(){return".value"}}const Ga=new za;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return{type:"value",snapshotNode:n}}function ze(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ct(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Qa(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ct(t,l)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ze(t,i)):o.trackChildChange(dt(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(W,(s,r)=>{t.hasChild(s)||i.trackChildChange(ct(s,r))}),t.isLeafNode()||t.forEachChild(W,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(dt(s,r,o))}else i.trackChildChange(ze(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.indexedFilter_=new oi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ht.getStartPost_(e),this.endPost_=ht.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new S(t,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=C.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,l)=>{r.matches(new S(o,l))||(s=s.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ht(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new S(t,i))||(i=C.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const l=e;p(l.numChildren()===this.limit_,"");const a=new S(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(t)){const d=l.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===t||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,a);if(c&&!i.isEmpty()&&f>=0)return r?.trackChildChange(dt(t,i,d)),l.updateImmediateChild(t,i);{r?.trackChildChange(ct(t,d));const y=l.updateImmediateChild(t,C.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r?.trackChildChange(ze(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:c&&o(u,a)>=0?(r!=null&&(r.trackChildChange(ct(u.name,u.node)),r.trackChildChange(ze(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ue}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new li;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $a(n){return n.loadsAllData()?new oi(n.getIndex()):n.hasLimit()?new Ya(n):new ht(n)}function Ts(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===Ga?t="$value":n.index_===Ve?t="$key":(p(n.index_ instanceof Ua,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=B(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+B(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=B(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function bs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends wr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Tt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Gt.getListenId_(e,i),l={};this.listens_[o]=l;const a=Ts(e._queryParams);this.restRequest_(r+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,i),He(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",s(h,null)}})}unlisten(e,t){const i=Gt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ts(e._queryParams),i=e._path.toString(),s=new $s;return this.restRequest_(i+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ol(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Jn(l.responseText)}catch{J("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&J("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return{value:null,children:new Map}}function Mr(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=R(e);n.children.has(i)||n.children.set(i,Qt());const s=n.children.get(i);e=M(e),Mr(s,e,t)}}function Vn(n,e,t){n.value!==null?t(e,n.value):ja(n,(i,s)=>{const r=new A(e.toString()+"/"+i);Vn(s,r,t)})}function ja(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&X(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=10*1e3,Ja=30*1e3,Za=5*60*1e3;class eu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Xa(e);const i=Ss+(Ja-Ss)*Math.random();rt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;X(e,(s,r)=>{r>0&&fe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),rt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Za))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function Or(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ai(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ui(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=re.ACK_USER_WRITE,this.source=Or()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new A(e));return new Yt(k(),t,this.revert)}}else return p(R(this.path)===e,"operationForChild called for unrelated child."),new Yt(M(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new ft(this.source,k()):new ft(this.source,M(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=re.OVERWRITE}operationForChild(e){return I(this.path)?new ke(this.source,k(),this.snap.getImmediateChild(e)):new ke(this.source,M(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=re.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new A(e));return t.isEmpty()?null:t.value?new ke(this.source,k(),t.value):new _t(this.source,k(),t)}else return p(R(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _t(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=R(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qa(o.childName,o.snapshotNode))}),nt(n,s,"child_removed",e,i,t),nt(n,s,"child_added",e,i,t),nt(n,s,"child_moved",r,i,t),nt(n,s,"child_changed",e,i,t),nt(n,s,"value",e,i,t),s}function nt(n,e,t,i,s,r){const o=i.filter(l=>l.type===t);o.sort((l,a)=>su(n,l,a)),o.forEach(l=>{const a=iu(n,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,n.query_))})})}function iu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function su(n,e,t){if(e.childName==null||t.childName==null)throw wt("Should only compare child_ events.");const i=new S(e.childName,e.snapshotNode),s=new S(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(n,e){return{eventCache:n,serverCache:e}}function ot(n,e,t,i){return nn(new we(e,t,i),n.serverCache)}function Dr(n,e,t,i){return nn(n.eventCache,new we(e,t,i))}function $t(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;const ru=()=>(Ln||(Ln=new j(zl)),Ln);class D{static fromObject(e){let t=new D(null);return X(e,(i,s)=>{t=t.set(new A(i),s)}),t}constructor(e,t=ru()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(I(e))return null;{const i=R(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:H(new A(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=R(e),i=this.children.get(t);return i!==null?i.subtree(M(e)):new D(null)}}set(e,t){if(I(e))return new D(t,this.children);{const i=R(e),r=(this.children.get(i)||new D(null)).set(M(e),t),o=this.children.insert(i,r);return new D(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new D(null):new D(null,this.children);{const t=R(e),i=this.children.get(t);if(i){const s=i.remove(M(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new D(null):new D(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=R(e),i=this.children.get(t);return i?i.get(M(e)):null}}setTree(e,t){if(I(e))return t;{const i=R(e),r=(this.children.get(i)||new D(null)).setTree(M(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new D(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(H(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(I(e))return null;{const r=R(e),o=this.children.get(r);return o?o.findOnPath_(M(e),H(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(I(e))return this;{this.value&&i(t,this.value);const s=R(e),r=this.children.get(s);return r?r.foreachOnPath_(M(e),H(t,s),i):new D(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(H(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new D(null))}}function lt(n,e,t){if(I(e))return new oe(new D(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Y(s,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(s,r))}else{const s=new D(t),r=n.writeTree_.setTree(e,s);return new oe(r)}}}function Is(n,e,t){let i=n;return X(t,(s,r)=>{i=lt(i,H(e,s),r)}),i}function Ns(n,e){if(I(e))return oe.empty();{const t=n.writeTree_.setTree(e,new D(null));return new oe(t)}}function Bn(n,e){return Le(n,e)!=null}function Le(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function Rs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(i,s)=>{e.push(new S(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new S(i,s.value))}),e}function ge(n,e){if(I(e))return n;{const t=Le(n,e);return t!=null?new oe(new D(t)):new oe(n.writeTree_.subtree(e))}}function Hn(n){return n.writeTree_.isEmpty()}function Ge(n,e){return Fr(k(),n.writeTree_,e)}function Fr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Fr(H(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(H(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n,e){return Br(e,n)}function ou(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=lt(n.visibleWrites,e,t)),n.lastWriteId=i}function lu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function au(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&uu(l,i.path)?s=!1:se(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return cu(n),!0;if(i.snap)n.visibleWrites=Ns(n.visibleWrites,i.path);else{const l=i.children;X(l,a=>{n.visibleWrites=Ns(n.visibleWrites,H(i.path,a))})}return!0}else return!1}function uu(n,e){if(n.snap)return se(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&se(H(n.path,t),e))return!0;return!1}function cu(n){n.visibleWrites=qr(n.allWrites,du,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function du(n){return n.visible}function qr(n,e,t){let i=oe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let l;if(r.snap)se(t,o)?(l=Y(t,o),i=lt(i,l,r.snap)):se(o,t)&&(l=Y(o,t),i=lt(i,k(),r.snap.getChild(l)));else if(r.children){if(se(t,o))l=Y(t,o),i=Is(i,l,r.children);else if(se(o,t))if(l=Y(o,t),I(l))i=Is(i,k(),r.children);else{const a=He(r.children,R(l));if(a){const u=a.getChild(M(l));i=lt(i,k(),u)}}}else throw wt("WriteRecord should have .snap or .children")}}return i}function Wr(n,e,t,i,s){if(!i&&!s){const r=Le(n.visibleWrites,e);if(r!=null)return r;{const o=ge(n.visibleWrites,e);if(Hn(o))return t;if(t==null&&!Bn(o,k()))return null;{const l=t||C.EMPTY_NODE;return Ge(o,l)}}}else{const r=ge(n.visibleWrites,e);if(!s&&Hn(r))return t;if(!s&&t==null&&!Bn(r,k()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(se(u.path,e)||se(e,u.path))},l=qr(n.allWrites,o,e),a=t||C.EMPTY_NODE;return Ge(l,a)}}}function hu(n,e,t){let i=C.EMPTY_NODE;const s=Le(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(W,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ge(n.visibleWrites,e);return t.forEachChild(W,(o,l)=>{const a=Ge(ge(r,new A(o)),l);i=i.updateImmediateChild(o,a)}),Rs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ge(n.visibleWrites,e);return Rs(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function fu(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=H(e,t);if(Bn(n.visibleWrites,r))return null;{const o=ge(n.visibleWrites,r);return Hn(o)?s.getChild(t):Ge(o,s.getChild(t))}}function _u(n,e,t,i){const s=H(e,t),r=Le(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ge(n.visibleWrites,s);return Ge(o,i.getNode().getImmediateChild(t))}else return null}function pu(n,e){return Le(n.visibleWrites,e)}function mu(n,e,t,i,s,r,o){let l;const a=ge(n.visibleWrites,e),u=Le(a,k());if(u!=null)l=u;else if(t!=null)l=Ge(a,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let f=h.getNext();for(;f&&c.length<s;)d(f,i)!==0&&c.push(f),f=h.getNext();return c}else return[]}function gu(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function Kt(n,e,t,i){return Wr(n.writeTree,n.treePath,e,t,i)}function ci(n,e){return hu(n.writeTree,n.treePath,e)}function xs(n,e,t,i){return fu(n.writeTree,n.treePath,e,t,i)}function jt(n,e){return pu(n.writeTree,H(n.treePath,e))}function vu(n,e,t,i,s,r){return mu(n.writeTree,n.treePath,e,t,i,s,r)}function di(n,e,t){return _u(n.writeTree,n.treePath,e,t)}function Vr(n,e){return Br(H(n.treePath,e),n.writeTree)}function Br(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,dt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,ct(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ze(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,dt(i,e.snapshotNode,s.oldSnap));else throw wt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Hr=new Cu;class hi{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new we(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return di(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pe(this.viewCache_),r=vu(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n){return{filter:n}}function Eu(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Tu(n,e,t,i,s){const r=new yu;let o,l;if(t.type===re.OVERWRITE){const u=t;u.source.fromUser?o=Un(n,e,u.path,u.snap,i,s,r):(p(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!I(u.path),o=Xt(n,e,u.path,u.snap,i,s,l,r))}else if(t.type===re.MERGE){const u=t;u.source.fromUser?o=Su(n,e,u.path,u.children,i,s,r):(p(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=zn(n,e,u.path,u.children,i,s,l,r))}else if(t.type===re.ACK_USER_WRITE){const u=t;u.revert?o=Ru(n,e,u.path,i,s,r):o=Iu(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===re.LISTEN_COMPLETE)o=Nu(n,e,t.path,i,r);else throw wt("Unknown operation type: "+t.type);const a=r.getChanges();return bu(e,o,a),{viewCache:o,changes:a}}function bu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=$t(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Lr($t(e)))}}function Ur(n,e,t,i,s,r){const o=e.eventCache;if(jt(i,t)!=null)return e;{let l,a;if(I(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pe(e),c=u instanceof C?u:C.EMPTY_NODE,d=ci(i,c);l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=Kt(i,Pe(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=R(t);if(u===".priority"){p(Ce(t)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=xs(i,t,c,a);d!=null?l=n.filter.updatePriority(c,d):l=o.getNode()}else{const c=M(t);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=xs(i,t,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=di(i,u,e.serverCache);d!=null?l=n.filter.updateChild(o.getNode(),u,d,c,s,r):l=o.getNode()}}return ot(e,l,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function Xt(n,e,t,i,s,r,o,l){const a=e.serverCache;let u;const c=o?n.filter:n.filter.getIndexedFilter();if(I(t))u=c.updateFullNode(a.getNode(),i,null);else if(c.filtersNodes()&&!a.isFiltered()){const f=a.getNode().updateChild(t,i);u=c.updateFullNode(a.getNode(),f,null)}else{const f=R(t);if(!a.isCompleteForPath(t)&&Ce(t)>1)return e;const _=M(t),E=a.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?u=c.updatePriority(a.getNode(),E):u=c.updateChild(a.getNode(),f,E,_,Hr,null)}const d=Dr(e,u,a.isFullyInitialized()||I(t),c.filtersNodes()),h=new hi(s,d,r);return Ur(n,d,t,s,h,l)}function Un(n,e,t,i,s,r,o){const l=e.eventCache;let a,u;const c=new hi(s,e,r);if(I(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),a=ot(e,u,!0,n.filter.filtersNodes());else{const d=R(t);if(d===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),a=ot(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=M(t),f=l.getNode().getImmediateChild(d);let _;if(I(h))_=i;else{const y=c.getCompleteChild(d);y!=null?Tr(h)===".priority"&&y.getChild(Sr(h)).isEmpty()?_=y:_=y.updateChild(h,i):_=C.EMPTY_NODE}if(f.equals(_))a=e;else{const y=n.filter.updateChild(l.getNode(),d,_,h,c,o);a=ot(e,y,l.isFullyInitialized(),n.filter.filtersNodes())}}}return a}function ks(n,e){return n.eventCache.isCompleteForChild(e)}function Su(n,e,t,i,s,r,o){let l=e;return i.foreach((a,u)=>{const c=H(t,a);ks(e,R(c))&&(l=Un(n,l,c,u,s,r,o))}),i.foreach((a,u)=>{const c=H(t,a);ks(e,R(c))||(l=Un(n,l,c,u,s,r,o))}),l}function Ps(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function zn(n,e,t,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;I(t)?u=i:u=new D(null).setTree(t,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),_=Ps(n,f,h);a=Xt(n,a,new A(d),_,s,r,o,l)}}),u.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!f){const _=e.serverCache.getNode().getImmediateChild(d),y=Ps(n,_,h);a=Xt(n,a,new A(d),y,s,r,o,l)}}),a}function Iu(n,e,t,i,s,r,o){if(jt(s,t)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(I(t)&&a.isFullyInitialized()||a.isCompleteForPath(t))return Xt(n,e,t,a.getNode().getChild(t),s,r,l,o);if(I(t)){let u=new D(null);return a.getNode().forEachChild(Ve,(c,d)=>{u=u.set(new A(c),d)}),zn(n,e,t,u,s,r,l,o)}else return e}else{let u=new D(null);return i.foreach((c,d)=>{const h=H(t,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),zn(n,e,t,u,s,r,l,o)}}function Nu(n,e,t,i,s){const r=e.serverCache,o=Dr(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return Ur(n,o,t,i,Hr,s)}function Ru(n,e,t,i,s,r){let o;if(jt(i,t)!=null)return e;{const l=new hi(i,e,s),a=e.eventCache.getNode();let u;if(I(t)||R(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Kt(i,Pe(e));else{const d=e.serverCache.getNode();p(d instanceof C,"serverChildren would be complete if leaf node"),c=ci(i,d)}c=c,u=n.filter.updateFullNode(a,c,r)}else{const c=R(t);let d=di(i,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=n.filter.updateChild(a,c,d,M(t),l,r):e.eventCache.getNode().hasChild(c)?u=n.filter.updateChild(a,c,C.EMPTY_NODE,M(t),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kt(i,Pe(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||jt(i,k())!=null,ot(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new oi(i.getIndex()),r=$a(i);this.processor_=wu(r);const o=t.serverCache,l=t.eventCache,a=s.updateFullNode(C.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(C.EMPTY_NODE,l.getNode(),null),c=new we(a,o.isFullyInitialized(),s.filtersNodes()),d=new we(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=nn(d,c),this.eventGenerator_=new tu(this.query_)}get query(){return this.query_}}function ku(n){return n.viewCache_.serverCache.getNode()}function Pu(n){return $t(n.viewCache_)}function Au(n,e){const t=Pe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(R(e)).isEmpty())?t.getChild(e):null}function As(n){return n.eventRegistrations_.length===0}function Lu(n,e){n.eventRegistrations_.push(e)}function Ls(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Ms(n,e,t,i){e.type===re.MERGE&&e.source.queryId!==null&&(p(Pe(n.viewCache_),"We should always have a full cache before handling merges"),p($t(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Tu(n.processor_,s,e,t,i);return Eu(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,zr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Mu(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{i.push(ze(r,o))}),t.isFullyInitialized()&&i.push(Lr(t.getNode())),zr(n,i,t.getNode(),e)}function zr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return nu(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt;class Gr{constructor(){this.views=new Map}}function Ou(n){p(!Jt,"__referenceConstructor has already been defined"),Jt=n}function Du(){return p(Jt,"Reference.ts has not been loaded"),Jt}function Fu(n){return n.views.size===0}function fi(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Ms(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Ms(o,e,t,i));return r}}function Qr(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Kt(t,s?i:null),a=!1;l?a=!0:i instanceof C?(l=ci(t,i),a=!1):(l=C.EMPTY_NODE,a=!1);const u=nn(new we(l,a,!1),new we(i,s,!1));return new xu(e,u)}return o}function qu(n,e,t,i,s,r){const o=Qr(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Lu(o,t),Mu(o,t)}function Wu(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const l=Ee(n);if(s==="default")for(const[a,u]of n.views.entries())o=o.concat(Ls(u,t,i)),As(u)&&(n.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=n.views.get(s);a&&(o=o.concat(Ls(a,t,i)),As(a)&&(n.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ee(n)&&r.push(new(Du())(e._repo,e._path)),{removed:r,events:o}}function Yr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ve(n,e){let t=null;for(const i of n.views.values())t=t||Au(i,e);return t}function $r(n,e){if(e._queryParams.loadsAllData())return rn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Kr(n,e){return $r(n,e)!=null}function Ee(n){return rn(n)!=null}function rn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt;function Vu(n){p(!Zt,"__referenceConstructor has already been defined"),Zt=n}function Bu(){return p(Zt,"Reference.ts has not been loaded"),Zt}let Hu=1;class Os{constructor(e){this.listenProvider_=e,this.syncPointTree_=new D(null),this.pendingWriteTree_=gu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Uu(n,e,t,i,s){return ou(n.pendingWriteTree_,e,t,i,s),s?Nt(n,new ke(Or(),e,t)):[]}function qe(n,e,t=!1){const i=lu(n.pendingWriteTree_,e);if(au(n.pendingWriteTree_,e)){let r=new D(null);return i.snap!=null?r=r.set(k(),!0):X(i.children,o=>{r=r.set(new A(o),!0)}),Nt(n,new Yt(i.path,r,t))}else return[]}function It(n,e,t){return Nt(n,new ke(ai(),e,t))}function zu(n,e,t){const i=D.fromObject(t);return Nt(n,new _t(ai(),e,i))}function Gu(n,e){return Nt(n,new ft(ai(),e))}function Qu(n,e,t){const i=_i(n,t);if(i){const s=pi(i),r=s.path,o=s.queryId,l=Y(r,e),a=new ft(ui(o),l);return mi(n,r,a)}else return[]}function jr(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Kr(o,e))){const a=Wu(o,e,t,i);Fu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!s){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>Ee(f));if(c&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=ju(h);for(let _=0;_<f.length;++_){const y=f[_],E=y.query,b=to(n,y);n.listenProvider_.startListening(at(E),pt(n,E),b.hashFn,b.onComplete)}}}!d&&u.length>0&&!i&&(c?n.listenProvider_.stopListening(at(e),null):u.forEach(h=>{const f=n.queryToTagMap.get(on(h));n.listenProvider_.stopListening(at(h),f)}))}Xu(n,u)}return l}function Xr(n,e,t,i){const s=_i(n,i);if(s!=null){const r=pi(s),o=r.path,l=r.queryId,a=Y(o,e),u=new ke(ui(l),a,t);return mi(n,o,u)}else return[]}function Yu(n,e,t,i){const s=_i(n,i);if(s){const r=pi(s),o=r.path,l=r.queryId,a=Y(o,e),u=D.fromObject(t),c=new _t(ui(l),a,u);return mi(n,o,c)}else return[]}function $u(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const _=Y(h,s);r=r||ve(f,_),o=o||Ee(f)});let l=n.syncPointTree_.get(s);l?(o=o||Ee(l),r=r||ve(l,k())):(l=new Gr,n.syncPointTree_=n.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,_)=>{const y=ve(_,k());y&&(r=r.updateImmediateChild(f,y))}));const u=Kr(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=on(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Ju();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const c=sn(n.pendingWriteTree_,s);let d=qu(l,e,t,c,r,a);if(!u&&!o&&!i){const h=$r(l,e);d=d.concat(Zu(n,e,h))}return d}function Jr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const a=Y(o,e),u=ve(l,a);if(u)return u});return Wr(s,e,r,t,!0)}function Ku(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,c)=>{const d=Y(u,t);i=i||ve(c,d)});let s=n.syncPointTree_.get(t);s?i=i||ve(s,k()):(s=new Gr,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new we(i,!0,!1):null,l=sn(n.pendingWriteTree_,e._path),a=Qr(s,e,l,r?o.getNode():C.EMPTY_NODE,r);return Pu(a)}function Nt(n,e){return Zr(e,n.syncPointTree_,null,sn(n.pendingWriteTree_,k()))}function Zr(n,e,t,i){if(I(n.path))return eo(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=ve(s,k()));let r=[];const o=R(n.path),l=n.operationForChild(o),a=e.children.get(o);if(a&&l){const u=t?t.getImmediateChild(o):null,c=Vr(i,o);r=r.concat(Zr(l,a,u,c))}return s&&(r=r.concat(fi(s,n,i,t))),r}}function eo(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=ve(s,k()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=t?t.getImmediateChild(o):null,u=Vr(i,o),c=n.operationForChild(o);c&&(r=r.concat(eo(c,l,a,u)))}),s&&(r=r.concat(fi(s,n,i,t))),r}function to(n,e){const t=e.query,i=pt(n,t);return{hashFn:()=>(ku(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Qu(n,t._path,i):Gu(n,t._path);{const r=Yl(s,t);return jr(n,t,null,r)}}}}function pt(n,e){const t=on(e);return n.queryToTagMap.get(t)}function on(n){return n._path.toString()+"$"+n._queryIdentifier}function _i(n,e){return n.tagToQueryMap.get(e)}function pi(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new A(n.substr(0,e))}}function mi(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=sn(n.pendingWriteTree_,e);return fi(i,t,s,null)}function ju(n){return n.fold((e,t,i)=>{if(t&&Ee(t))return[rn(t)];{let s=[];return t&&(s=Yr(t)),X(i,(r,o)=>{s=s.concat(o)}),s}})}function at(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Bu())(n._repo,n._path):n}function Xu(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=on(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Ju(){return Hu++}function Zu(n,e,t){const i=e._path,s=pt(n,e),r=to(n,t),o=n.listenProvider_.startListening(at(e),s,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(i);if(s)p(!Ee(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!I(u)&&c&&Ee(c))return[rn(c).query];{let h=[];return c&&(h=h.concat(Yr(c).map(f=>f.query))),X(d,(f,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];n.listenProvider_.stopListening(at(c),pt(n,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gi(t)}node(){return this.node_}}class vi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=H(this.path_,e);return new vi(this.syncTree_,t)}node(){return Jr(this.syncTree_,this.path_)}}const ec=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ds=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return tc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return nc(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},tc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},nc=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ic=function(n,e,t,i){return yi(e,new vi(t,n),i)},sc=function(n,e,t){return yi(n,new gi(e),t)};function yi(n,e,t){const i=n.getPriority().val(),s=Ds(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Ds(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new U(l,G(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new U(s))),o.forEachChild(W,(l,a)=>{const u=yi(a,e.getImmediateChild(l),t);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function wi(n,e){let t=e instanceof A?e:new A(e),i=n,s=R(t);for(;s!==null;){const r=He(i.node.children,s)||{children:{},childCount:0};i=new Ci(s,i,r),t=M(t),s=R(t)}return i}function Ye(n){return n.node.value}function no(n,e){n.node.value=e,Gn(n)}function io(n){return n.node.childCount>0}function rc(n){return Ye(n)===void 0&&!io(n)}function ln(n,e){X(n.node.children,(t,i)=>{e(new Ci(t,n,i))})}function so(n,e,t,i){t&&!i&&e(n),ln(n,s=>{so(s,e,!0,i)}),t&&i&&e(n)}function oc(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Rt(n){return new A(n.parent===null?n.name:Rt(n.parent)+"/"+n.name)}function Gn(n){n.parent!==null&&lc(n.parent,n.name,n)}function lc(n,e,t){const i=rc(t),s=fe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Gn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Gn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=/[\[\].#$\/\u0000-\u001F\u007F]/,uc=/[\[\].#$\u0000-\u001F\u007F]/,Mn=10*1024*1024,ro=function(n){return typeof n=="string"&&n.length!==0&&!ac.test(n)},oo=function(n){return typeof n=="string"&&n.length!==0&&!uc.test(n)},cc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oo(n)},lo=function(n,e,t){const i=t instanceof A?new Ia(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ie(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ie(i)+" with contents = "+e.toString());if(nr(e))throw new Error(n+"contains "+e.toString()+" "+Ie(i));if(typeof e=="string"&&e.length>Mn/3&&en(e)>Mn)throw new Error(n+"contains a string greater than "+Mn+" utf8 bytes "+Ie(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(X(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ro(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ie(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Na(i,o),lo(n,l,i),Ra(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ie(i)+" in addition to actual children.")}},ao=function(n,e,t,i){if(!oo(t))throw new Error(Qs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dc=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ao(n,e,t)},hc=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ro(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!cc(t))throw new Error(Qs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _c(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Ir(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Te(n,e,t){_c(n,t),pc(n,i=>se(i,e)||se(e,i))}function pc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(mc(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function mc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();st&&Q("event: "+t.toString()),bt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="repo_interrupt",vc=25;class yc{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qt(),this.transactionQueueTree_=new Ci,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cc(n,e,t){if(n.stats_=ni(n.repoInfo_),n.forceRestClient_||Xl())n.server_=new Gt(n.repoInfo_,(i,s,r,o)=>{Fs(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>qs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new de(n.repoInfo_,e,(i,s,r,o)=>{Fs(n,i,s,r,o)},i=>{qs(n,i)},i=>{Ec(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=na(n.repoInfo_,()=>new eu(n.stats_,n.server_)),n.infoData_=new Ka,n.infoSyncTree_=new Os({startListening:(i,s,r,o)=>{let l=[];const a=n.infoData_.getNode(i._path);return a.isEmpty()||(l=It(n.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ei(n,"connected",!1),n.serverSyncTree_=new Os({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(l,a)=>{const u=o(l,a);Te(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function wc(n){const t=n.infoData_.getNode(new A(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function uo(n){return ec({timestamp:wc(n)})}function Fs(n,e,t,i,s){n.dataUpdateCount++;const r=new A(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const a=Vt(t,u=>G(u));o=Yu(n.serverSyncTree_,r,a,s)}else{const a=G(t);o=Xr(n.serverSyncTree_,r,a,s)}else if(i){const a=Vt(t,u=>G(u));o=zu(n.serverSyncTree_,r,a)}else{const a=G(t);o=It(n.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Si(n,r)),Te(n.eventQueue_,l,o)}function qs(n,e){Ei(n,"connected",e),e===!1&&Sc(n)}function Ec(n,e){X(e,(t,i)=>{Ei(n,t,i)})}function Ei(n,e,t){const i=new A("/.info/"+e),s=G(t);n.infoData_.updateSnapshot(i,s);const r=It(n.infoSyncTree_,i,s);Te(n.eventQueue_,i,r)}function Tc(n){return n.nextWriteId_++}function bc(n,e,t){const i=Ku(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=G(s).withIndex(e._queryParams.getIndex());$u(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=It(n.serverSyncTree_,e._path,r);else{const l=pt(n.serverSyncTree_,e);o=Xr(n.serverSyncTree_,e._path,r,l)}return Te(n.eventQueue_,e._path,o),jr(n.serverSyncTree_,e,t,null,!0),r},s=>(Ti(n,"get for query "+B(e)+" failed: "+s),Promise.reject(new Error(s))))}function Sc(n){Ti(n,"onDisconnectEvents");const e=uo(n),t=Qt();Vn(n.onDisconnect_,k(),(s,r)=>{const o=ic(s,r,n.serverSyncTree_,e);Mr(t,s,o)});let i=[];Vn(t,k(),(s,r)=>{i=i.concat(It(n.serverSyncTree_,s,r));const o=xc(n,s);Si(n,o)}),n.onDisconnect_=Qt(),Te(n.eventQueue_,k(),i)}function Ic(n){n.persistentConnection_&&n.persistentConnection_.interrupt(gc)}function Ti(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Q(t,...e)}function co(n,e,t){return Jr(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function bi(n,e=n.transactionQueueTree_){if(e||an(n,e),Ye(e)){const t=fo(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Nc(n,Rt(e),t)}else io(e)&&ln(e,t=>{bi(n,t)})}function Nc(n,e,t){const i=t.map(u=>u.currentWriteId),s=co(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const c=t[u];p(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Y(e,c.path);r=r.updateChild(d,c.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;n.server_.put(a.toString(),l,u=>{Ti(n,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,c=c.concat(qe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();an(n,wi(n.transactionQueueTree_,e)),bi(n,n.transactionQueueTree_),Te(n.eventQueue_,e,c);for(let h=0;h<d.length;h++)bt(d[h])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{J("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}Si(n,e)}},o)}function Si(n,e){const t=ho(n,e),i=Rt(t),s=fo(n,t);return Rc(n,s,i),i}function Rc(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Y(t,a.path);let c=!1,d;if(p(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,s=s.concat(qe(n.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=vc)c=!0,d="maxretry",s=s.concat(qe(n.serverSyncTree_,a.currentWriteId,!0));else{const h=co(n,a.path,o);a.currentInputSnapshot=h;const f=e[l].update(h.val());if(f!==void 0){lo("transaction failed: Data returned ",f,a.path);let _=G(f);typeof f=="object"&&f!=null&&fe(f,".priority")||(_=_.updatePriority(h.getPriority()));const E=a.currentWriteId,b=uo(n),g=sc(_,h,b);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=g,a.currentWriteId=Tc(n),o.splice(o.indexOf(E),1),s=s.concat(Uu(n.serverSyncTree_,a.path,g,a.currentWriteId,a.applyLocally)),s=s.concat(qe(n.serverSyncTree_,E,!0))}else c=!0,d="nodata",s=s.concat(qe(n.serverSyncTree_,a.currentWriteId,!0))}Te(n.eventQueue_,t,s),s=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(d),!1,null))))}an(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)bt(i[l]);bi(n,n.transactionQueueTree_)}function ho(n,e){let t,i=n.transactionQueueTree_;for(t=R(e);t!==null&&Ye(i)===void 0;)i=wi(i,t),e=M(e),t=R(e);return i}function fo(n,e){const t=[];return _o(n,e,t),t.sort((i,s)=>i.order-s.order),t}function _o(n,e,t){const i=Ye(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ln(e,s=>{_o(n,s,t)})}function an(n,e){const t=Ye(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,no(e,t.length>0?t:void 0)}ln(e,i=>{an(n,i)})}function xc(n,e){const t=Rt(ho(n,e)),i=wi(n.transactionQueueTree_,e);return oc(i,s=>{On(n,s)}),On(n,i),so(i,s=>{On(n,s)}),t}function On(n,e){const t=Ye(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?no(e,void 0):t.length=r+1,Te(n.eventQueue_,Rt(e),s);for(let o=0;o<i.length;o++)bt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Pc(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):J(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ws=function(n,e){const t=Ac(n),i=t.namespace;t.domain==="firebase.com"&&he(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Hl();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _r(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new A(t.pathString)}},Ac=function(n){let e="",t="",i="",s="",r="",o=!0,l="https",a=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let c=n.indexOf("/");c===-1&&(c=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(c,d)),c<d&&(s=kc(n.substring(c,d)));const h=Pc(n.substring(Math.min(n.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const f=e.slice(0,u);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:t,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class Mc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return I(this._path)?null:Tr(this._path)}get ref(){return new _e(this._repo,this._path)}get _queryIdentifier(){const e=bs(this._queryParams),t=ei(e);return t==="{}"?"default":t}get _queryObject(){return bs(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof Ii))return!1;const t=this._repo===e._repo,i=Ir(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sa(this._path)}}class _e extends Ii{constructor(e,t){super(e,t,new li,!1)}get parent(){const e=Sr(this._path);return e===null?null:new _e(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new A(e),i=gt(this.ref,e);return new mt(this._node.getChild(t),i,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new mt(s,gt(this.ref,i),W)))}hasChild(e){const t=new A(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vs(n,e){return n=Ct(n),n._checkNotDeleted("ref"),e!==void 0?gt(n._root,e):n._root}function gt(n,e){return n=Ct(n),R(n._path)===null?dc("child","path",e):ao("child","path",e),new _e(n._repo,H(n._path,e))}function Bs(n){n=Ct(n);const e=new Oc(()=>{}),t=new Ni(e);return bc(n._repo,n,t).then(i=>new mt(i,new _e(n._repo,n._path),n._queryParams.getIndex()))}class Ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Lc("value",this,new mt(e.snapshotNode,new _e(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Mc(this,e,t):null}matches(e){return e instanceof Ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Ou(_e);Vu(_e);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="FIREBASE_DATABASE_EMULATOR_HOST",Qn={};let Fc=!1;function qc(n,e,t,i){n.repoInfo_=new _r(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Wc(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Q("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ws(r,s),l=o.repoInfo,a;typeof process<"u"&&os&&(a=os[Dc]),a?(r=`http://${a}?ns=${l.namespace}`,o=Ws(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new Zl(n.name,n.options,e);hc("Invalid Firebase Database URL",o),I(o.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Bc(l,n,u,new Jl(n.name,t));return new Hc(c,n)}function Vc(n,e){const t=Qn[e];(!t||t[n.key]!==n)&&he(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Ic(n),delete t[n.key]}function Bc(n,e,t,i){let s=Qn[e.name];s||(s={},Qn[e.name]=s);let r=s[n.toURLString()];return r&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yc(n,Fc,t,i),s[n.toURLString()]=r,r}class Hc{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _e(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vc(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")}}function Hs(n=Ko(),e){const t=Yo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=$o("database");i&&Uc(t,...i)}return t}function Uc(n,e,t,i={}){n=Ct(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&he("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Wt(Wt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:jo(i.mockUserToken,n.app.options.projectId);r=new Wt(o)}qc(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){Dl(al),Xo(new Jo("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Wc(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Hi(ls,as,n),Hi(ls,as,"esm2017")}de.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};de.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zc();const Gc={__name:"MainLayout",setup(n,{expose:e}){e();const t=F({}),i=Vs(Hs(zi));ye(async()=>{try{const u=await Bs(gt(i,"contents"));t.value=u.val()}catch(u){console.log(u)}});const s=rs(),r=F(!1),a={contents:t,dbRef:i,$q:s,rightDrawerOpen:r,toggleRightDrawer:()=>{r.value=!r.value},navLinks:[{id:1,title:"Home",link:"/",icon:"home"},{id:2,title:"Portofolio",link:"/portofolio",icon:"code"},{id:3,title:"Contact",link:"/contact",icon:"account_circle"}],ref:F,onMounted:ye,get useQuasar(){return rs},get app(){return zi},get getDatabase(){return Hs},get get(){return Bs},get child(){return gt},get storageRef(){return Vs}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},Qc={class:"col-md-4 text-center"},Yc={key:1,class:"col-md-8 text text-center text-black"},$c={class:"ml-2"},Kc={class:"text-caption"};function jc(n,e,t,i,s,r){const o=Ho("router-view");return je(),Oi(Uo,null,{default:V(()=>[q(Ol,{view:"lHh lpr lFf"},{default:V(()=>[q(dl,{class:"bg-white"},{default:V(()=>[q(Qi,null,{default:V(()=>[i.$q.screen.lt.sm?(je(),Oi(mn,{key:0,dense:"",flat:"",round:"",color:"primary",class:Di({"q-drawer--hidden-md":!0}),icon:"menu",onClick:i.toggleRightDrawer})):Fi("",!0),Xe("div",Qc,[q(Gi,null,{default:V(()=>[q(mn,{size:"lg",color:"positive",flat:"",to:"/",class:"text-primary text-weight-bold"},{default:V(()=>[Cn(Lt(i.contents.name),1)]),_:1})]),_:1})]),i.$q.screen.gt.sm?(je(),wn("div",Yc,[(je(),wn(qi,null,Wi(i.navLinks,l=>q(mn,{rounded:"",key:l.id,flat:"",class:Di({"bg-primary text-white q-btn--rounded":n.$route.path===l.link}),to:l.link},{default:V(()=>[q(Bi,{name:l.icon},null,8,["name"]),Xe("span",$c," "+Lt(l.title),1)]),_:2},1032,["class","to"])),64))])):Fi("",!0)]),_:1})]),_:1}),q(kl,{width:180,class:"bg-white border-w",modelValue:i.rightDrawerOpen,"onUpdate:modelValue":e[0]||(e[0]=l=>i.rightDrawerOpen=l),elevated:""},{default:V(()=>[q(fl,{separator:"",dense:""},{default:V(()=>[q(Ki,null,{default:V(()=>[q(En,null,{default:V(()=>[q($i,{class:"text-h6 text-center text-primary text-weight-bold",header:""},{default:V(()=>e[1]||(e[1]=[Cn("Menu")])),_:1})]),_:1})]),_:1}),e[2]||(e[2]=Xe("hr",null,null,-1)),(je(),wn(qi,null,Wi(i.navLinks,l=>q(Ki,{key:l.id,clickable:"",to:l.link},{default:V(()=>[q(En,{avatar:""},{default:V(()=>[q(Bi,{size:"20px",color:"black",name:l.icon},null,8,["name"])]),_:2},1024),q(En,null,{default:V(()=>[q($i,{class:"text-black"},{default:V(()=>[Cn(Lt(l.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1}),e[3]||(e[3]=Xe("hr",null,null,-1))]),_:1},8,["modelValue"]),q(Pl,null,{default:V(()=>[q(o)]),_:1}),q(Al,{bordered:"",class:"bg-primary text-white",height:"100px"},{default:V(()=>[q(Qi,null,{default:V(()=>[q(Gi,{class:"text-center"},{default:V(()=>[Xe("span",Kc,Lt(i.contents.footer),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const sd=Bo(Gc,[["render",jc],["__file","MainLayout.vue"]]);export{sd as default};
