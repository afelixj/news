window.jnews=window.jnews||{},window.jnews.library=window.jnews.library||{},window.jnews.library=function(){"use strict";var e=this;e.win=window,e.doc=document,e.noop=function(){},e.globalBody=e.doc.getElementsByTagName("body")[0],e.globalBody=e.globalBody?e.globalBody:e.doc,e.win.jnewsDataStorage=e.win.jnewsDataStorage||{_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}},e.windowWidth=function(){return e.win.innerWidth||e.docEl.clientWidth||e.globalBody.clientWidth},e.windowHeight=function(){return e.win.innerHeight||e.docEl.clientHeight||e.globalBody.clientHeight},e.requestAnimationFrame=e.win.requestAnimationFrame||e.win.webkitRequestAnimationFrame||e.win.mozRequestAnimationFrame||e.win.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},e.cancelAnimationFrame=e.win.cancelAnimationFrame||e.win.webkitCancelAnimationFrame||e.win.webkitCancelRequestAnimationFrame||e.win.mozCancelAnimationFrame||e.win.msCancelRequestAnimationFrame||e.win.oCancelRequestAnimationFrame||function(e){clearTimeout(e)},e.classListSupport="classList"in document.createElement("_"),e.hasClass=e.classListSupport?function(e,t){return e.classList.contains(t)}:function(e,t){return e.className.indexOf(t)>=0},e.addClass=e.classListSupport?function(t,n){e.hasClass(t,n)||t.classList.add(n)}:function(t,n){e.hasClass(t,n)||(t.className+=" "+n)},e.removeClass=e.classListSupport?function(t,n){e.hasClass(t,n)&&t.classList.remove(n)}:function(t,n){e.hasClass(t,n)&&(t.className=t.className.replace(n,""))},e.objKeys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.isObjectSame=function(e,t){var n=!0;return JSON.stringify(e)!==JSON.stringify(t)&&(n=!1),n},e.extend=function(){for(var e,t,n,o=arguments[0]||{},i=1,a=arguments.length;i<a;i++)if(null!==(e=arguments[i]))for(t in e)o!==(n=e[t])&&void 0!==n&&(o[t]=n);return o},e.dataStorage=e.win.jnewsDataStorage,e.isVisible=function(e){return 0!==e.offsetWidth&&0!==e.offsetHeight||e.getBoundingClientRect().length},e.getHeight=function(e){return e.offsetHeight||e.clientHeight||e.getBoundingClientRect().height},e.getWidth=function(e){return e.offsetWidth||e.clientWidth||e.getBoundingClientRect().width},e.supportsPassive=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e.supportsPassive=!0}});"createEvent"in e.doc?e.win.addEventListener("test",null,t):"fireEvent"in e.doc&&e.win.attachEvent("test",null)}catch(e){}e.passiveOption=!!e.supportsPassive&&{passive:!0},e.setStorage=function(e,t){e="jnews-"+e;var n={expired:Math.floor(((new Date).getTime()+432e5)/1e3)};t=Object.assign(n,t);localStorage.setItem(e,JSON.stringify(t))},e.getStorage=function(e){e="jnews-"+e;var t=localStorage.getItem(e);return null!==t&&0<t.length?JSON.parse(localStorage.getItem(e)):{}},e.expiredStorage=function(){var t,n="jnews-";for(var o in localStorage)o.indexOf(n)>-1&&"undefined"!==(t=e.getStorage(o.replace(n,""))).expired&&t.expired<Math.floor((new Date).getTime()/1e3)&&localStorage.removeItem(o)},e.addEvents=function(t,n,o){for(var i in n){var a=["touchstart","touchmove"].indexOf(i)>=0&&!o&&e.passiveOption;"createEvent"in e.doc?t.addEventListener(i,n[i],a):"fireEvent"in e.doc&&t.attachEvent("on"+i,n[i])}},e.removeEvents=function(t,n){for(var o in n)"createEvent"in e.doc?t.removeEventListener(o,n[o]):"fireEvent"in e.doc&&t.detachEvent("on"+o,n[o])},e.triggerEvents=function(t,n,o){var i;o=o||{detail:null};return"createEvent"in e.doc?(!(i=e.doc.createEvent("CustomEvent")||new CustomEvent(n)).initCustomEvent||i.initCustomEvent(n,!0,!1,o),void t.dispatchEvent(i)):"fireEvent"in e.doc?((i=e.doc.createEventObject()).eventType=n,void t.fireEvent("on"+i.eventType,i)):void 0},e.getParents=function(t,n){void 0===n&&(n=e.doc);for(var o=[],i=t.parentNode,a=!1;!a;)if(i){var r=i;r.querySelectorAll(n).length?a=!0:(o.push(r),i=r.parentNode)}else o=[],a=!0;return o},e.forEach=function(e,t,n){for(var o=0,i=e.length;o<i;o++)t.call(n,e[o],o)},e.getText=function(e){return e.innerText||e.textContent},e.setText=function(e,t){var n="object"==typeof t?t.innerText||t.textContent:t;e.innerText&&(e.innerText=n),e.textContent&&(e.textContent=n)},e.httpBuildQuery=function(t){return e.objKeys(t).reduce(function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(i,a){var r=n[a];a=encodeURIComponent(a);var s=o?"".concat(o,"[").concat(a,"]"):a;return null==r||"function"==typeof r?(i.push("".concat(s,"=")),i):["number","boolean","string"].includes(typeof r)?(i.push("".concat(s,"=").concat(encodeURIComponent(r))),i):(i.push(e.objKeys(r).reduce(t(r,s),[]).join("&")),i)}}(t),[]).join("&")},e.get=function(t,n,o,i){return o="function"==typeof o?o:e.noop,e.ajax("GET",t,n,o,i)},e.post=function(t,n,o,i){return o="function"==typeof o?o:e.noop,e.ajax("POST",t,n,o,i)},e.ajax=function(t,n,o,i,a){var r=new XMLHttpRequest,s=n,c=e.httpBuildQuery(o);if(t=-1!=["GET","POST"].indexOf(t)?t:"GET",r.open(t,s+("GET"==t?"?"+c:""),!0),"POST"==t&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.onreadystatechange=function(){4===r.readyState&&200<=r.status&&300>r.status&&"function"==typeof i&&i.call(void 0,r.response)},void 0!==a&&!a){return{xhr:r,send:function(){r.send("POST"==t?c:null)}}}return r.send("POST"==t?c:null),{xhr:r}},e.scrollTo=function(t,n,o){function i(e,t,n){this.start=this.position(),this.change=e-this.start,this.currentTime=0,this.increment=20,this.duration=void 0===n?500:n,this.callback=t,this.finish=!1,this.animateScroll()}return Math.easeInOutQuad=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},i.prototype.stop=function(){this.finish=!0},i.prototype.move=function(t){e.doc.documentElement.scrollTop=t,e.globalBody.parentNode.scrollTop=t,e.globalBody.scrollTop=t},i.prototype.position=function(){return e.doc.documentElement.scrollTop||e.globalBody.parentNode.scrollTop||e.globalBody.scrollTop},i.prototype.animateScroll=function(){this.currentTime+=this.increment;var t=Math.easeInOutQuad(this.currentTime,this.start,this.change,this.duration);this.move(t),this.currentTime<this.duration&&!this.finish?e.requestAnimationFrame.call(e.win,this.animateScroll.bind(this)):this.callback&&"function"==typeof this.callback&&this.callback()},new i(t,n,o)},e.unwrap=function(t){var n,o=t;e.forEach(t,(function(e,t){n?n+=e:n=e})),o.replaceWith(n)},e.performance={start:function(e){performance.mark(e+"Start")},stop:function(e){performance.mark(e+"End"),performance.measure(e,e+"Start",e+"End")}},e.fps=function(){var t=0,n=0,o=0;!function(){var i=t=0,a=0,r=0,s=document.getElementById("fpsTable"),c=function(t){void 0===document.getElementsByTagName("body")[0]?e.requestAnimationFrame.call(e.win,(function(){c(t)})):document.getElementsByTagName("body")[0].appendChild(t)};null===s&&((s=document.createElement("div")).style.position="fixed",s.style.top="120px",s.style.left="10px",s.style.width="100px",s.style.height="20px",s.style.border="1px solid black",s.style.fontSize="11px",s.style.zIndex="100000",s.style.backgroundColor="white",s.id="fpsTable",c(s));var l=function(){o++,n=Date.now(),(a=(o/(r=(n-t)/1e3)).toPrecision(2))!=i&&(i=a,s.innerHTML=i+"fps"),1<r&&(t=n,o=0),e.requestAnimationFrame.call(e.win,l)};l()}()},e.instr=function(e,t){for(var n=0;n<t.length;n++)if(-1!==e.toLowerCase().indexOf(t[n].toLowerCase()))return!0},e.winLoad=function(t,n){function o(o){if("complete"===e.doc.readyState||"interactive"===e.doc.readyState)return!o||n?setTimeout(t,n||1):t(o),1}o()||e.addEvents(e.win,{load:o})},e.docReady=function(t,n){function o(o){if("complete"===e.doc.readyState||"interactive"===e.doc.readyState)return!o||n?setTimeout(t,n||1):t(o),1}o()||e.addEvents(e.doc,{DOMContentLoaded:o})},e.fireOnce=function(){e.docReady((function(){e.assets=e.assets||[],e.assets.length&&(e.boot(),e.load_assets())}),50)},e.boot=function(){e.length&&e.doc.querySelectorAll("style[media]").forEach((function(e){"not all"==e.getAttribute("media")&&e.removeAttribute("media")}))},e.create_js=function(t,n){var o=e.doc.createElement("script");switch(o.setAttribute("src",t),n){case"defer":o.setAttribute("defer",!0);break;case"async":o.setAttribute("async",!0);break;case"deferasync":o.setAttribute("defer",!0),o.setAttribute("async",!0)}e.globalBody.appendChild(o)},e.load_assets=function(){"object"==typeof e.assets&&e.forEach(e.assets.slice(0),(function(t,n){var o="";t.defer&&(o+="defer"),t.async&&(o+="async"),e.create_js(t.url,o);var i=e.assets.indexOf(t);i>-1&&e.assets.splice(i,1)})),e.assets=jnewsoption.au_scripts=window.jnewsads=[]},e.setCookie=function(e,t,n){var o="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),o="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/"},e.getCookie=function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},e.eraseCookie=function(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},e.docReady((function(){e.globalBody=e.globalBody==e.doc?e.doc.getElementsByTagName("body")[0]:e.globalBody,e.globalBody=e.globalBody?e.globalBody:e.doc})),e.winLoad((function(){e.winLoad((function(){var t=!1;if(void 0!==window.jnewsadmin)if(void 0!==window.file_version_checker){var n=e.objKeys(window.file_version_checker);n.length?n.forEach((function(e){t||"10.0.4"===window.file_version_checker[e]||(t=!0)})):t=!0}else t=!0;t&&(window.jnewsHelper.getMessage(),window.jnewsHelper.getNotice())}),2500)}))},window.jnews.library=new window.jnews.library;