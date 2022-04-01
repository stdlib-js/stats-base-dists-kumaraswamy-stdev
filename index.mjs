// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var a=s,r=t,i=e;var m=function(s,t){var e,m;return a(s)||s<=0||a(t)||t<=0?NaN:(e=t*r(1+1/s,t),m=t*r(1+2/s,t),i(m-e*e))};export{m as default};
//# sourceMappingURL=index.mjs.map
