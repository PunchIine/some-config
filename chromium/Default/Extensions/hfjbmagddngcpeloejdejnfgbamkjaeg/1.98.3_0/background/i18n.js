"use strict"
;__filename="background/i18n.js",define(["require","exports","./store","./utils","./browser"],function(n,r,u,t,e){
var i,o,c,f,a,s,l;Object.defineProperty(r,"__esModule",{value:true
}),r.vr=r.getI18nJson=r.br=r.gr=r.Zn=r.$r=r._r=r.jr=r.kr=void 0,r.kr=1,o=0,r.jr=[],r._r=function(n){
return e.Cn.i18n.getMessage(n)},c=function(n,u){if(1===o){var t=i.get(n)
;return null!=u&&t?t.replace(/\$\d/g,function(n){return u[+n[1]-1]}):t||""}
return o||(o=r.getI18nJson("background").then(function(n){i=n,o=1})),o.then(r.$r.bind(null,n,u))},r.$r=c,
f=function(n,u){var t;return u.forEach(function(n,u,t){if(n instanceof Array){var e=n[0]
;t[u]=1===o?i.get(e)||e:r.$r(e).then(function(n){return n||e})}}),u.some(function(n){return n instanceof Promise
})?(t=Promise.all(u),(1===o?t:(o||r.$r("NS")).then(function(){return t})).then(function(u){return r.$r(n,u)})):r.$r(n,u)
},r.Zn=f,r.gr=function(n,r){return n&&n.split(" ").reduce(function(n,u){
return n||(u.includes("=")?r&&u.startsWith(r)?u.slice(r.length+1):n:u)},"")},a=function(n){var u=r._r("i18n")
;return r.gr(u,n||"background")||r._r("lang1")||"en"},r.br=a,s=function(n){
return t.l("/i18n/".concat(r.br(n),"/").concat(n,".json"))},r.getI18nJson=s,l=function(){
var n,u=r.jr,t=["$1","$2","$3","$4"];for(n=0;n<109;n++)u.push(e.Cn.i18n.getMessage(""+n,t));r.vr=null},r.vr=l});