// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAtan=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,c=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(t,r)||a.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,n,e;if(null==t)return v.call(t);n=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[j]=n:delete t[j],e}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}l(O,"isPrimitive",p),l(O,"isObject",h);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,P="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(T)return T;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),N=A.document&&A.document.childNodes,I=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(V,"REGEXP",x);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function F(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=g(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=x.exec(e.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!B(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(F));var k="function"==typeof y||"object"==typeof I||"function"==typeof N?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function C(t){return"function"===k(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&C(t.next)}function M(t){return"number"==typeof t}var Y=Number,R=Y.prototype.toString;var U=s();function X(t){return"object"==typeof t&&(t instanceof Y||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function q(t){return M(t)||X(t)}l(q,"isPrimitive",M),l(q,"isObject",X);var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var D,H=Object.getPrototypeOf;D=C(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=D;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&C(r.constructor)&&"[object Function]"===g(r.constructor)&&m(r,"isPrototypeOf")&&C(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=W(e,n)))throw u;return l(o={},"next",c),l(o,"return",a),z&&C(t[z])&&l(o,z,f),o;function c(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function a(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[z](),r,e)}}var $=Number.POSITIVE_INFINITY,tt=1.5707963267948966,rt=Y.NEGATIVE_INFINITY;var nt=6123233995736766e-32;function et(t){var r,n,e,o;return function(t){return t!=t}(t)||0===t?t:t===$?tt:t===rt?-tt:(t<0&&(n=!0,t=-t),r=0,t>2.414213562373095?(e=tt,r=1,t=-1/t):t<=.66?e=0:(e=.7853981633974483,r=2,t=(t-1)/(t+1)),o=(o=t*t)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(o),o=t*o+t,2===r?o+=.5*nt:1===r&&(o+=nt),e+=o,n?-e:e)}return function(t){return Z(t,et)}}));
//# sourceMappingURL=index.js.map
