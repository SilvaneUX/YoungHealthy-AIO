/*! For license information please see app~4400d46f.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[485],{7222:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(6510);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,c)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function i(n,a,c,u){var l=h(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}const u={render:function(){return c(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <section class="about-web"></section>\n      <section class="fitur-web text-center"></section>\n      <section class="team-pengembang text-center mb-5"></section>\n      ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return c(i().mark((function t(){var e,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:document.title="About Us - Young Health",e=document.querySelector(".about-web"),r=document.querySelector(".fitur-web"),o=document.querySelector(".team-pengembang"),e.innerHTML=(0,n.GW)(),r.innerHTML=(0,n.O_)(),o.innerHTML=(0,n.XN)();case 7:case"end":return t.stop()}}),t)})))()}}},1226:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(6510),o=r(4163);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var d={};function p(){}function v(){}function y(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==e&&r.call(b,c)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,a,c,u){var l=h(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}const l={render:function(){return u(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <section class="content-kalkulator-bmi">\n      <div class="container ">\n        <div class="card mx-auto " style="margin-top:100px">\n        <h5 class="card-title text-center mt-4">Kalkulator BMI (IMT)</h5>\n        <div class="card-body">\n        <div class="mb-3">\n          <label for="jenis-kelamin" class="form-label">Apa Jenis Kelamin Kamu? </label>\n        </div>\n        <div class="d-grid gap-2 row mx-auto" aria-label="Basic radio toggle button group">\n          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>\n          <label class="btn btn-outline-primary" for="btnradio1">                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g clip-path="url(#hhg-gen-id1)"><path fill="#45A4FF" d="M11.203 7.633l1.914 1.914 6.397-6.397L17.6 1.235l-6.397 6.398z"></path><path fill="#45A4FF" d="M8.083 5.334a7.333 7.333 0 100 14.667 7.333 7.333 0 000-14.667zm0 11.96a4.626 4.626 0 110-9.253 4.626 4.626 0 010 9.252z"></path><path fill="#2D87F3" d="M7.508 8.077a4.626 4.626 0 100 9.181 4.627 4.627 0 010-9.181zM8.083 5.334a7.43 7.43 0 00-.575.022 7.334 7.334 0 010 14.622 7.333 7.333 0 10.575-14.644zM19.88 2.785v-.78L18.744.872h-.78l-2.707 2.707h1.55c.2 0 .364.163.364.365v1.55l2.707-2.708z"></path><path fill="#45A4FF" d="M18.043 0h-4.585a.365.365 0 00-.364.365v1.978c0 .201.163.364.364.364h4.22c.201 0 .365.163.365.365v4.22c0 .2.163.364.364.364h1.978a.365.365 0 00.365-.364V.365A.365.365 0 0020.385 0h-2.342z"></path></g><defs><clipPath id="hhg-gen-id1"><path fill="#fff" d="M0 0H20V20H0z" transform="translate(.75)"></path></clipPath></defs></svg>  Laki-laki</label>\n\n          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">\n          <label class="btn btn-outline-primary" for="btnradio2">                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#FE9DC2" d="M13.748 15.546h-1.503a.321.321 0 01-.321-.322v-3.7H9.577v3.7a.321.321 0 01-.322.322H7.753a.321.321 0 00-.321.321v1.704c0 .178.144.322.321.322h1.502c.178 0 .322.144.322.321v1.465c0 .178.144.321.321.321h1.704a.321.321 0 00.322-.321v-1.465c0-.177.144-.321.321-.321h1.503a.321.321 0 00.321-.322v-1.704a.322.322 0 00-.321-.321z"></path><path fill="#FC488D" d="M9.576 11.523v2.151a7.466 7.466 0 002.347 0v-2.15H9.576z"></path><path fill="#FE9DC2" d="M10.75 0a6.357 6.357 0 100 12.715A6.357 6.357 0 0010.75 0zm0 10.368a4.01 4.01 0 110-8.021 4.01 4.01 0 010 8.021z"></path><path fill="#FC488D" d="M10.157 2.391a4.01 4.01 0 100 7.934 4.011 4.011 0 010-7.934zM10.75 0c-.2 0-.398.01-.593.028a6.358 6.358 0 010 12.66A6.357 6.357 0 1010.75 0z"></path></svg>  Perempuan</label>\n        </div>\n        <div class="mb-3 mt-3">\n            <label for="berat-badan" class="form-label">Berapa Berat Badan Kamu ? (kg) </label>\n            <input type="number" class="form-control" id="bb" placeholder="Berat Badan">\n        </div>\n        <div class="mb-3">\n            <label for="tinggi-badan" class="form-label">Berapa Tinggi Kamu ? (cm) </label>\n            <input type="number" class="form-control" id="tt" placeholder="Tinggi Badan">\n        </div>\n        <div class="mb-3">\n            <label for="tinggi-badan" class="form-label">Berapa Umur Kamu ? (cm) </label>\n            <input type="number" class="form-control" id="umur" placeholder="Tinggi Badan">\n        </div>\n          <button id="bmiSubmit" type="submit" class="btn button d-grid gap-2 col-3  mx-auto">Hitung</button>\n          </div>\n        </div>\n      </div>\n\n        <div class="result">\n          <p>Hasil BMI Anda</p>\n          <div id="result">00.00</div>\n          <p class="comment-result"></p>\n        </div>\n\n        <div id="Modal" class="modal">\n          <div class="modal-content">\n            <span class="close">&times;</span>\n            <p id="modalText"></p>\n          </div>\n        </div>\n\n        <div class="rekomendasi-artikel">\n          <p class="header-rekomendasi">Baca artikel untuk lebih memahami BMI mu</p>\n        </div>\n      </section>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return u(a().mark((function t(){var e,r,i,c,u,l,s,f,h,d,p,v;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){var t=[e.value,r.value,i.value],o=Number(t[2])/(Number(t[1])/100*Number(t[1])/100),a="";o<18.5?a="Underweight":18.5<=o&&o<=24.9?a="Healthy":25<=o&&o<=29.9?a="Overweight":30<=o&&o<=34.9?a="Obese":35<=o&&(a="Extremely obese"),h.style.display="block",c.style.display="block",document.querySelector(".comment-result").innerHTML='You are <span id="comment-result"">'.concat(a,"</span>"),document.querySelector("#result").innerHTML=o.toFixed(2),p[0].forEach((function(t){f.innerHTML+=(0,n._y)(t)}))},document.title="Alat Kesehatan - Young Health",e=document.getElementById("umur"),r=document.getElementById("tt"),i=document.getElementById("bb"),c=document.querySelector(".comment-result"),u=document.getElementById("Modal"),l=document.getElementsByClassName("close")[0],s=document.getElementById("bmiSubmit"),f=document.querySelector(".rekomendasi-artikel"),h=document.querySelector(".header-rekomendasi"),t.next=13,o.Z.Rekomendasi();case 13:d=t.sent,p=Object.values(d),s.addEventListener("click",(function(){v()})),l.onclick=function(){u.style.display="none"},window.onclick=function(t){t.target==u&&(u.style.display="none")};case 18:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~4400d46f.bundle.js.map