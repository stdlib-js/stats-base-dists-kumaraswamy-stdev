// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=function(n){return n!=n},t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,u=e,i=function(n){return u.call(n)},f=Object.prototype.hasOwnProperty,o=function(n,r){return null!=n&&f.call(n,r)},c="function"==typeof Symbol?Symbol.toStringTag:"",a=o,y=c,l=e,p=i,v=function(n){var r,t,e;if(null==n)return l.call(n);t=n[y],r=a(n,y);try{n[y]=void 0}catch(r){return l.call(n)}return e=l.call(n),r?n[y]=t:delete n[y],e},A=t&&"symbol"==typeof Symbol.toStringTag?v:p,b=A,w="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,U=function(n){return w&&n instanceof Uint32Array||"[object Uint32Array]"===b(n)},m=d,s=function(){var n,r;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=U(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},I=s()?h:N,g=A,F="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,H=function(n){return F&&n instanceof Float64Array||"[object Float64Array]"===g(n)},O=S,T=function(){var n,r;if("function"!=typeof O)return!1;try{r=new O([1,3.14,-3.14,NaN]),n=H(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},j="function"==typeof Float64Array?Float64Array:void 0,E=function(){throw new Error("not implemented")},G=T()?j:E,L=A,M="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,x=function(n){return M&&n instanceof Uint8Array||"[object Uint8Array]"===L(n)},P=W,V=function(){var n,r;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=x(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},q=V()?Y:_,k=A,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,C=function(n){return z&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},D=B,J=function(){var n,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,65536,65537]),n=C(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},K="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:J()?K:Q,uint8:q};(n=new R.uint16(1))[0]=4660;var X,Z,$=52===new R.uint8(n.buffer)[0],nn=I,rn=!0===$?1:0,tn=new G(1),en=new nn(tn.buffer),un=function(n){return tn[0]=n,en[rn]},fn=I,on=!0===$?1:0,cn=new G(1),an=new fn(cn.buffer),yn=function(n,r){return cn[0]=n,an[on]=r>>>0,cn[0]},ln=yn,pn=Number.POSITIVE_INFINITY,vn=Number.NEGATIVE_INFINITY,An=r,bn=un,wn=ln,dn=pn,Un=vn,mn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},sn=.6931471803691238,hn=1.9082149292705877e-10,Nn=function(n){var r,t,e,u,i,f,o,c,a,y;if(n<-1||An(n))return NaN;if(-1===n)return Un;if(n===dn)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,u=n,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=bn(a=1+n))>>20)-1023)>0?1-(a-n):n-(a-1),i/=a):(y=((t=bn(a=n))>>20)-1023,i=0),(t&=1048575)<434334?a=wn(a,1072693248|t):(y+=1,a=wn(a,1071644672|t),t=1048576-t>>2),u=a-1),r=.5*u*u,0===t?0===u?y*sn+(i+=y*hn):y*sn-((c=r*(1-.6666666666666666*u))-(y*hn+i)-u):(c=(o=(f=u/(2+u))*f)*mn(o),0===y?u-(r-f*(r+c)):y*sn-(r-(f*(r+c)+(y*hn+i))-u))},In=Math.sqrt,gn=function(n){return Math.abs(n)},Fn=Math.floor,Sn=Math.ceil,Hn=Fn,On=Sn,Tn=function(n){return n<0?On(n):Hn(n)},jn=pn,En=vn,Gn=function(n){return n===jn||n===En};!0===$?(X=1,Z=0):(X=0,Z=1);var Ln,Mn,Wn=I,xn={HIGH:X,LOW:Z},Pn=new G(1),Vn=new Wn(Pn.buffer),Yn=xn.HIGH,_n=xn.LOW,qn=function(n,r){return Pn[0]=r,n[0]=Vn[Yn],n[1]=Vn[_n],n},kn=function(n,r){return 1===arguments.length?qn([0,0],n):qn(n,r)},zn=kn;!0===$?(Ln=1,Mn=0):(Ln=0,Mn=1);var Bn=I,Cn={HIGH:Ln,LOW:Mn},Dn=new G(1),Jn=new Bn(Dn.buffer),Kn=Cn.HIGH,Qn=Cn.LOW,Rn=function(n,r){return Jn[Kn]=n,Jn[Qn]=r,Dn[0]},Xn=zn,Zn=un,$n=Rn,nr=[0,0],rr=function(n,r){var t,e;return Xn(nr,n),t=nr[0],t&=2147483647,e=Zn(r),$n(t|=e&=2147483648,nr[1])},tr=Gn,er=r,ur=gn,ir=function(n,r){return er(r)||tr(r)?(n[0]=r,n[1]=0,n):0!==r&&ur(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},fr=function(n,r){return 1===arguments.length?ir([0,0],n):ir(n,r)},or=un,cr=function(n){var r=or(n);return(r=(2146435072&r)>>>20)-1023|0},ar=pn,yr=vn,lr=r,pr=Gn,vr=rr,Ar=fr,br=cr,wr=zn,dr=Rn,Ur=[0,0],mr=[0,0],sr=function(n,r){var t,e;return 0===r||0===n||lr(n)||pr(n)?n:(Ar(Ur,n),r+=Ur[1],(r+=br(n=Ur[0]))<-1074?vr(0,n):r>1023?n<0?yr:ar:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,wr(mr,n),t=mr[0],t&=2148532223,e*dr(t|=r+1023<<20,mr[1])))},hr=sr,Nr=hr,Ir=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},gr=r,Fr=Tn,Sr=vn,Hr=pn,Or=function(n,r,t){var e,u,i;return i=(e=n-r)-(u=e*e)*Ir(u),Nr(1-(r-e*i/(2-i)-n),t)},Tr=1.4426950408889634,jr=1/(1<<28),Er=function(n){var r;return gr(n)||n===Hr?n:n===Sr?0:n>709.782712893384?Hr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<jr?1+n:(r=Fr(n<0?Tr*n-.5:Tr*n+.5),Or(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Gr=Fn,Lr=function(n){return Gr(n)===n},Mr=Lr,Wr=function(n){return Mr(n/2)},xr=function(n){return Wr(n>0?n-1:n+1)},Pr=I,Vr=!0===$?0:1,Yr=new G(1),_r=new Pr(Yr.buffer),qr=function(n,r){return Yr[0]=n,_r[Vr]=r>>>0,Yr[0]},kr=function(n){return 0|n},zr=xr,Br=rr,Cr=vn,Dr=pn,Jr=un,Kr=gn,Qr=pn,Rr=un,Xr=qr,Zr=ln,$r=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},nt=1048576,rt=[1,1.5],tt=[0,.5849624872207642],et=[0,1.350039202129749e-8],ut=qr,it=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},ft=un,ot=ln,ct=qr,at=kr,yt=hr,lt=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},pt=2147483647,vt=1048575,At=1048576,bt=r,wt=xr,dt=Gn,Ut=Lr,mt=In,st=gn,ht=zn,Nt=qr,It=kr,gt=vn,Ft=pn,St=function(n,r){return r===Cr?Dr:r===Dr?0:r>0?zr(r)?n:0:zr(r)?Br(Dr,n):Dr},Ht=function(n,r){return(2147483647&Jr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Ot=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Kr(n)<1==(r===Qr)?0:Qr},Tt=function(n,r,t){var e,u,i,f,o,c,a,y,l,p,v,A,b,w,d,U,m,s,h,N;return s=0,t<nt&&(s-=53,t=Rr(r*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,s+=1,t-=nt),e=524288+(t>>1|536870912),o=(m=1/((r=Zr(r,t))+(a=rt[N])))*((U=r-a)-(f=Xr(u=U*m,0))*(c=Zr(0,e+=N<<18))-f*(r-(c-a))),d=(i=u*u)*i*$r(i),c=Xr(c=3+(i=f*f)+(d+=o*(f+u)),0),b=(v=-7.028461650952758e-9*(l=Xr(l=(U=f*c)+(m=o*c+(d-(c-3-i))*u),0))+.9617966939259756*(m-(l-U))+et[N])-((A=Xr(A=(p=.9617967009544373*l)+v+(y=tt[N])+(w=s),0))-w-y-p),n[0]=A,n[1]=b,n},jt=function(n,r){var t,e,u,i,f;return t=(f=1.9259629911266175e-8*(u=r-1)-u*u*it(u)*1.4426950408889634)-((e=ut(e=(i=1.4426950216293335*u)+f,0))-i),n[0]=e,n[1]=t,n},Et=function(n,r,t){var e,u,i,f,o,c,a,y,l;return l=((y=n&pt|0)>>20)-1023|0,a=0,y>1071644672&&(u=ot(0,((a=n+(At>>l+1)>>>0)&~(vt>>(l=((a&pt)>>20)-1023|0)))>>>0),a=(a&vt|At)>>20-l>>>0,n<0&&(a=-a),r-=u),o=(f=.6931471805599453*(t-((u=ct(u=t+r,0))-r))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),e=c-(u=c*c)*lt(u),n=ft(c=1-(c*e/(e-2)-(o+c*o)-c)),n=at(n),c=(n+=a<<20>>>0)>>20<=0?yt(c,a):ot(c,n)},Gt=2147483647,Lt=1083179008,Mt=1e300,Wt=1e-300,xt=[0,0],Pt=[0,0],Vt=function n(r,t){var e,u,i,f,o,c,a,y,l,p,v,A,b,w;if(bt(r)||bt(t))return NaN;if(ht(xt,t),o=xt[0],0===xt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return mt(r);if(-.5===t)return 1/mt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(dt(t))return Ot(r,t)}if(ht(xt,r),f=xt[0],0===xt[1]){if(0===f)return St(r,t);if(1===r)return 1;if(-1===r&&wt(t))return-1;if(dt(r))return r===gt?n(-0,-t):t<0?0:Ft}if(r<0&&!1===Ut(t))return(r-r)/(r-r);if(i=st(r),e=f&Gt|0,u=o&Gt|0,a=o>>>31|0,c=(c=f>>>31|0)&&wt(t)?-1:1,u>1105199104){if(u>1139802112)return Ht(r,t);if(e<1072693247)return 1===a?c*Mt*Mt:c*Wt*Wt;if(e>1072693248)return 0===a?c*Mt*Mt:c*Wt*Wt;v=jt(Pt,i)}else v=Tt(Pt,i,e);if(p=(t-(y=Nt(t,0)))*v[0]+t*v[1],l=y*v[0],ht(xt,A=p+l),b=It(xt[0]),w=It(xt[1]),b>=Lt){if(0!=(b-Lt|w))return c*Mt*Mt;if(p+8008566259537294e-32>A-l)return c*Mt*Mt}else if((b&Gt)>=1083231232){if(0!=(b-3230714880|w))return c*Wt*Wt;if(p<=A-l)return c*Wt*Wt}return c*(A=Et(b,l,p))},Yt=r,_t=Nn,qt=In,kt=gn,zt=Er,Bt=Vt,Ct=2220446049250313e-31,Dt=function(n){var r,t;return 0===n?1/0:((n<0?-n:n)<=1?(r=709811.662581658+n*(679979.8474157227+n*(293136.7857211597+n*(74887.54032914672+n*(12555.290582413863+n*(1443.4299244417066+n*(115.24194596137347+n*(6.309239205732627+n*(.22668404630224365+n*(.004826466289237662+4624429436045379e-20*n))))))))),t=0+n*(362880+n*(1026576+n*(1172700+n*(723680+n*(269325+n*(63273+n*(9450+n*(870+n*(45+1*n)))))))))):(r=4624429436045379e-20+(n=1/n)*(.004826466289237662+n*(.22668404630224365+n*(6.309239205732627+n*(115.24194596137347+n*(1443.4299244417066+n*(12555.290582413863+n*(74887.54032914672+n*(293136.7857211597+n*(679979.8474157227+709811.662581658*n))))))))),t=1+n*(45+n*(870+n*(9450+n*(63273+n*(269325+n*(723680+n*(1172700+n*(1026576+n*(362880+0*n)))))))))),r/t)},Jt=10.900511,Kt=function(n,r){var t,e,u,i,f,o,c;return Yt(n)||Yt(r)||n<0||r<0?NaN:1===r?1/n:1===n?1/r:(c=n+r)<Ct?(f=c/n,f/=r):c===n&&r<Ct?1/r:c===r&&n<Ct?1/n:(n<r&&(o=r,r=n,n=o),e=n+Jt-.5,u=r+Jt-.5,i=c+Jt-.5,f=Dt(n)*(Dt(r)/Dt(c)),kt(r*(t=n-.5-r))<100*i&&n>100?f*=zt(t*_t(-r/i)):f*=Bt(e/i,t),f*=Bt(i>1e10?e/i*(u/i):e*u/(i*i),r),f*=qt(2.718281828459045/u))};return function(n,t){var e,u;return r(n)||n<=0||r(t)||t<=0?NaN:(e=t*Kt(1+1/n,t),u=t*Kt(1+2/n,t),In(u-e*e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).stdev=r();
//# sourceMappingURL=index.js.map
