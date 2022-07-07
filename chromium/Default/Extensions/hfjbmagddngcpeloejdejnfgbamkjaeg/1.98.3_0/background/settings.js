"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],function(e,o,a,t,n,s,i,c){
var r,l,h,m,u,p,w,b,g,d,f,k;Object.defineProperty(o,"__esModule",{value:true
}),o.eo=o.oo=o.ao=o.to=o.no=o.so=o.io=o.co=o.ro=o.lo=o.ho=o.mo=void 0,r=null,l=null,o.mo=localStorage,
o.ho=n.Cn.storage.local,o.lo=Promise.all([0,n.In(n.Cn.runtime.getPlatformInfo).then(function(e){
var o=e.os.toLowerCase(),t=n.Cn.runtime.PlatformOs,s=o===t.WIN?2:o===t.MAC?0:1;a.e.Le=o,a.se.o=a.ie.o=s,a.he=s
}),n.In(o.ho.get.bind(o.ho)).then(function(e){var t,n,s,i,c,r,l,h,m,u=a.me;for(t of(Object.assign(u,o.ao),e=e||{},
Object.entries(e)))t[0]in o.ao?u[t[0]]=t[1]:a.ce.set(t[0],t[1]);if(n=0,o.mo)for(n=o.mo.length,s=0;s<n;s++)i=o.mo.key(s),
c=o.mo.getItem(i),i in o.ao?(l="string"==typeof(r=o.ao[i])?c:false===r||true===r?"true"===c:JSON.parse(c),
u[i]=l):a.ce.set(i,c);for(m in h=n+Object.keys(e).length,a.pe=0===h,a.ie.g=u.grabBackFocus,o.eo)o.to(o.eo[m],u[m],a.ie)
;return h})]).then(function(e){return o.to("i",a.me.ignoreCapsLock,a.ie),a.W=2|a.W,e[2]}),o.lo.then(function(){
a.Q&&a.Q()}),h=function(e,n){var s,i;if(a.me[e]=n,l||(l=t.bn(),setTimeout(m,0)),s=o.ao[e],o.mo.removeItem(e),
l[e]=n!==s?n:null,a.b(e,n),e in o.eo&&o.to(o.eo[e],n,a.ie),i=a.F[e])return i(n,e)},o.ro=h,o.co=function(e,o){
var n=a.ce.get(e);(void 0!==n?n:null)!==o&&(l||(l=t.bn(),setTimeout(m,0)),l[e]=o,null!==o?a.ce.set(e,o):a.ce.delete(e))
},m=function(){var e,a,t=l,n=[];for(e of(l=null,Object.entries(t)))a=e[0],null===e[1]&&(n.push(a),delete t[a])
;o.ho.remove(n),o.ho.set(t)},o.io=function(e,o){return a.F[e](void 0!==o?o:a.me[e],e)},o.so=function(e){
if(6!==e.N)u(e);else if(null==e.d.length)u(e);else{var o=e.d;r?o=o.concat(r):t.d(u.bind(null,e)),r=o,e.d=null}},
u=function(e){var o,t,n;if(6===e.N&&!e.d){for(n of(o=r,t=e.d={},o))t[n]=a.ie[n];r=null}c.uo(function(o){
for(var a of o.po)a.postMessage(e)})},o.no=function(e){t.m(a.U.slice(0),function(o){
return a.U.includes(o)&&o.postMessage(e),1})},o.to=function(e,o,t){switch(e){case"c":case"n":
o=o.toLowerCase().toUpperCase();break;case"i":o=o===!!o?o:o>1||o>0&&!a.he;break;case"l":o=o===!!o?o?2:0:o;break;case"d":
o=o?" D":""}return t?t[e]=o:o},Object.assign(a.F,{extAllowList:function(e){var o,t,n,s=a.X;if(s.forEach(function(e,o){
false!==e&&s.delete(o)
}),e)for(t=(o=e.split("\n")).length,n=/^[\da-z_]/i;0<=--t;)(e=o[t].trim())&&n.test(e)&&s.set(e,true)},
grabBackFocus:function(e){a.ie.g=e},ignoreKeyboardLayout:function(){a.se.l=a.ie.l,o.no({N:47,d:{l:a.ie.l}})},
newTabUrl:function(e){e=/^\/?pages\/[a-z]+.html\b/i.test(e)?n.Cn.runtime.getURL(e):n.qn(s.ir(e)),a.newTabUrl_f=e,
o.co("newTabUrl_f",e)},searchEngines:function(){a.ue.map.clear(),a.ue.keywords=null,
a.ue.rules=i.uu("~:"+a.me.searchUrl+"\n"+a.me.searchEngines,a.ue.map).reverse()},searchUrl:function(e){var t=a.ue.map
;if(e)i.uu("~:"+e,t);else if(t.clear(),t.set("~",{ou:"~",j:"",dr:a.me.searchUrl.split(" ",1)[0]}),a.ue.rules=[],
a.newTabUrl_f=a.ce.get("newTabUrl_f")||"",a.newTabUrl_f)return;o.io("newTabUrl")},mapModifier:function(e){o.no({N:47,d:{
a:e}})},vomnibarPage:function(e){var t=a.ce.get("vomnibarPage_f")
;!t||e?((e=e?n.qn(e):a.me.vomnibarPage)===o.ao.vomnibarPage?e=a.e.Ke:e.startsWith("front/")?e=n.Cn.runtime.getURL(e):(e=s.ir(e),
e=s.Ze(e),e=a.we<50&&!e.startsWith(a.e.xe)?a.e.Ke:e.replace(":version","".concat(parseFloat(a.e.qe)))),
a.vomnibarPage_f=e,o.co("vomnibarPage_f",e)):a.vomnibarPage_f=t}}),o.ao={__proto__:null,allBrowserUrls:false,
autoDarkMode:2,autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:true,exclusionOnlyFirstMatch:false,exclusionRules:[{pattern:":https://mail.google.com/",passKeys:""
}],
extAllowList:"# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
filterLinkHints:false,grabBackFocus:false,hideHud:false,ignoreCapsLock:0,ignoreKeyboardLayout:0,keyboard:[560,33],
keyupTime:120,keyMappings:"",linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",
mapModifier:0,mouseReachable:true,newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
omniBlockList:"",passEsc:"[aria-controls],[role=combobox],#kw.s_ipt",
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:false,scrollStepSize:100,
searchUrl:navigator.language.startsWith("zh")?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:navigator.language.startsWith("zh")?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s\\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s\\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:true,showAdvancedCommands:true,showAdvancedOptions:true,showInIncognito:false,notifyUpdate:true,
smoothScroll:true,vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8",styles:"mono-url"},
userDefinedCss:"",vimSync:null,vomnibarPage:"front/vomnibar.html",waitForEnter:true},o.oo=["showAdvancedCommands"],
o.eo={__proto__:null,filterLinkHints:"f",ignoreCapsLock:"i",ignoreKeyboardLayout:"l",mapModifier:"a",mouseReachable:"e",
keyboard:"k",keyupTime:"u",linkHintCharacters:"c",linkHintNumbers:"n",passEsc:"p",regexFindMode:"r",smoothScroll:"s",
scrollStepSize:"t",waitForEnter:"w"},a.W<6&&(p=n.Cn.runtime.getManifest(),w=location.origin,b=w+"/",
g=p.content_scripts[0].js,d=a.e,f=a.Y,k=function(e){return(47===e.charCodeAt(0)?w:e.startsWith(b)?"":b)+e},
o.ao.newTabUrl=a.ge?"edge://newtab":"chrome://newtab",f.set("about:newtab",1),f.set("about:newtab/",1),
f.set("chrome://newtab",1),f.set("chrome://newtab/",1),a.ge&&(f.set("edge://newtab",1),f.set("edge://newtab/",1)),
f.set("chrome://new-tab-page",2),f.set("chrome://new-tab-page/",2),d.ze=Object.keys(p.commands||{}).map(function(e){
return"quickNext"===e?"nextTab":e}),d.qe=p.version,d.Ae=p.version_name||p.version,d.Je=k(p.options_page||d.Je),
d.ye=null!=p.permissions&&p.permissions.indexOf("clipboardRead")>=0,d.Fe=k(d.Fe),d.Ke=k(o.ao.vomnibarPage),d.We=k(d.Qe),
d.Ue=p.homepage_url||d.Ue,d.Ee=k(d.Ee),g.push("content/injected_end.js"),d.Oe=g.map(k))});