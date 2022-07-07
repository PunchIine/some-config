"use strict"
;__filename="background/page_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./key_mappings","./run_commands","./tools","./open_urls","./frame_commands"],function(n,u,r,t,l,e,o,i,c,f,s,a,v,d,m,p){
var _,g,b,k;Object.defineProperty(u,"__esModule",{value:true}),u.onReq=void 0,_=[function(){return[i.ao,r.he,r.e.Le]
},function(n){var u,t,l;if(r.w)return r.w.then(_[1].bind(null,n,null));for(t in u={},
i.ao)(l=r.me[t])!==i.ao[t]&&(u[t]=l);return u},function(n){var u,t,l,e,o
;return r.w?r.w.then(_[2].bind(null,n,null)):(l=n.key,
e=null!==(t=null!==(u=n.val)&&void 0!==u?u:i.ao[l])&&void 0!==t?t:null,i.ro(l,e),(o=r.me[l])!==e?o:null)},function(n){
var u=i.to(n.key,n.val);return u!==n.val?u:null},function(n){i.so({N:6,d:n})},function(n){return r.me[n.key]
},function(n){r.z.has(n)||l.n(n)},function(){var n,u=a.vt;return!(!r.ie.l||u||(n=Object.keys(r.y).join(""),
n+=r.x?Object.keys(r.x).join(""):"",!/[^ -\xff]/.test(n)))||(u?(function(n){
var u,r,t=n.length>1?n.length+" Errors:\n":"Error: ";for(r of n)u=0,t+=r[0].replace(/%([a-z])/g,function(n,t){return++u,
"c"===t?"":"s"===t||"d"===t?r[u]:JSON.stringify(r[u])}),u+1<r.length&&(t+=" "+r.slice(u+1).map(function(n){
return"object"==typeof n&&n?JSON.stringify(n):n}).join(" ")),t+=".\n";return t})(u):"")},function(n){
var u=c.indexFrame(n[1],0);return u&&u.s&&(u.s.Ln|=44),s.mergeCSS(n[0],-1)},function(n){n&&i.co("isHC_f",n.hc?"1":null),
s.ri(2)},function(n){return[e.ir(n[0],null,n[1]),e.sr]},function(){d.Mt.Gr()},function(){var n=r.R.get("?"),u="?"
;return n&&7===n.ht&&n.yt||r.R.forEach(function(n,r){7===n.ht&&n.yt&&(u=u&&u.length<r.length?u:r)}),u},function(n){var u
;return[n=e.ir(n,null,0),null!==(u=r.Y.get(n))&&void 0!==u?u:null]},function(n){var u,r,t,l=new Map
;return o.uu("k:"+n,l),
null==(u=l.get("k"))?null:(r=e.ir(u.dr,null,-2),[!(t=e.sr>2),t?u.dr:r.replace(/\s+/g,"%20")+(u.ou&&"k"!==u.ou?" "+u.ou:"")])
},function(n){m.du(n)},function(n){var u=null;return n.startsWith("vimium://")&&(u=r.u(n.slice(9),1,true)),
"string"==typeof(u=null!==u?u:e.ir(n,null,-1))&&(u=o.tu(u,"whole"),u=e.Ze(u)),u},function(){return r.o&&r.o()
},function(n){return r.p(n[0],n[1])},function(n){return m.pu(n)},function(){
return Promise.all([l.Wn(l.getCurTab),r.w]).then(function(n){
var u,e=n[0],o=e&&e[0]||null,c=o?o.id:r.L,s=null!==(u=r.z.get(c))&&void 0!==u?u:null,a=o?l.getTabUrl(o):s&&(s.Un||s.Qn).s.dr||"",v=!s||s.Qn.s.Dn&&!t.jn.test(s.Qn.s.dr)?null:s.Qn.s,d=!(s||o&&a&&"loading"===o.status&&/^(ht|s?f)tp/.test(a)),m=k(s),p=!d&&!m,_=p?null:m||!a?m:a.startsWith(location.protocol)&&!a.startsWith(location.origin+"/")?new URL(a).host:null,g=_?r.X.get(_):null
;return p||null==g||true===g?_=null:s&&(s.Yn=-1),{ver:r.e.Ae,runnable:p,url:a,tabId:c,
frameId:s&&(v||s.Un)?(v||s.Un.s).Dn:0,topUrl:v&&v.Dn&&s.Un?s.Un.s.dr:null,frameUrl:v&&v.dr,lock:s&&s.En?s.En.Ce:null,
status:v?v.Ce:0,unknownExt:_,exclusions:p?{rules:r.me.exclusionRules,onlyFirst:r.me.exclusionOnlyFirstMatch,
matchers:f.ut(null),defaults:i.ao.exclusionRules}:null,os:r.he,reduceMotion:r.ie.m}})},function(n){
var u,e,o=n[0],c=n[1],f=r.me.extAllowList,s=f.split("\n")
;return s.indexOf(c)<0&&(u=s.indexOf("# "+c)+1||s.indexOf("#"+c)+1,s.splice(u?u-1:s.length,u?1:0,c),f=s.join("\n"),
i.ro("extAllowList",f)),(e=r.z.get(o))&&(e.Yn=null),l.Wn(l.Cn.tabs.get,o).then(function(n){var u=t.g(),r=function(){
return v.runNextOnTabLoaded({},n,u.Rn),l.Cn.runtime.lastError};return n?l.Cn.tabs.reload(n.id,r):l.Cn.tabs.reload(r),
u.zn})},function(n){var u,t,l=n[1],e=n[2]
;return r.u("status/"+n[0],3),t=(u=c.indexFrame(l,e)||c.indexFrame(l,0))?r.z.get(l).En:null,u&&!t&&r.K[9]({u:u.s.dr},u),
[u?u.s.Ce:0,t?t.Ce:null]},function(n){return f.ut(n)[0]},function(n,u){return p.initHelp({f:true},u)},function(n){
var u,r,t,e=n.module,o=n.name,i=g[e];return g.hasOwnProperty(e)&&i.includes(o)?(r=n.args,t=(u=l.Cn[e])[o],
new Promise(function(n){r.push(function(u){var r=l.On();return n(r?[void 0,r]:[b(u),void 0]),r}),t.apply(u,r)
})):[void 0,{message:"refused"}]},function(n,u){return u.s.Sn},function(n){var u,l=t.bn();return n?(u=r.ce.get(n),
l[n]=null!=u?u:null):r.ce.forEach(function(n,u){l[u]=n}),l},function(n){var u=n.key,r=n.val;u.includes("|")&&i.co(u,r)
},function(n,u){var t,l=n.key,e=n.val,o=u&&u.s&&u.s.Sn||r.L,i=r.U.find(function(n){return n.s.Sn===o})
;i&&i.postMessage({N:47,d:(t={},t[l]=e,t)})},function(){r.me.vimSync&&r.F.vimSync(true,"vimSync")}],g={
permissions:["contains","request","remove"],tabs:["update"]},b=function(n){return{
message:n&&n.message?n.message+"":JSON.stringify(n)}},u.onReq=function(n,u){return _[n.n](n.q,u)},k=function(n){
return n&&"string"==typeof n.Yn&&true!==r.X.get(n.Yn)?n.Yn:null}});