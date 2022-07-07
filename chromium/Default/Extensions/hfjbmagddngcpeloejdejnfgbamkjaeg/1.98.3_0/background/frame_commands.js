"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],function(n,t,e,l,u,i,o,r,f,a,s,c,v){
var d,m,p,g,h,_;Object.defineProperty(t,"__esModule",{value:true
}),t.focusFrame=t.framesGoNext=t.toggleZoom=t.mainFrame=t.framesGoBack=t.openImgReq=t.captureTab=t.enterVisualMode=t.showVomnibar=t.initHelp=t.performFind=t.parentFrame=t.nextFrame=void 0,
d=function(){var n,l=e.N,u=-1,i=e.z.get(l.s.Sn),o=i&&i.po;if(o&&o.length>1){for(u=o.indexOf(l),
n=Math.abs(e.k);n>0;n--)(u+=e.k>0?1:-1)===o.length?u=0:u<0&&(u=o.length-1);l=o[u]}
t.focusFrame(l,0===l.s.Dn,l!==e.N&&i&&l!==i.Qn?4:3,e.Ie)},t.nextFrame=d,m=function(){
var n=e.N.s,l=n.Sn>=0&&e.z.get(n.Sn)?null:"Vimium C can not access frames in current tab";l&&o.showHUD(l),
o.getParentFrame(n.Sn,n.Dn,e.k).then(function(n){n?t.focusFrame(n,true,5,e.Ie):t.mainFrame()})},t.parentFrame=m,
t.performFind=function(){
var n=e.N.s,t=e.k<0?-e.k:e.k,l=e.Ie.index,u=l?"other"===l?t+1:"count"===l?t:l>=0?-1-(0|l):0:0,i=!!u||!e.Ie.active,o=null
;32&n.Ln||(n.Ln|=32,o=r.ni(n)),s.sendFgCmd(1,true,s.wrapFallbackOptions({c:u>0?e.k/t:e.k,l:i,f:o,m:!!e.Ie.highlight,
n:!!e.Ie.normalize,r:true===e.Ie.returnToViewport,s:!u&&t<2&&!!e.Ie.selected,p:!!e.Ie.postOnEsc,e:!!e.Ie.restart,
q:e.Ie.query?e.Ie.query+"":i||e.Ie.last?v.Ct.yr(n.Vn,"",u<0?-u:u):""}))},t.initHelp=function(n,t){var i=e.Z||[]
;return Promise.all([u.import2(e.e.HelpDialogJS),null!=i[0]?null:l.l("help_dialog.html"),null!=i[1]?null:f.getI18nJson("help_dialog")]).then(function(l){
var u,i,o=l[0],r=l[1],f=l[2],c=n.w&&(null===(u=e.z.get(t.s.Sn))||void 0===u?void 0:u.Un)||t,v=c.s.dr.startsWith(e.e.Je),d=n.a||{}
;c.s.Ln|=64,e.N=c,i=e.Z||(e.Z=[null,null]),r&&(i[0]=r),f&&(i[1]=f),s.sendFgCmd(17,true,{h:o.nl(v,d.commandNames),
o:e.e.Je,f:n.f,e:!!d.exitOnClick,c:v&&!!a.vt||e.me.showAdvancedCommands})},null)},p=function(n){
var u,i,r,f,a,c,v,d,m,p,g,h=e.N,_=e.Ie.url;if(null!=_&&true!==_&&"string"!=typeof _&&(_=null,delete e.Ie.url),!h){
if(!(h=(null===(u=e.z.get(e.L))||void 0===u?void 0:u.Un)||null))return;e.N=h}if(null!=_&&e.Ie.urlSedKeys){
if((i="string"==typeof _?_:o.Hn())&&i instanceof Promise)return void i.then(function(e){s.overrideCmdOptions({url:e||""
},true),t.showVomnibar(n)});_=e.p(i,0,{r:null,k:e.Ie.urlSedKeys}),s.overrideCmdOptions({url:_},true)}
"bookmark"===e.Ie.mode&&s.overrideOption("mode","bookm"),f=h.s.dr,a=!(r=e.vomnibarPage_f).startsWith(e.e.xe),
c=f.startsWith(e.e.xe),
v=n||!r.startsWith(location.origin+"/")?e.e.Ke:r,n=n||(a?c||r.startsWith("file:")&&!f.startsWith("file:///")||r.startsWith("http:")&&!/^http:/.test(f)&&!/^http:\/\/localhost[:/]/i.test(r):h.s.Vn||c&&!r.startsWith(f.slice(0,f.indexOf("/",f.indexOf("://")+3)+1))),
p=e.Ie.trailing_slash,null==(g=s.copyCmdOptions(l.dn({v:(d=n||r===v||h.s.Sn<0)?v:r,i:d?null:v,t:d?0:a?2:1,
s:null!=(m=e.Ie.trailingSlash)?!!m:null!=p?!!p:null,j:d?"":e.e.We,e:!!e.Ie.exitOnClick,k:l.c(true)
}),e.Ie)).icase&&e.ae.actions.includes("icase")&&(g.icase=true),s.portSendFgCmd(h,6,true,g,e.k),g.k="omni",e.Ie=g},
t.showVomnibar=p,t.enterVisualMode=function(){var n,t,u,i,o,f,c,v,d;t=e.Ie.start,
u="string"==typeof(n=e.Ie.mode)?n.toLowerCase():"",o=null,f="",c=null,v=null,16&~(i=e.N.s).Ln&&(f=e.ee,
32&i.Ln||(i.Ln|=32,o=r.ni(i)),c=a.at,v=a.it,i.Ln|=16),delete(d=l.kn({m:"caret"===u?3:"line"===u?2:1,f:o,g:v,k:c,
t:!!e.Ie.richText,s:null!=t?!!t:null,w:f},e.Ie)).mode,delete d.start,delete d.richText,s.sendFgCmd(5,true,d)},
t.captureTab=function(n,t){
var l=e.Ie.show,i=false===e.Ie.download,o=!!e.Ie.png||false?0:Math.min(Math.max(0|e.Ie.jpeg,0),100),r=n&&n[0],f=r?r.id:e.L,a=r?r.title:""
;a="title"===e.Ie.name||!a||f<0?a||""+f:f+"-"+a,a+=o>0?".jpg":".png",u.Bn.captureVisibleTab(r?r.windowId:e.J,o>0?{
format:"jpeg",quality:o}:{format:"png"},function(n){var o,r,f;if(!n)return t(0),u.On();o=function(n){
var o,s,c=i&&!l?null:"string"!=typeof n?URL.createObjectURL(n):n;if(c&&c.startsWith("blob:")&&(g&&(clearTimeout(g[0]),
URL.revokeObjectURL(g[1])),g=[setTimeout(function(){g&&URL.revokeObjectURL(g[1]),g=null},l?5e3:3e4),c]),l)return r(c),
void t(1);i||(s=e.N&&(null===(o=e.z.get(e.N.s.Sn))||void 0===o?void 0:o.Un)||e.N,
u.downloadFile(c,a,s?s.s.dr:null,function(n){n||f(c),t(n)}))},r=function(n){e.K[24]({t:"pixel=1&",u:n,f:a,a:false,m:36,
o:{r:e.Ie.reuse,m:e.Ie.replace,p:e.Ie.position,w:e.Ie.window}},e.N)},f=function(n){
var t=globalThis.document.createElement("a");t.href=n,t.download=a,t.target="_blank",t.click()},
n.startsWith("data:")?fetch(n).then(function(n){return n.blob()}).then(o):o(n)})},t.openImgReq=function(n,t){
var u,r,a,v,d,m,p,g,h=n.u;if(/^<svg[\s>]/i.test(h)){if(!(h=i.$e(h)))return e.N=t,void o.showHUD(f.$r("invalidImg"))
;n.f=n.f||"SVG Image"}if(!l.sn(h))return e.N=t,void o.showHUD(f.$r("invalidImg"));r=e.e.Fe+"#!image ",
n.f&&(r+="download="+l.on(n.f)+"&"),false!==n.a&&(r+="auto=once&"),n.t&&(r+=n.t),v=(a=n.o||l.bn()).k,
d=null!==(u=a.t)&&void 0!==u?u:!v,p=(m=a.s?e.p(h,32768,a.s):h)!==h,h=m,s.replaceCmdOptions({opener:true,
reuse:null!=a.r?a.r:16&n.m?-2:-1,replace:a.m,position:a.p,window:a.w
}),e.k=1,g=v||p?d?i.ir(h,v,2):i.er(h.trim().split(l.xn),v,2):h,
c.openUrlWithActions("string"!=typeof g||!d||g.startsWith(location.protocol)&&!g.startsWith(location.origin+"/")?g:r+g,9)
},h=function(n,l,i){var r,a,v,d,m,p,g,h,_,b=!!u.Bn.goBack
;if(!b&&(i?u.getTabUrl(i):(l.s.Dn?e.z.get(l.s.Sn).Un:l).s.dr).startsWith(e.e.xe)&&true)return e.N=l,
o.showHUD(f.$r("noTabHistory")),void s.runNextCmd(0);if(r=s.hasFallbackOptions(n.o)?(s.replaceCmdOptions(n.o),
s.getRunNextCmdBy(0)):u.On,a=function(n,t){u.Bn.executeScript(n.id,{code:"history.go(".concat(t,")"),
runAt:"document_start"},r)},v=i?i.id:l.s.Sn,d=n.s,m=c.parseReuse(n.o.reuse||0))p=n.o.position,
u.Bn.duplicate(v,function(e){var l,i,o;if(!e)return r()
;-2===m&&u.selectTab(v),b?((l=s.parseFallbackOptions(n.o)||{}).reuse=0,t.framesGoBack({s:d,o:l},null,e)):a(e,d),
i=e.index--,null!=(o="end"===p?3e4:c.newTabIndex(e,p,false,true))&&o!==i&&u.Bn.move(e.id,{index:o},u.On)
});else if(g=d>0?u.Bn.goForward:u.Bn.goBack,b||g)for(h=0,_=d>0?d:-d;h<_;h++)g(v,h?u.On:r);else a(i,d)},t.framesGoBack=h,
_=function(){var n=e.z.get(e.N?e.N.s.Sn:e.L),l=n&&n.Un
;l&&l===n.Qn&&e.Ie.$else&&"string"==typeof e.Ie.$else?s.runNextCmd(0):l&&t.focusFrame(l,true,l===n.Qn?3:5,e.Ie)},
t.mainFrame=_,t.toggleZoom=function(n){u.Wn(u.Bn.getZoom).then(function(t){var l,i,o,r,f,a,s,c,v,d,m;if(t){
if(l=e.k<-4?-e.k:e.k,(e.Ie.in||e.Ie.out)&&(l=0,e.k=e.Ie.in?e.k:-e.k),o=e.Ie.level,r=Math,
e.Ie.reset)i=1;else if(null!=o&&!isNaN(+o)||l>4)f=r.max(.1,r.min(0|e.Ie.min||.25,.9)),
a=r.max(1.1,r.min(0|e.Ie.min||5,100)),i=null==o||isNaN(+o)?l>1e3?1:l/(l>49?100:10):1+o*e.k,i=r.max(f,r.min(i,a));else{
for(s=0,
c=9,v=[.25,1/3,.5,2/3,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],d=0,m=0;d<v.length&&(m=Math.abs(v[d]-t))<c;d++)s=d,c=m
;i=v[s+e.k<0?0:r.min(s+e.k,v.length-1)]}Math.abs(i-t)>.005?u.Bn.setZoom(i,u.Pn(n)):n(0)}else n(0)})},
t.framesGoNext=function(n,t){var l,u,i,o,r=e.Ie.patterns,f=false
;if(r&&r instanceof Array||(r=(r=r&&"string"==typeof r?r:(f=true,
n?e.me.nextPatterns:e.me.previousPatterns)).split(",")),f||!e.Ie.$fmt){for(u of(l=[],
r))if((u=u&&(u+"").trim())&&l.push(".#[".includes(u[0])?u:u.toLowerCase()),200===l.length)break;r=l,
f||(s.overrideOption("patterns",r),s.overrideOption("$fmt",1))}i=r.map(function(n){
return Math.max(n.length+12,4*n.length)}),o=Math.max.apply(Math,i),s.sendFgCmd(10,true,s.wrapFallbackOptions({
r:e.Ie.noRel?"":t,n:n,exclude:e.Ie.exclude,match:e.Ie.match,evenIf:e.Ie.evenIf,p:r,l:i,m:o>0&&o<99?o:32,
v:false!==e.Ie.view}))},t.focusFrame=function(n,t,l,u){n.postMessage({N:7,H:t?o.ensureInnerCSS(n.s):null,m:l,k:e.B,c:0,
f:u&&s.parseFallbackOptions(u)||{}})}});