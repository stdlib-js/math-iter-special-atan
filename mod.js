// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,p,v;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),v&&c&&c.call(t,r,e.set),t},p=n,v=l,y=e()?p:v;var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(t){return"boolean"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(t){return w.call(t)},h=Object.prototype.hasOwnProperty;var S=function(t,r){return null!=t&&h.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,T=P,N=g;var A=O,I=function(t){var r,e,n;if(null==t)return N.call(t);e=t[T],r=E(t,T);try{t[T]=void 0}catch(r){return N.call(t)}return n=N.call(t),r?t[T]=e:delete t[T],n},V=_()?I:A,x=Boolean.prototype.toString;var B=V,F=function(t){try{return x.call(t),!0}catch(t){return!1}},G=_();var k=function(t){return"object"==typeof t&&(t instanceof Boolean||(G?F(t):"[object Boolean]"===B(t)))},C=m,L=k;var M=s,R=function(t){return C(t)||L(t)},X=k;M(R,"isPrimitive",m),M(R,"isObject",X);var Y=R;var z=function(){return new Function("return this;")()},D="object"==typeof self?self:null,U="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof q?q:null;module.exports=H;var J=Y.isPrimitive,K=z,Q=D,W=U,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!J(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return K()}if(Q)return Q;if(W)return W;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$(),rt=tt.document&&tt.document.childNodes,et=Int8Array,nt=d,ot=rt,ut=et;var it=function(){return"function"==typeof nt||"object"==typeof ut||"function"==typeof ot};var ct=function(){return/^\s*function\s*([^(]*)/i},at=ct;s(at,"REGEXP",ct());var ft=at,lt=V;var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===lt(t)},vt=pt;var yt=function(t){return null!==t&&"object"==typeof t};s(yt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!vt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(yt));var bt=yt;var st=V,dt=ft.REGEXP,mt=function(t){return bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var jt=function(t){var r,e,n;if(("Object"===(e=st(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return mt(t)?"Buffer":e},_t=jt;var gt=jt;var wt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r},Ot=function(t){return gt(t).toLowerCase()},ht=it()?Ot:wt;var St=function(t){return"function"===ht(t)},Pt=St;var Et=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&Pt(t.next)};var Tt=function(t){return"number"==typeof t},Nt=Number,At=Nt.prototype.toString;var It=V,Vt=Nt,xt=function(t){try{return At.call(t),!0}catch(t){return!1}},Bt=_();var Ft=function(t){return"object"==typeof t&&(t instanceof Vt||(Bt?xt(t):"[object Number]"===It(t)))},Gt=Tt,kt=Ft;var Ct=s,Lt=function(t){return Gt(t)||kt(t)},Mt=Ft;Ct(Lt,"isPrimitive",Tt),Ct(Lt,"isObject",Mt);var Rt=Lt,Xt=S;var Yt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Xt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,zt=pt;var Dt=function(t){return"object"==typeof t&&null!==t&&!zt(t)},Ut=Object.getPrototypeOf;var qt=function(t){return t.__proto__},Ht=V,Jt=qt;var Kt=function(t){var r=Jt(t);return r||null===r?r:"[object Function]"===Ht(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Qt=Ut,Wt=Kt,Zt=St(Object.getPrototypeOf)?Qt:Wt;var $t=Dt,tr=St,rr=function(t){return null==t?null:(t=Object(t),Zt(t))},er=S,nr=V,or=Object.prototype;var ur=function(t){var r;return!!$t(t)&&(!(r=rr(t))||!er(t,"constructor")&&er(r,"constructor")&&tr(r.constructor)&&"[object Function]"===nr(r.constructor)&&er(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===or||function(t){var r;for(r in t)if(!er(t,r))return!1;return!0}(t)))},ir=ur,cr=S;var ar=s,fr=St,lr=Et,pr=Rt.isPrimitive,vr=Yt,yr=function(t,r){return ir(r)?(cr(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var br=function t(r,e,n){var o,u,i,c;if(!lr(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=yr(o,n)))throw i;return ar(u={},"next",a),ar(u,"return",f),vr&&fr(r[vr])&&ar(u,vr,l),u;function a(){var t;return c?{done:!0}:(t=r.next()).done?(c=!0,t):{value:pr(t.value)?e(t.value):o.invalid,done:!1}}function f(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[vr](),e,o)}},sr=br;var dr=function(t){return t!=t},mr=Number.POSITIVE_INFINITY,jr=Nt.NEGATIVE_INFINITY;var _r=dr,gr=mr,wr=1.5707963267948966,Or=jr,hr=function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},Sr=function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))};var Pr=function(t){var r,e,n,o;return _r(t)||0===t?t:t===gr?wr:t===Or?-wr:(t<0&&(e=!0,t=-t),r=0,t>2.414213562373095?(n=wr,r=1,t=-1/t):t<=.66?n=0:(n=.7853981633974483,r=2,t=(t-1)/(t+1)),o=t*(o=(o=t*t)*hr(o)/Sr(o))+t,2===r?o+=3061616997868383e-32:1===r&&(o+=6123233995736766e-32),n+=o,e?-n:n)};function Er(t){return sr(t,Pr)}export{Er as default};
//# sourceMappingURL=mod.js.map
