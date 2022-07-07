"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./open_urls","./frame_commands","./tools","./normalize_urls"],function(n,t,u,r,o,e,i,f,l,c,a,s,v,d,m,p,b,g){
var k,y,_,j,N,w;Object.defineProperty(t,"__esModule",{value:true}),k=-1,u.K=[function(n,t){var r=n.handler
;r&&"string"==typeof r&&("focus"===r?(4|t.s.Ln||(t.s.Ln|=4,t.postMessage({N:8})),
u.K[11]({},t)):"command"===r?v.executeExternalCmd(n,null,t):"tip"===r&&(u.N=f.indexFrame(t.s.Sn,0)||t,
f.showHUD(n.tip||"Error: Lack .tip")))},function(n,t){var r,o,e=n.k,l=i.oo;if(!(e>=0&&e<l.length))return u.N=t,
f.complainLimits(a.$r("notModify",[e]));o=u.w,u.me[r=l[e]]!==n.v&&(o?o.then(function(){i.ro(r,n.v)}):i.ro(r,n.v))
},function(n,t){var u="object"==typeof n;return b.Ct.yr(t.s.Vn,u?n.q:"",u?1:n)},function(n,t){var u=e.fu(n)
;if(null==n.i)return u;t.postMessage({N:44,i:n.i,s:u})},function(n,t){var i=n.u,l=n.e,c=e.iu(n);r.hn(),n.e=c,
null==c.p?(u.N=t,
f.showHUD(c.u)):l||i!==c.u?!t||"file://"===c.u.slice(0,7).toLowerCase()&&"file://"!==i.slice(0,7).toLowerCase()?o.tabsUpdate({
url:c.u}):v.sendFgCmd(0,false,{r:1,u:c.u}):(u.N=t,f.showHUD("Here is just root"),n.e={p:null,u:"(just root)"})
},function(n,t){var r,o,i=e.fu(n);if(!i||!i.k)return u.N=t,f.showHUD(a.$r("noEngineFound")),
void(n.n&&v.runNextCmdBy(0,n.n));o=n.o||{},r=n.t.trim()&&u.p(n.t.trim(),524288,o.s).trim()||(n.c?u.f(o.s):""),
Promise.resolve(r).then(function(r){
var e=null===r?"It's not allowed to read clipboard":(r=r.trim())?"":a.$r("noSelOrCopied");if(e)return u.N=t,
f.showHUD(e),void(n.n&&v.runNextCmdBy(0,n.n));o.k=null==o.k?i.k:o.k,u.K[7]({u:r,o:o,r:0,
n:v.parseFallbackOptions(n.n)||{}},t)})},function(n,t){var r,e=n.s,i=false!==n.a;u.N=f.findCPort(t),
"number"!=typeof e?o.$n()?(o.$n().restore(e[1],function(){var n=o.On();return n&&f.showHUD(a.$r("noSessionItem")),n}),
i||((r=t.s.Sn)>=0||(r=u.L),r>=0&&o.selectTab(r))):f.complainNoSession():o.selectTab(e,function(n){
return o.On()?f.showHUD(a.$r("noTabItem")):o.selectWnd(n),o.On()})},m.openUrlReq,function(n,t){var r,o,e,i
;(o=u.z.get(r=t.s.Sn))?t!==(i=o.Qn)&&(o.Qn=t,u.ne&&(e=t.s.Ce)!==i.s.Ce&&u.M(r,e)):u.ne&&u.M(r,t.s.Ce)},function(n,t){
var r,o,e,i,c,a=t;if((a||(a=f.indexFrame(n.tabId,n.frameId)))&&(o=(r=a.s).dr,!(e=u.z.get(r.Sn))||!e.En)){
if(i=l.Jn?l.Kn(r.dr=t?n.u:n.url,r):null,
r.Ce!==(c=null===i?0:i?1:2))r.Ce=c,u.ne&&e.Qn===a&&u.M(r.Sn,c);else if(!i||i===l.Kn(o,r))return;a.postMessage({N:1,p:i,
f:0})}},function(n,t){var r,o=n.t||0;u.N=t,u.k=o||u.k>0?1:-1,u.B=n.k,v.replaceCmdOptions(n.f||{}),
2!==o?1===o?p.parentFrame():p.nextFrame():(r=u.z.get(t.s.Sn))?p.focusFrame(r.Qn,r.po.length<=2,n.o?1:2,u.Ie):f.safePost(t,{
N:45,l:u.B})},function(n,t){var r,o,e,i=u.z.get(t.s.Sn);if(i&&(t.s.Ln|=4,i.Ln|=4,!(i.po.length<2)))for(o of(r={N:8},
i.po))e=o.s.Ln,o.s.Ln|=4,4&e||o.postMessage(r)},function(n,t,r){var e,i,l=t.s.Sn,c=u.z.get(l),a=n.u
;if(!c||c.po.length<2)return false;for(i of c.po)if(i.s.dr===a){if(e){e=null;break}e=i}return e?(u.B=n.k,j(n,t,e,1),
true):!!o.Tn()&&(o.Tn().getAllFrames({tabId:t.s.Sn},function(r){var o,e,i=0,c=t.s.Dn;for(o of r)if(o.parentFrameId===c){
if(i){i=0;break}i=o.frameId}(e=i&&f.indexFrame(l,i))&&(u.B=n.k,j(n,t,e,1))}),!!r&&t)},function(n,t){p.initHelp(n,t)
},function(n,t){u.z.get(t.s.Sn).Ln|=4,t.s.Ln|=12,t.postMessage({N:12,H:u.le})},function(n,t){var o,i,f,l,c=n.i;if(u.B=0,
null!=n.u)i=n.t,l=n.u,l=(f=(o=n.m)>=40&&o<=64)?e.ru(l,true):l,l=u.p(l,f?1048576:524288,n.o&&n.o.s),v.replaceCmdOptions({
url:l,newtab:null!=i?!!i:!f,keyword:n.o.k}),N(n.f),u.k=1;else{if(true!==n.r)return;if(null==u.Ie||"omni"!==u.Ie.k){
if(c)return;u.Ie=r.bn(),u.k=1}else if(c&&u.Ie.v===u.e.Ke)return}u.N=t,p.showVomnibar(c)},function(n,t){
f.isNotVomnibarPage(t,false)||u.C.yu(n.q,n,_.bind(t,0|n.i))},function(n,t){
var o,i=n.u||n.s||"",l=n.o||{},c=null!=n.s&&n.m||0,a=l.s,s=l.k,v=c>=40&&c<=64&&(!a||false!==a.r),d=n.d?false!==l.d:!!l.d
;if(d)if("string"!=typeof i)for(o=i.length;0<=--o;)v&&(i[o]=e.ru(i[o]+"")),i[o]=r.cn(i[o]+"");else v&&(i=e.ru(i)),
i=r.cn(i);else"string"==typeof i&&i.length<4&&i.trim()&&" "===i[0]&&(i="");i=i&&u.h(i,n.j,a,s),u.N=t,
i=n.s&&"object"==typeof n.s?"[".concat(n.s.length,"] ")+n.s.slice(-1)[0]:i,
f.showHUD(d?i.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):i,n.u?14:15)},function(n,t){
var o,e,i,f,l,c,a=null!=t?t.s:null;null===a||4&a.Ln||(a.Ln|=4,(o=u.z.get(a.Sn))&&(o.Ln|=4)),i=1,
null!=(f=/^\d+|^-\d*/.exec(e=n.k))?(e=e.slice((l=f[0]).length),
i="-"!==l?parseInt(l,10)||1:-1):e.length>6&&e.startsWith("<".concat("c-v-").concat(e[5],">"))&&(e=e[5]+e.slice(7)),
(c=u.R.get(e))||(f=e.match(s.Tt),i=1,c=u.R.get(e=f[f.length-1])),r.hn(),c&&(36===c.ht&&c.yt&&d.$t(c),n.e&&(u.Re={
element:r.tn(n.e)}),v.executeCommand(c,i,n.l,t,0,null))},v.waitAndRunKeyReq,function(n,t){switch(u.N=t,n.a){case 1:
return b.It.zt(n,t);case 0:return b.It.Zt(n,t);case 2:return b.It.Xt(n.u);default:return}
},m.du,v.onConfirmResponse,function(n,t){var r,e,i,l,c,s,v,d;"e"!==n.t?(i=n.s,l=n.u,
s="tab"===(c="history"===(e=n.t)&&null!=i?"session":e)?c:c+" item",v=function(n){
Promise.resolve(a.$r("sugs")).then(function(t){f.showHUD(a.$r(n?"delSug":"notDelSug",[a.gr(t,c[0])||s]))})},
u.N=f.findCPort(t),
"tab"===c&&u.L===i?f.showHUD(a.$r("notRemoveCur")):"session"!==c?u.C._u("tab"===c?i:l,c,v):(null===(r=o.$n())||void 0===r?void 0:r.forgetClosedTab)&&(d=i,
o.$n().forgetClosedTab(d[0],d[1]).then(function(){return 1},u.j).then(v))):f.showHUD(a.$r("cannotDelSug"))
},p.openImgReq,function(n,t){u.N=null,m.openJSUrl(n.u,{},function(){u.N=t,f.showHUD(a.$r("jsFail"))})},function(n,t){
var r
;2!==n.c&&4!==n.c?j(n,t,(null===(r=u.z.get(t.s.Sn))||void 0===r?void 0:r.Un)||null,n.f):f.getParentFrame(t.s.Sn,t.s.Dn,1).then(function(r){
var o;j(n,t,r||(null===(o=u.z.get(t.s.Sn))||void 0===o?void 0:o.Un)||null,n.f)})},c.ii,function(n,t){
v.replaceCmdOptions({active:true,returnToViewport:true}),u.N=t,u.k=1,p.performFind()},p.framesGoBack,function(){
return a.vr&&a.vr(),a.jr},function(n,t){t.s.Ln|=8},function(n,t){v.replaceCmdOptions({mode:n.c?"caret":"",start:true}),
N(n.f),u.N=t,u.k=1,p.enterVisualMode()},function(n){if(performance.now()-n.r.n<500){var t=n.r.c;t.element=r.tn(n.e),
d.runKeyWithCond(t)}},function(n,t){var r=n.o||{},i=u.p(e.ru(n.u,true),1048576,r.s);i=i!==n.u||r.k?g.ir(i,r.k,0):i,
u.N=t,f.showHUD(i,78),o.downloadFile(i,n.f,n.r||"",n.m<42?function(r){r||u.K[24]({m:36,f:n.f,u:i},t)}:null)
},function(n,t,u){return setTimeout(function(){f.sendResponse(t,u,9)},n),t},function(n){var t=n.v,u=t!==!!t
;f.showHUD(a.$r(u?"useVal":t?"turnOn":"turnOff",[n.k,u?JSON.stringify(t):""]))},function(n,t){
var r=t.s.Sn,o=u.z.get(r>=0?r:u.L);u.K[18](n,o?o.Qn:null)},function(n,t,u){
return!(false!==t.s&&!t.s.dr.startsWith(location.origin+"/"))&&(w(n.q,n.i,t).then(function(n){t.postMessage(u?{N:4,m:u,
r:n}:n)}),t)},function(n,t){var r=n.u,o=r.indexOf("://")
;r=(r=o>0?r.slice(r.indexOf("/",o+4)+1):r).length>40?r.slice(0,39)+"\u2026":r,u.N=t,f.showHUD(r,78)},function(n,t){
var o=n.t,e=r.cn(n.u),i=o&&e?(u.ae.actions.find(function(n){return n.startsWith("itemJoin=")})||"").slice(9):""
;i=i?i.includes("\\")?s.mt('"'===i[0]?i:'"'.concat(i,'"')):r.in(i):": ",u.K[17]({s:o&&e?o+i+e:e||o,d:false,m:0
},f.findCPort(t))},function(n,t){
null!=n.i?f.showHUDEx(t,"mLocalMarkTask",1,[[n.m?"mJumpTo":"mCreate"],n.i||["mLastMark"]]):f.showHUDEx(t,"mCreateLastMark",1,[])
}],_=function(n,t,o,e,i,l,c,a){var s,v,d,m,p,b=this.s.dr,g=2===n?2:0
;if(1===n&&u.we>=58)if(b=b.slice(0,b.indexOf("/",b.indexOf("://")+3)+1),
null!=(m=-1!==k?null===(s=u.z.get(k))||void 0===s?void 0:s.Un:null)&&(m.s.dr.startsWith(b)?g=1:k=-1),
g);else for(p of u.z.values())if((d=(v=p.Un)&&v.s)&&d.dr.startsWith(b)){g=1,k=d.Sn;break}f.safePost(this,{N:43,a:o,c:a,
i:g,l:t,m:e,r:c,s:i,t:l}),r.hn()},j=function(n,t,r,o){r&&2!==r.s.Ce?r.postMessage({N:7,
H:o||4!==n.c?f.ensureInnerCSS(t.s):null,m:o?5:0,k:o?u.B:0,f:{},c:n.c,n:n.n||0,a:n.a}):(n.a.$forced=1,
v.portSendFgCmd(t,n.c,false,n.a,n.n||0))},N=function(n){n&&("string"==typeof n&&(n=d.parseEmbeddedOptions(n)),
n&&"object"==typeof n&&Object.assign(u.Ie,r.dn(n)))},w=function(t,u,r){return y||(y=new Promise(function(t,u){
n(["/background/sync.js"],t,u)}).then(n=>n).then(function(){return i.lo}).then(function(){
return o.import2("/background/page_handlers.js")})),y.then(function(n){return Promise.all(t.map(function(t){
return n.onReq(t,r)}))}).then(function(n){return{i:u,a:n.map(function(n){return void 0!==n?n:null})}})},
globalThis.window&&(window.onPagesReq=function(n){return w(n.q,n.i,null)})});