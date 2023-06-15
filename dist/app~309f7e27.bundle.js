/*! For license information please see app~309f7e27.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[924],{8750:(t,n,e)=>{e.d(n,{Z:()=>l});var a=e(4163),r=e(6510);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function d(t,n,e,r){var i=n&&n.prototype instanceof p?n:p,o=Object.create(i.prototype),c=new S(r||[]);return a(o,"_invoke",{value:L(t,e,c)}),o}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var g={};u(g,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(O([])));b&&b!==n&&e.call(b,c)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(a,o,c,s){var l=h(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,a){r(t,e,n,a)}))}return o=o?o.then(a,a):a()}})}function L(t,n,e){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return{value:void 0,done:!0}}for(e.method=r,e.arg=i;;){var o=e.delegate;if(o){var c=_(o,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===a)throw a="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a="executing";var s=h(t,n,e);if("normal"===s.type){if(a=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(a="completed",e.method="throw",e.arg=s.arg)}}}function _(t,n){var e=n.method,a=t.iterator[e];if(void 0===a)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,_(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var r=h(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function n(){for(;++a<t.length;)if(e.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),u(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,a,r,i){void 0===i&&(i=Promise);var o=new k(d(n,e,a,r),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(w),u(w,l,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var a in n)e.push(a);return e.reverse(),function t(){for(;e.length;){var a=e.pop();if(a in n)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(e,a){return o.type="throw",o.arg=t,n.next=e,a&&(n.method="next",n.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var a=e.completion;if("throw"===a.type){var r=a.arg;j(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,n,e,a,r,i,o){try{var c=t[i](o),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(a,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function o(t){c(i,a,r,o,s,"next",t)}function s(t){c(i,a,r,o,s,"throw",t)}o(void 0)}))}}const l={render:function(){return s(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="container">\n      <div class="jumbotron mb-3">\n        <div class="row g-0">\n          <div class="col-md-6">\n            <div class="jumbotron-body">\n            <div class="animate__animated animate__fadeInUp">\n            <h1><b>Bukan Sekedar Gaya</b></h1>\n            <h1><b>Saatnya Hidup</b></h1>\n            <h1 style="margin-bottom: 25px"><b>Lebih Sehat</b></h1>\n            </div>\n              <p>Waktunya ngasih perhatian lebih ke hidup sehat, biar makin kece dan oke.\n              Gak cuma gaya, tapi bikin badan sehat dan pikiran segar. Mulai dari \n              pola makan yangg nyambung, rajin olahraga, tidur yang cukup\n              dan jauhin diri dari kebiasaan negatif</p>\n              <button class="btn button"><b>Pusat Kesehatan</b></button>\n              </div>\n          </div>\n          <div class="col-md-6 " id="heroes">\n          <source class="lazyload" type="image/webp" srcset="/images/heros/avatar.webp">\n          <img class="hero lazyload img-fluid rounded-end" src="/images/heros/avatar.png"\n               alt="Anak Muda Hidup Sehat">\n          </picture>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="container text-center" id="quote">\n      <div class="quote-header">\n        Quote\n      </div>\n      <div class="quote-body">\n        <blockquote class="blockquote mb-0">\n          <p>Sehat itu investasi masa depanmu. Jaga kesehatanmu dan nikmati kehidupan sebagai anak muda yang berdaya.</p>\n          <footer class="blockquote-footer">From <b>YoungHealth</b> For <b>You</b></footer>\n        </blockquote>\n      </div>\n    </div>\n\n    <div class="container main-artikel">\n      <div class="card mb-3">\n        <div class="row g-0">\n          <div class="col-md-6">\n            <div class="card-body title-artikel">\n              <h1 class="card-title"><Wajib><b>Enggak Gampang Sakit <br> Mantepin Sistem Imun Kamu Dengan Buah Nanas</b></h1>\n              <p class="card-text">Nanas mengandung zat besi, vitamin C, dan enzim bromelain yang mampu dukung kebugaran tubuh. Salah satu manfaat nanas yakni memperkuat otot.</p>\n              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>\n            </div>\n          </div>\n          <div class="col-md-6">\n            <img src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/05/17041831/X-Alasan-Lidah-Gatal-Setelah-Makan-Nanas.jpg" class="img-fluid rounded-end" alt="...">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="container" id="list-artikel">\n    <h1>Artikel</h1>\n    <div class="row">\n      <div class="col-md-8" id="home-post">\n\n      </div>\n      \n  </div>\n\n        ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.title="Young Health",t.next=3,a.Z.PageHome();case 3:n=t.sent,e=document.querySelector("#home-post"),n.forEach((function(t){e.innerHTML+=(0,r.Ch)(t)}));case 6:case"end":return t.stop()}}),t)})))()}}},3042:(t,n,e)=>{e.d(n,{Z:()=>l});var a=e(6510),r=e(4163);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(){o=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function d(t,n,e,r){var i=n&&n.prototype instanceof p?n:p,o=Object.create(i.prototype),c=new S(r||[]);return a(o,"_invoke",{value:L(t,e,c)}),o}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var g={};u(g,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(O([])));b&&b!==n&&e.call(b,c)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function k(t,n){function r(a,o,c,s){var l=h(t[a],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==i(d)&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):n.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,s)}))}s(l.arg)}var o;a(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,a){r(t,e,n,a)}))}return o=o?o.then(a,a):a()}})}function L(t,n,e){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return{value:void 0,done:!0}}for(e.method=r,e.arg=i;;){var o=e.delegate;if(o){var c=_(o,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===a)throw a="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a="executing";var s=h(t,n,e);if("normal"===s.type){if(a=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(a="completed",e.method="throw",e.arg=s.arg)}}}function _(t,n){var e=n.method,a=t.iterator[e];if(void 0===a)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,_(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var r=h(a,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function n(){for(;++a<t.length;)if(e.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),u(k.prototype,s,(function(){return this})),t.AsyncIterator=k,t.async=function(n,e,a,r,i){void 0===i&&(i=Promise);var o=new k(d(n,e,a,r),i);return t.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(w),u(w,l,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var a in n)e.push(a);return e.reverse(),function t(){for(;e.length;){var a=e.pop();if(a in n)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(e,a){return o.type="throw",o.arg=t,n.next=e,a&&(n.method="next",n.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,n){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&e.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var a=e.completion;if("throw"===a.type){var r=a.arg;j(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:O(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,n,e,a,r,i,o){try{var c=t[i](o),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(a,r)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function o(t){c(i,a,r,o,s,"next",t)}function s(t){c(i,a,r,o,s,"throw",t)}o(void 0)}))}}const l={render:function(){return s(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n    <div class="container">\n      <div class="" id="medicine">\n        ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return s(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.title="Obat obatan - Young Health",t.next=3,r.Z.Obat();case 3:n=t.sent,e=document.querySelector("#medicine"),n.forEach((function(t){e.innerHTML+=(0,a.Fr)(t)}));case 6:case"end":return t.stop()}}),t)})))()}}},6510:(t,n,e)=>{e.d(n,{Ch:()=>i,Fr:()=>r,GW:()=>c,O_:()=>s,XN:()=>l,_y:()=>o,ie:()=>a}),e(9961);var a=function(t){return'\n<article class="post-item" >\n<img tabindex = 0 class="lazyload thumbnail" data-src="'.concat(t.image_url,'" alt="').concat(t.title,'">\n<div class="post-item-body">\n    <h5 class="card-title">').concat(t.title,'</h5>\n    <p class="card-text">').concat(t.headline,"</p>\n  </p>\n</div>\n</article>\n\n")},r=function(t){var n,e=(n=t.base_price,new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(n));return'\n  <article class="post-item" >\n  <img tabindex = 0 class="lazyload thumbnail" data-src="'.concat(t.image_url,'" alt="').concat(t.title,'">\n  <div class="post-item-body">\n      <h5 class="card-title">').concat(t.name,'</h5>\n      <p class="card-text">').concat(e,"</p>\n  </div>\n  </article>\n  \n  ")},i=function(t){return'\n<div class="row g-0 bg-light position-relative">\n  <div class="col-md-6 mb-md-0 p-md-4">\n    <img src="'.concat(t.image_url,'" class="lazyload w-100" alt="').concat(t.title,'">\n  </div>\n  <div class="col-md-6 p-4 ps-md-0">\n    <h5 class="mt-0">').concat(t.title,"</h5>\n    <p>").concat(t.headline,'</p>\n    <a href="').concat(t.source_url,'" class="btn button stretched-link">Selengkapnya</a>\n  </div>\n</div>\n')},o=function(t){return'\n    <div class="container-rekomendasi">\n      <div class="image-rekomendasi">\n      <img src="'.concat(t.image_url?t.image_url:"images/default-pic.jpg",'" class="image-rekomendasi" alt="').concat(t.title,'">\n      </div>\n      <div class="info-rekomendasi">\n        <h4>').concat(t.title,'</h4>\n        <p class="headline"> ').concat(t.headline,'....</p>\n        <p class="selengkapnya">\n        <a href="').concat(t.source_url,'" >Selengkapnya</a>\n        </p>      \n      </div>\n    </div>\n')},c=function(){return'\n<div class="row d-flex align-items-center wrap-about">\n  <div class="col-lg-5 offset-md-1 gambar-about">\n    <img class="img-baner1 lazyload" data-src="./images/Baner1.jpg"  alt="Tentang Aplikasi" tabindex="0">\n    </div>\n    <div class="col-lg-3 text-about">\n      <h2 class="heading-1" tabindex="0">Mengenal Website Young Healty.</h2>\n      <p tabindex="0">\n      Situs web ini bertujuan untuk memberikan informasi yang berguna dan terpercaya \n      tentang kesehatan dan gaya hidup sehat. Kami menyediakan berbagai artikel dan \n      sumber daya yang berkaitan dengan topik-topik kesehatan, kami juga menyediakan kalkulator BMI\n      untuk mengukur proporsi berat badan seseorang berdasarkan tinggi badan mereka. BMI adalah perbandingan \n      antara berat badan dengan kuadrat tinggi badan seseorang. Kalkulator BMI memberikan estimasi apakah \n      berat badan seseorang berada dalam kisaran yang sehat atau tidak. Ditambah dengan rekomendasi artikel \n      yang dapat membuatmu lebih sehat. \n      </p>\n    </div>\n  </div>\n'},s=function(){return'\n  <h2 class="heading-2" tabindex="0">Fitur yang Ada Dalam Website </h2>\n  <div class="col-12 col-md-10 mx-auto d-flex flex-column flex-md-row fitur-card">\n    <div class="col-12 col-md-4 mb-4 container-fitur">\n      <div class="card h-100 border-0 text-center">\n        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">\n          <i class="fas fa-capsules fa-7x" style="color: #e6b60a;"></i>\n        </div>\n        <div class="card-body body-fitur">\n          <h3 class="card-title heading-3" tabindex="0">Informasi Obat-Obatan</h3>\n          <p class="card-text" tabindex="0">Dapat mengetahui Informasi tentang harga obat-obatan terkini.</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-12 col-md-4 mb-4 container-fitur">\n      <div class="card h-100 border-0 text-center">\n        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">\n        <i class="fas fa-calculator fa-7x" style="color: #e6b60a;"></i>\n        </div>\n        <div class="card-body body-fitur">\n          <h3 class="card-title heading-3" tabindex="0">Kalkulator BMI</h3>\n          <p class="card-text" tabindex="0">Melakukan perhitungan untuk mengukur proporsi berat badan seseorang berdasarkan tinggi badan mereka. BMI adalah perbandingan antara berat badan dengan kuadrat tinggi badan seseorang. Kalkulator BMI memberikan estimasi apakah berat badan seseorang berada dalam kisaran yang sehat atau tidak. Ditambah dengan rekomendasi artikel yang dapat membuatmu lebih sehat.</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-12 col-md-4 container-fitur">\n      <div class="card h-100 border-0 text-center">\n        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">\n        <i class="fas fa-book fa-7x" style="color: #e6b60a;"></i>\n        </div>\n        <div class="card-body body-fitur">\n          <h3 class="card-title heading-3" tabindex="0">Artikel Edukasi Kesehatan</h3>\n          <p class="card-text" tabindex="0">Berisi artikel-artikel kesehatan terkini dan dapat membantu masalah anda. menggunakan api hallodoc yang pastinya terupdate dimasa kini</p>\n        </div>\n      </div>\n    </div>\n  </div>\n'},l=function(){return'\n  <h2 class="heading-4" tabindex="0">Team Pengembang Website</h2>\n\n  <div class="row mb-0 mb-lg-4 justify-content-center">\n      <div class="col-lg-3 mb-4 mb-lg-0">\n        <div class="card cardBx card-hover-img overflow-hidden shadow">\n          <img class="img-profile card-img-top lazyload" data-src="./images/Adian.jpeg"  alt="Adian Ali Pratama" tabindex="0">\n          <div class="card-body card-hover position-absolute w-100">\n            <h5 class="card-title">Adian Ali Pratama</h5>\n            <p>F013XB249</p>\n            <a href="https://www.instagram.com/adianali_/"><i class="fa fa-camera-retro fa-2x" style="margin-top: 5px;"></i></a>\n            <a href="https://github.com/adianali"><i class="fab fa-github-square fa-2x" style="margin-left: 40px;"></i></a>\n            <a href="https://www.linkedin.com/in/adian-ali-pratama-987a4b265/"> <i class="fab fa-linkedin-in fa-2x" style="margin-left: 40px;"></i></a>\n          </div>\n        </div>\n      </div>\n      <div class="col-lg-3 mb-4 mb-lg-0">\n        <div class="card cardBx card-hover-img overflow-hidden shadow">\n        <img class="img-profile card-img-top lazyload" data-src="./images/marsya.jpg"  alt="Marsya Farras Nabilah" tabindex="0">\n          <div class="card-body card-hover position-absolute w-100">\n            <h5 class="card-title">Marsya Farras Nabilah</h5>\n            <p>F013YB372</p>\n            <a href="https://www.instagram.com/marsyafrrs/"><i class="fa fa-camera-retro fa-2x" style="margin-top: 5px;"></i></a>\n            <a href="https://github.com/Marsyafrrs"><i class="fab fa-github-square fa-2x" style="margin-left: 40px;"></i></a>\n            <a href="https://www.linkedin.com/in/marsya-farras-nabilah-a6a287262"> <i class="fab fa-linkedin-in fa-2x" style="margin-left: 40px;"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class="row mb-0 mb-lg-4 justify-content-center">\n      <div class="col-lg-3 mb-4 mb-lg-0">\n        <div class="card cardBx card-hover-img overflow-hidden shadow">\n        <img class="img-profile card-img-top lazyload" data-src="./images/dika.jpg"  alt="Muhamad Andika Try Satria" tabindex="0">\n          <div class="card-body card-hover position-absolute w-100">\n            <h5 class="card-title">Muhammad Andika Try Satria</h5>\n            <p>F137XB315</p>\n            <a href="https://www.instagram.com/dikasatriyaa/"><i class="fa fa-camera-retro fa-2x" style="margin-top: 5px;"></i></a>\n            <a href="https://github.com/dikasatriyaa/"><i class="fab fa-github-square fa-2x" style="margin-left: 40px;"></i></a>\n            <a href="https://www.linkedin.com/in/muhamad-andika-try-satria-767bb5152/"> <i class="fab fa-linkedin-in fa-2x" style="margin-left: 40px;"></i></a>\n          </div>\n        </div>\n      </div>\n      <div class="col-lg-3 mb-4 mb-lg-0">\n        <div class="card cardBx card-hover-img overflow-hidden shadow">\n        <img class="img-profile card-img-top lazyload" data-src="./images/silvanus.jpg"  alt="Silvanus Prihantono" tabindex="0">\n          <div class="card-body card-hover position-absolute w-100">\n            <h5 class="card-title">Silvanus Prihantono</h5>\n            <p>F015XB472</p>\n            <a href="https://www.instagram.com/_silvanus_/"><i class="fa fa-camera-retro fa-2x" style="margin-top: 5px;"></i></a>\n            <a href="https://github.com/SilvaneUX"><i class="fab fa-github-square fa-2x" style="margin-left: 40px;"></i></a>\n            <a href="https://linkedin.com/in/sux"> <i class="fab fa-linkedin-in fa-2x" style="margin-left: 40px;"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n'}}}]);
//# sourceMappingURL=app~309f7e27.bundle.js.map