(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[143], {
    212: function(e, i, t) {
        "use strict";
        t.r(i),
        t.d(i, {
            default: function() {
                return h
            }
        });
        var r = t(7570)
          , o = t(7029)
          , n = t(3090)
          , a = t(7002)
          , s = t(5993)
          , u = t(5601)
          , l = t.n(u)
          , d = t(2265)
          , c = function(e) {
            var i, t = e.filePath, r = (null === (i = t.split("\\").pop()) || void 0 === i ? void 0 : i.split("/").pop()) || "", o = t.split(r).shift(), n = t.split(".").pop();
            return {
                path: o,
                filename: r.substring(0, r.lastIndexOf(".")) || r,
                extension: n || ""
            }
        }
          , f = function(e, i, t) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , o = c({
                filePath: e
            })
              , n = o.filename
              , a = o.path
              , s = o.extension;
            if (!["JPG", "JPEG", "WEBP", "PNG", "AVIF", "GIF"].includes(s.toUpperCase()))
                return e;
            var u = s;
            ["JPG", "JPEG", "PNG", "GIF"].includes(s.toUpperCase()) && (u = "WEBP");
            var l = a;
            "/" != (null == l ? void 0 : l.substr(-1)) && (l += "/");
            var d = e.includes("_next/static/media");
            t && (l = t.endsWith("/") && l && l.startsWith("/") ? t + l.slice(1) : t.endsWith("/") || !l || l.startsWith("/") ? t + l : t + "/" + l);
            var f = "".concat(d ? t ? t + "/" : "" : l).concat("nextImageExportOptimizer", "/").concat(n, "-opt-").concat(i, ".").concat(u.toUpperCase());
            return r || "/" === f.charAt(0) || (f = "/" + f),
            f
        }
          , p = function(e) {
            var i = e.src
              , t = e.width
              , r = e.basePath;
            return f(i.replace(/^(https?|ftp):\/\//, "").replace(/[/\\:*?"<>|#%]/g, "_").replace(/[\x00-\x1F\x7F]/g, "").trim(), t, r, !0)
        }
          , b = function(e) {
            var i = e.src
              , t = e.width
              , r = e.basePath
              , o = "object" == typeof i
              , n = o ? i.src : i
              , a = o && i.width || void 0;
            if (o && a && t > a) {
                for (var u = (0,
                s._)([640, 750, 828, 1080, 1200, 1920, 2048, 3840]).concat((0,
                s._)([16, 32, 48, 64, 96, 128, 256, 384])), l = null, d = 0; d < u.length; d++)
                    Number(u[d]) >= a && (null === l || Number(u[d]) < l) && (l = Number(u[d]));
                if (null !== l)
                    return f(n, l, r)
            }
            return n.startsWith("http") ? p({
                src: n,
                width: t,
                basePath: r
            }) : f(n, t, r)
        }
          , m = function(e) {
            var i = e.src
              , t = "object" == typeof i ? i.src : i;
            return t.startsWith("http") || "/" === t.charAt(0) || (t = "/" + t),
            t
        }
          , w = (0,
        d.forwardRef)(function(e, i) {
            var t = e.src
              , s = e.priority
              , u = void 0 !== s && s
              , c = e.loading
              , w = e.className
              , h = e.width
              , v = e.height
              , g = e.onLoad
              , y = e.unoptimized
              , _ = e.placeholder
              , x = void 0 === _ ? "blur" : _
              , k = e.basePath
              , S = void 0 === k ? "" : k
              , P = e.alt
              , z = e.blurDataURL
              , j = e.style
              , C = e.onError
              , O = (0,
            n._)(e, ["src", "priority", "loading", "className", "width", "height", "onLoad", "unoptimized", "placeholder", "basePath", "alt", "blurDataURL", "style", "onError"])
              , E = (0,
            a._)((0,
            d.useState)(!1), 2)
              , A = E[0]
              , I = E[1]
              , M = (0,
            d.useMemo)(function() {
                if (z)
                    return z;
                var e = "object" == typeof t ? t.src : t;
                return !0 === y ? e : e.startsWith("http") ? p({
                    src: e,
                    width: 10,
                    basePath: S
                }) : f(e, 10, S)
            }, [z, t, y, S])
              , N = "object" == typeof t ? t.src.endsWith(".svg") : t.endsWith(".svg")
              , R = (0,
            a._)((0,
            d.useState)(!1), 2)
              , T = R[0]
              , L = R[1]
              , U = "blur" === x && !N && M && M.startsWith("/") && !T ? {
                backgroundSize: (null == j ? void 0 : j.objectFit) || "cover",
                backgroundPosition: (null == j ? void 0 : j.objectPosition) || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("'.concat(M, '")')
            } : void 0
              , q = "object" == typeof t
              , F = q ? t.src : t;
            return S && !q && F.startsWith("/") && (F = S + F),
            !S || q || F.startsWith("/") || (F = S + "/" + F),
            d.createElement(l(), (0,
            o._)((0,
            r._)({
                ref: i,
                alt: void 0 === P ? "" : P
            }, O, h && {
                width: h
            }, v && {
                height: v
            }, c && {
                loading: c
            }, w && {
                className: w
            }, g && {
                onLoad: g
            }, x && {
                placeholder: U || T ? "empty" : x
            }, y && {
                unoptimized: y
            }, u && {
                priority: u
            }, N && {
                unoptimized: !0
            }), {
                style: (0,
                r._)({}, j, U),
                loader: A || !0 === y ? m : function(e) {
                    return b({
                        src: t,
                        width: e.width,
                        basePath: S
                    })
                }
                ,
                blurDataURL: M,
                onError: function(e) {
                    I(!0),
                    L(!0),
                    C && C(e)
                },
                onLoad: function(e) {
                    0 === e.target.naturalWidth && I(!0),
                    L(!0),
                    g && g(e)
                },
                src: q ? t : F
            }))
        });
        w.displayName = "ExportedImage";
        var h = w
    },
    6463: function(e, i, t) {
        "use strict";
        var r = t(1169);
        t.o(r, "useParams") && t.d(i, {
            useParams: function() {
                return r.useParams
            }
        }),
        t.o(r, "usePathname") && t.d(i, {
            usePathname: function() {
                return r.usePathname
            }
        })
    },
    8173: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(7570)
          , o = t(7029)
          , n = t(3090)
          , a = t(7002)
          , s = t(5993);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "Image", {
            enumerable: !0,
            get: function() {
                return S
            }
        });
        var u = t(9920)
          , l = t(1452)
          , d = t(7437)
          , c = l._(t(2265))
          , f = u._(t(4887))
          , p = u._(t(8321))
          , b = t(497)
          , m = t(7103)
          , w = t(3938);
        t(2301);
        var h = t(291)
          , v = u._(t(1241))
          , g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "custom",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function y(e, i, t, n, a, s, u) {
            var l = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
            ("decode"in e ? e.decode() : Promise.resolve()).catch(function() {}).then(function() {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== i && a(!0),
                    null == t ? void 0 : t.current) {
                        var s = new Event("load");
                        Object.defineProperty(s, "target", {
                            writable: !1,
                            value: e
                        });
                        var u = !1
                          , l = !1;
                        t.current(o._(r._({}, s), {
                            nativeEvent: s,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: function() {
                                return u
                            },
                            isPropagationStopped: function() {
                                return l
                            },
                            persist: function() {},
                            preventDefault: function() {
                                u = !0,
                                s.preventDefault()
                            },
                            stopPropagation: function() {
                                l = !0,
                                s.stopPropagation()
                            }
                        }))
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }))
        }
        function _(e) {
            var i = a._(c.version.split(".", 2), 2)
              , t = i[0]
              , r = i[1]
              , o = parseInt(t, 10)
              , n = parseInt(r, 10);
            return o > 18 || 18 === o && n >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        var x = (0,
        c.forwardRef)(function(e, i) {
            var t = e.src
              , a = e.srcSet
              , s = e.sizes
              , u = e.height
              , l = e.width
              , f = e.decoding
              , p = e.className
              , b = e.style
              , m = e.fetchPriority
              , w = e.placeholder
              , h = e.loading
              , v = e.unoptimized
              , g = e.fill
              , x = e.onLoadRef
              , k = e.onLoadingCompleteRef
              , S = e.setBlurComplete
              , P = e.setShowAltText
              , z = e.sizesInput
              , j = (e.onLoad,
            e.onError)
              , C = n._(e, ["src", "srcSet", "sizes", "height", "width", "decoding", "className", "style", "fetchPriority", "placeholder", "loading", "unoptimized", "fill", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "sizesInput", "onLoad", "onError"]);
            return (0,
            d.jsx)("img", o._(r._({}, C, _(m)), {
                loading: h,
                width: l,
                height: u,
                decoding: f,
                "data-nimg": g ? "fill" : "1",
                className: p,
                style: b,
                sizes: s,
                srcSet: a,
                src: t,
                ref: (0,
                c.useCallback)(function(e) {
                    i && ("function" == typeof i ? i(e) : "object" == typeof i && (i.current = e)),
                    e && (j && (e.src = e.src),
                    e.complete && y(e, w, x, k, S, v, z))
                }, [t, w, x, k, S, j, v, z, i]),
                onLoad: function(e) {
                    y(e.currentTarget, w, x, k, S, v, z)
                },
                onError: function(e) {
                    P(!0),
                    "empty" !== w && S(!0),
                    j && j(e)
                }
            }))
        });
        function k(e) {
            var i = e.isAppRouter
              , t = e.imgAttributes
              , o = r._({
                as: "image",
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy
            }, _(t.fetchPriority));
            return i && f.default.preload ? (f.default.preload(t.src, o),
            null) : (0,
            d.jsx)(p.default, {
                children: (0,
                d.jsx)("link", r._({
                    rel: "preload",
                    href: t.srcSet ? void 0 : t.src
                }, o), "__nimg-" + t.src + t.srcSet + t.sizes)
            })
        }
        var S = (0,
        c.forwardRef)(function(e, i) {
            var t = (0,
            c.useContext)(h.RouterContext)
              , n = (0,
            c.useContext)(w.ImageConfigContext)
              , u = (0,
            c.useMemo)(function() {
                var e = g || n || m.imageConfigDefault
                  , i = s._(e.deviceSizes).concat(s._(e.imageSizes)).sort(function(e, i) {
                    return e - i
                })
                  , t = e.deviceSizes.sort(function(e, i) {
                    return e - i
                });
                return o._(r._({}, e), {
                    allSizes: i,
                    deviceSizes: t
                })
            }, [n])
              , l = e.onLoad
              , f = e.onLoadingComplete
              , p = (0,
            c.useRef)(l);
            (0,
            c.useEffect)(function() {
                p.current = l
            }, [l]);
            var y = (0,
            c.useRef)(f);
            (0,
            c.useEffect)(function() {
                y.current = f
            }, [f]);
            var _ = a._((0,
            c.useState)(!1), 2)
              , S = _[0]
              , P = _[1]
              , z = a._((0,
            c.useState)(!1), 2)
              , j = z[0]
              , C = z[1]
              , O = (0,
            b.getImgProps)(e, {
                defaultLoader: v.default,
                imgConf: u,
                blurComplete: S,
                showAltText: j
            })
              , E = O.props
              , A = O.meta;
            return (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(x, o._(r._({}, E), {
                    unoptimized: A.unoptimized,
                    placeholder: A.placeholder,
                    fill: A.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: y,
                    setBlurComplete: P,
                    setShowAltText: C,
                    sizesInput: e.sizes,
                    ref: i
                })), A.priority ? (0,
                d.jsx)(k, {
                    isAppRouter: !t,
                    imgAttributes: E
                }) : null]
            })
        });
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
        Object.assign(i.default, i),
        e.exports = i.default)
    },
    2901: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        var r = t(9920)._(t(2265)).default.createContext({})
    },
    687: function(e, i) {
        "use strict";
        function t(e) {
            var i = void 0 === e ? {} : e
              , t = i.ampFirst
              , r = i.hybrid
              , o = i.hasQuery;
            return void 0 !== t && t || void 0 !== r && r && void 0 !== o && o
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return t
            }
        })
    },
    497: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(7570)
          , o = t(7029)
          , n = t(3090);
        t(7002);
        var a = t(5993);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "getImgProps", {
            enumerable: !0,
            get: function() {
                return c
            }
        }),
        t(2301);
        var s = t(1564)
          , u = t(7103);
        function l(e) {
            return void 0 !== e.default
        }
        function d(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function c(e, i) {
            var t, c, f, p, b = e.src, m = e.sizes, w = e.unoptimized, h = void 0 !== w && w, v = e.priority, g = void 0 !== v && v, y = e.loading, _ = e.className, x = e.quality, k = e.width, S = e.height, P = e.fill, z = void 0 !== P && P, j = e.style, C = e.overrideSrc, O = (e.onLoad,
            e.onLoadingComplete,
            e.placeholder), E = void 0 === O ? "empty" : O, A = e.blurDataURL, I = e.fetchPriority, M = e.layout, N = e.objectFit, R = e.objectPosition, T = (e.lazyBoundary,
            e.lazyRoot,
            n._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "overrideSrc", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"])), L = i.imgConf, U = i.showAltText, q = i.blurComplete, F = i.defaultLoader, D = L || u.imageConfigDefault;
            if ("allSizes"in D)
                c = D;
            else {
                var W = a._(D.deviceSizes).concat(a._(D.imageSizes)).sort(function(e, i) {
                    return e - i
                })
                  , B = D.deviceSizes.sort(function(e, i) {
                    return e - i
                });
                c = o._(r._({}, D), {
                    allSizes: W,
                    deviceSizes: B
                })
            }
            if (void 0 === F)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            var G = T.loader || F;
            delete T.loader,
            delete T.srcSet;
            var V = "__next_img_default"in G;
            if (V) {
                if ("custom" === c.loader)
                    throw Error('Image with src "' + b + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                var H = G;
                G = function(e) {
                    return e.config,
                    H(n._(e, ["config"]))
                }
            }
            if (M) {
                "fill" === M && (z = !0);
                var $ = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[M];
                $ && (j = r._({}, j, $));
                var J = {
                    responsive: "100vw",
                    fill: "100vw"
                }[M];
                J && !m && (m = J)
            }
            var Z = ""
              , X = d(k)
              , Y = d(S);
            if ("object" == typeof (t = b) && (l(t) || void 0 !== t.src)) {
                var K = l(b) ? b.default : b;
                if (!K.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(K));
                if (!K.height || !K.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(K));
                if (f = K.blurWidth,
                p = K.blurHeight,
                A = A || K.blurDataURL,
                Z = K.src,
                !z) {
                    if (X || Y) {
                        if (X && !Y) {
                            var Q = X / K.width;
                            Y = Math.round(K.height * Q)
                        } else if (!X && Y) {
                            var ee = Y / K.height;
                            X = Math.round(K.width * ee)
                        }
                    } else
                        X = K.width,
                        Y = K.height
                }
            }
            var ei = !g && ("lazy" === y || void 0 === y);
            (!(b = "string" == typeof b ? b : Z) || b.startsWith("data:") || b.startsWith("blob:")) && (h = !0,
            ei = !1),
            c.unoptimized && (h = !0),
            V && b.endsWith(".svg") && !c.dangerouslyAllowSVG && (h = !0),
            g && (I = "high");
            var et = d(x)
              , er = Object.assign(z ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: N,
                objectPosition: R
            } : {}, U ? {} : {
                color: "transparent"
            }, j)
              , eo = q || "empty" === E ? null : "blur" === E ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            s.getImageBlurSvg)({
                widthInt: X,
                heightInt: Y,
                blurWidth: f,
                blurHeight: p,
                blurDataURL: A || "",
                objectFit: er.objectFit
            }) + '")' : 'url("' + E + '")'
              , en = eo ? {
                backgroundSize: er.objectFit || "cover",
                backgroundPosition: er.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: eo
            } : {}
              , ea = function(e) {
                var i = e.config
                  , t = e.src
                  , r = e.unoptimized
                  , o = e.width
                  , n = e.quality
                  , s = e.sizes
                  , u = e.loader;
                if (r)
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    };
                var l = function(e, i, t) {
                    var r = e.deviceSizes
                      , o = e.allSizes;
                    if (t) {
                        for (var n = /(^|\s)(1?\d?\d)vw/g, s = []; u = n.exec(t); u)
                            s.push(parseInt(u[2]));
                        if (s.length) {
                            var u, l, d = .01 * (l = Math).min.apply(l, a._(s));
                            return {
                                widths: o.filter(function(e) {
                                    return e >= r[0] * d
                                }),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof i ? {
                        widths: r,
                        kind: "w"
                    } : {
                        widths: a._(new Set([i, 2 * i].map(function(e) {
                            return o.find(function(i) {
                                return i >= e
                            }) || o[o.length - 1]
                        }))),
                        kind: "x"
                    }
                }(i, o, s)
                  , d = l.widths
                  , c = l.kind
                  , f = d.length - 1;
                return {
                    sizes: s || "w" !== c ? s : "100vw",
                    srcSet: d.map(function(e, r) {
                        return u({
                            config: i,
                            src: t,
                            quality: n,
                            width: e
                        }) + " " + ("w" === c ? e : r + 1) + c
                    }).join(", "),
                    src: u({
                        config: i,
                        src: t,
                        quality: n,
                        width: d[f]
                    })
                }
            }({
                config: c,
                src: b,
                unoptimized: h,
                width: X,
                quality: et,
                sizes: m,
                loader: G
            });
            return {
                props: o._(r._({}, T), {
                    loading: ei ? "lazy" : y,
                    fetchPriority: I,
                    width: X,
                    height: Y,
                    decoding: "async",
                    className: _,
                    style: r._({}, er, en),
                    sizes: ea.sizes,
                    srcSet: ea.srcSet,
                    src: C || ea.src
                }),
                meta: {
                    unoptimized: h,
                    priority: g,
                    placeholder: E,
                    fill: z
                }
            }
        }
    },
    8321: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(7570);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        function(e, i) {
            for (var t in i)
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i[t]
                })
        }(i, {
            default: function() {
                return w
            },
            defaultHead: function() {
                return f
            }
        });
        var o = t(9920)
          , n = t(1452)
          , a = t(7437)
          , s = n._(t(2265))
          , u = o._(t(5960))
          , l = t(2901)
          , d = t(6590)
          , c = t(687);
        function f(e) {
            void 0 === e && (e = !1);
            var i = [(0,
            a.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || i.push((0,
            a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            i
        }
        function p(e, i) {
            return "string" == typeof i || "number" == typeof i ? e : i.type === s.default.Fragment ? e.concat(s.default.Children.toArray(i.props.children).reduce(function(e, i) {
                return "string" == typeof i || "number" == typeof i ? e : e.concat(i)
            }, [])) : e.concat(i)
        }
        t(2301);
        var b = ["name", "httpEquiv", "charSet", "itemProp"];
        function m(e, i) {
            var t, o, n, a, u = i.inAmpMode;
            return e.reduce(p, []).reverse().concat(f(u).reverse()).filter((t = new Set,
            o = new Set,
            n = new Set,
            a = {},
            function(e) {
                var i = !0
                  , r = !1;
                if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                    r = !0;
                    var s = e.key.slice(e.key.indexOf("$") + 1);
                    t.has(s) ? i = !1 : t.add(s)
                }
                switch (e.type) {
                case "title":
                case "base":
                    o.has(e.type) ? i = !1 : o.add(e.type);
                    break;
                case "meta":
                    for (var u = 0, l = b.length; u < l; u++) {
                        var d = b[u];
                        if (e.props.hasOwnProperty(d)) {
                            if ("charSet" === d)
                                n.has(d) ? i = !1 : n.add(d);
                            else {
                                var c = e.props[d]
                                  , f = a[d] || new Set;
                                ("name" !== d || !r) && f.has(c) ? i = !1 : (f.add(c),
                                a[d] = f)
                            }
                        }
                    }
                }
                return i
            }
            )).reverse().map(function(e, i) {
                var t = e.key || i;
                if (!u && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(function(i) {
                    return e.props.href.startsWith(i)
                })) {
                    var o = r._({}, e.props || {});
                    return o["data-href"] = o.href,
                    o.href = void 0,
                    o["data-optimized-fonts"] = !0,
                    s.default.cloneElement(e, o)
                }
                return s.default.cloneElement(e, {
                    key: t
                })
            })
        }
        var w = function(e) {
            var i = e.children
              , t = (0,
            s.useContext)(l.AmpStateContext)
              , r = (0,
            s.useContext)(d.HeadManagerContext);
            return (0,
            a.jsx)(u.default, {
                reduceComponentsToState: m,
                headManager: r,
                inAmpMode: (0,
                c.isInAmpMode)(t),
                children: i
            })
        };
        ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
        Object.assign(i.default, i),
        e.exports = i.default)
    },
    1564: function(e, i) {
        "use strict";
        function t(e) {
            var i = e.widthInt
              , t = e.heightInt
              , r = e.blurWidth
              , o = e.blurHeight
              , n = e.blurDataURL
              , a = e.objectFit
              , s = r ? 40 * r : i
              , u = o ? 40 * o : t
              , l = s && u ? "viewBox='0 0 " + s + " " + u + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (l ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + n + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return t
            }
        })
    },
    3938: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        var r = t(9920)._(t(2265))
          , o = t(7103)
          , n = r.default.createContext(o.imageConfigDefault)
    },
    7103: function(e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        function(e, i) {
            for (var t in i)
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i[t]
                })
        }(i, {
            VALID_LOADERS: function() {
                return t
            },
            imageConfigDefault: function() {
                return r
            }
        });
        var t = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , r = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    5601: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t(7002);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        function(e, i) {
            for (var t in i)
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i[t]
                })
        }(i, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return u
            }
        });
        var o = t(9920)
          , n = t(497)
          , a = t(8173)
          , s = o._(t(1241));
        function u(e) {
            var i = (0,
            n.getImgProps)(e, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "custom",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            }).props
              , t = !0
              , o = !1
              , a = void 0;
            try {
                for (var u, l = Object.entries(i)[Symbol.iterator](); !(t = (u = l.next()).done); t = !0) {
                    var d = r._(u.value, 2)
                      , c = d[0]
                      , f = d[1];
                    void 0 === f && delete i[c]
                }
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    t || null == l.return || l.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return {
                props: i
            }
        }
        var l = a.Image
    },
    1241: function(e, i) {
        "use strict";
        function t(e) {
            var i = e.config
              , t = e.src
              , r = e.width
              , o = e.quality;
            return i.path + "?url=" + encodeURIComponent(t) + "&w=" + r + "&q=" + (o || 75)
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        t.__next_img_default = !0;
        var r = t
    },
    291: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        var r = t(9920)._(t(2265)).default.createContext(null)
    },
    5960: function(e, i, t) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        var r = t(2265)
          , o = "undefined" == typeof window
          , n = o ? function() {}
        : r.useLayoutEffect
          , a = o ? function() {}
        : r.useEffect;
        function s(e) {
            var i, t = e.headManager, s = e.reduceComponentsToState;
            function u() {
                if (t && t.mountedInstances) {
                    var i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(s(i, e))
                }
            }
            return o && (null == t || null == (i = t.mountedInstances) || i.add(e.children),
            u()),
            n(function() {
                var i;
                return null == t || null == (i = t.mountedInstances) || i.add(e.children),
                function() {
                    var i;
                    null == t || null == (i = t.mountedInstances) || i.delete(e.children)
                }
            }),
            n(function() {
                return t && (t._pendingUpdate = u),
                function() {
                    t && (t._pendingUpdate = u)
                }
            }),
            a(function() {
                return t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null),
                function() {
                    t && t._pendingUpdate && (t._pendingUpdate(),
                    t._pendingUpdate = null)
                }
            }),
            null
        }
    },
    6088: function(e, i, t) {
        var r;
        !function(o, n) {
            "use strict";
            var a = "function"
              , s = "undefined"
              , u = "object"
              , l = "string"
              , d = "major"
              , c = "model"
              , f = "name"
              , p = "type"
              , b = "vendor"
              , m = "version"
              , w = "architecture"
              , h = "console"
              , v = "mobile"
              , g = "tablet"
              , y = "smarttv"
              , _ = "wearable"
              , x = "embedded"
              , k = "Amazon"
              , S = "Apple"
              , P = "ASUS"
              , z = "BlackBerry"
              , j = "Browser"
              , C = "Chrome"
              , O = "Firefox"
              , E = "Google"
              , A = "Huawei"
              , I = "Microsoft"
              , M = "Motorola"
              , N = "Opera"
              , R = "Samsung"
              , T = "Sharp"
              , L = "Sony"
              , U = "Xiaomi"
              , q = "Zebra"
              , F = "Facebook"
              , D = "Chromium OS"
              , W = "Mac OS"
              , B = function(e, i) {
                var t = {};
                for (var r in e)
                    i[r] && i[r].length % 2 == 0 ? t[r] = i[r].concat(e[r]) : t[r] = e[r];
                return t
            }
              , G = function(e) {
                for (var i = {}, t = 0; t < e.length; t++)
                    i[e[t].toUpperCase()] = e[t];
                return i
            }
              , V = function(e, i) {
                return typeof e === l && -1 !== H(i).indexOf(H(e))
            }
              , H = function(e) {
                return e.toLowerCase()
            }
              , $ = function(e, i) {
                if (typeof e === l)
                    return e = e.replace(/^\s\s*/, ""),
                    typeof i === s ? e : e.substring(0, 500)
            }
              , J = function(e, i) {
                for (var t, r, o, s, l, d, c = 0; c < i.length && !l; ) {
                    var f = i[c]
                      , p = i[c + 1];
                    for (t = r = 0; t < f.length && !l && f[t]; )
                        if (l = f[t++].exec(e))
                            for (o = 0; o < p.length; o++)
                                d = l[++r],
                                typeof (s = p[o]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, d) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = d ? d.replace(s[1], s[2]) : void 0 : this[s[0]] = d ? s[1].call(this, d, s[2]) : void 0 : 4 === s.length && (this[s[0]] = d ? s[3].call(this, d.replace(s[1], s[2])) : void 0) : this[s] = d || n;
                    c += 2
                }
            }
              , Z = function(e, i) {
                for (var t in i)
                    if (typeof i[t] === u && i[t].length > 0) {
                        for (var r = 0; r < i[t].length; r++)
                            if (V(i[t][r], e))
                                return "?" === t ? n : t
                    } else if (V(i[t], e))
                        return "?" === t ? n : t;
                return e
            }
              , X = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , Y = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, m], [/opios[\/ ]+([\w\.]+)/i], [m, [f, N + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [f, N]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [f, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [f, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [f, "UC" + j]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [f, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [f, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [f, "Smart Lenovo " + j]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure " + j], m], [/\bfocus\/([\w\.]+)/i], [m, [f, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [f, N + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [f, N + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [f, "MIUI " + j]], [/fxios\/([-\w\.]+)/i], [m, [f, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 " + j]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 " + j], m], [/samsungbrowser\/([\w\.]+)/i], [m, [f, R + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], m], [/metasr[\/ ]?([\d\.]+)/i], [m, [f, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[f, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [f, m], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, F], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [f, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [f, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [f, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [f, C + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, C + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [f, "Android " + j]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [f, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [m, Z, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [f, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [f, m], [/(cobalt)\/([\w\.]+)/i], [f, [m, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[w, "amd64"]], [/(ia32(?=;))/i], [[w, H]], [/((?:i[346]|x)86)[;\)]/i], [[w, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[w, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[w, "armhf"]], [/windows (ce|mobile); ppc;/i], [[w, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[w, /ower/, "", H]], [/(sun4\w)[;\)]/i], [[w, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[w, H]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [b, R], [p, g]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [b, R], [p, v]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [b, S], [p, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [b, S], [p, g]], [/(macintosh);/i], [c, [b, S]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [b, T], [p, v]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [b, A], [p, g]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [b, A], [p, v]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [b, U], [p, v]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [b, U], [p, g]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [b, "OPPO"], [p, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [b, "Vivo"], [p, v]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [c, [b, "Realme"], [p, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [b, M], [p, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [b, M], [p, g]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [b, "LG"], [p, g]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [b, "LG"], [p, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [b, "Lenovo"], [p, g]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [b, "Nokia"], [p, v]], [/(pixel c)\b/i], [c, [b, E], [p, g]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [b, E], [p, v]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [b, L], [p, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [b, L], [p, g]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [b, "OnePlus"], [p, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [b, k], [p, g]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [b, k], [p, v]], [/(playbook);[-\w\),; ]+(rim)/i], [c, b, [p, g]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [b, z], [p, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [b, P], [p, g]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [b, P], [p, v]], [/(nexus 9)/i], [c, [b, "HTC"], [p, g]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [b, [c, /_/g, " "], [p, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [b, "Acer"], [p, g]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [b, "Meizu"], [p, v]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [c, [b, "Ulefone"], [p, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, c, [p, v]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, c, [p, g]], [/(surface duo)/i], [c, [b, I], [p, g]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [b, "Fairphone"], [p, v]], [/(u304aa)/i], [c, [b, "AT&T"], [p, v]], [/\bsie-(\w*)/i], [c, [b, "Siemens"], [p, v]], [/\b(rct\w+) b/i], [c, [b, "RCA"], [p, g]], [/\b(venue[\d ]{2,7}) b/i], [c, [b, "Dell"], [p, g]], [/\b(q(?:mv|ta)\w+) b/i], [c, [b, "Verizon"], [p, g]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [b, "Barnes & Noble"], [p, g]], [/\b(tm\d{3}\w+) b/i], [c, [b, "NuVision"], [p, g]], [/\b(k88) b/i], [c, [b, "ZTE"], [p, g]], [/\b(nx\d{3}j) b/i], [c, [b, "ZTE"], [p, v]], [/\b(gen\d{3}) b.+49h/i], [c, [b, "Swiss"], [p, v]], [/\b(zur\d{3}) b/i], [c, [b, "Swiss"], [p, g]], [/\b((zeki)?tb.*\b) b/i], [c, [b, "Zeki"], [p, g]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], c, [p, g]], [/\b(ns-?\w{0,9}) b/i], [c, [b, "Insignia"], [p, g]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [b, "NextBook"], [p, g]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], c, [p, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], c, [p, v]], [/\b(ph-1) /i], [c, [b, "Essential"], [p, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [b, "Envizen"], [p, g]], [/\b(trio[-\w\. ]+) b/i], [c, [b, "MachSpeed"], [p, g]], [/\btu_(1491) b/i], [c, [b, "Rotor"], [p, g]], [/(shield[\w ]+) b/i], [c, [b, "Nvidia"], [p, g]], [/(sprint) (\w+)/i], [b, c, [p, v]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [b, I], [p, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [b, q], [p, g]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [b, q], [p, v]], [/smart-tv.+(samsung)/i], [b, [p, y]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [b, R], [p, y]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, "LG"], [p, y]], [/(apple) ?tv/i], [b, [c, S + " TV"], [p, y]], [/crkey/i], [[c, C + "cast"], [b, E], [p, y]], [/droid.+aft(\w+)( bui|\))/i], [c, [b, k], [p, y]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [b, T], [p, y]], [/(bravia[\w ]+)( bui|\))/i], [c, [b, L], [p, y]], [/(mitv-\w{5}) bui/i], [c, [b, U], [p, y]], [/Hbbtv.*(technisat) (.*);/i], [b, c, [p, y]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[b, $], [c, $], [p, y]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, y]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, c, [p, h]], [/droid.+; (shield) bui/i], [c, [b, "Nvidia"], [p, h]], [/(playstation [345portablevi]+)/i], [c, [b, L], [p, h]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [b, I], [p, h]], [/((pebble))app/i], [b, c, [p, _]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [b, S], [p, _]], [/droid.+; (glass) \d/i], [c, [b, E], [p, _]], [/droid.+; (wt63?0{2,3})\)/i], [c, [b, q], [p, _]], [/(quest( 2| pro)?)/i], [c, [b, F], [p, _]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [p, x]], [/(aeobc)\b/i], [c, [b, k], [p, x]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [c, [p, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [p, g]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, g]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, v]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [b, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [f, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, f]],
                os: [[/microsoft (windows) (vista|xp)/i], [f, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [f, [m, Z, X]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, Z, X], [f, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, W], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, f], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, m], [/\(bb(10);/i], [m, [f, z]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [f, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [f, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [f, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [f, C + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[f, D], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, m], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [f, m]]
            }
              , K = function(e, i) {
                if (typeof e === u && (i = e,
                e = n),
                !(this instanceof K))
                    return new K(e,i).getResult();
                var t = typeof o !== s && o.navigator ? o.navigator : n
                  , r = e || (t && t.userAgent ? t.userAgent : "")
                  , h = t && t.userAgentData ? t.userAgentData : n
                  , y = i ? B(Y, i) : Y
                  , _ = t && t.userAgent == r;
                return this.getBrowser = function() {
                    var e, i = {};
                    return i[f] = n,
                    i[m] = n,
                    J.call(i, r, y.browser),
                    i[d] = typeof (e = i[m]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : n,
                    _ && t && t.brave && typeof t.brave.isBrave == a && (i[f] = "Brave"),
                    i
                }
                ,
                this.getCPU = function() {
                    var e = {};
                    return e[w] = n,
                    J.call(e, r, y.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {};
                    return e[b] = n,
                    e[c] = n,
                    e[p] = n,
                    J.call(e, r, y.device),
                    _ && !e[p] && h && h.mobile && (e[p] = v),
                    _ && "Macintosh" == e[c] && t && typeof t.standalone !== s && t.maxTouchPoints && t.maxTouchPoints > 2 && (e[c] = "iPad",
                    e[p] = g),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {};
                    return e[f] = n,
                    e[m] = n,
                    J.call(e, r, y.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {};
                    return e[f] = n,
                    e[m] = n,
                    J.call(e, r, y.os),
                    _ && !e[f] && h && "Unknown" != h.platform && (e[f] = h.platform.replace(/chrome os/i, D).replace(/macos/i, W)),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return r
                }
                ,
                this.setUA = function(e) {
                    return r = typeof e === l && e.length > 500 ? $(e, 500) : e,
                    this
                }
                ,
                this.setUA(r),
                this
            };
            K.VERSION = "1.0.37",
            K.BROWSER = G([f, m, d]),
            K.CPU = G([w]),
            K.DEVICE = G([c, b, p, h, v, y, g, _, x]),
            K.ENGINE = K.OS = G([f, m]),
            typeof i !== s ? (e.exports && (i = e.exports = K),
            i.UAParser = K) : t.amdO ? n !== (r = (function() {
                return K
            }
            ).call(i, t, i, e)) && (e.exports = r) : typeof o !== s && (o.UAParser = K);
            var Q = typeof o !== s && (o.jQuery || o.Zepto);
            if (Q && !Q.ua) {
                var ee = new K;
                Q.ua = ee.getResult(),
                Q.ua.get = function() {
                    return ee.getUA()
                }
                ,
                Q.ua.set = function(e) {
                    ee.setUA(e);
                    var i = ee.getResult();
                    for (var t in i)
                        Q.ua[t] = i[t]
                }
            }
        }("object" == typeof window ? window : this)
    },
    9690: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__gameFont_4a9947', '__gameFont_Fallback_4a9947'"
            },
            className: "__className_4a9947",
            variable: "__variable_4a9947"
        }
    },
    7587: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__supercellFont_ff1c38', '__supercellFont_Fallback_ff1c38'"
            },
            className: "__className_ff1c38",
            variable: "__variable_ff1c38"
        }
    }
}]);
