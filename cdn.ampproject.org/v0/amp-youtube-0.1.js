;
(self.AMP=self.AMP||[]).push({m:0,v:"2308112021001",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function a(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return u(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s;function f(){return s||(s=Promise.resolve(void 0))}var c=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function h(t){return new Promise((function(n){n(t())}))}var l=Array.isArray;function v(t){return l(t)?t:[t]}var d=Object.prototype,p=d.hasOwnProperty,m=d.toString;function y(t){return"[object Object]"===m.call(t)}function b(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function w(t){return"number"==typeof t&&isFinite(t)}function g(t,n,i,r,e,o,u,a,s,f,c){return t}function k(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function j(t){return(t.ownerDocument||t).defaultView}var q,x,O={bubbles:!0,cancelable:!0};function S(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function M(t,n){t.insertBefore(n,t.firstChild)}function E(t){return t.parent&&t.parent!=t}function T(t,n,i,r){var e=i||{};g(t.ownerDocument);var o=r||O,u=o.bubbles,a=o.cancelable,s=new MessageEvent(n,{data:e,bubbles:u,cancelable:a});t.dispatchEvent(s)}function R(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function A(t,n,i,r){for(var e,o=a(v(t),!0);!(e=o()).done;){var u=e.value,s=n.getAttribute(u);null!==s?i.setAttribute(u,s):r&&i.removeAttribute(u)}}function P(t){var n=t.ownerDocument||t;return q&&q.ownerDocument===n||(q=n.createElement("div")),U}function U(t){return function(t,n){if(g(1===n.length),g(Array.isArray(n)||(r=n,p.call(r,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var i=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(t){return n[0]}});t.innerHTML=i.createHTML("ignored")}else t.innerHTML=n[0];var r,e=t.firstElementChild;return g(e),g(!e.nextElementSibling),t.removeChild(e),e}(q,t)}function Y(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function _(t){for(var n,i=null,r="",e=a(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=Y(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function I(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function C(t){var n=_.apply(null,arguments);setTimeout((function(){throw I(n),n}))}function N(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){C(t)}}function z(t){var n=_.apply(null,arguments);return n.expected=!0,n}var L=["Webkit","webkit","Moz","moz","ms","O","o"],B={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function D(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;x||(x=b());var r=x[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<L.length;i++){var r=L[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(x[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),L.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}function W(t,n){for(var i in n)D(t,i,n[i])}var J=/vertical/,V=new WeakMap,F=new WeakMap,H=new WeakMap;function Z(t){var n=V.get(t);return n||(n=new t.ResizeObserver($),V.set(t,n)),n}function $(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=F.get(e);if(o){H.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;G(a.type,s,r)}}}}}function G(t,n,i){if(0==t){var r=i.contentRect,e=r.height;N(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=j(f),h=J.test(function(t,n){return t.getComputedStyle(n)||B}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}N(n,o)}}var K=function(){function t(t){this.tp=t,this.ib=!1,this.ob=!1,this.ub=this.ub.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.ib&&(this.ib=t,t?(this.ob=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=F.get(t);if(e||(e=[],F.set(t,e),Z(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=H.get(t);o&&setTimeout((function(){return G(1,i,o)}))}}}(this.tp,0,this.ub)):function(t,n){!function(t,n,i){var r=F.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){F.delete(t),H.delete(t);var e=t.ownerDocument.defaultView;e&&Z(e).unobserve(t)}}(t,0,n)}(this.tp,this.ub))},n.ub=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.ob){this.ob=i;var r=this.tp;i||r.pause()}},t}();function Q(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var X=self.__AMP_LOG;function tt(t){return X.user||(X.user=nt()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(X.user.win,t)?X.userForEmbed||(X.userForEmbed=nt()):X.user}function nt(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function it(t,n,i,r,e,o,u,a,s,f,c){return t}function rt(t,n,i,r,e,o,u,a,s,f,c){return tt().assert(t,n,i,r,e,o,u,a,s,f,c)}function et(t,n){return ft(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function ot(t,n){return ft(st(at(t)),n)}function ut(t,n){var i=st(at(t));return ht(i,n)?ft(i,n):null}function at(t){return t.nodeType?(n=j(t),et(n,"ampdoc")).getAmpDoc(t):t;var n}function st(t){var n=at(t);return n.isSingleDoc()?n.win:n}function ft(t,n){it(ht(t,n));var i=ct(t)[n];return i.obj||(it(i.ctor),it(i.context),i.obj=new i.ctor(i.context),it(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function ct(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function ht(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var lt,vt,dt,pt=function(t){return ut(t,"action")},mt=function(t){return et(t,"platform")},yt=function(t){return ft(t,"timer")},bt=function(t){return ut(t,"url")},wt=function(t){return ot(t,"viewport")};function gt(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=E(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function kt(t){var n,i=null===(n=lt)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){lt||(lt=new WeakMap,vt=new WeakMap),g(vt);var n=vt.get(t);return n||(n=gt((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),g(n),n.unobserve(o),g(lt),null===(e=lt.get(o))||void 0===e||e.resolve(t[r]),lt.delete(o))}}),t,{needsRootBounds:!0}),vt.set(t,n)),n}(j(t));g(lt),r.observe(t),i=new c,lt.set(t,i)}return i.promise}function jt(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,W(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,h((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function qt(t){return t.querySelector("video, iframe")}function xt(t,n){var i=h((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];I(z.apply(null,i))}("TRYPLAY",t)})),i}function Ot(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==dt)return dt;dt=!1;try{var t={get capture(){return dt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return dt}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function St(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function Mt(t,n,i,r){return Ot(t,n,i,r)}function Et(t){return t.data}var Tt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Rt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function At(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var Pt=function(){function t(){this.fn=null}var n=t.prototype;return n.add=function(t){var n=this;return this.fn||(this.fn=[]),this.fn.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.fn&&(i=t,-1!=(r=(n=this.fn).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.fn&&(this.fn.length=0)},n.fire=function(t){if(this.fn)for(var n,i=a(this.fn.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.fn)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),Ut=function(){function t(){this.ty=!1,this.ny=new Pt}var n=t.prototype;return n.onSessionEnd=function(t){this.ny.add(t)},n.beginSession=function(){this.ty=!0},n.endSession=function(){this.ty&&this.ny.fire(),this.ty=!1},n.isSessionActive=function(){return this.ty},t}(),Yt={"title":"","artist":"","album":"","artwork":[{"src":""}]},_t="registered",It="load",Ct="playing",Nt="pause",zt="ended",Lt="muted",Bt="unmuted",Dt="ad_start",Wt="ad_end",Jt="playing_manual",Vt="paused",Ft="video-play",Ht="user-interacted";function Zt(t){t.signals().signal(Ht)}var $t="video-manager",Gt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=Q((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=b());var o="amp-extension=".concat(r);if(o){var u=At(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else M(t,n)}(t,a,At(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.iy=null,this.ey=null,this.oy=null,this.$r=yt(t.win),this.uy=pt(t.getHeadNode()),this.sy=function(){return n.hy()},this.ly=Q((function(){return new Xt(n.ampdoc,n)})),this.$r.delay(this.sy,1e3)}var n=t.prototype;return n.dispose=function(){if(this.ly().dispose(),this.ey.disconnect(),this.ey=null,this.iy)for(var t=0;t<this.iy.length;t++)this.iy[t].dispose()},n.hy=function(){for(var t=0;t<this.iy.length;t++){var n=this.iy[t];n.getPlayingState()!==Vt&&(on(n,"video-seconds-played"),this.vy(n))}this.$r.delay(this.sy,1e3)},n.vy=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(w(i)&&w(r)&&r>0){var e=i/r,o=St(this.ampdoc.win,"".concat($t,".").concat(n),{"time":i,"percent":e});this.uy.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;it(t);var i=t;if(this.py(t),t.supportsPlatform()&&!this.my(t)){this.ey||(this.ey=gt((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.yy(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.ey.observe(i.element),Mt(i.element,"reloaded",(function(){return r.videoLoaded()})),this.iy=this.iy||[];var r=new Qt(this,t);this.iy.push(r);var e=r.video.element;T(e,_t),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(_t),e.classList.add("i-amphtml-video-interface")}},n.py=function(t){i("play",(function(){return xt(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Zt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.my=function(t){if(Kt(this.oy,t))return this.oy;for(var n=0;this.iy&&n<this.iy.length;n++){var i=this.iy[n];if(Kt(i,t))return this.oy=i,i}return null},n.yy=function(t){return it(this.my(t))},n.registerForAutoFullscreen=function(t){this.ly().register(t)},n.by=function(){return this.ly()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=tt().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.yy(r);return(e?e.getAnalyticsDetails():f()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.yy(t).getPlayingState()},n.isMuted=function(t){return this.yy(t).isMuted()},n.userInteracted=function(t){return this.yy(t).userInteracted()},n.isRollingAd=function(t){return this.yy(t).isRollingAd()},n.pauseOtherVideos=function(t){this.iy.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Jt&&n.video.pause()}))},t}(),Kt=function(t,n){return!!t&&(t.video===n||t.video.element===n)},Qt=function(){function t(t,n){var i=this;this.wy=t,this.wi=t.ampdoc,this.video=n,this.gy=!0,this.ky=!1,this.ib=!1,this.jy=!1,this.Fi=!1,this.qy=new Ut,this.qy.onSessionEnd((function(){return on(i,"video-session")})),this.xy=new Ut,this.xy.onSessionEnd((function(){return on(i,"video-session-visible")})),this.Oy=Q((function(){return new en(i.wi.win,i)})),this.Sy=!1,this.My=!1,this.Ey=null,this.G=!1,this.Ty=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.wy.installAutoplayStyles(),this.Ry=Yt,this.Ay=function(){xt(i.video,!1)},this.Py=function(){i.video.pause()},Mt(n.element,It,(function(){return i.videoLoaded()})),Mt(n.element,Nt,(function(){return i.Uy()})),Mt(n.element,"play",(function(){i.Ty=!0,on(i,Ft)})),Mt(n.element,Ct,(function(){return i.Yy()})),Mt(n.element,Lt,(function(){return i.G=!0})),Mt(n.element,Bt,(function(){i.G=!1,i.wy.pauseOtherVideos(i)})),Mt(n.element,"amp:video:tick",(function(t){var n=Et(t),r=n.eventType;r&&i._y(r,n.vars)})),Mt(n.element,zt,(function(){i.jy=!1,on(i,"video-ended")})),Mt(n.element,Dt,(function(){i.jy=!0,on(i,"video-ad-start")})),Mt(n.element,Wt,(function(){i.jy=!1,on(i,"video-ad-end")})),n.signals().whenSignal(_t).then((function(){return i.Iy()})),this.Cy=Q((function(){var t="firstPlay",n=St(i.wi.win,t,{}),r=i.video.element;pt(r).trigger(r,t,n,1)})),this.Ny()}var i=t.prototype;return i.dispose=function(){this.Oy().stop()},i._y=function(t,i){var r=n({},"__amp:eventType",t);Object.keys(i).forEach((function(t){r["custom_".concat(t)]=i[t]})),on(this,"video-hosted-custom",r)},i.Ny=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.gy=!1,t.ib&&t.video.pause()}))},i.isMuted=function(){return this.G},i.isPlaybackManaged=function(){return this.gy},i.Iy=function(){this.zy()&&this.wy.registerForAutoFullscreen(this),this.hasAutoplay&&this.Ly()},i.zy=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&rt(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},i.Yy=function(){this.ib=!0,this.getPlayingState()==Jt&&(this.Cy(),this.wy.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=bt(t);if(n&&n.artwork){var r=n.artwork;it(l(r)),r.forEach((function(t){if(t){var n=y(t)?t.src:t;rt(i.isProtocolValid(n))}}))}}(u,this.Ry),t=this.wi.win,n=this.Ry,i=this.Ay,r=this.Py,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(Yt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.qy.beginSession(),this.Fi&&this.xy.beginSession(),this.Ty||on(this,Ft)},i.Uy=function(){on(this,"video-pause"),this.ib=!1,this.My?this.My=!1:this.qy.endSession()},i.videoLoaded=function(){this.ky=!0,this.Ey=qt(this.video.element),this.By(),this.Oy().start(),this.Fi&&this.Dy()},i.By=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Ry=b(this.video.getMetadata()));var t=this.wi.win.document;if(!this.Ry.artwork||0==this.Ry.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=k(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.Ry.artwork=[{"src":n}])}if(!this.Ry.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Ey.getAttribute("title")||this.Ey.getAttribute("aria-label")||t.title;i&&(this.Ry.title=i)}}},i.Wy=function(){this.ky&&this.Dy()},i.Dy=function(){var t=this;this.wi.isVisible()&&jt(this.wi.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.Jy():t.Vy()}))},i.Ly=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),jt(this.wi.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.Fy()):t.video.showControls()}))},i.Fy=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Ht)){var e=function(t,n){for(var i=P(n)(Rt),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return S(r),i}(0,r),o=[e],u=[Mt(r,Nt,(function(){return f(!1)})),Mt(r,Ct,(function(){return f(!0)})),Mt(r,Dt,(function(){s(!1),n.showControls()})),Mt(r,Wt,(function(){s(!0),n.hideControls()})),Mt(r,Bt,(function(){return Zt(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=P(t)(Tt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.Ry);o.push(a),u.push(Mt(a,"click",(function(){return Zt(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.jy&&s(!1),n.signals().whenSignal(Ht).then((function(){t.Cy(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){S(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},i.Jy=function(){this.gy&&(this.Fi?(this.xy.beginSession(),xt(this.video,!0),this.Sy=!0):(this.ib&&this.xy.endSession(),this.video.pause(),this.My=!0))},i.Vy=function(){this.Fi?this.xy.beginSession():this.ib&&this.xy.endSession()},i.updateVisibility=function(t){var n=this.Fi;this.Fi=t,t!=n&&this.Wy()},i.getPlayingState=function(){return this.ib?this.ib&&this.Sy&&!this.userInteracted()?"playing_auto":Jt:Vt},i.isRollingAd=function(){return this.jy},i.userInteracted=function(){return null!=this.video.signals().get(Ht)},i.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([jt(this.wi.win),kt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.G,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),Xt=function(){function t(t,n){var i=this;this.wy=n,this.wi=t,this.Hy=null,this.Zy=null,this.iy=[],this.$y=[],this.Gy=function(){return i.Ky()},this.Qy=function(t){return i.Xy(t)==Jt},this.Yb=function(t,n){return i.Hb(t,n)},this.$b(),this.Kb()}var n=t.prototype;return n.dispose=function(){this.$y.forEach((function(t){return t()})),this.$y.length=0},n.register=function(t){var n=t.video,i=n.element;this.Qb(i)&&(this.iy.push(n),Mt(i,Nt,this.Gy),Mt(i,Ct,this.Gy),Mt(i,zt,this.Gy),n.signals().whenSignal(Ht).then(this.Gy),this.Ky())},n.Kb=function(){var t=this,n=this.wi.getRootNode(),i=function(){return t.tw()};this.$y.push(Mt(n,"webkitfullscreenchange",i),Mt(n,"mozfullscreenchange",i),Mt(n,"fullscreenchange",i),Mt(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.wi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.Qb=function(t){if("video"==qt(t).tagName.toLowerCase())return!0;var n=mt(this.wi.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.tw=function(){this.Hy=null},n.$b=function(){var t=this,n=this.wi.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.$y.push(Mt(r,"change",(function(){return t.nw()})))}this.$y.push(Mt(n,"orientationchange",(function(){return t.nw()})))},n.nw=function(){this.isInLandscape()?null!=this.Zy&&this.iw(this.Zy):this.Hy&&this.rw(this.Hy)},n.iw=function(t){var n=mt(this.wi.win);this.Hy=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.ew(t).then((function(){return t.fullscreenEnter()}))},n.rw=function(t){this.Hy=null,this.ew(t,"center").then((function(){return t.fullscreenExit()}))},n.ew=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.ow();return this.uw().then((function(){return kt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return f();var s=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,s)}))},n.ow=function(){return wt(this.wi)},n.uw=function(){return yt(this.wi.win).promise(330)},n.Ky=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.Zy);this.Zy=null;var n=this.iy.filter(this.Qy).map((function(t){return kt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.Yb)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.Zy=n})):t.Zy}))},n.Hb=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=wt(this.wi),a=tn(u,i),s=tn(u,e);return a<s||a>s?a-s:i.top-e.top},n.Xy=function(t){return this.wy.getPlayingState(t)},t}();function tn(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function nn(t){return 10*t*5}var rn=function(t){return!!t&&!isNaN(t)&&t>1},en=function(){function t(t,n){this.$r=yt(t),this.aw=n,this.$y=null,this.sw=0,this.fw=0}var n=t.prototype;return n.start=function(){var t=this,n=this.aw.video.element;this.stop(),this.$y=this.$y||[],this.cw()?this.hw(this.fw):this.$y.push(function(n,i,r,e){var o=function(){t.cw()&&t.hw(t.fw)},u=Ot(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.$y.push(Mt(n,zt,(function(){t.cw()&&t.lw(100)})))},n.stop=function(){if(this.$y){for(;this.$y.length>0;)this.$y.pop()();this.fw++}},n.cw=function(){var t=this.aw.video,n=t.getDuration();if(!rn(n))return!1;if(nn(n)<250){var i=Math.ceil(5);this.dw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.dw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];tt().warn.apply(tt(),[$t].concat(n))},n.hw=function(t){var n,i=this;if(t==this.fw){var r=this.aw,e=this.$r,o=r.video,u=function(){return i.hw(t)};if(r.getPlayingState()!=Vt){var a=o.getDuration();if(rn(a)){var s=(n=nn(a),g(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);it(w(c)),this.lw(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n.lw=function(t){t<=0||this.sw!=t&&(this.sw=t,this.pw(t))},n.pw=function(t){on(this.aw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function on(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),T(r.element,n,t)}))}var un=["<iframe frameborder=0 allowfullscreen></iframe>"],an=["<img placeholder referrerpolicy=origin>"],sn="amp-youtube",fn=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(s,t);var e,u,a=(e=s,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(u){var i=r(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function s(t){var n;return(n=a.call(this,t)).mw=null,n.yw=null,n.G=!1,n.bw=!1,n.ww=!1,n.Zv=null,n.Be=null,n.gw=null,n.kw=null,n.jw=null,n.nb=null,n.qw=null,n.Ib=new K(n.element),n}var f=s.prototype;return f.preconnectCallback=function(t){var n=et(this.win,"preconnect"),i=this.getAmpDoc();n.url(i,this.xw()),n.url(i,"https://s.ytimg.com",t),n.url(i,"https://i.ytimg.com",t)},f.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},f.renderOutsideViewport=function(){return.75},f.buildCallback=function(){this.mw=this.Ow(),this.yw=this.Sw(),this.Mw();var t,n,i,r,e=new c;this.kw=e.promise,this.jw=e.resolve,t=this.element,n="video-manager",i=Gt,function(t,n,i,r,e,o){var u=ct(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&ft(t,i))}(st(r=at(t)),r,n,i)},f.Ew=function(){this.Mw();var t="omit"===this.Tw()?"-nocookie":"",n="https://www.youtube".concat(t,".com/embed/"),i=this.mw?"".concat(encodeURIComponent(this.mw||""),"?"):"live_stream?channel=".concat(encodeURIComponent(this.yw||""),"&");return"".concat(n).concat(i,"enablejsapi=1&amp=1")},f.xw=function(){if(this.gw)return this.gw;var t=this.Ew(),n=this.element,i=function(t,n,i){var r=t.dataset,e={},o=/^param(.+)/;for(var u in r){var a=u.match(o);a&&(e[a[1][0].toLowerCase()+a[1].substr(1)]=r[u])}return e}(n);return"autoplay"in i&&(delete i.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in i||(i.playsinline="1"),n.hasAttribute("autoplay")&&("iv_load_policy"in i||(i.iv_load_policy="".concat(3)),i.playsinline="1"),"loop"in i&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.bw=n.hasAttribute("loop")||"loop"in i&&"1"==i.loop,this.ww="playlist"in i,this.bw&&(this.ww?i.loop="1":"loop"in i&&delete i.loop),t=function(t,n){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(t,function(t){var n,i,r=[];for(var e in t){var o=t[e];if(null!=o){o=v(o);for(var u=0;u<o.length;u++)r.push((n=e,i=o[u],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return r.join("&")}(n))}(t,i),this.gw=t},f.layoutCallback=function(){var t,n,i,r,e=this,o=(t=this.xw(),i=P(n=this.element)(un),A(["referrerpolicy"],this.element,i),i.src=bt(n).assertHttpsUrl(t,n),R(i),n.appendChild(i),i);o.title=this.element.title||"YouTube video",function(t){var n=t.getAttribute("allow")||"";n+="autoplay;",t.setAttribute("allow",n)}(o),this.Zv=o,(r=this.element,ot(r,"video-manager")).register(this),this.nb=Mt(this.win,"message",this.Rw.bind(this)),this.bw&&!this.ww&&(this.qw=Mt(this.element,zt,(function(t){return e.play(!1)})));var u=this.loadPromise(this.Zv).then((function(){return yt(e.win).promise(300)})).then((function(){e.Aw(),T(e.element,It)}));return this.jw(u),u},f.unlayoutCallback=function(){this.Zv&&(S(this.Zv),this.Zv=null),this.nb&&this.nb(),this.qw&&this.qw();var t=new c;return this.kw=t.promise,this.jw=t.resolve,this.Ib.updatePlaying(!1),!0},f.pauseCallback=function(){this.Zv&&this.Zv.contentWindow&&this.pause()},f.mutatedAttributesCallback=function(t){null!=t["data-videoid"]&&(this.mw=this.Ow(),this.Zv&&this.Pw("loadVideoById",[this.mw]))},f.Sw=function(){return this.element.getAttribute("data-live-channelid")},f.Ow=function(){return this.element.getAttribute("data-videoid")},f.Tw=function(){return this.element.getAttribute("credentials")||"include"},f.Mw=function(){rt(!(this.mw&&this.yw)&&(this.mw||this.yw),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",this.element)},f.Pw=function(t,n){var i=this;this.kw.then((function(){if(i.Zv&&i.Zv.contentWindow){var r=JSON.stringify({"event":"command","func":t,"args":n||""});i.Zv.contentWindow.postMessage(r,"*")}}))},f.Rw=function(t){if(function(t,n,i){return!(!n||t.source!=n.contentWindow)&&"https://www.youtube.com"==t.origin}(t,this.Zv)){var i=Et(t);if((r=i)&&(y(r)||r.startsWith("{"))){var r,e,o=y(e=i)?e:k(e);if(null!=o){var u=o.event,a=o.info||{},s=this.element,f=a.playerState;if("infoDelivery"!=u||null==f){var c,h=a.muted;if("infoDelivery"==u&&a&&null!=h){if(this.G==h)return;return this.G=h,void T(s,(c=this.G,c?Lt:Bt))}if("initialDelivery"==u)return this.Be=a,void T(s,"loadedmetadata");"infoDelivery"!=u||void 0===a.currentTime||(this.Be.currentTime=a.currentTime)}else{var v;switch(f){case 1:this.Ib.updatePlaying(!0);break;case 2:case 0:this.Ib.updatePlaying(!1)}!function(t,n,i){if(null==i[n])return!1;var r=i[n];(l(r)?r:[r]).forEach((function(n){T(t,n)}))}(s,f.toString(),(v={},n(v,1,Ct),n(v,2,Nt),n(v,0,[zt,Nt]),v))}}}}},f.Aw=function(){this.Zv&&this.Zv.contentWindow.postMessage(JSON.stringify({"event":"listening"}),"*")},f.createPlaceholderCallback=function(){var t=this;if(!this.mw)return null;var n=P(this.element)(an),i=this.mw;return W(n,{"object-fit":"cover","visibility":"hidden"}),A(["aria-label"],this.element,n),n.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(i),"/sddefault.jpg#404_is_fine"),n.hasAttribute("aria-label")?n.setAttribute("alt","Loading video - "+n.getAttribute("aria-label")):n.setAttribute("alt","Loading video"),R(n),this.loadPromise(n).then((function(){if(120==n.naturalWidth&&90==n.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((function(){return n.src="https://i.ytimg.com/vi/".concat(encodeURIComponent(i),"/hqdefault.jpg"),t.loadPromise(n)})).then((function(){t.getVsync().mutate((function(){W(n,{"visibility":""})}))})),n},f.supportsPlatform=function(){return!0},f.isInteractive=function(){return!0},f.play=function(t){this.Pw("playVideo")},f.pause=function(){this.Pw("pauseVideo")},f.mute=function(){this.Pw("mute")},f.unmute=function(){this.Pw("unMute")},f.showControls=function(){},f.hideControls=function(){},f.fullscreenEnter=function(){var t,n;this.Zv&&(n=(t=this.Zv).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},f.fullscreenExit=function(){this.Zv&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.Zv)},f.isFullscreen=function(){return!!this.Zv&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.Zv)},f.getMetadata=function(){},f.preimplementsMediaSessionAPI=function(){return!0},f.preimplementsAutoFullscreen=function(){return!1},f.getCurrentTime=function(){return this.Be?this.Be.currentTime:NaN},f.getDuration=function(){return this.Be?this.Be.duration:NaN},f.getPlayedRanges=function(){return[]},f.seekTo=function(t){this.user().error(sn,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(sn,fn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-youtube-0.1.js.map