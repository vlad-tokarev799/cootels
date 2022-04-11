function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}!function(){function n(t,n){return function(){return t.apply(n,arguments)}}var i,t,e,a,o,s=[].indexOf||function(t){for(var n=0,e=this.length;n<e;n++)if(n in this&&this[n]===t)return n;return-1};function r(){}function u(){this.keys=[],this.values=[]}function c(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}function l(t){null==t&&(t={}),this.scrollCallback=n(this.scrollCallback,this),this.scrollHandler=n(this.scrollHandler,this),this.resetAnimation=n(this.resetAnimation,this),this.start=n(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new e,this.wowEvent=this.util().createEvent(this.config.boxClass)}r.prototype.extend=function(t,n){var e,i;for(e in n)i=n[e],null==t[e]&&(t[e]=i);return t},r.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},r.prototype.createEvent=function(t,n,e,i){var o;return null==n&&(n=!1),null==e&&(e=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,n,e,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},r.prototype.emitEvent=function(t,n){return null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)?t["on"+n]():void 0},r.prototype.addEvent=function(t,n,e){return null!=t.addEventListener?t.addEventListener(n,e,!1):null!=t.attachEvent?t.attachEvent("on"+n,e):t[n]=e},r.prototype.removeEvent=function(t,n,e){return null!=t.removeEventListener?t.removeEventListener(n,e,!1):null!=t.detachEvent?t.detachEvent("on"+n,e):delete t[n]},r.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t=r,e=this.WeakMap||this.MozWeakMap||(u.prototype.get=function(t){for(var n,e=this.keys,i=n=0,o=e.length;n<o;i=++n)if(e[i]===t)return this.values[i]},u.prototype.set=function(t,n){for(var e,i=this.keys,o=e=0,r=i.length;e<r;o=++e)if(i[o]===t)return void(this.values[o]=n);return this.keys.push(t),this.values.push(n)},u),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(c.notSupported=!0,c.prototype.observe=function(){},c),a=this.getComputedStyle||function(e,t){return this.getPropertyValue=function(t){var n;return o.test(t="float"===t?"styleFloat":t)&&t.replace(o,function(t,n){return n.toUpperCase()}),(null!=(n=e.currentStyle)?n[t]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=(l.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},l.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},l.prototype.start=function(){var o,t,n,e,s;if(this.stopped=!1,this.boxes=function(){for(var t=this.element.querySelectorAll("."+this.config.boxClass),n=[],e=0,i=t.length;e<i;e++)o=t[e],n.push(o);return n}.call(this),this.all=function(){for(var t=this.boxes,n=[],e=0,i=t.length;e<i;e++)o=t[e],n.push(o);return n}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(t=0,n=(e=this.boxes).length;t<n;t++)o=e[t],this.applyStyle(o,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new i((s=this,function(t){for(var o,r,n=[],e=0,i=t.length;e<i;e++)r=t[e],n.push(function(){for(var t=r.addedNodes||[],n=[],e=0,i=t.length;e<i;e++)o=t[e],n.push(this.doSync(o));return n}.call(s));return n})).observe(document.body,{childList:!0,subtree:!0})},l.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},l.prototype.sync=function(t){if(i.notSupported)return this.doSync(this.element)},l.prototype.doSync=function(t){var n,e,i,o,r;if(1===(t=null==t?this.element:t).nodeType){for(r=[],e=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;e<i;e++)n=o[e],s.call(this.all,n)<0?(this.boxes.push(n),this.all.push(n),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(n,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},l.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},l.prototype.applyStyle=function(t,n){var e,i=t.getAttribute("data-wow-duration"),o=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration");return this.animate((e=this,function(){return e.customStyle(t,n,i,o,r)}))},l.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},l.prototype.resetStyle=function(){for(var t,n=this.boxes,e=[],i=0,o=n.length;i<o;i++)t=n[i],e.push(t.style.visibility="visible");return e},l.prototype.resetAnimation=function(t){if(0<=t.type.toLowerCase().indexOf("animationend"))return(t=t.target||t.srcElement).className=t.className.replace(this.config.animateClass,"").trim()},l.prototype.customStyle=function(t,n,e,i,o){return n&&this.cacheAnimationName(t),t.style.visibility=n?"hidden":"visible",e&&this.vendorSet(t.style,{animationDuration:e}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:n?"none":this.cachedAnimationName(t)}),t},l.prototype.vendors=["moz","webkit"],l.prototype.vendorSet=function(o,t){var r,s,u,n=[];for(r in t)s=t[r],o[""+r]=s,n.push(function(){for(var t=this.vendors,n=[],e=0,i=t.length;e<i;e++)u=t[e],n.push(o[""+u+r.charAt(0).toUpperCase()+r.substr(1)]=s);return n}.call(this));return n},l.prototype.vendorCSS=function(t,n){for(var e,i=a(t),o=i.getPropertyCSSValue(n),r=this.vendors,s=0,u=r.length;s<u;s++)e=r[s],o=o||i.getPropertyCSSValue("-"+e+"-"+n);return o},l.prototype.animationName=function(n){var e;try{e=this.vendorCSS(n,"animation-name").cssText}catch(t){e=a(n).getPropertyValue("animation-name")}return"none"===e?"":e},l.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},l.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},l.prototype.scrollHandler=function(){return this.scrolled=!0},l.prototype.scrollCallback=function(){var o;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){for(var t=this.boxes,n=[],e=0,i=t.length;e<i;e++)(o=t[e])&&(this.isVisible(o)?this.show(o):n.push(o));return n}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},l.prototype.offsetTop=function(t){for(var n;void 0===t.offsetTop;)t=t.parentNode;for(n=t.offsetTop;t=t.offsetParent;)n+=t.offsetTop;return n},l.prototype.isVisible=function(t){var n=t.getAttribute("data-wow-offset")||this.config.offset,e=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,n=e+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),t=i+t.clientHeight;return i<=n&&e<=t},l.prototype.util=function(){return null!=this._util?this._util:this._util=new t},l.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},l)}.call(this),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Splide=n()}(this,function(){"use strict";var h="(prefers-reduced-motion: reduce)",F=4,tt=5,e={CREATED:1,MOUNTED:2,IDLE:3,MOVING:F,SCROLLING:tt,DRAGGING:6,DESTROYED:7};function A(t){t.length=0}function o(t,n,e){return Array.prototype.slice.call(t,n,e)}function M(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}function nt(){}var v=setTimeout;function p(t){requestAnimationFrame(t)}function i(t,n){return typeof n===t}function et(t){return!s(t)&&i("object",t)}var r=Array.isArray,C=M(i,"function"),N=M(i,"string"),it=M(i,"undefined");function s(t){return null===t}function y(t){return t instanceof HTMLElement}function g(t){return r(t)?t:[t]}function m(t,n){g(t).forEach(n)}function b(t,n){return-1<t.indexOf(n)}function _(t,n){return t.push.apply(t,g(n)),t}function L(n,t,e){n&&m(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function O(t,n){L(t,N(n)?n.split(" "):n,!0)}function k(t,n){m(n,t.appendChild.bind(t))}function P(t,e){m(t,function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)})}function ot(t,n){return y(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function rt(t,n){t=t?o(t.children):[];return n?t.filter(function(t){return ot(t,n)}):t}function st(t,n){return n?rt(t,n)[0]:t.firstElementChild}var ut=Object.keys;function w(t,n,e){if(t)for(var i=ut(t),i=e?i.reverse():i,o=0;o<i.length;o++){var r=i[o];if("__proto__"!==r&&!1===n(t[r],r))break}}function at(i){return o(arguments,1).forEach(function(e){w(e,function(t,n){i[n]=e[n]})}),i}function d(e){return o(arguments,1).forEach(function(t){w(t,function(t,n){r(t)?e[n]=t.slice():et(t)?e[n]=d({},et(e[n])?e[n]:{},t):e[n]=t})}),e}function ct(n,t){g(t||ut(n)).forEach(function(t){delete n[t]})}function D(t,e){m(t,function(n){m(e,function(t){n&&n.removeAttribute(t)})})}function T(e,n,i){et(n)?w(n,function(t,n){T(e,n,t)}):m(e,function(t){s(i)||""===i?D(t,n):t.setAttribute(n,String(i))})}function z(t,n,e){t=document.createElement(t);return n&&(N(n)?O:T)(t,n),e&&k(e,t),t}function I(t,n,e){if(it(e))return getComputedStyle(t)[n];s(e)||(t.style[n]=""+e)}function lt(t,n){I(t,"display",n)}function ft(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function H(t,n){return t.getAttribute(n)}function dt(t,n){return t&&t.classList.contains(n)}function W(t){return t.getBoundingClientRect()}function j(t){m(t,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function ht(t){return st((new DOMParser).parseFromString(t,"text/html").body)}function q(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function pt(t,n){return t&&t.querySelector(n)}function vt(t,n){return n?o(t.querySelectorAll(n)):[]}function R(t,n){L(t,n,!1)}function gt(t){return t.timeStamp}function S(t){return N(t)?t:t?t+"px":""}var E="splide",u="data-"+E;function mt(t,n){if(!t)throw new Error("["+E+"] "+(n||""))}var B=Math.min,yt=Math.max,bt=Math.floor,wt=Math.ceil,G=Math.abs;function Et(t,n,e){return G(t-n)<e}function St(t,n,e,i){var o=B(n,e),n=yt(n,e);return i?o<t&&t<n:o<=t&&t<=n}function xt(t,n,e){var i=B(n,e),n=yt(n,e);return B(yt(i,t),n)}function Ct(t){return(0<t)-(t<0)}function _t(n,t){return m(t,function(t){n=n.replace("%s",""+t)}),n}function kt(t){return t<10?"0"+t:""+t}var Pt={};function At(){var u=[];function e(t,e,i){m(t,function(n){n&&m(e,function(t){t.split(" ").forEach(function(t){t=t.split(".");i(n,t[0],t[1])})})})}return{bind:function(t,n,r,s){e(t,n,function(t,n,e){var i="addEventListener"in t,o=i?t.removeEventListener.bind(t,n,r,s):t.removeListener.bind(t,r);i?t.addEventListener(n,r,s):t.addListener(r),u.push([t,n,e,r,o])})},unbind:function(t,n,o){e(t,n,function(n,e,i){u=u.filter(function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)})})},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){u.forEach(function(t){t[4]()}),A(u)}}}var X="mounted",V="move",Lt="moved",Mt="shifted",Nt="click",Ot="active",Dt="inactive",Tt="visible",zt="hidden",It="slide:keydown",U="refresh",Y="updated",x="resize",Ht="resized",Wt="scroll",K="scrolled",a="destroy",Ft="navigation:mounted",jt="autoplay:play",qt="autoplay:pause",Rt="lazyload:loaded";function J(t){var e=t?t.event.bus:document.createDocumentFragment(),i=At();return t&&t.event.on(a,i.destroy),at(i,{bus:e,on:function(t,n){i.bind(e,g(t).join(" "),function(t){n.apply(n,r(t.detail)?t.detail:[])})},off:M(i.unbind,e),emit:function(t){i.dispatch(e,t,o(arguments,1))}})}function Bt(n,t,e,i){var o,r,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){if(u=n?B((s()-o)/n,1):1,e&&e(u),1<=u&&(t(),o=s(),i&&++c>=i))return f();p(l)}}function f(){a=!0}function d(){r&&cancelAnimationFrame(r),a=!(r=u=0)}return{start:function(t){t||d(),o=s()-(t?u*n:0),a=!1,p(l)},rewind:function(){o=s(),u=0,e&&e(u)},pause:f,cancel:d,set:function(t){n=t},isPaused:function(){return a}}}function c(t){var n=t;return{set:function(t){n=t},is:function(t){return b(g(t),n)}}}var t="Arrow",Gt=t+"Left",Xt=t+"Right",l=t+"Up",t=t+"Down",Vt="ttb",f={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[l,Xt],ArrowRight:[t,Gt]};var Q="role",Ut="tabindex",n="aria-",Yt=n+"controls",Kt=n+"current",Jt=n+"selected",Z=n+"label",Qt=n+"labelledby",Zt=n+"hidden",$t=n+"orientation",tn=n+"roledescription",nn=n+"live",en=n+"relevant",on=[Q,Ut,"disabled",Yt,Kt,Z,Qt,Zt,$t,tn],rn=E,sn=E+"__track",un=E+"__list",an=E+"__slide",cn=an+"--clone",ln=an+"__container",fn=E+"__arrows",dn=E+"__arrow",hn=dn+"--prev",pn=dn+"--next",vn=E+"__pagination",gn=vn+"__page",mn=E+"__progress"+"__bar",yn=E+"__toggle",bn=E+"__sr",$="is-active",wn="is-prev",En="is-next",Sn="is-visible",xn="is-loading",Cn="is-focus-in",_n=[$,Sn,wn,En,xn,Cn];var kn="touchstart mousedown",Pn="touchmove mousemove",An="touchend touchcancel mouseup";var Ln="slide",Mn="loop",Nn="fade";function On(o,i,n,r){var s,t=J(o),e=t.on,u=t.emit,a=t.bind,c=o.Components,l=o.root,f=o.options,d=f.isNavigation,h=f.updateOnMove,p=f.i18n,v=f.pagination,g=f.slideFocus,m=c.Direction.resolve,y=H(r,"style"),b=H(r,Z),w=-1<n,E=st(r,"."+ln),S=vt(r,f.focusableNodes||"");function x(){var t=o.splides.map(function(t){t=t.splide.Components.Slides.getAt(i);return t?t.slide.id:""}).join(" ");T(r,Z,_t(p.slideX,(w?n:i)+1)),T(r,Yt,t),T(r,Q,g?"button":""),g&&D(r,tn)}function C(){s||_()}function _(){var t,n,e;s||(t=o.index,(e=k())!==dt(r,$)&&(L(r,$,e),T(r,Kt,d&&e||""),u(e?Ot:Dt,P)),e=function(){if(o.is(Nn))return k();var t=W(c.Elements.track),n=W(r),e=m("left"),i=m("right");return bt(t[e])<=wt(n[e])&&bt(n[i])<=wt(t[i])}(),n=!e&&(!k()||w),o.state.is([F,tt])||T(r,Zt,n||""),T(S,Ut,n?-1:""),g&&T(r,Ut,n?-1:0),e!==dt(r,Sn)&&(L(r,Sn,e),u(e?Tt:zt,P)),e||document.activeElement!==r||(n=c.Slides.getAt(o.index))&&ft(n.slide),L(r,wn,i===t-1),L(r,En,i===t+1))}function k(){var t=o.index;return t===i||f.cloneStatus&&t===n}var P={index:i,slideIndex:n,slide:r,container:E,isClone:w,mount:function(){w||(r.id=l.id+"-slide"+kt(i+1),T(r,Q,v?"tabpanel":"group"),T(r,tn,p.slide),T(r,Z,b||_t(p.slideLabel,[i+1,o.length]))),a(r,"click",M(u,Nt,P)),a(r,"keydown",M(u,It,P)),e([Lt,Mt,K],_),e(Ft,x),h&&e(V,C)},destroy:function(){s=!0,t.destroy(),R(r,_n),D(r,on),T(r,"style",y),T(r,Z,b||"")},update:_,style:function(t,n,e){I(e&&E||r,t,n)},isWithin:function(t,n){return t=G(t-i),(t=w||!f.rewind&&!o.is(Mn)?t:B(t,o.length-t))<=n}};return P}var Dn=u+"-interval";var Tn={passive:!1,capture:!0};var zn={Spacebar:" ",Right:Xt,Left:Gt,Up:l,Down:t};function In(t){return t=N(t)?t:t.key,zn[t]||t}var Hn="keydown";var Wn=u+"-lazy",Fn=Wn+"-srcset",jn="["+Wn+"], ["+Fn+"]";var qn=[" ","Enter"];var Rn=Object.freeze({__proto__:null,Media:function(i,t,o){var r=i.state,n=o.breakpoints||{},s=o.reducedMotion||{},e=At(),u=[];function a(t){t&&e.destroy()}function c(t,n){n=matchMedia(n);e.bind(n,"change",l),u.push([t,n])}function l(){var t=r.is(7),n=o.direction,e=u.reduce(function(t,n){return d(t,n[1].matches?n[0]:{})},{});ct(o),f(e),o.destroy?i.destroy("completely"===o.destroy):t?(a(!0),i.mount()):n!==o.direction&&i.refresh()}function f(t,n){d(o,t),n&&d(Object.getPrototypeOf(o),t),r.is(1)||i.emit(Y,o)}return{setup:function(){var e="min"===o.mediaQuery;ut(n).sort(function(t,n){return e?+t-+n:+n-+t}).forEach(function(t){c(n[t],"("+(e?"min":"max")+"-width:"+t+"px)")}),c(s,h),l()},destroy:a,reduce:function(t){matchMedia(h).matches&&(t?d(o,s):ct(o,ut(s)))},set:f}},Direction:function(t,n,o){return{resolve:function(t,n,e){var i="rtl"!==(e=e||o.direction)||n?e===Vt?0:-1:1;return f[t]&&f[t][i]||t.replace(/width|left|right/i,function(t,n){t=f[t.toLowerCase()][i]||t;return 0<n?t.charAt(0).toUpperCase()+t.slice(1):t})},orient:function(t){return t*("rtl"===o.direction?1:-1)}}},Elements:function(t,n,e){var i,o,r,s=J(t),u=s.on,a=s.bind,c=t.root,l=e.i18n,f={},d=[],h=[],p=[];function v(){i=y("."+sn),o=st(i,"."+un),mt(i&&o,"A track/list element is missing."),_(d,rt(o,"."+an+":not(."+cn+")")),w({arrows:fn,pagination:vn,prev:hn,next:pn,bar:mn,toggle:yn},function(t,n){f[n]=y("."+t)}),at(f,{root:c,track:i,list:o,slides:d});var t=c.id||function(t){return""+t+kt(Pt[t]=(Pt[t]||0)+1)}(E),n=e.role;c.id=t,i.id=i.id||t+"-track",o.id=o.id||t+"-list",!H(c,Q)&&"SECTION"!==c.tagName&&n&&T(c,Q,n),T(c,tn,l.carousel),T(o,Q,"presentation"),m()}function g(t){var n=on.concat("style");A(d),R(c,h),R(i,p),D([i,o],n),D(c,t?n:["style",tn])}function m(){R(c,h),R(i,p),h=b(rn),p=b(sn),O(c,h),O(i,p),T(c,Z,e.label),T(c,Qt,e.labelledby)}function y(t){t=pt(c,t);return t&&function(t,n){if(C(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!ot(e,n);)e=e.parentElement;return e}(t,"."+rn)===c?t:void 0}function b(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===rn&&$]}return at(f,{setup:v,mount:function(){u(U,g),u(U,v),u(Y,m),a(document,kn+" keydown",function(t){r="keydown"===t.type},{capture:!0}),a(c,"focusin",function(){L(c,Cn,!!r)})},destroy:g})},Slides:function(i,o,r){var t=J(i),n=t.on,s=t.emit,u=t.bind,a=(t=o.Elements).slides,c=t.list,l=[];function e(){a.forEach(function(t,n){d(t,n,-1)})}function f(){p(function(t){t.destroy()}),A(l)}function d(t,n,e){n=On(i,n,e,t);n.mount(),l.push(n)}function h(t){return t?v(function(t){return!t.isClone}):l}function p(t,n){h(n).forEach(t)}function v(n){return l.filter(C(n)?n:function(t){return N(n)?ot(t.slide,n):b(g(n),t.index)})}return{mount:function(){e(),n(U,f),n(U,e),n([X,U],function(){l.sort(function(t,n){return t.index-n.index})})},destroy:f,update:function(){p(function(t){t.update()})},register:d,get:h,getIn:function(t){var n=o.Controller,e=n.toIndex(t),i=n.hasFocus()?1:r.perPage;return v(function(t){return St(t.index,e,e+i-1)})},getAt:function(t){return v(t)[0]},add:function(t,o){m(t,function(t){var n,e,i;y(t=N(t)?ht(t):t)&&((n=a[o])?P(t,n):k(c,t),O(t,r.classes.slide),n=t,e=M(s,x),n=vt(n,"img"),(i=n.length)?n.forEach(function(t){u(t,"load error",function(){--i||e()})}):e())}),s(U)},remove:function(t){j(v(t).map(function(t){return t.slide})),s(U)},forEach:p,filter:v,style:function(n,e,i){p(function(t){t.style(n,e,i)})},getLength:function(t){return(t?a:l).length},isEnough:function(){return l.length>r.perPage}}},Layout:function(t,n,e){var i,o,r=(a=J(t)).on,s=a.bind,u=a.emit,a=n.Slides,c=n.Direction.resolve,l=(n=n.Elements).root,f=n.track,d=n.list,h=a.getAt,p=a.style;function v(){o=null,i=e.direction===Vt,I(l,"maxWidth",S(e.width)),I(f,c("paddingLeft"),m(!1)),I(f,c("paddingRight"),m(!0)),g()}function g(){var t=W(l);o&&o.width===t.width&&o.height===t.height||(I(f,"height",function(){var t="";i&&(mt(t=y(),"height or heightRatio is missing."),t="calc("+t+" - "+m(!1)+" - "+m(!0)+")");return t}()),p(c("marginRight"),S(e.gap)),p("width",e.autoWidth?null:S(e.fixedWidth)||(i?"":b())),p("height",S(e.fixedHeight)||(i?e.autoHeight?null:b():y()),!0),o=t,u(Ht))}function m(t){var n=e.padding,t=c(t?"right":"left");return n&&S(n[t]||(et(n)?0:n))||"0px"}function y(){return S(e.height||W(d).width*e.heightRatio)}function b(){var t=S(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function w(t,n){var e,t=h(t);return t?(t=W(t.slide)[c("right")],e=W(d)[c("left")],G(t-e)+(n?0:E())):0}function E(){var t=h(0);return t&&parseFloat(I(t.slide,c("marginRight")))||0}return{mount:function(){var t,n,e;v(),s(window,"resize load",(t=M(u,x),function(){e||(e=Bt(n||0,function(){t(),e=null},null,1)).start()})),r([Y,U],v),r(x,g)},listSize:function(){return W(d)[c("width")]},slideSize:function(t,n){return(t=h(t||0))?W(t.slide)[c("width")]+(n?0:E()):0},sliderSize:function(){return w(t.length-1,!0)-w(-1,!0)},totalSize:w,getPadding:function(t){return parseFloat(I(f,c("padding"+(t?"Right":"Left"))))||0}}},Clones:function(u,e,a){var t,n=J(u),i=n.on,c=n.emit,l=e.Elements,f=e.Slides,o=e.Direction.resolve,d=[];function r(){if(t=p()){var o=t,r=f.get().slice(),s=r.length;if(s){for(;r.length<o;)_(r,r);_(r.slice(-o),r.slice(0,o)).forEach(function(t,n){var e=n<o,i=function(t,n){t=t.cloneNode(!0);return O(t,a.classes.clone),t.id=u.root.id+"-clone"+kt(n+1),t}(t.slide,n);e?P(i,r[0].slide):k(l.list,i),_(d,i),f.register(i,n-o+(e?0:s),t.index)})}c(x)}}function s(){j(d),A(d)}function h(){t<p()&&c(U)}function p(){var t,n=a.clones;return u.is(Mn)?n||(n=(t=a[o("fixedWidth")]&&e.Layout.slideSize(0))&&wt(W(l.track)[o("width")]/t)||a[o("autoWidth")]&&u.length||2*a.perPage):n=0,n}return{mount:function(){r(),i(U,s),i(U,r),i([Y,x],h)},destroy:s}},Move:function(i,u,o){var a,t=J(i),n=t.on,c=t.emit,l=i.state.set,r=(t=u.Layout).slideSize,e=t.getPadding,s=t.totalSize,f=t.listSize,d=t.sliderSize,h=(t=u.Direction).resolve,p=t.orient,v=(t=u.Elements).list,g=t.track;function m(){u.Controller.isBusy()||(u.Scroll.cancel(),y(i.index),u.Slides.update())}function y(t){b(S(t,!0))}function b(t,n){i.is(Nn)||(n=n?t:function(t){{var n,e;i.is(Mn)&&(e=p(t-x()),n=_(!1,t)&&e<0,e=_(!0,t)&&0<e,(n||e)&&(t=w(t,e)))}return t}(t),I(v,"transform","translate"+h("X")+"("+n+"px)"),t!==n&&c(Mt))}function w(t,n){var e=t-C(n),i=d();return t-=p(i*(wt(G(e)/i)||1))*(n?1:-1)}function E(){b(x()),a.cancel()}function S(t,n){var e=p(s(t-1)-(t=t,"center"===(e=o.focus)?(f()-r(t,!0))/2:+e*r(t)||0));return n?(t=e,o.trimSpace&&i.is(Ln)?xt(t,0,p(d()-f())):t):e}function x(){var t=h("left");return W(v)[t]-W(g)[t]+p(e(!1))}function C(t){return S(t?u.Controller.getEnd():0,!!o.trimSpace)}function _(t,n){n=it(n)?x():n;var e=!0!==t&&p(n)<p(C(!1)),t=!1!==t&&p(n)>p(C(!0));return e||t}return{mount:function(){a=u.Transition,n([X,Ht,Y,U],m)},move:function(t,n,e,i){var o,r,s=x();t!==n&&(o=n<t,r=p(w(x(),o)),o?0<=r:r<=v["scroll"+h("Width")]-W(g)[h("width")])&&(E(),b(w(s,n<t),!0)),l(F),c(V,n,e,t),a.start(n,function(){l(3),c(Lt,n,e,t),i&&i()})},jump:y,translate:b,shift:w,cancel:E,toIndex:function(t){for(var n=u.Slides.get(),e=0,i=1/0,o=0;o<n.length;o++){var r=n[o].index,s=G(S(r,!0)-t);if(!(s<=i))break;i=s,e=r}return e},toPosition:S,getPosition:x,getLimit:C,exceededLimit:_,reposition:m}},Controller:function(r,o,s){var u,i,a,t=J(r).on,c=o.Move,l=c.getPosition,f=c.getLimit,d=c.toPosition,n=o.Slides,h=n.isEnough,e=n.getLength,p=r.is(Mn),v=r.is(Ln),g=M(E,!1),m=M(E,!0),y=s.start||0,b=y;function w(){u=e(!0),i=s.perMove,a=s.perPage;var t=xt(y,0,u-1);t!==y&&(y=t,c.reposition())}function E(t,n){var e=i||(A()?1:a),e=S(y+e*(t?-1:1),y,!(i||A()));return-1===e&&v&&!Et(l(),f(!t),1)?t?0:C():n?e:x(e)}function S(t,n,e){var i,o;return h()?(i=C(),(o=function(t){if(v&&"move"===s.trimSpace&&t!==y)for(var n=l();n===d(t,!0)&&St(t,0,r.length-1,!s.rewind);)t<y?--t:++t;return t}(t))!==t&&(n=t,t=o,e=!1),t<0||i<t?t=St(0,t,n,!0)||St(i,n,t,!0)?_(k(t)):p?e?t<0?-(u%a||a):u:t:s.rewind?t<0?i:0:-1:e&&t!==n&&(t=_(k(n)+(t<n?-1:1)))):t=-1,t}function x(t){return p?(t+u)%u||0:t}function C(){return yt(u-(A()||p&&i?1:a),0)}function _(t){return xt(A()?t:a*t,0,C())}function k(t){return A()?t:bt((t>=C()?u-1:t)/a)}function P(t){t!==y&&(b=y,y=t)}function A(){return!it(s.focus)||s.isNavigation}function L(){return r.state.is([F,tt])&&!!s.waitForTransition}return{mount:function(){w(),t([Y,U],w)},go:function(t,n,e){var i;L()||-1<(i=x(t=function(t){var n=y;{var e,i;N(t)?(i=t.match(/([+\-<>])(\d+)?/)||[],e=i[1],i=i[2],"+"===e||"-"===e?n=S(y+ +(""+e+(+i||1)),y):">"===e?n=i?_(+i):g(!0):"<"===e&&(n=m(!0))):n=p?t:xt(t,0,C())}return n}(t)))&&(n||i!==y)&&(P(i),c.move(t,i,b,e))},scroll:function(t,n,e,i){o.Scroll.scroll(t,n,e,function(){P(x(c.toIndex(c.getPosition()))),i&&i()})},getNext:g,getPrev:m,getAdjacent:E,getEnd:C,setIndex:P,getIndex:function(t){return t?b:y},toIndex:_,toPage:k,toDest:function(t){return t=c.toIndex(t),v?xt(t,0,C()):t},hasFocus:A,isBusy:L}},Arrows:function(o,t,n){var e,i,r=J(o),s=r.on,u=r.bind,a=r.emit,c=n.classes,l=n.i18n,f=t.Elements,d=t.Controller,h=f.arrows,p=f.track,v=h,g=f.prev,m=f.next,y={};function b(){var t=n.arrows;!t||g&&m||(v=h||z("div",c.arrows),g=x(!0),m=x(!1),e=!0,k(v,[g,m]),h||P(v,p)),g&&m&&(at(y,{prev:g,next:m}),lt(v,t?"":"none"),O(v,i=fn+"--"+n.direction),t&&(s([Lt,U,K],C),u(m,"click",M(S,">")),u(g,"click",M(S,"<")),C(),T([g,m],Yt,p.id),a("arrows:mounted",g,m))),s(Y,w)}function w(){E(),b()}function E(){r.destroy(),R(v,i),e?(j(h?[g,m]:v),g=m=null):D([g,m],on)}function S(t){d.go(t,!0)}function x(t){return ht('<button class="'+c.arrow+" "+(t?c.prev:c.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(n.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function C(){var t=o.index,n=d.getPrev(),e=d.getNext(),i=-1<n&&t<n?l.last:l.prev,t=-1<e&&e<t?l.first:l.next;g.disabled=n<0,m.disabled=e<0,T(g,Z,i),T(m,Z,t),a("arrows:updated",g,m,n,e)}return{arrows:y,mount:b,destroy:E}},Autoplay:function(t,n,e){var i,o,r=J(t),s=r.on,u=r.bind,a=r.emit,c=Bt(e.interval,t.go.bind(t,">"),function(t){var n=f.bar;n&&I(n,"width",100*t+"%"),a("autoplay:playing",t)}),l=c.isPaused,f=n.Elements,d=(r=n.Elements).root,h=r.toggle,p=e.autoplay,v="pause"===p;function g(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=v=!1,b(),a(jt))}function m(t){v=!!(t=void 0===t?!0:t),b(),l()||(c.pause(),a(qt))}function y(){v||(i||o?m(!1):g())}function b(){h&&(L(h,$,!v),T(h,Z,e.i18n[v?"play":"pause"]))}function w(t){t=n.Slides.getAt(t);c.set(t&&+H(t.slide,Dn)||e.interval)}return{mount:function(){p&&(e.pauseOnHover&&u(d,"mouseenter mouseleave",function(t){i="mouseenter"===t.type,y()}),e.pauseOnFocus&&u(d,"focusin focusout",function(t){o="focusin"===t.type,y()}),h&&u(h,"click",function(){v?g():m(!0)}),s([V,Wt,U],c.rewind),s(V,w),h&&T(h,Yt,f.track.id),v||g(),b())},destroy:c.cancel,play:g,pause:m,isPaused:l}},Cover:function(t,n,e){var i=J(t).on;function o(e){n.Slides.forEach(function(t){var n=st(t.container||t.slide,"img");n&&n.src&&r(e,n,t)})}function r(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),lt(n,t?"none":"")}return{mount:function(){e.cover&&(i(Rt,M(r,!0)),i([X,Y,U],M(o,!0)))},destroy:M(o,!1)}},Scroll:function(r,u,s){var a,c,t=J(r),n=t.on,l=t.emit,f=r.state.set,d=u.Move,h=d.getPosition,p=d.getLimit,v=d.exceededLimit,g=d.translate,m=1;function y(t,n,e,i,o){var r,s=h(),e=(E(),e&&(e=u.Layout.sliderSize(),r=Ct(t)*e*bt(G(t)/e)||0,t=d.toPosition(u.Controller.toDest(t%e))+r),Et(s,t,1));m=1,n=e?0:n||yt(G(t-s)/1.5,800),c=i,a=Bt(n,b,M(w,s,t,o),1),f(tt),l(Wt),a.start()}function b(){f(3),c&&c(),l(K)}function w(t,n,e,i){var o=h(),i=(t+(n-t)*(n=i,(t=s.easingFunc)?t(n):1-Math.pow(1-n,4))-o)*m;g(o+i),r.is(Ln)&&!e&&v()&&(m*=.6,G(i)<10&&y(p(v(!0)),600,!1,void 0,!0))}function E(){a&&a.cancel()}function e(){a&&!a.isPaused()&&(E(),b())}return{mount:function(){n(V,E),n([Y,U],e)},destroy:E,scroll:y,cancel:e}},Drag:function(s,o,u){var a,n,r,c,l,f,d,h,t=J(s),e=t.on,p=t.emit,v=t.bind,g=t.unbind,m=s.state,y=o.Move,b=o.Scroll,w=o.Controller,E=o.Elements.track,S=o.Media.reduce,i=(t=o.Direction).resolve,x=t.orient,C=y.getPosition,_=y.exceededLimit,k=!1;function I(){var t=u.drag;z(!t),c="free"===t}function H(t){var n,e,i;f=!1,d||(n=T(t),e=t.target,i=u.noDrag,ot(e,"."+gn+", ."+dn)||i&&ot(e,i)||!n&&t.button||(w.isBusy()?q(t,!0):(h=n?E:window,l=m.is([F,tt]),r=null,v(h,Pn,P,Tn),v(h,An,A,Tn),y.cancel(),b.cancel(),L(t))))}function P(t){var n,e,i,o,r;m.is(6)||(m.set(6),p("drag")),t.cancelable&&(l?(y.translate(a+M(t)/(k&&s.is(Ln)?5:1)),r=200<N(t),n=k!==(k=_()),(r||n)&&L(t),f=!0,p("dragging"),q(t)):G(M(r=t))>G(M(r,!0))&&(n=t,e=u.dragMinThreshold,i=et(e),o=i&&e.mouse||0,i=(i?e.touch:+e)||10,l=G(M(n))>(T(n)?i:o),q(t)))}function A(t){var n,e,i;m.is(6)&&(m.set(3),p("dragged")),l&&(e=function(t){return C()+Ct(t)*B(G(t)*(u.flickPower||600),c?1/0:o.Layout.listSize()*(u.flickMaxPages||1))}(n=function(t){if(s.is(Mn)||!k){var n=N(t);if(n&&n<200)return M(t)/n}return 0}(n=t)),i=u.rewind&&u.rewindByDrag,S(!1),c?w.scroll(e,0,u.snap):s.is(Nn)?w.go(x(Ct(n))<0?i?"<":"-":i?">":"+"):s.is(Ln)&&k&&i?w.go(_(!0)?">":"<"):w.go(w.toDest(e),!0),S(!0),q(t)),g(h,Pn,P),g(h,An,A),l=!1}function W(t){!d&&f&&q(t,!0)}function L(t){r=n,n=t,a=C()}function M(t,n){return D(t,n)-D(O(t),n)}function N(t){return gt(t)-gt(O(t))}function O(t){return n===t&&r||n}function D(t,n){return(T(t)?t.changedTouches[0]:t)["page"+i(n?"Y":"X")]}function T(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function z(t){d=t}return{mount:function(){v(E,Pn,nt,Tn),v(E,An,nt,Tn),v(E,kn,H,Tn),v(E,"click",W,{capture:!0}),v(E,"dragstart",q),e([X,Y],I)},disable:z,isDragging:function(){return l}}},Keyboard:function(n,t,e){var i,o,r=J(n),s=r.on,u=r.bind,a=r.unbind,c=n.root,l=t.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:c,u(i,Hn,p))}function d(){a(i,Hn)}function h(){var t=o;o=!0,v(function(){o=t})}function p(t){o||((t=In(t))===l(Gt)?n.go("<"):t===l(Xt)&&n.go(">"))}return{mount:function(){f(),s(Y,d),s(Y,f),s(V,h)},destroy:d,disable:function(t){o=t}}},LazyLoad:function(e,t,o){var n=J(e),i=n.on,r=n.off,s=n.bind,u=n.emit,a="sequential"===o.lazyLoad,c=[X,U,Lt,K],l=[];function f(){A(l),t.Slides.forEach(function(i){vt(i.slide,jn).forEach(function(t){var n=H(t,Wn),e=H(t,Fn);n===t.src&&e===t.srcset||(n=o.classes.spinner,n=st(e=t.parentElement,"."+n)||z("span",n,e),l.push([t,i,n]),t.src||lt(t,"none"))})}),a&&v()}function d(){(l=l.filter(function(t){var n=o.perPage*((o.preloadPages||1)+1)-1;return!t[1].isWithin(e.index,n)||h(t)})).length||r(c)}function h(t){var n=t[0];O(t[1].slide,xn),s(n,"load error",M(p,t)),T(n,"src",H(n,Wn)),T(n,"srcset",H(n,Fn)),D(n,Wn),D(n,Fn)}function p(t,n){var e=t[0],i=t[1];R(i.slide,xn),"error"!==n.type&&(j(t[2]),lt(e,""),u(Rt,e,i),u(x)),a&&v()}function v(){l.length&&h(l.shift())}return{mount:function(){o.lazyLoad&&(f(),i(U,f),a||i(c,d))},destroy:M(A,l)}},Pagination:function(f,t,d){var h,p,n=J(f),v=n.on,g=n.emit,m=n.bind,y=t.Slides,b=t.Elements,e=t.Controller,w=e.hasFocus,i=e.getIndex,s=e.go,u=t.Direction.resolve,E=[];function S(){h&&(j(b.pagination?o(h.children):h),R(h,p),A(E),h=null),n.destroy()}function x(t){s(">"+t,!0)}function C(t,n){var e=E.length,i=In(n),o=_(),r=-1,o=(i===u(Xt,!1,o)?r=++t%e:i===u(Gt,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1),E[r]);o&&(ft(o.button),s(">"+r),q(n,!0))}function _(){return d.paginationDirection||d.direction}function k(t){return E[e.toPage(t)]}function P(){var t,n=k(i(!0)),e=k(i());n&&(R(t=n.button,$),D(t,Jt),T(t,Ut,-1)),e&&(O(t=e.button,$),T(t,Jt,!0),T(t,Ut,"")),g("pagination:updated",{list:h,items:E},n,e)}return{items:E,mount:function t(){if(S(),v([Y,U],t),d.pagination&&y.isEnough()){v([V,Wt,K],P);var n=f.length,e=d.classes,i=d.i18n,o=d.perPage,r=w()?n:wt(n/o);O(h=b.pagination||z("ul",e.pagination,b.track.parentElement),p=vn+"--"+_()),T(h,Q,"tablist"),T(h,Z,i.select),T(h,$t,_()===Vt?"vertical":"");for(var s=0;s<r;s++){var u=z("li",null,h),a=z("button",{class:e.page,type:"button"},u),c=y.getIn(s).map(function(t){return t.slide.id}),l=!w()&&1<o?i.pageX:i.slideX;m(a,"click",M(x,s)),d.paginationKeyboard&&m(a,"keydown",M(C,s)),T(u,Q,"presentation"),T(a,Q,"tab"),T(a,Yt,c.join(" ")),T(a,Z,_t(l,s+1)),T(a,Ut,-1),E.push({li:u,button:a,page:s})}P(),g("pagination:mounted",{list:h,items:E},k(f.index))}},destroy:S,getAt:k,update:P}},Sync:function(e,t,n){var i=n.isNavigation,o=n.slideFocus,r=[];function s(){var t,n;e.splides.forEach(function(t){t.isParent||(a(e,t.splide),a(t.splide,e))}),i&&(t=J(e),(n=t.on)(Nt,l),n(It,f),n([X,Y],c),r.push(t),t.emit(Ft,e.splides))}function u(){r.forEach(function(t){t.destroy()}),A(r)}function a(t,i){t=J(t);t.on(V,function(t,n,e){i.go(i.is(Mn)?e:t)}),r.push(t)}function c(){T(t.Elements.list,$t,n.direction===Vt?"vertical":"")}function l(t){e.go(t.index)}function f(t,n){b(qn,In(n))&&(l(t),q(n))}return{setup:function(){e.options={slideFocus:it(o)?i:o}},mount:s,destroy:u,remount:function(){u(),s()}}},Wheel:function(s,u,a){var t=J(s).bind,c=0;function n(t){var n,e,i,o,r;t.cancelable&&(n=(r=t.deltaY)<0,e=gt(t),i=a.wheelMinThreshold||0,o=a.wheelSleep||0,G(r)>i&&o<e-c&&(s.go(n?"<":">"),c=e),r=n,a.releaseWheel&&!s.state.is(F)&&-1===u.Controller.getAdjacent(r)||q(t))}return{mount:function(){a.wheel&&t(u.Elements.track,"wheel",n,Tn)}}},Live:function(t,n,e){var i=J(t).on,o=n.Elements.track,r=e.live&&!e.isNavigation,s=z("span",bn);function u(t){r&&T(o,nn,t?"off":"polite")}return{mount:function(){r&&(u(!n.Autoplay.isPaused()),T(o,en,"additions"),s.textContent="…",i(jt,M(u,!0)),i(qt,M(u,!1)),i([Lt,K],M(k,o,s)))},disable:u,destroy:function(){D(o,[nn,en]),j(s)}}}}),Bn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:an,clone:cn,arrows:fn,arrow:dn,prev:hn,next:pn,pagination:vn,page:gn,spinner:E+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Gn(t,i,n){var e=J(t).on;return{mount:function(){e([X,U],function(){v(function(){i.Slides.style("transition","opacity "+n.speed+"ms "+n.easing)})})},start:function(t,n){var e=i.Elements.track;I(e,"height",S(W(e).height)),v(function(){n(),I(e,"height","")})},cancel:nt}}function Xn(r,t,s){var u,n=J(r).bind,a=t.Move,c=t.Controller,l=t.Scroll,e=t.Elements.list,f=M(I,e,"transition");function i(){f(""),l.cancel()}return{mount:function(){n(e,"transitionend",function(t){t.target===e&&u&&(i(),u())})},start:function(t,n){var e=a.toPosition(t,!0),i=a.getPosition(),o=function(t){var n=s.rewindSpeed;if(r.is(Ln)&&n){var e=c.getIndex(!0),i=c.getEnd();if(0===e&&i<=t||i<=e&&0===t)return n}return s.speed}(t);1<=G(e-i)&&1<=o?s.useScroll?l.scroll(e,o,!1,n):(f("transform "+o+"ms "+s.easing),a.translate(e,!0),u=n):(a.jump(t),n())},cancel:i}}n=function(){function e(t,n){this.event=J(),this.Components={},this.state=c(1),this.splides=[],this._o={},this._E={};t=N(t)?pt(document,t):t;mt(t,t+" is invalid."),n=d({label:H(this.root=t,Z)||"",labelledby:H(t,Qt)||""},Bn,e.defaults,n||{});try{d(n,JSON.parse(H(t,u)))}catch(t){mt(!1,"Invalid JSON")}this._o=Object.create(d({},n))}var t=e.prototype;return t.mount=function(t,n){var e=this,i=this.state,o=this.Components;return mt(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=n||this._T||(this.is(Nn)?Gn:Xn),this._E=t||this._E,w(at({},Rn,this._E,{Transition:this._T}),function(t,n){t=t(e,o,e._o);(o[n]=t).setup&&t.setup()}),w(o,function(t){t.mount&&t.mount()}),this.emit(X),O(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},t.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},t.go=function(t){return this._C.Controller.go(t),this},t.on=function(t,n){return this.event.on(t,n),this},t.off=function(t){return this.event.off(t),this},t.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(o(arguments,1))),this},t.add=function(t,n){return this._C.Slides.add(t,n),this},t.remove=function(t){return this._C.Slides.remove(t),this},t.is=function(t){return this._o.type===t},t.refresh=function(){return this.emit(U),this},t.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?J(this).on("ready",this.destroy.bind(this,n)):(w(this._C,function(t){t.destroy&&t.destroy(n)},!0),t.emit(a),t.destroy(),n&&A(this.splides),e.set(7)),this},_createClass(e,[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}();return n.defaults={},n.STATES=e,n}),document.querySelector(".header__burger-menu").onclick=function(){this.classList.toggle("header__burger-menu_open"),document.querySelector(".top-nav").classList.toggle("top-nav_open")};const questionsBtns=document.querySelectorAll(".question__btn");questionsBtns.length&&questionsBtns.forEach(t=>{t.onclick=function(){const t=this.closest(".question");t.classList.toggle("question_open")}}),new Splide(".reviews__slider .splide",{type:"loop",perPage:1,perMove:1,arrows:!1}).mount(),new WOW({offset:100,mobile:!1}).init(),document.body.style.width=document.documentElement.clientWidth+"px",document.body.style.height=document.body.clientHeight+"px";