(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9d21af5d","chunk-041b6dfe":"292b9cc3","chunk-2d0c9708":"7925d616","chunk-2d0d05dc":"4b0d7f9c","chunk-2d20741e":"580096f4","chunk-2d217357":"0193d66a","chunk-2d2259e5":"168d1851","chunk-5f4ad635":"1d0f50f2","chunk-c420df12":"1b1817d4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-041b6dfe":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-041b6dfe":"0e922abe","chunk-2d0c9708":"31d6cfe0","chunk-2d0d05dc":"31d6cfe0","chunk-2d20741e":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-2d2259e5":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-crm-project/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},c=[],u=n("b444"),s={name:"EmptyLayout",computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(u["a"][e.code]||"Что-то пошло не так!")}}},l=s,d=n("2877"),f=Object(d["a"])(l,i,c,!1,null,"5f5ed2b2",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-layout"},[n("Navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("Sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)},m=[],v=(n("b64b"),n("96cf"),n("1da1")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(this.date)+"}")])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",[n("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v("Профиль ")])],1),n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},g=[],w=(n("b0c0"),n("130f"),{name:"Navbar",data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/login?message=logout");case 3:case"end":return t.stop()}}),t)})))()}},computed:{name:function(){return this.$store.getters.info.name}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!0})},beforeDestroy:function(){clearImmediate(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}}),y=w,k=Object(d["a"])(y,b,g,!1,null,"e7f6bfcc",null),x=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return n("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},C=[],O={props:["value"],name:"Sidebar",data:function(){return{links:[{title:"Счет",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Планирование",url:"/planning"},{title:"Новая запись",url:"/record"},{title:"Категории",url:"/categories"}]}}},j=O,E=Object(d["a"])(j,_,C,!1,null,"621339e4",null),S=E.exports,$={name:"MainLayout",data:function(){return{isOpen:!0}},mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:case"end":return t.stop()}}),t)})))()},components:{Navbar:x,Sidebar:S}},A=$,I=(n("577a"),Object(d["a"])(A,h,m,!1,null,"a7bb9216",null)),N=I.exports,P={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:p,MainLayout:N}},R=P,D=(n("5c0b"),Object(d["a"])(R,a,o,!1,null,null,null)),L=D.exports,T=n("1dce"),U=n.n(T),B=(n("d3b7"),n("8c4f"));r["a"].use(B["a"]);var q=[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-5f4ad635").then(n.bind(null,"a55b"))}},{path:"/registr",name:"registr",meta:{layout:"empty"},component:function(){return n.e("chunk-c420df12").then(n.bind(null,"73cf"))}},{path:"/",name:"Home",meta:{layout:"main"},component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c9708").then(n.bind(null,"58c2"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-041b6dfe").then(n.bind(null,"43ef"))}},{path:"/profile",name:"profile",meta:{layout:"main"},component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/planning",name:"planning",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d05dc").then(n.bind(null,"6859"))}},{path:"/history",name:"history",meta:{layout:"main"},component:function(){return n.e("chunk-2d2259e5").then(n.bind(null,"e4bb"))}},{path:"/detail-record",name:"detail-record",meta:{layout:"main"},component:function(){return n.e("chunk-2d20741e").then(n.bind(null,"a081"))}}],z=new B["a"]({routes:q,mode:"history"}),F=z,H=n("2f62"),W=n("8aa5"),J=n.n(W),K={actions:{login:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.email,o=t.password,n.prev=2,n.next=5,J.a.auth().signInWithEmailAndPassword(a,o);case 5:n.next=11;break;case 7:throw n.prev=7,n.t0=n["catch"](2),r("setError",n.t0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[2,7]])})))()},register:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=t.email,i=t.password,c=t.name,n.prev=2,n.next=5,J.a.auth().createUserWithEmailAndPassword(o,i);case 5:return n.next=7,r("getUid");case 7:return u=n.sent,n.next=10,J.a.database().ref("/users/".concat(u,"/info")).set({bill:1e4,name:c});case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n["catch"](2),a("setError",n.t0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[2,12]])})))()},getUid:function(){var e=J.a.auth().currentUser;return e?e.uid:null},logout:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,J.a.auth().signOut();case 3:n("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},V=n("59ca"),G=n.n(V),Q={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{fetchInfo:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,G.a.database().ref("/users/".concat(a,"/info")).once("value");case 7:o=t.sent.val,r("setInfo",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}};r["a"].use(H["a"]);var X=new H["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},modules:{auth:K,info:Q}}),Y={install:function(e){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},Z=n("9483");Object(Z["a"])("".concat("/vue-crm-project/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ee;n("6885"),n("ea7b"),n("66ce");r["a"].config.productionTip=!1,r["a"].use(Y),r["a"].use(U.a),G.a.initializeApp({apiKey:"AIzaSyC4NEX3hQT_lMNoO7osAi3D0CgDVwHNTec",authDomain:"my-vue-cli-project-98.firebaseapp.com",databaseURL:"https://my-vue-cli-project-98.firebaseio.com",projectId:"my-vue-cli-project-98",storageBucket:"my-vue-cli-project-98.appspot.com",messagingSenderId:"468759249833",appId:"1:468759249833:web:660a16f6bf22e0406e7ab8",measurementId:"G-S973VP1L39"}),G.a.auth().onAuthStateChanged((function(){ee||(ee=new r["a"]({router:F,store:X,render:function(e){return e(L)}}).$mount("#app"))}))},"577a":function(e,t,n){"use strict";var r=n("9c9e"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},"9c9e":function(e,t,n){},b444:function(e,t,n){"use strict";t["a"]={logout:"Вы вышли из системы","auth/user-not-found":"Пользователя с таким Email не существует!","auth/wrong-password":"Неверный пароль!","auth/email-already-in-use":"Email уже занят!"}}});
//# sourceMappingURL=app.b106c691.js.map