"use strict"
;__filename="background/others.js",define(["require","exports","./store","./browser","./utils","./settings","./i18n","./normalize_urls","./normalize_urls","./open_urls"],function(e,n,t,o,i,r,u,l,a,c){
Object.defineProperty(n,"__esModule",{value:true});var s,f,m,d,g,p,v,b=t.F.showActionIcon=function(e){
var n=o.Cn.browserAction;n?(t.ne=e,o.import2("/background/action_icon.js").then(function(e){e.ei()}),
Promise.resolve(u._r("name")).then(function(t){e||(t+="\n\n"+u._r("noActiveState")),n.setTitle({title:t})
})):t.F.showActionIcon=void 0};r.lo.then(function(){t.me.showActionIcon?b(true):t.M=t.j}),setTimeout(function(){
new Promise(function(n,t){e(["/background/sync.js"],n,t)}).then(e=>e)},100),(function(){function e(){_&&(_.To=null),
y=D=_=h=null,M&&clearTimeout(M),w&&clearTimeout(w),j=C=F=M=w=0,T="",i.hn()}function n(){var t=Date.now()-j
;if(t>5e3||t<-5e3)return e();M=setTimeout(n,3e4)}function r(){var e,n;if(w=0,(e=_)&&!e.yo)return _=null,
e.To?((n=Date.now())<j&&(j=n-1e3),f(e.Po,e.To)):void 0}function s(e,n,r,u,l){var c,s,f,m,g,v,w,P,M,j,S,O,U,V,q,x,z
;if(e.To){for(_=null,c=n.length>0?n[0]:null,C=u,F=l,D=[],f=new Set,m=" ".concat(t.se.t," ").includes(" type-letter "),
g=0,
v=r?0:1,w=n.length;g<w;g++)M=(P=n[g]).title,S=P.e,U="",V=null!=P.s,q=b&&!(r&&0===g)&&("tab"===S?P.s!==t.L:"history"===S&&!V),
(O=i.an(O=j=P.u,1)).startsWith("file")&&(O=a.Ye(O)),
O=O.replace(/%20/g," "),f.has(O)?O=":".concat(g+v," ").concat(O):f.add(O),q&&(U=" ~".concat(g+v,"~")),x={content:O,
description:U=(M||m?(M?M+" <dim>":"<dim>")+(m?"[".concat(P.e[0].toUpperCase(),"] "):"")+(M?"-</dim> <url>":"</dim><url>"):"<url>")+P.textSplit+"</url>"+(U&&"<dim>".concat(U,"</dim>"))
},q&&(x.deletable=true),(q||V)&&(y||(y=new Map),y.has(O)||y.set(O,{Do:S,zi:V?P.s:null,dr:j})),D.push(x);h=e.Po,
r?"search"===c.e?(s=((z=c.p)&&"<dim>".concat(i.gn(z)+d,"</dim>"))+"<url>".concat(c.textSplit,"</url>"),k=2,
(c=n[1])&&"math"===c.e&&(D[1].description="".concat(c.textSplit," = <url><match>").concat(c.t,"</match></url>"))):(k=3,
s=D[0].description):1!==k&&(s="<dim>".concat(p,"</dim><url>%s</url>"),k=1),r&&(T=n[0].u,
y&&D.length>0&&T!==D[0].content&&y.set(T,y.get(D[0].content)),D.shift()),s&&o.Cn.omnibox.setDefaultSuggestion({
description:s}),e.To(D),i.hn()}else _===e&&(_=null)}function f(e,o){var i,u,l,a;e=O(e),_&&(_.To=(i=e===_.Po)?o:null,
i)||(e!==h?1===C&&e.startsWith(h)?o([]):(_={To:o,Po:e,yo:false},w||(u=Date.now(),
(l=t.se.i+j-u)>30&&l<3e3?w=setTimeout(r,l):(_.yo=true,M||(M=setTimeout(n,3e4)),j=u,y=D=null,T="",
a=C<2||!e.startsWith(h)?0:3===C?e.includes(" ")?0:8:F,t.C.yu(e,{o:"omni",t:a,r:S,c:P,f:1},s.bind(null,_))))):D&&o(D))}
function m(e,n,o){return e?":"===e[0]&&/^:([1-9]|1[0-2]) /.test(e)&&(e=e.slice(" "===e[2]?3:4)):e=l.ir(""),
"file://"===e.slice(0,7).toLowerCase()&&(e=/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)$/i.test(e)?l.rr("show image "+e,false,0):e),
null!=o?t.K[6]({s:o}):c.openUrlReq({u:e,r:"currentTab"===n?0:"newForegroundTab"===n?-1:-2})}
var d,g,p,v,b,h,T,_,w,y,P,D,M,j,k,C,F,S,O,U=o.Cn.omnibox;U&&(d=": ",g=false,p="Open: ",
b=!!(v=U.onDeleteSuggestion)&&"function"==typeof v.addListener,h=null,T="",_=null,w=0,y=null,P=128,D=null,M=0,k=0,C=0,
F=0,S=t.we<60?6:12,O=function(e){if(e=e.trim().replace(i.xn," "),t.ae.actions.includes("icase")){
var n=/^:[WBH] /.test(e)?3:0;e=n?e.slice(0,n)+e.slice(n).toLowerCase():e.toLowerCase()}return e},
U.onInputStarted.addListener(function(){if(o.getCurWnd(false,function(e){var n=e&&e.width
;P=n?Math.floor((n-160/devicePixelRatio)/7.72):128}),g||(g=true,Promise.resolve(u._r("i18n")).then(function(){
"en"!==u.br()&&Promise.resolve(u.$r("colon")).then(function(e){d=e+u.$r("NS")||d,p=u.$r("OpenC")||p})})),M)return e()}),
U.onInputChanged.addListener(f),U.onInputEntered.addListener(function n(o,i){var u,l,a=_;if(a&&a.To){
if(a.To=n.bind(null,o,i),a.yo)return;return w&&clearTimeout(w),r()}return o=O(o),null===h&&o?t.C.yu(o,{o:"omni",t:0,r:3,
c:P,f:1},function(e,n){return n?m(e[0].u,i,e[0].s):m(o,i)
}):(T&&o===h&&(o=T),l=null==(u=null==y?void 0:y.get(o))?void 0:u.zi,e(),m(u?u.dr:o,i,l))}),b&&v.addListener(function(e){
var n=parseInt(e.slice(e.lastIndexOf("~",e.length-2)+1))-1,o=D&&D[n].content,i=o&&y?y.get(o):null,r=i&&i.Do;r?t.K[23]({
t:r,s:i.zi,u:i.dr
},null):console.log("Error: want to delete a suggestion but no related info found (may spend too long before deleting).")
}))})(),s=0,f=false,m=0,d=t.ge?"edge:":"chrome:",g=t.ge?"":d+"//newtab/",p=t.ge?"":d+"//new-tab-page/",v=function(e){
0===e.frameId&&e.url.startsWith(d)&&s&(e.url.startsWith(g)||e.url.startsWith(p)?2:1)&&!m&&o.n(e.tabId)},o.s([{
origins:["chrome://*/*"]},t.we>79&&!t.ge?{origins:["chrome://new-tab-page/*"]}:null],function e(n){
if(1&(s=(n[0]?1:0)+(n[1]?2:0))&&!t.me.allBrowserUrls&&(s^=1),f!==!!s){var i=o.Tn();if(!i)return false
;i.onCommitted[(f=!f)?"addListener":"removeListener"](v)}m=m||s&&setTimeout(function(){s?o.Bn.query({url:d+"//*/*"
},function(e){for(var n of(m=0,e||[]))!t.z.has(n.id)&&s&(n.url.startsWith(g)||n.url.startsWith(p)?2:1)&&o.n(n.id)
;return o.On()}):m=0},120),s&&!t.F.allBrowserUrls&&(t.F.allBrowserUrls=e.bind(null,n,false))}),
t.fe&&Promise.all([t.fe,r.lo]).then(function(e){
var n=e[0],i=n&&n.reason,a="install"===i?"":"update"===i&&n.previousVersion||"none";"none"!==a&&setTimeout(function(){
var e,i,c;if(o.Bn.query({status:"complete"},function(e){var n,i=/^(file|ftps?|https?):/
;for(n of e)i.test(n.url)&&!t.z.has(n.id)&&o.n(n.id)
}),console.log("%cVimium_ C%c has been %cinstalled%c with %o at %c%s%c.","color:red","color:auto","color:#0c85e9","color:auto",n,"color:#0c85e9",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," "),"color:auto"),
t.e.He&&console.log("Sorry, but some commands of Vimium C require the permission to run in incognito mode."),
!a)return e=function(){t.Q||t.w?++i<25&&setTimeout(e,200):t.K[21]({u:t.e.Je+"#commands"})},i=0,void e()
;r.io("vomnibarPage"),parseFloat(t.e.qe)<=parseFloat(a)||(t.r?t.r(6e3):t.r=true,r.io("newTabUrl"),
t.me.notifyUpdate&&(c="vimium_c-upgrade-notification",
Promise.all([u.$r("Upgrade"),u.$r("upgradeMsg",[t.e.Ae]),u.$r("upgradeMsg2"),u.$r("clickForMore")]).then(function(e){
var n,i={type:"basic",iconUrl:location.origin+"/icons/icon128.png",title:"Vimium C "+e[0],message:e[1]+e[2]+"\n\n"+e[3]}
;t.we<67&&(i.isClickable=true),t.we>=70&&(i.silent=true),(n=o.Cn.notifications)&&n.create(c,i,function(e){var i
;if(i=o.On())return i;c=e||c,n.onClicked.addListener(function e(o){o==o&&(n.clear(o),t.K[21]({u:l.ir("vimium://release")
}),n.onClicked.removeListener(e))})})})))},500)}),setTimeout(function(){globalThis.document.body.innerHTML="",i.hn()
},1e3)});