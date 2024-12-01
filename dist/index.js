"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(f,a){
var s=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-beta/dist'),q=require('@stdlib/math-base-special-sqrt/dist');function c(e,r){var t,i;return s(e)||e<=0||s(r)||r<=0?NaN:(t=r*u(1+1/e,r),i=r*u(1+2/e,r),q(i-t*t))}a.exports=c
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
