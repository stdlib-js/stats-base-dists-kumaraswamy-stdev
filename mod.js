// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,i,o,u,c;if(null==r)return n.call(r);i=r[a],c=a,e=null!=(u=r)&&t.call(u,c);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=i:delete r[a],o}:function(r){return n.call(r)},u="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var f,s="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===o(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l=f,p="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null;var y,v="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(p&&n instanceof Float64Array||"[object Float64Array]"===o(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?v:function(){throw new Error("not implemented")};var d=y,h="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(h&&n instanceof Uint8Array||"[object Uint8Array]"===o(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A=b,_="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===o(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var S,N={uint16:U,uint8:A};(S=new N.uint16(1))[0]=4660;var k=52===new N.uint8(S.buffer)[0],x=!0===k?1:0,F=new d(1),j=new l(F.buffer);function T(r){return F[0]=r,j[x]}var O=!0===k?1:0,V=new d(1),$=new l(V.buffer);function G(r,e){return V[0]=r,$[O]=e>>>0,V[0]}var H=Number.POSITIVE_INFINITY,W=Number.NEGATIVE_INFINITY;var C=.6931471803691238,L=1.9082149292705877e-10;var P=Math.sqrt;function R(r){return Math.abs(r)}var M=Math.floor,Z=Math.ceil;function X(r){return r<0?Z(r):M(r)}function Y(r){return r===H||r===W}var q="function"==typeof Object.defineProperty?Object.defineProperty:null;var z=Object.defineProperty;function B(r){return"number"==typeof r}function D(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function J(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+D(i):D(i)+r,t&&(r="-"+r)),r}var K=String.prototype.toLowerCase,Q=String.prototype.toUpperCase;function rr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!B(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=J(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=J(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Q.call(r.specifier)?Q.call(n):K.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function er(r){return"string"==typeof r}var nr=Math.abs,tr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase,ar=String.prototype.replace,or=/e\+(\d)$/,ur=/e-(\d)$/,cr=/^(\d+)$/,fr=/^(\d+)e/,sr=/\.0$/,lr=/\.0*e/,pr=/(\..*[^0])0*e/;function gr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!B(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":nr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=ar.call(n,pr,"$1e"),n=ar.call(n,lr,"e"),n=ar.call(n,sr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=ar.call(n,or,"e+0$1"),n=ar.call(n,ur,"e-0$1"),r.alternate&&(n=ar.call(n,cr,"$1."),n=ar.call(n,fr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===ir.call(r.specifier)?ir.call(n):tr.call(n)}function yr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function vr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+yr(t):yr(t)+r}var dr=String.fromCharCode,hr=isNaN,wr=Array.isArray;function br(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function mr(r){var e,n,t,i,a,o,u,c,f;if(!wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(er(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=br(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,hr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,hr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=rr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!hr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=hr(a)?String(t.arg):dr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=gr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=J(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=vr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Er(r){var e,n,t,i;for(n=[],i=0,t=Ar.exec(r);t;)(e=r.slice(i,Ar.lastIndex-t[0].length)).length&&n.push(e),n.push(_r(t)),i=Ar.lastIndex,t=Ar.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Ur(r){return"string"==typeof r}function Ir(r){var e,n,t;if(!Ur(r))throw new TypeError(Ir("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Er(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return mr.apply(null,n)}var Sr=Object.prototype,Nr=Sr.toString,kr=Sr.__defineGetter__,xr=Sr.__defineSetter__,Fr=Sr.__lookupGetter__,jr=Sr.__lookupSetter__;var Tr,Or,Vr=function(){try{return q({},"x",{}),!0}catch(r){return!1}}()?z:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Nr.call(r))throw new TypeError(Ir("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Nr.call(n))throw new TypeError(Ir("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Fr.call(r,e)||jr.call(r,e)?(t=r.__proto__,r.__proto__=Sr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&kr&&kr.call(r,e,n.get),o&&xr&&xr.call(r,e,n.set),r};function $r(r,e,n){Vr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Tr=1,Or=0):(Tr=0,Or=1);var Gr,Hr,Wr={HIGH:Tr,LOW:Or},Cr=new d(1),Lr=new l(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Mr(r,e,n,t){return Cr[0]=r,e[t]=Lr[Pr],e[t+n]=Lr[Rr],e}function Zr(r){return Mr(r,[0,0],1,0)}$r(Zr,"assign",Mr),!0===k?(Gr=1,Hr=0):(Gr=0,Hr=1);var Xr={HIGH:Gr,LOW:Hr},Yr=new d(1),qr=new l(Yr.buffer),zr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e){return qr[zr]=r,qr[Br]=e,Yr[0]}var Jr=[0,0];function Kr(r,e){var n,t;return Zr.assign(r,Jr,1,0),n=Jr[0],n&=2147483647,t=T(e),Dr(n|=t&=2147483648,Jr[1])}function Qr(e,n,t,i){return r(e)||Y(e)?(n[i]=e,n[i+t]=0,n):0!==e&&R(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}$r((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=[0,0],ee=[0,0];function ne(e,n){var t,i;return 0===n||0===e||r(e)||Y(e)?e:(Qr(e,re,1,0),n+=re[1],n+=function(r){var e=T(r);return(e=(2146435072&e)>>>20)-1023|0}(e=re[0]),n<-1074?Kr(0,e):n>1023?e<0?W:H:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Zr.assign(e,ee,1,0),t=ee[0],t&=2148532223,i*Dr(t|=n+1023<<20,ee[1])))}function te(e){var n;return r(e)||e===H?e:e===W?0:e>709.782712893384?H:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,e,n){var t,i,a,o;return ne(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-.6931471803691238*(n=X(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*n,n)}function ie(r){return M(r)===r}function ae(r){return ie(r/2)}function oe(r){return ae(r>0?r-1:r+1)}var ue=!0===k?0:1,ce=new d(1),fe=new l(ce.buffer);function se(r,e){return ce[0]=r,fe[ue]=e>>>0,ce[0]}function le(r){return 0|r}var pe=[1,1.5],ge=[0,.5849624872207642],ye=[0,1.350039202129749e-8];var ve=1e300,de=1e-300,he=[0,0],we=[0,0];function be(e,n){var t,i,a,o,u,c,f,s,l,p,g,y,v,d;if(r(e)||r(n))return NaN;if(Zr.assign(n,he,1,0),u=he[0],0===he[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return P(e);if(-.5===n)return 1/P(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(Y(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:R(r)<1==(e===H)?0:H}(e,n)}if(Zr.assign(e,he,1,0),o=he[0],0===he[1]){if(0===o)return function(r,e){return e===W?H:e===H?0:e>0?oe(e)?r:0:oe(e)?Kr(H,r):H}(e,n);if(1===e)return 1;if(-1===e&&oe(n))return-1;if(Y(e))return e===W?be(-0,-n):n<0?0:H}if(e<0&&!1===ie(n))return(e-e)/(e-e);if(a=R(e),t=2147483647&o|0,i=2147483647&u|0,f=u>>>31|0,c=(c=o>>>31|0)&&oe(n)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(2147483647&T(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(t<1072693247)return 1===f?c*ve*ve:c*de*de;if(t>1072693248)return 0===f?c*ve*ve:c*de*de;g=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=se(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(we,a)}else g=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g,y,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=T(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=se(i=(w=(e=G(e,n))-(f=pe[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=G(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=se(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(g=-7.028461650952758e-9*(l=se(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ye[_])-((y=se(y=(p=.9617967009544373*l)+g+(s=ge[_])+(d=m),0))-d-s-p),r[0]=y,r[1]=v,r}(we,a,t);if(y=(p=(n-(s=se(n,0)))*g[0]+n*g[1])+(l=s*g[0]),Zr.assign(y,he,1,0),v=le(he[0]),d=le(he[1]),v>=1083179008){if(0!=(v-1083179008|d))return c*ve*ve;if(p+8008566259537294e-32>y-l)return c*ve*ve}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|d))return c*de*de;if(p<=y-l)return c*de*de}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,g;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=G(0,t)),r=le(r=T(f=1-((f=(o=.6931471824645996*(a=se(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?ne(f,s):G(f,r)}(v,l,p),c*y}function me(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var Ae=10.900511;function _e(e,n){var t,i,a,o,u,c,f;return r(e)||r(n)||e<0||n<0?NaN:1===n?1/e:1===e?1/n:(f=e+n)<2220446049250313e-31?(u=f/e,u/=n):f===e&&n<2220446049250313e-31?1/n:f===n&&e<2220446049250313e-31?1/e:(e<n&&(c=n,n=e,e=c),i=e+Ae-.5,a=n+Ae-.5,o=f+Ae-.5,u=me(e)*(me(n)/me(f)),R(n*(t=e-.5-n))<100*o&&e>100?u*=te(t*function(e){var n,t,i,a,o,u,c,f,s,l;if(e<-1||r(e))return NaN;if(-1===e)return W;if(e===H)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(l=0,a=e,t=1)}return 0!==l&&(i<9007199254740992?(o=(l=((t=T(s=1+e))>>20)-1023)>0?1-(s-e):e-(s-1),o/=s):(l=((t=T(s=e))>>20)-1023,o=0),(t&=1048575)<434334?s=G(s,1072693248|t):(l+=1,s=G(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*C+(o+=l*L):l*C-((f=n*(1-.6666666666666666*a))-(l*L+o)-a):(f=(c=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===l?a-(n-u*(n+f)):l*C-(n-(u*(n+f)+(l*L+o))-a))}(-n/o)):u*=be(i/o,t),u*=be(o>1e10?i/o*(a/o):i*a/(o*o),n),u*=P(2.718281828459045/a))}function Ee(e,n){var t,i;return r(e)||e<=0||r(n)||n<=0?NaN:(t=n*_e(1+1/e,n),i=n*_e(1+2/e,n),P(i-t*t))}export{Ee as default};
//# sourceMappingURL=mod.js.map
