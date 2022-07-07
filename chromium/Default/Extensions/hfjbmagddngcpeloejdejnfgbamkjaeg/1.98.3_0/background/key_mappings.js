"use strict"
;__filename="background/key_mappings.js",define(["require","exports","./store","./utils","./settings","./exclusions"],function(e,t,n,a,o,i){
var r,s,c,l,u,d,m,p,b,v,k,g,T,f,w,h,y,L,H,M,x,_;Object.defineProperty(t,"__esModule",{value:true}),
t.at=t.it=t.st=t.ct=t.lt=t.dt=t.mt=t.pt=t.bt=t.vt=t.kt=t.gt=t.Tt=void 0,t.Tt=/<(?!<)(?:.-){0,4}.\w*?(?::i)?>|./g,t.kt=s,
t.gt=c,l=true,t.vt=u=null,t.bt=function(e){return e.length>1?"<escape>"===e?"esc":e.slice(1,-1):e},m=function(e,n){
return e.length<=n?null:e.includes(" $",n)||e.includes(" =",n)?t.pt(e.slice(n+1),e.includes(" $if={",n)?0:1):e.slice(n+1)
},t.pt=function(e,n){var o,i,r,s=a.bn(),c=0;for(o of e.split(" ")){if(i=o.indexOf("="),"$#/=_".includes(o[0])){
if(0===i||"__proto__"===o||"$"===o[0]&&!"$if=$key=$desc=$count=$then=$else=$retry=".includes(o.slice(0,i+1))){
(0===n||1===n)&&H("%s option key:",0===i?"Missing":"Unsupported",o);continue}if("#"===o[0]||o.startsWith("//"))break}
i<0?(s[o]=true,c=1):(r=o.slice(i+1),s[o=o.slice(0,i)]="number"==typeof n?2===n?r&&p(r):1:r&&t.mt(r),c=1)}
return 1===c?1===n?e:s:null},t.mt=function(e){try{return JSON.parse(e)}catch(e){}return e},p=function(e){var n
;return"false"!==e&&("null"===e?null:"true"===e||((e>="0"?e<":":"-"===e[0])?(n=parseFloat(e))+""===e?n:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]\d+)?$/.test(e)?isNaN(n)?t.mt(e):n:e:'{["'.includes(e[0])?t.mt(e):e))
},b=function(e,n){var i,r,s,c,l,u,d,m=e.ft;if(void 0===n&&(n=t.st[e.wt]),i=n.length<4?null:a.dn(n[3]),
"string"==typeof m&&(m=t.pt(m)),m){
if(("$count"in m||"count"in m)&&(1===n[2]?delete m.$count:m.$count=null!=m.$count?parseFloat(m.$count)||1:(parseFloat(m.count||1)||1)*(i&&i.$count||1),
delete m.count),m.$if){if(false===T(m))return false;delete m.$if}if(i&&a.kn(m,i),2===n[0]&&!n[1]){if(s=(r=m).mode,c=r.m,
u=r.action,(d=(l=r.characters)&&"string"==typeof l?a.t(o.to("c",l)):null)&&d.length<4)return e.ht=39,e.yt=1,e.ft=a.dn({
text:"Too few characters for LinkHints",isError:true}),e.Lt=1,true;d?r.c=d:"c"in r&&delete r.c,
null!=l&&delete r.characters,"action"in r&&delete r.action,"mode"in r&&delete r.mode,
(s=null!=(s=u?x[u]:s&&"number"!=typeof s?x[s]:null)?s:Math.max(0,0|c))>33&&(s=65===s?r.url?64:s:38===s?r.url?null!=r.join?57:40:null!=r.join?55:s:s>79?s-16:s),
void 0!==r.xy&&(r.xy=a.a(r.xy)),r.direct&&(s&=-17),s!==c&&(r.m=s),s>63&&(e.Lt=1)}}else m=i;return e.ft=m,true},t.dt=b,
v=function(e,n,o){void 0===o&&(o=t.st[e]);var i={ht:o[0],yt:o[1],wt:e,ft:n||(o.length<4?null:a.dn(o[3])),Ht:null,Lt:o[2]
};return n&&"object"==typeof n&&!t.dt(i,o)?null:i},t.lt=v,k=function(e){var n=e.ft;return"string"==typeof n&&(t.dt(e),
n=e.ft),n},t.ct=k,g=function(e,t){var n
;return e.length>t&&(n=e.indexOf(" $if={",t))>0&&!/ (#|\/\/)/.test(e.slice(t,n+2))},T=function(e){
var t=e&&"object"==typeof e&&e.$if
;return t&&"object"==typeof t?!(!(t.sys&&t.sys!==n.e.Le||!!t.before&&t.before.replace("v","")<=n.e.qe)&&(!t.browser||1&t.browser)):null
},f=function(e){var o,i,p,b,v,k,f,h,y,L,x,_,U,I,N,V,$,C=0,F=0,S=new Map,O=new Map,B=null,P=false,R=a.bn(),D="color:red"
;for(r=d=null,o=e.replace(/\\\\?\n/g,function(e){return 3===e.length?"\\\n":""
}).replace(/[\t ]+/g," ").split("\n");F<o.length&&(!o[F]||"#"===(i=o[F])[0]);F++)i&&"!"===i[1]&&"no-check"===(i=i.slice(2).trim())&&(P=true)
;if(l=!P,F>=o.length||"unmapAll"!==o[F]&&"unmapall"!==o[F])for(r=new Set,p=(h=M.split(" ")).length;0<p;)r.add(h[p-=2]),
S.set(h[p],t.lt(h[p+1],null));else F++
;for(p=o.length;F<p;F++)if(!((y=o[F].trim())<"$"))switch(I=(x=(L=y.split(" ",3))[0]).length+(_=L.length>1?L[1]:"").length+(U=L.length>2?L[2]:"").length+2,
N=P,x){case"map":case"run":
V="run"===x&&!(U in t.st),b=void 0,P||(!_||_.length>8&&("__proto__"===_||_.includes("<__proto__>"))?H('Unsupported key sequence %c"%s"',D,_||'""','for "'.concat(U||"",'"')):!S.has(_)||r&&r.has(_)||g(y,I)?U?V||(b=t.st[U])?!((v=_.charCodeAt(0))>47&&v<58||45===v)||d&&d.has(_[0])?N=true:H('Invalid key: %c"%s"',D,_,"- a first char can not be '-' or numbers, unless before is `unmap "+_[0]+"`"):H('Command %c"%s"',D,U,"doesn't exist!"):H((V?"Lack target when running":"Lack command when mapping")+' %c"%s"',D,_):H('Key %c"%s"',D,_,"has been mapped to",S.get(_).wt)),
N&&(k=V?t.lt("runKey",m(' keys="'.concat(U.replace(/"|\\/g,"\\$&"),'"')+y.slice(I),0),b):t.lt(U,m(y,I),b))&&(S.set(_,k),
r&&r.delete(_));break;case"unmapAll":case"unmapall":S=new Map,O=new Map,B=null,r=d=null,R=a.bn(),C=0,
u&&H("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",u.length>1?"have":"has",D,u.length,u.length>1?"s":"","color:auto")
;break;case"mapKey":case"mapkey":
P?i=t.bt(_):!U||y.length>I&&!/^(#|\/\/|\$if=\{)/.test(y.slice(I).trimLeft())?H("mapKey: need %s source and target keys:",U?"only":"both",y):_.length>1&&!/^<(?!<[^:]|__proto__>)([acms]-){0,4}.\w*(:[a-z])?>$/.test(_)?H("mapKey: a source key should be a single key with an optional mode id:",y):U.length>1&&!/^<(?!<|__proto__>)([a-z]-){0,4}.\w*>$/.test(U)?H("mapKey: a target key should be a single key:",y):(i=t.bt(_))in R&&R[i]!==t.bt(U)?d&&3===i.length&&"n"===i[2]&&d.has(i[0])?false!==T(m(y,I))&&H("`mapKey %s` and `unmap %s...` can not be used at the same time",_,i.split(":")[0]):g(y,I)?N=true:H('The key %c"%s"',D,_,"has been mapped to another key:",R[i].length>1?"<".concat(R[i],">"):R[i]):N=true,
N&&false!==T(m(y,I))&&(R[i]=t.bt(U),C=1);break;case"shortcut":case"command":
P||(U?!(_.startsWith("userCustomized")&&_.length>14)&&n.e.ze.indexOf(_)<0?H('Shortcut %c"%s"',D,_,"is not a valid name"):O.has(_)&&!g(y,I-1-U.length)?H('Shortcut %c"%s"',D,_,"has been configured"):N=true:H("Lack command name and options in shortcut:",y)),
N&&(f=m(y,I-1-U.length),false!==T(f)&&(i=w(O,_,f))&&H('Shortcut %c"%s"',D,_,i));break;case"env":
P||(U?"__proto__"===_?H('Unsupported env name %c"%s"',D,_):B&&B.has(_)&&!g(y,I-1-U.length)?H('The environment name %c"%s"',D,_,"has been used"):N=true:H("Lack conditions in env declaration:",y)),
N&&(f=m(y,I-1-U.length),false!==T(f)&&(B||(B=new Map)).set(_,f));break;case"unmap":case"unmap!":
!_||U&&"#"!==U[0]?H("unmap: ".concat(U?"only ":"","needs one mapped key:"),y):S.has(_)?(r&&r.delete(_),
S.delete(_)):(v=_.charCodeAt(0))>47&&v<58||45===v?(i=_+":n")in R&&R[i]!=="c-v-"+_?H("`unmap %s...` and `mapKey <%s>` can not be used at the same time",_,i):d&&d.has(_)?"unmap!"!==x&&H('Number prefix: %c"%s"',D,_,"has been unmapped"):((d||(d=new Set)).add(_),
R[i]="c-v-"+_,C=1):"unmap!"!==x&&H('Unmap: %c"%s"',D,_,"has not been mapped");break;default:
H('Unknown mapping command: %c"%s"',D,x,"in",y)}
for($ of n.e.ze)$.startsWith("user")||O.has($)||(k=t.lt($,null))&&O.set($,k);n.R=S,t.kt=s=O,t.gt=c=B,n.x=n.se.m=C?R:null
},w=function(e,n,a){var o,i=1,r=(a=a&&"string"==typeof a?t.pt(a):a)&&a.command||(i=0,n.startsWith("user")?"":n),s=r?1:0
;return s&&r in t.st&&(i&&delete a.command,
(o=t.lt(r,a))&&e.set(n,o),s=2),s<1?'requires a "command" option':s>1?"":"gets an unknown command"},h=function(e){
return"esc"===e||"c-["===e},y=function(e){var t,n,a,o=0
;for(t in e)o|=(n=t.length)<2?(a=e[t]).length>1?h(a)?40:8:t.toUpperCase()!==t&&a.toUpperCase()!==a?16:8:n>2&&":"===t[n-2]?"i"===t[n-1]?2:"n"===t[n-1]?1:4:h(e[t])?40:8
;return o},L=function(e){
var o,s,c,m,p,b,v,k,g,T,w,h,L,M,x,U,I,N,V,$,C=a.bn(),F=null!==e,S=t.bt,O='Inactive key: %o with "%s"',B=null!==u
;for(F&&(n.y=t.vt=u=null,f(e)),o=a.yn(n.R),s=n.x,c=F&&l,m=r?o.filter(function(e){return!r.has(e)}):o,p=m.length,
b=r?m.concat(a.yn(r)):o,r=null,F&&(v=o.join().includes(":i>")?64:0,n.I=s?y(s)|v:v),
k=0;k<b.length;k++)if(0!=(w=(T=(g=b[k]).match(/<(?!<)(?:.-){0,4}.\w*?(?::i)?>|./g)).length-1)){for(L=C,M=void 0,
x=0;(M=L[S(T[x])])&&1!==M&&x<w;)x++,L=M;if(M&&(k>=p||1===M))k>=p?n.R.delete(g):c&&H(O,g,T.slice(0,x+1).join(""));else{
for(M&&c&&H(O,M,g);x<w;)L=L[S(T[x++])]=a.bn();L[S(T[w])]=1}}else{if((h=S(g))in C){if(k>=p){n.R.delete(g);continue}
c&&H(O,C[h],g)}C[h]=1}if(d)for(U of d)U in C&&(C["c-v-"+U]=C[U]);for(C["-"]=2,I=10;0<=--I;)C[I]=2;for(g in d=null,
F&&(u?u.length>1?(console.group(u.length+" Errors in custom Key mappings:"),u.map(function(e){
return console.log.apply(console,e)
}),console.groupEnd()):console.log.apply(console,u[0]):B&&console.log("The new key mappings have no errors")),n.y=C,
N=i.tt(),V=function(e){var t,n
;for(t in e)1!==(n=e[t])?V(n):(true!==N&&1===C[t]&&!(N&&N.has(t))&&(t.length<2||null==C[t+":i"])||t.startsWith("v-"))&&delete e[t]
},C)1===($=C[g])?g.startsWith("v-")&&delete C[g]:2!==$&&V($);e&&_(e)},H=function(){
(u||(t.vt=u=[])).push([].slice.call(arguments,0))
},M="? showHelp <a-c> previousTab <a-s-c> nextTab d scrollPageDown <c-e> scrollDown f LinkHints.activate <f1> simBackspace <s-f1> switchFocus <f2> switchFocus <f8> enterVisualMode G scrollToBottom gf nextFrame gg scrollToTop gi focusInput gn toggleVomnibarStyle gs toggleViewSource gt nextTab gu goUp gF mainFrame gT previousTab gU goToRoot g0 firstTab g$ lastTab h scrollLeft H goBack i enterInsertMode j scrollDown J previousTab K nextTab k scrollUp l scrollRight L goForward <a-m> toggleMuteTab N performBackwardsFind n performFind <a-n> performAnotherFind o Vomnibar.activate <a-p> togglePinTab r reload R reloadGivenTab <a-r> reloadTab <a-s-r> reopenTab t createTab <a-t> createTab u scrollPageUp V enterVisualLineMode v enterVisualMode <a-v> nextTab W moveTabToNextWindow x removeTab X restoreTab yt duplicateTab yy copyCurrentUrl <c-y> scrollUp zH scrollToLeft zL scrollToRight / enterFindMode ` Marks.activate ^ visitPreviousTab [[ goPrevious ]] goNext << moveTabLeft >> moveTabRight b Vomnibar.activateBookmarks ge Vomnibar.activateUrl gE Vomnibar.activateUrlInNewTab m Marks.activateCreate p openCopiedUrlInCurrentTab yf LinkHints.activateCopyLinkUrl B Vomnibar.activateBookmarksInNewTab F LinkHints.activateOpenInNewTab O Vomnibar.activateInNewTab P openCopiedUrlInNewTab T Vomnibar.activateTabs <a-f> LinkHints.activateWithQueue yv LinkHints.activateModeToSelect",
t.st={__proto__:null,"LinkHints.activate":[2,0,0,{m:0}],"LinkHints.activateCopyLinkText":[2,0,0,{m:38}],
"LinkHints.activateCopyLinkUrl":[2,0,0,{m:40}],"LinkHints.activateDownloadImage":[2,0,0,{m:35}],
"LinkHints.activateDownloadLink":[2,0,0,{m:42}],"LinkHints.activateEdit":[2,0,1,{m:67}],
"LinkHints.activateFocus":[2,0,0,{m:34}],"LinkHints.activateHover":[2,0,0,{m:32,showUrl:1}],
"LinkHints.activateLeave":[2,0,0,{m:33}],"LinkHints.activateMode":[2,0,0,{m:0}],
"LinkHints.activateModeToCopyLinkText":[2,0,0,{m:38}],"LinkHints.activateModeToCopyLinkUrl":[2,0,0,{m:40}],
"LinkHints.activateModeToDownloadImage":[2,0,0,{m:35}],"LinkHints.activateModeToDownloadLink":[2,0,0,{m:42}],
"LinkHints.activateModeToEdit":[2,0,1,{m:67}],"LinkHints.activateModeToFocus":[2,0,1,{m:34}],
"LinkHints.activateModeToHover":[2,0,0,{m:32,showUrl:1}],"LinkHints.activateModeToLeave":[2,0,0,{m:33}],
"LinkHints.activateModeToOpenImage":[2,0,0,{m:36}],"LinkHints.activateModeToOpenIncognito":[2,0,0,{m:43}],
"LinkHints.activateModeToOpenInNewForegroundTab":[2,0,0,{m:3}],"LinkHints.activateModeToOpenInNewTab":[2,0,0,{m:2}],
"LinkHints.activateModeToOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateModeToSearchLinkText":[2,0,0,{m:37}],
"LinkHints.activateModeToSelect":[2,0,0,{m:66}],"LinkHints.activateModeToUnhover":[2,0,0,{m:33}],
"LinkHints.activateModeWithQueue":[2,0,0,{m:18}],"LinkHints.activateOpenImage":[2,0,0,{m:36}],
"LinkHints.activateOpenIncognito":[2,0,0,{m:43}],"LinkHints.activateOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateOpenVomnibar":[2,0,1,{m:65}],
"LinkHints.activateSearchLinkText":[2,0,0,{m:37}],"LinkHints.activateSelect":[2,0,0,{m:66}],
"LinkHints.activateUnhover":[2,0,0,{m:33}],"LinkHints.activateWithQueue":[2,0,0,{m:18}],"LinkHints.click":[2,0,0,{
direct:true,m:0}],"LinkHints.unhoverLast":[7,0,1,{u:true}],"Marks.activate":[3,0,0],"Marks.activateCreate":[3,0,0,{
mode:"create"}],"Marks.activateCreateMode":[3,0,0,{mode:"create"}],"Marks.activateGoto":[3,0,0],
"Marks.activateGotoMode":[3,0,0],"Marks.clearGlobal":[16,1,1],"Marks.clearLocal":[16,1,1,{local:true}],
"Vomnibar.activate":[9,1,0],"Vomnibar.activateBookmarks":[9,1,1,{mode:"bookm"}],
"Vomnibar.activateBookmarksInNewTab":[9,1,1,{mode:"bookm",newtab:1}],"Vomnibar.activateEditUrl":[9,1,0,{url:true}],
"Vomnibar.activateEditUrlInNewTab":[9,1,0,{url:true,newtab:1}],"Vomnibar.activateHistory":[9,1,1,{mode:"history"}],
"Vomnibar.activateHistoryInNewTab":[9,1,1,{mode:"history",newtab:1}],"Vomnibar.activateInNewTab":[9,1,0,{newtab:1}],
"Vomnibar.activateTabs":[9,1,1,{mode:"tab",newtab:1}],"Vomnibar.activateTabSelection":[9,1,1,{mode:"tab",newtab:1}],
"Vomnibar.activateUrl":[9,1,0,{url:true}],"Vomnibar.activateUrlInNewTab":[9,1,0,{url:true,newtab:1}],
addBookmark:[11,1,0],autoCopy:[11,0,1,{copy:true}],autoOpen:[11,0,1,{o:1}],blank:[0,1,0],clearCS:[14,1,1],
clearContentSetting:[14,1,1],clearContentSettings:[14,1,1],clearFindHistory:[15,1,1],closeDownloadBar:[47,1,1,{all:1}],
closeOtherTabs:[33,1,1,{other:true}],closeSomeOtherTabs:[33,1,0],closeTabsOnLeft:[33,1,0,{$count:-1e6}],
closeTabsOnRight:[33,1,0,{$count:1e6}],captureTab:[13,1,1],copyCurrentTitle:[17,1,1,{type:"title"}],
copyCurrentUrl:[17,1,1],copyWindowInfo:[17,1,0,{type:"window"}],createTab:[18,1,20],debugBackground:[29,1,1,{reuse:1,
url:"chrome://extensions/?id=$id",id_mask:"$id",url_mask:""}],discardTab:[19,1,0],dispatchEvent:[8,1,0],
duplicateTab:[20,1,20],editText:[13,0,0],enableCSTemp:[40,1,0,{incognito:true}],enableContentSettingTemp:[40,1,0,{
incognito:true}],enterFindMode:[5,1,1,{active:true,selected:true}],enterInsertMode:[2,1,1,{insert:true}],
enterVisualLineMode:[10,1,1,{mode:"line"}],enterVisualMode:[10,1,1],firstTab:[22,1,0,{absolute:true}],
focusInput:[12,0,0],focusOrLaunch:[29,1,1,{reuse:1}],goBack:[0,0,0,{$count:-1}],goForward:[0,0,0],goNext:[1,1,0,{
sed:true}],goPrevious:[1,1,0,{sed:true,rel:"prev"}],goToRoot:[23,1,0,{}],goUp:[23,1,0,{$count:-1,type:"frame"}],
joinTabs:[24,1,0],lastTab:[22,1,0,{$count:-1,absolute:true}],mainFrame:[25,1,1],moveTabLeft:[26,1,0,{$count:-1}],
moveTabRight:[26,1,0],moveTabToIncognito:[27,1,1,{incognito:true}],moveTabToNewWindow:[27,1,0],
moveTabToNextWindow:[28,1,0],newTab:[18,1,20],nextFrame:[3,1,0],nextTab:[22,1,0],openBookmark:[49,1,0],
openCopiedUrlInCurrentTab:[29,1,1,{reuse:0,copied:true}],openCopiedUrlInNewTab:[29,1,20,{copied:true}],
openUrl:[29,1,20],parentFrame:[4,1,0],passNextKey:[9,0,0],performAnotherFind:[5,1,0,{index:"other"}],
performBackwardsFind:[5,1,0,{$count:-1}],performFind:[5,1,0],previousTab:[22,1,0,{$count:-1}],quickNext:[22,1,0],
reload:[0,0,1,{r:1}],reloadGivenTab:[30,1,0,{single:true}],reloadTab:[30,1,0],removeRightTab:[31,1,0],
removeTab:[32,1,0],reopenTab:[34,1,1],reset:[48,1,1],restoreGivenTab:[35,1,0,{one:true}],restoreTab:[35,1,25],
runKey:[36,1,0],scrollDown:[4,0,0],scrollFullPageDown:[4,0,0,{view:2}],scrollFullPageUp:[4,0,0,{dir:-1,view:2}],
scrollLeft:[4,0,0,{dir:-1,axis:"x"}],scrollPageDown:[4,0,0,{dir:.5,view:2}],scrollPageUp:[4,0,0,{dir:-.5,view:2}],
scrollPxDown:[4,0,0,{view:1}],scrollPxLeft:[4,0,0,{dir:-1,axis:"x",view:1}],scrollPxRight:[4,0,0,{axis:"x",view:1}],
scrollPxUp:[4,0,0,{dir:-1,view:1}],scrollRight:[4,0,0,{axis:"x"}],scrollSelect:[14,0,0],scrollTo:[4,0,0,{dest:"min"}],
scrollToBottom:[4,0,0,{dest:"max"}],scrollToLeft:[4,0,0,{axis:"x",dest:"min"}],scrollToRight:[4,0,0,{axis:"x",dest:"max"
}],scrollToTop:[4,0,0,{dest:"min"}],scrollUp:[4,0,0,{dir:-1}],searchAs:[11,0,1,{s:1,copied:true,selected:true}],
searchInAnother:[37,1,1],sendToExtension:[38,1,0],showHelp:[7,1,1],showHUD:[39,1,1],showTip:[39,1,1],
simBackspace:[12,0,1,{act:"backspace"}],simulateBackspace:[12,0,1,{act:"backspace"}],sortTabs:[24,1,0,{sort:"recency",
windows:"current"}],switchFocus:[12,0,1,{act:"switch"}],toggleCS:[40,1,0],toggleContentSetting:[40,1,0],
toggleLinkHintCharacters:[6,1,1,{key:"linkHintCharacters"}],toggleMuteTab:[41,1,1],togglePinTab:[42,1,0],
toggleStyle:[15,0,1],toggleSwitchTemp:[6,1,1],toggleViewSource:[43,1,1,{opener:true}],toggleReaderMode:[43,1,1,{
reader:true,reuse:0,opener:true}],toggleVomnibarStyle:[44,1,1,{style:"dark"}],visitPreviousTab:[46,1,0],wait:[0,1,0,{
wait:"count"}],zoom:[45,1,0],zoomIn:[45,1,0],zoomOut:[45,1,0,{$count:-1}],zoomReset:[45,1,0,{reset:true}]},x={
__proto__:null,newtab:2,queue:18,"cur-queue":16,"new-active":3,"newtab-active":3,hover:32,unhover:33,leave:33,focus:34,
"download-media":35,"download-image":35,image:36,"open-image":36,media:36,search:37,"search-text":37,copy:38,
"copy-text":38,"copy-list":55,"copy-url":40,"copy-url-list":57,download:42,incognito:43,"edit-url":64,edit:65,
"edit-text":65,input:67,"focus-input":67,editable:67,"focus-editable":67,visual:66,select:66},
t.it=["character","word","","lineboundary","line","sentence","paragraphboundary","paragraph","documentboundary"],t.at={
l:1,h:0,j:9,k:8,$:7,0:6,"}":15,"{":14,")":11,"(":10,w:5,W:5,e:3,b:2,B:2,G:17,gg:16,o:20,a:-2,g:-2,aw:21,as:25,ap:26,
"a}":26,y:31,Y:32,C:33,"c-s-c":36,p:34,P:35,n:47,N:46,f1:48,"a-f1":48,v:51,V:52,c:53,"/":55,"c-e":62,"c-y":61,
"c-down":62,"c-up":61},_=function(e){var t,a="",i="".concat("#").concat("!")
;if(!u&&l&&(a="".concat(i).concat("no-check","\n")),a){t=n.F.keyMappings,n.F.keyMappings=void 0;try{
o.ro("keyMappings",a+e)}catch(e){}n.F.keyMappings=t}},2&n.W&&(L(n.me.keyMappings),0===n.he&&(t.at["m-s-c"]=36)),
n.F.keyMappings=function(e){var t,a,i,r,s=n.x,c=n.y;L(e),t=JSON.stringify,a=n.x,i=!!c&&t(n.y)!==t(c),
((r=s?!a||t(s)!==t(a):!!c&&!!a)||i)&&o.so({N:9,m:n.x,t:n.I,k:i?n.y:null}),r&&o.no({N:47,d:{m:n.x}})}});