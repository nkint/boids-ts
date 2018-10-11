parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"BjvI":[function(require,module,exports) {
function e(e){if(e===window||e===document.body)return[window.innerWidth,window.innerHeight];if(!e.parentNode){var r=!0;document.body.appendChild(e)}var n=e.getBoundingClientRect(),o=getComputedStyle(e),i=(0|n.height)+t(o.getPropertyValue("margin-top"))+t(o.getPropertyValue("margin-bottom")),d=(0|n.width)+t(o.getPropertyValue("margin-left"))+t(o.getPropertyValue("margin-right"));return r&&document.body.removeChild(e),[d,i]}function t(e){return parseFloat(e)||0}module.exports=e;
},{}],"d9wR":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};exports.__esModule=!0;var t=require("element-size"),r={parent:null,margin:0,scale:1};function n(n,i){var s=e({},r,i),a=s.margin,o=s.scale,l=s.parent;function p(){var e,r,i=l||n.parentNode;if(i&&i!==document.body){var s=t(i);e=0|s[0],r=0|s[1]}else e=window.innerWidth,r=window.innerHeight;return e-=2*a,r-=2*a,n.width=e*o,n.height=r*o,n.style.width=e+"px",n.style.height=r+"px",[e,r]}return n.style.position=n.style.position||"relative",n.style.top="0",n.style.left="0",n.style.margin=a+"px",p(),p}exports.createFit=n;
},{"element-size":"BjvI"}],"NohL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Flock=void 0;var o=function(){function o(){this.boids=[]}return o.prototype.run=function(o){void 0===o&&(o=null);for(var t=0,i=this.boids;t<i.length;t++){i[t].run(this.boids,o)}},o.prototype.addBoid=function(o){this.boids.push(o)},o}();exports.Flock=o;
},{}],"RG5D":[function(require,module,exports) {
module.exports=1e-6;
},{}],"CRrp":[function(require,module,exports) {
function r(){var r=new Float32Array(2);return r[0]=0,r[1]=0,r}module.exports=r;
},{}],"eVWr":[function(require,module,exports) {
function r(r){var e=new Float32Array(2);return e[0]=r[0],e[1]=r[1],e}module.exports=r;
},{}],"6Tsy":[function(require,module,exports) {
function r(r,e){var n=new Float32Array(2);return n[0]=r,n[1]=e,n}module.exports=r;
},{}],"iGXv":[function(require,module,exports) {
function e(e,n){return e[0]=n[0],e[1]=n[1],e}module.exports=e;
},{}],"dC9V":[function(require,module,exports) {
function e(e,n,o){return e[0]=n,e[1]=o,e}module.exports=e;
},{}],"1h/W":[function(require,module,exports) {
module.exports=t;var a=require("./epsilon");function t(t,h){var s=t[0],M=t[1],r=h[0],b=h[1];return Math.abs(s-r)<=a*Math.max(1,Math.abs(s),Math.abs(r))&&Math.abs(M-b)<=a*Math.max(1,Math.abs(M),Math.abs(b))}
},{"./epsilon":"RG5D"}],"gDVz":[function(require,module,exports) {
function e(e,n){return e[0]===n[0]&&e[1]===n[1]}module.exports=e;
},{}],"7Usl":[function(require,module,exports) {
function e(e,n,o){return e[0]=n[0]+o[0],e[1]=n[1]+o[1],e}module.exports=e;
},{}],"JBay":[function(require,module,exports) {
function e(e,n,o){return e[0]=n[0]-o[0],e[1]=n[1]-o[1],e}module.exports=e;
},{}],"l5jD":[function(require,module,exports) {
module.exports=require("./subtract");
},{"./subtract":"JBay"}],"d4JS":[function(require,module,exports) {
function e(e,n,o){return e[0]=n[0]*o[0],e[1]=n[1]*o[1],e}module.exports=e;
},{}],"8iNN":[function(require,module,exports) {
module.exports=require("./multiply");
},{"./multiply":"d4JS"}],"EB7T":[function(require,module,exports) {
function e(e,n,o){return e[0]=n[0]/o[0],e[1]=n[1]/o[1],e}module.exports=e;
},{}],"zhrc":[function(require,module,exports) {
module.exports=require("./divide");
},{"./divide":"EB7T"}],"m1xm":[function(require,module,exports) {
function e(e,n){return e[0]=1/n[0],e[1]=1/n[1],e}module.exports=e;
},{}],"oad5":[function(require,module,exports) {
function n(n,t,e){return n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n}module.exports=n;
},{}],"AUfm":[function(require,module,exports) {
function t(t,a,e){return t[0]=Math.max(a[0],e[0]),t[1]=Math.max(a[1],e[1]),t}module.exports=t;
},{}],"5LrC":[function(require,module,exports) {
function t(t,n,o){var r=Math.cos(o),a=Math.sin(o),e=n[0],s=n[1];return t[0]=e*r-s*a,t[1]=e*a+s*r,t}module.exports=t;
},{}],"Q8bI":[function(require,module,exports) {
function o(o,r){return o[0]=Math.floor(r[0]),o[1]=Math.floor(r[1]),o}module.exports=o;
},{}],"Q7XM":[function(require,module,exports) {
function e(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}module.exports=e;
},{}],"mON6":[function(require,module,exports) {
function n(n,o){return n[0]=Math.round(o[0]),n[1]=Math.round(o[1]),n}module.exports=n;
},{}],"7KRz":[function(require,module,exports) {
function e(e,n,o){return e[0]=n[0]*o,e[1]=n[1]*o,e}module.exports=e;
},{}],"bnjs":[function(require,module,exports) {
function e(e,n,o,r){return e[0]=n[0]+o[0]*r,e[1]=n[1]+o[1]*r,e}module.exports=e;
},{}],"oGij":[function(require,module,exports) {
function r(r,t){var e=t[0]-r[0],n=t[1]-r[1];return Math.sqrt(e*e+n*n)}module.exports=r;
},{}],"cAPJ":[function(require,module,exports) {
module.exports=require("./distance");
},{"./distance":"oGij"}],"Ltjm":[function(require,module,exports) {
function r(r,e){var n=e[0]-r[0],o=e[1]-r[1];return n*n+o*o}module.exports=r;
},{}],"UBwB":[function(require,module,exports) {
module.exports=require("./squaredDistance");
},{"./squaredDistance":"Ltjm"}],"w4Ny":[function(require,module,exports) {
function r(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)}module.exports=r;
},{}],"kwVs":[function(require,module,exports) {
module.exports=require("./length");
},{"./length":"w4Ny"}],"ONEB":[function(require,module,exports) {
function r(r){var e=r[0],n=r[1];return e*e+n*n}module.exports=r;
},{}],"NCx7":[function(require,module,exports) {
module.exports=require("./squaredLength");
},{"./squaredLength":"ONEB"}],"/NEO":[function(require,module,exports) {
function e(e,n){return e[0]=-n[0],e[1]=-n[1],e}module.exports=e;
},{}],"ja96":[function(require,module,exports) {
function r(r,t){var e=t[0],n=t[1],o=e*e+n*n;return o>0&&(o=1/Math.sqrt(o),r[0]=t[0]*o,r[1]=t[1]*o),r}module.exports=r;
},{}],"X7mn":[function(require,module,exports) {
function e(e,n){return e[0]*n[0]+e[1]*n[1]}module.exports=e;
},{}],"mRDr":[function(require,module,exports) {
function r(r,e,n){var o=e[0]*n[1]-e[1]*n[0];return r[0]=r[1]=0,r[2]=o,r}module.exports=r;
},{}],"Yu9h":[function(require,module,exports) {
function r(r,e,n,o){var t=e[0],u=e[1];return r[0]=t+o*(n[0]-t),r[1]=u+o*(n[1]-u),r}module.exports=r;
},{}],"AoO6":[function(require,module,exports) {
function t(t,a){a=a||1;var n=2*Math.random()*Math.PI;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t}module.exports=t;
},{}],"zRNY":[function(require,module,exports) {
function r(r,e,n){var o=e[0],t=e[1];return r[0]=n[0]*o+n[2]*t,r[1]=n[1]*o+n[3]*t,r}module.exports=r;
},{}],"+qn4":[function(require,module,exports) {
function r(r,e,n){var o=e[0],t=e[1];return r[0]=n[0]*o+n[2]*t+n[4],r[1]=n[1]*o+n[3]*t+n[5],r}module.exports=r;
},{}],"6t7q":[function(require,module,exports) {
function r(r,e,n){var o=e[0],t=e[1];return r[0]=n[0]*o+n[3]*t+n[6],r[1]=n[1]*o+n[4]*t+n[7],r}module.exports=r;
},{}],"E+8J":[function(require,module,exports) {
function r(r,e,n){var o=e[0],t=e[1];return r[0]=n[0]*o+n[4]*t+n[12],r[1]=n[1]*o+n[5]*t+n[13],r}module.exports=r;
},{}],"xpTd":[function(require,module,exports) {
module.exports=r;var e=require("./create")();function r(r,t,n,a,o,u){var h,i;for(t||(t=2),n||(n=0),i=a?Math.min(a*t+n,r.length):r.length,h=n;h<i;h+=t)e[0]=r[h],e[1]=r[h+1],o(e,e,u),r[h]=e[0],r[h+1]=e[1];return r}
},{"./create":"CRrp"}],"cwOV":[function(require,module,exports) {
function r(r,e,t){var a=e[0]*e[0]+e[1]*e[1];if(a>t*t){var n=Math.sqrt(a);r[0]=e[0]/n*t,r[1]=e[1]/n*t}else r[0]=e[0],r[1]=e[1];return r}module.exports=r;
},{}],"cSMR":[function(require,module,exports) {
module.exports={EPSILON:require("./epsilon"),create:require("./create"),clone:require("./clone"),fromValues:require("./fromValues"),copy:require("./copy"),set:require("./set"),equals:require("./equals"),exactEquals:require("./exactEquals"),add:require("./add"),subtract:require("./subtract"),sub:require("./sub"),multiply:require("./multiply"),mul:require("./mul"),divide:require("./divide"),div:require("./div"),inverse:require("./inverse"),min:require("./min"),max:require("./max"),rotate:require("./rotate"),floor:require("./floor"),ceil:require("./ceil"),round:require("./round"),scale:require("./scale"),scaleAndAdd:require("./scaleAndAdd"),distance:require("./distance"),dist:require("./dist"),squaredDistance:require("./squaredDistance"),sqrDist:require("./sqrDist"),length:require("./length"),len:require("./len"),squaredLength:require("./squaredLength"),sqrLen:require("./sqrLen"),negate:require("./negate"),normalize:require("./normalize"),dot:require("./dot"),cross:require("./cross"),lerp:require("./lerp"),random:require("./random"),transformMat2:require("./transformMat2"),transformMat2d:require("./transformMat2d"),transformMat3:require("./transformMat3"),transformMat4:require("./transformMat4"),forEach:require("./forEach"),limit:require("./limit")};
},{"./epsilon":"RG5D","./create":"CRrp","./clone":"eVWr","./fromValues":"6Tsy","./copy":"iGXv","./set":"dC9V","./equals":"1h/W","./exactEquals":"gDVz","./add":"7Usl","./subtract":"JBay","./sub":"l5jD","./multiply":"d4JS","./mul":"8iNN","./divide":"EB7T","./div":"zhrc","./inverse":"m1xm","./min":"oad5","./max":"AUfm","./rotate":"5LrC","./floor":"Q8bI","./ceil":"Q7XM","./round":"mON6","./scale":"7KRz","./scaleAndAdd":"bnjs","./distance":"oGij","./dist":"cAPJ","./squaredDistance":"Ltjm","./sqrDist":"UBwB","./length":"w4Ny","./len":"kwVs","./squaredLength":"ONEB","./sqrLen":"NCx7","./negate":"/NEO","./normalize":"ja96","./dot":"X7mn","./cross":"mRDr","./lerp":"Yu9h","./random":"AoO6","./transformMat2":"zRNY","./transformMat2d":"+qn4","./transformMat3":"6t7q","./transformMat4":"E+8J","./forEach":"xpTd","./limit":"cwOV"}],"2e5Q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.map=r,exports.setLen=t,exports.heading=n;var e=require("gl-vec2");function r(e,r,t,n,o){return n+(e-r)/(t-r)*(o-n)}function t(r,t,n){return(0,e.normalize)(r,t),(0,e.scale)(r,r,n),r}function n(e){return Math.atan2(e[1],e[0])}
},{"gl-vec2":"cSMR"}],"Eahw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Boid=void 0;var e=require("gl-vec2"),t=require("./gl-vec2-utils"),i=function(){function i(t){this.acceleration=(0,e.set)((0,e.create)(),0,0),this.velocity=(0,e.set)((0,e.create)(),t.velocity[0],t.velocity[1]),this.oldVelocity=(0,e.set)((0,e.create)(),t.velocity[0],t.velocity[1]),this.smoothVelocity=(0,e.set)((0,e.create)(),t.velocity[0],t.velocity[1]),this.position=(0,e.set)((0,e.create)(),t.center[0],t.center[1]),this.r=t.r||3,this.maxspeed=t.maxspeed||3,this.maxforce=t.maxforce||.05,this.width=t.canvasSize[0],this.height=t.canvasSize[1],this.separationScale=t.separationScale||1.5,this.alignScale=t.alignScale||1,this.cohesionScale=t.cohesionScale||1,this.desiredSeparation=Math.pow(t.desiredSeparation||25,2),this.neighborDistance=Math.pow(t.neighborDistance||50,2),this.arriveRadius=t.arriveRadius||100,this.desiredSeek=(0,e.set)((0,e.create)(),0,0),this.steerSeek=(0,e.set)((0,e.create)(),0,0),this.separateDiff=(0,e.set)((0,e.create)(),0,0),this.steerSeparate=(0,e.set)((0,e.create)(),0,0),this.sumCohesion=(0,e.set)((0,e.create)(),0,0),this.sumAlign=(0,e.set)((0,e.create)(),0,0)}return i.prototype.run=function(e,t){void 0===t&&(t=null),t?this.arrive(t):this.flock(e),this.update(),this.borders()},i.prototype.arrive=function(i){var s=(0,e.sub)((0,e.create)(),i,this.position),a=(0,e.len)(s);if(a<this.arriveRadius){var r=(0,t.map)(a,0,this.arriveRadius,0,this.maxspeed);(0,t.setLen)(s,s,r)}else(0,t.setLen)(s,s,this.maxspeed);var o=(0,e.sub)(s,s,this.velocity);(0,e.limit)(o,o,this.maxforce),(0,e.add)(this.acceleration,this.acceleration,o)},i.prototype.flock=function(t){(0,e.set)(this.oldVelocity,this.smoothVelocity[0],this.smoothVelocity[1]),(0,e.set)(this.sumCohesion,0,0),(0,e.set)(this.sumAlign,0,0);var i=this.separate(t),s=this.align(t),a=this.cohesion(t);(0,e.scale)(i,i,this.separationScale),(0,e.scale)(s,s,this.alignScale),(0,e.scale)(a,a,this.cohesionScale),(0,e.add)(this.acceleration,this.acceleration,i),(0,e.add)(this.acceleration,this.acceleration,s),(0,e.add)(this.acceleration,this.acceleration,a)},i.prototype.update=function(){(0,e.add)(this.velocity,this.velocity,this.acceleration),(0,e.limit)(this.velocity,this.velocity,this.maxspeed),(0,e.add)(this.position,this.position,this.velocity),(0,e.scale)(this.acceleration,this.acceleration,0),(0,e.lerp)(this.smoothVelocity,this.oldVelocity,this.velocity,.1)},i.prototype.seek=function(t){return(0,e.sub)(this.desiredSeek,t,this.position),(0,e.normalize)(this.desiredSeek,this.desiredSeek),(0,e.scale)(this.desiredSeek,this.desiredSeek,this.maxspeed),(0,e.sub)(this.steerSeek,this.desiredSeek,this.velocity),(0,e.limit)(this.steerSeek,this.steerSeek,this.maxforce),this.steerSeek},i.prototype.borders=function(){this.position[0]<-this.r&&(this.position[0]=this.width+this.r),this.position[1]<-this.r&&(this.position[1]=this.height+this.r),this.position[0]>this.width+this.r&&(this.position[0]=-this.r),this.position[1]>this.height+this.r&&(this.position[1]=-this.r)},i.prototype.separate=function(t){var i=this.desiredSeparation;(0,e.set)(this.steerSeparate,0,0);for(var s=0,a=0;a<t.length;a++){var r=(0,e.sqrDist)(this.position,t[a].position);r>0&&r<i&&((0,e.sub)(this.separateDiff,this.position,t[a].position),(0,e.normalize)(this.separateDiff,this.separateDiff),(0,e.scale)(this.separateDiff,this.separateDiff,1/r),(0,e.add)(this.steerSeparate,this.steerSeparate,this.separateDiff),s++)}return s>0&&(0,e.scale)(this.steerSeparate,this.steerSeparate,1/s),(0,e.len)(this.steerSeparate)>0&&((0,e.normalize)(this.steerSeparate,this.steerSeparate),(0,e.scale)(this.steerSeparate,this.steerSeparate,this.maxspeed),(0,e.sub)(this.steerSeparate,this.steerSeparate,this.velocity),(0,e.limit)(this.steerSeparate,this.steerSeparate,this.maxforce)),this.steerSeparate},i.prototype.align=function(t){for(var i=this.neighborDistance,s=(0,e.set)(this.sumAlign,0,0),a=0,r=0;r<t.length;r++){var o=(0,e.sqrDist)(this.position,t[r].position);o>0&&o<i&&((0,e.add)(s,s,t[r].velocity),a++)}if(a>0){(0,e.scale)(s,s,1/a),(0,e.normalize)(s,s),(0,e.scale)(s,s,this.maxspeed);var h=(0,e.sub)(s,s,this.velocity);return(0,e.limit)(h,h,this.maxforce),h}return(0,e.set)((0,e.create)(),0,0)},i.prototype.cohesion=function(t){for(var i=this.neighborDistance,s=(0,e.set)(this.sumCohesion,0,0),a=0,r=0;r<t.length;r++){var o=(0,e.sqrDist)(this.position,t[r].position);o>0&&o<i&&((0,e.add)(s,s,t[r].position),a++)}return a>0?((0,e.scale)(s,s,1/a),this.seek(s)):(0,e.set)((0,e.create)(),0,0)},i}();exports.Boid=i;
},{"gl-vec2":"cSMR","./gl-vec2-utils":"2e5Q"}],"VexP":[function(require,module,exports) {
function i(i,n,r,t){return JSON.stringify(i,e(n,t),r)}function e(i,e){var n=[],r=[];return null==e&&(e=function(i,e){return n[0]===e?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(e)).join(".")+"]"}),function(t,l){if(n.length>0){var u=n.indexOf(this);~u?n.splice(u+1):n.push(this),~u?r.splice(u,1/0,t):r.push(t),~n.indexOf(l)&&(l=e.call(this,t,l))}else n.push(l);return null==i?l:i.call(this,t,l)}}exports=module.exports=i,exports.getSerialize=e;
},{}],"dE2i":[function(require,module,exports) {
"use strict";var n=require("json-stringify-safe"),r=function(){var n=4022871197;return function(r){if(r){r=r.toString();for(var t=0;t<r.length;t++){var e=.02519603282416938*(n+=r.charCodeAt(t));e-=n=e>>>0,n=(e*=n)>>>0,n+=4294967296*(e-=n)}return 2.3283064365386963e-10*(n>>>0)}n=4022871197}},t=function(t){return function(){var e,o,i=48,u=1,a=i,f=new Array(i),c=0,l=new r;for(e=0;e<i;e++)f[e]=l(Math.random());var g=function(){++a>=i&&(a=0);var n=1768863*f[a]+2.3283064365386963e-10*u;return f[a]=n-(u=0|n)},h=function(n){return Math.floor(n*(g()+1.1102230246251565e-16*(2097152*g()|0)))};h.string=function(n){var r,t="";for(r=0;r<n;r++)t+=String.fromCharCode(33+h(94));return t};return h.cleanString=function(n){return n=(n=(n=n.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[\x00-\x1F]/gi,"")).replace(/\n /,"\n")},h.hashString=function(n){for(n=h.cleanString(n),l(n),e=0;e<n.length;e++)for(c=n.charCodeAt(e),o=0;o<i;o++)f[o]-=l(c),f[o]<0&&(f[o]+=1)},h.seed=function(r){null==r&&(r=Math.random()),"string"!=typeof r&&(r=n(r,function(n,r){return"function"==typeof r?r.toString():r})),h.initState(),h.hashString(r)},h.addEntropy=function(){var n=[];for(e=0;e<arguments.length;e++)n.push(arguments[e]);!function(){var n=Array.prototype.slice.call(arguments);for(e=0;e<n.length;e++)for(o=0;o<i;o++)f[o]-=l(n[e]),f[o]<0&&(f[o]+=1)}(c+++(new Date).getTime()+n.join("")+Math.random())},h.initState=function(){for(l(),e=0;e<i;e++)f[e]=l(" ");u=1,a=i},h.done=function(){l=null},void 0!==t&&h.seed(t),h.range=function(n){return h(n)},h.random=function(){return h(Number.MAX_VALUE-1)/Number.MAX_VALUE},h.floatBetween=function(n,r){return h.random()*(r-n)+n},h.intBetween=function(n,r){return Math.floor(h.random()*(r-n+1))+n},h}()};t.create=function(n){return new t(n)},module.exports=t;
},{"json-stringify-safe":"VexP"}],"8Cu3":[function(require,module,exports) {
"use strict";function e(e,t,o,r,s){e.save(),e.translate(t,o),e.rotate(r),e.beginPath(),e.moveTo(0,2*-s),e.lineTo(-s,2*s),e.lineTo(s,2*s),e.closePath(),e.stroke(),e.restore()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawBoid=e;
},{}],"4/kh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createScene=v;var e=require("../Flock"),o=require("../Boid"),t=require("random-seed"),r=require("gl-vec2"),i=require("../gl-vec2-utils"),n=require("./draw-utils"),a=(0,t.create)("dudee"),d=a.floatBetween,s=!1,c=!1,l=s?600:1;function u(e,o){return{center:[e/2,o/2],canvasSize:[e,o],velocity:(0,r.set)((0,r.create)(),d(-1,1)/l,d(-1,1)/l),r:3/l,maxspeed:3/l,maxforce:.05/l,separationScale:1.5,alignScale:1,cohesionScale:1,desiredSeparation:25/l,neighborDistance:50/l}}function v(t,r,a){for(var d=new e.Flock,v=0,p=null,m=0;m<60;m++){var h=new o.Boid(u(s?1:r,s?1:a));d.addBoid(h)}var S=t.createLinearGradient(0,0,r,0);S.addColorStop(0,"#00b4db"),S.addColorStop(1,"#0083b0");var b=function(e){p=[300,600]};document.addEventListener("mousedown",b),module.hot&&module.hot.dispose(function(){return document.removeEventListener("mousedown",b)}),requestAnimationFrame(function e(){v++,d.run(p),t.clearRect(0,0,r,a),t.fillStyle=S,t.fillRect(0,0,r,a),t.fillStyle="black",t.strokeStyle="black";for(var o=0;o<d.boids.length;++o){var u=d.boids[o],m=u.position[0]*(s?r:1),h=u.position[1]*(s?a:1),b=(0,i.heading)(u.velocity)+Math.PI/2;(0,n.drawBoid)(t,m,h,b,u.r*(s?l:1))}if(p&&t.strokeRect(p[0]-50,p[1]-50,100,100),c){var y={boids:d.boids.map(function(e){return{position:[e.position[0],e.position[1]],rotation:(0,i.heading)(e.smoothVelocity)+Math.PI/2}})};f("http://localhost:8080/save/"+v,y).then(function(){return e()})}else requestAnimationFrame(e)})}function f(e,o){return void 0===e&&(e=""),void 0===o&&(o={}),fetch(e,{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(o)})}
},{"../Flock":"NohL","../Boid":"Eahw","random-seed":"dE2i","gl-vec2":"cSMR","../gl-vec2-utils":"2e5Q","./draw-utils":"8Cu3"}],"EWEi":[function(require,module,exports) {
"use strict";var e=require("canvas-fit-margin-ts"),t=require("./scene"),n=window.devicePixelRatio||1,r=document.createElement("canvas"),i=r.getContext("2d"),a=(0,e.createFit)(r,{scale:n});function c(e,n){(0,t.createScene)(i,e,n)}document.body.style.margin="0",document.querySelector(".canvas-container").appendChild(r);var o=function(){var e=a(),t=e[0],r=e[1];c(t*n,r*n)};o(),window.addEventListener("resize",o),module.hot&&module.hot.dispose(function(){return r.remove()});
},{"canvas-fit-margin-ts":"d9wR","./scene":"4/kh"}]},{},["EWEi"], null)
//# sourceMappingURL=demo.d9dd01c8.map