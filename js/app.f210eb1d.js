(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],g=0,d=[];g<s.length;g++)i=s[g],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/first-project-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"014e":function(e,t,r){},"8b00":function(e,t,r){"use strict";var n=r("014e"),o=r.n(n);o.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("0086"),a=r.n(o),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("corgi-image")],1)},s=[],c=r("d4ec"),u=r("262e"),l=r("2caf"),g=r("9ab4"),d=r("60a3"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"loader-wrapper",class:{"is-active":e.isLoading}},[r("div",{staticClass:"loader is-loading"})]),r("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.loadPreviousImage,expression:"loadPreviousImage",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:e.loadNextImage,expression:"loadNextImage",arg:"swipe",modifiers:{left:!0}}],staticClass:"hero is-fullheight",class:{hidden:e.isLoading}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("img",{attrs:{src:e.dogImg},on:{click:e.loadNewImage,load:e.imageLoaded}})])]),r("div",{staticClass:"hero-foot"},[r("div",{staticClass:"field is-grouped has-addons has-addons-centered"},[r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary is-outlined",attrs:{disabled:e.dogImgs.length<2},on:{click:e.loadPreviousImage}},[e._v(" Previous ")])]),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary is-outlined",attrs:{disabled:e.dogImgs.length<2},on:{click:e.loadNextImage}},[e._v(" Next ")])])])])])])},f=[],h=(r("d3b7"),r("96cf"),r("1da1")),m=r("bee2"),v="https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10505.jpg",b="https://dog.ceo/api/breed/corgi/images/random",w=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(c["a"])(this,r),e=t.apply(this,arguments),e.dogImg="",e.dogImgs=[],e.isLoading=!1,e}return Object(m["a"])(r,[{key:"loadNewImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getCorgiImg();case 2:this.dogImg=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadNextImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("previous",this.dogImgs),t=this.dogImgs.shift(),t?(this.dogImg=t,this.dogImgs.push(t),console.log("now",this.dogImgs)):this.dogImg=v;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadPreviousImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("previous",this.dogImgs),t=this.dogImgs.pop(),t?(this.dogImg=t,this.dogImgs.unshift(t),console.log("now",this.dogImgs)):this.dogImg=v;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"imageLoaded",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadNewImage();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getCorgiImg",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,fetch(b).then((function(e){return e.json()}));case 4:return t=e.sent,this.dogImgs.push(t.message),e.abrupt("return",t.message);case 9:if(e.prev=9,e.t0=e["catch"](1),r=this.dogImgs.length,this.isLoading=!1,!r){e.next=15;break}return e.abrupt("return",this.dogImgs[Math.floor(Math.random()*r)]);case 15:return e.abrupt("return",v);case 16:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(d["b"]);w=Object(g["a"])([d["a"]],w);var y=w,I=y,j=(r("8b00"),r("2877")),O=Object(j["a"])(I,p,f,!1,null,"26a72e92",null),x=O.exports,k=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(d["b"]);k=Object(g["a"])([Object(d["a"])({components:{CorgiImage:x}})],k);var C=k,N=C,_=Object(j["a"])(N,i,s,!1,null,null,null),P=_.exports,R=r("9483");Object(R["a"])("".concat("/first-project-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,n["a"].use(a.a,{swipeTolerance:100}),new n["a"]({render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.f210eb1d.js.map