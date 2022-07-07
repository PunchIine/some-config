"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./settings","./ports"],function(n,i,r,t,e,o){
var u,s,f,c,a,l;Object.defineProperty(i,"__esModule",{value:true}),i.ni=i.ii=i.mergeCSS=i.ri=void 0,f=function(n,o){
return-1===n?i.mergeCSS(o,-1):(2===n&&(r.Z=null),(f=0===n&&r.ce.get("findCSS"))?(s=null,r.oe=a(f),
r.le=o.slice(u.length),void(r.se.c=r.ce.get("omniCSS")||"")):void t.l("vimium-c.css").then(function(t){var o,s,f,a,l
;u.slice(u.indexOf(",")+1),r.we<54&&(t=t.replace(/user-select\b/g,"-webkit-$&")),
r.we<62&&(t=t.replace(/#[\da-f]{4}([\da-f]{4})?\b/gi,function(n){
n=5===n.length?"#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4]:n
;var i=parseInt(n.slice(1),16),r=i>>16&255,t=i>>8&255,e=(255&i)/255+""
;return"rgba(".concat(i>>>24,",").concat(r,",").concat(t,",").concat(e.slice(0,4),")")})),
s=(t=(o=c(t)).ui).indexOf("all:"),f=t.lastIndexOf("{",s),a=r.we>=53?t.indexOf(";",s):t.length,
t=t.slice(0,f+1)+t.slice(s,a+1)+t.slice(t.indexOf("\n",a)+1||t.length),r.we>64&&true?(s=t.indexOf("display:"),
f=t.lastIndexOf("{",s),t=t.slice(0,f+1)+t.slice(s)):t=t.replace("contents","block"),
r.we<73&&(t=t.replace("3px 5px","3px 7px")),r.we<69&&(t=t.replace(".LH{",".LH{box-sizing:border-box;")),
r.ge&&r.we<89&&(t=t.replace("forced-colors","-ms-high-contrast")),t=t.replace(/\n/g,""),
r.we<85&&(t=t.replace(/0\.01|\/\*!DPI\*\/ ?[\d.]+/g,"/*!DPI*/"+(r.we<48?1:.5))),e.co("innerCSS",u+t),
e.co("findCSS",(l=o.find).length+"\n"+l),i.mergeCSS(r.me.userDefinedCss,n)}));var f},i.ri=f,c=function(n){
var i,r,t=n?n.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],e={ui:t[0].trim()}
;for(i=1;i<t.length;i+=2)e[r=t[i].toLowerCase()]=(e[r]||"")+t[i+1].trim();return e},a=function(n){
var i=(n=n.slice(n.indexOf("\n")+1)).indexOf("\n")+1,r=n.indexOf("\n",i);return{c:n.slice(0,i-1).replace("  ","\n"),
s:n.slice(i,r).replace("  ","\n"),i:n.slice(r+1)}},l=function(n,t){
var s,f,l,d,S,v,b,g,m,p,C,x=r.ce.get("innerCSS"),_=x.indexOf("\n");if(x=_>0?x.slice(0,_):x,f=(s=c(n)).ui?x+"\n"+s.ui:x,
l=s["find:host"],d=s["find:selection"],S=s.find,v=s.omni,b="omniCSS",_=(x=r.ce.get("findCSS")).indexOf("\n"),
g=(x=x.slice(0,_+1+ +x.slice(0,_))).indexOf("\n",_+1),m=x.slice(0,g).indexOf("  "),d=d?"  "+d.replace(/\n/g," "):"",
(m>0?x.slice(m,g)!==d:d)&&(x=x.slice(_+1,m=m>0?m:g)+d+x.slice(g),g=m-(_+1)+d.length,_=-1),p=x.indexOf("\n",g+1),
C=x.slice(0,p).indexOf("  ",g),
l=l?"  "+l.replace(/\n/g," "):"",(C>0?x.slice(C,p)!==l:l)&&(x=x.slice(_+1,C>0?C:p)+l+x.slice(p),_=-1),
_<0&&(x=x.length+"\n"+x),S=S?x+"\n"+S:x,x=(r.ce.get(b)||"").split("\n",1)[0],v=v?x+"\n"+v:x,-1===t)return{
ui:f.slice(u.length),find:a(S),omni:v};e.co("innerCSS",f),e.co("findCSS",S),e.co(b,v||null),i.ri(0,f),
0!==t&&1!==t&&(o.uo(function(n){var t;for(t of n.po)8&t.s.Ln&&t.postMessage({N:12,H:r.le,f:32&t.s.Ln?i.ni(t.s):void 0})
}),e.no({N:47,d:{c:r.se.c}}))},i.mergeCSS=l,i.ii=function(n,i){var e,o,u,s,f,c,a=r.se.t
;!n.o&&r.re||(o=" ".concat(n.t," "),
s=(u=a&&" ".concat(a," ")).includes(o),e=(e=(f=null!=n.e?n.e:s)?s?a:a+o:u.replace(o," ")).trim().replace(t.xn," "),
false!==n.b?(n.o&&(r.re=f!==" ".concat(r.me.vomnibarOptions.styles," ").includes(o)),e!==a&&(r.se.t=e,c={N:47,d:{t:e}},
t.m(r.U.slice(0),function(n){return n!==i&&r.U.includes(n)&&n.postMessage(c),1}))):r.se.t=e)},i.ni=function(n){
var i=r.oe;return r.we<86&&n.dr.startsWith("file://")?s||(s={
c:i.c+"\n.icon.file { -webkit-user-select: auto !important; user-select: auto !important; }",s:i.s,i:i.i}):i},
e.lo.then(function(){
u=r.e.qe+","+r.we+";",r.le=r.ce.get("innerCSS")||"",r.le&&!r.le.startsWith(u)?(r.ce.set("vomnibarPage_f",""),
i.ri(1,r.le)):i.ri(0,r.le),r.F.userDefinedCss=i.mergeCSS})});