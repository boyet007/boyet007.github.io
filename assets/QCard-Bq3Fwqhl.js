import{u as s,a as d}from"./use-dark-B4L15ONk.js";import{c as u,a as n,h as c,g as l}from"./index-C81koV2Z.js";import{h as q}from"./vm-C33txkT3.js";const g=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=l(),t=d(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},q(r.default))}});export{g as Q};
