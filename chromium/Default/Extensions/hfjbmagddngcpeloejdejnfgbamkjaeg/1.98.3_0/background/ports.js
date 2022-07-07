"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],function(n,r,u,t,o,e,l){
var f,i,c,a,s,v,d,_,b,m,g,p,N,k;Object.defineProperty(r,"__esModule",{value:true}),
r.getParentFrame=r.complainNoSession=r.complainLimits=r.uo=r.ensuredExitAllGrab=r.showHUDEx=r.showHUD=r.safePost=r.isNotVomnibarPage=r.ensureInnerCSS=r.indexFrame=r.isExtIdAllowed=r.findCPort=r.Nn=r.Hn=r.OnConnect=r.sendResponse=void 0,
f=function(n,r){if(90!==n.H)u.K[n.H](n,r);else{var t=u.K[n.c](n.a,r,n.i);t!==r&&r.postMessage({N:4,m:n.i,r:t})}},
r.sendResponse=function(n,r,t){var o=u.z.get(n.s.Sn);if(o&&o.po.includes(n))try{n.postMessage({N:4,m:r,r:t})}catch(n){}
},r.OnConnect=function(n,r){var t,l,a,d,_,b,m,g,p;if(64&r)s(n,r);else{if(a=(l=(t=v(n)).dr)===u.vomnibarPage_f,r>3||a){
if(999===r)return void(t.Sn>=0&&!t.Dn&&o.removeTempTab(t.Sn,n.sender.tab.windowId,t.dr))
;if(16&r||a)return void c(n,r,a||l===u.e.Ke)}
null!==(b=void 0!==(_=(d=t.Sn)>=0?u.z.get(d):void(d=t.Sn=u.getNextFakeTabId()))?_.En:null)?(g=b.Gn,
p=2===(m=b.Ce)?3:1):(m=null===(g=e.Jn?e.Kn(l,t):null)?0:g?1:2,p=0),t.Ce=m,void 0!==_&&(p|=4&_.Ln,32&r&&(p|=128,
_.Ln|=128),t.Ln=p),4&r?(t.Ln|=8&r,n.postMessage({N:1,p:g,f:3&p}),n.postMessage({N:6,d:u.ie})):n.postMessage({N:0,f:p,
c:u.ie,p:g,m:u.x,t:u.I,k:u.y}),n.onDisconnect.addListener(i),n.onMessage.addListener(f),
void 0!==_?(2&r&&(u.ne&&_.Qn.s.Ce!==m&&u.M(d,m),_.Qn=n),1&r&&!_.Un&&(_.Un=n),_.po.push(n)):(u.z.set(d,{Qn:n,
Un:1&r?n:null,po:[n],En:null,Ln:0}),0!==m&&u.ne&&u.M(d,m))}},i=function(n){var r,t,o=n.s.Sn,e=u.z.get(o)
;e&&(r=(t=e.po).lastIndexOf(n),n.s.Dn?(r===t.length-1?--t.length:r>=0&&t.splice(r,1),
t.length?n===e.Qn&&(e.Qn=t[0]):u.z.delete(o)):r>=0&&u.z.delete(o))},c=function(n,r,e){if(r>15){
if(e)return n.s.Sn<0&&(n.s.Sn=4&r?u.getNextFakeTabId():u.N?u.N.s.Sn:u.L),n.s.Ln|=256,u.U.push(n),
n.onDisconnect.addListener(a),n.onMessage.addListener(f),void(4&r||n.postMessage({N:42,l:u.se,s:t.c(false)}))
}else n.s.Sn<0||u.we<50||0===n.s.Dn||o.Bn.executeScript(n.s.Sn,{file:u.e.Qe,frameId:n.s.Dn,runAt:"document_start"},o.On)
;n.disconnect()},a=function(n){var r=u.U,t=r.lastIndexOf(n);t===r.length-1?--r.length:t>=0&&r.splice(t,1)},
s=function(n,r){32&r?n.disconnect():(n.s=false,n.onMessage.addListener(f))},v=function(n){var r=n.sender,u=r.tab
;return r.tab=null,n.s={Dn:r.frameId||0,Ce:0,Ln:0,Vn:null!=u&&u.incognito,Sn:null!=u?u.id:-3,dr:r.url}},
d=function(n,t,l){var f
;return(n=n||(null===(f=u.z.get(u.L))||void 0===f?void 0:f.Un))&&e.Jn&&(t||e.Xn)?n.s.dr:new Promise(function(t){
var e=u.we>48&&n&&n.s.Dn?o.Tn():null;n?(e?e.getFrame:o.tabsGet)(e?{tabId:n.s.Sn,frameId:n.s.Dn}:n.s.Sn,function(u){
var f=u?u.url:"";return!f&&e&&(l.N=3,r.safePost(n,l)),t(f),o.On()}):o.getCurTab(function(n){
return t(n&&n.length?o.getTabUrl(n[0]):""),o.On()})})},r.Hn=d,_=function(n,t){var o,e
;if(u.N=u.N||(null===(o=u.z.get(u.L))||void 0===o?void 0:o.Un),
"string"!=typeof(e=r.Hn(u.N,t,n)))return e.then(function(r){return n.u=r,r&&u.K[n.H](n,u.N),r});n.u=e,u.K[n.H](n,u.N)},
r.Nn=_,r.findCPort=function(n){var r=u.z.get(n?n.s.Sn:u.L);return r?r.Qn:null},r.isExtIdAllowed=function(n){
var r,t,o=null!=n.id?n.id:"unknown_sender",e=n.url,l=n.tab,f=u.X,i=f.get(o)
;return true!==i&&l&&(t=(r=u.z.get(l.id))?r.Yn:null,r&&(null==t||t!==o&&"string"==typeof t)&&(r.Yn=null==t?o:2)),
null!=i?i:e===u.vomnibarPage_f||(console.log("%cReceive_ message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",o),
f.set(o,false),false)},r.indexFrame=function(n,r){var t,o=u.z.get(n);for(t of o?o.po:[])if(t.s.Dn===r)return t
;return null},r.ensureInnerCSS=function(n){if(8&n.Ln)return null;var r=u.z.get(n.Sn);return r&&(r.Ln|=4),n.Ln|=12,u.le},
r.isNotVomnibarPage=function(n,r){var u=n.s,t=u.Ln
;return!(256&t)&&(r||512&t||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",u.dr.slice(0,128),u.Sn),
u.Ln|=512),true)},r.safePost=function(n,r){try{return n.postMessage(r),1}catch(n){return 0}},b=function(n,u){
r.showHUD(u,n)},m=function(n,t){if("string"==typeof n){var o=14===t||15===t
;o&&(n.startsWith(u.e.xe+"-")&&n.includes("://")&&(n=n.slice(n.indexOf("/",n.indexOf("/")+2)+1)||n),
n=n.length>41?n.slice(0,41)+"\u2026":n&&n+"."),u.N&&!r.safePost(u.N,{N:12,H:r.ensureInnerCSS(u.N.s),k:o&&n?20:t||1,t:n
})&&(u.N=null)}else n.then(b.bind(null,t))},r.showHUD=m,g=function(n,u,t,o,e){if(n){var f=e||l.Zn(u,o)
;"string"==typeof f?r.safePost(n,{N:12,H:r.ensureInnerCSS(n.s),k:1,d:t,t:f}):f.then(r.showHUDEx.bind(null,n,"NS",t,[]))}
},r.showHUDEx=g,r.ensuredExitAllGrab=function(n){var r,u={N:8};for(r of n.po)4&r.s.Ln||(r.s.Ln|=4,r.postMessage(u))
;n.Ln|=4},r.uo=function(n,r){var o,e=t.yn(u.z),l=u.L,f=function(r){var t=u.z.get(r),o=0
;return null!=t&&(o=Math.min(t.po.length,8),n(t)),o};e.length<50?((o=e.indexOf(l))>=0&&(e.splice(o,1),n(u.z.get(l))),
t.m(e,f,r)):e.forEach(f)},p=function(n){r.showHUDEx(u.N,"notAllowA",0,[n])},r.complainLimits=p,N=function(){
r.complainLimits("control tab sessions")},r.complainNoSession=N,k=function(n,u,t){
return u&&o.Tn()?1===t&&true?o.Wn(o.Tn().getFrame,{tabId:n,frameId:u}).then(function(u){var t=u?u.parentFrameId:0
;return t>0?r.indexFrame(n,t):null}):o.Wn(o.Tn().getAllFrames,{tabId:n}).then(function(o){var e,l=false,f=u
;if(!o)return null;do{for(e of(l=false,o))if(e.frameId===f){l=(f=e.parentFrameId)>0;break}}while(l&&0<--t)
;return f>0&&f!==u?r.indexFrame(n,f):null}):Promise.resolve(null)},r.getParentFrame=k});