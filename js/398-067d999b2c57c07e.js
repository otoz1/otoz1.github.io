(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[398], {
    6861: function(n, e, t) {
        "use strict";
        t.d(e, {
            CookieLink: function() {
                return l
            }
        });
        var a = t(1943)
          , r = t(1735)
          , o = t(7437)
          , c = t(2265)
          , i = function(n) {
            switch (n) {
            case "kr":
                return "ko";
            case "jp":
                return "ja";
            case "cn":
            case "cnt":
                return "zh";
            default:
                return n
            }
        }
          , l = function(n) {
            var e = n.label
              , t = n.locale;
            return (0,
            c.useEffect)(function() {
                function n() {
                    return (n = (0,
                    a._)(function() {
                        var n, e;
                        return (0,
                        r.Jh)(this, function(a) {
                            switch (a.label) {
                            case 0:
                                if (window.OneTrust)
                                    return [3, 2];
                                return [4, new Promise(function(n) {
                                    return setTimeout(n, 100)
                                }
                                )];
                            case 1:
                                return a.sent(),
                                [3, 0];
                            case 2:
                                try {
                                    e = i(t),
                                    null === (n = window.OneTrust) || void 0 === n || n.changeLanguage(e)
                                } catch (n) {
                                    console.warn(n)
                                }
                                return [2]
                            }
                        })
                    })).apply(this, arguments)
                }
                !function() {
                    n.apply(this, arguments)
                }()
            }, [t]),
            (0,
            o.jsx)("a", {
                className: "no-track",
                href: "#",
                onClick: function() {
                    var n;
                    null === (n = window.OneTrust) || void 0 === n || n.ToggleInfoDisplay()
                },
                children: e
            })
        }
    },
    9750: function(n, e, t) {
        "use strict";
        t.d(e, {
            DownloadLinksPlatformSpecific: function() {
                return g
            }
        });
        var a = t(7570)
          , r = t(7029)
          , o = t(7002)
          , c = t(7437)
          , i = t(2265)
          , l = t(6088)
          , s = t.n(l)
          , d = t(212);
        t(2164),
        t(9790);
        var u = function(n, e) {
            switch (n) {
            case "ios":
                return "download/".concat(e, "app-store.svg");
            case "android":
                return "".concat(e, "google-play.png");
            case "amazon":
                return "/images/common/store-logos/en/amazon.png"
            }
        }
          , _ = t(7866)
          , f = t.n(_)
          , p = function(n) {
            var e = Object.entries(n.downloadLinks).map(function(e) {
                var t = (0,
                o._)(e, 2)
                  , a = t[0]
                  , r = t[1]
                  , i = u(a, n.locale);
                return (0,
                c.jsx)("a", {
                    href: r,
                    id: "".concat(a, "-download-link"),
                    children: (0,
                    c.jsx)(d.default, {
                        alt: a,
                        height: 60,
                        width: 200,
                        src: i,
                        placeholder: "empty"
                    })
                }, a)
            })
              , t = e.length;
            return (0,
            c.jsx)("div", {
                className: "".concat(f()["download-links"], " download-links"),
                "data-links-amount": t,
                children: e
            })
        }
          , A = ["ios", "android"]
          , h = new (s())
          , g = function(n) {
            var e = n.downloadLinks
              , t = (0,
            o._)((0,
            i.useState)({
                name: void 0,
                version: void 0
            }), 2)
              , l = t[0]
              , s = t[1];
            (0,
            i.useEffect)(function() {
                s(h.getOS())
            }, []);
            var d = Object.fromEntries(Object.entries(e).filter(function(n) {
                var e = (0,
                o._)(n, 2)
                  , t = e[0];
                if (e[1],
                !l.name)
                    return !1;
                var a = l.name.toLowerCase();
                return !A.includes(a) || t === a
            }));
            return (0,
            c.jsx)(p, (0,
            r._)((0,
            a._)({}, n), {
                downloadLinks: d
            }))
        }
    },
    8794: function(n, e, t) {
        "use strict";
        t.d(e, {
            LanguageDropdown: function() {
                return s
            }
        });
        var a = t(7437)
          , r = t(6463)
          , o = {
            ar: "العربية",
            cn: "简体中文",
            cnt: "繁體中文",
            de: "Deutsch",
            en: "English",
            es: "Espa\xf1ol",
            fa: "فارسی",
            fi: "Suomi",
            fr: "Fran\xe7ais",
            he: "עִברִית",
            id: "Bahasa Indonesia",
            it: "Italiano",
            jp: "日本語",
            kr: "한국어",
            ms: "Bahasa Melayu",
            nl: "Nederlands",
            no: "Norsk",
            pl: "Polski",
            pt: "Portugu\xeas",
            ru: "ру́сский",
            th: "ไทย",
            tr: "T\xfcrk\xe7e",
            vi: "Tiếng Việt"
        }
          , c = {
            jp: "ja",
            kr: "ko",
            cn: "zh",
            cnt: "zh_tw"
        }
          , i = t(1031)
          , l = t.n(i)
          , s = function(n) {
            var e = n.currentLocale
              , t = n.availableLocales
              , i = (0,
            r.usePathname)()
              , s = function(n) {
                if (i.startsWith("/supportcreator")) {
                    var t = c[n] || n
                      , a = c[e] || e
                      , r = i.replace("/".concat(a), "/".concat(t))
                      , o = window.location.search;
                    window.location.href = "".concat(r).concat(null != o ? o : "");
                    return
                }
                var l = i.replace("/".concat(e, "/"), "/".concat(n, "/"))
                  , s = window.location.search;
                window.location.href = "".concat(l).concat(null != s ? s : "")
            };
            if (1 === t.length)
                return null;
            var d = o[e].length;
            return (0,
            a.jsx)("div", {
                className: "language-dropdown-wrapper ".concat(l()["language-dropdown-wrapper"]),
                children: (0,
                a.jsx)("select", {
                    style: {
                        width: "".concat(Math.max(9 * d + 50, 120), "px")
                    },
                    className: "language-dropdown ".concat(l()["language-dropdown"]),
                    onChange: function(n) {
                        return s(n.target.value)
                    },
                    name: "locales",
                    id: "locales",
                    "aria-label": "Select a language",
                    value: e,
                    children: t.map(function(n) {
                        return (0,
                        a.jsx)("option", {
                            value: n,
                            children: o[n]
                        }, n)
                    })
                })
            })
        }
    },
    7178: function(n, e, t) {
        "use strict";
        t.d(e, {
            default: function() {
                return i
            }
        });
        var a = t(7002)
          , r = t(7437)
          , o = t(2265)
          , c = t(5150);
        function i(n) {
            var e, t = n.leadKey, i = n.t, l = (0,
            a._)((0,
            o.useState)(null !== (e = i[null != t ? t : "lead_default"]) && void 0 !== e ? e : i.lead_default), 2), s = l[0], d = l[1], u = (0,
            c.m)();
            return (0,
            o.useEffect)(function() {
                if (!t) {
                    if ("add_friend" === u && i.lead_add_friend) {
                        d(i.lead_add_friend);
                        return
                    }
                    if ("join_clan" === u && i.lead_join_clan) {
                        d(i.lead_join_clan);
                        return
                    }
                    if ("join_team" === u && i.lead_join_team) {
                        d(i.lead_join_team);
                        return
                    }
                    if ("support_creator" === u && i.lead_support_creator) {
                        d(i.lead_support_creator);
                        return
                    }
                    if ("scid_friend" === u && i.lead_scid_friend && d(i.lead_scid_friend),
                    "voucher" === u && i.lead_voucher) {
                        d(i.lead_voucher);
                        return
                    }
                }
            }, [t, u, i.lead_add_friend, i.lead_join_clan, i.lead_join_team, i.lead_support_creator, i.lead_voucher, i.lead_scid_friend]),
            (0,
            r.jsx)("p", {
                children: s
            })
        }
    },
    8238: function(n, e, t) {
        "use strict";
        t.d(e, {
            OpenGameButton: function() {
                return p
            }
        });
        var a = t(7002)
          , r = t(7437)
          , o = t(5302)
          , c = t.n(o)
          , i = t(2265)
          , l = t(7938)
          , s = t.n(l)
          , d = function(n) {
            var e = n.children
              , t = n.link
              , a = n.testId
              , o = n.onClick
              , c = n.id;
            return (0,
            r.jsx)("a", {
                id: c,
                className: "".concat(s().button, " button"),
                href: t,
                onClick: o,
                "data-testid": a,
                children: e
            })
        }
          , u = t(6463)
          , _ = t(5150)
          , f = function(n) {
            var e, t = n.ctaKey, o = n.linkCommandOverride, c = n.t, l = (0,
            a._)((0,
            i.useState)(null !== (e = c[null != t ? t : "cta_default"]) && void 0 !== e ? e : c.cta_default), 2), s = l[0], d = l[1], u = (0,
            _.m)(o);
            return (0,
            i.useEffect)(function() {
                if (!t) {
                    if ("add_friend" === u && c.cta_add_friend) {
                        d(c.cta_add_friend);
                        return
                    }
                    if ("copy_deck" === u && c.cta_copy_deck) {
                        d(c.cta_copy_deck);
                        return
                    }
                    if ("join_clan" === u && c.cta_join_clan) {
                        d(c.cta_join_clan);
                        return
                    }
                    if ("join_team" === u && c.cta_join_team) {
                        d(c.cta_join_team);
                        return
                    }
                    if ("scid_friend" === u && c.cta_scid_friend) {
                        d(c.cta_scid_friend);
                        return
                    }
                    if ("support_creator" === u && c.cta_support_creator) {
                        d(c.cta_support_creator);
                        return
                    }
                    if ("voucher" === u && c.cta_voucher) {
                        d(c.cta_voucher);
                        return
                    }
                }
            }, [t, u, c.cta_add_friend, c.cta_copy_deck, c.cta_join_clan, c.cta_join_team, c.cta_scid_friend, c.cta_support_creator, c.cta_voucher]),
            (0,
            r.jsx)("span", {
                dangerouslySetInnerHTML: {
                    __html: s
                }
            })
        }
          , p = function(n) {
            var e = n.ctaKey
              , t = n.link
              , o = n.onClickLabel
              , l = n.linkCommandOverride
              , s = n.hasDownloadLinks
              , _ = n.t
              , p = (0,
            a._)((0,
            i.useState)(t), 2)
              , A = p[0]
              , h = p[1]
              , g = (0,
            a._)((0,
            i.useState)(!1), 2)
              , m = g[0]
              , w = g[1]
              , k = (0,
            u.usePathname)()
              , v = (0,
            u.useParams)()
              , j = (0,
            a._)((0,
            i.useState)(), 2)
              , x = j[0]
              , y = j[1];
            (0,
            i.useEffect)(function() {
                var n = window.location.search;
                if (v.action) {
                    var e = k.replace("/".concat(v.locale, "/"), "");
                    h("".concat(t).concat(e));
                    return
                }
                if (n) {
                    var a = window.location.search.replace("?", "");
                    if (a.startsWith("clashroyale://")) {
                        h(a);
                        return
                    }
                    h(l ? "".concat(t).concat(l).concat(a) : "".concat(t).concat(a))
                }
            }, [t, l, v.action, v.locale, k]),
            (0,
            i.useEffect)(function() {
                y("open-game-button")
            }, []);
            var b = o && m ? (0,
            r.jsx)("div", {
                className: "".concat(c()["clicked-label"], " clicked-label"),
                children: o
            }) : !m && s ? (0,
            r.jsx)("div", {
                className: c()["download-links-heading"],
                children: _.general_download_game
            }) : null;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(d, {
                    id: "open-game-button",
                    link: A,
                    onClick: function() {
                        setTimeout(function() {
                            w(!0)
                        }, 500)
                    },
                    testId: x,
                    children: (0,
                    r.jsx)(f, {
                        ctaKey: e,
                        t: _
                    })
                }), b]
            })
        }
    },
    5150: function(n, e, t) {
        "use strict";
        t.d(e, {
            m: function() {
                return c
            }
        });
        var a = t(7002)
          , r = t(6463)
          , o = t(2265)
          , c = function(n) {
            var e = (0,
            r.useParams)()
              , t = (0,
            a._)(o.useState("default"), 2)
              , c = t[0]
              , i = t[1];
            return o.useEffect(function() {
                var t = window.location.search;
                if (t) {
                    if (t.includes("addFriend") || t.includes("add_friend")) {
                        i("add_friend");
                        return
                    }
                    if (t.includes("copyDeck")) {
                        i("copy_deck");
                        return
                    }
                    if (t.includes("join_team")) {
                        i("join_team");
                        return
                    }
                    if (t.includes("join_clan")) {
                        i("join_clan");
                        return
                    }
                    if (t.includes("supercell_id")) {
                        i("scid_friend");
                        return
                    }
                    if (t.includes("supportcreator")) {
                        i("support_creator");
                        return
                    }
                    if (t.includes("action") && t.includes("voucher") || (null == n ? void 0 : n.includes("voucher")) || "voucher" === e.action) {
                        i("voucher");
                        return
                    }
                }
            }, [n, e.action]),
            c
        }
    },
    7938: function(n) {
        n.exports = {
            button: "styles_button__DNJ4N"
        }
    },
    7866: function(n) {
        n.exports = {
            extraSmall: "300px",
            small: "576px",
            medium: "768px",
            large: "992px",
            extraLarge: "1200px",
            "download-links": "styles_download-links__y17mc"
        }
    },
    2681: function(n) {
        n.exports = {
            extraSmall: "300px",
            small: "576px",
            medium: "768px",
            large: "992px",
            extraLarge: "1200px",
            footer: "styles_footer__1cZ8q",
            social: "styles_social__J7f1N",
            links: "styles_links__PIaVg",
            "links-wrapper": "styles_links-wrapper__BmrYJ",
            "footer-bottom": "styles_footer-bottom__4Uy_G",
            "bottom-links": "styles_bottom-links__RK3oy"
        }
    },
    1031: function(n) {
        n.exports = {
            "language-dropdown-wrapper": "styles_language-dropdown-wrapper__z8_b8",
            globe: "styles_globe__E9jxy",
            "language-dropdown": "styles_language-dropdown__tj_as"
        }
    },
    5302: function(n) {
        n.exports = {
            "clicked-label": "styles_clicked-label__XpTnN",
            "download-links-heading": "styles_download-links-heading__0ZBue"
        }
    },
    3999: function(n) {
        n.exports = {
            extraSmall: "300px",
            small: "576px",
            medium: "768px",
            large: "992px",
            extraLarge: "1200px",
            main: "styles_main__H_BuV",
            logo: "styles_logo__fO964",
            "deco-section": "styles_deco-section__LmdbE",
            contents: "styles_contents__ElCjD",
            "download-links-heading": "styles_download-links-heading__JzV9U",
            "nested-content": "styles_nested-content__FJZEg"
        }
    },
    9790: function(n, e, t) {
        "use strict";
        t.r(e),
        e.default = {
            src: "/_next/static/media/supercell_logo.73c8fcbc.png",
            height: 84,
            width: 104,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEX9/f34+Pj5+fn4+Pj5+fn7+/v6+vr6+vr4+Pj////a2tr09PS0VHKBAAAADHRSTlPLjrabpq7Bgm0TDi+4QhdHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC5JREFUeJwFwYkBwCAMA7GznYeW/fdFgk5vjzGq2rkQMZKgatxZcPk//YHiM9EDEl8AsbR9t8sAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 6
        }
    },
    2164: function(n, e, t) {
        "use strict";
        t.r(e),
        e.default = {
            src: "/_next/static/media/deco.22569971.png",
            height: 575,
            width: 300,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAASFBMVEUyO4QuN3Q/f/+Yj7pRQme7cWl3Rfk2QIc5QoqShcfPiV5/V0nWkzOQTMK2hotkMIizSe3///+VPsqkReBnH5SokJG4XLKzZJaI0y01AAAAFXRSTlNAUwTquP4SF5Qp3Sb2YaFUkgF+r0rMbMmTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBhQEAIADAoNnd9f+nAnb1QXl30ozZhBwt9ahA0lrivAcn4AMffAE8gLjD5QAAAABJRU5ErkJggg==",
            blurWidth: 4,
            blurHeight: 8
        }
    }
}]);