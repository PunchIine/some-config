"use strict"
;__filename="background/eval_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions"],function(e,r,n,s,a,u,t,l,c){
var i,f,o;Object.defineProperty(r,"__esModule",{value:true}),n.u=function(e,r,c,p){var d,g,b,h,y,m,v,x,$,k;if(r|=0,
"paste"===e?e+=" .":e.includes("%20")&&!e.includes(" ")&&(e=e.replace(/%20/g," ")),
r<0||!(e=e.trim())||(d=e.search(/[/ ]/))<=0||!/^[a-z][\da-z\-]*(?:\.[a-z][\da-z\-]*)*$/i.test(g=e.slice(0,d).toLowerCase())||/\.(?:css|html?|js)$/i.test(g))return null
;if(!(e=e.slice(d+1).trim()))return null;if(1===r)switch(g){case"sum":case"mul":
e=e.replace(/[\s+,\uff0b\uff0c]+/g,"sum"===g?" + ":" * "),g="e";break;case"avg":case"average":
b=e.split(/[\s+,\uff0b\uff0c]+/g),e="("+b.join(" + ")+") / "+b.length,g="e"}if(1===r)switch(g){case"e":case"exec":
case"eval":case"expr":case"calc":case"m":case"math":return a.import2("/lib/math_parser.js").then(i.bind(0,e))
;case"error":return[e,3]}else if(r>=2)switch(g){case"run":return[["run",e],6];case"status":case"state":
return r>=3&&f(e),[e,r>=3?4:7];case"url-copy":case"search-copy":case"search.copy":case"copy-url":
if((y=u.ir(e,null,1,p))instanceof Promise)return y.then(function(e){var r=e[0]||e[2]||""
;return r=r instanceof Array?r.join(" "):r,[r=n.h(r),1]})
;e=(y=5===u.sr&&y instanceof Array?y[0]:y)instanceof Array?y.join(" "):y;case"cp":case"copy":case"clip":
return[e=n.h(e),1]}switch(g){case"urls":return r<1?null:o(e,r);case"cd":case"up":if(!(b=(e+"  ").split(" "))[2]){
if(r<1)return null;if("string"!=typeof(y=l.Hn()))return y.then(function(s){
var a=s&&n.u("cd "+e+" "+(e.includes(" ")?s:". "+s),r,c,p)
;return a?"string"==typeof a?[a,7]:a:[s?"fail in parsing":"No current tab found",3]});b[2]=y}return m="/"===(g=b[0])[0],
d=parseInt(g,10),d=isNaN(d)?"/"===g?1:m?g.replace(/(\.+)|./g,"$1").length+1:-g.replace(/\.(\.+)|./g,"$1").length||-1:d,
(v=t.fu({u:b[2],p:d,t:null,f:1,a:"."!==b[1]?b[1]:""}))&&v.u||[v?v.e:"No upper path",3];case"parse":case"decode":
(g=e.split(" ",1)[0]).search(/\/|%2f/i)<0?e=e.slice(g.length+1).trimLeft():g="~",b=[e=s.un(e)],e=u.ir(e,null,0,p),
4!==u.sr&&(h=t.fu({u:e}))?""===h.u?b=[g]:(b=h.u.split(" ")).unshift(g):b=b[0].split(s.xn);break;case"sed":
case"substitute":case"sed-p":case"sed.p":case"sed2":return x=e.split(" ",1)[0],e=e.slice(x.length+1).trim(),
$="sed2"===g?e.split(" ",1)[0]:"",[e=(e=e.slice($.length).trim())&&n.p(e,g.endsWith("p")?32768:0,$?{r:x,k:$
}:/^[@#$-]?[\w\x80-\ufffd]+$|^\.$/.test(x)?{r:null,k:x}:{r:x,k:null}),5];case"u":case"url":case"search":
b=s.un(e,true).split(s.xn);break;case"paste":if(r>0)return(y=n.f(e))instanceof Promise?y.then(function(e){
return[e?e.trim().replace(s.xn," "):"",5]}):[y?y.trim().replace(s.xn," "):"",5];default:return null}
return c?[b,2]:p&&p>12?null:(k=b[0]&&n.ue.map.has(b[0])?b.shift():null,u.er(b,k,12===p?0:r,p))},i=function(e,r){
var n,s,a
;for(u.lr.test(e)&&(e=e.slice(1,-1)),e=(e=(e=e.replace(/\uff0c/g," ")).replace(/deg\b/g,"\xb0").replace(/[\xb0']\s*\d+(\s*)(?=\)|$)/g,function(e,r){
return(e=e.trim())+("'"===e[0]?"''":"'")+r
}).replace(/([\u2070-\u2079\xb2\xb3\xb9]+)|[\xb0\uff0b\u2212\xd7\xf7]|''?/g,function(e,r){var n,s,a=""
;if(!r)return"\xb0"===e?"/180*PI+":(n="\uff0b\u2212\xd7\xf7".indexOf(e))>=0?"+-*/"[n]:"/".concat("''"===e?3600:60,"/180*PI+")
;for(s of e)a+=s<"\xba"?s>"\xb3"?1:s<"\xb3"?2:3:s.charCodeAt(0)-8304;return a&&"**"+a
}).replace(/([\d.])rad\b/g,"$1")).replace(/^=+|=+$/g,"").trim(),n=[].reduce.call(e,function(e,r){
return e+("("===r?1:")"===r?-1:0)},0);n<0;n++)e="("+e;for(;n-- >0;)e+=")";if(e){
for(;e&&"("===e[0]&&")"===e.slice(-1);)e=e.slice(1,-1).trim();e=e||"()"}if(s="",
(a=r.MathParser||globalThis.MathParser||{}).evaluate){try{s="function"==typeof(s=a.evaluate("()"!==e?e:"0"))?"":""+s
}catch(e){}a.clean(),a.errormsg&&(a.errormsg="")}return[s,0,e]},f=function(e){
var r,a,u,t,i,f,o,p,d,g,b,h,y,m,v,x,$,k,_=n.L;if(!parseInt(e,10)||(_=parseInt(e,10),e=e.slice(e.search(/[/ ]/)+1)),
r=n.z.get(_||(_=n.L))){for($ of(n.N=r.Un||r.Qn,u=(a=e.search(/[/ ]/))>0?e.slice(a+1):"",e=e.toLowerCase(),
a>0&&(e=e.slice(0,a)),e.includes("-")&&e.endsWith("able")&&(e+="d"),u=((t=!!u&&/^silent/i.test(u))?u.slice(7):u).trim(),
i=0,f=function(e){console.log(e),i||l.showHUD(e),i=1},u.includes("%")&&/%[a-f0-9]{2}/i.test(u)&&(u=s.in(u)),
u&&!u.startsWith("^ ")?(f('"vimium://status" only accepts a list of hooked keys'),
u=""):u&&(o=u.match(/<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z]\w+|[^\sA-Z])>|\S/g),
u=o?o.join(" ").replace(/<(\S+)>/g,"$1"):""),g=(d=n.N.s).Ce,b=c.Jn?1===g?g:(p=c.Kn(d.dr,d))?1:null===p?0:2:0,
y=!!u&&"enable"===e,v={N:1,
p:2===(h="enable"===e?0:"disable"===e?2:"toggle-disabled"===e?2!==g?2===b?null:2:2===b?0:null:"toggle-enabled"===e?0!==g?0===b?null:0:0===b?2:null:"toggle-next"===e?1===g?0:0===g?2===b?null:2:2===b?0:null:"toggle"===e||"next"===e?0!==g?0:2:("reset"!==e&&f('Unknown status action: "'.concat(e,'", so reset')),
null))||y?u:null,f:m=null===h?0:2===h?3:1},x=m?h:0,r.En=m?{Ce:x,Gn:v.p}:null,r.po))k=$.s,
!m&&c.Jn&&1!=(x=null===(p=v.p=c.Kn(k.dr,k))?0:p?1:2)&&k.Ce===x||(k.Ce=x,$.postMessage(v));x=r.Qn.s.Ce,
t||i||l.showHUDEx(n.N,"newStat",0,[[0!==x||y?2===x?"fullyDisabled":"halfDisabled":"fullyEnabled"]]),
n.ne&&x!==g&&n.M(_,x)}},o=function(e,r){var s,a,t,l,c=e.indexOf(":")+1||e.indexOf(" ")+1
;if(c<=0)return["No search engines given",3]
;if((s=e.slice(0,c-1).split(e.lastIndexOf(" ",c-1)>=0?" ":"|").filter(function(e){return n.ue.map.has(e)
})).length<=0)return["No valid search engines found",3];for(l of(a=e.slice(c).split(" "),t=["openUrls"],
s))t.push(u.er(a,l,r));return t.some(function(e){return e instanceof Promise})?Promise.all(t).then(function(e){
return[e,6]}):[t,6]}});