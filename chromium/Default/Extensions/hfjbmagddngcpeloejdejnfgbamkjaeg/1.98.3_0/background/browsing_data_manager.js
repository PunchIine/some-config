"use strict"
;__filename="background/browsing_data_manager.js",define(["require","exports","./store","./browser","./utils","./settings","./completion_utils"],function(t,e,n,r,i,o,u){
var f,a,l,c,s,_,m,v,d,p,T,h;Object.defineProperty(e,"__esModule",{value:true
}),e.Pr=e.Vr=e.Qr=e.Xr=e.Yr=e.oi=e.ui=e.omniBlockList=void 0,f=decodeURIComponent,c=-1,s="1",_=null,v=null,
e.omniBlockList=m=null,e.ui=function(t){var e,n,r=t.slice(0,5);if("https"===r)e=8;else if("http:"===r)e=7;else{
if(!r.startsWith("ftp"))return null;e=6}return n=t.indexOf("/",e),{
fi:"__proto__"!==(t=t.slice(e,n<0?t.length:n))?t:".__proto__",ai:e}},e.oi={li:null,ci:"",si:0,Or:0,_i:null,
mi:function(){var t=r.Cn.bookmarks;t.onCreated.addListener(e.oi.vi),t.onRemoved.addListener(e.oi.di),
t.onChanged.addListener(e.oi.di),t.onMoved.addListener(e.oi.vi),t.onImportBegan.addListener(function(){
r.Cn.bookmarks.onCreated.removeListener(e.oi.vi)}),t.onImportEnded.addListener(function(){
r.Cn.bookmarks.onCreated.addListener(e.oi.vi),e.oi.vi()})},pi:function(){n.H.Ce=1,e.oi.Or&&(clearTimeout(e.oi.Or),
e.oi.Or=0),r.Cn.bookmarks.getTree(e.oi.Ti)},Ti:function(t){n.H.Me=[],n.H.ve=[],n.H.Ce=2,u.hi.Xt(2),
t.forEach(e.oi.gi,e.oi),setTimeout(function(){return e.Pr.bi(n.H.Me)},50),e.oi.mi&&(setTimeout(e.oi.mi,0),e.oi.mi=null)
;var r=e.oi._i;e.oi._i=null,r&&r()},gi:function(t){var r,o,u,f=t.title,a=t.id,l=f||a,c=e.oi.ci+"/"+l
;t.children?(n.H.ve.push({fo:a,xi:c,ki:l}),r=e.oi.ci,2<++e.oi.si&&(e.oi.ci=c),t.children.forEach(e.oi.gi,e.oi),
--e.oi.si,e.oi.ci=r):(u=(o=t.url).startsWith("javascript:"),n.H.Me.push({fo:a,xi:c,ki:l,t:u?"javascript:":o,
wi:m?e.Qr(o,f):1,u:u?"javascript:":o,do:u?o:null,yi:u?i.in(o):null}))},Di:function(){var t=performance.now()-n.H.je
;0===n.H.Ce&&(t>=6e4||t<-5e3?(e.oi.Or=n.H.je=0,n.H.Se=false,e.oi.pi()):(n.H.Me=[],n.H.ve=[],
e.oi.Or=setTimeout(e.oi.Di,3e4),u.hi.Xt(2)))},vi:function(){n.H.je=performance.now(),
n.H.Ce<2||(e.oi.Or=setTimeout(e.oi.Di,6e4),n.H.Ce=0)},di:function(t,r){
for(var i,o,u,f,l,c,s=n.H.Me,_=s.length,v=r&&r.title,d=0;d<_&&s[d].fo!==t;d++);if(d<_)return o=(i=s[d]).u,u=r&&r.url,
a&&(null==v?o!==i.t||!r:null!=u&&o!==u)&&n.D.has(o)&&e.Yr.Li&&e.Yr.Ri(o)<0&&n.D.delete(o),
void(null!=v?(i.xi=i.xi.slice(0,-i.ki.length)+(v||i.fo),i.ki=v||i.fo,u&&(i.u=u,i.t=e.Pr.ji(u,i),e.Pr.Ii()),
m&&(i.wi=e.Qr(i.u,i.ki))):(s.splice(d,1),r||e.oi.vi()));if(n.H.ve.find(function(e){return e.fo===t})){
if(null!=v)return e.oi.vi();if(!n.H.Se&&a){for(c of(f=n.D,l=e.Yr.Ri,e.Yr.Li?s:[]))f.has(o=c.u)&&l(o)<0&&f.delete(o)
;n.H.Se=true}return e.oi.vi()}}},n.findBookmark=function(t,r){var o,u,f,a,l,c,s;if(2!==n.H.Ce)return o=i.g(),
e.oi._i=o.Rn,e.oi.pi(),o.zn.then(n.findBookmark.bind(0,t,r))
;if(f=(u=r.includes("/"))?(r+"").replace(/\\\/?|\//g,function(t){return t.length>1?"/":"\n"
}).split("\n").filter(function(t){return t}):[],!r||u&&!f.length)return Promise.resolve(false)
;for(c of(a=u?"/"+f.slice(1).join("/"):"",
l=u?"/"+f[0]+a:"",t?[]:n.H.Me))if(u&&(c.xi===l||c.xi===a)||c.ki===r)return Promise.resolve(c)
;for(c of t?n.H.ve:[])if(u&&(c.xi===l||c.xi===a)||c.ki===r)return Promise.resolve(c);for(c of(s=null,
t?[]:n.H.Me))if(c.ki.includes(r)){if(s){s=null;break}s=c}return Promise.resolve(s)},d=function(t){t&&t()},e.Yr={
Li:false,Mi:0,Pi:null,Ui:function(t){e.Yr.Pi?t&&e.Yr.Pi.push(t):(n.G.ke=Date.now(),e.Yr.Pi=t?[t]:[],
e.Yr.Mi||r.Cn.history.search({text:"",maxResults:2e4,startTime:0},function(t){setTimeout(e.Yr.Ei,0,t)}))},
Ei:function(t){var i,o,u,f,a;for(e.Yr.Ei=null,i=0,o=t.length;i<o;i++)(f=(u=t[i]).url).length>2e3&&(f=e.Yr.Oi(f,u)),
t[i]={t:f,ki:u.title,Ai:u.lastVisitTime,wi:1,u:f};if(m)for(a of t)0===e.Qr(a.t,a.ki)&&(a.wi=0);setTimeout(function(){
setTimeout(function(){var t,r,i,o,u,f,a,l,c=n.G.Pe
;for(t=c.length-1;0<t;)for(u=(o=(r=c[t]).t=e.Pr.ji(i=r.u,r)).length>=i.length;0<=--t&&!((a=(f=c[t]).u).length>=i.length)&&i.startsWith(a);)f.u=i.slice(0,a.length),
l=u?a:e.Pr.ji(a,f),f.t=u||l.length<a.length?o.slice(0,l.length):l;e.Yr.Si&&setTimeout(function(){
e.Yr.Si&&e.Yr.Si(n.G.Pe)},200)},100),n.G.Pe.sort(function(t,e){return t.u>e.u?1:-1}),e.Yr.Li=true,
r.Cn.history.onVisitRemoved.addListener(e.Yr.Bi),r.Cn.history.onVisited.addListener(e.Yr.Vi)},100),n.G.Pe=t,e.Yr.Ui=d,
e.Yr.Pi&&e.Yr.Pi.length>0&&setTimeout(function(t){for(var e of t)e()},1,e.Yr.Pi),e.Yr.Pi=null},Vi:function(t){
var r,i,o,f,a,l,c,s,_,v=t.url;if(v.length>2e3&&(v=e.Yr.Oi(v,t)),r=t.lastVisitTime,i=t.title,o=++n.G.Ne,f=n.G.Ve,
(a=e.Yr.Ri(v))<0&&n.G.Be++,(o>59||o>10&&Date.now()-n.G.ke>3e5)&&e.Yr.Wi(),l=a>=0?n.G.Pe[a]:{t:"",ki:i,Ai:r,
wi:m?e.Qr(v,i):1,u:v},f&&(s=e.ui(v))&&((c=f.get(s.fi))?(c.Ai=r,a<0&&(c.qi+=l.wi),
s.ai>6&&(c.mr=8===s.ai?1:0)):f.set(s.fi,{Ai:r,qi:l.wi,mr:8===s.ai?1:0})),a>=0)return l.Ai=r,void(i&&i!==l.ki&&(l.ki=i,
u.hi.hr&&u.hi.Xt(1),m&&(_=e.Qr(v,i),l.wi!==_&&(l.wi=_,c&&(c.qi+=_||-1)))));l.t=e.Pr.ji(v,l),n.G.Pe.splice(~a,0,l),
u.hi.hr&&u.hi.Xt(1)},Bi:function(t){var r,i,o,f,a,c,s,_,m;if(l.length=0,r=n.D,u.hi.Xt(1),t.allHistory)return n.G.Pe=[],
n.G.Ve=new Map,i=new Set(n.H.Me.map(function(t){return t.u})),void r.forEach(function(t,e){i.has(e)||r.delete(e)})
;for(s of(o=e.Yr.Ri,
f=n.G.Pe,a=n.G.Ve,t.urls))(_=o(s))>=0&&(a&&f[_].wi&&(m=e.ui(s))&&(c=a.get(m.fi))&&--c.qi<=0&&a.delete(m.fi),
f.splice(_,1),r.delete(s))},Oi:function(t,e){var n=t.lastIndexOf(":",9),r=n>0&&"://"===t.substr(n,3),o=e.title
;return t=t.slice(0,(r?t.indexOf("/",n+4):n)+320)+"\u2026",o&&o.length>160&&(e.title=i.wn(o,0,160)),t},Wi:function(){
var t=Date.now();if(n.G.Be<=0);else{if(t<n.G.ke+1e3&&t>=n.G.ke)return;setTimeout(r.Cn.history.search,50,{text:"",
maxResults:Math.min(999,n.G.Ne+10),startTime:t<n.G.ke?t-3e5:n.G.ke},e.Yr.Ci)}return n.G.ke=t,n.G.Be=n.G.Ne=0,e.Pr.Ii()},
Si:function(t){var r,i,o,u,f,a,l,c;for(i of(e.Yr.Si=null,r=n.G.Ve,t))o=i.Ai,u=i.wi,(f=e.ui(i.u))&&(l=f.ai,
(c=r.get(a=f.fi))?(c.Ai<o&&(c.Ai=o),c.qi+=u,l>6&&(c.mr=8===l?1:0)):r.set(a,{Ai:o,qi:u,mr:8===l?1:0}))},Ci:function(t){
var r,i,o,u,f=n.G.Pe,a=e.Yr.Ri;if(!(f.length<=0))for(r of t){if((i=r.url).length>2e3&&(r.url=i=e.Yr.Oi(i,r)),
(o=a(i))<0)n.G.Be--;else if(!(u=r.title)||u===f[o].ki)continue;n.G.Ne--,e.Yr.Vi(r)}},Ri:function(t){
for(var e="",r=n.G.Pe,i=r.length-1,o=0,u=0;o<=i;)if((e=r[u=o+i>>>1].u)>t)i=u-1;else{if(e===t)return u;o=u+1}return~o}},
p=function(t,n,i){var o=r.$n();o?o.getRecentlyClosed({
maxResults:Math.min(Math.round(1.2*t),+o.MAX_SESSION_RESULTS||25,25)},function(t){var o,u,f,a,l,c,s;for(a of(o=[],f=0,
t||[]))(l=a.tab)?((c=l.url).length>2e3&&(c=e.Yr.Oi(c,l)),s=l.title,(n||e.Qr(c,s))&&o.push({u:c,ki:s,
Hi:(u=a.lastModified,u<3e11&&u>-4e10?1e3*u:u),zi:[l.windowId,l.sessionId]})):f=1;return f?setTimeout(i,0,o):i(o),r.On()
}):i([])},e.Xr=p,e.Qr=function(t,e){return v.test(e)||v.test(t)?0:1},e.Vr={Fi:function(t){var e,n
;if(m)for(e of t)for(n of m)if(n=n.trim(),e.includes(n)||n.length>9&&e.length+2>=n.length&&n.includes(e))return true
;return false},Gi:function(){var t,r,i,o,u;if(n.H.Me)for(t of n.H.Me)t.wi=m?e.Qr(t.t,t.xi):1
;if(n.G.Pe)for(t of(r=n.G.Ve,
n.G.Pe))i=m?e.Qr(t.t,t.ki):1,t.wi!==i&&(t.wi=i,r&&(o=e.ui(t.u))&&(u=r.get(o.fi))&&(u.qi+=i||-1))}},e.Pr={
ji:function(t,e){if(t.length>=400||t.lastIndexOf("%")<0)return t;try{return f(t)}catch(t){}
return n.D.get(t)||(e&&l.push(e),t)},bi:function(t){for(var r,i,o=n.D,u=l,a=-1,c=t.length;;)try{
for(;++a<c;)(r=t[a]).t=(i=r.u).length>=400||i.lastIndexOf("%")<0?i:f(i);break}catch(t){r.t=o.get(i)||(u.push(r),i)}
e.Pr.Ii()},Ii:function(){0!==l.length&&-1===c&&(c=0,setTimeout(T,17))}},T=function(){var t,e,r,i,o=l.length
;if(!s||c>=o)return l.length=0,c=-1,void(_=null)
;for(o=Math.min(c+32,o),_=_||new TextDecoder(s);c<o;c++)(t=n.D.get(i=(r="string"==typeof(e=l[c]))?e:e.u))?r||(e.t=t):(t=(t=i.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi,h)).length!==i.length?t:i,
"string"!=typeof e?n.D.set(e.u,e.t=t):n.D.set(e,t));c<l.length?setTimeout(T,4):(l.length=0,c=-1,_=null)},h=function(t){
var e,n,r=new Uint8Array(t.length/3);for(e=1,n=0;e<t.length;e+=3)r[n++]=parseInt(t.substr(e,2),16);return _.decode(r)},
n.F.omniBlockList=function(t){var r,o=[];for(r of t.split("\n"))r.trim()&&"#"!==r[0]&&o.push(r)
;v=o.length>0?new RegExp(o.map(i.i).join("|"),""):null,e.omniBlockList=m=o.length>0?o:null,
(n.G.Pe||n.H.Me.length)&&setTimeout(e.Vr.Gi,100)},o.lo.then(function(){o.io("omniBlockList")}),
n.F.localeEncoding=function(t){var r=!!t&&!(t=t.toLowerCase()).startsWith("utf"),i=s;if((s=r?t:"")!==i){try{
new TextDecoder(s)}catch(t){r=false}r?"1"!==i&&setTimeout(function(){return n.G.Pe&&e.Pr.bi(n.G.Pe),e.Pr.bi(n.H.Me)
},100):(n.D.clear(),l&&(l.length=0)),a!==r&&(l=r?[]:{length:0,push:n.j},a=r,c=-1)}},o.io("localeEncoding"),
n.C._u=function(t,n,i){switch(n){case"tab":u.hi.Ji(null),r.Bn.remove(+t,function(){var t=r.On();return t||u.hi.Ji(null),
i(!t),t});break;case"history":var o=!e.Yr.Li||e.Yr.Ri(t)>=0;r.Cn.history.deleteUrl({url:t}),o&&u.hi.Xt(1),i(o)}},
n.C.Ki=e.Vr.Fi});