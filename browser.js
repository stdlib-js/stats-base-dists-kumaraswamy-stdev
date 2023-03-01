// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",u=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,u,f,a;if(null==r)return e.call(r);t=r[i],a=i,n=null!=(f=r)&&o.call(f,a);try{r[i]=void 0}catch(n){return e.call(r)}return u=e.call(r),n?r[i]=t:delete r[i],u}:function(r){return e.call(r)},f="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l,y=n,p="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var b,d=l,w="function"==typeof Uint8Array,A="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,g=b,h="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,65536,65537]),t=n,r=(h&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I={uint16:m,uint8:g};(N=new I.uint16(1))[0]=4660;var O=52===new I.uint8(N.buffer)[0],S=!0===O?1:0,E=new d(1),F=new y(E.buffer);function T(r){return E[0]=r,F[S]}var H=!0===O?1:0,G=new d(1),P=new y(G.buffer);function L(r,n){return G[0]=r,P[H]=n>>>0,G[0]}var M=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY,W=1023,x=.6931471803691238,k=1.9082149292705877e-10,Y=Math.sqrt;function q(r){return Math.abs(r)}var C=Math.floor,z=Math.ceil;function B(r){return r<0?z(r):C(r)}function D(r){return r===M||r===V}var J,K,Q=2147483647,R="function"==typeof Object.defineProperty?Object.defineProperty:null,X=Object.defineProperty,Z=Object.prototype,$=Z.toString,rr=Z.__defineGetter__,nr=Z.__defineSetter__,tr=Z.__lookupGetter__,er=Z.__lookupSetter__,or=function(){try{return R({},"x",{}),!0}catch(r){return!1}}()?X:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(tr.call(r,n)||er.call(r,n)?(e=r.__proto__,r.__proto__=Z,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&rr&&rr.call(r,n,t.get),u&&nr&&nr.call(r,n,t.set),r};function ir(r,n,t){or(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===O?(J=1,K=0):(J=0,K=1);var ur,fr,ar={HIGH:J,LOW:K},cr=new d(1),lr=new y(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[pr],n}function sr(r){return vr(r,[0,0],1,0)}ir(sr,"assign",vr),!0===O?(ur=1,fr=0):(ur=0,fr=1);var br={HIGH:ur,LOW:fr},dr=new d(1),wr=new y(dr.buffer),Ar=br.HIGH,_r=br.LOW;function mr(r,n){return wr[Ar]=r,wr[_r]=n,dr[0]}var gr=[0,0];function hr(r,n){var t,e;return sr.assign(r,gr,1,0),t=gr[0],t&=Q,e=T(n),mr(t|=e&=2147483648,gr[1])}function Ur(n,t,e,o){return r(n)||D(n)?(t[o]=n,t[o+e]=0,t):0!==n&&q(n)<22250738585072014e-324?(t[o]=4503599627370496*n,t[o+e]=-52,t):(t[o]=n,t[o+e]=0,t)}ir((function(r){return Ur(r,[0,0],1,0)}),"assign",Ur);var jr=[0,0],Nr=[0,0];function Ir(n,t){var e,o;return 0===t||0===n||r(n)||D(n)?n:(Ur(n,jr,1,0),t+=jr[1],t+=function(r){var n=T(r);return(n=(2146435072&n)>>>20)-W|0}(n=jr[0]),t<-1074?hr(0,n):t>1023?n<0?V:M:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,sr.assign(n,Nr,1,0),e=Nr[0],e&=2148532223,o*mr(e|=t+W<<20,Nr[1])))}var Or=1.4426950408889634,Sr=1/(1<<28);function Er(n){var t;return r(n)||n===M?n:n===V?0:n>709.782712893384?M:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Sr?1+n:function(r,n,t){var e,o,i,u;return Ir(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(n-.6931471803691238*(t=B(n<0?Or*n-.5:Or*n+.5)),1.9082149292705877e-10*t,t)}function Fr(r){return C(r)===r}function Tr(r){return Fr(r/2)}function Hr(r){return Tr(r>0?r-1:r+1)}var Gr=!0===O?0:1,Pr=new d(1),Lr=new y(Pr.buffer);function Mr(r,n){return Pr[0]=r,Lr[Gr]=n>>>0,Pr[0]}function Vr(r){return 0|r}var Wr=1048576,xr=[1,1.5],kr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8],qr=1048575,Cr=1048576,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d;if(r(n)||r(t))return NaN;if(sr.assign(t,Jr,1,0),f=Jr[0],0===Jr[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Y(n);if(-.5===t)return 1/Y(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(D(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:q(r)<1==(n===M)?0:M}(n,t)}if(sr.assign(n,Jr,1,0),u=Jr[0],0===Jr[1]){if(0===u)return function(r,n){return n===V?M:n===M?0:n>0?Hr(n)?r:0:Hr(n)?hr(M,r):M}(n,t);if(1===n)return 1;if(-1===n&&Hr(t))return-1;if(D(n))return n===V?Qr(-0,-t):t<0?0:M}if(n<0&&!1===Fr(t))return(n-n)/(n-n);if(i=q(n),e=u&Q|0,o=f&Q|0,c=f>>>31|0,a=(a=u>>>31|0)&&Hr(t)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(T(r)&Q)<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*Br*Br:a*Dr*Dr;if(e>1072693248)return 0===c?a*Br*Br:a*Dr*Dr;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Kr,i)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,U;return m=0,t<Wr&&(m-=53,t=T(n*=9007199254740992)),m+=(t>>20)-W|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Wr),u=Mr(o=(A=(n=L(n,t))-(c=xr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=L(0,e+=h<<18),w=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Mr(a=3+(i=u*u)+(w+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=Mr(y=(A=u*a)+(_=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Yr[h])-((s=Mr(s=(p=.9617967009544373*y)+v+(l=kr[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(Kr,i,e);if(s=(p=(t-(l=Mr(t,0)))*v[0]+t*v[1])+(y=l*v[0]),sr.assign(s,Jr,1,0),b=Vr(Jr[0]),d=Vr(Jr[1]),b>=zr){if(0!=(b-zr|d))return a*Br*Br;if(p+8008566259537294e-32>s-y)return a*Br*Br}else if((b&Q)>=1083231232){if(0!=(b-3230714880|d))return a*Dr*Dr;if(p<=s-y)return a*Dr*Dr}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Q|0)>>20)-W|0,c=0,l>1071644672&&(o=L(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&Q)>>20)-W|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Vr(r=T(a=1-((a=(i=.6931471824645996*(o=Mr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ir(a,c):L(a,r)}(b,y,p),a*s}var Rr=2220446049250313e-31;function Xr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Zr=10.900511;function $r(n,t){var e,o,i,u,f,a,c;return r(n)||r(t)||n<0||t<0?NaN:1===t?1/n:1===n?1/t:(c=n+t)<Rr?(f=c/n,f/=t):c===n&&t<Rr?1/t:c===t&&n<Rr?1/n:(n<t&&(a=t,t=n,n=a),o=n+Zr-.5,i=t+Zr-.5,u=c+Zr-.5,f=Xr(n)*(Xr(t)/Xr(c)),q(t*(e=n-.5-t))<100*u&&n>100?f*=Er(e*function(n){var t,e,o,i,u,f,a,c,l,y;if(n<-1||r(n))return NaN;if(-1===n)return V;if(n===M)return n;if(0===n)return n;if(y=1,(o=n<0?-n:n)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,i=n,e=1)}return 0!==y&&(o<9007199254740992?(u=(y=((e=T(l=1+n))>>20)-W)>0?1-(l-n):n-(l-1),u/=l):(y=((e=T(l=n))>>20)-W,u=0),(e&=1048575)<434334?l=L(l,1072693248|e):(y+=1,l=L(l,1071644672|e),e=1048576-e>>2),i=l-1),t=.5*i*i,0===e?0===i?y*x+(u+=y*k):y*x-((c=t*(1-.6666666666666666*i))-(y*k+u)-i):(c=(a=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===y?i-(t-f*(t+c)):y*x-(t-(f*(t+c)+(y*k+u))-i))}(-t/u)):f*=Qr(o/u,e),f*=Qr(u>1e10?o/u*(i/u):o*i/(u*u),t),f*=Y(2.718281828459045/i))}return function(n,t){var e,o;return r(n)||n<=0||r(t)||t<=0?NaN:(e=t*$r(1+1/n,t),o=t*$r(1+2/n,t),Y(o-e*e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).stdev=n();
//# sourceMappingURL=browser.js.map