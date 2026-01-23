(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // src/_assets/scripts/vendors/littlefoot.js
  var require_littlefoot = __commonJS({
    "src/_assets/scripts/vendors/littlefoot.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis != "undefined" ? globalThis : e || self).littlefoot = {});
      }(exports, function(e) {
        "use strict";
        var T = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
        function t(e2, t2, n2) {
          return e2(n2 = {
            path: t2,
            exports: {},
            require: function(e3, t3) {
              return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
              }(t3 == null && n2.path);
            }
          }, n2.exports), n2.exports;
        }
        var f = t(function(o2) {
          var i2, a2, u2, c2, l2, s2, f2, d2, p2, h2, v2, m2, y2, g2, b2, w2, _2, x2, S2, O2, E2, P2, j2;
          !function() {
            var e2, r2, t2 = typeof T == "object" ? T : typeof self == "object" ? self : typeof this == "object" ? this : {};
            function n2(n3, r3) {
              return n3 !== t2 && (typeof Object.create == "function" ? Object.defineProperty(n3, "__esModule", { value: true }) : n3.__esModule = true), function(e3, t3) {
                return n3[e3] = r3 ? r3(e3, t3) : t3;
              };
            }
            e2 = n2(t2, n2(o2.exports)), r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var n3 in t3)
                t3.hasOwnProperty(n3) && (e3[n3] = t3[n3]);
            }, i2 = function(e3, t3) {
              function n3() {
                this.constructor = e3;
              }
              r2(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (n3.prototype = t3.prototype, new n3());
            }, a2 = Object.assign || function(e3) {
              for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
                for (var o3 in t3 = arguments[n3])
                  Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
              return e3;
            }, u2 = function(e3, t3) {
              var n3 = {};
              for (o3 in e3)
                Object.prototype.hasOwnProperty.call(e3, o3) && t3.indexOf(o3) < 0 && (n3[o3] = e3[o3]);
              if (e3 != null && typeof Object.getOwnPropertySymbols == "function")
                for (var r3 = 0, o3 = Object.getOwnPropertySymbols(e3); r3 < o3.length; r3++)
                  t3.indexOf(o3[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, o3[r3]) && (n3[o3[r3]] = e3[o3[r3]]);
              return n3;
            }, c2 = function(e3, t3, n3, r3) {
              var o3, i3 = arguments.length, a3 = i3 < 3 ? t3 : r3 === null ? r3 = Object.getOwnPropertyDescriptor(t3, n3) : r3;
              if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                a3 = Reflect.decorate(e3, t3, n3, r3);
              else
                for (var u3 = e3.length - 1; 0 <= u3; u3--)
                  (o3 = e3[u3]) && (a3 = (i3 < 3 ? o3(a3) : 3 < i3 ? o3(t3, n3, a3) : o3(t3, n3)) || a3);
              return 3 < i3 && a3 && Object.defineProperty(t3, n3, a3), a3;
            }, l2 = function(n3, r3) {
              return function(e3, t3) {
                r3(e3, t3, n3);
              };
            }, s2 = function(e3, t3) {
              if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                return Reflect.metadata(e3, t3);
            }, f2 = function(e3, a3, u3, c3) {
              return new (u3 = u3 || Promise)(function(n3, t3) {
                function r3(e4) {
                  try {
                    i3(c3.next(e4));
                  } catch (e5) {
                    t3(e5);
                  }
                }
                function o3(e4) {
                  try {
                    i3(c3.throw(e4));
                  } catch (e5) {
                    t3(e5);
                  }
                }
                function i3(e4) {
                  var t4;
                  e4.done ? n3(e4.value) : ((t4 = e4.value) instanceof u3 ? t4 : new u3(function(e5) {
                    e5(t4);
                  })).then(r3, o3);
                }
                i3((c3 = c3.apply(e3, a3 || [])).next());
              });
            }, d2 = function(n3, r3) {
              var o3, i3, a3, u3 = {
                label: 0,
                sent: function() {
                  if (1 & a3[0])
                    throw a3[1];
                  return a3[1];
                },
                trys: [],
                ops: []
              }, e3 = { next: t3(0), throw: t3(1), return: t3(2) };
              return typeof Symbol == "function" && (e3[Symbol.iterator] = function() {
                return this;
              }), e3;
              function t3(t4) {
                return function(e4) {
                  return function(t5) {
                    if (o3)
                      throw new TypeError("Generator is already executing.");
                    for (; u3; )
                      try {
                        if (o3 = 1, i3 && (a3 = 2 & t5[0] ? i3.return : t5[0] ? i3.throw || ((a3 = i3.return) && a3.call(i3), 0) : i3.next) && !(a3 = a3.call(i3, t5[1])).done)
                          return a3;
                        switch (i3 = 0, a3 && (t5 = [2 & t5[0], a3.value]), t5[0]) {
                          case 0:
                          case 1:
                            a3 = t5;
                            break;
                          case 4:
                            return u3.label++, { value: t5[1], done: false };
                          case 5:
                            u3.label++, i3 = t5[1], t5 = [0];
                            continue;
                          case 7:
                            t5 = u3.ops.pop(), u3.trys.pop();
                            continue;
                          default:
                            if (!(a3 = 0 < (a3 = u3.trys).length && a3[a3.length - 1]) && (t5[0] === 6 || t5[0] === 2)) {
                              u3 = 0;
                              continue;
                            }
                            if (t5[0] === 3 && (!a3 || t5[1] > a3[0] && t5[1] < a3[3])) {
                              u3.label = t5[1];
                              break;
                            }
                            if (t5[0] === 6 && u3.label < a3[1]) {
                              u3.label = a3[1], a3 = t5;
                              break;
                            }
                            if (a3 && u3.label < a3[2]) {
                              u3.label = a3[2], u3.ops.push(t5);
                              break;
                            }
                            a3[2] && u3.ops.pop(), u3.trys.pop();
                            continue;
                        }
                        t5 = r3.call(n3, u3);
                      } catch (e5) {
                        t5 = [6, e5], i3 = 0;
                      } finally {
                        o3 = a3 = 0;
                      }
                    if (5 & t5[0])
                      throw t5[1];
                    return { value: t5[0] ? t5[1] : void 0, done: true };
                  }([t4, e4]);
                };
              }
            }, j2 = function(e3, t3, n3, r3) {
              r3 === void 0 && (r3 = n3), e3[r3] = t3[n3];
            }, p2 = function(e3, t3) {
              for (var n3 in e3)
                n3 === "default" || t3.hasOwnProperty(n3) || (t3[n3] = e3[n3]);
            }, h2 = function(e3) {
              var t3 = typeof Symbol == "function" && Symbol.iterator, n3 = t3 && e3[t3], r3 = 0;
              if (n3)
                return n3.call(e3);
              if (e3 && typeof e3.length == "number")
                return {
                  next: function() {
                    return e3 && r3 >= e3.length && (e3 = void 0), { value: e3 && e3[r3++], done: !e3 };
                  }
                };
              throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }, v2 = function(e3, t3) {
              var n3 = typeof Symbol == "function" && e3[Symbol.iterator];
              if (!n3)
                return e3;
              var r3, o3, i3 = n3.call(e3), a3 = [];
              try {
                for (; (t3 === void 0 || 0 < t3--) && !(r3 = i3.next()).done; )
                  a3.push(r3.value);
              } catch (e4) {
                o3 = { error: e4 };
              } finally {
                try {
                  r3 && !r3.done && (n3 = i3.return) && n3.call(i3);
                } finally {
                  if (o3)
                    throw o3.error;
                }
              }
              return a3;
            }, m2 = function() {
              for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
                e3 = e3.concat(v2(arguments[t3]));
              return e3;
            }, y2 = function() {
              for (var e3 = 0, t3 = 0, n3 = arguments.length; t3 < n3; t3++)
                e3 += arguments[t3].length;
              for (var r3 = Array(e3), o3 = 0, t3 = 0; t3 < n3; t3++)
                for (var i3 = arguments[t3], a3 = 0, u3 = i3.length; a3 < u3; a3++, o3++)
                  r3[o3] = i3[a3];
              return r3;
            }, g2 = function(e3) {
              return this instanceof g2 ? (this.v = e3, this) : new g2(e3);
            }, b2 = function(e3, t3, n3) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var o3 = n3.apply(e3, t3 || []), i3 = [], a3 = {};
              return r3("next"), r3("throw"), r3("return"), a3[Symbol.asyncIterator] = function() {
                return this;
              }, a3;
              function r3(r4) {
                o3[r4] && (a3[r4] = function(n4) {
                  return new Promise(function(e4, t4) {
                    1 < i3.push([r4, n4, e4, t4]) || u3(r4, n4);
                  });
                });
              }
              function u3(e4, t4) {
                try {
                  (n4 = o3[e4](t4)).value instanceof g2 ? Promise.resolve(n4.value.v).then(c3, l3) : s3(i3[0][2], n4);
                } catch (e5) {
                  s3(i3[0][3], e5);
                }
                var n4;
              }
              function c3(e4) {
                u3("next", e4);
              }
              function l3(e4) {
                u3("throw", e4);
              }
              function s3(e4, t4) {
                e4(t4), i3.shift(), i3.length && u3(i3[0][0], i3[0][1]);
              }
            }, w2 = function(r3) {
              var o3, e3 = {};
              return t3("next"), t3("throw", function(e4) {
                throw e4;
              }), t3("return"), e3[Symbol.iterator] = function() {
                return this;
              }, e3;
              function t3(t4, n3) {
                e3[t4] = r3[t4] ? function(e4) {
                  return (o3 = !o3) ? { value: g2(r3[t4](e4)), done: t4 === "return" } : n3 ? n3(e4) : e4;
                } : n3;
              }
            }, _2 = function(c3) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var e3, t3 = c3[Symbol.asyncIterator];
              return t3 ? t3.call(c3) : (c3 = h2(c3), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
                return this;
              }, e3);
              function n3(u3) {
                e3[u3] = c3[u3] && function(a3) {
                  return new Promise(function(e4, t4) {
                    var n4, r3, o3, i3;
                    a3 = c3[u3](a3), n4 = e4, r3 = t4, o3 = a3.done, i3 = a3.value, Promise.resolve(i3).then(function(e5) {
                      n4({ value: e5, done: o3 });
                    }, r3);
                  });
                };
              }
            }, x2 = function(e3, t3) {
              return Object.defineProperty ? Object.defineProperty(e3, "raw", { value: t3 }) : e3.raw = t3, e3;
            }, S2 = function(e3) {
              if (e3 && e3.__esModule)
                return e3;
              var t3 = {};
              if (e3 != null)
                for (var n3 in e3)
                  Object.hasOwnProperty.call(e3, n3) && (t3[n3] = e3[n3]);
              return t3.default = e3, t3;
            }, O2 = function(e3) {
              return e3 && e3.__esModule ? e3 : { default: e3 };
            }, E2 = function(e3, t3) {
              if (!t3.has(e3))
                throw new TypeError("attempted to get private field on non-instance");
              return t3.get(e3);
            }, P2 = function(e3, t3, n3) {
              if (!t3.has(e3))
                throw new TypeError("attempted to set private field on non-instance");
              return t3.set(e3, n3), n3;
            }, e2("__extends", i2), e2("__assign", a2), e2("__rest", u2), e2("__decorate", c2), e2("__param", l2), e2("__metadata", s2), e2("__awaiter", f2), e2("__generator", d2), e2("__exportStar", p2), e2("__createBinding", j2), e2("__values", h2), e2("__read", v2), e2("__spread", m2), e2("__spreadArrays", y2), e2("__await", g2), e2("__asyncGenerator", b2), e2("__asyncDelegator", w2), e2("__asyncValues", _2), e2("__makeTemplateObject", x2), e2("__importStar", S2), e2("__importDefault", O2), e2("__classPrivateFieldGet", E2), e2("__classPrivateFieldSet", P2);
          }();
        }), g = t(function(e2, t2) {
          t2.__esModule = true, t2.getStyle = void 0, t2.getStyle = function(e3, t3) {
            var n2, r2 = (((n2 = e3.ownerDocument) === null || n2 === void 0 ? void 0 : n2.defaultView) || window).getComputedStyle(e3);
            return r2.getPropertyValue(t3) || r2[t3];
          };
        }), i = t(function(e2, t2) {
          t2.__esModule = true, t2.pixels = void 0;
          var p2 = 96, h2 = 25.4, v2 = 72, m2 = 6;
          function y2(e3) {
            return e3 ? g.getStyle(e3, "fontSize") || y2(e3.parentElement) : g.getStyle(window.document.documentElement, "fontSize");
          }
          t2.pixels = function e3(t3, n2) {
            var r2, o2, i2, a2, u2, c2, l2 = (o2 = (r2 = n2 == null ? void 0 : n2.ownerDocument) === null || r2 === void 0 ? void 0 : r2.defaultView) !== null && o2 !== void 0 ? o2 : window, s2 = l2.document.documentElement || l2.document.body, f2 = (a2 = t3 || "0", u2 = parseFloat(a2), c2 = a2.match(/[\d-.]+(\w+)$/), [u2, ((i2 = c2 == null ? void 0 : c2[1]) !== null && i2 !== void 0 ? i2 : "").toLowerCase()]), d2 = f2[0];
            switch (f2[1]) {
              case "rem":
                return d2 * e3(y2(window.document.documentElement));
              case "em":
                return d2 * e3(y2(n2), n2 == null ? void 0 : n2.parentElement);
              case "in":
                return d2 * p2;
              case "q":
                return d2 * p2 / h2 / 4;
              case "mm":
                return d2 * p2 / h2;
              case "cm":
                return d2 * p2 * 10 / h2;
              case "pt":
                return d2 * p2 / v2;
              case "pc":
                return d2 * p2 / m2;
              case "vh":
                return (d2 * l2.innerHeight || s2.clientWidth) / 100;
              case "vw":
                return (d2 * l2.innerWidth || s2.clientHeight) / 100;
              case "vmin":
                return d2 * Math.min(l2.innerWidth || s2.clientWidth, l2.innerHeight || s2.clientHeight) / 100;
              case "vmax":
                return d2 * Math.max(l2.innerWidth || s2.clientWidth, l2.innerHeight || s2.clientHeight) / 100;
              default:
                return d2;
            }
          };
        });
        function v(e2, t2) {
          e2.classList.add(t2);
        }
        function b(e2, t2) {
          e2.classList.remove(t2);
        }
        function a(e2) {
          var t2;
          (t2 = e2.parentNode) !== null && t2 !== void 0 && t2.removeChild(e2);
        }
        var u = "littlefoot-footnote__tooltip", m = "is-positioned-";
        function y(e2) {
          var t2 = e2.offsetHeight, n2 = e2.getBoundingClientRect().top + t2 / 2;
          return { top: n2, bottom: window.innerHeight - n2 };
        }
        function w(e2) {
          var t2 = parseFloat(g.getStyle(e2, "marginLeft")), n2 = e2.offsetWidth - t2;
          return (e2.getBoundingClientRect().left + n2 / 2) / window.innerWidth;
        }
        function _(e2, t2) {
          var n2 = 2 * parseInt(g.getStyle(e2, "marginTop"), 10) + e2.offsetHeight;
          return t2.bottom < n2 && t2.bottom < t2.top ? "top" : "bottom";
        }
        var c = "is-active", l = "is-changing", x = "is-scrollable", S = function(e2) {
          return !!e2.parentElement;
        };
        function O(e2) {
          var t2 = e2.id, f2 = e2.button, d2 = e2.content, n2 = e2.host, p2 = e2.popover, o2 = e2.wrapper, r2 = false, h2 = 0;
          return {
            id: t2,
            activate: function(e3) {
              var t3;
              f2.setAttribute("aria-expanded", "true"), v(f2, l), v(f2, c), f2.insertAdjacentElement("afterend", p2), p2.style.maxWidth = document.body.clientWidth + "px", t3 = d2, h2 = Math.round(i.pixels(g.getStyle(t3, "maxHeight"), t3)), e3 != null && e3(p2, f2);
            },
            dismiss: function(e3) {
              f2.setAttribute("aria-expanded", "false"), v(f2, l), b(f2, c), b(p2, c), e3 != null && e3(p2, f2);
            },
            isActive: function() {
              return f2.classList.contains(c);
            },
            isReady: function() {
              return !f2.classList.contains(l);
            },
            isHovered: function() {
              return r2;
            },
            ready: function() {
              v(p2, c), b(f2, l);
            },
            remove: function() {
              a(p2), b(f2, l);
            },
            reposition: function() {
              var e3, t3, n3, r3, o3, i2, a2, u2, c2, l2, s2;
              S(p2) && (d2.style.maxHeight = (a2 = p2, u2 = h2, c2 = y(f2), l2 = _(a2, c2), s2 = parseInt(g.getStyle(a2, "marginTop"), 10), Math.min(u2, c2[l2] - s2 - 15) + "px"), o3 = _(e3 = p2, y(t3 = f2)), (i2 = e3.dataset.footnotePosition) !== o3 && (e3.dataset.footnotePosition = o3, b(e3, "" + m + i2), v(e3, "" + m + o3), n3 = 100 * w(t3) + "%", r3 = o3 === "top" ? "100%" : "0", e3.style.transformOrigin = n3 + " " + r3), p2.offsetHeight < d2.scrollHeight ? (v(p2, x), d2.setAttribute("tabindex", "0")) : (b(p2, x), d2.removeAttribute("tabindex")));
            },
            resize: function() {
              var e3, t3, n3, r3;
              S(p2) && (p2.style.left = (n3 = f2, r3 = d2.offsetWidth, -w(n3) * r3 + parseInt(g.getStyle(n3, "marginLeft"), 10) + n3.offsetWidth / 2 + "px"), o2.style.maxWidth = d2.offsetWidth + "px", e3 = f2, (t3 = p2.querySelector("." + u)) && (t3.style.left = 100 * w(e3) + "%"));
            },
            startHovering: function() {
              r2 = true;
            },
            stopHovering: function() {
              r2 = false;
            },
            destroy: function() {
              return a(n2);
            }
          };
        }
        var d = t(function(e2, t2) {
          t2.__esModule = true, t2.throttle = void 0, t2.throttle = function(r2, o2) {
            o2 === void 0 && (o2 = 0);
            var i2, a2 = 0;
            return Object.assign(function() {
              for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
                e3[t3] = arguments[t3];
              var n2 = Math.max(0, a2 + o2 - Date.now());
              n2 ? (clearTimeout(i2), i2 = setTimeout(function() {
                a2 = Date.now(), r2.apply(void 0, e3);
              }, n2)) : (a2 = Date.now(), r2.apply(void 0, e3));
            }, {
              cancel: function() {
                a2 = 0, clearTimeout(i2);
              }
            });
          };
        }), p = 16, o = "is-fully-scrolled", h = function(r2) {
          return function(e2) {
            var t2 = e2.currentTarget, n2 = -e2.deltaY;
            0 < n2 && b(r2, o), t2 && n2 <= 0 && n2 < t2.clientHeight + t2.scrollTop - t2.scrollHeight && v(r2, o);
          };
        };
        var E = "littlefoot-footnote__content", P = "littlefoot-footnote__wrapper", j = "footnote-print-only", A = "littlefoot-footnote__host", M = function(e2) {
          return v(e2, j);
        };
        function k(e2, t2) {
          return Array.from(e2.querySelectorAll(t2));
        }
        function D(e2, t2) {
          return e2.querySelector("." + t2) || e2.firstElementChild || e2;
        }
        function H(e2) {
          var t2 = document.createElement("div");
          return t2.innerHTML = e2, t2.firstElementChild;
        }
        function I(e2) {
          return e2 !== void 0;
        }
        function L(e2) {
          var t2, n2, r2 = (t2 = e2, n2 = ":not(." + j + ")", Array.from(t2.children).filter(function(e3) {
            return e3.nodeType !== 8 && (!n2 || e3.matches(n2));
          })), o2 = r2.filter(function(e3) {
            return e3.tagName === "HR";
          });
          r2.length === o2.length && (o2.concat(e2).forEach(M), L(e2.parentElement));
        }
        function s(e2) {
          var t2 = e2.parentElement;
          a(e2);
          var n2 = t2 == null ? void 0 : t2.innerHTML.replace("[]", "").replace("&nbsp;", " ").trim();
          t2 && !n2 && s(t2);
        }
        function F(e2, t2) {
          var n2 = H(e2.body.outerHTML);
          k(n2, '[href$="#' + e2.referenceId + '"]').forEach(s);
          var r2 = n2.innerHTML.trim();
          return {
            original: e2,
            data: {
              id: "" + (t2 + 1),
              number: t2 + 1,
              reference: "lf-" + e2.referenceId,
              content: r2.startsWith("<") ? r2 : "<p>" + r2 + "</p>"
            }
          };
        }
        var W = function(o2) {
          var i2 = 0, a2 = null;
          return function(e2) {
            var t2 = e2.original, n2 = e2.data, r2 = t2.reference.closest(o2);
            return i2 = a2 === r2 ? i2 + 1 : 1, a2 = r2, { original: t2, data: f.__assign(f.__assign({}, n2), { number: i2 }) };
          };
        };
        function n(e2) {
          var t2 = /<%=?\s*(\w+?)\s*%>/g;
          return function(r2) {
            return e2.replace(t2, function(e3, t3) {
              var n2;
              return String((n2 = r2[t3]) !== null && n2 !== void 0 ? n2 : "");
            });
          };
        }
        function R(e2, t2) {
          var s2 = n(e2), f2 = n(t2);
          return function(e3) {
            var t3 = e3.original, n2 = e3.data, r2 = n2.id, o2 = H('<span class="' + A + '">' + s2(n2) + "</span>"), i2 = o2.firstElementChild;
            i2.dataset.footnoteButton = "", i2.dataset.footnoteId = r2, i2.dataset.footnoteNumber = "" + n2.number;
            var a2 = H(f2(n2));
            a2.dataset.footnotePopover = "", a2.dataset.footnoteId = r2;
            var u2, c2 = D(a2, P), l2 = D(a2, E);
            return u2 = a2, l2.addEventListener("wheel", d.throttle(h(u2), p)), { original: t3, data: n2, id: r2, button: i2, host: o2, popover: a2, content: l2, wrapper: c2 };
          };
        }
        function C(e2) {
          var i2, a2, u2, c2, l2, t2, n2, r2 = e2.allowDuplicates, o2 = e2.anchorParentSelector, s2 = e2.anchorPattern, f2 = e2.buttonTemplate, d2 = e2.contentTemplate, p2 = e2.footnoteSelector, h2 = e2.numberResetSelector, v2 = e2.scope, m2 = (t2 = document, n2 = s2, k(t2, v2 + ' a[href*="#"]').filter(function(e3) {
            return (e3.href + e3.rel).match(n2);
          }).map((i2 = document, a2 = r2, u2 = o2, c2 = p2, l2 = [], function(e3) {
            var t3 = "#" + e3.href.split("#")[1].replace(/[:.+~*[\]]/g, "\\$&"), n3 = k(i2, t3).find(function(e4) {
              return a2 || !l2.includes(e4);
            }), r3 = n3 == null ? void 0 : n3.closest(c2);
            if (r3) {
              l2.push(r3);
              var o3 = e3.closest(u2) || e3;
              return { reference: o3, referenceId: o3.id || e3.id, body: r3 };
            }
          })).filter(I).map(F).map(h2 ? W(h2) : function(e3) {
            return e3;
          }).map(R(f2, d2)));
          m2.forEach(function(e3) {
            var t3, n3, r3 = e3.original, o3 = e3.host;
            M(r3.reference), M(r3.body), L(r3.body.parentElement), t3 = r3.reference, n3 = o3, t3.insertAdjacentElement("beforebegin", n3);
          });
          var y2 = m2.map(O);
          return {
            footnotes: y2,
            unmount: function() {
              y2.forEach(function(e3) {
                return e3.destroy();
              }), k(document, "." + j).forEach(function(e3) {
                return b(e3, j);
              });
            }
          };
        }
        var z = {
          activateDelay: 100,
          activateOnHover: false,
          allowDuplicates: true,
          allowMultiple: false,
          anchorParentSelector: "sup",
          anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
          dismissDelay: 100,
          dismissOnUnhover: false,
          footnoteSelector: "li",
          hoverDelay: 250,
          numberResetSelector: "",
          scope: "",
          contentTemplate: '<aside class="littlefoot-footnote" id="fncontent:<% id %>"><div class="' + P + '"><div class="' + E + '"><% content %></div></div><div class="' + u + '"></div></aside>',
          buttonTemplate: '<button class="littlefoot-footnote__button littlefoot-footnote__button__ellipsis" id="<% reference %>" title="See Footnote <% number %>" aria-expanded="false"><svg role="img" aria-labelledby="title-<% reference %>" viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><title id="title-<% reference %>">Footnote <% number %></title><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button>'
        };
        function q(e2, n2) {
          function r2(t3) {
            return function(e3) {
              e3.isReady() && (e3.dismiss(n2.dismissCallback), setTimeout(e3.remove, t3));
            };
          }
          function o2(e3) {
            return function(t3) {
              n2.allowMultiple || a2.filter(function(e4) {
                return e4.id !== t3.id;
              }).forEach(r2(n2.dismissDelay)), t3.isReady() && (t3.activate(n2.activateCallback), t3.reposition(), t3.resize(), setTimeout(t3.ready, e3));
            };
          }
          function i2(n3) {
            return function(t3) {
              var e3 = a2.find(function(e4) {
                return e4.id === t3;
              });
              e3 && n3(e3);
            };
          }
          var a2 = e2.footnotes, t2 = e2.unmount;
          return {
            activate: function(e3, t3) {
              return i2(o2(t3))(e3);
            },
            dismiss: function(e3, t3) {
              return i2(r2(t3))(e3);
            },
            dismissAll: function() {
              return a2.forEach(r2(n2.dismissDelay));
            },
            repositionAll: function() {
              return a2.forEach(function(e3) {
                return e3.reposition();
              });
            },
            resizeAll: function() {
              return a2.forEach(function(e3) {
                return e3.resize();
              });
            },
            toggle: i2(function(e3) {
              return (e3.isActive() ? r2(n2.dismissDelay) : o2(n2.activateDelay))(e3);
            }),
            hover: i2(function(e3) {
              e3.startHovering(), n2.activateOnHover && !e3.isActive() && o2(n2.hoverDelay)(e3);
            }),
            unhover: i2(function(e3) {
              e3.stopHovering(), n2.dismissOnUnhover && setTimeout(function() {
                return a2.filter(function(e4) {
                  return !e4.isHovered();
                }).forEach(r2(n2.dismissDelay));
              }, n2.hoverDelay);
            }),
            unmount: t2
          };
        }
        function U(e2, t2) {
          return e2.target.closest(t2);
        }
        function V(e2) {
          return e2 == null ? void 0 : e2.dataset.footnoteId;
        }
        var r = t(function(e2, t2) {
          e2.exports = function() {
            function e3() {
              if (!(this instanceof e3)) {
                return new e3();
              }
              this.size = 0;
              this.uid = 0;
              this.selectors = [];
              this.selectorObjects = {};
              this.indexes = Object.create(this.indexes);
              this.activeIndexes = [];
            }
            var t3 = window.document.documentElement, n2 = t3.matches || t3.webkitMatchesSelector || t3.mozMatchesSelector || t3.oMatchesSelector || t3.msMatchesSelector;
            e3.prototype.matchesSelector = function(e4, t4) {
              return n2.call(e4, t4);
            }, e3.prototype.querySelectorAll = function(e4, t4) {
              return t4.querySelectorAll(e4);
            };
            var r2 = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            (e3.prototype.indexes = []).push({
              name: "ID",
              selector: function e4(t4) {
                var n3;
                if (n3 = t4.match(r2)) {
                  return n3[0].slice(1);
                }
              },
              element: function e4(t4) {
                if (t4.id) {
                  return [t4.id];
                }
              }
            });
            var o2 = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e3.prototype.indexes.push({
              name: "CLASS",
              selector: function e4(t4) {
                var n3;
                if (n3 = t4.match(o2)) {
                  return n3[0].slice(1);
                }
              },
              element: function e4(t4) {
                var n3 = t4.className;
                if (n3) {
                  if (typeof n3 === "string") {
                    return n3.split(/\s/);
                  } else if (typeof n3 === "object" && "baseVal" in n3) {
                    return n3.baseVal.split(/\s/);
                  }
                }
              }
            });
            var i2 = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g, p2;
            if (e3.prototype.indexes.push({
              name: "TAG",
              selector: function e4(t4) {
                var n3;
                if (n3 = t4.match(i2)) {
                  return n3[0].toUpperCase();
                }
              },
              element: function e4(t4) {
                return [t4.nodeName.toUpperCase()];
              }
            }), e3.prototype.indexes["default"] = {
              name: "UNIVERSAL",
              selector: function() {
                return true;
              },
              element: function() {
                return [true];
              }
            }, typeof window.Map === "function") {
              p2 = window.Map;
            } else {
              p2 = function() {
                function e4() {
                  this.map = {};
                }
                e4.prototype.get = function(e5) {
                  return this.map[e5 + " "];
                };
                e4.prototype.set = function(e5, t4) {
                  this.map[e5 + " "] = t4;
                };
                return e4;
              }();
            }
            var f2 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
            function v2(e4, t4) {
              e4 = e4.slice(0).concat(e4["default"]);
              var n3 = e4.length, r3, o3, i3, a3, u2 = t4, c2, l2, s2 = [];
              do {
                f2.exec("");
                if (i3 = f2.exec(u2)) {
                  u2 = i3[3];
                  if (i3[2] || !u2) {
                    for (r3 = 0; r3 < n3; r3++) {
                      l2 = e4[r3];
                      if (c2 = l2.selector(i3[1])) {
                        o3 = s2.length;
                        a3 = false;
                        while (o3--) {
                          if (s2[o3].index === l2 && s2[o3].key === c2) {
                            a3 = true;
                            break;
                          }
                        }
                        if (!a3) {
                          s2.push({ index: l2, key: c2 });
                        }
                        break;
                      }
                    }
                  }
                }
              } while (i3);
              return s2;
            }
            function a2(e4, t4) {
              var n3, r3, o3;
              for (n3 = 0, r3 = e4.length; n3 < r3; n3++)
                if (o3 = e4[n3], t4.isPrototypeOf(o3))
                  return o3;
            }
            function m2(e4, t4) {
              return e4.id - t4.id;
            }
            return e3.prototype.logDefaultIndexUsed = function() {
            }, e3.prototype.add = function(e4, t4) {
              var n3, r3, o3, i3, a3, u2, c2, l2, s2 = this.activeIndexes, f3 = this.selectors, d2 = this.selectorObjects;
              if (typeof e4 == "string") {
                for (d2[(n3 = { id: this.uid++, selector: e4, data: t4 }).id] = n3, c2 = v2(this.indexes, e4), r3 = 0; r3 < c2.length; r3++)
                  i3 = (l2 = c2[r3]).key, (a3 = function(e5, t5) {
                    var n4, r4, o4;
                    for (n4 = 0, r4 = e5.length; n4 < r4; n4++)
                      if (o4 = e5[n4], t5.isPrototypeOf(o4))
                        return o4;
                  }(s2, o3 = l2.index)) || ((a3 = Object.create(o3)).map = new p2(), s2.push(a3)), o3 === this.indexes.default && this.logDefaultIndexUsed(n3), (u2 = a3.map.get(i3)) || (u2 = [], a3.map.set(i3, u2)), u2.push(n3);
                this.size++, f3.push(e4);
              }
            }, e3.prototype.remove = function(e4, t4) {
              if (typeof e4 == "string") {
                for (var n3, r3, o3, i3, a3, u2, c2 = this.activeIndexes, l2 = this.selectors = [], s2 = this.selectorObjects, f3 = {}, d2 = arguments.length === 1, p3 = v2(this.indexes, e4), h2 = 0; h2 < p3.length; h2++)
                  for (n3 = p3[h2], r3 = c2.length; r3--; )
                    if (i3 = c2[r3], n3.index.isPrototypeOf(i3)) {
                      if (a3 = i3.map.get(n3.key))
                        for (o3 = a3.length; o3--; )
                          (u2 = a3[o3]).selector !== e4 || !d2 && u2.data !== t4 || (a3.splice(o3, 1), f3[u2.id] = true);
                      break;
                    }
                for (h2 in f3)
                  delete s2[h2], this.size--;
                for (h2 in s2)
                  l2.push(s2[h2].selector);
              }
            }, e3.prototype.queryAll = function(e4) {
              if (!this.selectors.length)
                return [];
              for (var t4, n3, r3, o3, i3, a3, u2 = {}, c2 = [], l2 = this.querySelectorAll(this.selectors.join(", "), e4), s2 = 0, f3 = l2.length; s2 < f3; s2++)
                for (r3 = l2[s2], t4 = 0, n3 = (o3 = this.matches(r3)).length; t4 < n3; t4++)
                  u2[(a3 = o3[t4]).id] ? i3 = u2[a3.id] : (i3 = { id: a3.id, selector: a3.selector, data: a3.data, elements: [] }, u2[a3.id] = i3, c2.push(i3)), i3.elements.push(r3);
              return c2.sort(m2);
            }, e3.prototype.matches = function(e4) {
              if (!e4)
                return [];
              for (var t4, n3, r3, o3, i3, a3, u2, c2, l2, s2 = this.activeIndexes, f3 = {}, d2 = [], p3 = 0, h2 = s2.length; p3 < h2; p3++)
                if (a3 = (i3 = s2[p3]).element(e4)) {
                  for (t4 = 0, r3 = a3.length; t4 < r3; t4++)
                    if (u2 = i3.map.get(a3[t4]))
                      for (n3 = 0, o3 = u2.length; n3 < o3; n3++)
                        !f3[l2 = (c2 = u2[n3]).id] && this.matchesSelector(e4, c2.selector) && (f3[l2] = true, d2.push(c2));
                }
              return d2.sort(m2);
            }, e3;
          }();
        }), N = t(function(e2, t2) {
          !function(e3, u2) {
            u2 = u2 && Object.prototype.hasOwnProperty.call(u2, "default") ? u2["default"] : u2;
            var l2 = {}, s2 = {}, f2 = /* @__PURE__ */ new WeakMap(), d2 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new WeakMap(), n2 = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
            function h2(e4, t4, n3) {
              var r3 = e4[t4];
              e4[t4] = function() {
                n3.apply(e4, arguments);
                return r3.apply(e4, arguments);
              };
              return e4;
            }
            function v2(e4, t4, n3) {
              var r3 = [];
              var o3 = t4;
              do {
                if (o3.nodeType !== 1)
                  break;
                var i2 = e4.matches(o3);
                if (i2.length) {
                  var a2 = { node: o3, observers: i2 };
                  if (n3) {
                    r3.unshift(a2);
                  } else {
                    r3.push(a2);
                  }
                }
              } while (o3 = o3.parentElement);
              return r3;
            }
            function m2() {
              f2.set(this, true);
            }
            function y2() {
              f2.set(this, true);
              d2.set(this, true);
            }
            function g2() {
              return p2.get(this) || null;
            }
            function b2(e4, t4) {
              if (!n2)
                return;
              Object.defineProperty(e4, "currentTarget", { configurable: true, enumerable: true, get: t4 || n2.get });
            }
            function w2(e4) {
              try {
                e4.eventPhase;
                return true;
              } catch (e5) {
                return false;
              }
            }
            function c2(e4) {
              if (!w2(e4))
                return;
              var t4 = e4.eventPhase === 1 ? s2 : l2;
              var n3 = t4[e4.type];
              if (!n3)
                return;
              var r3 = v2(n3, e4.target, e4.eventPhase === 1);
              if (!r3.length)
                return;
              h2(e4, "stopPropagation", m2);
              h2(e4, "stopImmediatePropagation", y2);
              b2(e4, g2);
              for (var o3 = 0, i2 = r3.length; o3 < i2; o3++) {
                if (f2.get(e4))
                  break;
                var a2 = r3[o3];
                p2.set(e4, a2.node);
                for (var u3 = 0, c3 = a2.observers.length; u3 < c3; u3++) {
                  if (d2.get(e4))
                    break;
                  a2.observers[u3].data.call(a2.node, e4);
                }
              }
              p2["delete"](e4);
              b2(e4);
            }
            function t3(e4, t4, n3) {
              var r3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              var o3 = r3.capture ? true : false;
              var i2 = o3 ? s2 : l2;
              var a2 = i2[e4];
              if (!a2) {
                a2 = new u2();
                i2[e4] = a2;
                document.addEventListener(e4, c2, o3);
              }
              a2.add(t4, n3);
            }
            function r2(e4, t4, n3) {
              var r3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
              var o3 = r3.capture ? true : false;
              var i2 = o3 ? s2 : l2;
              var a2 = i2[e4];
              if (!a2)
                return;
              a2.remove(t4, n3);
              if (a2.size)
                return;
              delete i2[e4];
              document.removeEventListener(e4, c2, o3);
            }
            function o2(e4, t4, n3) {
              return e4.dispatchEvent(new CustomEvent(t4, { bubbles: true, cancelable: true, detail: n3 }));
            }
            e3.fire = o2, e3.off = r2, e3.on = t3, Object.defineProperty(e3, "__esModule", { value: true });
          }(t2, r);
        }), B = 16, G = "[data-footnote-id]", $ = function(r2, o2) {
          return function(e2) {
            var t2 = U(e2, "[data-footnote-button]"), n2 = V(t2);
            n2 ? r2(n2) : U(e2, "[data-footnote-popover]") || o2();
          };
        }, Y = function(r2) {
          return function(e2) {
            e2.preventDefault();
            var t2 = U(e2, G), n2 = V(t2);
            n2 && r2(n2);
          };
        }, J = function(t2) {
          return function(e2) {
            e2.keyCode !== 27 && e2.key !== "Escape" && e2.key !== "Esc" || t2();
          };
        }, K = document.addEventListener, Q = document.removeEventListener, X = window.addEventListener, Z = window.removeEventListener;
        function ee(e2) {
          e2 === void 0 && (e2 = {});
          var t2, n2, r2, o2, i2, a2, u2, c2 = f.__assign(f.__assign({}, z), e2), l2 = q(C(c2), c2), s2 = (n2 = $((t2 = l2).toggle, t2.dismissAll), r2 = J(t2.dismissAll), o2 = d.throttle(t2.repositionAll, B), i2 = d.throttle(t2.resizeAll, B), a2 = Y(t2.hover), u2 = Y(t2.unhover), K("touchend", n2), K("click", n2), K("keyup", r2), K("gestureend", o2), X("scroll", o2), X("resize", i2), N.on("mouseover", G, a2), N.on("mouseout", G, u2), function() {
            Q("touchend", n2), Q("click", n2), Q("keyup", r2), Q("gestureend", o2), Z("scroll", o2), Z("resize", i2), N.off("mouseover", G, a2), N.off("mouseout", G, u2);
          });
          return {
            activate: function(e3, t3) {
              t3 === void 0 && (t3 = c2.activateDelay), l2.activate(e3, t3);
            },
            dismiss: function(e3, t3) {
              t3 === void 0 && (t3 = c2.dismissDelay), e3 === void 0 ? l2.dismissAll() : l2.dismiss(e3, t3);
            },
            unmount: function() {
              s2(), l2.unmount();
            },
            getSetting: function(e3) {
              return c2[e3];
            },
            updateSetting: function(e3, t3) {
              c2[e3] = t3;
            }
          };
        }
        e.default = ee, e.littlefoot = ee, Object.defineProperty(e, "__esModule", { value: true });
      });
    }
  });

  // node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el._x_effects) {
        el._x_effects = /* @__PURE__ */ new Set();
        el._x_runEffects = () => {
          el._x_effects.forEach((i) => i());
        };
      }
      el._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el, callback) {
    if (typeof callback === "function") {
      if (!el._x_cleanups)
        el._x_cleanups = [];
      el._x_cleanups.push(callback);
    } else {
      callback = el;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups)
      el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name])
      el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups)
      return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el))
            addedAttributes.set(el, []);
          addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el))
            removedAttributes.set(el, []);
          removedAttributes.get(el).push(name);
        };
        if (el.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el) => {
      cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el) => {
      onAttributeAddeds.forEach((i) => i(el, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
      if (node._x_cleanups) {
        while (node._x_cleanups.length)
          node._x_cleanups.pop()();
      }
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, {
                ...property,
                get: getter,
                set: setter
              });
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          let [utilities, cleanup2] = getElementBoundUtilities(el);
          utilities = { interceptor, ...utilities };
          onElRemoved(el, cleanup2);
          return callback(el, utilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el, expression);
    }
  }
  function handleError(error2, el, expression = void 0) {
    Object.assign(error2, { el, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [overriddenMagics, ...closestDataStack(el)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el);
          }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el),
      evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el._x_ignore || el._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el, directive2, utilities);
      handler3 = handler3.bind(handler3, el, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport",
    "element"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback) {
    tickStack.push(callback);
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
      Array.from(el.children).forEach((el2) => walk(el2, callback));
      return;
    }
    let skip = false;
    callback(el, () => skip = true);
    if (skip)
      return;
    let node = el.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el) => initTree(el, walk));
    onElRemoved((el) => destroyTree(el));
    onAttributesAdded((el, attrs) => {
      directives(el, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
      initTree(el);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el, callback) {
    if (!el)
      return;
    if (callback(el))
      return el;
    if (el._x_teleportBack)
      el = el._x_teleportBack;
    if (!el.parentElement)
      return;
    return findClosest(el.parentElement, callback);
  }
  function isRoot(el) {
    return rootSelectors().some((selector) => el.matches(selector));
  }
  function initTree(el, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el, (el2, skip) => {
        directives(el2, el2.attributes).forEach((handle) => handle());
        el2._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el) => cleanupAttributes(el));
  }
  function setClasses(el, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el, value);
    } else if (typeof value === "function") {
      return setClasses(el, value());
    }
    return setClassesFromString(el, value);
  }
  function setClassesFromString(el, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el.classList.add(...classes);
      return () => {
        el.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el.classList.contains(i)) {
        el.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el.classList.contains(i)) {
        el.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el.classList.add(i));
      added.forEach((i) => el.classList.remove(i));
    };
  }
  function setStyles(el, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el, value);
    }
    return setStylesFromString(el, value);
  }
  function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el.style.length === 0) {
        el.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el, previousStyles);
    };
  }
  function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return () => {
      el.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el, modifiers, value);
    } else {
      registerTransitionsFromClassString(el, expression, value);
    }
  });
  function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition)
      el._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    let clickAwayCompatibleShow = () => {
      document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
      if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
      el._x_transition.out(() => {
      }, () => resolve(hide));
      el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el);
      } else {
        queueMicrotask(() => {
          let hideAfterChildren = (el2) => {
            let carry = Promise.all([
              el2._x_hidePromise,
              ...(el2._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el2._x_hidePromise;
            delete el2._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el) {
    let parent = el.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el._x_transitioning)
      el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
      start() {
        undoStart = setFunction(el, start2);
      },
      during() {
        undoDuring = setFunction(el, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el.isConnected)
          stages.cleanup();
        delete el._x_transitioning;
      });
    });
    el._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback) => {
      walk(el2, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings)
      el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el, value);
        break;
      case "style":
        bindStyles(el, value);
        break;
      case "class":
        bindClasses(el, value);
        break;
      default:
        bindAttribute(el, name, value);
        break;
    }
  }
  function bindInputValue(el, value) {
    if (el.type === "radio") {
      if (el.attributes.value === void 0) {
        el.value = value;
      }
      if (window.fromModel) {
        el.checked = checkedAttrLooseCompare(el.value, value);
      }
    } else if (el.type === "checkbox") {
      if (Number.isInteger(value)) {
        el.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
        } else {
          el.checked = !!value;
        }
      }
    } else if (el.tagName === "SELECT") {
      updateSelect(el, value);
    } else {
      if (el.value === value)
        return;
      el.value = value;
    }
  }
  function bindClasses(el, value) {
    if (el._x_undoAddedClasses)
      el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
  }
  function bindStyles(el, value) {
    if (el._x_undoAddedStyles)
      el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
  }
  function bindAttribute(el, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el, name, value);
    }
  }
  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }
  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0)
      return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    if (attr === "")
      return true;
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, object) {
    binds[name] = typeof object !== "function" ? () => object : object;
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.9.2",
    flushAndStopDeferringMutations,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (effect3.options.onTrigger) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el) => dispatch.bind(dispatch, el));
  magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el) => scope(el));
  magic("root", (el) => closestRoot(el));
  magic("refs", (el) => {
    if (el._x_refs_proxy)
      return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
  });
  function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el, name) {
    return findClosest(el, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el, name) {
    if (!el._x_ids)
      el._x_ids = {};
    if (!el._x_ids[name])
      el._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el) => (name, key = null) => {
    let root = closestIdRoot(el, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el) => el);
  directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el._x_model)
        return;
      el._x_removeModelListeners["default"]();
      let outerGet = el._x_model.get;
      let outerSet = el._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el, { expression }, { cleanup: cleanup2 }) => {
    if (el.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) {
      el._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup2(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
  function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.target === el && next(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e) => {
        if (el.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el.offsetWidth < 1 && el.offsetHeight < 1)
          return;
        if (el._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    handler3 = wrapHandler(handler3, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      } });
    });
    if (!el._x_removeModelListeners)
      el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
        return;
      el._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") {
      mutateDom(() => {
        if (!el.hasAttribute("name"))
          el.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el.textContent = value;
        });
      });
    });
  });
  directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        el.innerHTML = value;
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      return applyBindingsObject(el, expression, original, effect3);
    }
    if (value === "key")
      return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && expression.match(/\./))
        result = "";
      mutateDom(() => bind(el, value, result, modifiers));
    }));
  });
  function applyBindingsObject(el, expression, original, effect3) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    }, { scope: bindingProviders });
  }
  function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el, { expression }, { cleanup: cleanup2 }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
      undo();
    });
  }));
  directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let hide = () => mutateDom(() => {
      el.style.display = "none";
      el._x_isShown = false;
    });
    let show = () => mutateDom(() => {
      if (el.style.length === 1 && el.style.display === "none") {
        el.removeAttribute("style");
      } else {
        el.style.removeProperty("display");
      }
      el._x_isShown = true;
    });
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el._x_lookup).forEach((el2) => el2.remove());
      delete el._x_prevKeys;
      delete el._x_lookup;
    });
  });
  function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el._x_lookup;
      let prevKeys = el._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope2 } });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el, expression);
    let show = () => {
      if (el._x_currentIfEl)
        return el._x_currentIfEl;
      let clone2 = el.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el);
      mutateDom(() => {
        el.after(clone2);
        initTree(clone2);
      });
      el._x_currentIfEl = clone2;
      el._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el._x_undoIf)
        return;
      el._x_undoIf();
      delete el._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el._x_undoIf && el._x_undoIf());
  });
  directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el, expression) : () => {
    };
    if (el.tagName.toLowerCase() === "template") {
      if (!el._x_forwardEvents)
        el._x_forwardEvents = [];
      if (!el._x_forwardEvents.includes(value))
        el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { $event: e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // src/_assets/scripts/alpine.js
  window.Alpine = module_default;
  window.addEventListener("DOMContentLoaded", () => {
    module_default.start();
  });
  window.addEventListener("alpine:initializing", () => {
    module_default.store("nav", {
      isOpen: false,
      close() {
        return this.isOpen = false;
      },
      open() {
        return this.isOpen = true;
      },
      toggle() {
        return this.isOpen = !this.isOpen;
      }
    });
  });

  // src/_assets/scripts/main.js
  var import_littlefoot = __toESM(require_littlefoot());
  (0, import_littlefoot.default)();
})();
