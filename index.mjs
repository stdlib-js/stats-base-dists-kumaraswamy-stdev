// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";function i(i,a){var m,r;return s(i)||i<=0||s(a)||a<=0?NaN:(m=a*t(1+1/i,a),r=a*t(1+2/i,a),e(r-m*m))}export{i as default};
//# sourceMappingURL=index.mjs.map
