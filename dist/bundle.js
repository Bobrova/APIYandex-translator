!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r){u("https://translate.yandex.net/api/v1.5/tr.json/translate?key="+n+"&text="+(e=encodeURIComponent(e))+"&lang="+t,{method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}},"translate",r)}function o(e,t,n){u("https://translate.yandex.net/api/v1.5/tr.json/detect?key="+t+"&text="+(e=encodeURIComponent(e)),{method:"POST",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}},"detect",n)}function a(e,t,n,r){u("https://translate.yandex.net/api/v1.5/tr.json/getLangs?key="+n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}},"getLanguages",r)}function u(e,t,n,r){fetch(e,t).then(function(e){e.text().then(function(e){var t=JSON.parse(e);switch(n){case"translate":r(t.text[0]);break;case"detect":r(t.lang);break;case"getLanguages":r(t.dirs)}})})}n.r(t),n.d(t,"textTranslate",function(){return r}),n.d(t,"detect",function(){return o}),n.d(t,"getLanguages",function(){return a})}]);