"use strict"
;__filename="background/clipboard.js",define(["require","exports","./store","./utils","./exclusions","./normalize_urls"],function(n,e,r,u,t,o){
var a,f,l,c,i,s,p,d,b,g,x,_,v,m;Object.defineProperty(e,"__esModule",{value:true}),e.doesNeedToSed=e.xr=void 0,a={
__proto__:null,atob:8,base64:9,base64decode:8,btoa:9,base64encode:9,decodeforcopy:1,decode:1,decodeuri:1,decodeurl:1,
decodemaybeescaped:2,decodeall:19,decodecomp:2,encode:10,encodecomp:11,encodeall:12,encodeallcomp:13,unescape:3,upper:4,
lower:5,capitalize:16,capitalizeall:17,camel:14,camelcase:14,dash:15,dashed:15,hyphen:15,normalize:6,reverse:7,
reversetext:7,break:99,stop:99,return:99,latin:18,latinize:18,latinise:18,noaccent:18,nodiacritic:18,json:20,
jsonparse:21},f=null,l=function(n,e){var r,t,o,f,l,i,s,p,d,g,x,_,v,m,h,y,w=[],z=new Map
;for(r of n.split("\n"))if(r=r.trim(),
(t=/^([\w\x80-\ufffd]{1,6})([^\x00- \w\\\x7f-\uffff])/.exec(r))&&((f=z.get(o=t[2]))||(l="\\u"+(o.charCodeAt(0)+65536).toString(16).slice(1),
f=new RegExp("^((?:\\\\[^]|[^".concat(l,"\\\\])+)").concat(l,"(.*)").concat(l,"([a-z]{0,9})(?:,|$)")),z.set(o,f)),
i=f.exec(r=r.slice(t[0].length)))){
for(v of(s=t[1],p=i[3],g=[],x=null,_=0,(d=r.slice(i[0].length))?d.split(","):[]))(m=v.toLowerCase()).startsWith("host=")?x=v.slice(5):m.startsWith("match")?_=Math.max(m.includes("=")&&parseInt(m.split("=")[1])||1,1):(h=a[m.replace(/[_-]/g,"")]||0)&&g.push(h)
;(y=u.nn(i[1],_?p.replace(/g/g,""):p))&&w.push({zr:e||b(s),Er:x,Fr:y,Zr:_,Dr:g,Br:c(i[2],1)})}return w},c=function(n,e){
return n.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[^])|\$0/g,function(n,r){
return r?"x"===r[0]||"u"===r[0]?"$"===(r=String.fromCharCode(parseInt(r.slice(1),16)))?r+r:r:"t"===r?"\t":"r"===r?"\r":"n"===r?"\n":e?"0"===r?"$&":r>="1"&&r<="9"?"$"+r:r:r:e?"$&":n
})},i=function(n,e){
var u=14===e,t=15===e,o=16===e,a=17===e,f=r.we<64||false?u||t?/(?:[-_\s\/+\u2010-\u2015]|(\d)|^)([a-z\u03b1-\u03c9]|[A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)|[\t\r\n\/+]/g:o?/(\b|_)[a-z\u03b1-\u03c9]/:a?/(\b|_)[a-z\u03b1-\u03c9]/g:null:new RegExp(u||t?"(?:[-_\\t\\r\\n/+\\u2010-\\u2015\\p{Z}]|(\\p{N})|^)(\\p{Ll}|\\p{Lu}+\\p{Ll}?)|[\\t\\r\\n/+]":o||a?"(\\b|_)\\p{Ll}":"",o?"u":"ug"),l=0,c=0,i=function(n,e){
return e?n.toLocaleLowerCase():n.toLocaleUpperCase()};return n=u||t?n.replace(f,function(e,r,u,o){
var a="\t\r\n/+".includes(e[0]),f=a||!l++&&n.slice(c,o).toUpperCase()===n.slice(c,o).toLowerCase();return a&&(l=0,
c=o+1),
u=u?u.length>2&&u.slice(-1).toLowerCase()===u.slice(-1)&&!/^e?s\b/.test(n.substr(o+e.length-1,3))?t?i(u.slice(0,-2),true)+"-"+i(u.slice(-2),true):i(u[0],f)+i(u.slice(1,-2),true)+i(u.slice(-2,-1),false)+u.slice(-1):t?i(u,true):i(u[0],f)+i(u.slice(1),true):"",
(a?e[0]:(r||"")+(r||t&&!f?"-":""))+u}):o||a?n.replace(f,function(n){return i(n,false)}):n,
t&&(n=n.replace(r.we<64||false?/[a-z\u03b1-\u03c9]([A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)/g:new RegExp("\\p{Ll}(\\p{Lu}+\\p{Ll})","ug"),function(e,r,u){
return r=r.length>2&&r.slice(-1).toLowerCase()===r.slice(-1)&&!/^e?s\b/.test(n.substr(u+e.length-1,3))?i(r.slice(0,-2),true)+"-"+i(r.slice(-2),true):i(r,true),
e[0]+"-"+r})),n},s=function(n){return n.replace(r.we<64||false?/[\u0300-\u0362]/g:new RegExp("\\p{Diacritic}","gu"),"")
},p=function(n){return(n=JSON.stringify(n).slice(1,-1)).replace(/[<\s"$%&#()?:+]/g,function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)})},d=function(n){
n=(n='"'===n[0]?n.slice(1,n.endsWith('"')?-1:void 0):n).replace(/[\r\n\0]/g,function(n){
return n<"\n"?"\\0":n>"\n"?"\\r":"\\n"}),n='"'.concat(n,'"');try{n=JSON.parse(n)}catch(n){}return n},e.xr=function(n){
if(null!=n.$sed)return n.$sed;var e=n.sed,r=n.sedKeys||n.sedKey
;return null!=e||r?e&&"object"==typeof e?null!=e.r||e.k?e:null:n.$sed={r:e,k:r}:null},b=function(n,e){var r,u,t,o,a,f
;if("object"==typeof n)return n.Hr||n.Kr?n:e?e.k=null:null
;for(r=null,u=0,t=0;t<n.length;t++)(a=-33&(o=n.charCodeAt(t)))>64&&a<91?u|=83===a?32772:1<<a-65:(r||(r=[]),
!e&&r.includes(o)||r.push(o));return f=u||r?{Hr:u,Kr:r}:null,e?e.k=f:f},g=function(n,e){var r,u;if(n.Hr&e.Hr)return true
;if(r=e.Kr,!n.Kr||!r)return false;for(u of n.Kr)if(r.includes(u))return true;return false},
e.doesNeedToSed=function(n,e){var u,t;if(e&&(false===e.r||e.r&&true!==e.r))return false!==e.r
;for(t of(u=e&&e.k&&b(e.k,e)||(n?{Hr:n,Kr:null}:null),f||u&&(f=l(r.me.clipSub,null)),u?f:[]))if(g(t.zr,u))return true
;return false},x=function(n){
return n.includes("\n")?n:r.we>63||false?n.replace(new RegExp("(?<!\\\\) ([\\w\\x80-\\ufffd]{1,6})(?![\\x00- \\w\\\\\\x7f-\\uffff])","g"),"\n$1"):n.replace(/\\ | ([\w\x80-\ufffd]{1,6})(?![\x00- \w\\\x7f-\uffff])/g,function(n,e){
return" "===n[1]?n:"\n"+e})},r.p=function(n,e,o){var a,_,v,m,h=o&&"object"==typeof o?o.r:o;if(false===h)return n
;for(m of(a=f||(f=l(r.me.clipSub,null)),_=o&&"object"==typeof o&&o.k&&b(o.k,o)||(e?{Hr:e,Kr:null}:null),
h&&true!==h&&(_||(a=[]),a=l(x(h+""),_||(_={Hr:1073741824,Kr:null})).concat(a)),v=function(e){var r,o,a,f,l,b,x
;if(g(e.zr,_)&&(!e.Er||("string"==typeof e.Er&&(e.Er=t.rt(e.Er)||-1),-1!==e.Er&&t.ot(e.Er,n)))){if(r=-1,e.Zr?(o=0,
f=e.Zr,n.replace(e.Fr,function(n){var e=arguments;return r=(o=e[e.length-2])+n.length,a=e.length>2+f&&e[f]||"",""}),
r>=0&&(l=n.replace(e.Fr,e.Br),n=l.slice(o,l.length-(n.length-r))||a||n.slice(o,r))):e.Fr.test(n)&&(r=e.Fr.lastIndex=0,
n=n.replace(e.Fr,e.Br)),r<0)return"continue";if(!n)return"break";for(x of(b=false,
e.Dr))n=1===x?u.cn(n):2===x?u.un(n):19===x?u.un(n,true):3===x?c(n):4===x?n.toLocaleUpperCase():5===x?n.toLocaleLowerCase():10===x?u.an(n):11===x?u.on(n):12===x?encodeURI(n):13===x?encodeURIComponent(n):8===x?u.in(n,"atob"):9===x?btoa(n):20===x?p(n):21===x?d(n):(n=6!==x&&7!==x&&18!==x||false?n:n.normalize(18===x?"NFD":"NFC"),
7===x?Array.from(n).reverse().join(""):18===x?s(n):14===x||15===x||16===x||17===x?i(n,x):n),b=99===x;if(b)return"break"}
},_?a:[]))if("break"===v(m))break;return u.hn(),n},_=function(){var n=globalThis.document.createElement("textarea")
;return n.style.position="absolute",n.style.left="-99px",n.style.width="0",n},v=function(n,e,t,a){var f,l,c=function(n){
return void 0===f&&(f=r.ue.map.get(a)||null),f?o.Xe(n.trim().split(u.xn),f.dr,f.j):n}
;return"string"!=typeof n?(n=n.map(function(n){return r.p(n,32768,t)}),a&&a&&(n=n.map(c)),
n="string"==typeof e&&e.startsWith("json")?JSON.stringify(n,null,+e.slice(4)||2):n.join(e!==!!e&&e||"\n")+(n.length>1&&(!e||e===!!e)?"\n":""),
false!==(t&&"object"==typeof t?t.r:t)&&(n=r.p(n,4096)),
n):(32!==(l=(n=n.replace(/\xa0/g," ").replace(/\r\n?/g,"\n")).charCodeAt(n.length-1))&&9!==l||((l=n.lastIndexOf("\n")+1)?n=n.slice(0,l)+n.slice(l).trimRight():32!==(l=n.charCodeAt(0))&&9!==l&&(n=n.trimRight())),
n=r.p(n,4,t),n=a?c(n):n)},m=function(n,e){return n&&(n=n.replace(/\xa0/g," "),n=r.p(n,32768,e)),n},
r.h=function(n,e,r,u){if(n=v(n,e,r,u)){var t=globalThis.document,o=_();o.value=n,t.body.appendChild(o),o.select(),
t.execCommand("copy"),o.remove(),o.value=""}return n},r.f=r.e.ye?function(n,e){var t,o=globalThis.document,a=_()
;return a.maxLength=e||102400,o.body.appendChild(a),a.focus(),o.execCommand("paste"),t=a.value.slice(0,e||102400),
a.value="",
a.remove(),a.removeAttribute("maxlength"),!e&&t.length>=81920&&("data:"===t.slice(0,5).toLowerCase()||u.pn(t))?r.f(n,20971520):m(t,n)
}:function(){return null},r.F.clipSub=function(){f=null}});