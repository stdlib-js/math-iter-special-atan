// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var e,n,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=a.toString(e),a||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,b,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,u,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(u)?String(n.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function I(r){var e,t,n;if(!A(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var P,F=Object.prototype,N=F.toString,C=F.__defineGetter__,L=F.__defineSetter__,R=F.__lookupGetter__,$=F.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),u&&L&&L.call(r,e,t.set),r};var G=P;function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=W()?function(r){var e,t,n;if(null==r)return Y.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[H]=t:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=W();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return X(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",X),M(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ar="object"==typeof ur?ur:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var br,yr=/^\s*function\s*([^(]*)/i;M(pr,"REGEXP",yr),br=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var gr=br;function vr(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr);function wr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(vr,"isObjectLikeArray",dr);var hr="function"==typeof U||"object"==typeof sr||"function"==typeof lr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};function mr(r){return"function"===hr(r)}var jr=/./;function Er(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _r(r){return"boolean"==typeof r}var Or=Boolean.prototype.toString;var Tr=W();function Sr(r){return"object"==typeof r&&(r instanceof K||(Tr?function(r){try{return Or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function xr(r){return _r(r)||Sr(r)}function Br(){return new Function("return this;")()}Er(xr,"isPrimitive",_r),Er(xr,"isObject",Sr);var Vr="object"==typeof self?self:null,kr="object"==typeof window?window:null,Ar="object"==typeof ur?ur:null,Ir="object"==typeof globalThis?globalThis:null;var Pr=function(r){if(arguments.length){if(!_r(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Br()}if(Ir)return Ir;if(Vr)return Vr;if(kr)return kr;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Pr.document&&Pr.document.childNodes,Nr=Int8Array;function Cr(){return/^\s*function\s*([^(]*)/i}var Lr=/^\s*function\s*([^(]*)/i;function Rr(r){return null!==r&&"object"==typeof r}Er(Cr,"REGEXP",Lr);var $r=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);function Gr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Lr.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Er(Rr,"isObjectLikeArray",$r);var Mr="function"==typeof jr||"object"==typeof Nr||"function"==typeof Fr?function(r){return Gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Gr(r).toLowerCase():e};function Ur(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Mr(r)}(r.next)}function Xr(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Zr(r){return"number"==typeof r}var Wr=Number,Yr=Wr.prototype.toString;var zr=W();function qr(r){return"object"==typeof r&&(r instanceof Wr||(zr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Dr(r){return Zr(r)||qr(r)}Xr(Dr,"isPrimitive",Zr),Xr(Dr,"isObject",qr);var Hr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var Jr=/./;function Kr(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Qr(r){return"boolean"==typeof r}var re=Boolean.prototype.toString;var ee=W();function te(r){return"object"==typeof r&&(r instanceof K||(ee?function(r){try{return re.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function ne(r){return Qr(r)||te(r)}function oe(){return new Function("return this;")()}Kr(ne,"isPrimitive",Qr),Kr(ne,"isObject",te);var ie="object"==typeof self?self:null,ue="object"==typeof window?window:null,ae="object"==typeof ur?ur:null,ce="object"==typeof globalThis?globalThis:null;var fe=function(r){if(arguments.length){if(!Qr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return oe()}if(ce)return ce;if(ie)return ie;if(ue)return ue;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=fe.document&&fe.document.childNodes,se=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var be=/^\s*function\s*([^(]*)/i;function ye(r){return null!==r&&"object"==typeof r}Kr(pe,"REGEXP",be);var ge=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ye);function ve(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=be.exec(n.toString()))return e[1]}return ye(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Kr(ye,"isObjectLikeArray",ge);var de="function"==typeof Jr||"object"==typeof se||"function"==typeof le?function(r){return ve(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ve(r).toLowerCase():e};function we(r){return"function"===de(r)}var he=Object,me=/./;function je(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ee(r){return"boolean"==typeof r}var _e=Boolean.prototype.toString;var Oe=W();function Te(r){return"object"==typeof r&&(r instanceof K||(Oe?function(r){try{return _e.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Se(r){return Ee(r)||Te(r)}function xe(){return new Function("return this;")()}je(Se,"isPrimitive",Ee),je(Se,"isObject",Te);var Be="object"==typeof self?self:null,Ve="object"==typeof window?window:null,ke="object"==typeof ur?ur:null,Ae="object"==typeof globalThis?globalThis:null;var Ie=function(r){if(arguments.length){if(!Ee(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xe()}if(Ae)return Ae;if(Be)return Be;if(Ve)return Ve;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Ie.document&&Ie.document.childNodes,Fe=Int8Array;function Ne(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function Le(r){return null!==r&&"object"==typeof r}je(Ne,"REGEXP",Ce);var Re=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Le);function $e(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ce.exec(n.toString()))return e[1]}return Le(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}je(Le,"isObjectLikeArray",Re);var Ge="function"==typeof me||"object"==typeof Fe||"function"==typeof Pe?function(r){return $e(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?$e(r).toLowerCase():e};var Me,Ue,Xe=Object.getPrototypeOf;Ue=Object.getPrototypeOf,Me="function"===Ge(Ue)?Xe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ze=Me;var We=Object.prototype;function Ye(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!gr(r)}(r)&&(e=function(r){return null==r?null:(r=he(r),Ze(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&we(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&we(e.isPrototypeOf)&&(e===We||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function ze(r,e){return Ye(e)?(q(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",e))}function qe(r,e,t){var n,o,i,u;if(!Ur(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!mr(e))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=ze(n,t)))throw i;return M(o={},"next",a),M(o,"return",c),Hr&&mr(r[Hr])&&M(o,Hr,f),o;function a(){var t;return u?{done:!0}:(t=r.next()).done?(u=!0,t):{value:Zr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return qe(r[Hr](),e,n)}}var De=Number.POSITIVE_INFINITY,He=1.5707963267948966,Je=Wr.NEGATIVE_INFINITY;function Ke(r){var e,t,n,o;return function(r){return r!=r}(r)||0===r?r:r===De?He:r===Je?-He:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(n=He,e=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=3061616997868383e-32:1===e&&(o+=6123233995736766e-32),n+=o,t?-n:n)}function Qe(r){return qe(r,Ke)}export{Qe as default};
//# sourceMappingURL=mod.js.map
