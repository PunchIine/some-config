"use strict";__filename="background/store.js",define(["require","exports"],function(e,n){var t,l,o,r,a
;Object.defineProperty(n,"__esModule",{value:true
}),n.e=n.o=n.r=n.u=n.p=n.f=n.h=n.w=n.b=n.M=n.getNextFakeTabId=n.C=n.j=n.S=n.P=n.V=n.k=n.N=n.B=n.I=n.R=n.x=n.y=n.findBookmark=n.D=n.G=n.H=n.O=n.q=n.A=n.E=n.J=n.L=n.T=n.U=n.z=n.F=n.K=n.Q=n.W=n.X=n.Y=n.Z=n.$=n.ee=n.ne=n.te=n.le=n.oe=n.re=n.ae=n.se=n.ue=n.ie=n.vomnibarPage_f=n.newTabUrl_f=n.ce=n.me=n._e=n.pe=n.fe=n.he=n.de=n.we=n.ge=n.OnSafari=n.OnEdge=n.OnFirefox=n.OnChrome=n.IsLimited=n.be=void 0,
n.be=1,n.IsLimited=!!0,n.OnChrome=!0,n.OnFirefox=!!0,n.OnEdge=!!0,n.OnSafari=!!0,t=navigator.userAgentData,
n.ge=(l=t&&(t.brands||t.uaList))?!!l.find(function(e){return e.brand.includes("Edge")||e.brand.includes("Microsoft")
}):matchMedia("(-ms-high-contrast)").matches,n.we=l?(o=l.find(function(e){return e.brand.includes("Chromium")
}))?o.version:83:(a=navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/))?75==+a[1]&&matchMedia("(prefers-color-scheme)").matches?81:0|a[1]:998,
n.de=999,n.he=2,n.pe=false,n._e=false,n.me={},n.ce=new Map,n.newTabUrl_f="",n.vomnibarPage_f="",n.ie={v:n.we,d:"",
g:false,m:false},n.ue={map:new Map,rules:[],keywords:null},n.se={v:n.we,a:0,c:"",i:0,l:1,m:null,n:0,s:"",t:""},n.ae={
actions:[]},n.re=false,n.ne=false,n.Y=new Map,n.X=new Map,n.W=0,n.F={},n.z=new Map,n.U=[],n.T=new Map,n.L=-1,n.J=-1,
n.E=-1,n.A=1,n.q=null,n.O=null,n.H={Me:[],ve:[],Ce:0,je:0,Se:false},n.G={Pe:null,Ve:new Map,ke:0,Ne:0,Be:0},n.D=new Map,
n.y=null,n.x=null,n.I=0,n.B=0,n.N=null,n.k=1;n.Ie=null,n.Re=null,n.j=function(){},n.C={},r=-4,
n.getNextFakeTabId=function(){return r--},n.M=n.j,n.b=n.j,n.w=null,n.h=function(){return""},n.f=function(){return""},
n.p=function(e){return e},n.u=function(){return null},n.r=null,n.o=null,n.e={xe:"chrome",ye:true,De:0,
Ge:n.ge?/^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/:"chrome-search://local-ntp/local-ntp.html",He:false,
Oe:null,qe:"",Ae:"",GitVer:"360e848",Ee:"/lib/injector.js",HelpDialogJS:"/background/help_dialog.js",
Je:"pages/options.html",Le:"browser",Te:"",Ue:"https://github.com/gdh1995/vimium-c",ze:null,Fe:"pages/show.html",Ke:"",
Qe:"/front/vomnibar.js",We:""}});