"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],function(n,e,t,i,r,u){
function o(){return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}
var f,l,c,s,a,d,y,v,S,g,p,b,m,O,N,J,j,w,T,_,h,k,x,D,q,M;Object.defineProperty(e,"__esModule",{value:true}),f=i.dn({
findModeRawQueryList:1,innerCSS:1,keyboard:1,newTabUrl_f:1,vomnibarPage_f:1}),l=r.Cn.storage,c="sync.cloud:",a=null,
d="",y=null,v=null,S=0,g=null,p=function(){return s||(s=l&&l.sync)},b=function(n){m(n,"sync")},m=function(n,e){var t,r,u
;if("sync"===e)if(t=function(n){var e,t,r,u;if(y){
for(e in i.dn(n),y)!(r=(t=e.split(":")[0])===e)&&t in y||N(t,null!=(u=r?y[e]:null)?u.newValue:n[t],n);y=null}},i.dn(n),
y?Object.assign(y,n):y=n,g)g.then(function(){return m({},e)});else for(r in n=y,y=null,n){if(u=n[r],
8===(r.includes(":")?8:N(r,null!=u?u.newValue:null)))return y=n,void p().get(t);delete n[r]}},O=function(){
console.log.apply(console,["[".concat(o(),"]")].concat([].slice.call(arguments)))},N=function(n,e,i){var r,o,f,l,c,s
;if(n in u.ao&&D(n)){if(r=u.ao[n],o=e&&"object"==typeof e&&e.$_serialize||""){if("split"===o&&!i)return 8
;if(8===(e=h(n,e,i)))return}null!=e?(f=g?r:t.me[n],(s="object"!=typeof r)?(c=e,l=f):(c=JSON.stringify(e),
l=JSON.stringify(f)),
c!==l&&(c===(f=s?r:JSON.stringify(r))&&(e=r),g||O("sync.this:","update",n,"string"==typeof e?(e.length>32?e.slice(0,30)+"...":e).replace(/\n/g,"\\n"):e),
J(n,e))):t.me[n]!=r&&(g||O("sync.this:","reset",n),J(n,r))}},J=function(n,e){d=n,u.ro(n,e),d="",n in u.eo&&u.so({N:6,
d:[u.eo[n]]})},j=function(n,e){D(n)&&n!==d&&(a||(setTimeout(x,800),a=i.bn()),a[n]=e)},w=function(n){
return n.replace(/[<`\u2028\u2029]/g,function(n){return"<"===n?"`l":"`"===n?"`d":"\u2028"===n?"`r":"`n"})},
T=function(n){return n.replace(/"|\\[\\"]/g,function(n){return'"'===n?"`q":'\\"'===n?"`Q":"`S"})},_=function(n){var e={
Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"};return n.replace(/`[QSdlnqr]/g,function(n){return e[n[1]]})},
h=function(n,e,t){var i,r,o,f,l="";switch(e.$_serialize){case"split":for(i=e.k,r=e.s,o=0;o<r;o++){
if(!(f=t[n+":"+o])||"string"!=typeof f||!f.startsWith(i))return 8;l+=f.slice(i.length)}break;case"single":
return JSON.parse(_(JSON.stringify(e.d)));default:
return O("Error: can not support the data format in synced settings data:",n,":",e.$_serialize),null}
return"string"==typeof u.ao[n]?l=_(l):(l=_(JSON.stringify(l)),JSON.parse(l.slice(1,-1)))},k=function(n,e,t){
var i,r,o,f,l,c,s,a,d,y,S,g,p,b,m,O;if(e&&!("string"!=typeof e?"object"!=typeof e:e.length<8192/6-40)&&(r="",
!((i=JSON.stringify(e)).length<8192/6-40||(o=function(n){return n.replace(/[^\x00-\xff]/g,function(n){
var e=n.charCodeAt(0);return"\\u"+(e>4095?"":"0")+e.toString(16)})},f=true,l=i.length,
3*((c=(i=w(i)).length)-l)+3*l<8093)))){
if((r=f?t.encode(i):i=o(i)).length<8093)return(f?r.length+4*(c-l):Math.ceil((r.length-c)/5*3+6*(c-l)+(l-(r.length-c)/5-(c-l))))<8093?void 0:i
;for(s=0,a=Date.now().toString(36)+":",d={},i="string"==typeof u.ao[n]?i.slice(1,-1):T(i),f?(v||(v=new TextDecoder),
r=t.encode(i)):r=o(i),y=0,S=r.length;y<S;){if(g=Math.min(y+8134,S),p=void 0,b=0,f){for(;g<S&&128==(192&r[g]);g--);
p=v.decode(r.subarray(y,g))}else p=r.slice(y,g);if(i=p.slice(-6),(b=g<S?i.lastIndexOf("\\"):-1)>0&&b>i.length-2)p+="b",
b=1;else if(b>0&&"u"===i[b+1])for(m=b=i.length-b;m++<6;p+="b");else b=0;if(p=JSON.parse('"'.concat(p,'"')),
b&&((O=p.endsWith("b"))||(g-=b),p=p.slice(0,b>1&&O?b-6:-1)),d[n+":"+s++]=a+p,y=g,s>=13)break}return d[n]={
$_serialize:"split",k:a,s:s},d}},x=function(){var n,e,o,f,l,s,d,y,S=a,g=[],b=[],m=[],N=i.bn(),J={};if(a=null,
S&&t.b===j){for(e in n=new TextEncoder,S)for(s="string"==typeof(l=u.ao[o=e])||"object"==typeof l&&"vimSync"!==o?0:13,
null!=(f=S[o])?(d=k(o,f,n))&&"object"==typeof d?(N[o]=d,s=d[o].s):(J[o]=d?{$_serialize:"single",d:JSON.parse(d)}:f,
b.push(o)):(m.push(o),g.push(o));s<13;s++)m.push(o+":"+s);for(o in v=n=null,g.length>0&&O(c,"reset",g.join(", ")),
m.length>0&&p().remove(m),b.length>0&&(O(c,"update",b.join(", ")),p().set(J)),y=function(n){p().set(N[n],function(){
var e=r.On();return e?O("Failed to update",n,":",e.message||e):O(c,"update (serialized) "+n),e})},N)y(o)}},
D=function(n){return!(n in f)},q=function(n){t.r=null,S&&clearTimeout(S),S=setTimeout(function(){S=0,
u.ho.get(function(n){var e,r,o,f,l,c,s,a,d=u.mo;if(d.length){for(O("storage.local: update settings from localStorage"),
i.dn(n),e=i.bn(),r=0,o=d.length;r<o;r++)l=n[f=d.key(r)],f in u.ao?(s=c=t.me[f],a=l,
"object"==typeof u.ao[f]&&(a=JSON.stringify(l),s=JSON.stringify(c)),s!==a&&u.ro(f,c)):n[f]!==l&&"i18n_f"!==f&&(e[f]=l)
;Object.keys(e).length>0&&u.ho.set(e),d.clear()}})},n)},M=function(n,e){var r,o,f,l;if(i.dn(n),
r=n.vimSync||null==t.me.vimSync&&t.pe,t.F.vimSync(false,"vimSync"),r){for(l in n.vimSync||(O(c,"enable vimSync"),
n.vimSync=true,p().set({vimSync:true})),o=[],f=u.mo,t.me)t.me[l]!==u.ao[l]&&(!(l in n)&&D(l)&&o.push(l),
f&&f.removeItem(l));for(l of o)N(l,null);for(l in n)l.includes(":")||N(l,n[l],n);q(60),u.io("vimSync"),
setTimeout(function(){e()},4),O(c,"download settings")}else e()},t.F.vimSync=function(n){var e,i,r;if(p()){
if(i=(e=p().onChanged)||l.onChanged,r=e?b:m,!n)return i.removeListener(r),void(t.b=t.j);t.b!==j?(i.addListener(r),t.b=j,
q(60)):a&&(O(c,"save immediately"),x())}},u.lo.then(function(){var n,e=t.me.vimSync
;false===e||!e&&!t.pe?(t.r=(n=true===t.r)?null:q,n&&q(6e3),t.fe=null):t.fe?(g=t.fe.then(function(n){return t.fe=null,
!!n&&"install"===n.reason}).then(function(n){return n?new Promise(function(n){p()?p().get(function(e){
var i=r.On(),o=0===t.he&&t.pe&&(i||0===Object.keys(e).length)?function(){u.ro("ignoreKeyboardLayout",1),n()}:n
;return i?(t.F.vimSync=t.j,o(),O("Error: failed to get storage:",i,"\n\tSo disable syncing temporarily.")):M(e,o),i
}):n()}):void 0}).then(function(){t.w=null,g=null}),t.w=Promise.race([g,new Promise(function(n){setTimeout(n,800)
})]).then(function(){t.w=null,t.me.vimSync&&t.b!==j&&u.io("vimSync")})):u.io("vimSync")})});