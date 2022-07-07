"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./completion_utils","./browsing_data_manager"],function(n,r,e,t,u,f,i,o,l){
var a,s,c,_,m,v,d,h,p,w,b,g,y,S,x,k,M,T,R,$,j,z,A,F,B,D,E,I;Object.defineProperty(r,"__esModule",{value:true}),a=0,
s=false,c=false,_=0,m=0,v=0,d=0,h=0,p=[""],w="",b="",g="",y="",S=0,x=false,k=false,M="",T="",R=0,$=true,
j=function(n,r,e,t,u,f){this.e=n,this.u=r,this.t=e,this.title=t,this.r=u(this,f),this.visit=0},z={yu:function(n,r){
if(0!==p.length&&1&R)2===e.H.Ce?z.Su():l.oi._i=function(){n.o||z.Su()};else if(E.Mu([],1),r)return;0===e.H.Ce&&l.oi.pi()
},Su:function(){var n,r,t,u,f,i,a,s,c,v,w=p.some(function(n){return 47===n.charCodeAt(0)
}),b=null===(n=o.hi.Tu)||void 0===n?void 0:n.Me,g=o.hi.Ru?[]:null,y=b&&b[0]===w?b[1]:e.H.Me,S=y.length,x=[]
;for(t=0;t<S;t++)if(o.ju((u=y[t]).t,w?u.xi:u.ki)&&($||u.wi)){if(null!==g&&g.push(u),
T&&u.u.length<T.length+2&&T===(u.u.endsWith("/")?u.u.slice(0,-1):u.u))continue;x.push([-o.zu(u.t,u.ki),t])}
for(a of(g&&(o.hi.Ru.Me=[w,g]),d+=r=x.length,r?(x.sort(o.sortBy0),h>0&&!(6&R)?(x=x.slice(h,h+m),
h=0):r>h+m&&(x.length=h+m)):R^=1,f=[],i=64&_?-.666446:0,x))s=a[0],i&&(s=s<i?s:(s+i)/2),
c=new j("bookm",(u=y[t=a[1]]).u,u.t,w?u.xi:u.ki,o.get2ndArg,-s),v=32&_&&l.Yr.Li?l.Yr.Ri(u.u):-1,
c.visit=v<0?0:e.G.Pe[v].Ai,f.push(c),null!==u.do&&(c.u=u.do,c.title=o.cutTitle(w?u.xi:u.ki),
c.textSplit="javascript: \u2026",c.t=u.yi);E.Mu(f,1)}},A={yu:function(n,r){var t,u,f,i,a
;if(!p.length&&1024&_||!(2&R))return E.Mu([],2);if(t=p.length>0,e.G.Pe){if(t)return void E.Mu(A.Su(),2)
;(e.G.Ne>10||e.G.Be>0)&&l.Yr.Wi()}else if(u=t?function(){n.o||E.Mu(A.Su(),2)}:null,
t&&(c||l.Yr.Mi)?(l.Yr.Mi>0&&clearTimeout(l.Yr.Mi),l.Yr.Mi=0,l.Yr.Ui(u)):(l.Yr.Mi||(l.Yr.Mi=setTimeout(function(){
l.Yr.Mi=0,l.Yr.Ui(u)},t?200:150)),t&&E.Au((a=(i=(f=E.Fu).length)>0)&&"search"===f[0].t?[f[0]]:[],s&&a,0,0,i,b,S)),
t)return;0===r?o.Bu(k,_,A.Du,n):l.Xr(h+m,$,A.Eu.bind(null,n))},Su:function(){
var n,r,t,u,i,a,s=1===p.length?p[0]:"",c=!!s&&("."===s[0]?/^\.[\da-zA-Z]+$/.test(s):(f.ir(s,null,-2),
f.sr<=2)),_=c?"."===s[0]||f.sr>0?o.Ou.Iu[0]:(o.Ou.Qu||o.Ou.Uu(),
o.Ou.Qu[0]):null,v=o.hi.Ru?[]:null,w=[-1.1,-1.1],b=[],g=o.ju,y=c&&s.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(s),S=m+h,x=-1.1,k=0,T=0,z=0
;for(M&&S++,T=S;--T;)w.push(-1.1,-1.1)
;for(S=2*S-2,t=(r=(null===(n=o.hi.Tu)||void 0===n?void 0:n.Pe)||e.G.Pe).length;k<t;k++)if(u=r[k],
(c?_.test(y?u.u:u.t):g(u.t,u.ki))&&($||u.wi)&&(null!==v&&v.push(u),
z++,(i=c?o.ComputeRecency(u.Ai)||1e-16*Math.max(0,u.Ai):o.ComputeRelevancy(u.t,u.ki,u.Ai))>x)){
for(T=S-2;0<=T&&w[T]<i;T-=2)w[T+2]=w[T],w[T+3]=w[T+1];w[T+2]=i,w[T+3]=k,x=w[S]}for(v&&(o.hi.Ru.Pe=v),d+=z,z||(R^=2),
5&R?k=0:(k=2*h,
h=0);k<=S&&!((i=w[k])<=0);k+=2)(u=r[w[k+1]]).u!==M&&((a=new j("history",u.u,y?u.u:u.t,u.ki,o.get2ndArg,i)).visit=u.Ai,
b.push(a));return l.Pr.Ii(),b},Du:function(n,r){var e,u,f,i;if(o.hi.Ji(r),!n.o){for(f of(e=new Set,u=0,
r))f.incognito&&o.tabsInNormal||(i=t.getTabUrl(f),e.has(i)||(e.add(i),u++));return A.Zu([],n,e,h,u)}},Eu:function(n,r){
var e,t,u;if(!n.o)return e=[],t=new Set,u=-h,r.some(function(n){var r,f=n.u;return!t.has(r=f+"\n"+n.ki)&&(t.add(r),
t.add(f),++u>0&&e.push(n),e.length>=m)})?A.qu(e):A.Zu(e,n,t,-u,0)},Zu:function(n,r,e,u,f){(0,t.Cn.history.search)({
text:"",maxResults:h+m*($?1:2)+f},function(t){if(!r.o){t=t.filter(function(n){var r=n.url
;return r.length>2e3&&(n.url=r=l.Yr.Oi(r,n)),!e.has(r)&&($||0!==l.Qr(n.url,n.title||""))}),
u<0?t.length=Math.min(t.length,m-n.length):u>0&&(t=t.slice(u,u+m));var f=t.map(function(n){return{u:n.url,
ki:n.title||"",Hi:n.lastVisitTime,zi:null}});u<0&&(f=n.concat(f)),A.qu(f)}})},qu:function(n){n.forEach(A.Cu),h=0,
l.Pr.Ii(),E.Mu(n,2)},Cu:function(n,r,e){
var t=n.u,u=new j("history",t,l.Pr.ji(t,t),n.ki||"",o.get2ndArg,(99-r)/100),f=n.zi;u.visit=n.Hi,f&&(u.s=f,
u.label='<span class="undo">&#8630;</span>'),e[r]=u}},F={yu:function(n,r){
if(1!==p.length||!(16&R)||p[0].lastIndexOf("/",p[0].length-2)>=0)return E.Mu([],16);if(l.Yr.Si){
if(!e.G.Pe)return r>0?E.Mu([],16):l.Yr.Ui(function(){n.o||F.yu(n,0)});l.Yr.Si(e.G.Pe)}return F.Su()},Su:function(){
var n,r,t,f,i,l,a,c,_,v,w,b=e.G.Ve,g=o.Gu,y=16===R&&s?[]:null,S=p[0].replace("/","").toLowerCase(),x=S===p[0],k=[],M="",T=-1.1
;for(r of(o.Hu(3),b.keys()))r.includes(S)&&(n=b.get(r),($||n.qi>0)&&(t=o.ComputeRelevancy(r,"",n.Ai),y?y.push({r:t,d:r,
m:n}):t>T&&(T=t,M=r)))
;if(f=M.length===S.length,M&&!f&&(M.startsWith("www.")||M.startsWith(S)||(i=M.slice(M.indexOf(".")+1)).includes(S)&&(l=void 0,
(l=b.get(i="www."+i))?($||l.qi>0)&&(M=i,n=l):(l=b.get(i="m."+i))&&($||l.qi>0)&&($||l.qi>0)&&(M=i,n=l)),
(a=M.startsWith(S)?0:M.startsWith("www."+S)?4:-1)>=0&&(w=(_=(c=u.ln(M))[0]).length-1,
(v=c[1])>1&&(!(a=M.length-a-S.length-_[w].length-1)||3===v&&a===_[w-1].length+1)&&(f=true))),M)d++,s=!h&&f||s,
k=F.Nu(M,n,0,x);else if(y)for(w of(y.sort(F.Pu),(d=y.length)>h+m&&(y.length=h+m),y))k.push(F.Nu(w.d,w.m,w.r,x)[0])
;o.Hu(g),E.Mu(k,16)},Nu:function(n,r,t,f){var i,a,s,c,_,v,d,p,w=r.mr>0,b=""
;return 2===e.H.Ce&&(i=new RegExp("^https?://".concat(u.i(n),"/?$")),a=e.H.Me.filter(function(n){
return i.test(n.u)&&($||n.wi)}),a.length>0&&(s=a.filter(function(n){return"s"===n.u[4]}),
T=(c=(a=(w=s.length>0)?s:a)[0].u).endsWith("/")?c.slice(0,-1):c,b=a[0].ki)),_=(w?"https://":"http://")+n+"/",!t&&(M=_,
h>0)?(h--,[]):(v=new j("domain",_,f?n:n+"/","",o.get2ndArg,t||2),p=(d=l.Yr.Li?l.Yr.Ri(_):-1)>0?e.G.Pe[d]:null,o.Wu(v),
p&&($||p.wi)&&(v.visit=p.Ai,b=b||p.ki),v.title=o.cutTitle(b,[]),--m,[v])},Pu:function(n,r){return r.r-n.r}},B={
yu:function(n,r){!(4&R)||r&&(!p.length||256&_)?E.Mu([],4):o.Bu(k,_,B.Su,n)},Su:function(n,r){
var f,i,a,s,c,w,b,g,y,S,x,M,T,$,z,A,F,D,I,O,Q,U,Z,q,C,G,H,N,P,W,J,K,L,V,X,Y,nn;if(o.hi.Ji(r),!n.o){if(f=e.L,
i=p.length<=0,a=3&R,c=[],(s=!!(8&_)&&k&&i)&&!(128&_)&&r.length>h&&r.length>v){for(b of(w=new Map,r))w.set(b.id,b)
;for(x=(S=(y=(g=w.get(f))?g.openerTabId:0)?w.get(y):null)?r.indexOf(S):g?r.indexOf(g)-1:0,
M=S?0:v/2|0;1<--M&&x>0&&r[x-1].openerTabId===y;x--);r=x>0?r.slice(x).concat(r.slice(0,x)):r}for(b of(T=[],$=[],
z=!i&&/^:[a-z]+/gm.test(p.join("\n")),r))!k&&o.tabsInNormal&&b.incognito||(A=t.getTabUrl(b),
F=b.text||(b.text=l.Pr.ji(A,b.incognito?"":A)),D=b.title,z&&(1===p.length&&(F=D=""),b.audible&&(D+=" :audible :audio",
D+=t.isTabMuted(b)?" :muted":" :unmuted"),b.discarded&&(D+=" :discarded"),b.incognito&&(D+=" :incognito"),
b.pinned&&(D+=" :pinned")),(i||o.ju(F,D))&&(I=b.windowId,!k&&$.lastIndexOf(I)<0&&$.push(I),T.push(b)))
;if(a&&1===T.length&&T[0].id===f&&(T.length=0),d+=O=T.length,O||(R^=4),h>=O&&!a)return h=0,E.Mu(c,4);if($.sort(B.Ju),
Q=i?s?B.Ku:B.Lu:o.ComputeWordRelevancy,
U=s?u.bn():null,Z=$.length>1?e.J:0,s)for(b of T)U[b.id]=(C=(q=b.openerTabId)&&U[q])?C<5?C+1:5:1
;for(G=32&_?1===e.he?0:e.we<62?Date.now()-performance.now():performance.timeOrigin:0,H=0;H<T.length;)N=(b=T[H++]).id,
P=s?U[N]:1,A=t.getTabUrl(b),W=e.T.get(N),J=new j("tab",A,b.text,b.title,Q,s?H:N),
K=Z&&b.windowId!==Z?"".concat($.indexOf(b.windowId)+1,":"):"",L="",K+=k?b.index+1:H,f===N?(s||(J.r=i?1<<31:0),
K="(".concat(K,")")):W||(K="**".concat(K,"**")),!o.tabsInNormal&&b.incognito&&(L+="*"),!!b.discarded&&(L+="~"),
b.audible&&(L+=t.isTabMuted(b)?"\u266a":"\u266c"),J.visit=W?W.t+G:0,J.s=N,J.label="#".concat(K).concat(L&&" "+L),
P>1&&(J.level=" level-"+P),c.push(J);if(c.sort(E.Vu),X=h+m-(V=c.length),a||X<0||!i)for(h>0&&!a?(c=c.slice(h,h+m),V=m,
h=0):V>h+m&&(c.length=V=h+m),M=a?0:V;M<V;M++)c[M].r*=8/(M/4+1);else if(h>0){for(nn of(Y=c.slice(0,X).map(function(n){
return Object.assign({},n)}),Y))nn.label+="[r]";for(V=(c=c.slice(h).concat(Y)).length,M=0;M<V;M++)c[M].r=V-M;h=0}
l.Pr.Ii(),E.Mu(c,4)}},Ju:function(n,r){return n-r},Lu:function(n,r){var t=e.T.get(r);return t?t.i:4&_?2047+r:-r},
Ku:function(n,r){return 1/r}},D={Xu:0,yu:e.j,Yu:function(n,r,t){var u,i,s,c,_,m,v,d,w,b;if(!(8&R))return E.Mu([],8)
;if(s=(i=p).length>0?i[0]:"",0===i.length);else{
if(!r&&"\\"===s[0]&&"\\"!==s[1])return s.length>1?i[0]=s.slice(1):i.shift(),s=g.slice(1).trimLeft(),
$=!l.omniBlockList||$||l.Vr.Fi([s]),h?(h--,E.Mu([],8)):(u=D.nf(s,t),E.Mu([u],8));c=e.ue.map.get(s)}if(r){
if(!c)return true}else{if(!c&&!s.startsWith("vimium://"))return 0===a&&i.length<=1&&(a=i.length?o.ef.rf()?-2:0:-1),
E.Mu([],8);c&&y&&(i.push(y),h=0,g+=" "+y,y="",S&=-5),i.length>1||(a=-1)}if(i.length>1&&c?(i.shift(),
g.length>200&&(i=g.split(" ")).shift()):c&&(i=[]),$=!l.omniBlockList||$&&l.Vr.Fi([s]),c?(v=_=(d=f.Xe(i,c.dr,c.j,[])).dr,
m=d.pr):(v=_=i.join(" "),m=[]),"~"===s);else if(_.startsWith("vimium://")){if(w=e.u(_.slice(9),1,true),
b=D.tf.bind(D,i,_,v,t||c,m),w instanceof Promise)return w.then(D.uf.bind(D,n,t||c,b))
;if(w instanceof Array)return D.uf(n,t||c,b,w);w&&(_=v=w,m=[])}else _=f.ir(_,null,-2);return u=D.tf(i,_,v,t||c,m),
E.Mu([u],8)},uf:function(n,r,e,t){var f,l,s,c,_;if(!n.o){switch(t[1]){case 5:case 7:if(a=7===t[1]&&p.length>1?a:-1,
!(l=t[0]))break
;return y="",(p=((g="\\ "+l).length<201?g:u.wn(g,0,200).trim()).split(" ")).length>1&&(p[1]=i.nu(p[1],p.length>2)),
o.ff(p),D.Yu(n,null,r);case 2:if(o.ff(p=(s=t[0]).length>1||1===s.length&&s[0]?s:p),(c=D.Xu++)>12)break
;if(_=D.Yu(n,true,r),c<=0&&(D.Xu=0),true!==_)return _;break;case 0:t[0]&&(f=D.if(e(),t))}E.Mu(f||[e()],8)}},
tf:function(n,r,e,t,f){var i=new j("search",r,e,(t?t.ou+": ":"")+n.join(" "),o.get2ndArg,9)
;return n.length>0&&t?(i.t=D.of(e,f),i.title=o.cutTitle(i.title,[t.ou.length+2,i.title.length]),
i.textSplit=o.highlight(i.t,f)):(i.t=u.in(o.shortenUrl(e)),i.title=o.cutTitle(i.title,[]),i.textSplit=u.gn(i.t)),
i.v=c?"":t&&t.j||o.lf(r),i.p=c&&t?t.ou:"",i},if:function(n,r){
var e=r[0],t=new j("math","vimium://copy "+e,e,e,o.get2ndArg,9)
;return--t.r,t.title='<match style="text-decoration: none;">'.concat(o.cutTitle(t.title,[]),"<match>"),
t.textSplit=u.gn(r[2]),[n,t]},of:function(n,r){var e,t,f,i=r.length;if(t=u.in(r.length>0?n.slice(0,r[0]):n),
(e=u.rn(t))&&(t=t.slice(e),e=0),r.length<=0)return t;for(f=r[0];r[e]=t.length,i>++e;)t+=u.in(n.slice(f,r[e])),f=r[e]
;return f<n.length&&(t+=u.in(n.slice(f))),t},nf:function(n,r){
var t=f.ir(n,null,-2),i=4===f.sr,l=new j("search",t,u.in(o.shortenUrl(t)),"",o.get2ndArg,9)
;return l.title=i?(r&&r.ou||"~")+": "+o.cutTitle(n,[0,n.length]):o.cutTitle(n,[]),l.textSplit=u.gn(l.t),
l.v=c?"":i&&r&&((r.j||r.dr).startsWith("vimium:")?e.e.Je:r.j)||o.lf(t),l.p=c&&i?"~":"",l.n=1,l}},E={af:0,sf:0,Fu:null,
cf:null,Au:null,yu:function(n){var r,e,t,u;if(E.cf&&(E.cf.o=true),r=E.cf={o:false},E.sf=0,e=1,t=-9&(R&=n[0])?n.length:2,
E.Fu=[],E.af=t-1,a=h&&-1,n[1]===D){if(u=D.Yu(r),t<3)return;if(u)return void u.then(E._f.bind(null,n,r,e));e=2}
E._f(n,r,e)},_f:function(n,r,e){for(o.mf(Date.now()-18144e5),o.Hu(3*p.length||.01),
p.indexOf("__proto__")>=0&&(p=p.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),o.ff(p)),
o.hi.Jr($),p.sort(E.vf),o.Ou.df();e<n.length;e++)n[e].yu(r,e-1)},vf:function(n,r){
return r.length-n.length||(n<r?-1:n===r?0:1)},Mu:function(n,r){var e=E.Fu,t=n.length;if(t>0&&(E.sf|=r,
E.Fu=0===e.length?n:e.concat(n),8===r&&(s=!0,m-=t,d+=t)),0==--E.af)return e=null,E.hf()},hf:function(){
var n,r,e,t,u,f,i,l,c,_,m,g,y=E.Fu;return E.Fu=null,y.sort(E.Vu),h>0?(y=y.slice(h,h+v),h=0):y.length>v&&(y.length=v),
o.Ou.pf=o.Ou.Qu=null,
p.length>0&&(r=o.shortenUrl(n=p[0]),((e=n.length!==r.length)||n.endsWith("/")&&n.length>1&&!n.endsWith("//"))&&(p[0]=e?r:n.slice(0,-1),
o.Ou.wf(p[0]))),
y.forEach(o.Wu),t=y.length>0,u=s&&t,f=d,i=":"===w,c=b,_=S,m=2!=(l=a<0?-2!==a||t||i?0:3:$?p.length<=0||x?0:t?2:i?0:1:0)||i?0:E.sf,
g=E.Au,E.bf(),g(y,u,l,m,f,c,_)},bf:function(){E.cf=E.Au=null,o.gf(),o.setupQueryTerms(p=[],c=false,0),w=b=g=y=M=T="",
o.Ou.Iu=null,o.Hu(3),o.mf(0),a=E.sf=_=m=v=d=0,R=0,S=0,s=false,x=k=false,$=true},yf:function(){var n,r,e=g;if(h=0,y="",
!(0===e.length||(n=(e=e.slice(-5)).lastIndexOf("+"))<0||0!==n&&32!==e.charCodeAt(n-1))){if(e=e.slice(n),
n=g.length-e.length,(r=parseInt(e,10))>=0&&"+"+r===e&&r<=(n>0?100:200))h=r;else if("+"!==e)return;g=g.slice(0,n&&n-1),
y=e,S|=4}},Vu:function(n,r){return r.r-n.r}},I={__proto__:null,bookm:[1,z],domain:[16,F],history:[2,A],
omni:[63,D,F,A,z,B],search:[8,D],tab:[4,B]},e.C.yu=function(n,r,t){var f,a,h,y,M,T,j,z,A,F;n=n.trim(),x=false,
n&&2===e.he&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(n)||"file:"===n.slice(0,5).toLowerCase())&&(":/\\".includes(n[1])&&(n=(":"===n[1]?"":"//")+n.slice(":"===n[1]?0:2).replace(/\\+/g,"/")),
(f=(n=n.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2)>=2&&f<n.length&&"/"!==n[f]&&(a=n.slice(f).split("/",1)[0]).includes("%")&&(h=u.in(a),
x=h===a,n=n.slice(0,f)+h+n.slice(f+a.length))),w=g=n&&n.replace(u.xn," "),b="",S=0,E.yf(),
p=(n=g)?(n=n.length<201?n:u.wn(n,0,200).trimRight()).split(" "):[],
(y=0|r.c||128)&&(y-=n.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-n.length),
y=Math.max(50,Math.min(y,320)),c=!!(1&(_=r.f)),v=m=Math.min(Math.max(3,0|r.r||10),25),d=0,E.Au=t,M="bomni"===r.o?(_|=64,
I.omni):I[r.o],
j=r.t||63,z=r.e||63,M===I.tab&&(k=!!(2&_)),2===(T=p.length>=1?p[0]:"").length&&":"===T[0]&&(A="b"===(T=T[1])?I.bookm:"h"===T?I.history:"t"===T||"T"===T||"w"===T||"W"===T?(k="t"!==T&&"T"!==T,
_|=0,
_|="T"===T?2048:0,I.tab):"B"===T?(_|=64,I.omni):"H"===T?(_|=256,I.omni):"d"===T?I.domain:"s"===T?I.search:"o"===T?I.omni:null)&&(M=A,
b=p.shift(),
S|=1,g=g.slice(3),z=M[0]),p.length>0&&((T=p[0]).includes("\u3002")||T.includes("\uff1a"))&&!x&&((F=i.nu(T,x=p.length<2))!==T?(p[0]=F,
g=F+g.slice(T.length),
x=x&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(T)):x=x&&T.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(T)),
$=!l.omniBlockList||l.Vr.Fi(p),R=j&z,s=2===M.length,g&&(S|=2),o.setupQueryTerms(p,c,y),E.yu(M)}});