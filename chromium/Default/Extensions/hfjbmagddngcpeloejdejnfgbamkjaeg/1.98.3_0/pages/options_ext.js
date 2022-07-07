"use strict";__filename="pages/options_ext.js",define(["require","exports","./async_bg","./options_base","./options_defs","./options_permissions","./options_wnd"],function(n,e,o,t,i,r,l){function u(n){return new Date(+n-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}function c(n,e){return e&&("omniBlockList"===n||s(e))?"$base64:"+btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(n,e){return String.fromCharCode(parseInt(e,16))})):e}function s(n){var e,o;if(null==y){for(o of(e=[],t.r.g("omniBlockList").split("\n")))o.trim()&&"#"!==o[0]&&e.push(o);y=e.length>0&&new RegExp(e.map(function(n){return n.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")}).join("|"),"")}return false!==y&&y.test(n)}function f(n){return n instanceof Array&&(n=n.join("\n").trimRight()),(n=n.replace(/\r\n?/g,"\n").replace(/\xa0/g," ")).replace(/^\$base64:(.*)/gm,function(n,e){try{return decodeURIComponent([].map.call(atob(e),function(n){return"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)}).join(""))}catch(n){}return n})}function a(n,e,c){return __awaiter(this,void 0,void 0,function*(){var s,a,d,m,g,y,h,b,_,w,S,V,O,A,k,C,R=this,j=e.environment,x=j&&j.platform||"",L=j&&j.extension&&j.extension+""||"",T=parseFloat(L||0)||0,N=T>1?L.split(".",2).join("."):"",B=T>parseFloat(r.manifest.version);if(x&&(x=(""+x).slice(0,10)),confirm(t.t("confirmImport",[t.t(true!==c?"backupFile":"recommendedFile"),N?t.t("fileVCVer").replace("*",N):"",(N?t.t("fileVCVer_2").replace("*",N):"")+(B?t.t("fileVCNewer"):""),x?t.t("filePlatform",[t.t(x)||x[0].toUpperCase()+x.slice(1)]):t.t("commonPlatform"),n?t.t("atTime",[u(n)]):t.t("before")]))){for(_ in s=new Date,a=v(s,false),Object.setPrototypeOf(e,null),(d=e["chromium"in e?"chromium":"chrome"])&&"object"==typeof d&&Object.assign(e,d),null==e.vimSync&&(g=(m=t.r.g("vimSync"))&&confirm(t.t("keepSyncing")),e.vimSync=g||null==m&&null,m&&console.log("Before importing: You chose to",g?"keep settings synced.":"stop syncing settings.")),y=function(n,e,o,t){var i=arguments.length>3,r=i?t:o,l=["%s %c%s",n,"color:darkred",e];r="string"!=typeof r||r.length<=72?r:r.slice(0,71).trimRight()+" \u2026",i&&l.push(o),l.push(r),h++,console.log.apply(console,l)},h=0,console.group("Import settings at "+u(+s+1)),o.y(8),n>1e4?console.info("load settings saved at %c%s%c.","color:darkblue",u(n),"color:auto"):console.info("load the settings:",c?"recommended.":"saved before."),(b=function(n){return n.split(/\s+/g).forEach(function(n){return n&&delete e[n]})})("name time environment author description chrome chromium firefox edge safari"),e)"@"===_[0]&&delete e[_];for(_ in w=function(n){var o=e[n];"string"==typeof o&&o.includes("extension://",2)&&(/^(chrome|edge)-/.test(o)?o.startsWith("edge-")&&(e[n]=o.replace("edge-","chrome-")):delete e[n])},w("vomnibarPage"),w("newTabUrl"),S=t.u(),V=t.r.p,O=t.s.i,S)S[_]===V[_]||_ in e||(e[_]=null);for(_ in b("findModeRawQueryList innerCSS findCSS omniCSS newTabUrl_f vomnibarPage_f\n      focusNewTabContent dialogMode"),A={__proto__:null,extWhiteList:"extAllowList",phraseBlacklist:"omniBlockList"})_ in e&&(e[A[_]]=e[_],delete e[_]);e.vimSync!==t.r.g("vimSync")&&(y("import","vimSync",e.vimSync),yield t.r.k("vimSync",e.vimSync),yield O.vimSync.R()),void 0!==(k=O.keyMappings)&&(delete O.keyMappings,O.keyMappings=k),yield Promise.all(Object.values(O).map(function(n){return __awaiter(R,void 0,void 0,function*(){var o=n.x,i=e[o];if(delete e[o],o in V)return null==i?i=V[o]:("string"==typeof V[o]&&(i=f(i)),i=yield n.D(i)),n.G(yield n.C(),i)?n.O?void 0:n.R():(y("import",o,i),yield t.r.k(o,i),o in t.r.b&&t.s.I.push(o),yield n.R(),n.M())})})).catch(function(n){y("[ERROR] importing options failed","cause:",n)}),yield Promise.all(Object.keys(e).map(function(n){return __awaiter(R,void 0,void 0,function*(){var i=e[n];if(null==i)if(n in V){if(i=V[n],t.r.g(n)!==i)return y("reset",n,i),t.r.k(n,i)}else if(n.includes("|"))return y("remove",n,"(from local)"),o.m(28,{key:n,val:null});if("string"==typeof V[n]&&(i=f(i)),n in V){if(t.r.g(n)!==i)return y("update",n,i),t.r.k(n,i)}else if(n.includes("|"))return y("save",n,i=""+i),o.m(28,{key:n,val:i})})})).catch(function(n){y("[ERROR] saving fields failed","cause:",n)}),o.y(0,8),yield 0,i.saveBtn.onclick(false),l.advancedOptBtn.getAttribute("aria-checked")!==""+t.r.g("showAdvancedOptions")&&l.advancedOptBtn.onclick(null,true),h<=0?console.info("no differences found."):a.options>0&&console.info("[message] you may recover old configuration of ".concat(a.options," option(s), by open the blob: URL below ON THIS TAB:\n%c").concat(URL.createObjectURL(a.blob)),"color: #15c;"),console.info("import settings: finished."),console.groupEnd(),(C=VApi&&VApi.y().r)&&C.querySelector("#HCls")&&p("force"),VApi&&VApi.h(1,0,t.t("importOK"))}else VApi&&VApi.h(1,0,t.t("cancelImport"))})}function d(n,e,i){var r,l,u,c,s,f=null,d=null,p="";try{(r=m(i?e:e.replace(/\xa0/g," ")))instanceof Error?d=r:r?f=r:p=t.t("notJSON")}catch(n){d=n}return null!=d&&(p=d?(d.message||d)+"":t.t("exc")+(""!==d?d:t.t("unknown")),p=(l=/^(\d+):(\d+)$/.exec(p))?t.t("JSONParseError",[l[1],l[2]]):p),f?(n=+new Date(f.time||("object"==typeof n?+n:n))||0,"Vimium C"!==f.name&&"Vimium++"!==f.name||n<1e4&&n>0?(p=t.t("notVCJSON"),alert(p)):(u=t.s.i.keyMappings.H?Promise.resolve():o.import2("./options_checker.js"),c=n,s=f,void u.then(function(){setTimeout(a,17,c,s,i)}))):alert(p)}function m(n){function e(){return/a?/.test("")}function o(n){for(var e=n.length;i.length<e;i+=i);return i.slice(0,e)}var t,i,r,l,u,c,s;if(!n||!(n=n.trimRight()))return null;i=" ";try{return r=JSON.parse(n.replace(/"(?:\\[^\r\n]|[^"\\\r\n])*"|'(?:\\[^\r\n]|[^'\\\r\n])*'|(?:\/\/|#)[^\r\n]*|\/\*[^]*?\*\//g,function(n){var e=n[0];return"/"===e||"#"===e?n.startsWith("/*")?n.replace(/[^\r\n]+/g,o):o(n):n})),e(),r}catch(n){if(t=/\b(?:position (\d+)|line (\d+) column (\d+))/.exec(n+""),e(),!t||!t[0])throw n}return t[2]?(l=+t[2],u=+t[3]):+t[1]>0?(c=n.includes("\r")?n.includes("\r\n")?"\r\n":"\r":"\n",u=(s=n.slice(0,+t[1]).split(c))[(l=s.length)-1].length+1):l=u=1,new SyntaxError(l+":"+u)}var p,g,v,y,h,b,_;Object.defineProperty(e,"__esModule",{value:true}),p=function(n){if(VApi&&VApi.z){var e,t=VApi.y().r;if(n&&"force"!==n&&n.preventDefault(),t&&(e=t.querySelector("#HCls"))&&"force"!==n&&null!=t.querySelector(".HelpCommandName"))return void o.simulateClick(e);VApi.r[0](38,{i:1,q:[{n:24,q:null}]},!n&&location.hash.length>1?function(){var n,e=VApi&&VApi.y(),o=e&&e.r&&e.r.querySelector("#HDlg");o&&((n=o.parentElement||o).remove=function(){HTMLElement.prototype.remove.call(n),location.hash=""})}:function(){})}else o.nn.then(p.bind(null,n))},o.$("#showCommands").onclick=p,t.e.prototype.en=function(n){var e,o,i,r,l,u;if(!n||!this.on){for(l of(o=/^([:^]?[a-z\-?*]+:\/\/)?((?:[^\/]|\/])+)(\/[^\]].*|\/?$)/,e=this.F()))(r=o.exec(i=l.pattern.replace("(?:[^./]+\\.)*?","*.")))&&r[1]&&r[2]&&(i=r[3]?r[3].replace(/\\\./g,"."):"",(r=r[2].replace(/\\\./g,".").split(".")).reverse(),i=r.join(".")+i),l.tn=i;e.sort(function(n,e){return n.tn<e.tn?-1:n.tn===e.tn?0:1}),this.j(e),this.N(),n&&(u=this,this.on=setTimeout(function(n,e){n.firstChild.data=e,u.on=0},1e3,n,n.firstChild.data),n.firstChild.data=t.t("3_2"))}},o.$("#exclusionSortButton").onclick=function(){t.s.i.exclusionRules.en(this)},g="",v=function(n,e){var i,l,u,s,f,a,d,m,p,g,v=Object.create(null);for(f of(v.name="Vimium C",e||(v["@time"]=n.toLocaleString(),v.time=n.getTime()),v.environment={extension:r.manifest.version,platform:t.r.f},v.environment.chromium=o.vt,i=t.u(),l=t.r.p,u=Object.keys(i).sort(),y=null,s=function(n){var e=i[n],o=l[n];if(e===o)return"continue";"string"!=typeof o?v[n]=e:e.includes("\n")?(v[n]=e.split("\n").map(function(e){return c(n,e)})).push(""):v[n]=c(n,e)},u))s(f);for(y=null,d=(a=JSON.stringify(v,null,"\t")+"\n").split("\n"),m=0;m<d.length;m++)d[m].replace(/[\u4e00-\u9fff]/g,"  ").length+1>120&&/^\s+"\w+":/.test(d[m])&&(p=d[m].split(":",1)[0]+":",g=(g=d[m].slice(p.length).trimLeft()).replace(/[\u4e00-\u9fff]/g,"  ").length+4>120?g:"\t\t"+g,d[m]=p+"\n"+g);return a=d.join("\n"),"win"===v.environment.platform&&(a=a.replace(/\n/g,"\r\n")),{blob:new Blob([a],{type:"application/json",endings:"native"}),options:u.length}},i.exportBtn.onclick=function(n){var e,t,i,r,l,c;g&&(URL.revokeObjectURL(g),g=""),e=new Date,i=v(e,t=!!n&&(n.ctrlKey||n.metaKey||n.shiftKey)).blob,r=u(e),l="vimium_c-",l+=t?"settings":r.replace(/[\-:]/g,"").replace(" ","_"),l+=".json",(c=document.createElement("a")).download=l,c.href=URL.createObjectURL(i),o.simulateClick(c),g=c.href,console.info("EXPORT settings to %c%s%c at %c%s%c.","color:darkred",l,"color:auto","color:darkblue",r,"color:auto")},y=null,(h=o.$("#settingsFile")).onclick=null,h.onchange=function(){var n,e,o,i=this.files[0];this.value="",i&&(n=t.s.i.vimSync.w?102400:10485760,i.size&&i.size>n?alert(t.t("JSONTooLarge",[i.name,n/1024])):(e=new FileReader,o=i.lastModified||i.lastModifiedDate||0,e.onload=function(){return d(o,this.result,false)},e.readAsText(i)))},(h=o.$("#importOptions")).onclick=null,h.onchange=function(){o.$("#importButton").focus(),"exported"!==this.value?fetch("../settings-template.json").then(function(n){return n.text()}).then(function(n){return d(0,n,true)}):o.simulateClick(o.$("#settingsFile"))},h=null,l.delayed_task&&(_=l.delayed_task,l.clear_delayed_task(),(b=o.$(_[0])).onclick&&b.onclick(_[1]))});