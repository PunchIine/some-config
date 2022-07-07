"use strict"
;__filename="background/all_commands.js",define(["require","exports","./utils","./store","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tab_commands","./tools"],function(n,e,o,t,r,i,u,l,a,f,c,s,d,v,m,p,h,b,y,k){
Object.defineProperty(e,"__esModule",{value:true
}),t.P=[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,1,0,0,0,0,2,0,1,0,2,2,0,0,1,0,0,1,0,0,1,0,2,1,1,0,0,0,0,0],
t.V=[function(){var n,e=t.Ie.for||t.Ie.wait,o=t.Ie.isError?0:1
;"ready"!==e?((e=e?Math.abs("count"===e||"number"===e?t.k:0|e):d.hasFallbackOptions(t.Ie)?Math.abs(t.k):0)&&(e=Math.max(34,e),
(n=null!=(n=t.Ie.block)?!!n:e>17&&e<=1e3)&&t.N&&t.N.postMessage({N:16,t:e+50})),
d.runNextCmdBy(t.k>0?o:1-o,t.Ie,e)):d.runNextOnTabLoaded({},null,function(){d.runNextCmdBy(o,t.Ie,1)})},function(){
var n=t.Ie.rel,e=n?(n+"").toLowerCase():"next",o=null!=t.Ie.isNext?!!t.Ie.isNext:!e.includes("prev")&&!e.includes("before"),r=m.xr(t.Ie)
;m.doesNeedToSed(8192,r)?Promise.resolve(a.Hn(t.z.get(t.N.s.Sn).Un)).then(function(n){
var i=o?t.k:-t.k,u=n&&t.p(n,8192,r),l=u?p.goToNextUrl(u,i,!t.Ie.absolute||"absolute"):[false,n],a=l[1];l[0]&&a?(t.k=i,
null==t.Ie.reuse&&d.overrideOption("reuse",0),d.overrideCmdOptions({url_f:a,goNext:false}),
p.openUrl()):h.framesGoNext(o,e)}):h.framesGoNext(o,e)},function(){
var n,e,o,r=t.Ie.key,i=r&&"string"==typeof r?s.bt(r).trim():""
;i=i.length>1||1===i.length&&!/[0-9a-z]/i.test(i)&&i===i.toUpperCase()&&i===i.toLowerCase()?i:"",
o=null!==(e=null!==(n=t.Ie.hideHUD)&&void 0!==n?n:t.Ie.hideHud)&&void 0!==e?e:!i&&t.me.hideHud,
Promise.resolve(c.$r("globalInsertMode",[i&&": "+(1===i.length?'" '.concat(i,' "'):"<".concat(i,">"))])).then(function(n){
d.sendFgCmd(7,!o,{h:o?null:n,k:i||null,i:!!t.Ie.insert,p:!!t.Ie.passExitKey,r:+!!t.Ie.reset,
t:d.parseFallbackOptions(t.Ie),u:!!t.Ie.unhover}),o&&"force"!==o&&"always"!==o&&a.showHUD(n,1)})
},h.nextFrame,h.parentFrame,h.performFind,function(n){
var e=(t.Ie.key||"")+"",o="darkMode"===e?"d":"reduceMotion"===e?"m":l.eo[e],r=o?t.ie[o]:0,i=c.$r("quoteA",[e]),u=t.Ie.value,f="boolean"==typeof u,s=null,v=""
;o?"boolean"==typeof r?f||(u=null):f||void 0===u?s=f?"notBool":"needVal":typeof u!=typeof r&&(v=JSON.stringify(r),
s="unlikeVal",v=v.length>10?v.slice(0,9)+"\u2026":v):s=e in l.ao?"notFgOpt":"unknownA",
Promise.resolve(i).then(function(e){var r,i,f,m;if(s)a.showHUD(c.$r(s,[e,v]));else{for(f of(u=l.to(o,u),
i=(r=t.z.get(t.N.s.Sn)).Qn,r.po))d.portSendFgCmd(f,8,m=f===i,{k:o,n:m?e:"",v:u},1);n(1)}})},function(){
0!==t.N.s.Dn||64&t.N.s.Ln?(new Promise(function(e,o){n([t.e.HelpDialogJS],e,o)}).then(n=>n),
d.sendFgCmd(17,true,t.Ie)):h.initHelp({a:t.Ie},t.N)},function(){
var n,e,r,i,u,l,f,c,s,v,m,p,h,b,y,k,w,M,g,x,_=d.copyCmdOptions(o.bn(),t.Ie);if(!_.esc){if(n=_.key,
e=(_.type||(n?"keydown":""))+"",
i=_.delay,u=_.xy,l=_.direct,f=_.directOptions,r=(r=_.class)&&"$"===r[0]?r.slice(1):(r&&r[0].toUpperCase()+r.slice(1)||"Keyboard").replace(/event$/i,"")+"Event",
u=/^(Mouse|Pointer|Wheel)/.test(r)&&null==u?[.5,.5]:u,(u=_.xy=o.a(u))&&!u.n&&(u.n=t.k,t.k=1),
_.click)e="click";else if(t.k<0)for(c of"down up;enter leave;start end;over out".split(";"))s=c.split(" "),
e=e.replace(s[0],s[1]);if(!e)return a.showHUD('Require a "type" parameter'),void d.runNextCmd(0)
;for(h of(m=(v=_.init)&&"object"==typeof v?v:_,p={},i=i&&+i>=0?Math.max(0|+i,1):null,
["bubbles","cancelable","composed"]))p[h]=false!==m[h]||false!==_[h];for(y of(b={e:1,class:1,type:1,key:1,return:1,
delay:1,esc:1,click:1,init:1,xy:1,match:1,direct:1,directOptions:1,clickable:1,exclude:1,evenIf:1,scroll:1,typeFilter:1,
textFilter:1,clickableOnHost:1,excludeOnHost:1
},Object.entries(m)))w=y[1],(k=y[0])&&"$"!==k[0]&&!b.hasOwnProperty(k)&&(p[k]=w,m===_&&delete _[k])
;n&&","!==n&&("object"==typeof n||n.includes(","))&&(M="object"==typeof n?n:n.split(",")).length>=2&&(!M[1]||+M[1]>=0)&&(x=0|M[1],
p.key="Space"===(g=M[0])?" ":"Comma"===g?",":"$"===g&&g.length>1?g.slice(1):g,x&&null==m.keyCode&&(p.keyCode=+M[1]),
x&&null==m.which&&(p.which=+M[1]),M.length>=3&&null==m.code&&(p.code=M[2]||M[0])),_.type=e,_.class=r,_.init=p,_.delay=i,
_.direct=l&&"string"==typeof l?l:"element,hover,scroll,focus",f&&!f.search&&(f.search="doc"),_.directOptions=f||{
search:"doc"},_.e="Can't create \"".concat(r,"#").concat(e,'"')}d.portSendFgCmd(t.N,16,false,_,t.k)},function(){
h.showVomnibar()},h.enterVisualMode,function(n){var e=t.Ie.folder||t.Ie.path,o=!!t.Ie.all
;if(!e||"string"!=typeof e)return a.showHUD('Need "folder" to refer a bookmark folder.'),void n(0)
;t.findBookmark(1,e).then(function(e){
if(!e||null!=e.u)return n(0),void a.showHUD(false===e?'Need valid "folder".':null===e?"The bookmark folder is not found.":"The bookmark is not a folder.")
;(!o&&t.k*t.k<2?r.getCurTab:r.Mn)(function i(u){var l,f,c,s,v,m,p;if(!u||!u.length)return n(0),r.On()
;if(f=u[l=r.selectIndexFrom(u)],c=o?[0,u.length]:b.getTabRange(l,u.length),s=t.Ie.filter,v=u,u=u.slice(c[0],c[1]),
!s||(u=b.mu(f,u,s)).length)if((m=u.length)>20&&d.vu())d.cu("addBookmark",m).then(i.bind(0,v));else{
for(p of u)r.Cn.bookmarks.create({parentId:e.fo,title:p.title,url:r.getTabUrl(p)},r.On)
;a.showHUD("Added ".concat(m," bookmark").concat(m>1?"s":"",".")),n(1)}else n(0)})})},function(n){
false!==t.Ie.copied?(d.overrideCmdOptions({copied:true}),p.openUrl()):n(0)},h.captureTab,function(n){
n(k.St.Ut(t.Ie,t.N))},function(n){var e=t.N?t.N.s.Vn:2===t.A;k.Ct.Cr(e),a.showHUDEx(t.N,"fhCleared",0,[e?["incog"]:""]),
n(1)},function(n){var e=t.Ie.local?t.Ie.all?k.It.Xt("#"):a.Nn({H:20,u:"",a:2},true):k.It.Xt()
;e&&e instanceof Promise?e.then(function(e){e&&n(1)}):n(1)},y.copyWindowInfo,function n(e,o,i){var u,l,a=t.Ie.$pure
;null==a&&d.overrideOption("$pure",a=!Object.keys(t.Ie).some(function(n){
return"opener"!==n&&"position"!==n&&"evenIncognito"!==n&&"$"!==n[0]
})),a?!(u=e&&e.length>0?e[0]:null)&&t.L>=0&&!r.On()&&"dedup"!==i?r.Wn(r.tabsGet,t.L).then(function(e){
n(e&&[e],0,"dedup")}):(l=true===t.Ie.opener,r.openMultiTabs(u?{active:true,windowId:u.windowId,
openerTabId:l?u.id:void 0,index:p.newTabIndex(u,t.Ie.position,l,true)}:{active:true
},t.k,t.Ie.evenIncognito,[null],true,u,function(n){n&&r.selectWndIfNeed(n),d.getRunNextCmdBy(3)(n)})):p.openUrl(e)
},function(n,e){if(t.we<54)return a.showHUD(c.$r("noDiscardIfOld",[54])),void e(0);b.xu(true,1,function n(e,o,i,u){
var l,f,s,v,m,p,h,y,k,w=o[0],M=o[1],g=o[2];if(u&&(w=(l=b.getTabRange(M,e.length,0,1))[0],g=l[1]),f=t.Ie.filter,s=e,
e=e.slice(w,g),
v=r.selectFrom(e),m=(e=f?b.mu(v,e,f):e).includes(v)?e.length-1:e.length)if(m>20&&d.vu())d.cu("discardTab",m).then(n.bind(null,s,[w,M,g],i));else{
for(k of(h=[],
(y=!(p=e[b.getNearArrIndex(e,v.index+(t.k>0?1:-1),t.k>0)]).discarded)&&(m<2||false!==p.autoDiscardable)&&h.push(r.Wn(r.Bn.discard,p.id)),
e))k===v||k===p||k.discarded||(y=true,false!==k.autoDiscardable&&h.push(r.Wn(r.Bn.discard,k.id)))
;h.length?Promise.all(h).then(function(n){var e=n.filter(function(n){return void 0!==n}),o=e.length>0
;a.showHUD(o?"Discarded ".concat(e.length," tab(s)."):c.$r("discardFail")),i(o)
}):(a.showHUD(y?c.$r("discardFail"):"Discarded."),i(0))}else i(0)},n,e)},function(n){var e,o=t.N?t.N.s.Sn:t.L
;if(o<0)return a.complainLimits(c.$r("dupTab")),void n(0);e=false===t.Ie.active,r.Wn(r.Bn.duplicate,o).then(function(i){
if(i){if(e&&r.selectTab(o,r.On),e?n(1):d.runNextOnTabLoaded(t.Ie,i),!(t.k<2)){var u=function(n){r.openMultiTabs({
url:r.getTabUrl(n),active:false,windowId:n.windowId,pinned:n.pinned,index:n.index+2,openerTabId:n.id
},t.k-1,true,[null],true,n,null)};t.we>=52||0===t.A||t.e.He?r.tabsGet(o,u):r.getCurWnd(true,function(e){
var i,l=e&&e.tabs.find(function(n){return n.id===o});if(!l||!e.incognito||l.incognito)return l?u(l):r.On()
;for(i=t.k;0<--i;)r.Bn.duplicate(o);n(1)})}}else n(0)}),e&&r.selectTab(o,r.On)},function(n){n.length&&h.framesGoBack({
s:t.k,o:t.Ie},null,n[0])},function(n){var e=!!t.Ie.absolute,o=t.Ie.filter,i=function(i){
var u,l,a,f,c,s,d=t.k,v=r.selectFrom(i),m=i.length;if(!o||(i=b.mu(v,i,o)).length){if(u=i.length,
l=b.getNearArrIndex(i,v.index,d<0),
a=(a=e?d>0?Math.min(u,d)-1:Math.max(0,u+d):Math.abs(d)>2*m?d>0?u-1:0:l+d)>=0?a%u:u+(a%u||-u),
i[0].pinned&&t.Ie.noPinned&&!v.pinned&&(d<0||e)){for(f=1;f<u&&i[f].pinned;)f++;if((u-=f)<1)return void n(0)
;e||Math.abs(d)>2*m?a=e?Math.max(f,a):a||f:(a=(a=l-f+d)>=0?a%u:u+(a%u||-u),a+=f)}
(s=!(c=i[a]).active)&&r.selectTab(c.id),n(s)}else n(0)},u=function(e){b.xu(true,1,i,e||[],n,null)}
;e?1!==t.k||o?u():r.Wn(r.Bn.query,{windowId:t.J,index:0}).then(function(n){n&&n[0]&&r.Fn(n[0])?i(n):u()
}):1===Math.abs(t.k)?r.Wn(r.getCurTab).then(u):u()},function(){var n,e,o
;"frame"!==t.Ie.type&&t.N&&t.N.s.Dn&&(t.N=(null===(n=t.z.get(t.N.s.Sn))||void 0===n?void 0:n.Un)||t.N),e={H:4,u:"",
p:t.k,t:t.Ie.trailingSlash,r:t.Ie.trailing_slash,s:m.xr(t.Ie),e:false!==t.Ie.reloadOnRoot},o=a.Nn(e),
Promise.resolve(o||"url").then(function(){"object"==typeof e.e&&d.getRunNextCmdBy(2)(null!=e.e.p||void 0)})
},y.joinTabs,h.mainFrame,function(n,e){var o,i,u=r.selectIndexFrom(n)
;n.length>0&&(t.k<0?0===(t.k<-1?u:n[u].index):t.k>1&&u===n.length-1)?e(0):b.xu(true,1,function(o){
for(var u,l,a=r.selectIndexFrom(o),f=o[a],c=f.pinned,s=Math.max(0,Math.min(o.length-1,a+t.k));c!==o[s].pinned;)s-=t.k>0?1:-1
;if(s!==a&&i&&(u=r.getGroupId(f),
(l=r.getGroupId(o[s]))!==u&&(1===Math.abs(t.k)||u!==r.getGroupId(o[t.k>0?s<o.length-1?s+1:s:s&&s-1])))){
for(null!==u&&(a>0&&r.getGroupId(o[a-1])===u||a+1<o.length&&r.getGroupId(o[a+1])===u)&&(s=a,
l=u);0<=(s+=t.k>0?1:-1)&&s<o.length&&r.getGroupId(o[s])===l;);s-=t.k>0?1:-1}
s===a&&f.active?e(0):r.Bn.move((f.active?f:n[0]).id,{index:o[s].index},r.Pn(e))
},n,e,(i="ignore"!==(o=t.Ie.group)&&false!==o)?function(e){return r.getGroupId(n[0])===r.getGroupId(e)}:null)
},y.moveTabToNewWindow,y.moveTabToNextWindow,function(){p.openUrl()},function(n,e){b.xu(!t.Ie.single,0,y.reloadTab,n,e)
},function(n,e){b.xu(false,1,function(n,e,o){r.Bn.remove(n[e[0]].id,r.Pn(o))},n,e)},y.removeTab,function(n){
var e=t.Ie.other?0:t.k;b.ku(e,function o(i){var u,l,a,f,c,s=i;if(!s||0===s.length)return r.On();u=r.selectIndexFrom(s),
l=t.Ie.noPinned,
a=t.Ie.filter,f=s[u],e>0?(++u,s=s.slice(u,u+e)):(l=null!=l?l&&s[0].pinned:u>0&&s[0].pinned&&!s[u-1].pinned,
e<0?s=s.slice(Math.max(u+e,0),u):s.splice(u,1)),l&&(s=s.filter(function(n){return!n.pinned})),a&&(s=b.mu(f,s,a)),
(c=t.Ie.mayConfirm)&&s.length>("number"==typeof c?Math.max(c,5):20)&&d.vu()?d.cu("closeSomeOtherTabs",s.length).then(o.bind(null,i)):s.length>0?r.Bn.remove(s.map(function(n){
return n.id}),r.Pn(n)):n(0)})},function(n,e){if(n.length<=0)e(0);else{var o=n[0],i=false!==t.Ie.group
;t.we>=52||0===t.A||t.e.He||!r._n(r.getTabUrl(o))?y.Ft(o,void 0,void 0,i):r.An.get(o.windowId,function(n){
n.incognito&&!o.incognito&&(o.openerTabId=o.windowId=void 0),y.Ft(o,void 0,void 0,i)})}},function(n){
var e,o,i,u,l,f,s,v,m,p=r.$n();if(!p)return n(0),a.complainNoSession();if(e=!!t.Ie.one,o=+p.MAX_SESSION_RESULTS||25,
(i=Math.abs(t.k))>o){if(e)return n(0),void a.showHUD(c.$r("indexOOR"));i=o}
if(!e&&i<2&&(t.N?t.N.s.Vn:2===t.A)&&!t.Ie.incognito)return n(0),a.showHUD(c.$r("notRestoreIfIncog"))
;u=false===t.Ie.active,l=true===t.Ie.currentWindow,f=t.N?t.N.s.Sn:t.L,s=t.J,v=d.getRunNextCmdBy(0),m=function(e){
var o,i,l,a;e&&(e.window||e.tab&&e.tab.windowId!==s&&0===e.tab.index)&&(o=e.window?r.selectFrom(e.window.tabs):e.tab,
(l=/^(file|ftps?|https?)/.test(i=o.url)||i.startsWith(location.origin+"/"))||!i.startsWith(location.protocol)||i.startsWith(location.origin+"/")||(l=!!(a=new URL(i).host)&&true===t.X.get(a)),
l&&(e.window?Promise.resolve(e.window):r.Wn(r.Bn.query,{windowId:o.windowId,index:1}).then(function(n){
return n&&n.length?null:r.Wn(r.An.get,o.windowId)})).then(function(n){
n&&"popup"!==n.type&&Promise.all([r.Wn(r.Bn.create,{url:"about:blank",windowId:n.id
}),r.Wn(r.Bn.remove,o.id)]).then(function(n){var e=n[0];p.restore(),e&&r.Bn.remove(e.id)})})),
void 0===m?n(0):u?r.selectTab(f,v):n(1)},__awaiter(void 0,void 0,void 0,function*(){
var t,v=Math.max(1.2*i|0,2),h=false,b=l?function(n){return!!n.tab&&n.tab.windowId>0&&n.tab.windowId===s}:null
;if(l&&i<=Math.min(o,25)&&((t=yield r.In(p.getRecentlyClosed,{maxResults:i})).some(function(n){
return!(!n.tab||n.tab.windowId>0)})&&(d.overrideOption("currentWindow",false),l=false),h=t.length>i,t=b?t.filter(b):t,
!h&&t.length<i&&v<=Math.min(o,25)&&(t=yield r.In(p.getRecentlyClosed,{maxResults:v}),t=b?t.filter(b):t)),
(!t||!h&&t.length<i)&&(t=yield r.In(p.getRecentlyClosed,i<=25&&!l?{maxResults:i}:{}),t=b?t.filter(b):t),
t.length<(e?i:1))return n(0),a.showHUD(c.$r("indexOOR"))
;1===i?r.Wn(p.restore,l?t[0].tab.sessionId:null).then(m):Promise.all(t.slice(e?i-1:0,i).map(function(n){
return r.Wn(p.restore,(n.tab||n.window).sessionId)})).then(function(n){m(e?n[0]:null)}),u&&r.selectTab(f,r.On)})
},function(){null==t.Ie.$seq?v.runKeyWithCond():v.runKeyInSeq(t.Ie.$seq,t.k,t.Ie.$f,null)},function(n){
var e,o,l,f=(t.Ie.keyword||"")+"",s=u.fu({u:r.getTabUrl(n[0])});s&&f?(e=m.xr(t.Ie),s.u=t.p(s.u,0,e),
o=i.er(s.u.split(" "),f,2),d.overrideCmdOptions({url_f:o,reuse:null!=(l=t.Ie.reuse)?l:0,opener:true,keyword:""}),
p.openUrl(n)):d.runNextCmd(0)||a.showHUD(c.$r(f?"noQueryFound":"noKw"))},function(n){var e,o,i=t.Ie.id,u=t.Ie.data
;if(!(i&&"string"==typeof i&&void 0!==u))return a.showHUD('Require a string "id" and message "data"'),void n(0)
;e=Date.now(),o=function(e){e=e&&e.message||e+"",console.log("Can not send message to the extension %o:",i,e),
a.showHUD("Error: "+e),n(0)};try{r.Cn.runtime.sendMessage(i,t.Ie.raw?u:{handler:"message",from:"Vimium C",count:t.k,
keyCode:t.B,data:u},function(t){var i=r.On();return i?o(i):"string"==typeof t&&Math.abs(Date.now()-e)<1e3&&a.showHUD(t),
i||n(false!==t),i})}catch(n){o(n)}},function(n){var e,o=t.Ie.text,r=!!t.Ie.silent,i=t.Ie.isError
;o||r||null!=i||!t.Ie.$f||(o=(e=t.Ie.$f)&&e.t?c._r("".concat(e.t)):"")?(r||a.showHUD(o?o instanceof Promise?o:o+"":c.$r("needText")),
n(null!=i?!!i:!!o)):n(false)},function(n,e){k.St.Gt(t.Ie,t.k,n,e)},y.toggleMuteTab,function(n,e){
b.xu(true,0,y.togglePinTab,n,e)},y.toggleTabUrl,function(n,e){
var o,r=n[0].id,i=((t.Ie.style||"")+"").trim(),u=!!t.Ie.current;if(!i)return a.showHUD(c.$r("noStyleName")),void e(0)
;for(o of t.U)if(o.s.Sn===r)return o.postMessage({N:46,t:i,c:u}),void setTimeout(e,100,1);u||f.ii({t:i,o:1}),
setTimeout(e,100,1)},h.toggleZoom,function(n){
var e,o=!!t.Ie.acrossWindows,i=!!t.Ie.onlyActive,u=t.Ie.filter,l={},f=function(e){var o,l,f,s,d
;if(e.length<2)return i&&a.showHUD("Only found one browser window"),n(0),r.On();o=t.N?t.N.s.Sn:t.L,
f=(l=e.findIndex(function(n){return n.id===o}))>=0?e[l]:null,l>=0&&e.splice(l,1),
!u||(e=b.mu(f,e,u)).length?(s=e.filter(function(n){return t.T.has(n.id)}).sort(k._t.Wr),
(d=(e=i&&0===s.length?e.sort(function(n,e){return e.id-n.id
}):s)[t.k>0?Math.min(t.k,e.length)-1:Math.max(0,e.length+t.k)])?i?r.An.update(d.windowId,{focused:true
},r.Pn(n)):c(d.id):n(0)):n(0)},c=function(e){r.selectTab(e,function(e){return e&&r.selectWndIfNeed(e),r.Pn(n)()})}
;1===t.k&&!i&&-1!==t.L&&(e=b.wu())>=0?Promise.all([r.Wn(r.tabsGet,e),b.getNecessaryCurTabInfo(u)]).then(function(n){
var e=n[0],i=n[1];e&&(o||e.windowId===t.J)&&r.Fn(e)&&(!u||b.mu(i,[e],u).length>0)?c(e.id):o?r.Bn.query(l,f):r.Mn(f)
}):o||i?r.Bn.query(i?{active:true}:l,f):r.Mn(f)},function(n){var e=t.Ie.newWindow
;true!==e&&true?r.Wn(r.Cn.permissions.contains,{permissions:["downloads.shelf","downloads"]}).then(function(o){var i,u
;if(o){i=r.Cn.downloads.setShelfEnabled,u=void 0;try{i(false),setTimeout(function(){i(true),n(1)},256)}catch(n){
u=(n&&n.message||n)+""}a.showHUD(u?"Can not close the shelf: "+u:"The download bar has been closed"),u&&n(0)
}else false===e&&t.N?(a.showHUD("No permissions to close download bar"),n(0)):t.V[27](n)}):t.V[27](n)},function(){
var n,e=t.z.get(t.N?t.N.s.Sn:t.L),o=!!t.Ie.unhover,r=t.Ie.suppress;for(n of e?e.po:[])d.portSendFgCmd(n,7,false,{r:1,u:o
},1);(d.runNextCmdBy(1,t.Ie)?true===r:false!==r)&&e&&e.Qn.postMessage({N:16,t:150})},function(n){
var e,o,r,i,u,l,f,c=t.Ie.$cache;if(null!=c&&((o=t.H.Me.find(function(n){return n.fo===c
}))?e=Promise.resolve(o):d.overrideOption("$cache",null)),r=!!e,i=t.k,u=false,!e){
if(!(l=t.Ie.path||t.Ie.title)||"string"!=typeof l)return a.showHUD("Invalid bookmark "+(t.Ie.path?"path":"title")),
void n(0)
;if(!(f=d.fillOptionWithMask(l,t.Ie.mask,"name",["path","title","mask","name","value"],i)).ok)return void a.showHUD((f.result?"Too many potential names":"No name")+" to find bookmarks")
;u=f.useCount,e=t.findBookmark(0,f.result)}e.then(function(e){e&&null!=e.u?(r||u||d.overrideOption("$cache",e.fo),
d.overrideCmdOptions({url:e.do||e.u
},true),t.k=u?1:i,p.openUrl()):(n(0),a.showHUD(false===e?'Need valid "title" or "title".':null===e?"The bookmark node is not found.":"The bookmark is a folder."))
})}]});