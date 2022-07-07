"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],function(n,t,e,r,o,i,u,a,c,l,f,s,v,d){
var _;Object.defineProperty(t,"__esModule",{value:true}),t._t=t.Mt=t.Ct=t.It=t.St=void 0,t.St={jt:function(n,t){
return"vimiumContent|"+n+(t?"|"+t:"")},Nt:function(n,t){var i=o.Cn.contentSettings;try{i&&i.images.get({
primaryUrl:"https://127.0.0.1/"},o.On)}catch(n){i=null}
return i?i[n]&&!/^[A-Z]/.test(n)&&i[n].get?!(!t.startsWith("read:")&&r.jn.test(t)&&!t.startsWith(e.e.xe))&&(c.complainLimits(f.$r("changeItsCS")),
true):(c.showHUD(f.$r("unknownCS",[n])),true):(c.showHUD("Has not permitted to set contentSettings"),true)},
Ot:function(n,t){var o,u,a,l,s,v,d,_,m,p
;if(n.startsWith("file:"))return(o=e.we>=56?1:t>1?2:0)?(c.complainLimits(1===o?f.$r("setFileCS",[56]):f.$r("setFolderCS")),
[]):[n.split(/[?#]/,1)[0]];if(n.startsWith("ftp"))return c.complainLimits(f.$r("setFTPCS")),[]
;if(u=n.match(/^([^:]+:\/\/)([^\/]+)/),a=i.cr.exec(u[2]),l=[(n=u[1])+(s=a[3]+(a[4]||""))+"/*"],
t<2||r.fn(a[3],0))return l;for(a=null,d=(v=r.ln(s))[0],_=v[1],m=Math.min(d.length-_,t-1),
p=0;p<m;p++)s=s.slice(d[p].length+1),l.push(n+s+"/*");return l.push(n+"*."+s+"/*"),
m===d.length-_&&"http://"===n&&l.push("https://*."+s+"/*"),l},Rt:function(n){var t,e,r;for(e of n.po){
if(r=new URL(e.s.dr).host,t&&t!==r)return true;t=r}return false},At:function(n,e){var r=o.Cn.contentSettings[n]
;null==e?(r.clear({scope:"regular"}),r.clear({scope:"incognito_session_only"},o.On),a.co(t.St.jt(n),null)):r.clear({
scope:e?"incognito_session_only":"regular"})},Ut:function(n,r){var o=n.type?""+n.type:"images"
;return!t.St.Nt(o,"http://a.cc/")&&(t.St.At(o,r?r.s.Vn:2===e.A),
c.showHUDEx(r,"csCleared",0,[o[0].toUpperCase()+o.slice(1)]),true)},Gt:function(n,e,r,o){
var i=n.type?""+n.type:"images",u=r[0];n.incognito?t.St.Jt(e,i,u,o):t.St.Wt(i,e,u,"reopen"===n.action,o)},
Wt:function(n,r,u,c,l){var f=i.nr(u.url);t.St.Nt(n,f)?l(0):o.Cn.contentSettings[n].get({primaryUrl:f,
incognito:u.incognito},function(i){t.St.qt(n,f,r,{scope:u.incognito?"incognito_session_only":"regular",
setting:i&&"allow"===i.setting?"block":"allow"},function(r){var i,f,v;r?l(0):(u.incognito||(i=t.St.jt(n),
"1"!==e.ce.get(i)&&a.co(i,"1")),v=!o.$n()||e.we>=70&&(f=e.z.get(u.id))&&f.po.length>1&&t.St.Rt(f),
u.incognito||c?d.Ft(u):u.index>0?d.Ft(u,v?0:2):o.getCurWnd(true,function(n){
return n&&"normal"===n.type?d.Ft(u,v?0:n.tabs.length>1?2:1):o.Bn.reload(s.getRunNextCmdBy(0)),o.On()}))})})},
Jt:function(n,r,u,a){if(e.e.He)return c.complainLimits(f.$r("setIncogCS")),void a(0);var l=i.nr(u.url)
;t.St.Nt(r,l)?a(0):o.Cn.contentSettings[r].get({primaryUrl:l,incognito:true},function(e){
return o.On()?(o.Cn.contentSettings[r].get({primaryUrl:l},function(e){e&&"allow"===e.setting?a(1):o.An.create({
type:"normal",incognito:true,focused:false,url:"about:blank"},function(e){var i=e.tabs[0].id
;return t.St.Pt(n,r,u,l,e.id,true,function(){o.Bn.remove(i)})})
}),o.On()):e&&"allow"===e.setting&&u.incognito?t.St.Qt(u):void o.An.getAll(function(o){var i,a,c
;if((o=o.filter(function(n){return n.incognito&&"normal"===n.type})).length)return i=v.preferLastWnd(o),
e&&"allow"===e.setting?t.St.Qt(u,i.id):(a=u.windowId,c=u.incognito&&o.some(function(n){return n.id===a}),
t.St.Pt(n,r,u,l,c?void 0:i.id))
;console.log("%cContentSettings_.ensure","color:red","get incognito content settings",e," but can not find an incognito window.")
})})},Pt:function(n,e,r,i,u,a,c){var l=t.St.Dt.bind(null,r,u,c);return t.St.qt(e,i,n,{scope:"incognito_session_only",
setting:"allow"},a&&u!==r.windowId?function(n){if(n)return l(n);o.An.get(r.windowId,l)}:l)},qt:function(n,e,i,u,a){
var c,l=false,f=o.Cn.contentSettings[n],s=function(){var n=o.On();return n&&console.log("[%o]",Date.now(),n),l||(--d,
((l=!!n)||0===d)&&setTimeout(a,0,l)),n},v=t.St.Ot(e,0|i),d=v.length;if(d<=0)return a(true);for(c of(r.dn(u),
v))f.set(Object.assign({primaryPattern:c},u),s)},Dt:function(n,e,r,i){true!==i&&t.St.Qt(n,e),r&&r(),
true!==i?e&&o.An.update(e,{focused:true,state:i?i.state:void 0}):s.runNextCmd(0)},Qt:function(n,t){n.active=true,
"number"==typeof t&&n.windowId!==t&&(n.index=void 0,n.windowId=t),d.Ft(n)}},t.It={ro:function(n,r,o,i){
var u,l,f,s=n.l,v=n.n,d=n.u,m=n.s
;s&&0===m[0]&&0===m[1]&&(2===m.length?(u=d.indexOf("#"))>0&&u<d.length-1&&m.push(d.slice(u)):(m[2]||"").length<2&&m.pop()),
l=t.It.Kt(v,s?d:""),f=JSON.stringify(s?m:{tabId:o,url:d,scroll:m}),r?(e.O||(_.xt(),e.O=new Map)).set(l,f):a.co(l,f),
i&&c.showHUDEx(i,"mNormalMarkTask",1,[["mCreate"],[s?"Local":"Global"],v])},zt:function(n,r){var o,i=r.s.Sn
;n.s?t.It.ro(n,r.s.Vn,i,r):(r=(null===(o=e.z.get(i))||void 0===o?void 0:o.Un)||r)&&r.postMessage({N:11,n:n.n})},
Zt:function(n,i){var u,a,l,f,d,_,m,p=n.n,g=t.It.Kt(p,n.u),b=i.s.Vn&&(null==e.O?void 0:e.O.get(g))||e.ce.get(g),h=n.c
;n.l&&((u=b?JSON.parse(b):null)||(l=void 0,f=void 0,(a=n.o)&&(l=+a.x)>=0&&(f=+a.y)>=0&&(u=[l,f,a.h])),
u)?t.It.Bt(i,2,p,u,h):b?(_=+(d=JSON.parse(b)).tabId,(m={u:d.url,s:d.scroll,t:d.tabId,n:p,p:true,
q:v.parseOpenPageUrlOptions(h),f:s.parseFallbackOptions(h)}).p=false!==h.prefix&&0===m.s[1]&&0===m.s[0]&&!!r.rn(m.u),
_>=0&&e.z.has(_)?o.tabsGet(_,t.It.Et.bind(0,m)):e.K[21](m)):c.showHUDEx(i,"noMark",0,[[n.l?"Local":"Global"],p])},
Et:function(n,r){var i=o.getTabUrl(r).split("#",1)[0];if(i===n.u||n.p&&n.u.startsWith(i))return e.K[6]({s:r.id}),
t.It.Vt(n,r);e.K[21](n)},Kt:function(n,t){
return t?"vimiumMark|"+u.eu(t.split("#",1)[0])+(t.length>1?"|"+n:""):"vimiumGlobalMark|"+n},Bt:function(n,t,e,r,o){
n.postMessage({N:15,l:t,n:e,s:r}),e&&c.showHUDEx(n,"mNormalMarkTask",t?1:2,[["mJumpTo"],[t?"Local":"Global"],e]),
o&&s.runNextCmdBy(1,o)},Vt:function(n,r){var o,i=r.id,u=null===(o=e.z.get(i))||void 0===o?void 0:o.Un
;if(u&&t.It.Bt(u,0,n.n,n.s,n.f),n.t!==i&&n.n)return t.It.ro(n,2===e.A,i)},Xt:function(n){var r,o=t.It.Kt("",n),i=0
;e.ce.forEach(function(n,t){t.startsWith(o)&&(i++,a.co(t,null))}),(r=e.O)&&r.forEach(function(n,t){
t.startsWith(o)&&(i++,r.delete(t))
}),c.showHUDEx(e.N,"markRemoved",0,[i,["#"===n?"allLocal":n?"Local":"Global"],[1!==i?"have":"has"]])}},t.Ct={Yt:null,
hr:0,wr:function(){var n=e.ce.get("findModeRawQueryList")||"";t.Ct.Yt=n?n.split("\n"):[],t.Ct.wr=null},
yr:function(n,o,i){var u,c,l=t.Ct;if(l.wr&&l.wr(),u=n?e.q||(_.xt(),e.q=l.Yt.slice(0)):l.Yt,
!o)return(u[u.length-(i||1)]||"").replace(/\r/g,"\n");o=o.replace(/\n/g,"\r"),n?l.Mr(o,u,true):(o=r.wn(o,0,99),
(c=l.Mr(o,u))&&a.co("findModeRawQueryList",c),e.q&&l.Mr(o,e.q,true))},Mr:function(n,t,e){var r=t.lastIndexOf(n)
;if(r>=0){if(r===t.length-1)return;t.splice(r,1)}else t.length>=50&&t.shift();if(t.push(n),!e)return t.join("\n")},
Cr:function(n){n?e.q&&(e.q=[]):(t.Ct.wr=null,t.Ct.Yt=[],a.co("findModeRawQueryList",""))}},_={Ir:false,hr:0,
xt:function(){_.Ir||(o.An.onRemoved.addListener(_.Tr),_.Ir=true)},Tr:function(){_.Ir&&(_.hr=_.hr||setTimeout(_.Sr,34))},
Sr:function(){var n;if(_.hr=0,e.we>51)for(n of e.z.values())if(n.Qn.s.Vn)return;o.An.getAll(function(n){
n.some(function(n){return n.incognito})||_.Lr()})},Lr:function(){e.q=null,e.O=null,o.An.onRemoved.removeListener(_.Tr),
_.Ir=false}},t.Mt={Nr:[1,1],Or:0,Rr:function(n){var e=t.Mt.Nr[n];return"object"==typeof e?e.matches:null},
Ar:function(n,e){var r,o=2===e,i=t.Mt,u=i.Nr,a=u[n],c=n?"prefers-color-scheme":"prefers-reduced-motion"
;1===a&&o&&(u[n]=a=matchMedia("(".concat(c,")")).matches?2:0),
o&&2===a?((r=matchMedia("(".concat(c,": ").concat(n?"dark":"reduce",")"))).onchange=i.Ur,u[n]=r,
i.Or=i.Or||setInterval(t.Mt.Gr,6e4)):o||"object"!=typeof a||(a.onchange=null,u[n]=2,i.Or>0&&u.every(function(n){
return"object"!=typeof n})&&(clearInterval(i.Or),i.Or=0))},Jr:function(n,r,o){var i,u,c,f,s=t.Mt.Nr[n]
;i=n?"dark":"less-motion",
f=a.to(c=n?"d":"m",u="object"==typeof s?s.matches:null!=o?o:1===(0===n?e.me.autoReduceMotion:e.me.autoDarkMode)),
e.ie[c]!==f&&(e.ie[c]=f,r||a.so({N:6,d:[c]})),l.ii({t:i,
e:u||" ".concat(e.me.vomnibarOptions.styles," ").includes(" ".concat(i," ")),b:!r})},Gr:function(){var n,e
;for(e=(n=t.Mt.Nr).length;0<=--e;)"object"==typeof n[e]&&t.Mt.Jr(e)},Ur:function(){t.Mt.Or>0&&clearInterval(t.Mt.Or),
t.Mt.Or=-1;var n=t.Mt.Nr.indexOf(this);n>=0&&t.Mt.Jr(n)}},t._t={Wr:null,qr:e.j},setTimeout(function(){function n(n){
var t,i,u;n.windowId===e.J?((t=performance.now())-f>666&&(i=c.get(e.L),u=1===e.he?Date.now():t,i?(i.i=++l,
i.t=u):c.set(e.L,{i:++l,t:u}),l>2037&&o.Bn.query({},s)),e.L=n.tabId,f=t):o.An.get(n.windowId,r)}function r(n){
if(n.focused){var t=n.id;t!==e.J&&(e.E=e.J,e.J=t),o.Bn.query({windowId:t,active:true},function(n){
n&&n.length>0&&t===e.J&&i(n)})}}function i(r){if(!r||0===r.length)return o.On();var i=r[0],u=i.windowId,a=e.J
;u!==a&&(e.J=u,e.E=a),e.A=i.incognito?2:1,t._t.qr(),n({tabId:i.id,windowId:u})}var u=e.J,c=e.T,l=1,f=0,s=function(n){
var t=n?n.map(function(n){return[n.id,c.get(n.id)]}).filter(function(n){return n[1]}).sort(function(n,t){
return n[1].i-t[1].i}):[];t.length>1023&&t.splice(0,t.length-1023),t.forEach(function(n,t){return n[1].i=t+2}),
(l=t.length>0?t[t.length-1][1].i:1)>1?e.T=c=new Map(t):(c.forEach(function(n,t){n.i<1026?c.delete(t):n.i-=1024}),l=1024)
};o.Bn.onActivated.addListener(n),o.An.onFocusChanged.addListener(function(n){n!==u&&o.Bn.query({windowId:n,active:true
},i)}),o.getCurTab(function(n){f=performance.now();var t=n&&n[0];if(!t)return o.On();e.L=t.id,e.J=t.windowId,
e.A=t.incognito?2:1}),t._t.Wr=function(n,t){return c.get(t.id).i-c.get(n.id).i},a.lo.then(function(){
for(var n of["images","plugins","javascript","cookies"])null!=e.ce.get(t.St.jt(n))&&o.Cn.contentSettings&&setTimeout(t.St.At,100,n)
})},120),e.F.autoDarkMode=e.F.autoReduceMotion=function(n,e){var r=e.length>12?0:1
;t.Mt.Ar(r,n="boolean"==typeof n?n?2:0:n),t.Mt.Jr(r,0,2===n?null:n>0)},e.F.vomnibarOptions=function(n){
var r,o,i,u,c,l,f,s=a.ao.vomnibarOptions,v=e.se,d=true,_=s.actions,m=s.maxMatches,p=s.queryInterval,g=s.styles,b=s.sizes
;n!==s&&n&&"object"==typeof n&&(r=Math.max(3,Math.min(0|n.maxMatches||m,25)),
i=(o=n.actions)?o.replace(/[,\s]+/g," ").trim():"",u=+n.queryInterval,c=((n.sizes||"")+"").trim(),
l=((n.styles||"")+"").trim(),f=Math.max(0,Math.min(u>=0?u:p,1200)),(d=m===r&&p===f&&c===b&&_===i&&g===l)||(m=r,p=f,b=c,
g=l),e.ae.actions=i?i.split(" "):[],n.actions=i,n.maxMatches=r,n.queryInterval=f,n.sizes=c,n.styles=l),
e.me.vomnibarOptions=d?s:n,v.n=m,v.i=p,v.s=b,v.t=g,t.Mt.Jr(0,1),t.Mt.Jr(1,1),a.no({N:47,d:{n:m,i:p,s:b,t:v.t}})}});