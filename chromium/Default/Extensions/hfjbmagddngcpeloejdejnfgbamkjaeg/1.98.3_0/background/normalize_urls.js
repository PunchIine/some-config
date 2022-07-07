"use strict"
;__filename="background/normalize_urls.js",define(["require","exports","./store","./utils"],function(e,r,n,t){
var i,a,s,o,u,l,f,c,m;Object.defineProperty(r,"__esModule",{value:true
}),r.$e=r.Ye=r.Ze=r.Xe=r.er=r.rr=r.nr=r.tr=r.ir=r.ar=r.sr=r.or=r.ur=r.lr=r.fr=r.cr=void 0,
r.cr=/^([^:]+(:[^:]+)?@)?([^:]+|\[[^\]]+])(:\d{2,5})?$/,r.fr=/^(?:ext|web)\+[a-z]+:/,
r.lr=/^"[^"]*"$|^'[^']*'$|^\u201c[^\u201d]*\u201d$/,r.ur=/\$([sS$])?(?:\{([^}]*)})?/g,r.or=/\$([+-]?\d+)/g,
i=["blank","newtab","options","show"],s={__proto__:null,about:"",changelog:"/RELEASE-NOTES.md",help:"/wiki",home:"",
license:"/LICENSE.txt",option:a="options.html",permissions:"/PRIVACY-POLICY.md#permissions-required",
policy:"/PRIVACY-POLICY.md",popup:a,preference:a,preferences:a,privacy:"/PRIVACY-POLICY.md#privacy-policy",profile:a,
profiles:a,readme:"#readme",release:"/RELEASE-NOTES.md",releases:"/RELEASE-NOTES.md",
"release-notes":"/RELEASE-NOTES.md",setting:a,settings:a,wiki:"/wiki"},r.sr=0,r.ar=false,r.ir=function(e,i,a,s){
var l,f,c,d,p,v,w,g,h;return e=e.trim(),r.sr=0,t.pn(e)?(e=e.replace(/\xa0/g," "),t.hn(),e):(l=-1,f=0,c=false,
g='"'===(v=e.replace(/[\n\r]+[\t \xa0]*/g,"").replace(/\xa0/g," "))[0]&&v.endsWith('"'),h=v,e=v=g?v.slice(1,-1):v,
/^[A-Za-z]:(?:[\\/](?![:*?"<>|/])|$)|^\/(?:Users|home|root)\/[^:*?"<>|/]+/.test(e)||e.startsWith("\\\\")&&e.length>3?m(e):((d=(e=v.toLowerCase()).indexOf(" ")+1||e.indexOf("\t")+1)>1&&(e=e.slice(0,d-1)),
0===(d=e.indexOf(":"))?l=4:-1!==d&&t.jn.test(e)?e.startsWith("vimium:")?(l=3,a|=0,e=v.slice(9),
a<-1||!e?v="vimium://"+e:-1===a||g||!(v=n.u(e,a,null,(s||0)+1))?v=r.rr(e,false,a):"string"!=typeof v&&(l=5)):r.fr.test(e)?l=0:(-1===(p=e.indexOf("/",d+3))?e.length<v.length:e.charCodeAt(p+1)<33)?l=4:/[^a-z]/.test(e.slice(0,d))?l=(d=e.charCodeAt(d+3))>32&&47!==d?0:4:e.startsWith("file:")?l=0:e.startsWith("chrome:")?l=e.length<v.length&&e.includes("/")?4:0:n.ge&&e.startsWith("read:")?l=!/^read:\/\/([a-z]+)_([.\da-z\-]+)(?:_(\d+))?\/\?url=\1%3a%2f%2f\2(%3a\3)?(%2f|$)/.test(e)||e.length<v.length?4:0:e=e.slice(d+3,p>=0?p:void 0):(-1!==d&&e.lastIndexOf("/",d)<0&&(l=r.tr(v.toLowerCase(),d,e.length%v.length)),
f=2,
p=v.length,-1===l&&e.startsWith("//")&&(e=e.slice(2),f=1,p-=2),-1!==l?"about:blank/"===e&&(v="about:blank"):(d=e.indexOf("/"))<=0?(0===d||e.length<p)&&(l=4):e.length>=p||e.charCodeAt(d+1)>32?(c=e.length>d+1,
e=e.slice(0,d)):l=4),-1===l&&e.lastIndexOf("%")>=0&&(e=t.in(e)).includes("/")&&(l=4),
-1===l&&e.startsWith(".")&&(e=e.slice(1)),
-1!==l||((w=r.cr.exec(e))?(e=w[3]).endsWith("]")?l=t.fn(e,6)?f:4:"localhost"===e||e.endsWith(".localhost")||t.fn(e,4)||w[4]&&c?l=f:(d=e.lastIndexOf("."))<0||0===(l=t.mn(e.slice(d+1)))?(d<0&&"__proto__"===e&&(e="."+e),
p=e.length-d-1,
l=2!==f&&(d<0||(0!==f?p>=3&&p<=5:p>=2&&p<=14)&&!/[^a-z]/.test(e.slice(d+1)))||o(e,w[4])>0?f:4):l=/[^.\da-z\-]|xn--|^-/.test(e)?e.startsWith("xn--")||e.includes(".xn--")||(e.length===d+3||1!==l?!f:o(e,w[4]))?f:4:2!==f||c?f:e.endsWith(".so")&&e.startsWith("lib")&&e.indexOf(".")===e.length-3?4:w[2]||w[4]||!w[1]||/^ftps?(\b|_)/.test(e)?2:e.startsWith("mail")||e.indexOf(".mail")>0||(p=e.indexOf("."))===d?4:e.indexOf(".",++p)!==d?2:e.length===d+3&&1===l&&t.mn(e.slice(p,d),true)?4:2:(l=4,
e.length===v.length&&t.fn(e="[".concat(e,"]"),6)&&(v=e,l=2))),t.hn(),s||(r.ar=false),r.sr=l,
0===l?/^extension:\/\//i.test(v)?"chrome-"+v:v:4===l?r.er(h.split(t.xn),i,a,s):l<=2?2===l&&u(v,e)||(2===o(e,w&&w[4])?"https:":"http:")+(2===l?"//":"")+v:v))
},o=function(e,r){var t=r&&n.G.Ve.get(e+r)||n.G.Ve.get(e);return t?t.mr?2:1:0},u=function(e,r){
if(/^(?!www\.)[a-z\d-]+\.([a-z]{3}(\.[a-z]{2})?|[a-z]{2})\/?$/i.test(e)&&!o(r)){var t=n.G.Ve.get("www."+r)
;if(t)return"".concat(t.mr?"https":"http","://www.").concat(e.toLowerCase().replace("/",""),"/")}return""},
l=function(e,n,i){var a="/"===e.substr(n+1,1);if("%"===e.substr(n+1,1))return 4;switch(e.slice(0,n)){case"about":
return a?4:i>0||e.includes("@",n)?-1:0;case"blob":case"view-source":
return(e=e.slice(n+1)).startsWith("blob:")||e.startsWith("view-source:")?4:(r.ir(e,null,-2,1),r.sr<=2?0:4);case"data":
return a?4:(n=e.indexOf(",",n))<0||i>0&&i<n?-1:0;case"file":return 0;case"filesystem":return e=e.slice(n+1),
t.jn.test(e)?(r.ir(e,null,-2,1),0===r.sr&&/[^/]\/(?:persistent|temporary)(?:\/|$)/.test(e)?0:4):4;case"magnet":
return"?"!==e[n+1]?-1:0;case"mailto":return a?4:(n=e.indexOf("/",n))>0&&e.lastIndexOf("?",n)<0?-1:0;case"tel":
return/\d/.test(e)?0:4;default:return r.fr.test(e)?0:a?4:-1}},r.tr=l,r.nr=function(e){
var r=e.startsWith("filesystem:")?11:e.startsWith("view-source:")?12:0;return r?e.slice(r):e},r.rr=function(e,r,t){
var a,o,u="",l="",f=e.trim();if(!f)return r?"":location.origin+"/pages/";if((a=f.indexOf(" ")+1)&&(l=f.slice(a).trim(),
f=f.slice(0,a-1)),(a=f.search(/[\/#?]/)+1)&&(u=f.slice(a-1).trim(),f=f.slice(0,a-1)),"display"===f&&(f="show"),
!/\.\w+$/.test(f))if(f=f.toLowerCase(),
null!=(o=s[f]))("release"===f||"releases"===f)&&(o+="#"+n.e.qe.replace(/\D/g,"")),
o=f=o&&"/"!==o[0]&&"#"!==o[0]?o:n.e.Ue+(o.includes(".")?"/blob/master"+o:o);else{if("newtab"===f)return n.newTabUrl_f
;if("/"===f[0]||i.indexOf(f)>=0)f+=".html";else{if(1===t||-1===t)return"vimium://"+e.trim()
;f="show.html#!url vimium://"+f}}return r||o&&o.includes("://")||(f=location.origin+("/"===f[0]?"":"/pages/")+f),
u&&(f+=u),f+(l&&(f.includes("#")?" ":"#!")+l)},r.er=function(e,t,i,a){var s,o
;return o=(s=n.ue.map.get(t=t||"~"))?r.Xe(e,s.dr,s.j):e.join(" "),a||(r.ar=!!s&&"~"!==t),
"~"!==t?r.ir(o,null,i,(a||0)+1):(r.sr=4,o)},r.Xe=function(e,n,i,a){var s,o=0
;return n=0===e.length&&i?i:n.replace(r.ur,function(i,u,l,f){var c
;return i.endsWith("$")?"$":(u||(/^s:/i.test(l)?(u=l[0],l=null==l?void 0:l.slice(2)):u="s"),"S"===u?(c=e,
u=" "):(c=s||(s=e.map(t.on)),u=t.pn(n)?"%20":"+"),0===c.length?"":(l=l&&l.includes("$")?l.replace(r.or,function(e,r){
var n=parseInt(r,10);if(!n)return c.join(u);if(n<0)n+=c.length+1;else if("+"===r[0])return c.slice(n-1).join(u)
;return c[n-1]||""}):c.join(null!=l?l:u),null!=a&&(a.push(f+=o,f+l.length),o+=l.length-i.length),l))}),t.hn(),
null==a?n:{dr:n,pr:a}},f=function(e){var n,t,i=e.indexOf(":"),a=i;if(i<=0)return e
;if(r.fr.test(e.slice(0,i+1).toLowerCase()))return e.slice(0,i).toLowerCase()+e.slice(i)
;if("://"===e.substr(i,3))if((i=e.indexOf("/",i+3))<0)i=a,
a=-1;else if(7===i&&"file"===e.slice(0,4).toLowerCase())return"file:///"+((i=":"===e.charAt(9)?3:"%3a"===e.substr(9,3).toLowerCase()?5:0)?e[8].toUpperCase()+":/":"")+e.slice(i+8)
;return t=(n=e.slice(0,i)).toLowerCase(),-1===a&&/^(file|ftp|https?|rt[ms]p|wss?)$/.test(n)&&(e+="/"),
n!==t?t+e.slice(i):e},r.Ze=f,c=function(e){var r=t.in(e);return/[^\w.$+-\x80-\ufffd]|\s/.test(r)?e.replace(/%24/g,"$"):r
},m=function(e){var r,n,i
;return(e=e.replace(/\\/g,"/")).startsWith("//")&&!e.startsWith("//./")?((r=(e=e.slice(2)).split("/",1)[0]).includes("%")&&(e=c(r)+e.slice(r.length)),
e.includes("/")||(e+="/")):(e.startsWith("//")&&(e=e.slice(4)),":"===e[1]&&(e=e[0].toUpperCase()+":/"+e.slice(3)),
"/"!==e[0]&&(e="/"+e)),
/[%?#&\s]/.test(e)?(n="",e.indexOf("#")&&((i=/\.[A-Za-z\d]{1,4}(\?[^#]*)?#/.exec(e))?n=(n=e.slice(i.index+i[0].length-1)).includes("=")||!n.includes("/")||n.includes(":~:")?i[1]?i[1]+n:n:"":(i=/#(\w+=|:~:)/.exec(e))&&(n=e.slice(i.index)),
n&&(e=e.slice(0,-n.length))),e="file://"+e.replace(/[?#&\s]/g,encodeURIComponent)+n.replace(/\s/g,encodeURIComponent),
t.hn(),e):(t.hn(),"file://"+e)},r.Ye=function(e,r){var i,a,s,o,u,l,f,m,d;if(2===n.he&&e.startsWith("file://")){
if((i=e.indexOf("/",7))<0||i===e.length-1)return i<0?e+"/":e
;s=(a=7===i?":"===e.charAt(9)?3:"%3a"===e.substr(9,3).toLowerCase()?5:0:0)?e[8].toUpperCase()+":":i>7?"\\\\"+c(e.slice(7,i)):"",
o=e.slice(a?a+7:i>7?i:0),
u=r?/[?#]/.exec(r):null,(f=(l=!r||u?/[?#]/.exec(o):null)?l.index:0)&&u&&(m=t.in(r.slice(r.indexOf("/",a?9:i>7?8:0),u.index)))===o.slice(0,m.length)&&(f=m.length),
d=f?o.slice(f):"",e=s+(o=(o=f?o.slice(0,f):o).replace(/\/+/g,"\\"))+d}return e},r.$e=function(e){
var r,n,i,a,s,o,u,l,f,c,m,d=(new DOMParser).parseFromString(e,"image/svg+xml").firstElementChild
;for(r of d?[].slice.call(d.querySelectorAll("script,use")):[])r.remove();if(!d||!d.lastElementChild)return""
;for(n of"id class aria-hidden".split(" "))d.removeAttribute(n)
;for(a=(i=d.attributes).length;0<=--a;)(s=i.item(a).name).startsWith("data-")&&d.removeAttribute(s)
;if(!d.getAttribute("xmlns")){for(a of o=[].slice.call(i))d.removeAttributeNode(a)
;for(a of(d.setAttribute("xmlns","http://www.w3.org/2000/svg"),o))d.setAttributeNode(a)}
for(l=d.ownerDocument.createTreeWalker(d,NodeFilter.SHOW_TEXT);u=l.nextNode();)(c=(f=u.data).trim()).length<f.length&&(u.data=c?(t.xn.test(f[0])?" ":"")+c+(t.xn.test(f.slice(-1))?" ":""):" ")
;return m=(m=d.outerHTML.replace(/\xa0/g," ")).replace(/<\/?[A-Z:]+(?=\s|>)/g,function(e){return e.toLowerCase()}),
"data:image/svg+xml,"+m.replace(/(?:[%?#]|[^\S ])+/g,encodeURIComponent)}});