(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],d=0,g=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/first-project-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"7d24":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("0086"),o=r.n(a),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("corgi-image")],1)},s=[],c=r("d4ec"),u=r("262e"),l=r("2caf"),d=r("9ab4"),g=r("1b40"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"loader-wrapper",class:{"is-active":e.isLoading}},[r("div",{staticClass:"loader is-loading"})]),r("div",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.loadPreviousImage,expression:"loadPreviousImage",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:e.loadNextImage,expression:"loadNextImage",arg:"swipe",modifiers:{left:!0}}],staticClass:"hero is-fullheight",class:{hidden:e.isLoading}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("img",{attrs:{src:e.dogImgs[e.currentIndex],alt:"A beautiful Corgi"},on:{click:e.loadNewImage,load:e.imageLoaded}})])]),r("div",{staticClass:"hero-foot"},[r("div",{staticClass:"control-strip field has-addons has-addons-centered"},[r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary is-outlined",attrs:{disabled:e.dogImgs.length<2},on:{click:e.loadPreviousImage}},[e._v(" Previous ")])]),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-static"},[e._v(e._s(e.currentIndex+1))])]),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary is-outlined",attrs:{disabled:e.dogImgs.length<2},on:{click:e.loadNextImage}},[e._v(" Next ")])])])])])])},f=[],h=r("1da1"),v=r("bee2"),m=r("257e"),b=r("ade3"),w=(r("96cf"),r("99af"),r("d3b7"),"https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10505.jpg"),y="https://dog.ceo/api/breed/corgi/images/random",j=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;Object(c["a"])(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(b["a"])(Object(m["a"])(e),"currentIndex",0),Object(b["a"])(Object(m["a"])(e),"dogImgs",[]),Object(b["a"])(Object(m["a"])(e),"isLoading",!1),e}return Object(v["a"])(r,[{key:"loadNewImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=this.dogImgs,e.next=3,this.getCorgiImg();case 3:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),this.currentIndex=this.dogImgs.length-1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadNextImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.currentIndex+1>this.dogImgs.length-1?this.currentIndex=0:this.currentIndex+=1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadPreviousImage",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.currentIndex-1<0?this.currentIndex=this.dogImgs.length-1:this.currentIndex-=1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"imageLoaded",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.isLoading=!1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadNewImage();case 2:window.addEventListener("keydown",(function(e){"ArrowLeft"===e.key?t.loadPreviousImage():"ArrowRight"===e.key&&t.loadNextImage()}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getCorgiImg",value:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,fetch(y).then((function(e){return e.json()}));case 4:return t=e.sent,e.abrupt("return",t.message);case 8:if(e.prev=8,e.t0=e["catch"](1),r=this.dogImgs.length,this.isLoading=!1,!r){e.next=14;break}return e.abrupt("return",this.dogImgs[Math.floor(Math.random()*r)]);case 14:return e.abrupt("return",w);case 15:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()}]),r}(g["b"]);j=Object(d["a"])([g["a"]],j);var x=j,I=x,O=(r("e982"),r("2877")),k=Object(O["a"])(I,p,f,!1,null,"4266c8c4",null),C=k.exports,_=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(c["a"])(this,r),t.apply(this,arguments)}return r}(g["b"]);_=Object(d["a"])([Object(g["a"])({components:{CorgiImage:C}})],_);var N=_,P=N,R=Object(O["a"])(P,i,s,!1,null,null,null),L=R.exports,A=r("9483");Object(A["a"])("".concat("/first-project-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,n["a"].use(o.a,{swipeTolerance:100}),new n["a"]({render:function(e){return e(L)}}).$mount("#app")},e982:function(e,t,r){"use strict";r("7d24")}});
//# sourceMappingURL=app.da834056.js.map