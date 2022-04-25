import{d as L,o as n,c as l,F as m,r as w,a as f,b,n as k,t as g,p as x,e as $,f as v,g as V,h as H,i as A,w as U,T as W,j as Z,k as B,l as J}from"./vendor.206afc82.js";const Q=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=d(e);fetch(e.href,a)}};Q();const O=" Using word of the day instead.";function X(){if(location.search)try{const s=atob(location.search.slice(1));if(s.length!==5)alert(`Incorrect word length from encoded query. ${O}`);else return s}catch{alert(`Malformed encoded word query. ${O}`)}return z[Math.floor(Math.random()*z.length)]}const z=["smart","pretty","super","hardworking","wifely","motherly","daughterly","generous","caring","thoughtful","intelligent","capable","loving","lovable","giggly","smiley","sensitive","special","resourceful","incredible","educated","graceful","beautiful","sexy","passionate","impressive","remarkable","resilient","independent","reliable","bright","brave","powerful","colombian","spanish","kind","kissable","knowledgable","strong","glorious","sensual","vibrant","clever","fabulous","stylish","creative","amazing","playful","appealing","athletic","attractive","fit","cute","dreamy","stunning","gorgeous","perseverant","dressy","elegant","enchanting","magestic","friendly","hot","ineffable","winner","lovely","perfect","admirable","riveting","shining","brilliant","sharp","slick","smoking","trendsetting","faithful","loyal","yummy","meme","everything","exceptional","thoughtful","unique"];var M=(s,c)=>{const d=s.__vccOpts||s;for(const[o,e]of c)d[o]=e;return d};const Y=s=>(x("data-v-5e04d106"),s=s(),$(),s),ee={id:"keyboard"},te={class:"row"},se={key:0,class:"spacer"},re=["onClick"],ae={key:0},ne={key:1,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},le=Y(()=>f("path",{fill:"currentColor",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},null,-1)),oe=[le],ie={key:1,class:"spacer"},ue=L({props:{letterStates:null},emits:["key"],setup(s){const c=["qwertyuiop".split(""),"asdfghjkl".split(""),["Enter",..."zxcvbnm".split(""),"Backspace"]];return(d,o)=>(n(),l("div",ee,[(n(),l(m,null,w(c,(e,a)=>f("div",te,[a===1?(n(),l("div",se)):b("",!0),(n(!0),l(m,null,w(e,i=>(n(),l("button",{class:k([i.length>1&&"big",s.letterStates[i]]),onClick:_=>d.$emit("key",i)},[i!=="Backspace"?(n(),l("span",ae,g(i),1)):(n(),l("svg",ne,oe))],10,re))),256)),a===1?(n(),l("div",ie)):b("",!0)])),64))]))}});var ce=M(ue,[["__scopeId","data-v-5e04d106"]]),u;(function(s){s[s.INITIAL=0]="INITIAL",s.CORRECT="correct",s.PRESENT="present",s.ABSENT="absent"})(u||(u={}));const de=s=>(x("data-v-5431fc92"),s=s(),$(),s),fe={key:0,class:"message"},ve={key:0},pe=de(()=>f("header",null,[f("h1",{class:"text-indigo-600"},"Male is...")],-1)),he={id:"board"},me=L({setup(s){const c=X(),d=v(Array.from({length:7},()=>Array.from({length:c.length},()=>({letter:"",state:u.INITIAL}))));let o=v(0);const e=V(()=>d.value[o.value]);let a=v(""),i=v(""),_=v(-1),N=v(!1);const p=v({});let E=!0;const C=r=>R(r.key);window.addEventListener("keyup",C),H(()=>{window.removeEventListener("keyup",C)});function R(r){!E||(/^[a-zA-Z]$/.test(r)?j(r.toLowerCase()):r==="Backspace"?q():r==="Enter"&&D())}function j(r){for(const t of e.value)if(!t.letter){t.letter=r;break}}function q(){for(const r of[...e.value].reverse())if(r.letter){r.letter="";break}}function D(){if(e.value.every(r=>r.letter)){e.value.map(t=>t.letter).join("");const r=c.split("");e.value.forEach((t,y)=>{r[y]===t.letter&&(t.state=p.value[t.letter]=u.CORRECT,r[y]=null)}),e.value.forEach(t=>{!t.state&&r.includes(t.letter)&&(t.state=u.PRESENT,r[r.indexOf(t.letter)]=null,p.value[t.letter]||(p.value[t.letter]=u.PRESENT))}),e.value.forEach(t=>{t.state||(t.state=u.ABSENT,p.value[t.letter]||(p.value[t.letter]=u.ABSENT))}),E=!1,e.value.every(t=>t.state===u.CORRECT)?setTimeout(()=>{i.value=K(),T(["Genius","Magnificent","Impressive","Splendid","Great","Phew"][o.value],-1),N.value=!0},1600):o.value<d.value.length-1?(o.value++,setTimeout(()=>{E=!0},1600)):setTimeout(()=>{T(c.toUpperCase(),-1)},1600)}else F(),T("Not enough letters")}function T(r,t=1e3){a.value=r,t>0&&setTimeout(()=>{a.value=""},t)}function F(){_.value=o.value,setTimeout(()=>{_.value=-1},1e3)}const G={[u.CORRECT]:"\u{1F7E9}",[u.PRESENT]:"\u{1F7E8}",[u.ABSENT]:"\u2B1C",[u.INITIAL]:null};function K(){return d.value.slice(0,o.value+1).map(r=>r.map(t=>G[t.state]).join("")).join(`
`)}return(r,t)=>(n(),l(m,null,[A(W,null,{default:U(()=>[a.value?(n(),l("div",fe,[Z(g(a.value)+" ",1),i.value?(n(),l("pre",ve,g(i.value),1)):b("",!0)])):b("",!0)]),_:1}),pe,f("div",he,[(n(!0),l(m,null,w(d.value,(y,S)=>(n(),l("div",{class:k(["flex",_.value===S&&"shake",N.value&&o.value===S&&"jump"])},[(n(!0),l(m,null,w(y,(h,I)=>(n(),l("div",{class:k(["ml-1 tile",h.letter&&"filled",h.state&&"revealed"])},[f("div",{class:"front",style:B({transitionDelay:`${I*300}ms`})},g(h.letter),5),f("div",{class:k(["back",h.state]),style:B({transitionDelay:`${I*300}ms`,animationDelay:`${I*100}ms`})},g(h.letter),7)],2))),256))],2))),256))]),A(ce,{onKey:R,"letter-states":p.value},null,8,["letter-states"])],64))}});var ge=M(me,[["__scopeId","data-v-5431fc92"]]);window.addEventListener("resize",P);P();function P(){document.body.style.setProperty("--vh",window.innerHeight+"px")}J(ge).mount("#app");