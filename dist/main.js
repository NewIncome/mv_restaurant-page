!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";function i(e){const t=document.createElement(e),n=(e,n)=>{t.setAttribute(e,n)},i=(e,i,a)=>{(e=>{document.querySelector(e).appendChild(t)})(e),n(i,a)};return{mkChildNattribute:i,mkChildNattNtext:(e,n,a,o)=>{i(e,n,a),t.innerHTML=o},addAttribute:n,dom:t}}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));const a={elem:e=>{e.remove()},pointedElm:e=>{const t=document.querySelector(e);a.elem(t)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var _init_pg_ld__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const initPageLoad=(()=>{const nav=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("nav");nav.mkChildNattribute("#content","id","header-nav");const navLogo=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("img");navLogo.mkChildNattribute("#header-nav","class","logo"),navLogo.addAttribute("src","https://1.bp.blogspot.com/-4rjqYmbQTks/T9fTbFQvmTI/AAAAAAAAAGY/j3cL0PoqBhw/s300/logoba.png");const navUL=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("ul");navUL.mkChildNattribute("#header-nav","class","links"),["Home","Menu","Contact"].forEach((e,i)=>{window["nli"+i]=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("li"),eval("nli"+i).mkChildNattribute(".links","class","n-li nli-"+i),window["link2"+e]=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("a"),eval("link2"+e).mkChildNattNtext(".nli-"+i,"class","n-link n-a-"+i,e),eval("link2"+e).dom.setAttribute("href","#")});const line=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("div");line.mkChildNattribute(".links","id","line"),line.addAttribute("class","zero");const theHome=()=>{const e=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("div");e.mkChildNattribute("#content","id","headline");const t=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("h2");t.mkChildNattNtext("#headline","class","headline-h","The best restaurant in town");const n=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("p");return n.mkChildNattNtext("#headline","class","headline-p","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),{headline:e,hlH2:t,hlP:n}},vars=[nav,navLogo,theHome(),line];return{theHome:theHome,vars:vars,line:line}})();__webpack_exports__.a=initPageLoad},function(module,__webpack_exports__,__webpack_require__){"use strict";var _init_pg_ld__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const menu=(()=>{const menuBttns=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function init(){_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.b.pointedElm("#headline");const headline=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("div").mkChildNattribute("#content","id","headline"),hlH2=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("h2").mkChildNattNtext("#headline","class","headline-h","Here is our weekly menu:"),menuUL=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("ul").mkChildNattribute("#headline","class","links menuLinks");menuBttns.forEach((day,i)=>{window["menuLi"+i]=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("li"),eval("menuLi"+i).mkChildNattribute(".menuLinks","class","n-li menu-li menuLi-"+i),window["day"+day]=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("a"),eval("day"+day).mkChildNattNtext(".menuLi-"+i,"class","n-link menu-a menu-a-"+i,day),eval("day"+day).dom.setAttribute("href","#"),eval("day"+day).dom.setAttribute("data",i)});const hlD=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("div").mkChildNattribute("#headline","id","headline-d"),hlP=Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("p").mkChildNattNtext("#headline-d","class","h-d-p","Please pick a day")}function weekday(e){_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.b.pointedElm("#headline-d");Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("div").mkChildNattribute("#headline","id","headline-d"),Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("h3").mkChildNattNtext("#headline-d","class","headline-h",e),Object(_init_pg_ld__WEBPACK_IMPORTED_MODULE_0__.a)("p").mkChildNattNtext("#headline-d","class","headline-p",`\n          <li>${e} Soup</li>\n          <li>${e} Salad</li>\n          <li>${e} Entré</li>\n          <li>${e} Dessert</li>\n    `)}function Monday(){weekday("Monday")}function Tuesday(){weekday("Tuesday")}function Wednesday(){weekday("Wednesday")}function Thursday(){weekday("Thursday")}function Friday(){weekday("Friday")}function Saturday(){weekday("Saturday")}const days=[Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];return{init:init,Monday:Monday,menuBttns:menuBttns,days:days}})();__webpack_exports__.a=menu},function(e,t,n){var i=n(4),a=n(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};i(a,o);e.exports=a.locals||{}},function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function l(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],a=0;a<e.length;a++){var o=e[a],d=t.base?o[0]+t.base:o[0],c=n[d]||0,s="".concat(d," ").concat(c);n[d]=c+1;var _=l(s),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==_?(r[_].references++,r[_].updater(u)):r.push({identifier:s,updater:f(u,t),references:1}),i.push(s)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,_=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=_(t,a);else{var o=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,h=0;function f(e,t){var n,i,a;if(t.singleton){var o=h++;n=m||(m=c(t)),i=u.bind(null,n,o,!1),a=u.bind(null,n,o,!0)}else n=c(t),i=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=l(n[i]);r[a].references--}for(var o=d(e,t),c=0;c<n.length;c++){var s=l(n[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}n=o}}}},function(e,t,n){(t=n(6)(!1)).push([e.i,"*{box-sizing:border-box;margin:0;padding:0;text-align:center}#content{background:linear-gradient(#0004, #0004),url(https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg) top/cover no-repeat;color:#ddd;height:100vh;padding:3% 10% 0;position:relative;width:100%}.links{display:flex;position:relative}.links,.links .menuLinks{align-items:center;flex-wrap:wrap;justify-content:center}.links .n-li{list-style:none;width:90px}.links .n-li:hover{text-shadow:1px 1px 10px #ffffffbf}.links .n-li .n-link{color:#ddd;text-decoration:none}.links.menuLinks{margin-bottom:10px}.links.menuLinks .n-li{margin-bottom:5px}.links.menuLinks .n-li:hover{font-weight:bold}.links.menuLinks .menuLi-2{width:108px}#header-nav{display:flex;font-weight:bold;justify-content:space-between;padding:20px 0}#header-nav .logo{width:100px}#header-nav .n-li{width:90px}#headline{position:absolute;left:10%;right:10%;top:30%}#headline .headline-h{padding-bottom:35px}#headline #headline-d{background:linear-gradient(#e1cdb7b0, #ffffffd6);border:1px solid #fff;color:#000;margin:20px auto 0;padding:12px 0 22px;width:80%}#line{background-color:#ee951ec7;bottom:27px;height:4px;position:absolute;transition:all .5s ease;width:80px}.zero{left:5px}.one{left:94px}.two{left:185px}.nli-0:hover~#line{left:5px}.nli-1:hover~#line{left:94px}.nli-2:hover~#line{left:185px}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(r=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(d," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var r,l,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);n(3);var i=n(1),a=n(0);var o={makeContactTab:()=>{a.b.pointedElm("#headline"),Object(a.a)("div").mkChildNattribute("#content","id","headline"),Object(a.a)("h2").mkChildNattNtext("#headline","class","headline-h","Hungry? We're here for you!"),Object(a.a)("p").mkChildNattNtext("#headline","class","headline-p","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}},r=n(2);const l={zero:function(){i.a.line.dom.className="zero"},one:function(){i.a.line.dom.className="one"},two:function(){i.a.line.dom.className="two"}};i.a,link2Home.dom.addEventListener("click",()=>{a.b.pointedElm("#headline"),i.a.theHome()}),link2Contact.dom.addEventListener("click",()=>{o.makeContactTab()}),link2Menu.dom.addEventListener("click",()=>{r.a.init();document.querySelectorAll(".menu-a").forEach(e=>{e.addEventListener("click",e=>{r.a.days[e.target.getAttribute("data")]()})})}),nli0.dom.addEventListener("click",()=>{l.zero()}),nli1.dom.addEventListener("click",()=>{l.one()}),nli2.dom.addEventListener("click",()=>{l.two()})}]);