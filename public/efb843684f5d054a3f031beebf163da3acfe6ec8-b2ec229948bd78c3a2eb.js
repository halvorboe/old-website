(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "0mN4": function (e, t, a) {
      "use strict";
      a("OGtf")("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "");
        };
      });
    },
    "7oih": function (e, t, a) {
      "use strict";
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("0mN4"), a("WVtT")),
        o = a("9eSz"),
        s = a.n(o),
        l = function (e) {
          var t = n.data;
          return i.a.createElement(s.a, {
            fixed: t.placeholderImage.childImageSharp.fixed,
          });
        };
      a("XdqX"),
        (t.a = function (e) {
          var t = e.children;
          return i.a.createElement(
            "div",
            null,
            i.a.createElement(
              "div",
              { style: { maxWidth: 800, margin: "auto" } },
              i.a.createElement(
                "header",
                { style: { margin: "100px 0 40px 0" } },
                i.a.createElement(l, null)
              )
            ),
            i.a.createElement("div", {
              style: {
                width: "100%",
                height: "10px",
                margin: "75px 0",
                backgroundColor: "#FF8939",
                boxShadow: "0px 5px #ddd",
              },
            }),
            i.a.createElement(
              "div",
              { style: { maxWidth: 800, margin: "auto" } },
              t
            ),
            i.a.createElement("div", {
              style: {
                width: "100%",
                height: "10px",
                margin: "75px 0",
                backgroundColor: "#FF8939",
                boxShadow: "0px 5px #ddd",
              },
            }),
            i.a.createElement(
              "div",
              { style: { maxWidth: 800, margin: "auto" } },
              i.a.createElement(
                "footer",
                { style: { margin: "40px 0 100px 0" } },
                i.a.createElement("h3", null, "Made in 🇳🇴 with gatsby and 🤟")
              )
            )
          );
        });
    },
    "9eSz": function (e, t, a) {
      "use strict";
      a("rGqo"),
        a("yt8O"),
        a("Btvt"),
        a("XfO3"),
        a("EK0E"),
        a("INYr"),
        a("0mN4");
      var r = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a("PJYZ")),
        o = r(a("VbXa")),
        s = r(a("8OQS")),
        l = r(a("pVnL")),
        d = r(a("q1tI")),
        c = r(a("17x9")),
        u = function (e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = S([].concat(t.fluid))),
            t.fixed && (t.fixed = S([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && b && !!window.matchMedia(t).matches;
        },
        A = function (e) {
          var t = e.fluid,
            a = e.fixed;
          return g(t || a).src;
        },
        g = function (e) {
          if (
            b &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        h = Object.create({}),
        p = function (e) {
          var t = u(e),
            a = A(t);
          return h[a] || !1;
        },
        m =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        b = "undefined" != typeof window,
        E = b && window.IntersectionObserver,
        v = new WeakMap();
      function y(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return d.default.createElement(
            d.default.Fragment,
            { key: t },
            r &&
              d.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n,
              }),
            d.default.createElement("source", { media: i, srcSet: a, sizes: n })
          );
        });
      }
      function S(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function x(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function w(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return d.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r,
          });
        });
      }
      function I(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var N = function (e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), v.set(e, t)),
            function () {
              a.unobserve(e), v.delete(e);
            }
          );
        },
        C = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : "",
            s = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            d = e.loading ? 'loading="' + e.loading + '" ' : "",
            c = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? I(e, !0) : "") + I(e);
              })
              .join("") +
            "<img " +
            d +
            o +
            s +
            a +
            r +
            t +
            n +
            i +
            l +
            c +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        R = d.default.forwardRef(function (e, t) {
          var a = e.src,
            r = e.imageVariants,
            i = e.generateSources,
            n = e.spreadProps,
            o = e.ariaHidden,
            s = d.default.createElement(
              O,
              (0, l.default)({ ref: t, src: a }, n, { ariaHidden: o })
            );
          return r.length > 1
            ? d.default.createElement("picture", null, i(r), s)
            : s;
        }),
        O = d.default.forwardRef(function (e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            o = e.onLoad,
            c = e.onError,
            u = e.loading,
            f = e.draggable,
            A = e.ariaHidden,
            g = (0, s.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return d.default.createElement(
            "img",
            (0, l.default)(
              { "aria-hidden": A, sizes: a, srcSet: r, src: i },
              g,
              {
                onLoad: o,
                onError: c,
                ref: t,
                loading: u,
                draggable: f,
                style: (0, l.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  n
                ),
              }
            )
          );
        });
      O.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      };
      var B = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = b && p(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !m && E && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (b && (m || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
            }),
            (a.imageRef = d.default.createRef()),
            (a.placeholderRef = t.placeholderRef || d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, o.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: p(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = N(e, function () {
                var e = p(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function () {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = A(t)),
              (h[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function () {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              o = e.imgStyle,
              s = void 0 === o ? {} : o,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              A = e.placeholderClassName,
              h = e.fluid,
              p = e.fixed,
              m = e.backgroundColor,
              b = e.durationFadeIn,
              E = e.Tag,
              v = e.itemProp,
              S = e.loading,
              I = e.draggable,
              N = !1 === this.state.fadeIn || this.state.imgLoaded,
              B = !0 === this.state.fadeIn && !this.state.imgCached,
              j = (0, l.default)(
                {
                  opacity: N ? 1 : 0,
                  transition: B ? "opacity " + b + "ms" : "none",
                },
                s
              ),
              L = "boolean" == typeof m ? "lightgray" : m,
              k = { transitionDelay: b + "ms" },
              Q = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                B && k,
                {},
                s,
                {},
                f
              ),
              z = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: Q,
                className: A,
                itemProp: v,
              };
            if (h) {
              var V = h,
                F = g(h);
              return d.default.createElement(
                E,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    { position: "relative", overflow: "hidden" },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(F.srcSet),
                },
                d.default.createElement(E, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / F.aspectRatio + "%",
                  },
                }),
                L &&
                  d.default.createElement(E, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: L,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      B && k
                    ),
                  }),
                F.base64 &&
                  d.default.createElement(R, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: F.base64,
                    spreadProps: z,
                    imageVariants: V,
                    generateSources: w,
                  }),
                F.tracedSVG &&
                  d.default.createElement(R, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: F.tracedSVG,
                    spreadProps: z,
                    imageVariants: V,
                    generateSources: x,
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    "picture",
                    null,
                    y(V),
                    d.default.createElement(O, {
                      alt: a,
                      title: t,
                      sizes: F.sizes,
                      src: F.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: F.srcSet,
                      style: j,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: S,
                      draggable: I,
                    })
                  ),
                this.addNoScript &&
                  d.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: C(
                        (0, l.default)({ alt: a, title: t, loading: S }, F, {
                          imageVariants: V,
                        })
                      ),
                    },
                  })
              );
            }
            if (p) {
              var P = p,
                T = g(p),
                Y = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: T.width,
                    height: T.height,
                  },
                  n
                );
              return (
                "inherit" === n.display && delete Y.display,
                d.default.createElement(
                  E,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: Y,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(T.srcSet),
                  },
                  L &&
                    d.default.createElement(E, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: L,
                          width: T.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: T.height,
                        },
                        B && k
                      ),
                    }),
                  T.base64 &&
                    d.default.createElement(R, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: T.base64,
                      spreadProps: z,
                      imageVariants: P,
                      generateSources: w,
                    }),
                  T.tracedSVG &&
                    d.default.createElement(R, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: T.tracedSVG,
                      spreadProps: z,
                      imageVariants: P,
                      generateSources: x,
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      "picture",
                      null,
                      y(P),
                      d.default.createElement(O, {
                        alt: a,
                        title: t,
                        width: T.width,
                        height: T.height,
                        sizes: T.sizes,
                        src: T.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: T.srcSet,
                        style: j,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: S,
                        draggable: I,
                      })
                    ),
                  this.addNoScript &&
                    d.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: C(
                          (0, l.default)({ alt: a, title: t, loading: S }, T, {
                            imageVariants: P,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(d.default.Component);
      B.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var j = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        }),
        L = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
          media: c.default.string,
        });
      B.propTypes = {
        resolutions: j,
        sizes: L,
        fixed: c.default.oneOfType([j, c.default.arrayOf(j)]),
        fluid: c.default.oneOfType([L, c.default.arrayOf(L)]),
        fadeIn: c.default.bool,
        durationFadeIn: c.default.number,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        crossOrigin: c.default.oneOfType([c.default.string, c.default.bool]),
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        placeholderClassName: c.default.string,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        onStartLoad: c.default.func,
        Tag: c.default.string,
        itemProp: c.default.string,
        loading: c.default.oneOf(["auto", "lazy", "eager"]),
        draggable: c.default.bool,
      };
      var k = B;
      t.default = k;
    },
    EK0E: function (e, t, a) {
      "use strict";
      var r,
        i = a("dyZX"),
        n = a("CkkT")(0),
        o = a("KroJ"),
        s = a("Z6vF"),
        l = a("czNK"),
        d = a("ZD67"),
        c = a("0/R4"),
        u = a("s5qY"),
        f = a("s5qY"),
        A = !i.ActiveXObject && "ActiveXObject" in i,
        g = s.getWeak,
        h = Object.isExtensible,
        p = d.ufstore,
        m = function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        b = {
          get: function (e) {
            if (c(e)) {
              var t = g(e);
              return !0 === t
                ? p(u(this, "WeakMap")).get(e)
                : t
                ? t[this._i]
                : void 0;
            }
          },
          set: function (e, t) {
            return d.def(u(this, "WeakMap"), e, t);
          },
        },
        E = (e.exports = a("4LiD")("WeakMap", m, b, d, !0, !0));
      f &&
        A &&
        (l((r = d.getConstructor(m, "WeakMap")).prototype, b),
        (s.NEED = !0),
        n(["delete", "has", "get", "set"], function (e) {
          var t = E.prototype,
            a = t[e];
          o(t, e, function (t, i) {
            if (c(t) && !h(t)) {
              this._f || (this._f = new r());
              var n = this._f[e](t, i);
              return "set" == e ? this : n;
            }
            return a.call(this, t, i);
          });
        }));
    },
    INYr: function (e, t, a) {
      "use strict";
      var r = a("XKFU"),
        i = a("CkkT")(6),
        n = "findIndex",
        o = !0;
      n in [] &&
        Array(1)[n](function () {
          o = !1;
        }),
        r(r.P + r.F * o, "Array", {
          findIndex: function (e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        a("nGyu")(n);
    },
    Lnxd: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      a("bWfx"), a("ioFf"), a("V+eJ"), a("91GP");
      var r = a("q1tI"),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = r.createContext && r.createContext(i),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, a = 1, r = arguments.length; a < r; a++)
                for (var i in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        s = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (a[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 && (a[r[i]] = e[r[i]]);
          }
          return a;
        };
      function l(e) {
        return function (t) {
          return r.createElement(
            d,
            o({ attr: o({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, a) {
                  return r.createElement(
                    t.tag,
                    o({ key: a }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function d(e) {
        var t = function (t) {
          var a,
            i = e.size || t.size || "1em";
          t.className && (a = t.className),
            e.className && (a = (a ? a + " " : "") + e.className);
          var n = e.attr,
            l = e.title,
            d = s(e, ["attr", "title"]);
          return r.createElement(
            "svg",
            o(
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
              },
              t.attr,
              n,
              d,
              {
                className: a,
                style: o({ color: e.color || t.color }, t.style, e.style),
                height: i,
                width: i,
                xmlns: "http://www.w3.org/2000/svg",
              }
            ),
            l && r.createElement("title", null, l),
            e.children
          );
        };
        return void 0 !== n
          ? r.createElement(n.Consumer, null, function (e) {
              return t(e);
            })
          : t(i);
      }
    },
    OGtf: function (e, t, a) {
      var r = a("XKFU"),
        i = a("eeVq"),
        n = a("vhPU"),
        o = /"/g,
        s = function (e, t, a, r) {
          var i = String(n(e)),
            s = "<" + t;
          return (
            "" !== a &&
              (s += " " + a + '="' + String(r).replace(o, "&quot;") + '"'),
            s + ">" + i + "</" + t + ">"
          );
        };
      e.exports = function (e, t) {
        var a = {};
        (a[e] = t(s)),
          r(
            r.P +
              r.F *
                i(function () {
                  var t = ""[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
            "String",
            a
          );
      };
    },
    SbOt: function (e, t, a) {
      "use strict";
      var r = a("q1tI"),
        i = a.n(r),
        n = (a("0mN4"), a("mufc")),
        o = a("9eSz"),
        s = a.n(o),
        l = function (e) {
          var t = n.data;
          return i.a.createElement(s.a, {
            fixed: t.placeholderImage.childImageSharp.fixed,
          });
        },
        d = a("oVTX"),
        c = a("ma3e");
      t.a = function () {
        return i.a.createElement(
          "div",
          { className: "m-y" },
          i.a.createElement(
            d.a,
            { light: !0 },
            i.a.createElement(
              "div",
              { style: { display: "flex" } },
              i.a.createElement(
                "div",
                {
                  className: "portrait",
                  style: { margin: "-30px 30px -60px -30px" },
                },
                i.a.createElement(l, null)
              ),
              i.a.createElement(
                "div",
                null,
                i.a.createElement("h3", null, "The Writer"),
                i.a.createElement("h1", null, "Halvor Fladsrud Bø (21)"),
                i.a.createElement(
                  "p",
                  null,
                  "I'm currently a full-time Computer Engineering student at NTNU in Trondheim, Norway. This blog is a place where I can 'share' my niche interests without loosing friends."
                ),
                i.a.createElement(
                  "span",
                  { className: "icons", style: { padding: "0 100" } },
                  i.a.createElement(
                    "a",
                    {
                      target: "_blank",
                      href: "https://www.linkedin.com/in/halvorboe/",
                    },
                    i.a.createElement(c.c, null)
                  ),
                  "            ",
                  i.a.createElement(
                    "a",
                    { target: "_blank", href: "https://github.com/halvorboe" },
                    i.a.createElement(c.b, null)
                  ),
                  "            ",
                  i.a.createElement(
                    "a",
                    { target: "_blank", href: "mailto:hfb@complex.codes" },
                    i.a.createElement(c.a, null)
                  )
                )
              )
            )
          )
        );
      };
    },
    WVtT: function (e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgklEQVQI12P432lZAMTR/zotc4C4DciuAuJZQNwNxCZAnP2n3SL3f791kbI4vxI7J5cLDw+3Jzc3dxQQewFxOBA7ALE/ELMzADUkAg3yA+IoIDsfiGuAuBSIzYE4Fiie9bvdIgxoYCrQQDk2Di5LoIG2QM3eQGwHxK5ArAfEjkAsAQA4+zZQcp/01wAAAABJRU5ErkJggg==","width":269,"height":30,"src":"/static/f262022595821df709e481d37599be51/8d10b/logo.png","srcSet":"/static/f262022595821df709e481d37599be51/8d10b/logo.png 1x,\\n/static/f262022595821df709e481d37599be51/ba4a1/logo.png 1.5x,\\n/static/f262022595821df709e481d37599be51/02c28/logo.png 2x"}}}}}'
      );
    },
    XdqX: function (e, t, a) {},
    ZD67: function (e, t, a) {
      "use strict";
      var r = a("3Lyj"),
        i = a("Z6vF").getWeak,
        n = a("y3w9"),
        o = a("0/R4"),
        s = a("9gX7"),
        l = a("SlkY"),
        d = a("CkkT"),
        c = a("aagx"),
        u = a("s5qY"),
        f = d(5),
        A = d(6),
        g = 0,
        h = function (e) {
          return e._l || (e._l = new p());
        },
        p = function () {
          this.a = [];
        },
        m = function (e, t) {
          return f(e.a, function (e) {
            return e[0] === t;
          });
        };
      (p.prototype = {
        get: function (e) {
          var t = m(this, e);
          if (t) return t[1];
        },
        has: function (e) {
          return !!m(this, e);
        },
        set: function (e, t) {
          var a = m(this, e);
          a ? (a[1] = t) : this.a.push([e, t]);
        },
        delete: function (e) {
          var t = A(this.a, function (t) {
            return t[0] === e;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function (e, t, a, n) {
            var d = e(function (e, r) {
              s(e, d, t, "_i"),
                (e._t = t),
                (e._i = g++),
                (e._l = void 0),
                null != r && l(r, a, e[n], e);
            });
            return (
              r(d.prototype, {
                delete: function (e) {
                  if (!o(e)) return !1;
                  var a = i(e);
                  return !0 === a
                    ? h(u(this, t)).delete(e)
                    : a && c(a, this._i) && delete a[this._i];
                },
                has: function (e) {
                  if (!o(e)) return !1;
                  var a = i(e);
                  return !0 === a ? h(u(this, t)).has(e) : a && c(a, this._i);
                },
              }),
              d
            );
          },
          def: function (e, t, a) {
            var r = i(n(t), !0);
            return !0 === r ? h(e).set(t, a) : (r[e._i] = a), e;
          },
          ufstore: h,
        });
    },
    mufc: function (e) {
      e.exports = JSON.parse(
        '{"data":{"placeholderImage":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBAwb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG3XMuaPLWBGD//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBCESEzH/2gAIAQEAAQUCL6cOsA1kaS3is9lljtMlz0DJuA//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABBAMBAQAAAAAAAAAAAAABAAIRIRASYQMx/9oACAEBAAY/AgNLmEDUExhpPzYJnXjFuK8e2o3K/8QAHBAAAwACAwEAAAAAAAAAAAAAAAERITFBUWFx/9oACAEBAAE/Ic5ZNo7KNgGnFIwMkTlGr3B8IoYldyTqVHX6a012SSXuT//aAAwDAQACAAMAAAAQIAA8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAQACAgMBAAAAAAAAAAAAAREAMSFhQVGBwf/aAAgBAQABPxCYNgRus1AxJugee8Mo1gg0cS0qn7gAUi7aN99ZHFiU5TCrxQAejKtImRQbw2sNcI+pn//Z","width":300,"height":300,"src":"/static/8721d0d142eadc3cf0d02d9a567da4fe/25e3f/portrait.jpg","srcSet":"/static/8721d0d142eadc3cf0d02d9a567da4fe/25e3f/portrait.jpg 1x,\\n/static/8721d0d142eadc3cf0d02d9a567da4fe/f11e0/portrait.jpg 1.5x,\\n/static/8721d0d142eadc3cf0d02d9a567da4fe/7b2a1/portrait.jpg 2x"}}}}}'
      );
    },
    oVTX: function (e, t, a) {
      "use strict";
      var r = a("q1tI"),
        i = a.n(r);
      t.a = function (e) {
        var t = e.light
          ? {
              color: "black",
              backgroundColor: "#F7F7F7",
              border: "3px solid #888",
              boxShadow: "5px 10px #ddd",
            }
          : {
              color: "white",
              backgroundColor: "#FF8939",
              border: "3px solid #fff",
              boxShadow: "5px 10px #ddd",
            };
        return i.a.createElement(
          r.Fragment,
          null,
          e.header ? i.a.createElement("h4", null, e.header) : null,
          i.a.createElement(
            "div",
            { className: "box", style: t },
            i.a.createElement(
              "div",
              {
                className: e.row ? "row" : "column",
                style: { display: "grid" },
              },
              e.children
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=efb843684f5d054a3f031beebf163da3acfe6ec8-b2ec229948bd78c3a2eb.js.map
