"use strict"
;__filename="background/run_commands.js",define(["require","exports","./store","./utils","./browser","./ports","./i18n","./key_mappings"],function(n,u,e,t,r,l,o,i){
var f,c,a,s,v,$,d,m,p,_,g,h,y,b,j,w,T,k,N,O,C,M,x,D,S;Object.defineProperty(u,"__esModule",{value:true}),
u.waitAndRunKeyReq=u.runNextOnTabLoaded=u.runNextCmdBy=u.getRunNextCmdBy=u.runNextCmd=u.wrapFallbackOptions=u.parseFallbackOptions=u.hasFallbackOptions=u.executeExternalCmd=u.executeShortcut=u.portSendFgCmd=u.sendFgCmd=u.onConfirmResponse=u.cu=u.vu=u.executeCommand=u.fillOptionWithMask=u.overrideOption=u.overrideCmdOptions=u.concatOptions=u.copyCmdOptions=u.replaceCmdOptions=void 0,
f=Math.abs,c=0,v=1,u.replaceCmdOptions=function(n){e.Ie=t.dn(n)},u.copyCmdOptions=function(n,u){
for(var e in u)("$"!==e[0]||"$then=$else=$retry=$f=".includes(e+"=")&&!e.includes("="))&&(void 0!==n[e]||(n[e]=u[e]))
;return n},$=function(n,e){return e&&n?u.copyCmdOptions(u.copyCmdOptions(t.bn(),e),n):n||e||null},u.concatOptions=$,
u.overrideCmdOptions=function(n,u,r){var l=r||e.Ie;t.kn(t.dn(n),l),u?delete n.$o:n.$o=l,r||(e.Ie=n)},d=function(n,t,r){
(r=r||e.Ie)[n]=t;var l=r.$o;null!=l&&u.overrideOption(n,t,l)},u.overrideOption=d,m=function(n,r,l,o,i,f){
var c,a,s,v,$,d,m,p,_,g,h,y,b=-1,j=r,w=true===j||""===j;if(w){for(a=/\$\$|[$%][sS]/g,
s=void 0;(s=a.exec(n))&&"$$"===s[0];);j=s&&s[0]||"$s"}return v=null,d=false,m=!!j&&"string"==typeof j&&n.includes(j),
p=f||e.Ie,_=function(){var n,u;if(null!==v||1!==g)return v||""
;if(n=l&&p[l])c=l;else if(1===(u=Object.keys(p).filter(function(n){return"$"!==n[0]&&!o.includes(n)&&true===p[n]
})).length)n=c=u[0];else{if(""!==r)return g=u.length,"";n=""}return b=1,v=n+"",v="$s"===j||"%s"===j?t.on(v):v},g=1,h=0,
w?((n.includes($="$c")||n.includes($="%c"))&&(b=1,
d=true),n=n.replace(new RegExp("\\$\\{([^}]*)}|\\$\\$"+(d?"|"+t.i($):"")+(m?"|"+t.i(j):""),"g"),function(n,u){var e,r
;return n===j?_():n===$?i+"":u?(b=1,h++,e=true,/^[sS]:/.test(u)&&(e="s"===u[0],u=u.slice(2)),
r="string"==typeof(r="__proto__"===u||"$"===u[0]?"":p[u])?r:r&&"object"==typeof r?JSON.stringify(r):r+"",
e?t.on(r):r):"$"})):m&&(_(),null!==v&&(n=n.replace(j,function(){return v}))),1!==g?{ok:0,result:g
}:(j&&"string"==typeof j&&(y=f||{},f||u.overrideCmdOptions(y),y.$masked=true,c&&delete y[c]),{ok:b,value:v||"",result:n,
useCount:d,useDict:h})},u.fillOptionWithMask=m,p=function(n){var u,l,o=a;return a=null,o&&(s?(l=(u=t.g()).zn,o(n,u.Rn),
l.then(x)):o(n,e.j)),e.Re=null,n?void 0:r.On()},_=function(n){u.executeCommand(n,1,e.B,e.N,e.k)},
g=function(n,o,c,v,$,d){var m,g,h,y,j,w,T,k,N,C,M,D;if(b(0),a)return a=null,void(e.Re=null);if(g=i.ct(n),h=n.Lt,
g&&(m=g.$count)&&(o=o*m||1),1===(o=$||(o>=1e4?9999:o<=-1e4?-9999:0|o||1)));else if(1===h)o=1;else if(h>0&&(o>h||o<-h)){
if(null!=d)o=o<0?-1:1;else if(!($||g&&true===g.confirmed))return e.B=c,e.Ie=null,e.N=v,e.k=o,e.Re=null,
void u.cu(n.wt,f(o)).then(_.bind(null,n))}else o=o||1;if(null!=d){
if(y=0|d.r,y=Math.max(1,y>=0&&y<100?Math.min(y||6,20):f(y)),d.c&&d.c.i>=y&&(!g||"showTip"!==g.$else))return e.N=v,
l.showHUD("Has run sequential commands for ".concat(y," times")),void(e.Re=null);j=O(d.c,1,d.u),
g&&((36===n.ht||j.t)&&n.yt||u.hasFallbackOptions(g))&&(w={},g?u.overrideCmdOptions(w,false,g):t.dn(w),w.$retry=-y,
w.$f=j,j.t&&n.yt&&!g.$else&&(w.$else="showTip"),g=w)}
if(!n.yt)return k=4620>>(T=n.ht)&1||4===T&&!!g&&false===g.keepHover,e.N=v,e.Re=null,
void(null==v||u.portSendFgCmd(v,T,k,g,o));C=e.V[N=n.ht],null===(s=n.Ht)&&(s=n.Ht=null!=g&&u.hasFallbackOptions(g)),
e.B=c,e.Ie=g||(n.ft=t.bn()),e.N=v,e.k=o,o=e.P[N],null==v&&N<11&&N>0||(o<1?(s?(D=(M=t.g()).zn,C(M.Rn),D.then(x)):C(e.j),
e.Re=null):(s=n.Ht,a=C,(o<2||2===o&&f(e.k)<2?r.getCurTab:r.Mn)(p)))},u.executeCommand=g,u.vu=function(){
return v&&true!==e.Ie.confirmed},h=function(n,r){var l,i,f,s,$,d;return e.N?e.Z&&e.Z[1]?(i=(l=t.g()).zn,f=l.Rn,s=e.k,
$=e.Ie,d=e.N,b(setTimeout(y,3e3,0)),a=function(n){e.B=0,e.Ie=$,e.N=d,e.k=n?s>0?1:-1:s,v=0,f(n),setTimeout(function(){v=1
},0)},Promise.resolve(o.$r("cmdConfirm",[r,e.Z[1].get(n)||"### ".concat(n," ###")])).then(function(n){var u
;((null===(u=e.z.get(e.N.s.Sn))||void 0===u?void 0:u.Un)||e.N).postMessage({N:13,c:"",i:c,m:n})}),
i):o.getI18nJson("help_dialog").then(function(t){return e.Z?e.Z[1]=t:e.Z=[null,t],u.cu(n,r)}):(a=null,e.k=e.k>0?1:-1,
Promise.resolve(e.k>0))},u.cu=h,y=function(n){var u=a;a=null,n>1&&u&&u(n<3)},b=function(n){c&&clearTimeout(c),c=n},
j=function(n,e){var t=n.c,r=n.i;r>=-1&&c!==r||(b(0),n.r?y(n.r):u.executeCommand(i.kt.get(t),n.n,0,e,0))},
u.onConfirmResponse=j,w=function(n,t,r){u.portSendFgCmd(e.N,n,t,r,1)},u.sendFgCmd=w,u.portSendFgCmd=function(n,u,e,t,r){
n.postMessage({N:10,H:e?l.ensureInnerCSS(n.s):null,c:u,n:r,a:t})},T=function(n,e){var o,f,a,s,v,$;if(b(0),
e)return o=e.Qn,b(setTimeout(u.executeShortcut,100,n,null)),o.postMessage({N:13,c:n,i:c,m:""}),
void l.ensuredExitAllGrab(e)
;if(s=0,v=f=i.kt.get(n),"goBack"===(a=f.wt)||"goForward"===a?r.Bn.goBack&&(s=21):"autoOpen"===a&&(s=12),$=i.ct(f),s)v={
ht:s,yt:1,wt:a,$u:null,ft:$,Ht:null,Lt:f.Lt};else{if(!f.yt)return;s=f.ht}
s>10||s<1?u.executeCommand(v,1,0,null,0):$&&$.$noWarn||(($||(f.ft=t.bn())).$noWarn=true,
console.log("Error: Command",a,"must run on pages which have run Vimium C"))},u.executeShortcut=T,k=function(n,r,o){
var f,c,a,s,v,$,d=n.command
;(f=(d=d?d+"":"")?i.st[d]:null)&&((o=o||(r.tab?l.indexFrame(r.tab.id,r.frameId||0)||((c=e.z.get(r.tab.id))?c.Qn:null):null))||f[1])&&(s=n.key,
v=i.lt(d,a=n.options||null),$=n.count,v&&($="-"!==$?parseInt($,10)||1:-1,a&&"object"==typeof a?t.dn(a):a=null,
u.executeCommand(v,$,s|=0,o,0)))},u.executeExternalCmd=k,u.hasFallbackOptions=function(n){return!!(n.$then||n.$else)},
u.parseFallbackOptions=function(n){var u=n.$then,e=n.$else;return u||e?{$then:u,$else:e,$retry:n.$retry,$f:n.$f}:null},
N=function(n){var t=u.parseFallbackOptions(e.Ie);return t&&Object.assign(n,t),n},u.wrapFallbackOptions=N,
O=function(n,u,e){return{i:(n?n.i:0)+u,t:e&&2!==e?e:n?n.t:0}},C=function(n){return u.runNextCmdBy(n,e.Ie)},
u.runNextCmd=C,M=function(n){return u.hasFallbackOptions(e.Ie)?function(t){var l=2&n?void 0===t:r.On(),o=e.Ie
;return l?u.runNextCmdBy(0,o):u.runNextOnTabLoaded(o,1&n?t:null),2&n?void 0:l}:2&n?e.j:r.On},u.getRunNextCmdBy=M,
x=function(n){
"object"==typeof n?u.runNextOnTabLoaded(e.Ie,n):"boolean"==typeof n?u.runNextCmdBy(n?1:0,e.Ie,null):n<0||u.runNextCmdBy(n?1:0,e.Ie,n>1?n:null)
},u.runNextCmdBy=function(n,u,t){var r,o=n?u.$then:u.$else,i=!!o&&"string"==typeof o;return i&&(r={c:u.$f,r:u.$retry,
u:0,w:0},b(setTimeout(function(){
var n=e.z.get(e.L),u=e.N&&e.N.s.Sn===e.L&&n&&n.po.indexOf(e.N)>0?e.N:n?2===n.Qn.s.Ce&&n.po.filter(function(n){
return 2!==n.s.Ce}).sort(function(n,u){return n.s.Dn-u.s.Dn})[0]||n.Qn:null;n&&l.ensuredExitAllGrab(n),e.S(o,u,r)
},t||50))),i},D=function(n,t,l){var o,i,f,s,v,$=n.$then;($&&"string"==typeof $||l)&&(o=function(t){
var o=Date.now(),d=o<v-500||o-v>=i||f;if(!t||!c)return s=-1,r.On();if(d||"complete"===t.status){
if(!d&&!e.z.has(t.id)&&(l||t.url.startsWith(location.protocol)))return;b(0),a=null,l&&l(),$&&u.runNextCmdBy(1,n,l?67:0)}
},i=false!==t?1500:500,f=!!$&&/[$%]l/.test($.split("#",1)[0]),s=t?t.id:false!==t?-1:e.L,v=Date.now(),
b(setInterval(function(){r.tabsGet(-1!==s?s:e.L,o)},f?50:100)))},u.runNextOnTabLoaded=D,S=function(n,t){var r=n.f,l={
$then:n.k,$else:null,$retry:r&&r.r,$f:r&&O(r.c,0,r.u)}
;e.N=t,r&&false===r.u?u.runNextOnTabLoaded(l,null):u.runNextCmdBy(1,l,r&&r.w)},u.waitAndRunKeyReq=S});