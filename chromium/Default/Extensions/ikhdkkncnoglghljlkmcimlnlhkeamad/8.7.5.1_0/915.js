"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[915],{5744:(e,t,n)=>{n.d(t,{$:()=>o});var l=n(451),s=n(5787),a="undefined"!=typeof document?new s.T(document.documentElement,l.ZOf):{isActive:function(){return!0},start:function(){return!0},stop:function(){return!0}},o={alwaysShowFocus:function(){return a.stop()},isActive:function(){return a.isActive()},onlyShowFocusOnTabs:function(){return a.start()}}},7294:(e,t,n)=>{e.exports=n(2408)},4648:(e,t,n)=>{n.d(t,{Z:()=>P});var l=n(3150),s=n.n(l),a=(n(9320),n(7294)),o=n(966),r=n(6983),i=n(1515),c=n(2054),u=n(935),m=n(1922),d=n(9970),p=n(3937),f=n(9554),v=n(5977),h=n(2630),g=n(473),E=n(8172),y=n(7176),C=n(3500),k=n(1587),x=n(1520),b=n(5487),S=n(8028),N=n(2088),R=n(6006);const T=(0,i.Z)(d.q,"secondDestinationLatestSource","selectedAPIs","collapsedAPIs","selectedExternalLinks","source","destination","autoPlay","autoCopy","recentUseLangFrom","recentUseLangTo","sourceTransformNCaml","sourceTransformNoBr","sourceTransformNoComment","sourceTransformRegExps","tipPanelSettingsClosed","historyEnabled","favoritesEnabled","quickLinks","tipQuickLinksClosed","panelCustomStyle","customAPINames","panelSize","panelButtons","textAreaAuto"),z=(0,i.Z)(d.d,["user","noticesUnreadNum"]),I={small:14,middle:18,large:22},P=(0,a.forwardRef)((function(e,t){const{toaster:n,headerLeft:l,headerRight:d,extendOptions:P,showTextArea:A=!1,size:O="small",style:w,hasDragTip:Z,portalContainer:L,showOptionsTip:U=!0}=e,[B,J,M]=(0,m.Z)(T),[F]=(0,m.Z)(z),q=(null==F?void 0:F.user)||null,D=(0,a.useMemo)((()=>{const e=null==B?void 0:B.selectedAPIs,t=null==B?void 0:B.customAPINames;if(e&&t)return(null==q?void 0:q.forever)?[...e,...t]:e}),[null==B?void 0:B.customAPINames,null==B?void 0:B.selectedAPIs,null==q?void 0:q.forever]),H=(0,a.useMemo)((()=>{const e=null==B?void 0:B.collapsedAPIs;return e&&e.length?(0,E.ZP)(D,(t=>{t&&e.forEach((e=>{const n=t.indexOf(e);n>=0&&t.splice(n,1)}))})):D}),[D,null==B?void 0:B.collapsedAPIs]),K=(null==B?void 0:B.quickLinks.filter((e=>e.panel)))||[],Q=B||T,W=I[O],_="small"===O,$="large"===O,j=(null==B?void 0:B.source)||"",X=(0,a.useCallback)((e=>{J({source:e})}),[J]),[G,V]=(0,a.useState)(""),[Y,ee]=(0,a.useState)(""),te=G===Y,ne=(0,a.useRef)(null),[le,se]=(0,a.useState)(!1),{results:ae,queryResult:oe,dispatchResults:re}=(0,h.n)(Y,H,j,null==B?void 0:B.destination),[ie,ce]=(0,a.useState)([]),[,ue]=(0,f.Z)(),{isInFavorites:me,saveOrDelete:de}=(0,g.Z)(Y,re,H),pe=(0,x._)(n),{sourceTransformNCaml:fe,sourceTransformNoBr:ve,sourceTransformNoComment:he,sourceTransformRegExps:ge}=(null==q?void 0:q.vipActivated)?(0,i.Z)(B||T,["sourceTransformNCaml","sourceTransformNoBr","sourceTransformNoComment","sourceTransformRegExps"]):{sourceTransformNCaml:!1,sourceTransformNoBr:!1,sourceTransformNoComment:!1,sourceTransformRegExps:[]},Ee=(0,a.useRef)(""),ye=(0,a.useCallback)((e=>{if(e===Ee.current)return;Ee.current=e,ce((e=>(0,E.ZP)(e,(e=>{e.splice(0)}))));const t=(0,R.L)(e,{sourceTransformNCaml:fe,sourceTransformNoBr:ve,sourceTransformNoComment:he,sourceTransformRegExps:ge});V(t),ee(t)}),[fe,ve,he,ge]),Ce=(0,a.useRef)(ye);Ce.current=ye;const ke=(0,y.Z)(Y);(0,a.useEffect)((()=>{Q.historyEnabled&&ke!==Y&&Y&&ue({type:"save translate record",text:Y})}),[ue,Y,Q.historyEnabled]),(0,a.useEffect)((()=>{Q.secondDestinationLatestSource&&ke!==Y&&Y&&(0,N.e)(Y).then((e=>{null!=e&&"中文(简体)"!==e&&s().storage.local.set({latestSource:e})}))}),[Y,Q.secondDestinationLatestSource]),(0,a.useImperativeHandle)(t,(()=>({select(){var e;null===(e=ne.current)||void 0===e||e.select()},async play(){var e,t;if(!D)return;const n=D[0],l=null===(e=ae.results[n])||void 0===e?void 0:e.result;return n&&(null==l?void 0:l.text)===Ee.current?(0,r.h)({apiId:n,source:l.from,text:l.text,ttsURI:(null===(t=l.phonetic)||void 0===t?void 0:t[0].ttsURI)||l.ttsURI}):void 0},async translate(e,t){if(await M,"text"===e.type)Ce.current(e.text),t&&this.select();else if("image"===e.type)return pe(e.dataURI).then((e=>{Ce.current(e),t&&this.select()}))}})),[pe,M,ae.results,D]);const xe=(0,a.useMemo)((()=>_?{width:6,height:6,borderRadius:3,right:3,top:1}:$?{width:10,height:10,borderRadius:5,right:8,top:6}:{width:8,height:8,borderRadius:4,right:5,top:3}),[$,_]),be=a.createElement(o.zx,{icon:a.createElement(o.JO,{icon:"cog",iconSize:W}),small:_,large:$,minimal:!0,active:le,className:"settings",onClick:()=>{se((e=>!e))},title:"快捷设置"});return a.createElement(a.Fragment,null,(null==B?void 0:B.panelCustomStyle)&&a.createElement("style",null,B.panelCustomStyle),a.createElement("div",{id:"translate-panel",className:"size-"+O,style:w},a.createElement("div",{className:"fixed"},a.createElement("div",{className:"header"},a.createElement("div",{className:"left"},l,(null==B?void 0:B.panelButtons.includes("media"))&&a.createElement(b.j,{isSmall:_,isLarge:$,iconSize:W,onSelect:e=>{pe(e).then(ye,c.Z)},portalContainer:L}),(null==B?void 0:B.panelButtons.includes("microphone"))&&a.createElement(S.k,{isSmall:_,isLarge:$,iconSize:W,onSelect:ye,portalContainer:L}),(null==B?void 0:B.panelButtons.includes("folder-open"))&&a.createElement(o.zx,{small:_,large:$,minimal:!0,icon:a.createElement(o.JO,{icon:"folder-open",iconSize:W}),onClick:()=>{s().runtime.sendMessage({action:"open options page",suffix:"#/stars"})},title:"打开收藏夹"}),(null==B?void 0:B.panelButtons.includes("history"))&&a.createElement(o.zx,{small:_,large:$,minimal:!0,icon:a.createElement(o.JO,{icon:"history",iconSize:W}),onClick:()=>{s().runtime.sendMessage({action:"open options page",suffix:"#/history"})},title:"打开历史记录"})),a.createElement("div",{className:"drag-block",title:Z?"按住不放可以拖动":void 0}),a.createElement("div",{className:"right"},!!ie.length&&a.createElement(o.zx,{icon:a.createElement(o.JO,{icon:"undo",iconSize:W}),small:_,large:$,minimal:!0,title:"返回上一次翻译",onClick:()=>{const e=(0,u.Z)(ie);e&&(V(e),ee(e)),ce((e=>(0,E.ZP)(e,(e=>{e.pop()}))))}}),!!(null==F?void 0:F.noticesUnreadNum)&&a.createElement("div",{style:{fontSize:0,position:"relative"}},a.createElement(o.zx,{icon:a.createElement(o.JO,{icon:"notifications",iconSize:W}),small:_,large:$,minimal:!0,title:`你有 ${F.noticesUnreadNum} 条未读消息`,onClick:()=>{s().runtime.sendMessage({action:"open options page",suffix:"?notices"})}}),a.createElement("div",{style:{position:"absolute",background:"rgb(243,1,1)",...xe}})),B&&a.createElement(a.Fragment,null,B.favoritesEnabled&&a.createElement(o.zx,{icon:a.createElement(o.JO,{icon:me?"star":"star-empty",iconSize:W}),disabled:!Y,small:_,large:$,minimal:!0,title:me?"从收藏夹中删除":"添加到收藏夹",onClick:de}),B.tipPanelSettingsClosed&&be,!B.tipPanelSettingsClosed&&a.createElement(o.J2,{enforceFocus:!1,content:a.createElement("div",{className:"bp3-text-small",style:{width:"200px",padding:"5px"}},"添加 / 隐藏翻译源、语种切换、鼠标悬浮取词开关和显示翻译文本开关在这里。",a.createElement("a",{onClick:()=>{J({tipPanelSettingsClosed:!0})}},"不再提示")),canEscapeKeyClose:!1,isOpen:!B.tipPanelSettingsClosed&&U,portalContainer:L},be)),d)),a.createElement(o.UO,{isOpen:le,keepChildrenMounted:!0},a.createElement(v.Z,{source:j,setSource:X,options:B,setOptions:J,user:q,size:O,portalContainer:L},P)),A&&a.createElement(k.H,{isLarge:$,isSmall:_,iconSize:W,value:G,onChange:V,onTranslate:e=>{ye(null==e?G:e)},ref:ne,hideBtn:te||!G,auto:(null==B?void 0:B.textAreaAuto)||!1})),a.createElement("div",{className:"body",style:te?void 0:{opacity:.7}},!Y&&a.createElement("p",null,"请输入需要翻译的文本。"),Y&&B&&(null==D?void 0:D.map(((e,t)=>{const n=ae.results[e];return a.createElement(r.Z,{portalContainer:L,key:e,apiId:e,result:n,size:O,queryResult:t=>{oe(Y,e,t||j)},autoPlay:B.autoPlay&&0===t,autoCopy:!!(null==q?void 0:q.vipActivated)&&B.autoCopy&&0===t,setQuery:e=>{ce((e=>(0,E.ZP)(e,(e=>{e.push(Y)})))),ee(e),V(e)},collapse:B.collapsedAPIs.includes(e),onCollapseChange:()=>{J((t=>{const n=t.collapsedAPIs.indexOf(e);n>=0?t.collapsedAPIs.splice(n,1):t.collapsedAPIs.push(e)}))}})}))),D&&!D.length&&a.createElement(o.tR,{className:"no-api",title:"你隐藏了所有翻译源",description:"请添加一个翻译源来显示翻译结果。",action:a.createElement(o.J2,{portalContainer:L,content:a.createElement(o.v2,null,a.createElement(p.Z,null))},a.createElement(o.zx,{icon:"add",small:_,large:$,text:"添加翻译源"}))}),!!(null==B?void 0:B.selectedExternalLinks.length)&&a.createElement("div",{className:"external-translators"},B.selectedExternalLinks.map((e=>{const t=C.F.find((t=>t.id===e));return t?a.createElement("div",{key:e},a.createElement(o.AN,{small:_,large:$,text:t.name,target:"_blank",href:t.generateLink(Y,B.destination,j)})):null}))),B&&!B.tipQuickLinksClosed&&Y&&a.createElement(o.UW,{style:{marginBottom:8,fontSize:12}},"下方是预定义的三个快捷链接，你可以前往",a.createElement("a",{onClick:()=>{s().runtime.sendMessage({action:"open options page",suffix:"#/panel"})}},"“设置” - “翻译面板”")," ","- “快捷链接”中修改或删除它们。",a.createElement("a",{onClick:()=>{J({tipQuickLinksClosed:!0})}},"不再提示")),!!K.length&&Y&&a.createElement("div",{className:"quick-links"},K.map((e=>a.createElement("a",{key:e.name,href:e.link.replace("%s",encodeURIComponent(Y)),target:"_blank",rel:"noreferrer"},e.name)))))))}))},2852:(e,t,n)=>{n.d(t,{oJ:()=>a});var l=n(985),s=n(1227);n.n(s)()("hotkeys");const a={ctrl:l.eE?"metaKey":"ctrlKey",alt:"altKey",shift:"shiftKey"};l.eE&&l.vU},7290:(e,t,n)=>{n.d(t,{O:()=>u});var l=n(7294),s=n(966),a=n(1515),o=n(9970),r=n(3150),i=n.n(r);const c=(0,a.Z)(o.q,["autoClipboard","autoClipboardImage"]);function u(e){const{onTranslate:t,onDismiss:n}=e,[a,o]=(0,l.useState)(null),[r,u]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{i().storage.local.get(c).then((async({autoClipboard:e,autoClipboardImage:n})=>{if(!1===e&&!1===n)return;const l=await i().runtime.sendMessage({action:"read clipboard"});if(l&&("text"!==l.type||l.text.trim()))if("text"===l.type)switch(e){case null:o(l);break;case!0:t(l);break;case!1:return}else if("image"===l.type)switch(n){case null:o(l);break;case!0:t(l);break;case!1:return}}))}),[t]),a?l.createElement(s.UW,{intent:"primary"},l.createElement(s.H5,null,"是否要翻译剪切板内的",l.createElement("i",null,"text"===a.type?"文本":"图片"),"？"),l.createElement(s.XZ,{label:"记住我的选择，下次不再询问",className:"ask-clipboard-checkbox",checked:r,onChange:e=>{u(e.target.checked)}}),l.createElement(s.zx,{style:{marginRight:15},text:"翻译",onClick:()=>{t(a),r&&i().storage.local.set({["text"===a.type?"autoClipboard":"autoClipboardImage"]:!0}),o(null)}}),l.createElement(s.zx,{text:"不翻译",onClick:()=>{r&&i().storage.local.set({["text"===a.type?"autoClipboard":"autoClipboardImage"]:!1}),o(null),n()}})):null}},1627:(e,t,n)=>{n.d(t,{H:()=>s});var l=n(7294);function s(e){const[t,n]=(0,l.useState)({v:!1,h:!1});return(0,l.useEffect)((()=>{if(!e)return;const t=()=>{n(function(e){return{h:e.scrollWidth>e.clientWidth,v:e.scrollHeight>e.clientHeight}}(e))};t();const l=new ResizeObserver(t);return l.observe(e),()=>{l.unobserve(e)}}),[e]),t}},5127:(e,t,n)=>{n.d(t,{m:()=>s});var l=n(3364);class s extends Error{constructor(e,t){super(e),null!==(null==t?void 0:t.type)&&(this.type=(null==t?void 0:t.type)||"OTHER"),this.link=null==t?void 0:t.link,this.context=null==t?void 0:t.context,this.errors=null==t?void 0:t.errors,this.noRetry=null==t?void 0:t.noRetry}toJSON(){var e;return{type:this.type,message:this.message,link:this.link,errors:null===(e=this.errors)||void 0===e?void 0:e.map((e=>(0,l.R)(e).toJSON()))}}clone(){return new s(this.message,{context:this.context,type:this.type,link:this.link,errors:this.errors,noRetry:this.noRetry})}}},9989:(e,t,n)=>{n.d(t,{D:()=>s});var l=n(5127);function s(e){return e instanceof l.m?e:e instanceof Error?new l.m(e.message,{type:null}):new l.m("划词翻译内部出现了一个预期之外的错误，如果你看到了这条消息，请反馈给我。",{type:null})}}}]);