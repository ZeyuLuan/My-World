!function(a) {// self-execute function expression
    function b(a) {
        return 0 == location.href.indexOf("https") && 0 != a.indexOf("https") && (a = a.replace("http", "https")),
        a
    }
    var c, d, e = "20150805170517",
    f = "http://plugin.bang5mai.com/assets/main",
    g = "http://b5tplugin.b5m.com/assets/main",
    h = "http://b5tcdn.bang5mai.com",
    j = "http://un.114dianxin.com",
    k = "http://p.b5m.com",
    l = "http://ucenter.b5m.com",
    m = "http://clicks2.b5m.com",
    n = "http://cache.b5m.com/cache/service.do",
    o = "http://cart.b5m.com",
    p = "http://s.b5m.com",
    q = "http://tr.bang5mai.com/b5t/__utm.gif",
    r = "http://order.b5m.com";
    0 == location.href.indexOf("https") && (q = "https://tr.b5m.com/b5t/__utm.gif"),
    k = b(k),
    q = b(q),
    f = b(f);
    var s = {
        module_url: f + "/js/b5m.{module}.js?v=" + e,
        getModuleUrl: function(a) {
            return this.module_url.replace(/\{module\}/g, a)
        },
        paths: {
            jquery: {
                path: f + "/js/jquery-1.7.2.min.js",
                _export: function() {
                    return a.$5m ? a.$5m: (a.$5m = a.jQuery.noConflict(!0), a.$5m)
                }
            },
            "jquery-highcharts": {
                path: f + "/js/jquery-highcharts.js",
                _export: function() {
                    return a.$5m = a.jQuery.noConflict(!0),
                    a.$5m
                }
            }
        }
    };
    if (function(e, f) {
        function g(a, b) {
            return v.call(a, b)
        }
        function h(a) {
            return "[object Array]" === x.call(a)
        }
        function i(a, c) {
            var d = document.getElementsByTagName("head")[0],
            e = document.createElement("script");
            e.type = "text/javascript",
            e.charset = "utf-8",
            e.async = !0,
            0 !== a.indexOf("http://") && 0 !== a.indexOf("https://") && (a = k + a),
            a = b(a),
            e.src = a,
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" !== e.readyState && "complete" !== e.readyState || (e.onload = e.onreadystatechange = null, c && c(), e.parentNode.removeChild(e))
            },
            d.appendChild(e)
        }
        function j(a) {
            for (var b = 0,
            c = a.length; c > b; b++) if (!g(y, a[b])) return ! 1;
            return ! 0
        }
        function l(a) {
            if (a) {
                "string" == typeof a && (a = [a]);
                for (var b = 0,
                c = a.length; c > b; b++) g(A, a[b]) || g(y, a[b]) || g(C, a[b]) || (A[a[b]] = !0, z.push(a[b]), setTimeout(function() {
                    p()
                },
                1))
            }
        }
        function m(b) {
            for (var c = b.dependencies || [], d = [], e = 0, f = c.length; f > e; e++) d.push(y[c[e]]);
            return n(b.name, b.fn.apply(a, d)),
            setTimeout(function() {
                t()
            },
            1),
            !0
        }
        function n(a, b) {
            y[a] = b,
            q(),
            t()
        }
        function o(a) {
            if (a) {
                var b = a.name;
                g(C, b) || (C[b] = !0, B.push(a))
            }
        }
        function p(a) {
            if (!E) {
                E = !0,
                "undefined" != typeof a && a || (a = z);
                var b = a.shift();
                if (!b) return void(E = !1);
                var c, d = s.paths[b] || s.getModuleUrl(b);
                "object" == typeof d && (c = d._export, d = d.path),
                d ? i(d,
                function() {
                    "function" == typeof c && n(b, c())
                }) : f("module[" + b + "] wait to export"),
                E = !1,
                p(a)
            }
        }
        function q(a) {
            "undefined" != typeof a && a || (a = B);
            for (var b, c = -1; ++c < a.length;) b = a[c],
            b && (g(y, b.name) ? a[c] = null: j(b.dependencies) && (m(b), a[c] = null))
        }
        function r(b) {
            for (var c = b.dependencies || [], d = [], e = 0, f = c.length; f > e; e++) d.push(y[c[e]]);
            return b.fn.apply(a, d),
            !0
        }
        function t(a) {
            if ("undefined" != typeof a && a || (a = D), 0 !== a.length) for (var b, c = -1; ++c < a.length;) b = a[c],
            b && j(b.dependencies) && (r(b), a[c] = null)
        }
        function u(a) {
            D.push(a)
        }
        var v = Object.prototype.hasOwnProperty,
        w = Object.prototype,
        x = w.toString,
        y = {},
        z = [],
        A = {},
        B = [],
        C = {},
        D = [],
        E = !1; !
        function() {
            "undefined" != typeof jQuery && jQuery().jquery > "1.4.3" && "undefined" != typeof jQuery.ajax && (y.jquery = e.jQuery || e.$, e.$5m = y.jquery)
        } (),
        c = function(a, b, c, d) {
            if (!g(y, a) || d && d.force) {
                if ("function" == typeof b || h(b) && 0 === b.length) return void n(a, b());
                var e = {
                    name: a,
                    dependencies: b,
                    fn: c
                },
                f = e.dependencies;
                return j(f) ? void m(e) : (l(f), void o(e))
            }
        },
        d = function(a, b) {
            if (0 !== arguments.length) {
                if ("function" == typeof a && 1 === arguments.length) return void b();
                var c = {
                    dependencies: a,
                    fn: b
                },
                d = c.dependencies;
                return j(d) ? void r(c) : (l(d), void u(c))
            }
        }
    } (a,
    function(a) {
        window.console && console.log(a)
    }), !a.b5mshoppingassist) {
        var t = a.b5mshoppingassist = {}; !
        function(b) {
            b.define = c,
            b.require = d,
            b.build_no = e,
            b.LOCATION = window.location || document.location,
            b.assets_base_url = f,
            b._ = b.browser = {
                checkBoxModel: function() {
                    if ("undefined" != typeof b.boxModel) return b.boxModel; {
                        var a = document.createElement("div");
                        document.body
                    }
                    return a.style.cssText = "visibility:hidden;border:0;width:1px;height:0;position:static;padding:0px;margin:0px;padding-left:1px;",
                    document.body.appendChild(a),
                    b.boxModel = this.boxModel = 2 === a.offsetWidth,
                    document.body.removeChild(a),
                    a = null,
                    b.boxModel
                },
                isIE6: function() {
                    var a = window.navigator.userAgent.toLowerCase(),
                    b = /(msie) ([\w.]+)/.exec(a);
                    return null != b && b[2] < 7
                } (),
                isIE: function() {
                    var a = window.navigator.userAgent.toLowerCase(),
                    b = /(msie) ([\w.]+)/.exec(a);
                    return null != b
                } (),
                loadCss: function() {
                    if (this.cssLoaded !== !0) {
                        var a = this.checkBoxModel(),
                        c = (a ? "b5m-plugin.css": "b5m-plugin.qks.css") + "?v=" + b.build_no,
                        d = document.createElement("link");
                        d.rel = "stylesheet",
                        d.href = b.assets_base_url + "/css/" + c,
                        d.type = "text/css",
                        document.getElementsByTagName("head")[0].appendChild(d),
                        this.cssLoaded = !0
                    }
                },
                getDomain: function(a) {
                    var c = a || b.LOCATION.href;
                    try {
                        c = c.match(/([-\w]+\.\b(?:net\.cn|com\.hk|com\.cn|com|cn|net|org|cc|tv$|hk)\b)/)[1]
                    } catch(d) {
                        c = b.LOCATION.hostname
                    }
                    return c
                },
                setB5MCookie: function(a, b, c) {
                    if (a) {
                        var d = "";
                        if (c) for (var e in c) d += "&" + e + "=" + c[e]; (new Image).src = k + "/extension.do?method=c&name=" + a + "&value=" + encodeURIComponent(b) + d + "&t=" + (new Date).getTime()
                    }
                }
            },
            b.domain = b._.getDomain(),
            "hao.360.cn" == b.LOCATION.hostname && a.LogHub && (a.LogHub.behavior = function(a, b) { !
                function(a, b) {
                    setTimeout(function() {
                        if (! (a + "").match(/bang5mai|b5m|ruyiso/)) {
                            var b = +new Date + Math.random(),
                            c = "slog" + b,
                            d = window[c] = new Image;
                            d.src = a + "&refer=" + i + "&_t=" + b,
                            d.onload = d.onerror = function() {
                                window[c] = null
                            }
                        }
                    },
                    b || 0)
                } (a, b)
            })
        } (t),
        function(d, i) {
            var t = ["111.com.cn", "12dian.com", "136126.com", "136buy.com", "1626buy.com", "1mall.com", "20aj.com", "228.com.cn", "24dq.com", "360buy.com", "360hqb.com", "360kxr.com", "360mart.com", "360zhai.com", "365.com", "3guo.cn", "4006009207.com", "513523.com", "51buy.com", "yixun.com", "51fanli.com", "51youpin.com", "525j.com.cn", "5366.com", "55bbs.com", "55tuan.com", "5lux.com", "5taoe.com", "7cv.com", "838buy.com", "91pretty.com", "99buy.com.cn", "99read.com", "99vk.com", "afffff.com", "ai356.com", "aimer.com.cn", "amazon.cn", "aoliz.com", "atopi.cn", "bagtree.com", "baidu.com", "bairong.com", "banggo.com", "bearbuy.com.cn", "behui.com", "beifabook.com", "beyond.cn", "binggo.com", "bookall.cn", "bookschina.com", "bookuu.com", "burberry.com", "buy007.com", "buyjk.com", "caomeipai.com", "carinalaukl.com", "cdg2006.com", "chicbaza.com", "chictalk.com.cn", "chinadrtv.com", "coo8.com", "crucco.com", "d1car.com", "d1.com.cn", "dahaodian.com", "dahuozhan.com", "damai.cn", "dangdang.com", "daoyao.com", "daphne.cn", "dazhongdianqi.com.cn", "dhc.net.cn", "dianping.com", "didamall.com", "diyimeili.com", "do93.com", "doin.cn", "domoho.com", "dooland.com", "douban.com", "duitang.com", "duoduofarm.com", "dwgou.com", "easy361.com", "efeihu.com", "egu365.com", "ehaier.com", "eiboa.com", "ej100.cn", "enet.com.cn", "epetbar.com", "epinwei.com", "epkmall.com", "etam.com.cn", "etao.com", "fanrry.cn", "faxianla.com", "fc900.com", "fclub.cn", "fglady.cn", "foryouforme.com", "gaojie.com", "gap.cn", "ggooa.com", "giftmart.com.cn", "giordano.com", "go2am.com", "gome.com.cn", "goodful.com", "gotoread.com", "goujiuwang.com", "gqt168.com", "guang.com", "guangjiela.com", "guopi.com", "hany.cn", "happigo.com", "herbuy.com.cn", "hitao.com", "hmeili.com", "hodo.cn", "homecl.com", "homevv.com", "htjz.com", "huilemai.com", "huimai365.com", "huolibaobao.com", "huolida.com", "hyj.com", "iebaba.com", "ihush.com", "immyhome.com", "imobile.com.cn", "imoda.com", "it168.com", "itruelife.com", "j1923.com", "jacketman.cn", "jd.com", "jd.hk", "jddiy.com", "jianianle.com", "jianke.com", "jiapin.com", "jiuhang.cn", "jiuxian.com", "jockey.cn", "joyeth.com", "jukangda", "jumei.com", "jumeiglobal.com", "jxdyf.com", "k121.com", "kadang.com", "keede.com", "kela.cn", "kimiss.com", "kongfz.cn", "kouclo.com", "ladypk.com", "lafaso.com", "lamiu.com", "laredoute.cn", "lashou.com", "learbetty.com", "lebiao.net", "lecake.com", "ledaojia.com", "leftlady.com", "leho.com", "letao.com", "leyou.com.cn", "lifevc.com", "lifu520.com", "lijiababy.com.cn", "likeface.com", "lingshi.com", "lining.com", "loobag.com", "lookgee.com", "lovo.cn", "lqdjf.com", "luce.com.cn", "lucemall.com.cn", "luckcart.com", "luckigo.com", "lusen.com", "lvhezi.com", "m18.com", "m360.com.cn", "m6go.com", "maiakaweh.com", "maichawang.com", "maidq.com", "maiduo.com", "mailuntai.cn", "maiwazi.com", "maiweila.com", "maoer360.com", "mbaobao.com", "mchepin.com", "meici.com", "meilishuo.com", "meiribuy.com", "meituan.com", "meiyi.cn", "menglu.com", "mfplaza.com", "misslele.com", "miumiu365.com", "mixr.cn", "mmloo.com", "mncake.com", "mogujie.com", "mojing8.com", "mrzero.cn", "mutnam.com", "muyingzhijia.com", "mycoo.cn", "myrainbow.cn", "myt.hk", "nala.com.cn", "nanjiren.com.cn", "necool.com", "new7.com", "newegg.com.cn", "newegg.cn", "no5.com.cn", "nop.cn", "nuanka.cn", "nuomi.com", "ochirly.com", "ogage.cn", "okbuy.com", "okgolf.cn", "okjee.com", "onlylady.com", "onlyts.cn", "orange3c.com", "ouku.com", "oyeah.com.cn", "paipai.com", "paixie.net", "pb89.com", "pcbaby.com.cn", "pchome.net", "pchouse.com.cn", "pclady.com.cn", "pconline.com.cn", "pcpop.com", "pett.cn", "popyj.com", "pufung.com", "pupai.cn", "qinqinbaby.com", "qiwang360.com", "qplmall.com", "qq.com", "quwan.com", "qxian.com", "raccfawa.com", "redbaby.com.cn", "reneeze.com", "ruci.cn", "sasa.com", "s.cn", "sephora.cn", "shopin.net", "skinstorechina.com", "so.com", "soso_bak.com", "strawberrynet.com", "suning.com", "t0001.com", "t3.com.cn", "tangrencun.cn", "tankl.com", "tao3c.com", "taobao.com", "taofanw.com", "taoxie.com", "tee7.com", "tiantian.com", "tmall.com", "tmall.hk", "togj.com", "tokyopretty.com", "tonlion.com", "topnewonline.cn", "trura.com", "tuan800.com", "tymall.com.cn", "u8518.com", "uiyi.cn", "ukool.com.cn", "umanto.com", "uniqlo.cn", "urcosme.com", "uya100.com", "uzgood.com", "v100.com.cn", "vancl.com", "vcotton.com", "vegou.com", "vico.cn", "vivian.cn", "vjia.com", "vzi800.cn", "walanwalan.com", "wangpiao.com", "wbiao.cn", "weibo.com", "weimituan.com", "whendream.com", "wine9.com", "winekee.com", "winenice.com", "winxuan.com", "wl.cn", "womai.com", "wowsai.com", "woxihuan.com", "wumeiwang.com", "x.com.cn", "xiaozhuren.com", "xijie.com", "xiu.com", "yaahe.cn", "yanyue.cn", "yaofang.cn", "yesky.com", "yesmywine.com", "yidianda.com", "yihaodian.com", "yhd.com", "yintai.com", "yizhedian.com", "yohobuy.com", "yoka.com", "yooane.com", "yougou.com", "ywmei.com", "zaihuni.com", "zbird.com", "zgcbb.com", "zhimei.com", "zhuangai.com", "zm7.cn", "zocai.com", "zol.com.cn", "zol.com", "zuomee.com", "zwzhome.com", "lefeng.com", "958shop.com", "china-pub.com", "wanggou.com", "vip.com", "baoyeah.com", "monteamor.com", "qjherb.com", "moonbasa.com", "ing2ing.com", "womai.com", "vmall.com", "1688.com", "etao.com", "milier.com", "xifuquan.com", "sfbest.com", "j1.com", "liebo.com", "esprit.cn", "metromall.com.cn", "pba.cn", "shangpin.com", "handuyishe.com", "secoo.com", "wangjiu.com", "masamaso.com", "vivian.cn", "linkmasa.com", "camel.com.cn", "naruko.com.cn", "sportica.cn", "zhenpin.com", "xiaomi.com", "mi.com", "letv.com", "bosideng.cn", "coolpad.com", "handu.com", "ebay.com", "staples.cn", "feiniu.com", "okhqb.com", "meilele.com", "500.com", "vdian.com", "showjoy.com", "ocj.com.cn", "happigo.com", "111.com.cn", "j1.com", "metao.com", "miyabaobei.com", "ymatou.com"],
            u = ["ctrip.com", "ly.com", "lvmama.com", "tuniu.com", "qunar.com", "uzai.com", "mangocity.com", "elong.com"],
            v = ["taobao.com", "meituan.com", "jumei.com", "jumeiglobal.com", "dianping.com", "gaopeng.com", "58.com", "lashou.com", "pztuan.com", "liketuan.com", "nuomi.com"],
            w = ["ctrip.com", "ly.com", "lvmama.com", "qunar.com", "meituan.com", "jumei.com", "lashou.com", "nuomi.com", "dianping.com", "gaopeng.qq.com", "gaopeng.com", "elong.com", "mangocity.com", "kuxun.cn", "xiu.com", "zhuna.cn", "pztuan.com", "liketuan.com", "hao123.com", "2345.com", "sohu.com", "sogou.com", "duba.com", "qq.com", "rising.cn", "360.cn", "ymatou.com", "xbresearch.com", "114.112.93.100", "55tuan.com", "womai.com", "feiniu.com", "ymatou.com", "lifevc.com", "showjoy.com", "ocj.com.cn", "happigo.com", "111.com.cn", "j1.com", "metao.com", "miyabaobei.com", "zhe800.com", "apple.com", "tieyou.com", "10010.com"],
            x = ["hao123.com", "2345.com", "sogou.com", "duba.com", "qq.com", "rising.cn", "360.cn", "taobao.com", "uc123.com", "msn.com", "114.112.93.100", "114la.com", "0460.com", "hao123.cn", "hao360.cn", "5566.net", "lvse.com", "baimin.com", "1188.com", "kuhao360.com", "6296.com.cn", "baidu.com", "tao123.com", "114.com.cn", "26595.com", "57616.com", "5w.com", "7999.com", "qkankan.com", "6655.com", "3145.com", "155.com", "369.com", "1122.com", "116.com", "tt98.com", "2523.com", "200.net", "wu123.com", "dianxin.cn", "baozipu.com", "dragon-guide.net", "1166.com", "6701.com", "zhaodao123.com", "weiduomei.net", "zzmulu.cn", "vipsheji.cn", "9495.com", "hoho123.com", "ie57.com", "12345good.com", "3393.com", "25home.net", "9456.com", "5515.cc", "1181.com", "hao251.com", "186688.com", "d4000.com", "4488.com", "1616.net", "114la.cn", "ylmf.com"],
            y = ["taobao.com", "jd.com", "yixun.com", "yhd.com", "tmall.com", "tmall.hk", "suning.com", "gome.com.cn", "dangdang.com", "amazon.cn", "sogou.com", "2345.com", "hao123.com", "qzone.qq", "autohome", "xxhh", "letv", "jide123", "pcauto", "auto.sohu", "pps", "bitauto", "duba.com", "rising.cn", "qq.com", "baidu.com", "360.cn", "youku.com", "tudou.com", "iqiyi.com", "sohu.com", "meilishuo.com", "yoka.com", "ymatou.com", "metao.com", "jumei.com", "jd.com"],
            z = [/https:\/\/(site)\.baidu\.com.*/, /https:\/\/(.*)\.taobao.com.*/, /https:\/\/(.*)\.tmall.com.*/];
            if ("https:" == location.protocol) {
                for (var A = 0; A < z.length && !z[A].test(location.href); A++);
                if (A == z.length) return
            }
            var B = document.getElementById("b5mmain");
            B = B.src && B.src.substring(B.src.indexOf("?") + 1);
            var C = B.split("&");
            B = {
                uuid: "",
                source: ""
            };
            for (var D, E = 0,
            F = C.length; F > E; E++) D = C[E].split("="),
            B[D[0]] = D[1] || ""; !
            function() {
                if (!B.acd) {
                    var a = document.getElementById("b5tplugin");
                    try {
                        a && a.getUserUuid() && (B.acd = 0)
                    } catch(b) {}
                }
            } (),
            d.params = B,
            d.trace = {
                main: "",
                tonglei: "",
                ut: 0,
                shortMain: 0,
                sid: "",
                fee: "",
                testflg: ""
            },
            d.flags = {
                isLjBlack: null
            },
            d.user = {},
            c("server",
            function() {
                return {
                    server: b(k),
                    cpsServer: m,
                    orderServer: b(r),
                    cpsCacheServer: n,
                    searchServer: b(p),
                    ucenterserver: b(l),
                    cartServerHttp: o,
                    cartServer: b(o),
                    assets_base_url: b(f),
                    assets_union_url: j,
                    domain: d._.getDomain(),
                    uuid: B.uuid,
                    version: B.version,
                    source: B.source,
                    hostname: d.LOCATION.hostname
                }
            });
            for (var G = ["maxthon3", "firefox", "liebao", "360se", "360jisu", "chrome"], H = G.join(",").indexOf(B.source) > -1, I = d._cln_ = !!B.source.match(/11000|50000|10000|11001/) || H, J = d.isMall = !!t.join(",").match(new RegExp("\\b" + d.domain + "\\b")), K = d.isTour = !!u.join(",").match(new RegExp("\\b" + d.domain + "\\b")), L = d.isSl = !(I || !w.join(",").match(new RegExp("\\b" + d.domain + "\\b")) || d.browser.isIE && B.ie32 != i && !(d.browser.isIE && parseInt(B.ie32, 10) > 0)), M = d.isLv3 = !(I || !x.join(",").match(new RegExp("\\b" + d.domain + "\\b|" + d.LOCATION.hostname)) || d.browser.isIE && B.ie32 != i && !(d.browser.isIE && parseInt(B.ie32, 10) > 0)), N = d.isTuan = !!v.join(",").match(new RegExp("\\b" + d.domain + "\\b")), O = !1, E = 0; E < y.length; E++) if (d.domain.indexOf(y[E]) >= 0) {
                O = !0;
                break
            }
            var P = d.isNav = !(I || !O || "1" === B.nonav);
            if (s.paths.all = {
                path: f + "/js/b5m.plugin.all.js?v=" + e,
                _export: function() {
                    return d
                }
            },
            s.paths.bussCommon = {
                path: f + "/js/b5m.common.js?v=" + e
            },
            s.paths.tg = {
                path: h + "/js/flag.js?v=" + Math.floor((new Date).getTime() / 1e4),
                _export: function() {
                    return window.__5_tg_
                }
            },
            s.paths.sejieall = {
                path: f + "/js/b5m.plugin.sejie.all.js?v=" + e,
                _export: function() {
                    return d
                }
            },
            s.paths["jquery-qrcode"] = {
                path: f + "/js/jquery.qrcode.min.js?v=" + e,
                _export: function() {
                    return a.$5m
                }
            },
            s.paths.rule = {
                path: f + "/rule/sites/" + d.domain + "?v=" + e,
                _export: function() {
                    return d.rule
                }
            },
            d.cookie = {},
            s.paths.env = {
                path: "/extension.do?method=js&buildno=" + e + "&url=" + encodeURIComponent(d.LOCATION.href) + "&acd=" + (B.acd || "") + "&reason=" + (B.reason || "") + "&source=" + B.source + "&uuid=" + B.uuid + "&domain=" + d.domain + "&version=" + B.version + "&site=" + d.domain + (d.browser.isIE ? "&t=" + (new Date).getTime() : ""),
                _export: function() {
                    d.cookie = Function("return " + (d.env.cookie || "{}"))();
                    var a = B._lv,
                    b = d.env.lv || d.cookie.lv || a || "15";
                    return a && "8" != a && (b = a),
                    b = parseInt(b),
                    I && (b = a || "15"),
                    b && (d._lv = b, d.env.lvA = 1 & b || 0, d.env.lvB = 2 & b || 0, d.env.lvC = 4 & b || 0, d.env.lvD = 8 & b || 0),
                    d.cookie.lv || setTimeout(function() {
                        d._.setB5MCookie("lv", d.env.lv, {
                            maxAge: 172800
                        })
                    },
                    1),
                    d.env
                }
            },
            s.paths.nav = {
                path: f + "/js/b5m.nav.js?v=" + e,
                _export: function() {
                    return d.nav
                }
            },
            s.paths.ip = {
                path: "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
                _export: function() {
                    return d.ip = a.remote_ip_info
                }
            },
            s.paths.lv3 = {
                path: g + "/js/b5m.lv3.js?v=" + e
            },
            s.paths.order = {
                path: g + "/js/b5m.order.js?v=" + e
            },
            s.paths.ucenter = {
                path: f + "/modules/ucenter/js/b5m.uc.js?v=" + e
            },
            s.paths.vipAd = {
                path: g + "/js/b5m.vipAd.js?v=" + e
            },
            d.require(["bussCommon"],
            function(a) {
                return d.bussCommon = a,
                1
            }), d.require(["common"],
            function() {
                return 1
            }), d.require(["server"],
            function() {
                d.require(["env", "common"],
                function(a, b) {
                    d.trace.sid = b.getCookie("_5t_trace_sid");
                    var c = b.getCookie("_5t_trace_tms");
                    if (!d.trace.sid || !c) {
                        d.trace.sid = b.md5(d.domain + d.params.uuid + (new Date).getTime()),
                        b.setCookie("_5t_trace_sid", d.trace.sid);
                        var e = (new Date).getTime() + 18e5;
                        b.setCookie("_5t_trace_tms", 1, new Date(e).toUTCString())
                    }
                })
            }), H || I || !L && !J || ("sogou" == B.source ? d.require(["ip"],
            function(a) {
                "\u5317\u4eac" != a.city && d.require(["sl"],
                function(a) {
                    a.run()
                })
            }) : "10005" == B.source && "suning.com" == d.domain ? d.require(["ip"],
            function(a) {
                "\u5357\u4eac" != a.city && d.require(["sl"],
                function(a) {
                    a.run()
                })
            }) : d.require(["sl"],
            function(a) {
                a.run()
            }), M && ("sogou" == B.source ? d.require(["ip"],
            function(a) {
                "\u5317\u4eac" != a.city && d.require(["lv3"],
                function(a) {
                    a.run()
                })
            }) : d.require(["lv3"],
            function(a) {
                a.run()
            }))), d.require(["adv", "server"],
            function(a, b) {
                a.server = b.server,
                a.run()
            }), "baidu.com" == d.domain && d.require(["bd"],
            function(a) {
                a.run()
            }), P && !H && d.require(["jquery-highcharts", "nav", "server", "common"],
            function(a, b, c, d) {
                a.extend(b, {
                    server: c,
                    common: d
                }),
                setTimeout(function() {
                    b.init()
                },
                30)
            }), !J && !K && !N) return void setTimeout(function() {
                try {
                    var a = window.location || document.location,
                    b = q + "?uid=" + (B.uuid || "guest") + "&ct=" + Math.ceil((new Date).getTime() / 1e3) + "&lt=2000&ad=108&il=0&sr=" + window.screen.width + "x" + window.screen.height + "&cl=" + encodeURIComponent(B.source) + "&ver=" + B.version + "&dl=" + encodeURIComponent(a.href) + "&dr=" + encodeURIComponent(document.referrer) + "&isa=0&acd=" + B.acd + "&ul=" + B._lv + "&mid=" + (d.cookie.token ? d.cookie.token: "") + "&sid=" + d.trace.sid; (new Image).src = b
                } catch(c) {}
            },
            2e3);
            d._.loadCss();
            var Q = (new Date).getTime(),
            R = ["jquery-highcharts", "all", "common", "env"];
            e || (R = J || K || N || "b5m.com" == d.domain ? ["jquery-highcharts", "all", "common", "env", "rule"] : ["jquery-highcharts", "all", "common", "env"], /mail\.qq\.com/.test(d.LOCATION.href) || (window.S = d)),
            (J || K || N) && d.require(R,
            function(a, b, c, d) {
                b.console.debug("load time --------------" + ((new Date).getTime() - Q) + "ms"),
                b.require(["vipAd"],
                function(a) { ! b.site.pageInfo.homePage && a.init(),
                    /^(?:http|https):\/\/s\.taobao\.com\/(search|list).*/.test(b.LOCATION.href) && a.initSR()
                }),
                b.require(["bussCommon"],
                function(a) {
                    a.getVipInfo({})
                }),
                b.util.extend(b.constants, B, d, {
                    ucenterserver: l,
                    forwardBase: k + "/",
                    assets_base_url: f + "/",
                    b5t_trace_url: q
                }),
                b.common = c,
                b.filterChain = function() {
                    this.index = -1,
                    this.chain = arguments.length > 0 ? Array.prototype.slice.call(arguments, 0) : [],
                    "slice" in arguments[0] && (this.chain = arguments[0])
                },
                b.filterChain.prototype.register = function(a) {
                    this.chain.push(a)
                },
                b.filterChain.prototype.insert = function(a) {
                    this.chain.splice(this.index + 1, 0, a)
                },
                b.filterChain.prototype.run = function() {
                    this.index++,
                    this.index < this.chain.length && this.chain[this.index].run(this)
                };
                var e = function() {
                    b.console.setLevel("ERROR"),
                    b.service.init();
                    var a = [b.site];
                    d.main && a.push(b.view),
                    d.hp || (b.view.horizontal.global_config.show_price_trend = !1);
                    var c = new b.filterChain(a);
                    c.run(),
                    d.mini && b.require(["miniB5T"],
                    function(a) {
                        a.run()
                    })
                };
                e()
            })
        } (t),
        t.LOCATION.href.match(/http:\/\/cart\.b5m\.com/) && t.require(["order"],
        function(a) {
            a.run(0)
        }),
        t.LOCATION.href.match(/http:\/\/pay\.(stage\.)?b5m\.com\/third\/order\.htm($|\?)/) && t.require(["order"],
        function(a) {
            a.run(1)
        })
    }
} (this);