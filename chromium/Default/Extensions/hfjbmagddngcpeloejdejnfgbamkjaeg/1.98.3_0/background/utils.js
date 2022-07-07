"use strict";__filename="background/utils.js",define(["require","exports","./store"],function(n,t,e){
var r,o,a,u,c,i,s,f,l,m,d,b,p;Object.defineProperty(t,"__esModule",{value:true}),
t.t=t.a=t.c=t.i=t.l=t.m=t.d=t.g=t.v=t.nn=t.tn=t.en=t.rn=t.on=t.an=t.un=t.cn=t.in=t.sn=t.fn=t.ln=t.mn=t.dn=t.bn=t.pn=t.gn=t.vn=t.wn=t.hn=t.yn=t.kn=t.jn=t.xn=void 0,
t.xn=/\s+/g,t.jn=/^[a-z][\+\-\.\da-z]+:\/\//,t.kn=function(n,t){for(var e in t)void 0!==n[e]||(n[e]=t[e]);return n},
t.yn=function(n){return Array.from(n.keys())},r=/a?/,t.hn=function(){return r.test("")},t.wn=function(n,t,e){
var r=e<n.length&&e>t?n.charCodeAt(e-1):0;return n.slice(t,e+=r>=55296&&r<56320?1:8205===r&&e>t+1?-1:0)},
t.vn=function(n,t,e){var r=t>0&&t<n.length?n.charCodeAt(t):0
;return n.slice(t+=r>=56320&&r<=57343?-1:8205===r&&t<n.length-1&&t<e-1?1:0,e)},o=function(n){function e(n){
var t=n.charCodeAt(0);return 38===t?"&amp;":39===t?"&apos;":t<39?"&quot;":60===t?"&lt;":"&gt;"}return t.gn=function(n){
return n.replace(/["&'<>]/g,e)},t.gn(n)},t.gn=o,t.pn=function(n){
return 58===n.charCodeAt(10)&&"javascript"===n.slice(0,10).toLowerCase()
},a=["","",".ac.ad.ae.af.ag.ai.al.am.ao.aq.ar.as.at.au.aw.ax.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cw.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gb.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.me.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.ni.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.py.qa.re.ro.rs.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.ss.st.su.sv.sx.sy.sz.tc.td.tf.tg.th.tj.tk.tl.tm.tn.to.tr.tt.tv.tw.tz.ua.ug.uk.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.za.zm.zw",".aaa.abb.abc.aco.ads.aeg.afl.aig.anz.aol.app.art.aws.axa.bar.bbc.bbt.bcg.bcn.bet.bid.bio.biz.bms.bmw.bnl.bom.boo.bot.box.buy.bzh.cab.cal.cam.car.cat.cba.cbn.cbs.ceb.ceo.cfa.cfd.com.cpa.crs.csc.dad.day.dds.dev.dhl.diy.dnp.dog.dot.dtv.dvr.eat.eco.edu.esq.eus.fan.fit.fly.foo.fox.frl.ftr.fun.fyi.gal.gap.gdn.gea.gle.gmo.gmx.goo.gop.got.gov.hbo.hiv.hkt.hot.how.ibm.ice.icu.ifm.inc.ing.ink.int.ist.itv.iwc.jcb.jcp.jio.jlc.jll.jmp.jnj.jot.joy.kfh.kia.kim.kpn.krd.lat.law.lds.llc.llp.lol.lpl.ltd.man.map.mba.med.men.mil.mit.mlb.mls.mma.moe.moi.mom.mov.msd.mtn.mtr.nab.nba.nec.net.new.nfl.ngo.nhk.now.nra.nrw.ntt.nyc.obi.off.one.ong.onl.ooo.org.ott.ovh.pay.pet.phd.pid.pin.pnc.pro.pru.pub.pwc.qvc.red.ren.ril.rio.rip.run.rwe.sap.sas.sbi.sbs.sca.scb.ses.sew.sex.sfr.ski.sky.soy.spa.srl.srt.stc.tab.tax.tci.tdk.tel.thd.tjx.top.trv.tui.tvs.ubs.uno.uol.ups.vet.vig.vin.vip.wed.win.wme.wow.wtc.wtf.xin.xxx.xyz.you.yun",".aero.arpa.asia.auto.band.beer.chat.city.club.cool.coop.date.fans.fund.game.gift.gold.guru.help.host.info.jobs.life.link.live.loan.love.luxe.mobi.name.news.pics.plus.shop.show.site.sohu.team.tech.wang.wiki.work.yoga.zone",".citic.cloud.email.games.group.local.onion.party.photo.press.rocks.space.store.today.trade.video.world",".center.design.lawyer.market.museum.online.social.studio.travel",".company.fashion.science.website",".engineer.software"],
t.bn=function(){return Object.create(null)},t.dn=function(n){return Object.setPrototypeOf(n,null)},t.mn=function(n,t){
return!t&&/[^a-z]/.test(n)?/^xn--[\x20-\x7f]+/.test(n)||".\u4e2d\u4fe1.\u4e2d\u56fd.\u4e2d\u570b.\u4e2d\u6587\u7f51.\u4f01\u4e1a.\u4f5b\u5c71.\u4fe1\u606f.\u516c\u53f8.\u516c\u76ca.\u5546\u57ce.\u5546\u5e97.\u5546\u6807.\u5728\u7ebf.\u5a31\u4e50.\u5e7f\u4e1c.\u6211\u7231\u4f60.\u624b\u673a.\u62db\u8058.\u653f\u52a1.\u6e38\u620f.\u7f51\u5740.\u7f51\u5e97.\u7f51\u5e97.\u7f51\u7edc.\u8d2d\u7269.\u96c6\u56e2.\u9910\u5385.".includes("."+n+".")?2:0:n&&n.length<a.length&&a[n.length].includes(n)?1:0
},u=function(n){var e=n.toLowerCase().split("."),r=e.length
;return[e,0===t.mn(e[r-1])?1:r>2&&2===e[r-1].length&&1===t.mn(e[r-2])?3:2]},t.ln=u,c=function(n,e){
return!!(6!==e&&/^\d{1,3}(?:\.\d{1,3}){3}$/.test(n)||4!==e&&/^\[[\da-f]{0,4}(?::[\da-f]{0,4}){1,5}(?:(?::[\da-f]{0,4}){1,2}|:\d{0,3}(?:\.\d{0,3}){3})]$/.test(n))&&!!t.sn("http://"+n)
},t.fn=c,t.sn=function(n){try{return new URL(n)}catch(n){return null}},t.in=function(n,t){if(!n)return"";try{
n=(t?"atob"===t?atob:decodeURI:decodeURIComponent)(n)}catch(n){}return n},i=function(n,e){var r,o,a
;return n.includes("%")?(r=n.replace(/%(2[356f]|3[adf]|40)/gi,"%25$1").replace(/%(?![\da-fA-F]{2})/g,"%25"),
o=(o=t.in(r,1)).length!==r.length?o:t.an(n,1),
a=!e&&(t.jn.test(o)?!o.startsWith("vimium:"):o.startsWith("data:")||o.startsWith("about:")),
o=o.replace(a?t.xn:/[\r\n]+|\s$/g,encodeURIComponent)):n},t.cn=i,s=function(n,e){
return n=!n.includes("://")&&/%(?:2[36f]|3[adf])/i.test(n)?t.in(n).trim():n,t.cn(n,e)},t.un=s,f=function(n,e){
return(e?n:encodeURI(n)).replace(/(?:%[\da-f]{2})+/gi,function(n){var e=t.in(n);return e.length<n.length?t.on(e):n})},
t.an=f,t.on=function(n){
return n.replace(e.we<64||false?/[\x00-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g:new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)
},t.rn=function(n){return(n=n.slice(0,8).toLowerCase()).startsWith("http://")?7:"https://"===n?8:0},t.en=function(n){
return n.trim()?n.trim().split(/[.\s]+/g).sort().filter(function(n){return!!n}):[]},l=function(n){
return n&&[n[0],n[1],t.en(n[2])]||0},t.tn=l,t.nn=function(n,t,e){try{return new RegExp(n,t)}catch(r){
0===e||console.log("%c/%s/%s","color:#c41a16",n,t,"is not a valid regexp.")}return null},
t.v="undefined"!=typeof URLPattern&&URLPattern?function(n,t){var e,r
;n.endsWith("*")||(r=(e=n.indexOf("://"))>0?n.indexOf("/",e+3):-1,
n+=e>0&&(r===n.length-1||r<0)?(r>0?"":"/")+"*\\?*#*":"");try{return new URLPattern(n)}catch(e){
0===t||console.log("%c/%s/%s","color:#c41a16",n,"is not a valid URLPattern.")}return null}:function(){return null},
m=null,d=function(n){m=n},t.g=function(){var n=new Promise(d),t=m;return m=null,{zn:n,Rn:e.we<49?function(n){
Promise.resolve(n).then(t)}:t}},t.d=e.we>70&&true?function(n){queueMicrotask(n)}:function(n){Promise.resolve().then(n)},
t.m=function(n,t,e){var r=function(){var a,u,c
;for(e&&false===e()&&(o=0),a=0,u=0;a<128&&u<512&&o>0;)if((c=t(n[--o]))>0)a++,u+=c;else if(c<0)break;o>0&&(n.length=o,
setTimeout(r,150))},o=n.length;o>=50?setTimeout(r,17):n.length>0&&r()},t.l=function(n){var e
;return e=n.endsWith(".json"),n=n.includes("/")?n:"/front/"+n,fetch(n).then(function(n){
return e?n.json().then(function(n){var e,r;for(r in t.dn(n),e=new Map,n)e.set(r,n[r]);return e}):n.text()})},
t.i=function(n){return n.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")},b="",p=0;t.c=function(n){var t,e=Date.now()
;if(e-p>8e3){if(!n)return"";t=new Uint8Array(8),crypto.getRandomValues(t),b=t.reduce(function(n,t){
return n+(t<16?"0":"")+t.toString(16)},"")}return p=e,b},t.a=function(n){if(null!=n&&false!==n){
for(n="string"!=typeof n?"number"==typeof n?[n,.5]:true===n?[.5,.5]:n instanceof Array?n:[+n.x||0,+n.y||0,+n.s||0]:n.trim().split(/[\s,]+/).map(function(n,t){
return"count"===n&&t<2?n:isNaN(+n)?t<2?.5:0:+n});n.length<2;)n.push(.5);for(;n.length<3;)n.push(0)
;var t="count"===n[0]||"count"===n[1];return{x:n[0],y:n[1],n:t?0:1,s:t?+n[2]||.01:0}}},t.t=function(n){var t,e,r,o=""
;for(t=0,e=n.length-1;t<e;t++)(r=n[t]).trimRight()&&n.indexOf(r,t+1)<0&&(o+=r);return o}});