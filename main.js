!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(1);
    console.log("NPM and basic setup test; log message"),
      alert("NPM and basic setup test; alert message");
  },
  function (e, t, n) {
    var r = n(2),
      o = n(3);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    e.exports = o.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function c(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          u = t.base ? i[0] + t.base : i[0],
          s = n[u] || 0,
          f = "".concat(u, " ").concat(s);
        n[u] = s + 1;
        var l = c(f),
          d = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== l
          ? (a[l].references++, a[l].updater(d))
          : a.push({ identifier: f, updater: m(d, t), references: 1 }),
          r.push(f);
      }
      return r;
    }
    function s(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var f,
      l =
        ((f = []),
        function (e, t) {
          return (f[e] = t), f.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = l(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var v = null,
      b = 0;
    function m(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = b++;
        (n = v || (v = s(t))),
          (r = d.bind(null, n, i, !1)),
          (o = d.bind(null, n, i, !0));
      } else
        (n = s(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var n = u((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = c(n[r]);
            a[o].references--;
          }
          for (var i = u(e, t), s = 0; s < n.length; s++) {
            var f = c(n[s]);
            0 === a[f].references && (a[f].updater(), a.splice(f, 1));
          }
          n = i;
        }
      };
    };
  },
  function (e, t, n) {
    (t = n(4)(!1)).push([e.i, "#content{background:#573b00}", ""]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var a, c, u;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c]);
            (r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              t.push(u));
          }
        }),
        t
      );
    };
  },
]);
