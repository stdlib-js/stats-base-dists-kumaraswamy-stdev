// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=e();var n=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"";var c=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return n.call(r);t=r[u],e=a(r,u);try{r[u]=void 0}catch(e){return n.call(r)}return i=n.call(r),e?r[u]=t:delete r[u],i}:function(r){return n.call(r)},f="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var s,p="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,t;if("function"!=typeof l)return!1;try{e=new l(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var y=s,v=e();var g=Object.prototype.toString;var d="function"==typeof Symbol?Symbol:void 0,b="function"==typeof d?d.toStringTag:"";var h=v&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return g.call(r);t=r[b],e=a(r,b);try{r[b]=void 0}catch(e){return g.call(r)}return n=g.call(r),e?r[b]=t:delete r[b],n}:function(r){return g.call(r)},w="function"==typeof Float64Array;var m="function"==typeof Float64Array?Float64Array:null;var I,N="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,e,t;if("function"!=typeof m)return!1;try{e=new m([1,3.14,-3.14,NaN]),t=e,r=(w&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var S=I,A=e();var _=Object.prototype.toString;var E="function"==typeof Symbol?Symbol:void 0,T="function"==typeof E?E.toStringTag:"";var F=A&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return _.call(r);t=r[T],e=a(r,T);try{r[T]=void 0}catch(e){return _.call(r)}return n=_.call(r),e?r[T]=t:delete r[T],n}:function(r){return _.call(r)},U="function"==typeof Uint8Array;var V="function"==typeof Uint8Array?Uint8Array:null;var O,j="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,e,t;if("function"!=typeof V)return!1;try{e=new V(e=[1,3.14,-3.14,256,257]),t=e,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===F(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?j:function(){throw new Error("not implemented")};var k=O,x=e();var G=Object.prototype.toString;var P="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof P?P.toStringTag:"";var $=x&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return G.call(r);t=r[Y],e=a(r,Y);try{r[Y]=void 0}catch(e){return G.call(r)}return n=G.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return G.call(r)},H="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var C,L="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,e,t;if("function"!=typeof W)return!1;try{e=new W(e=[1,3.14,-3.14,65536,65537]),t=e,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===$(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?L:function(){throw new Error("not implemented")};var R,M={uint16:C,uint8:k};(R=new M.uint16(1))[0]=4660;var Z=52===new M.uint8(R.buffer)[0],X=!0===Z?1:0,q=new S(1),z=new y(q.buffer);function B(r){return q[0]=r,z[X]}var D=!0===Z?1:0,J=new S(1),K=new y(J.buffer);function Q(r,e){return J[0]=r,K[D]=e>>>0,J[0]}var rr=Number.POSITIVE_INFINITY,er=Number.NEGATIVE_INFINITY;var tr=.6931471803691238,nr=1.9082149292705877e-10;var ir=Math.sqrt;function ar(r){return Math.abs(r)}var or=Math.floor,ur=Math.ceil;function cr(r){return r<0?ur(r):or(r)}var fr=Number.NEGATIVE_INFINITY,lr=Number.POSITIVE_INFINITY,sr=Number.POSITIVE_INFINITY,pr=Number.NEGATIVE_INFINITY,yr=Number.POSITIVE_INFINITY,vr=Number.NEGATIVE_INFINITY;function gr(r){return r===yr||r===vr}var dr="function"==typeof Object.defineProperty?Object.defineProperty:null;var br=Object.defineProperty;function hr(r){return"number"==typeof r}function wr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function mr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+wr(i):wr(i)+r,n&&(r="-"+r)),r}var Ir=String.prototype.toLowerCase,Nr=String.prototype.toUpperCase;function Sr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!hr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=mr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=mr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Nr.call(r.specifier)?Nr.call(t):Ir.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ar(r){return"string"==typeof r}var _r=Math.abs,Er=String.prototype.toLowerCase,Tr=String.prototype.toUpperCase,Fr=String.prototype.replace,Ur=/e\+(\d)$/,Vr=/e-(\d)$/,Or=/^(\d+)$/,jr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Gr=/(\..*[^0])0*e/;function Pr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!hr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_r(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Fr.call(t,Gr,"$1e"),t=Fr.call(t,xr,"e"),t=Fr.call(t,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Fr.call(t,Ur,"e+0$1"),t=Fr.call(t,Vr,"e-0$1"),r.alternate&&(t=Fr.call(t,Or,"$1."),t=Fr.call(t,jr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Tr.call(r.specifier)?Tr.call(t):Er.call(t)}function Yr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function $r(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Yr(n):Yr(n)+r}var Hr=String.fromCharCode,Wr=isNaN,Cr=Array.isArray;function Lr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Rr(r){var e,t,n,i,a,o,u,c,f;if(!Cr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(Ar(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=Lr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Wr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Wr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Sr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Wr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Wr(a)?String(n.arg):Hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Pr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=mr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$r(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var Mr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Zr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Xr(r){var e,t,n,i;for(t=[],i=0,n=Mr.exec(r);n;)(e=r.slice(i,Mr.lastIndex-n[0].length)).length&&t.push(e),t.push(Zr(n)),i=Mr.lastIndex,n=Mr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function qr(r){return"string"==typeof r}function zr(r){var e,t;if(!qr(r))throw new TypeError(zr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Xr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Rr.apply(null,e)}var Br,Dr=Object.prototype,Jr=Dr.toString,Kr=Dr.__defineGetter__,Qr=Dr.__defineSetter__,re=Dr.__lookupGetter__,ee=Dr.__lookupSetter__;Br=function(){try{return dr({},"x",{}),!0}catch(r){return!1}}()?br:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Jr.call(r))throw new TypeError(zr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Jr.call(t))throw new TypeError(zr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(re.call(r,e)||ee.call(r,e)?(n=r.__proto__,r.__proto__=Dr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Kr&&Kr.call(r,e,t.get),o&&Qr&&Qr.call(r,e,t.set),r};var te,ne,ie=Br;!0===Z?(te=1,ne=0):(te=0,ne=1);var ae,oe,ue={HIGH:te,LOW:ne},ce=new S(1),fe=new y(ce.buffer),le=ue.HIGH,se=ue.LOW;function pe(r,e,t,n){return ce[0]=r,e[n]=fe[le],e[n+t]=fe[se],e}function ye(r){return pe(r,[0,0],1,0)}ie(ye,"assign",{configurable:!1,enumerable:!1,writable:!1,value:pe}),!0===Z?(ae=1,oe=0):(ae=0,oe=1);var ve={HIGH:ae,LOW:oe},ge=new S(1),de=new y(ge.buffer),be=ve.HIGH,he=ve.LOW;function we(r,e){return de[be]=r,de[he]=e,ge[0]}var me=[0,0];function Ie(r,e){var t,n;return ye.assign(r,me,1,0),t=me[0],t&=2147483647,n=B(e),we(t|=n&=2147483648,me[1])}function Ne(e,t,n,i){return r(e)||gr(e)?(t[i]=e,t[i+n]=0,t):0!==e&&ar(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}!function(r,e,t){ie(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return Ne(r,[0,0],1,0)}),"assign",Ne);var Se=[0,0],Ae=[0,0];function _e(e,t){var n,i;return 0===t||0===e||r(e)||gr(e)?e:(Ne(e,Se,1,0),t+=Se[1],t+=function(r){var e=B(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Se[0]),t<-1074?Ie(0,e):t>1023?e<0?pr:sr:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,ye.assign(e,Ae,1,0),n=Ae[0],n&=2148532223,i*we(n|=t+1023<<20,Ae[1])))}function Ee(e){var t;return r(e)||e===lr?e:e===fr?0:e>709.782712893384?lr:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,e,t){var n,i,a,o;return _e(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-.6931471803691238*(t=cr(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*t,t)}function Te(r){return or(r)===r}function Fe(r){return Te(r/2)}function Ue(r){return Fe(r>0?r-1:r+1)}var Ve=!0===Z?0:1,Oe=new S(1),je=new y(Oe.buffer);function ke(r,e){return Oe[0]=r,je[Ve]=e>>>0,Oe[0]}function xe(r){return 0|r}var Ge=Number.NEGATIVE_INFINITY,Pe=Number.POSITIVE_INFINITY;var Ye=[1,1.5],$e=[0,.5849624872207642],He=[0,1.350039202129749e-8];var We=1e300,Ce=1e-300,Le=[0,0],Re=[0,0];function Me(e,t){var n,i,a,o,u,c,f,l,s,p,y,v,g,d;if(r(e)||r(t))return NaN;if(ye.assign(t,Le,1,0),u=Le[0],0===Le[1]){if(0===t)return 1;if(1===t)return e;if(-1===t)return 1/e;if(.5===t)return ir(e);if(-.5===t)return 1/ir(e);if(2===t)return e*e;if(3===t)return e*e*e;if(4===t)return(e*=e)*e;if(gr(t))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ar(r)<1==(e===Pe)?0:Pe}(e,t)}if(ye.assign(e,Le,1,0),o=Le[0],0===Le[1]){if(0===o)return function(r,e){return e===Ge?Pe:e===Pe?0:e>0?Ue(e)?r:0:Ue(e)?Ie(Pe,r):Pe}(e,t);if(1===e)return 1;if(-1===e&&Ue(t))return-1;if(gr(e))return e===Ge?Me(-0,-t):t<0?0:Pe}if(e<0&&!1===Te(t))return(e-e)/(e-e);if(a=ar(e),n=2147483647&o|0,i=2147483647&u|0,f=u>>>31|0,c=(c=o>>>31|0)&&Ue(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(2147483647&B(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,t);if(n<1072693247)return 1===f?c*We*We:c*Ce*Ce;if(n>1072693248)return 0===f?c*We*We:c*Ce*Ce;y=function(r,e){var t,n,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=ke(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=t,r}(Re,a)}else y=function(r,e,t){var n,i,a,o,u,c,f,l,s,p,y,v,g,d,b,h,w,m,I,N,S;return m=0,t<1048576&&(m-=53,t=B(e*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(I=1048575&t|0),I<=235662?N=0:I<767610?N=1:(N=0,m+=1,t-=1048576),o=ke(i=(h=(e=Q(e,t))-(f=Ye[N]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Q(0,n+=N<<18),b=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=ke(c=3+(a=o*o)+(b+=(u=w*(h-o*c-o*(e-(c-f))))*(o+i)),0),g=(y=-7.028461650952758e-9*(s=ke(s=(h=o*c)+(w=u*c+(b-(c-3-a))*i),0))+.9617966939259756*(w-(s-h))+He[N])-((v=ke(v=(p=.9617967009544373*s)+y+(l=$e[N])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}(Re,a,n);if(v=(p=(t-(l=ke(t,0)))*y[0]+t*y[1])+(s=l*y[0]),ye.assign(v,Le,1,0),g=xe(Le[0]),d=xe(Le[1]),g>=1083179008){if(0!=(g-1083179008|d))return c*We*We;if(p+8008566259537294e-32>v-s)return c*We*We}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|d))return c*Ce*Ce;if(p<=v-s)return c*Ce*Ce}return v=function(r,e,t){var n,i,a,o,u,c,f,l,s,p,y;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(n=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),e-=a=Q(0,n)),r=xe(r=B(f=1-((f=(o=.6931471824645996*(a=ke(a=t+e,0)))+(u=.6931471805599453*(t-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=l<<20>>>0)>>20<=0?_e(f,l):Q(f,r)}(g,s,p),c*v}function Ze(r){var e,t;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/t)}var Xe=10.900511;function qe(e,t){var n,i,a,o,u,c,f;return r(e)||r(t)||e<0||t<0?NaN:1===t?1/e:1===e?1/t:(f=e+t)<2220446049250313e-31?(u=f/e,u/=t):f===e&&t<2220446049250313e-31?1/t:f===t&&e<2220446049250313e-31?1/e:(e<t&&(c=t,t=e,e=c),i=e+Xe-.5,a=t+Xe-.5,o=f+Xe-.5,u=Ze(e)*(Ze(t)/Ze(f)),ar(t*(n=e-.5-t))<100*o&&e>100?u*=Ee(n*function(e){var t,n,i,a,o,u,c,f,l,s;if(e<-1||r(e))return NaN;if(-1===e)return er;if(e===rr)return e;if(0===e)return e;if(s=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(s=0,a=e,n=1)}return 0!==s&&(i<9007199254740992?(o=(s=((n=B(l=1+e))>>20)-1023)>0?1-(l-e):e-(l-1),o/=l):(s=((n=B(l=e))>>20)-1023,o=0),(n&=1048575)<434334?l=Q(l,1072693248|n):(s+=1,l=Q(l,1071644672|n),n=1048576-n>>2),a=l-1),t=.5*a*a,0===n?0===a?s*tr+(o+=s*nr):s*tr-((f=t*(1-.6666666666666666*a))-(s*nr+o)-a):(f=(c=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(c),0===s?a-(t-u*(t+f)):s*tr-(t-(u*(t+f)+(s*nr+o))-a))}(-t/o)):u*=Me(i/o,n),u*=Me(o>1e10?i/o*(a/o):i*a/(o*o),t),u*=ir(2.718281828459045/a))}function ze(e,t){var n,i;return r(e)||e<=0||r(t)||t<=0?NaN:(n=t*qe(1+1/e,t),i=t*qe(1+2/e,t),ir(i-n*n))}export{ze as default};
//# sourceMappingURL=mod.js.map
