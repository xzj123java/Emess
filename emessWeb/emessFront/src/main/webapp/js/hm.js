(function(){var h={},mt={},c={id:"afa72a03d596ee3133f3b3057a621448",dm:["chuanboyi.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:3510322,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'BD25A56992D1B86B',conv:0,med:0,cvcc:{q:/tencent:\/\/|qq\.(com|htm)|kefu|openkf|swt|zoos|53kf|doyoo|looyu|leyu|zixun|chat|talk|openQQ|open_ask|online/i},cvcf:[],apps:''};var t=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(b,a,f){var e;f.L&&(e=new Date,e.setTime(e.getTime()+f.L));document.cookie=b+"="+a+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(e?"; expires="+e.toGMTString():"")+(f.$b?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:v};
mt.cookie.yb=function(b,a){try{var f="Hm_ck_"+ +new Date;mt.cookie.set(f,"is-cookie-enabled",{domain:b,path:a,L:t});var e="is-cookie-enabled"===mt.cookie.get(f)?"1":"0";mt.cookie.set(f,"",{domain:b,path:a,L:-1});return e}catch(g){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Fa=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.la=function(){return mt.lang.e(c.aet,"String")};
mt.lang.h=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.I=function(b,a){var f=w;if(b==v||!mt.lang.e(b,"Array")||a===t)return f;if(Array.prototype.indexOf)f=-1!==b.indexOf(a);else for(var e=0;e<b.length;e++)if(b[e]===a){f=u;break}return f};
(function(){var b=mt.lang;mt.f={};mt.f.fa=function(a){return document.getElementById(a)};mt.f.fb=function(a){if(!a)return v;try{for(var b=a.split(">"),e=document.body,g=b.length-1;0<=g;g--)if(-1<b[g].indexOf("#")){var d=b[g].split("#")[1];(e=document.getElementById(d))||(e=document.getElementById(decodeURIComponent(d)));b=b.splice(g+1,b.length-(g+1));break}for(a=0;e&&a<b.length;){var l=String(b[a]).toLowerCase();if(!("html"===l||"body"===l)){var g=0,p=b[a].match(/\[(\d+)\]/i),d=[];if(p)g=p[1]-1,l=
l.split("[")[0];else if(1!==e.childNodes.length){for(var n=0,s=0,m=e.childNodes.length;s<m;s++){var k=e.childNodes[s];1===k.nodeType&&k.nodeName.toLowerCase()===l&&n++;if(1<n)return v}if(1!==n)return v}for(n=0;n<e.childNodes.length;n++)1===e.childNodes[n].nodeType&&e.childNodes[n].nodeName.toLowerCase()===l&&d.push(e.childNodes[n]);if(!d[g])return v;e=d[g]}a++}return e}catch(r){return v}};mt.f.ia=function(a,b){var e=[],g=[];if(!a)return g;for(;a.parentNode!=v;){for(var d=0,l=0,p=a.parentNode.childNodes.length,
n=0;n<p;n++){var s=a.parentNode.childNodes[n];if(s.nodeName===a.nodeName&&(d++,s===a&&(l=d),0<l&&1<d))break}if((p=""!==a.id)&&b){e.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<e.length?p+">"+e.join(">"):p,g.push(p)),e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<d?"["+l+"]":""));a=a.parentNode}g.push(e.join(">"));return g};mt.f.lb=function(a){return(a=mt.f.ia(a,u))&&a.length?String(a[0]):""};mt.f.jb=function(a){return mt.f.ia(a,w)};mt.f.Ub=
function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return v};mt.f.eb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Vb=function(a){var b={top:0,left:0};if(!a)return b;var e=mt.f.eb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};mt.f.getAttribute=function(a,
b){var e=a.getAttribute&&a.getAttribute(b)||v;if(!e&&a.attributes&&a.attributes.length)for(var g=a.attributes,d=g.length,l=0;l<d;l++)g[l].nodeName===b&&(e=g[l].nodeValue);return e};mt.f.S=function(a){var b="document";a.tagName!==t&&(b=a.tagName);return b.toLowerCase()};mt.f.nb=function(a){var f="";a.textContent?f=b.trim(a.textContent):a.innerText&&(f=b.trim(a.innerText));f&&(f=f.replace(/\s+/g," ").substring(0,255));return f};mt.f.Aa=function(a){var b=mt.f.S(a);"input"===b&&("button"===a.type||"submit"===
a.type)?a=a.value||"":"img"===b?(b=mt.f.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.f.nb(a);return String(a).substring(0,255)};(function(){(mt.f.Ka=function(){function a(){if(!a.V){a.V=u;for(var b=0,e=g.length;b<e;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}a()}var e=w,g=[],d;document.addEventListener?d=function(){document.removeEventListener("DOMContentLoaded",
d,w);a()}:document.attachEvent&&(d=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",d),a())});(function(){if(!e)if(e=u,"complete"===document.readyState)a.V=u;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",d,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",d);window.attachEvent("onload",a);var g=w;try{g=window.frameElement==v}catch(p){}document.documentElement.doScroll&&
g&&b()}})();return function(b){a.V?b():g.push(b)}}()).V=w})();return mt.f})();mt.event={};mt.event.d=function(b,a,f){b.attachEvent?b.attachEvent("on"+a,function(a){f.call(b,a)}):b.addEventListener&&b.addEventListener(a,f,w)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=w};
(function(){var b=mt.event;mt.i={};mt.i.Ea=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.wb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:t;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Db=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.T=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.M=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==t&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==t)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.o={};mt.o.parse=function(b){return(new Function("return ("+b+")"))()};
mt.o.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=f[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return b(e);case "boolean":return String(e);
default:if(e===v)return"null";if(e instanceof Array){var g=["["],d=e.length,l,f,n;for(f=0;f<d;f++)switch(n=e[f],typeof n){case "undefined":case "function":case "unknown":break;default:l&&g.push(","),g.push(mt.o.stringify(n)),l=1}g.push("]");return g.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+a(e.getMonth()+1)+"-"+a(e.getDate())+"T"+a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds())+'"';l=["{"];f=mt.o.stringify;for(d in e)if(Object.prototype.hasOwnProperty.call(e,d))switch(n=
e[d],typeof n){case "undefined":case "unknown":case "function":break;default:g&&l.push(","),g=1,l.push(f(d)+":"+f(n))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.Z=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return w}return u};
mt.localStorage.set=function(b,a,f){var e=new Date;e.setTime(e.getTime()+f||31536E6);try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.Z()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),f=b.substring(0,a)-0;if(f&&f>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.Z())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(e){}return v};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.Z())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(f){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):v}catch(a){return v}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Na={};mt.Na.log=function(b,a){var f=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=f;f.onload=function(){f.onload=v;f=window[e]=v;a&&a(b)};f.src=b};mt.qa={};
mt.qa.ob=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return b};
mt.qa.Tb=function(b,a,f,e,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+f+'" height="'+e+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+f+'" height="'+e+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.m=function(b,a){var f=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return f?f[3]:v};mt.url.Wb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:v};mt.url.hb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):v};mt.url.H=function(b){return(b=mt.url.hb(b))?b.replace(/:\d+$/,""):b};mt.url.ia=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){function b(){for(var a=w,b=document.getElementsByTagName("script"),e=b.length,e=100<e?100:e,g=0;g<e;g++){var d=b[g].src;if(d&&0===d.indexOf("https://hm.baidu.com/h")){a=u;break}}return a}return h.cb=b})();var A=h.cb;
h.s={Xb:"http://tongji.baidu.com/hm-web/welcome/ico",Ja:"hm.baidu.com/hm.gif",Ta:/^(tongji|hmcdn).baidu.com$/,X:"tongji.baidu.com",tb:"hmmd",ub:"hmpl",Nb:"utm_medium",rb:"hmkw",Pb:"utm_term",pb:"hmci",Mb:"utm_content",vb:"hmsr",Ob:"utm_source",qb:"hmcu",Lb:"utm_campaign",J:0,F:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",na:A()||"https:"===document.location.protocol?"https:":"http:",Yb:0,Rb:6E5,zb:6E5,Zb:5E3,Sb:5,ca:1024,Qb:1,K:2147483647,Oa:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
N:u,wa:["a","input","button"],Va:{id:"data-hm-id",ba:"data-hm-class",ta:"data-hm-xpath",content:"data-hm-content",ra:"data-hm-tag",link:"data-hm-link"},va:"data-hm-enabled",ua:"data-hm-disabled",Ab:"https://hmcdn.baidu.com/static/tongji/plugins/",Ia:["UrlChangeTracker"]};(function(){var b={B:{},d:function(a,b){this.B[a]=this.B[a]||[];this.B[a].push(b)},G:function(a,b){this.B[a]=this.B[a]||[];for(var e=this.B[a].length,g=0;g<e;g++)this.B[a][g](b)}};return h.w=b})();
(function(){function b(b,e){var g=document.createElement("script");g.charset="utf-8";a.e(e,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=v,e()}:g.onload=function(){e()});g.src=b;var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(g,d)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";if(h.c.b.nv){b=encodeURIComponent(document.referrer);try{window.sessionStorage?f.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)}catch(g){}}else try{b=(window.sessionStorage?f.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(d){}return b}var a=mt.localStorage,f=mt.sessionStorage;return h.za=b})();
(function(){var b=mt.lang,a=mt.f,f={Q:function(b,g){return function(d){var l=d.target||d.srcElement;if(l){var p=l.getAttribute(b.Y);d=d.clientX+":"+d.clientY;if(p&&p===d)l.removeAttribute(b.Y);else if(g&&0<g.length&&(l=a.jb(l))&&l.length)if(p=l.length,d=l[l.length-1],1E4>p*d.split(">").length)for(d=0;d<p;d++)f.Ma(b,l[d]);else f.Ma(b,d)}}},Ma:function(a,g){for(var d={},l=String(g).split(">").length,f=0;f<l;f++)d[g]="",g=g.substring(0,g.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.xa)&&a.xa(d)},Bb:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.Y,d.clientX+":"+d.clientY);a&&a.r&&(b?a.r(b):a.r("#"+encodeURIComponent(this.id),d.type))}}};return h.ea=f})();
(function(){var b=mt.f,a=mt.o,f=mt.event,e=mt.lang,g=h.ea,d={Y:"HM_ce",Pa:function(){if(c.cetrk&&c.cetrk.length){f.d(document,"click",g.Q(d,c.cetrk));for(var e=0,p=c.cetrk.length;e<p;e++){var n;try{n=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(s){n={}}var m=n.p||"";-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.fa(m))&&f.d(m,"click",g.Bb(d,n)))}}},xa:function(b){if(c.cetrk&&c.cetrk.length)for(var e=0,g=c.cetrk.length;e<g;e++){var f;try{f=a.parse(decodeURIComponent(String(c.cetrk[e])))}catch(m){f=
{}}b.hasOwnProperty(f.p)&&d.r(f)}},r:function(a){h.c.b.et=7;var g=a&&a.k||"",g=e.h(g),d=[];if(a&&a.a&&e.e(a.a,"Object"))for(var f in a.a)if(a.a.hasOwnProperty(f)){d.push(e.h(f));var m=b.fb(a.a[f]||""),m=m?b.Aa(m):"";d.push(e.h(m))}a="";d.length&&(a="*"+d.join("*"));h.c.b.ep="ce!_iden*"+g+a;h.c.j()}};h.w.d("pv-b",d.Pa);return d})();
(function(){var b=mt.lang,a=mt.f,f=mt.event,e=mt.i,g=h.s,d=h.w,l=+new Date,p=[],n={Q:function(){return function(e){if(h.c&&h.c.N&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var k=h.c.wa,r=a.getAttribute(d,g.va)!=v?u:w;if(a.getAttribute(d,g.ua)==v)if(r)n.$(n.ha(d,e));else{var f=a.S(d);if(b.I(k,"*")||b.I(k,f))n.$(n.ha(d,e));else for(;d.parentNode!=v;){var r=d.parentNode,f=a.S(r),q="a"===f&&b.I(k,"a")?u:w,f="button"===f&&b.I(k,"button")?u:w,x=a.getAttribute(r,g.va)!=v?u:w;if(a.getAttribute(r,
g.ua)==v&&(q||f||x)){n.$(n.ha(r,e));break}d=d.parentNode}}}}}},ha:function(d,f){var k={},r=g.Va;k.id=a.getAttribute(d,r.id)||a.getAttribute(d,"id")||"";k.ba=a.getAttribute(d,r.ba)||a.getAttribute(d,"class")||"";k.ta=a.getAttribute(d,r.ta)||a.lb(d);k.content=a.getAttribute(d,r.content)||a.Aa(d);k.ra=a.getAttribute(d,r.ra)||a.S(d);k.link=a.getAttribute(d,r.link)||a.getAttribute(d,"href")||"";k.type=f.type||"click";r=b.Fa(d.offsetTop)?d.offsetTop:0;"click"===f.type?r=e.Ea?f.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.oa&&b.e(f.oa.changedTouches,"Array")&&f.oa.changedTouches.length)&&(r=f.oa.changedTouches[0].pageY);k.Kb=r;return k},$:function(a){var e=b.h;a=[+new Date-(h.c.C!==t?h.c.C:l),e(a.id),e(a.ba),e(a.ra),e(a.ta),e(a.link),e(a.content),a.type,a.Kb].join("*");n.aa(a);b.e(this.P(),"Function")&&this.P()()},aa:function(a){a.length>g.ca||(encodeURIComponent(p.join("!")+a).length>g.ca&&(n.r(p.join("!")),p=[]),p.push(a))},r:function(a){h.c.b.et=5;h.c.b.ep=
a;h.c.j()},P:function(){return function(){p&&p.length&&(n.r(p.join("!")),p=[])}}};b.la()&&""!==c.aet&&d.d("pv-b",function(){f.d(document,"click",n.Q());"ontouchend"in document&&f.d(window,"touchend",n.Q());f.d(window,"unload",n.P())});return n})();
(function(){var b=mt.event,a=mt.i,f=h.s,e=h.w,g=+new Date,d=[],l=v,p={$a:function(){return function(){h.c&&(h.c.N&&c.aet&&c.aet.length)&&(window.clearTimeout(l),l=window.setTimeout(function(){p.Ra(a.T()+a.M())},150))}},Ra:function(a){p.aa([+new Date-(h.c.C!==t?h.c.C:g),a].join("*"))},aa:function(a){if(encodeURIComponent(d.join("!")+a).length>f.ca||3<d.length)p.r(d.join("!")),d=[];d.push(a)},r:function(b){h.c.b.et=6;h.c.b.vh=a.M();h.c.b.ep=b;h.c.j()},P:function(){return function(){d&&d.length&&(p.r(d.join("!")),
d=[])}}};mt.lang.la()&&""!==c.aet&&e.d("pv-b",function(){b.d(window,"scroll",p.$a());b.d(window,"unload",p.P())});return p})();
(function(){var b=mt.f,a=h.s,f=h.load,e=h.za;h.w.d("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.Ka(function(){for(var d=0,l=c.rp.length;d<l;d++){var p=c.rp[d][0],n=c.rp[d][1],s=b.fa("hm_t_"+p);if(n&&!(2==n&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*a.K),s=4==n?g+"hl.js?"+["siteId="+c.id,"planId="+p,"rnd="+s].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+p,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),f(s)}})})})();(function(){var b=h.s,a=h.load,f=h.za;h.w.d("pv-b",function(){if(c.trust&&c.vcard){var e="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*b.K),"hm=1"].join("&");a(e)}})})();
(function(){function b(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.da.ib()+","+h.da.gb();h.c.j()}}function a(){clearTimeout(z);var b;q&&(b="visible"==document[q]);x&&(b=!document[x]);p="undefined"==typeof b?u:b;if((!l||!n)&&p&&s)y=u,k=+new Date;else if(l&&n&&(!p||!s))y=w,r+=+new Date-k;l=p;n=s;z=setTimeout(a,100)}function f(a){var k=document,b="";if(a in k)b=a;else for(var e=["webkit","ms","moz","o"],q=0;q<e.length;q++){var x=e[q]+a.charAt(0).toUpperCase()+a.slice(1);if(x in k){b=
x;break}}return b}function e(k){if(!("focus"==k.type||"blur"==k.type)||!(k.target&&k.target!=window))s="focus"==k.type||"focusin"==k.type?u:w,a()}var g=mt.event,d=h.w,l=u,p=u,n=u,s=u,m=+new Date,k=m,r=0,y=u,q=f("visibilityState"),x=f("hidden"),z;a();(function(){var k=q.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,k,a);g.d(window,"pageshow",a);g.d(window,"pagehide",a);"object"==typeof document.onfocusin?(g.d(document,"focusin",e),g.d(document,"focusout",e)):(g.d(window,"focus",e),
g.d(window,"blur",e))})();h.da={ib:function(){return+new Date-m},gb:function(){return y?+new Date-k+r:r}};d.d("pv-b",function(){g.d(window,"unload",b())});d.d("duration-send",b());d.d("duration-done",function(){k=m=+new Date;r=0});return h.da})();
(function(){var b=mt.lang,a=h.s,f=h.load,e={xb:function(e){if((window._dxt===t||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.c){var d=h.c.R();f([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(d)].join(""),e)}},Jb:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ya=e})();
(function(){function b(a,b,e,q){if(!(a===t||b===t||q===t)){if(""===a)return[b,e,q].join("*");a=String(a).split("!");for(var x,d=w,f=0;f<a.length;f++)if(x=a[f].split("*"),String(b)===x[0]){x[1]=e;x[2]=q;a[f]=x.join("*");d=u;break}d||a.push([b,e,q].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var f=b[d];e.e(f,"Object")||e.e(f,"Array")?a(f):b[d]=String(f)}}var f=mt.url,e=mt.lang,g=mt.o,d=mt.i,l=h.s,p=h.w,n=h.Ya,s=h.load,m={O:[],W:0,Ga:w,A:{sa:"",page:""},
init:function(){m.g=0;p.d("pv-b",function(){m.Za();m.ab()});p.d("pv-d",function(){m.bb();m.A.page=""});p.d("stag-b",function(){h.c.b.api=m.g||m.W?m.g+"_"+m.W:"";h.c.b.ct=[decodeURIComponent(h.c.getData("Hm_ct_"+c.id)||""),m.A.sa,m.A.page].join("!")});p.d("stag-d",function(){h.c.b.api=0;m.g=0;m.W=0})},Za:function(){var a=window._hmt||[];if(!a||e.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var k=arguments[b];e.e(k,"Array")&&(a.cmd[a.id].push(k),
"_setAccount"===k[0]&&(1<k.length&&/^[0-9a-f]{32}$/.test(k[1]))&&(k=k[1],a.id=k,a.cmd[k]=a.cmd[k]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ab:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,d=b.length;q<d;q++){var f=b[q];e.test(f[0])?m.O.push(f):m.pa(f)}a.cmd[c.id]={push:m.pa}},bb:function(){if(0<m.O.length)for(var a=0,b=m.O.length;a<b;a++)m.pa(m.O[a]);m.O=v},pa:function(a){var b=a[0];if(m.hasOwnProperty(b)&&
e.e(m[b],"Function"))m[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(m.g|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))m.g|=2,h.c.Ca=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){m.g|=4;h.c.b.sn=h.c.Ba();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=d.T()+d.M();h.c.b.kb=0;h.c.ka?(h.c.b.nv=0,h.c.b.st=4):h.c.ka=u;var b=h.c.b.u,e=h.c.b.su;h.c.b.u=l.protocol+"//"+document.location.host+a[1];m.Ga||(h.c.b.su=document.location.href);
h.c.j();h.c.b.u=b;h.c.b.su=e;h.c.C=+new Date}},_trackEvent:function(a){2<a.length&&(m.g|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=e.h(a[1])+"*"+e.h(a[2])+(a[3]?"*"+e.h(a[3]):"")+(a[4]?"*"+e.h(a[4]):""),h.c.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){m.W++;for(var q=(h.c.b.cv||"*").split("!"),x=q.length;x<b-1;x++)q.push("*");q[b-1]=d+"*"+e.h(a[2])+"*"+e.h(a[3]);h.c.b.cv=q.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.c.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.c.Cb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.h(a[1]);a=e.h(a[2]);if(d!==t&&a!==t){var f=decodeURIComponent(h.c.getData("Hm_ct_"+c.id)||""),f=b(f,d,1,a);h.c.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.h(a[1]);a=e.h(a[2]);if(d!==t&&a!==t){var f=m.A.sa,f=b(f,d,2,a);m.A.sa=f}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.h(a[1]);a=e.h(a[2]);
if(d!==t&&a!==t){var f=m.A.page,f=b(f,d,3,a);m.A.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],m.Ga=u)},_trackOrder:function(b){b=b[1];e.e(b,"Object")&&(a(b),m.g|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=g.stringify(b),h.c.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])m.g|=32,h.c.b.et=93,h.c.b.ep=a,h.c.j()},_trackRTPageview:function(b){b=b[1];e.e(b,"Object")&&
(a(b),b=g.stringify(b),512>=encodeURIComponent(b).length&&(m.g|=64,h.c.b.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.e(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var d=function(a){var b=h.c.b.rt;m.g|=128;h.c.b.et=90;h.c.b.rt=a;h.c.j();h.c.b.rt=b},f=b.length;if(900>=f)d.call(this,b);else for(var f=Math.ceil(f/900),q="block|"+Math.round(Math.random()*l.K).toString(16)+"|"+f+"|",x=[],z=0;z<f;z++)x.push(z),x.push(b.substring(900*z,900*z+900)),d.call(this,q+x.join("|")),x=[]}},_setUserId:function(a){a=
a[1];n.xb();n.Jb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Da=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.N=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.j())):p.G("duration-send");p.G("duration-done")},_require:function(a){1<a.length&&(a=a[1],l.Ta.test(f.H(a))&&s(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.I(l.Ia,d)&&e.e(a,"Function")&&
(b.plugins=b.plugins||{},b.D=b.D||{},b.plugins[d]=a,b.z=b.z||[],a=b.z.slice(),d&&a.length&&a[0][1]===d))for(var q=0,f=a.length;q<f;q++){var g=a[q][2]||{};if(b.plugins[d]&&!b.D[d])b.D[d]=new b.plugins[d](g),b.z.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],q=a[2]||{};if(e.I(l.Ia,d))if(b.plugins=b.plugins||{},b.D=b.D||{},b.plugins[d]&&!b.D[d])b.D[d]=new b.plugins[d](q);else{b.z=b.z||[];for(var q=0,f=b.z.length;q<f;q++)if(b.z[q][1]===d)return;b.z.push(a);m._require([v,
l.Ab+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=e.h(a[1]),d="";a=a[2];if(e.e(a,"Object")){var d=[],f;for(f in a)a.hasOwnProperty(f)&&(d.push(e.h(f)),d.push(e.h(a[f])));d="*"+d.join("*")}h.c.b.et=7;h.c.b.ep="ce!_iden*"+b+d;h.c.j()}}};m.init();h.Ua=m;return h.Ua})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Da=this.Ca=u,this.N=k.N,this.wa=g.la()&&0<c.aet.length?c.aet.split(","):"",this.ka=w,this.init())}var a=mt.url,f=mt.Na,e=mt.qa,g=mt.lang,d=mt.cookie,l=mt.i,p=mt.localStorage,n=mt.sessionStorage,s=mt.o,m=mt.event,k=h.s,r=h.load,y=h.w;b.prototype={ma:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Ha:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},U:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Ha(b,c.dm[d]))return u}else{var e=a.H(b);if(e&&this.ma(e,c.dm[d]))return u}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ma(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ga:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Ha(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},mb:function(){if(!document.referrer)return k.F-k.J>c.vdur?1:4;var b=w;this.U(document.referrer)&&this.U(document.location.href)?b=u:(b=a.H(document.referrer),b=this.ma(b||"",document.location.hostname));return b?k.F-k.J>c.vdur?1:4:3},getData:function(a){try{return d.get(a)||n.get(a)||p.get(a)}catch(b){}},setData:function(a,b,e){try{d.set(a,b,{domain:this.R(),path:this.ga(),L:e}),e?p.set(a,b,e):n.set(a,b)}catch(f){}},Cb:function(a){try{d.set(a,"",{domain:this.R(),path:this.ga(),
L:-1}),n.remove(a),p.remove(a)}catch(b){}},Hb:function(){var a,b,e,f,g;k.J=this.getData("Hm_lpvt_"+c.id)||0;13===k.J.length&&(k.J=Math.round(k.J/1E3));b=this.mb();a=4!==b?1:0;if(e=this.getData("Hm_lvt_"+c.id)){f=e.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<k.F-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.F);4<f.length;)f.shift();e=f.join(",");f=f[f.length-1]}else e=k.F,f="",g=1;this.setData("Hm_lvt_"+c.id,e,c.age);this.setData("Hm_lpvt_"+
c.id,k.F);e=d.yb(this.R(),this.ga());if(0===c.nv&&this.U(document.location.href)&&(""===document.referrer||this.U(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=e;this.b.lt=f;this.b.lv=g},Gb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=k.Oa.length;e<f;e++){var g=k.Oa[e],l=this.b[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+
encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},Ib:function(){this.Hb();this.b.si=c.id;this.b.sn=this.Ba();this.b.su=document.referrer;this.b.hh=window.location.hash;this.b.ds=l.Db;this.b.cl=l.colorDepth+"-bit";this.b.ln=String(l.language).toLowerCase();this.b.ja=l.javaEnabled?1:0;this.b.ck=l.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?
1:0;this.b.fl=e.ob();this.b.v="1.2.48";this.b.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=l.T()+l.M();var b=document.location.href;this.b.cm=a.m(b,k.tb)||"";this.b.cp=a.m(b,k.ub)||a.m(b,k.Nb)||"";this.b.cw=a.m(b,k.rb)||a.m(b,k.Pb)||"";this.b.ci=a.m(b,k.pb)||a.m(b,k.Mb)||"";this.b.cf=a.m(b,k.vb)||a.m(b,k.Ob)||"";this.b.cu=a.m(b,k.qb)||a.m(b,k.Lb)||""},init:function(){try{this.Ib(),0===this.b.nv?this.Fb():this.ya(),h.c=this,this.Xa(),this.Wa(),y.G("pv-b"),
this.Eb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(k.na+"//"+k.Ja+"?"+b.join("&"))}},Eb:function(){function a(){y.G("pv-d")}this.Ca?(this.ka=u,this.b.et=0,this.b.ep="",this.b.vl=l.T()+l.M(),this.j(a)):a();this.C=+new Date},j:function(a){if(this.Da){var b=this;b.b.rnd=Math.round(Math.random()*k.K);y.G("stag-b");var e=k.na+"//"+k.Ja+"?"+b.Gb();y.G("stag-d");b.Sa(e);
f.log(e,function(e){b.La(e);g.e(a,"Function")&&a.call(b)})}},Xa:function(){var b=document.location.hash.substring(1),e=RegExp(c.id),d=a.H(document.referrer)===k.X?1:0,f=a.m(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(e.test(b)&&d&&g)&&(this.b.rnd=Math.round(Math.random()*k.K),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(b,f))},Wa:function(){var b=a.H(document.referrer)===k.X;if(window.postMessage&&window.self!==window.parent&&b){var e=this;m.d(window,"message",function(b){if(a.H(b.origin)===k.X){var d=b.data||{};b=d.sd||"";var d=d.jn||"",f=/^customevent$/.test(d);RegExp(c.id).test(b)&&f&&(e.b.rnd=Math.round(Math.random()*k.K),r(k.protocol+"//"+c.js+d+".js?"+e.b.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"http://"+k.X)}},Sa:function(a){var b;
try{b=s.parse(n.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}var d=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+d);n.set("Hm_unsent_"+c.id,s.stringify(b))},La:function(a){var b;try{b=s.parse(n.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var d=0;d<b.length;d++)if(a.replace(/&u=[^&]*/,"")===b[d].replace(/&u=[^&]*/,"")){b.splice(d,1);break}b.length?n.set("Hm_unsent_"+c.id,s.stringify(b)):this.ya()}},ya:function(){n.remove("Hm_unsent_"+
c.id)},Fb:function(){var a=this,b;try{b=s.parse(n.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){f.log(k.na+"//"+b,function(b){a.La(b)})},g=0;g<b.length;g++)e(b[g])},Ba:function(){return Math.round(+new Date/1E3)%65535}};return new b})();
(function(){var b=mt.event,a=mt.lang,f=h.s;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=a.Fa(h.c.b.kb)?h.c.b.kb:0;var e=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.j()};b.d(document,"keyup",function(){h.c.b.kb++});b.d(window,"unload",function(){e()});setInterval(e,f.zb)}})();var B=h.s,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.i,a=mt.lang,f=mt.event,e=mt.o;if("undefined"!==typeof h.c&&(c.med||(!b.Ea||7<b.wb)&&c.cvcc)){var g,d,l,p,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},m=function(b,d){var f={};f.n=g;f.t="clk";f.v=b;if(d){var k=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):v,n=d.getAttribute("id")||"";l.test(k)?(f.sn="mediate",
f.snv=k):a.e(m,"String")&&l.test(m)&&(f.sn="wrap",f.snv=m);f.id=n}h.c.b.et=86;h.c.b.ep=e.stringify(f);h.c.j();for(f=+new Date;400>=+new Date-f;);};if(c.med)d="/zoosnet",g="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){d="/other-comm";g="other";l=c.cvcc.q||t;var k=c.cvcc.id||t;p={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==t?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),k?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||k.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):k!==t&&(d=d.getAttribute("id"),k.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof l){var r;d+=/\/$/.test(d)?"":"/";var y=function(b,e){if(r===e)return m(d+b,e),w;if(a.e(e,"Array")||a.e(e,"NodeList"))for(var f=0,g=e.length;f<g;f++)if(r===e[f])return m(d+b+"/"+(f+1),e[f]),w};f.d(document,"mousedown",function(b){b=b||window.event;r=b.target||b.srcElement;var d={};for(s(p,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});r&&
r!==document&&s(d,y)!==w;)r=r.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,f=mt.event,e=mt.o;if("undefined"!==typeof h.c&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var g={Qa:function(){for(var a=c.cvcf.length,e,p=0;p<a;p++)(e=b.fa(decodeURIComponent(c.cvcf[p])))&&f.d(e,"click",g.ea())},ea:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=e.stringify(a);h.c.j()}}};b.Ka(function(){g.Qa()})}})();
(function(){var b=mt.event,a=mt.o;if(c.med&&"undefined"!==typeof h.c){var f=+new Date,e={n:"anti",sb:0,kb:0,clk:0},g=function(){h.c.b.et=86;h.c.b.ep=a.stringify(e);h.c.j()};b.d(document,"click",function(){e.clk++});b.d(document,"keyup",function(){e.kb=1});b.d(window,"scroll",function(){e.sb++});b.d(window,"unload",function(){e.t=+new Date-f;g()});b.d(window,"load",function(){setTimeout(g,5E3)})}})();c.spa!==t&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
