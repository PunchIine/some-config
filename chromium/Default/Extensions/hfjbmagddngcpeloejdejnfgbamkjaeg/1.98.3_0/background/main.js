"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],function(n,o,e,t,i,u,s,r,c){
var a;Object.defineProperty(o,"__esModule",{value:true}),a=function(n){var o,t=e.z.get(e.L)
;"quickNext"===n&&(n="nextTab"),
(o=r.kt)&&o.get(n)?null==t||4&t.Ln||e.L<0?c.executeShortcut(n,t):i.tabsGet(e.L,function(o){
return c.executeShortcut(n,o&&"complete"===o.status?e.z.get(o.id):null),i.On()}):o&&null!==o.get(n)&&(o.set(n,null),
console.log("Shortcut %o has not been configured.",n))},e.Q=function(){
if(6===e.W)return e.Q?(t.d(u.lo.then.bind(u.lo,e.Q)),void(e.Q=null)):(e.y||(u.io("keyMappings"),
0===e.he&&(r.at["m-s-c"]=36)),u.io("exclusionListenHash"),u.io("vomnibarOptions"),u.io("autoDarkMode"),
u.io("autoReduceMotion"),i.Cn.runtime.onConnect.addListener(function(n){return s.OnConnect(n,0|n.name)}),
i.Cn.runtime.onConnectExternal.addListener(function(n){var o,t=n.sender,i=n.name
;if(t&&s.isExtIdAllowed(t)&&i.startsWith("vimium-c.")&&(o=i.split("@")).length>1){
if(o[1]!==e.e.GitVer)return n.postMessage({N:2,t:1}),void n.disconnect();s.OnConnect(n,32|o[0].slice(9))
}else n.disconnect()}),void i.Cn.extension.isAllowedIncognitoAccess(function(o){e.e.He=false===o,setTimeout(function(){
new Promise(function(o,e){n(["/background/others.js"],o,e)}).then(n=>n),setTimeout(function(){new Promise(function(o,e){
n(["/background/browsing_data_manager.js"],o,e)}).then(n=>n),new Promise(function(o,e){
n(["/background/completion_utils.js"],o,e)}).then(n=>n),new Promise(function(o,e){n(["/background/completion.js"],o,e)
}).then(n=>n)},200)},200)}))},i.Cn.commands.onCommand.addListener(a),u.lo.then(function(){u.io("extAllowList"),
i.Cn.runtime.onMessageExternal.addListener(function(n,o,t){if(s.isExtIdAllowed(o))if("string"!=typeof n){
if("object"==typeof n&&n)switch(n.handler){case"shortcut":var i=n.shortcut;i&&a(i+"");break;case"id":t({name:"Vimium C",
host:location.host,shortcuts:true,injector:e.e.Ee,version:e.e.qe});break;case 99:t({s:n.scripts?e.e.Oe:null,
version:e.e.qe,host:"",h:"@"+e.e.GitVer});break;case"command":c.executeExternalCmd(n,o)}}else c.executeExternalCmd({
command:n},o);else t(false)}),u.io("vomnibarPage",null),u.io("searchUrl",null)}),
i.Bn.onReplaced.addListener(function(n,o){var t,i=e.z.get(o);if(i){for(t of(e.z.delete(o),e.z.set(n,i),i.po))t.s.Sn=n
;for(t of e.U)t.s.Sn===o&&(t.s.Sn=n)}}),e.C.yu=function(n,o,t){setTimeout(function(){e.C.yu(n,o,t)},210)},e.W=4|e.W,
e.Q(),globalThis.onunload=function(n){if(!n||n.isTrusted){for(var o of e.U)o.disconnect();e.z.forEach(function(n){
for(var o of n.po.slice(0))o.disconnect()})}},globalThis.window||(globalThis.onclose=onunload),
e.we<59||!t.nn("\\p{L}","u",0)?t.l("words.txt").then(function(n){
e.ee=n.replace(/[\n\r]/g,"").replace(/\\u(\w{4})/g,function(n,o){return String.fromCharCode(+("0x"+o))})}):e.ee=""});