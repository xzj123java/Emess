/*! xdnphb 2019-03-19 */
define(["jquery", "common", "memory", "dialog", "./index-new-api", "cookie", "nav", "services", "modernizr", "echarts", "regexp", "login-dialog", "niceScroll", "autocomplete"],
function(a) {
    var b = a("jquery"),
    c = a("common"),
    d = a("memory"),
    e = a("dialog"),
    f = a("./index-new-api"),
    g = (a("cookie"), a("nav")),
    h = a("services"),
    i = (a("modernizr"), a("echarts")),
    j = a("regexp"),
    k = a("login-dialog");
    a("niceScroll"),
    a("autocomplete");
    var l, m = "",
    n = c.doNull,
    o = {
        number: "1"
    },
    p = {},
    q = {};
    q.common4tips = function(a) {
        var c = localStorage.getItem("common-tips-index");
        if (c = JSON.parse(c), null == c && (c = {}), b.isEmptyObject(c) && (c = {
            show: !0
        },
        localStorage.setItem("common-tips-index", JSON.stringify(c))), 0 != c.show) {
            var e = a.islogin,
            f = [];
            f.push('<div id="common-tips" style=" position: absolute; height: 100%; width: 100%; background-color: rgba(0,0,0,.5); top: 0; z-index: 1001; " class="common-tips-div"> '),
            f.push('\t<div style="width: 1210px;margin: 0 auto;"> '),
            f.push('\t\t<div style="margin-top: 49px; position: relative; left: ' + (e ? 489 : 425) + 'px;"> '),
            f.push('\t\t\t<span style="background: url(' + d.rootUrl.common + '/assets/common/img/tips/tips.png);width: 65px;height: 35px;float: left;background-position: -324px -685px;"></span>'),
            f.push("\t\t</div> "),
            f.push('\t\t<div class="clear"></div> '),
            f.push('\t\t<div style="display: inline-block;margin-left:  ' + (e ? 300 : 256) + 'px;margin-top: -14px;"> '),
            f.push('\t\t\t<span style="background: url(' + d.rootUrl.common + '/assets/common/img/tips/tips.png);width: 164px;height: 79px;float: left;background-position: -210px -544px;"></span> '),
            f.push("\t\t</div> "),
            f.push('\t\t<div class="clear"></div> '),
            f.push('\t\t<div style="display: inline-block;margin-left: 430px;margin-top: 6px;position: absolute;"> '),
            f.push('\t\t\t<span   class="common-tips-del" style="background: url(' + d.rootUrl.common + '/assets/common/img/tips/tips.png);width: 19px;height: 20px;float: left;background-position: -339px -638px;cursor: pointer;"></span> '),
            f.push("\t\t</div>"),
            f.push('\t\t<div class="clear"></div> '),
            f.push('\t\t<div style=" margin-left: 118px; margin-top: -11px; "> '),
            f.push('\t\t\t<span style="background: url(' + d.rootUrl.common + '/assets/common/img/tips/tips.png);width: 323px;height: 176px;float: left;background-position: 0px -623px;"></span> '),
            f.push("\t\t</div>"),
            f.push("\t</div> "),
            f.push("</div>"),
            b("body").append(f.join("")),
            b("#common-tips").delegate("span.common-tips-del", "click",
            function() {
                b(this).closest("div.common-tips-div").detach()
            }),
            c.show = !1,
            localStorage.setItem("common-tips-index", JSON.stringify(c))
        }
    };
    var r = function() {
        var a = {},
        c = {},
        e = {
            order: b("#new_ade_order"),
            push: b("#new_ade_push"),
            sell: b("#new_ade_sell"),
            todayMoney: b("#today_money"),
            allMoney: b("#all_money"),
            kolList: b("#new_ade_kol"),
            kolInfoBox: b("#kol_info_box"),
            newAdeChose: b("#new_ade_chose"),
            userPushList: b("#ade_push_list"),
            userSellList: b("#ade_sell_list"),
            kolActiveMove: [0, 94, 186, 280, 376, 468, 560, 654],
            kolInfo: [],
            kolItemInfo: {},
            reportSwitch: {}
        };
        return a.setAdeBox = function(a) {
            if (0 == a) var b = ['<div class="index-new-ade-push-action cover">', '<div class="hover-chunk"></div>', '<div class="action-tips">', "<p>鎴戣鎺ュ箍鍛�</p>", "<div>", '<a href="' + d.rootUrl.ade + 'center/#/user/cpc_action/wx_aticle" target="_blank" style="width:100px;">鏌ョ湅鎺ㄥ箍</a>', "</div>", "</div>", "</div>"];
            else var b = ['<div class="index-new-ade-push-action cover">', '<div class="hover-chunk"></div>', '<div class="action-tips">', "<p>鎴戣鍙戝竷骞垮憡浠诲姟</p>", "<div>", '<a href="' + d.rootUrl.ade + 'cpm/establish.html#t1" target="_blank" style="width:70px;">杞枃骞垮憡</a>', '<a href="' + d.rootUrl.ade + 'cpm/establish.html#t3" target="_blank" style="width:70px;">璐寸墖骞垮憡</a>', "</div>", "</div>", "</div>"];
            return b.join("")
        },
        a.setAdeLi = function(a, b, d) {
            return ['<li class="' + (0 == d ? "active": "") + ' clear">', '<div class="left"></div>', "<div>", '<p>鐢ㄦ埛<span style="margin:0 6px 0;">' + c.userNrFixed(n(a.nr_id)) + "</span>" + n(c.checkTime(b, a.intime)).pastTime(b) + "</p>", "<p><span>" + c.userActionFixed(a.type, !0) + '</span><span style="margin:0 4px 0;font-weight:bold;">' + n(a.price) + "</span>鍏�</p>", "</div>", "</li>"].join("")
        },
        a.setMediaBox = function(a) {
            if (0 == a) var b = ['<div class="index-new-ade-sell-action cover">', '<div class="hover-chunk"></div>', '<div class="action-tips">', "<p>鎴戣鍙備笌鍐呭浠樿垂</p>", "<div>", '<a href="' + d.rootUrl.ade + 'center/#/user/cps_market" target="_blank" style="width:60px;">鍗栬绋�</a>', '<a href="' + d.rootUrl.ade + 'center/#/user/cps_market?tag=2" target="_blank" style="width:60px;">鍗栧皬璇�</a>', '<a href="' + d.rootUrl.ade + 'center/#/user/cps_market?tag=3" target="_blank" style="width:60px;">鍗栨极鐢�</a>', "</div>", "</div>", "</div>"];
            else var b = ['<div class="index-new-ade-sell-action cover">', '<div class="hover-chunk"></div>', '<div class="action-tips">', "<p>鎴戣鎴愪负渚涘簲鍟�</p>", "<div>", '<a href="http://jinshuju.newrank.cn/f/Dxivey" target="_blank" style="width:70px;">鍗栧唴瀹�</a>', '<a href="' + d.rootUrl.ade + 'bocai/index.html" target="_blank" style="width:70px;">鍗栧晢鍝�</a>', "</div>", "</div>", "</div>"];
            return b.join("")
        },
        a.setSellLi = function(a, b, d) {
            return ['<li class="' + (0 == d ? "active": "") + ' clear">', '<div class="left"></div>', "<div>", '<p>鐢ㄦ埛<span style="margin:0 8px 0;">' + c.userNrFixed(n(a.nr_id)) + "</span>" + n(c.checkTime(b, a.intime)).pastTime(b) + "</p>", "<p><span>" + c.userActionFixed(a.type, !1) + '</span><span style="margin:0 4px 0;font-weight:bold;">' + n(a.price) + "</span>鍏�</p>", "</div>", "</li>"].join("")
        },
        a.setKolSpan = function(a, b) {
            return '<span class="click-item ' + (0 == b ? "active": "") + '" data-index="' + b + '">' + a.type + "</span>"
        },
        a.setKolItem = function(a, b) {
            for (var d = "",
            e = a.order_start || 4,
            f = 0; f < e; f++) d += '<i class="index-new star"></i>';
            return ['<div class="item ' + (0 == b ? "active-item": "") + '" data-account="' + n(a.account) + '">', '<div class="header-image" style="background:' + String.changeUrl(a.account) + '">' + (a.certified_text ? '<i class="index-new wx-icon"></i>': "") + "</div>", '<p style="color:#333333;">' + n(a.name) + "</p>", '<p style="color:#666666;">NRI锛�' + c.string2NumFixed(a.max_nri, 1) + "</p>", '<div class="kol-info-box clear" data-account="' + n(a.account) + '">', '<div class="kol-info-box-left">', '<div class="header-image" style="background:' + String.changeUrl(a.account) + '"></div>', '<div class="name-line" title="' + n(a.name) + '">' + n(a.name).getSubStr(8) + '<i class="index-new wx-icon-spe ' + q.nrStatus(a.nr_auther_status) + '" title="鏂版鎸囨暟"></i></div>', '<div class="star-line">' + d + "</div>", '<div class="turn-click" data-account="' + n(a.account) + '">鏌ョ湅鎶ヤ环</div>', "</div>", '<div class="kol-info-box-right">', "<p>杩�7澶╂柊姒滄寚鏁拌秼鍔垮浘</p>", '<div id="kol_echarts_' + n(a.account) + '" class="kol-info-box-right-echarts"></div>', '<span class="kilo">1000</span><span class="hundreds">750</span><span class="zero">500</span>', '<div class="echarts-mask"></div>', "</div>", "</div>", "</div>"].join("")
        },
        a.initChart = function(a, c) {
            var d = b(c),
            g = "kol_echarts_" + a,
            h = d.attr("data-account");
            if (e.kolItemInfo[h]) {
                var i = e.kolItemInfo[h];
                q.initChart(g, i)
            } else f.account.getAccountDetail(a,
            function(a) {
                if (a.user) {
                    var b = a.data ? a.data.reverse() : "";
                    e.kolItemInfo[a.user.account] = b,
                    q.initChart(g, b)
                }
            })
        },
        c.initOrder = function() {
            c.initMoney(),
            p == -999 || 0 == p.user.user_type ? (c.initAde(0), c.initMedia(0)) : (c.initAde(1), c.initMedia(1)),
            c.initKol()
        },
        c.initMoney = function() {
            f.scheduleFind.tradeMoney(function(a) {
                c.numRise(e.todayMoney, c.string2NumFixed(a.todayMoney, 0), 0),
                e.allMoney.text(c.string2NumFixed(a.allMoney / 1e8, 2))
            })
        },
        c.numRise = function(a, b, c) {
            if (0 == b) return ! 1;
            var d, e, f = c,
            g = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7],
            h = 4;
            b > 1e7 && (h = 1),
            b > 1e6 && b <= 1e7 && (h = 2);
            var i = setInterval(function() {
                e = b - f > 1e8 ? g[7] : b - f <= 1e8 && b - f > 1e7 ? g[6] : b - f <= 1e7 && b - f > 1e6 ? g[5] : b - f <= 1e6 && b - f > 1e5 ? g[4] : b - f <= 1e5 && b - f > 1e4 ? g[3] : b - f <= 1e4 && b - f > 1e3 ? g[2] : b - f <= 1e3 && b - f > 80 ? g[1] : g[0],
                f += e,
                f >= b && clearInterval(i),
                d = j.formatter.thousandBitSeparator(f),
                a.html(d)
            },
            h)
        },
        c.string2NumFixed = function(a, b) {
            return parseFloat(a).toFixed(b)
        },
        c.userNrFixed = function(a) {
            return a ? a.substring(0, 5) + "****" + a.substring(9, 12) : ""
        },
        c.userActionFixed = function(a, b) {
            var c = "";
            if (b) switch (a) {
            case "1":
                c = "璇㈣喘鏀跺叆";
                break;
            case "2":
                c = "绔炴爣鏀跺叆";
                break;
            case "3":
                c = "璐寸墖鏀跺叆";
                break;
            case "4":
                c = "闃呰璁′环鏀跺叆"
            } else switch (a) {
            case "1":
                c = "璇剧▼鏀跺叆";
                break;
            case "2":
                c = "灏忚鏀跺叆";
                break;
            case "3":
                c = "婕敾鏀跺叆";
                break;
            case "4":
                c = "娓告垙鏀跺叆"
            }
            return c
        },
        c.checkTime = function(a, b) {
            var c = a.getTime(),
            d = b.getTime();
            return c - d > 432e5 ? new Date(c - 432e5) : b
        },
        c.initAde = function(d) {
            f.scheduleFind.getAdsMessages(function(c) {
                b.each(c.list,
                function(b) {
                    e.userPushList.append(a.setAdeLi(this, c.nowTime, b))
                })
            }),
            setTimeout(function() {
                c.setAnimation(e.userPushList)
            },
            1e3),
            e.push.append(a.setAdeBox(d))
        },
        c.initMedia = function(d) {
            f.scheduleFind.getShoppingMessages(function(c) {
                b.each(c.list,
                function(b) {
                    e.userSellList.append(a.setSellLi(this, c.nowTime, b))
                })
            }),
            setTimeout(function() {
                c.setAnimation(e.userSellList)
            },
            1e3),
            e.sell.append(a.setMediaBox(d))
        },
        c.setAnimation = function(a) {
            var c = function(d) {
                var e = a.css("margin-top").split("px")[0],
                f = 2500;
                e -= 1,
                d && (f = 500),
                setTimeout(function() {
                    a.animate({
                        "margin-top": "-40px"
                    },
                    600, "swing",
                    function() {
                        b(a.children("li").get(0)).removeClass("active"),
                        b(a.children("li").get(1)).addClass("active");
                        var d = b(a.children("li").get(0)).clone();
                        b(a.children("li").get(0)).remove(),
                        a.append(d),
                        a.css("margin-top", 20),
                        c()
                    })
                },
                f)
            };
            c(!0)
        },
        c.bindKolHover = function() {
            e.kolList.find("span.click-item").bind("click",
            function() {
                var a = b(this).attr("data-index");
                c.setKolActive(a),
                c.initKolItem(e.kolInfo[a].list, a)
            })
        },
        c.setKolActive = function(a) {
            var c = e.kolActiveMove[a];
            e.newAdeChose.css("left", c),
            e.kolList.find("span.click-item").removeClass("active"),
            b(e.kolList.find("span.click-item")[a]).addClass("active")
        },
        c.initKolItem = function(c, e) {
            var f = b("div.kol-info-list-active"),
            g = f.attr("data-index"),
            h = b(".ade-kol-change-box");
            if (g != -1 ? g - e > 0 ? (f.removeClass("kol-info-list-active"), h.width(1716), h.css("left", -858), h.prepend('<div class="kol-info-list kol-info-list-active" data-index="' + e + '"></div>')) : g - e < 0 && (h.width(1716), f.removeClass("kol-info-list-active"), h.append('<div class="kol-info-list kol-info-list-active" data-index="' + e + '"></div>')) : f.attr("data-index", e), g != e) {
                f = b("div.kol-info-list-active");
                for (var i = 0; i < c.length; i++) b("div.kol-info-list-active").append(a.setKolItem(c[i], i)),
                0 == i && a.initChart(c[i].account, f.find("div.item")[0]);
                if (f.find("div.item").unbind("hover").hover(function() {
                    var c = this;
                    this.timer = setTimeout(function() {
                        b(c).hasClass("active-item") || a.initChart(b(c).attr("data-account"), c),
                        f.find("div.item").removeClass("active-item"),
                        b(c).addClass("active-item")
                    },
                    200)
                },
                function() {
                    clearTimeout(this.timer)
                }), f.find("div.kol-info-box").unbind("click").bind("click",
                function() {
                    var a = b(this).attr("data-account");
                    window.open(d.rootUrl.ade + "enquire/select.html?account=" + a)
                }), f.find("div.turn-click").unbind("click").bind("click",
                function(a) {
                    var c = b(this).attr("data-account");
                    window.open(d.rootUrl.ade + "enquire/select.html?account=" + c),
                    a.stopImmediatePropagation()
                }), g != -1) {
                    var j = 0;
                    g < e && (j = -1),
                    h.animate({
                        left: 858 * j
                    },
                    400, "swing",
                    function() {
                        f.siblings("div").remove(),
                        h.width(858),
                        h.css("left", 0)
                    })
                }
            }
        },
        c.initKolChangeItem = function(c, e) {
            var f = e;
            f.html("");
            for (var g = 0; g < c.length; g++) f.append(a.setKolItem(c[g], g)),
            0 == g && a.initChart(c[g].account, f.find("div.item")[0]);
            f.find("div.item").unbind("hover").hover(function() {
                var c = this;
                this.timer = setTimeout(function() {
                    b(c).hasClass("active-item") || a.initChart(b(c).attr("data-account"), c),
                    f.find("div.item").removeClass("active-item"),
                    b(c).addClass("active-item")
                },
                200)
            },
            function() {
                clearTimeout(this.timer)
            }),
            f.find("div.kol-info-box").unbind("click").bind("click",
            function() {
                var a = b(this).attr("data-account");
                window.open(d.rootUrl.ade + "enquire/select.html?account=" + a)
            })
        },
        q.initChart = function(a, b) {
            var d = i.init(document.getElementById(a)),
            e = [],
            f = [];
            if (!b) return ! 1;
            for (var g = 0; g < b.length; g++) e.push(1),
            f.push(c.string2NumFixed(b[g].new_rank_index_mark, 1));
            var h = {
                grid: {
                    left: "10%",
                    right: "5%",
                    top: "18%",
                    bottom: "24%"
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "line",
                        lineStyle: {
                            color: "#fff",
                            opacity: 0
                        }
                    },
                    backgroundColor: "#fff",
                    textStyle: {
                        color: "#666666",
                        fontSize: 12
                    },
                    borderWidth: 1,
                    borderColor: "#ffc300",
                    padding: [5, 10],
                    formatter: function(a) {}
                },
                xAxis: {
                    show: !1,
                    type: "category",
                    data: e,
                    axisLine: {
                        lineStyle: {
                            color: "#d0d0d0"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#999999"
                        }
                    },
                    axisTick: {
                        textStyle: {
                            color: "#d0d0d0"
                        }
                    }
                },
                yAxis: {
                    min: "500",
                    max: "1000",
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    nameTextStyle: {
                        color: "#fff"
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            type: "solid",
                            color: "#d0d0d0"
                        }
                    },
                    axisTick: {
                        show: !1
                    },
                    splitNumber: 2,
                    interval: 250
                },
                series: [{
                    name: "鏂版鎸囨暟",
                    type: "line",
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    hoverAnimation: !1,
                    cursor: "none",
                    itemStyle: {
                        normal: {
                            color: "rgba(254,199,19,0.8)"
                        }
                    },
                    label: {
                        normal: {
                            show: !1,
                            position: "top",
                            textStyle: {
                                color: "rgba(254,199,19,0.8)",
                                fontSize: 12
                            }
                        }
                    },
                    data: f,
                    animationEasing: "quarticOut"
                }]
            };
            d.setOption(h)
        },
        q.nrStatus = function(a) {
            return "2" != a && "1" != a ? "display-none": "2" == a ? "valid": "1" == a ? "expire": void 0
        },
        c.initKol = function() {
            f.scheduleFind.kolListByHome(function(b) {
                e.kolInfo = b,
                e.kolList.html("");
                for (var f = 0; f < e.kolInfo.length; f++) e.kolList.append(a.setKolSpan(e.kolInfo[f], f));
                e.kolList.append('<span><a href="' + d.rootUrl.ade + 'enquire/select.html" target="_blank">鏇村</a></span>'),
                c.bindKolHover(),
                c.initKolItem(e.kolInfo[0].list, 0)
            })
        },
        {
            init: function(a) {
                c.initOrder(a)
            },
            numRise: c.numRise,
            string2NumFixed: c.string2NumFixed
        }
    } ();
    g.setNew(),
    g.new_index_init(function(a) {
        p = a,
        r.init(),
        a == -999 ? (b(".index-new-bang-custom").click(function(a) {
            a.stopImmediatePropagation(),
            e.showLoginTip("瀹氬埗姒滃崟")
        }), b("#a_spe").attr("href", d.rootUrl.ade + "center/#/index/"), b("a.zmb").unbind("click").bind("click",
        function(a) {
            a.preventDefault(),
            window.open(d.rootUrl.ade + "center/#/index/")
        }), b("#zmb-service").unbind("click").bind("click",
        function(a) {
            a.preventDefault();
            var c = "",
            d = "";
            c = b("<a href='http://urlort.cn/rgqC1e' target='_blank'></a>").get(0),
            d = document.createEvent("MouseEvents"),
            d.initEvent("click", !0, !0),
            c.dispatchEvent(d),
            c.remove()
        }), b("#cps").unbind("click").bind("click",
        function(a) {
            a.preventDefault(),
            k.shownewLogin()
        })) : (b(".index-new-bang-custom").click(function(a) {
            a.stopImmediatePropagation(),
            window.open("/account/user/ranklist.html")
        }), p.user.user_type >= 100 || p.user.user_type == -1 ? (b("#nr_ade").attr("href", d.rootUrl.ade + "center/#/index/"), b("#a_spe").attr("href", d.rootUrl.ade + "center/#/index/")) : (b("#a_spe").attr("href", d.rootUrl.ade + "center/#/user/"), b("#nr_ade").attr("href", d.rootUrl.ade + "center/#/user/")), b("a.zmb").unbind("click").bind("click",
        function(a) {
            a.preventDefault();
            var c = "",
            e = "";
            c = p.user.user_type >= 100 || p.user.user_type == -1 ? b("<a href='" + d.rootUrl.ade + "center/#/index/' target='_blank'></a>").get(0) : b("<a href='" + d.rootUrl.ade + "center/#/user/cpc_action/wx_aticle' target='_blank'></a>").get(0),
            e = document.createEvent("MouseEvents"),
            e.initEvent("click", !0, !0),
            c.dispatchEvent(e),
            c.remove()
        }), b("#zmb-service").unbind("click").bind("click",
        function(a) {
            a.preventDefault();
            var c = "",
            d = "";
            c = p.user.user_type >= 100 || p.user.user_type == -1 ? b("<a href='http://urlort.cn/rgqC1e' target='_blank'></a>").get(0) : b("<a href='http://urlort.cn/rgqDc2' target='_blank'></a>").get(0),
            d = document.createEvent("MouseEvents"),
            d.initEvent("click", !0, !0),
            c.dispatchEvent(d),
            c.remove()
        }), b("#cps").unbind("click").bind("click",
        function(a) {
            a.preventDefault();
            var c = "",
            e = "";
            c = p.user.user_type >= 100 || p.user.user_type == -1 ? b("<a href='http://jinshuju.newrank.cn/f/Dxivey' target='_blank'></a>").get(0) : b("<a href='" + d.rootUrl.ade + "center/#/user/cps_market' target='_blank'></a>").get(0),
            e = document.createEvent("MouseEvents"),
            e.initEvent("click", !0, !0),
            c.dispatchEvent(e),
            c.remove()
        })),
        g.initNewSearch(!1),
        t()
    });
    var s = function(a) {
        var c = 0;
        return setInterval(function() {
            c++,
            b(".index-new-rewen .index-new-info-content").html("").append(a["" + c]),
            1 == c ? (o.number = 1, b(".index-new-rewen-circle-one").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-two,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked")) : 2 == c ? (o.number = 1, b(".index-new-rewen-circle-two").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked")) : 3 == c && (c = 0, o.number = 3, b(".index-new-rewen-circle-three").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-two").removeClass("index-new-rewen-circle-checked"))
        },
        4e3)
    },
    t = function() {
        b("#txt_account").autocomplete({
            autoFocus: !1,
            delay: 200,
            minLength: 0,
            source: [],
            isChn: function(a) {
                return /^[\u4e00-\u9fa5]+(\w|[\u4e00-\u9fa5])+$/i.test(a)
            },
            sortArr: function(a, b, c) {
                return new Function("a", "b", "return a." + a + " > b." + a + " ? 1 : a." + a + "<b." + a + " ? -1: a." + b + ">b." + b + " ? 1 : a." + b + "<b." + b + " ? -1:  a." + c + ">b." + c + " ? -1 : a." + c + "<b." + c + " ? 1:0")
            },
            css: function(a) {
                a.css({
                    margin: "-3px -1px",
                    "font-size": "12px"
                })
            },
            select: function(a, c) {
                a.stopPropagation();
                var e = b(this),
                f = c.item.value;
                return f = f.substring(f.indexOf("(") + 1, f.indexOf(")")),
                e.val(f),
                window.location.href = d.rootUrl.main + "public/info/search.html?value=" + encodeURIComponent(f) + "&isBind=false",
                !1
            },
            focus: function(a, c) {
                var d = c.item.value;
                try {
                    c.item.value = b(b(d)[0]).text()
                } catch(e) {}
            },
            search: function(a, c) {
                a.stopPropagation();
                var d = b(this),
                e = d.autocomplete("option"),
                g = e.isChn,
                h = e.sortArr,
                i = b.trim(d.val());
                g(i) && f.account.getAutocompleteAccount(i,
                function(a) {
                    var c = [],
                    e = [];
                    b.each(a,
                    function() {
                        var a = this,
                        b = a.name,
                        d = a.weekLog1pmark ? parseFloat(a.weekLog1pmark).toFixed(1) : "--/-",
                        e = ['<div style="float: left">', b + "(" + a.account + ")", "</div>", '<div style="color: #fd8c25; float: right; ">', "<span>" + d + "</span>", "</div >"];
                        c.push({
                            name: e.join(""),
                            count: b.indexOf(i),
                            length: b.length,
                            weekLog1pmark: a.weekLog1pmark ? a.weekLog1pmark: 0
                        })
                    }),
                    c.sort(h("count", "length", "weekLog1pmark")),
                    b.each(c,
                    function() {
                        e.push(this.name)
                    }),
                    d.autocomplete("option", "source", e)
                })
            }
        })
    }; (function() {
        var a = [{
            logo_title: "寰俊鍏紬骞冲彴",
            logo_url: "https://mp.weixin.qq.com/"
        },
        {
            logo_title: "寰俊缃戦〉鐗�",
            logo_url: "http://wx.qq.com"
        },
        {
            logo_title: "寰俊灏忕▼搴�",
            logo_url: "https://mp.weixin.qq.com/cgi-bin/wx"
        },
        {
            logo_title: "鏂版氮寰崥",
            logo_url: "http://weibo.com/"
        },
        {
            logo_title: "浼侀箙鍙�",
            logo_url: "https://om.qq.com/userAuth/index"
        },
        {
            logo_title: "澶存潯鍙�",
            logo_url: "http://mp.toutiao.com/login/?redirect_url=%2F"
        },
        {
            logo_title: "娣樺疂杈句汉",
            logo_url: "https://daren.taobao.com"
        },
        {
            logo_title: "鐧惧鍙�",
            logo_url: "https://baijiahao.baidu.com"
        },
        {
            logo_title: "澶ч奔鍙�",
            logo_url: "http://mp.uc.cn/index.html"
        },
        {
            logo_title: "鏂版氮鐪嬬偣",
            logo_url: "http://mp.sina.com.cn/?vt=4"
        },
        {
            logo_title: "澶ч鍙�",
            logo_url: "http://zmt.ifeng.com"
        },
        {
            logo_title: "缃戞槗濯掍綋",
            logo_url: "http://dy.163.com/wemedia/login.html"
        },
        {
            logo_title: "鎼滅嫄濯掍綋",
            logo_url: "http://mp.sohu.com/"
        },
        {
            logo_title: "鐣岄潰",
            logo_url: "http://www.jiemian.com/"
        },
        {
            logo_title: "涓€鐐硅祫璁�",
            logo_url: "http://www.yidianzixun.com/"
        },
        {
            logo_title: "鍠滈┈鎷夐泤FM",
            logo_url: "http://www.ximalaya.com/"
        },
        {
            logo_title: "铚昏湏FM",
            logo_url: "http://qingting.fm/"
        },
        {
            logo_title: "浼侀箙FM",
            logo_url: "https://fm.qq.com/"
        },
        {
            logo_title: "鑽旀灊FM",
            logo_url: "http://www.lizhi.fm/"
        },
        {
            logo_title: "蹇紶鍙�",
            logo_url: "http://kuaichuan.360.cn/"
        },
        {
            logo_title: "鎼滅嫍寰俊",
            logo_url: "http://weixin.sogou.com/"
        }],
        e = 0,
        i = 0;
        b.each(a,
        function(a) { (a > 0 && a <= 6 || a > 7 && a <= 13 || a > 14 && a <= 20) && (e += -144),
            7 == a && (e = 0, i = -72),
            14 == a && (e = 0, i = -144),
            b(".index-new-daohang-top-logo-box").append('<div style="background-position:' + e + "px  " + i + 'px;"  class="index-new-daohang-logo-box platform-pic"><a href="' + this.logo_url + '" target="_blank"><div class="index-new-daohang-logo-bg"></div><span class="index-new-daohang-logo-text">' + this.logo_title + "</span></a></div>")
        });
        var j = function(a) {
            l && clearInterval(l);
            var c = {
                1 : [],
                2 : [],
                3 : []
            };
            b.each(a,
            function(a) {
                a += 1;
                var d = this,
                e = String.changeUrl(d.account),
                f = n(d.title);
                f.getActualLength() > 50 && (f = f.getSubStr(50));
                var g = n(d.content);
                g.getActualLength() > 56 && (g = g.getSubStr(56));
                var h, i = "index-new-rewen-content-box " + (a % 4 != 0 ? "index-new-rewen-content-box-border": ""),
                j = [["ss", "鏃朵簨"], ["mgs", "姘戠敓"], ["cf", "璐㈠瘜"], ["kj", "绉戞妧"], ["cy", "鍒涗笟"], ["qc", "姹借溅"], ["ls", "妤煎競"], ["zc", "鑱屽満"], ["jy", "鏁欒偛"], ["xs", "瀛︽湳"], ["zw", "鏀垮姟"], ["qy", "浼佷笟"], ["wh", "鏂囧寲"], ["bk", "鐧剧"], ["jk", "鍋ュ悍"], ["shs", "鏃跺皻"], ["ms", "缇庨"], ["sj", "涔愭椿"], ["lx", "鏃呰"], ["ym", "骞介粯"], ["qg", "鎯呮劅"], ["ty", "浣撳ū"], ["mt", "缇庝綋"], ["zs", "鏂囨憳"]],
                k = [],
                l = [];
                b.each(j,
                function(a) {
                    k.push(this[1]),
                    l.push(this[0]),
                    n(d.rank_name) == k[a] && (h = l[a])
                }),
                h = "public/info/hot.html?period=day&category=" + h,
                b(document).delegate("#index-new-rewen-type-id-" + a, "click",
                function(a) {
                    a.stopPropagation(),
                    window.open(b(this).attr("type-url"))
                });
                var m = ['<div data-flag="' + (a % 4 == 0 ? "1": "2") + '"  class="index-new-rewen-content-box-link" data-url=' + n(d.url) + ">", '<div class="' + i + ' ">', '<div class="index-new-rewen-title">', '<a target="_blank">' + f + "</a>", "</div>", '<div class="index-new-rewen-content">', '<a target="_blank">' + g + "</a>", "</div>", '<div class="index-new-rewen-content-bottom">', '<div class="index-new-rewen-tx-div">', '<i class="index-new-rewen-img"></i>', '<i class="index-new index-new-rewen-img-yuan"></i>', "</div>", '<span class="index-new-rewen-source">' + n(d.author) + "</span>", '<span class="index-new-rewen-type" id="index-new-rewen-type-id-' + a + '" type-url=' + h + ">" + n(d.rank_name) + "</span>", "</div>", "</div>", "</div>", a % 4 == 0 ? "<div class='index-new-rewen-middle-line'><div>": ""],
                o = b(m.join(""));
                o.find(".index-new-rewen-img").css("background", e),
                a <= 8 ? c[1].push(o) : a <= 16 ? c[2].push(o) : c[3].push(o)
            }),
            b(".index-new-rewen .index-new-info-content").html(c[1]),
            l = s(c),
            b(".index-new-rewen .index-new-info-content").on("mouseover",
            function() {
                clearInterval(l)
            }),
            b(".index-new-rewen .index-new-info-content").on("mouseout",
            function() {
                l = s(c)
            }),
            b(".index-new-rewen").on("mouseover",
            function() {
                b(".index-new-rewen-switch-left,.index-new-rewen-switch-right").show()
            }),
            b(".index-new-rewen").on("mouseout",
            function() {
                b(".index-new-rewen-switch-left,.index-new-rewen-switch-right").hide()
            }),
            b(document).delegate(".index-new-rewen-circle-one", "click",
            function() {
                o.number = 1,
                b(".index-new-rewen .index-new-info-content").html(c[1]),
                b(".index-new-rewen-circle-one").addClass("index-new-rewen-circle-checked"),
                b(".index-new-rewen-circle-two,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked"),
                clearInterval(l)
            }),
            b(document).delegate(".index-new-rewen-circle-two", "click",
            function() {
                o.number = 2,
                b(".index-new-rewen .index-new-info-content").html(c[2]),
                b(".index-new-rewen-circle-two").addClass("index-new-rewen-circle-checked"),
                b(".index-new-rewen-circle-one,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked"),
                clearInterval(l)
            }),
            b(document).delegate(".index-new-rewen-circle-three", "click",
            function() {
                o.number = 3,
                b(".index-new-rewen .index-new-info-content").html(c[3]),
                b(".index-new-rewen-circle-three").addClass("index-new-rewen-circle-checked"),
                b(".index-new-rewen-circle-one,.index-new-rewen-circle-two").removeClass("index-new-rewen-circle-checked"),
                clearInterval(l)
            }),
            b(document).delegate(".index-new-rewen-switch-right", "click",
            function() {
                var a = parseInt(o.number);
                1 == a ? (o.number = a + 1, b(".index-new-rewen .index-new-info-content").html(c[2]), b(".index-new-rewen-circle-two").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked")) : 2 == a ? (o.number = a + 1, b(".index-new-rewen .index-new-info-content").html(c[3]), b(".index-new-rewen-circle-three").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-two").removeClass("index-new-rewen-circle-checked")) : 3 == a && (o.number = 1, b(".index-new-rewen .index-new-info-content").html(c[1]), b(".index-new-rewen-circle-one").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-two,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked"))
            }),
            b(document).delegate(".index-new-rewen-switch-left", "click",
            function() {
                var a = parseInt(o.number);
                1 == a ? (o.number = 3, b(".index-new-rewen .index-new-info-content").html(c[3]), b(".index-new-rewen-circle-three").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-two").removeClass("index-new-rewen-circle-checked")) : 2 == a ? (o.number = 1, b(".index-new-rewen .index-new-info-content").html(c[1]), b(".index-new-rewen-circle-one").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-two,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked")) : 3 == a && (o.number = 2, b(".index-new-rewen .index-new-info-content").html(c[2]), b(".index-new-rewen-circle-two").addClass("index-new-rewen-circle-checked"), b(".index-new-rewen-circle-one,.index-new-rewen-circle-three").removeClass("index-new-rewen-circle-checked"))
            })
        },
        k = function() {
            f.indexNew.hotArticle(function(a) {
                j(a)
            })
        },
        q = function() {
            f.indexNew.searchNotice(function(b) {
                a(b.list)
            });
            var a = function(a) {
                var e = {
                    1 : []
                },
                f = b(".index-new-banner-notice-span");
                b.each(a,
                function(a) {
                    var c = this,
                    d = n(c.title),
                    f = ["<li>", '<a title="' + c.title + '" class="notice-title" data="' + c.url + '"><i></i>' + d + "</a>", "</li>"],
                    g = b(f.join(""));
                    a <= 3 && e[1].push(g)
                }),
                f.html(e[1]),
                c(),
                d(f)
            },
            c = function() {
                b("a.notice-title").unbind("click").bind("click",
                function(a) {
                    var c = b(this).attr("data");
                    c && window.open(c),
                    a.stopImmediatePropagation()
                })
            },
            d = function(a) {
                var d = function() {
                    var e = a.css("margin-top").split("px")[0];
                    e -= 1,
                    setTimeout(function() {
                        a.animate({
                            "margin-top": "-38px"
                        },
                        600, "swing",
                        function() {
                            var e = b(a.children("li").get(0)).clone(),
                            f = b(a.children("li").get(1)).clone();
                            b(a.children("li").get(0)).remove(),
                            b(a.children("li").get(0)).remove(),
                            a.append(e),
                            a.append(f),
                            c(),
                            a.css("margin-top", 0),
                            d()
                        })
                    },
                    4e3)
                };
                d()
            }
        },
        r = function() {
            f.indexNew.searchCmsMedia(function(a) {
                var c = a.messageList;
                b.each(c,
                function(a) {
                    var c = this,
                    d = n(c.insert_time);
                    d.length > 10 && (d = d.substring(0, 10));
                    var e = 5 == a ? "index-new-zixun-list-box-last": "",
                    f = 0 == a ? "index-new-zixun-list-box-first": "",
                    g = ['<div class="index-new-zixun-list-box ' + e + " " + f + '" data-url="' + n(c.url) + '"><div class="index-new-zixun-title-box"><a class="index-new-zixun-title" title="' + c.title + '" target="_blank">' + n(c.title) + ' </a></div><div class="index-new-zixun-content-box"><a class="index-new-zixun-content" title="' + c.summary + '" target="_blank">' + n(c.summary) + '</a></div><span class="index-new-zixun-author">' + n(c.author) + '</span><span class="index-new-zixun-date">' + d + "</span>" + (1 == c.appletflag ? '<span class="index-new-zixun-mini">灏忕▼搴�</span>': "") + "</div>"];
                    a >= 2 && a <= 5 && b("#zixun_box div.content-list").append(g)
                }),
                b("div.index-new-zixun-list-box").unbind("click").bind("click",
                function(a) {
                    window.open(b(this).attr("data-url"))
                }),
                b("span.index-new-zixun-mini").unbind("click").bind("click",
                function(a) {
                    a.stopPropagation(),
                    window.open("/public/news.html#mini")
                });
                var e = n(c[0] ? c[0].title: ""),
                f = n(c[1] ? c[1].title: "");
                b("#zixun_box div.image-part").append('<a href="' + (c[0] ? c[0].url: "") + '" target="_blank"><div class="index-new-zixun-img" style="margin-bottom:15px">' + (c[0] && 1 == c[0].appletflag ? '<object><a class="index-new-zixun-mini-icon" href="/public/news.html#mini" target="_blank"><span>灏忕▼搴�</span></a></object>': "") + '<img src="' + (c[0] ? n(c[0].cms_media_img) : "") + '" style="width:300px; height:160px"/><div class="index-new image-part-title" title="' + e + '"><span>' + e.getSubStr(42) + '</span></div></div></a><a href="' + (c[1] ? c[1].url: "") + '" target="_blank"><div class="index-new-zixun-img">' + (c[1] && 1 == c[1].appletflag ? '<object><a class="index-new-zixun-mini-icon" href="/public/news.html#mini" target="_blank"><span>灏忕▼搴�</span></a></object>': "") + '<img src="' + (c[1] ? n(c[1].cms_media_img) : "") + '" style="width:300px; height:160px"/><div class="index-new image-part-title" title="' + f + '"><span>' + f.getSubStr(42) + "</span></div></div></a>"),
                b.each(a.regulationList,
                function(a) {
                    var c = this;
                    n(c.title);
                    b(".index-new-guize-content").append('<li><a title="' + c.title + '" href="' + c.url + '" target="_blank">' + n(c.title) + "</a></li>")
                });
                var g = [],
                h = a.informationList;
                b.each(h,
                function(a) {
                    var b = this,
                    c = n(b.insert_time),
                    d = ['<div class="new-information-item" data-url="' + n(b.url) + '">', '<p style="color:#343434;">' + n(b.title) + "</p>", '<p style="color:#999999;font-size:12px;margin-top:6px;">' + c.pastTime() + "</p>", 1 == b.appletflag ? '<div class="chose-mini"></div>': '<div class="chose"></div>', "</div>"];
                    g.push(d.join(""))
                }),
                b("#information_content").append(g.join("")),
                b("#information_content").append('<a href="' + d.rootUrl.main + 'public/news.html?#qingbao" target="_blank" class="check-for-more">鏌ョ湅鏇村&gt;&gt;</a>'),
                b("#information_content").find(".new-information-item").unbind("click").bind("click",
                function() {
                    window.open(b(this).attr("data-url"))
                }),
                b(".nice-scroll").niceScroll({
                    cursorcolor: "#cccccc",
                    cursoropacitymin: 0,
                    cursoropacitymax: 1,
                    cursorwidth: "2px",
                    cursorborder: "1px solid #fff",
                    cursorborderradius: "2px",
                    zindex: 2,
                    scrollspeed: 60,
                    mousescrollstep: 40,
                    touchbehavior: !1,
                    hwacceleration: !0,
                    boxzoom: !1,
                    dblclickzoom: !0,
                    gesturezoom: !0,
                    grabcursorenabled: !0,
                    autohidemode: "leave",
                    background: "",
                    iframeautoresize: !0,
                    cursorminheight: 20,
                    preservenativescrolling: !0,
                    railoffset: !1,
                    bouncescroll: !1,
                    spacebarenabled: !0,
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    disableoutline: !0,
                    horizrailenabled: !0,
                    railalign: "right",
                    railvalign: "bottom",
                    enabletranslate3d: !0,
                    enablemousewheel: !0,
                    enablekeyboard: !0,
                    smoothscroll: !0,
                    sensitiverail: !0,
                    enablemouselockapi: !0,
                    cursorfixedheight: !1,
                    hidecursordelay: 400,
                    directionlockdeadzone: 6,
                    nativeparentscrolling: !0,
                    enablescrollonselection: !0,
                    cursordragspeed: .3,
                    rtlmode: "auto",
                    cursordragontouch: !1,
                    oneaxismousemode: "auto",
                    scriptpath: "",
                    preventmultitouchscrolling: !0
                });
                var i = [],
                j = a.activityList;
                b.each(j,
                function(c) {
                    var d = this,
                    e = n(d.start_time),
                    f = n(d.end_time),
                    g = "",
                    h = "鑷�",
                    j = e.substring(5, 10),
                    k = f.substring(5, 10),
                    l = e.substring(0, 16),
                    m = new Date(Date.parse(l.replace(/\-/g, "/"))).getTime(),
                    o = f.substring(0, 16),
                    p = new Date(Date.parse(o.replace(/\-/g, "/"))).getTime(),
                    q = a.timeList[0].timeVal,
                    r = q.substring(0, 16),
                    s = new Date(Date.parse(r.replace(/\-/g, "/"))).getTime();
                    p <= s ? g = '<span class="index-new-hdStatus-end">宸茬粨鏉�</span>': p > s && (m <= s ? g = '<span class="index-new-hdStatus-ongoing">杩涜涓�</span>': m > s && (g = '<span class="index-new-hdStatus-notstart">鍗冲皢寮€濮�</span>'));
                    var t = e.substring(0, 10),
                    u = new Date(Date.parse(t.replace(/\-/g, "/"))).getTime(),
                    v = f.substring(0, 10);
                    u == new Date(Date.parse(v.replace(/\-/g, "/"))).getTime() && (h = "", k = "");
                    var w = 3 == c ? "index-new-hd-detail-box-last": "",
                    x = ['<div class="index-new-info-content-huodong" id="index-new-info-content-huodong-id-' + c + '" data-url="' + n(d.url) + '">', '<div class="index-new-hd-line index-new"></div>', '<div class="' + w + ' index-new-hd-detail-box">', '<div class="index-new-hd-time">', '<div class="index-new-hd-start-time">' + j + "</div>", '<div class="index-new-hd-time-to">' + h + "</div>", '<div class="index-new-hd-end-time">' + k + "</div>", "</div>", '<div class="index-new-hd-title-box">', '<a class="index-new-hd-title" title="' + d.title + '" target="_blank">' + n(d.title) + "</a>", "</div>", '<div class="index-new-hd-address" title="' + d.address + '">' + n(d.city) + "</div>", '<div class="index-new-hd-status" >' + g + "</div>", "</div>", "</div>"];
                    i.push(x.join("")),
                    b(document).delegate("#index-new-info-content-huodong-id-" + c, "click",
                    function() {
                        window.open(b(this).attr("data-url"))
                    })
                }),
                b(".index-new-huodong .index-new-info-content").append(i.join(""))
            })
        },
        t = function() {
            f.indexNew.searchReportAnalyzeAndHottest(function(b) {
                a(b)
            });
            var a = function(a) {
                var f = c(a);
                f.sort(e),
                b.each(f,
                function(a) {
                    "pgcVideoList" != this.key && "othersList" != this.key && b("#report_content").append(g(this, a))
                }),
                b("#report_content").append('<a href="' + d.rootUrl.report + 'index.html?bindType=report" target="_blank" class="check-for-more" style="margin-top:10px;">鏌ョ湅鏇村&gt;&gt;</a>')
            },
            c = function(a) {
                var b = [];
                for (var c in a) {
                    var d = "",
                    e = 0;
                    switch (c) {
                    case "top500List":
                        d = "500寮�",
                        e = 1;
                        break;
                    case "netFavouriteList":
                        d = "缃戠孩",
                        e = 2;
                        break;
                    case "netMediaWorthList":
                        d = "鏂板獟浣撲环鍊�",
                        e = 3;
                        break;
                    case "accountPhysicalList":
                        d = "鍏紬鍙蜂綋妫€",
                        e = 5;
                        break;
                    case "incidentReportList":
                        d = "浜嬩欢涓撴姤",
                        e = 6;
                        break;
                    case "businessReportList":
                        d = "琛屼笟涓撴姤",
                        e = 7;
                        break;
                    case "netMediaEcologicalList":
                        d = "鏂板獟浣撶敓鎬�",
                        e = 8;
                        break;
                    case "newrankTreeHoleList":
                        d = "鏂版鏁版礊",
                        e = 10
                    }
                    b.push({
                        key: c,
                        name: d,
                        list: a[c],
                        hashVal: e
                    })
                }
                return b
            },
            e = function(a, b) {
                if (a.list[0] && b.list[0]) {
                    var c = a.list[0].insert_time.split(".")[0].getTime();
                    return b.list[0].insert_time.split(".")[0].getTime() - c
                }
                return 0
            },
            g = function(a, b) {
                return ['<div class="new-report-item" style="' + (8 != b ? "margin-bottom:20px;": "") + '">', '   <p style="display:inline-block;margin-bottom:10px;"><a href="' + d.rootUrl.report + "report_search.html?value=&bindType=report#" + a.hashVal + '" target="_blank"><i class="index-new ' + a.key + '"></i>' + n(a.name) + "</a></p>", "<ul>", '<li><span class="circle"></span><a href="' + n(a.list[0].url) + '" target="_blank" class="report-title" title="' + n(a.list[0].title) + '">' + n(a.list[0].title) + "</a></li>", '<li><span class="circle"></span><a href="' + n(a.list[1].url) + '" target="_blank" class="report-title" title="' + n(a.list[1].title) + '">' + n(a.list[1].title) + "</a></li>", "</ul>", "</div>"].join("")
            }
        },
        u = function() {
            f.indexNew.getNri(m,
            function(a) {
                1 == a.middleMap.status ? a.middleMap.img_url && b(".index-new-top-img").append("<a href=" + a.middleMap.click_url + ' target="_blank"><img src="' + a.middleMap.img_url + '" class="index-new-top-img-show"/></a>') : b(".index-new-top-img").attr("class", "index-new-top-img-hide"),
                1 == a.centreMap.status ? a.centreMap.img_url && b(".index-new-middle-img").append("<a href=" + a.centreMap.click_url + ' target="_blank"><img src="' + a.centreMap.img_url + '" class="index-new-middle-img-show"/></a>') : b(".index-new-middle-img").attr("class", "index-new-middle-img-hide"),
                1 == a.footerMap.status ? a.footerMap.img_url && b(".index-new-bottom-img-show").attr("src", a.footerMap.img_url) : b(".index-new-top-img").attr("class", "index-new-top-img-hide"),
                b.trim(a.footerMap.img_url).length > 0 ? (b(".index-new-bottom-img-a").attr("href", a.footerMap.click_url), b(".index-new-bottom-img-show").css("cursor", "pointer")) : b(".index-new-bottom-img-show").css("cursor", "default");
                var c = a.weixinMap.weixinList[0],
                d = a.weixinMap.weixinList[1],
                e = c.avg_nri,
                f = d.avg_nri,
                g = e - f;
                g = parseFloat(g).toFixed(1),
                g < 0 && b(".index-new-rank-data-zhishu a").addClass("index-new-zhishu-plus"),
                0 == g ? (g = 0, b(".index-new-rank-data-zhishu a").addClass("index-new-zhishu-same")) : g > 0 && (g = "+" + g, b(".index-new-rank-data-zhishu a").addClass("index-new-zhishu-add"));
                var h = 100 * (e - f) / f;
                h = parseFloat(h).toFixed(1),
                h > 0 && (h = "+" + h),
                0 == h && (h = 0),
                e = parseFloat(e).toFixed(1);
                var i = c.user_all_count,
                j = d.user_all_count,
                k = i - j;
                k < 0 && b(".index-new-rank-data-yangben a").addClass("index-new-zhishu-plus"),
                0 == k ? (k = 0, b(".index-new-rank-data-yangben a").addClass("index-new-zhishu-same")) : k >= 0 && (k = "+" + k, b(".index-new-rank-data-yangben a").addClass("index-new-zhishu-add"));
                var l = 100 * (i - j) / j;
                l = parseFloat(l).toFixed(1),
                l > 0 && (l = "+" + l),
                0 == l && (l = 0),
                i = parseFloat(i / 1e4).toFixed(1);
                var m = c.article_big_click_count,
                o = d.article_big_click_count,
                p = m - o;
                p < 0 && b(".index-new-rank-data-article a").addClass("index-new-zhishu-plus"),
                0 == p ? (p = 0, b(".index-new-rank-data-article a").addClass("index-new-zhishu-same")) : p > 0 && (p = "+" + p, b(".index-new-rank-data-article a").addClass("index-new-zhishu-add"));
                var q = 100 * (m - o) / o;
                if (q = parseFloat(q).toFixed(1), q > 0 && (q = "+" + q), 0 == q && (q = 0), null != c && void 0 != c) {
                    var r = new Date(n(c.rank_date).replace(/-/g, "/").replace(".0", "")),
                    s = r.getMonth() + 1 + "-" + r.getDate();
                    b(".index-new-bang-date").html(s),
                    b(".index-new-zhishu-num a").html(e),
                    b(".index-new-zhishu-differ a").html(g),
                    b(".index-new-zhishu-trend a").html(h + "%"),
                    b(".index-new-yangben-num-span").html(i),
                    b(".index-new-yangben-differ a").html(k),
                    b(".index-new-yangben-trend a").html(l + "%"),
                    b(".index-new-article-num-span").html(m),
                    b(".index-new-article-differ a").html(p),
                    b(".index-new-article-trend a").html(q + "%")
                }
                b(".index-new-data-scroll").bind("click",
                function(a) {
                    a.stopImmediatePropagation(),
                    window.open("/public/info/list.html?type=data&period=day")
                })
            })
        },
        v = function() {
            b("#product-div").hover(function() {
                b(".index-new-data-product-bg").css("opacity", "0.8")
            },
            function() {
                b(".index-new-data-product-bg").css("opacity", "0.5")
            }),
            b("#bang-div").hover(function() {
                b(".index-new-bang-bg").css("opacity", "0.8")
            },
            function() {
                b(".index-new-bang-bg").css("opacity", "0.5")
            }),
            b(document).delegate(".index-new-rewen-content-box-link", "click",
            function() {
                window.open(b(this).attr("data-url"))
            }),
            b(document).delegate(".index-new-rewen-content-box-link", "mouseover",
            function() {
                var a = b(this);
                a.children("div").removeClass("index-new-rewen-content-box-border"),
                a.prev("div").children("div").removeClass("index-new-rewen-content-box-border")
            }),
            b(document).delegate(".index-new-rewen-content-box-link", "mouseout",
            function() {
                var a = b(this);
                "2" == a.attr("data-flag") && a.children("div").addClass("index-new-rewen-content-box-border"),
                a.prev("div").children("div").addClass("index-new-rewen-content-box-border")
            }),
            b(".index-new-fuwu .index-new-info-content").bind("click",
            function() {
                window.open("/public/info/product.html")
            }),
            b(".edit-link").unbind("click").bind("click",
            function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.edit)
            }),
            b(".index-new-cc-module").click(function() {
                window.open(d.rootUrl.copyright)
            }),
            b(".day-bang-link").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/list.html?period=day&type=data")
            }),
            b("#zhou-bang").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/list.html?period=week&type=data")
            }),
            b("#yue-bang").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/list.html?period=month&type=data")
            }),
            b("#platform").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/rank.html?type=2")
            }),
            b("#qu-yu").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/rank.html?type=1")
            }),
            b("#hang-ye").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("/public/info/rank.html?type=999")
            }),
            b(".account-transaction").click(function(a) {
                a.stopImmediatePropagation(),
                window.open("https://jinshuju.net/f/NjxwUr")
            }),
            b(".pay-for-content").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.ade + "content-payment/index.html")
            }),
            b(".more-hot").click(function() {
                window.open(d.rootUrl.original)
            }),
            b(".spread-effect").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data + "mins-monitor.html")
            }),
            b(".weibo-acq").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data + "dataWebo.html")
            }),
            b(".api-acq").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.api)
            }),
            b(".data-acq").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data + "dataAcq.html")
            }),
            b(".read-update").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data + "readNum.html")
            }),
            b(".img-import").click(function(a) {
                a.stopImmediatePropagation(),
                p == -999 ? g.showLoginDialog() : window.open(d.rootUrl.edit + "?menu=9ca47e67-a4a3-11e5-ad8a-382c4abc606b&type=0")
            }),
            b(".hns-search").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data + "searchInaccount.html")
            }),
            b(".index-new-data-product .title").click(function(a) {
                a.stopImmediatePropagation(),
                window.open(d.rootUrl.data)
            })
        },
        w = function(a, c) {
            var d = b("div.service-nav-line"),
            e = b("div.service-nav-new"),
            f = b("div.service-nav-icon"),
            g = b("div.service-nav-text"),
            h = b("div.service-nav-main"),
            i = b("div.service-nav-fade");
            "service" === c ? (clearTimeout(this.timer), clearTimeout(this.timerSpe), h.show(), f.hide(), d.show(), e.show(), setTimeout(function() {
                d.css("left", "43px"),
                g.addClass("change"),
                e.addClass("change"),
                i.addClass("change"),
                d.addClass("change")
            },
            50), location.hash = "", setTimeout(function() {
                b("div.service-nav-all").hover(function() {
                    clearTimeout(this.timer),
                    clearTimeout(this.timerSpe),
                    h.show(),
                    f.hide(),
                    d.show(),
                    setTimeout(function() {
                        d.css("left", "43px"),
                        g.addClass("change"),
                        e.addClass("change"),
                        i.addClass("change"),
                        d.addClass("change")
                    },
                    50)
                },
                function() {
                    this.timer = setTimeout(function() {
                        i.removeClass("change"),
                        d.removeClass("change"),
                        g.removeClass("change"),
                        e.removeClass("change"),
                        d.css("left", "12px")
                    },
                    200),
                    this.timerSpe = setTimeout(function() {
                        h.hide(),
                        f.show(),
                        d.hide()
                    },
                    500)
                })
            },
            1500)) : a || c || setTimeout(function() {
                b(".service-nav-btn").addClass("animated wobble"),
                b("div.service-nav-all").hover(function() {
                    clearTimeout(this.timer),
                    clearTimeout(this.timerSpe),
                    h.show(),
                    f.hide(),
                    d.show(),
                    setTimeout(function() {
                        d.css("left", "43px"),
                        g.addClass("change"),
                        e.addClass("change"),
                        i.addClass("change"),
                        d.addClass("change")
                    },
                    50)
                },
                function() {
                    this.timer = setTimeout(function() {
                        i.removeClass("change"),
                        d.removeClass("change"),
                        g.removeClass("change"),
                        e.removeClass("change"),
                        d.css("left", "12px")
                    },
                    200),
                    this.timerSpe = setTimeout(function() {
                        h.hide(),
                        f.show(),
                        d.hide()
                    },
                    500)
                }),
                setTimeout(function() {
                    e.show()
                },
                1200)
            },
            1e3),
            b(".zmb-btn").unbind("click").bind("click",
            function() {
                p === -999 || p.user.user_type == -1 || p.user.user_type >= 100 ? window.open("http://urlort.cn/rgqC1e") : window.open("http://urlort.cn/rgqDc2")
            }),
            b(".chacha-btn").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/bfKm02")
            }),
            b(".youzan").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/7lXeb4")
            }),
            b(".ckt").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/7lXdac")
            }),
            b(".maka").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/7lXf68")
            }),
            b(".ghjy").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/hdP1ff")
            }),
            b(".wxpt").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/6rqKe8")
            }),
            b(".zhangfen").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/7lXiba")
            }),
            b(".enter-btn").unbind("click").bind("click",
            function() {
                window.open("http://urlort.cn/7lXje1")
            })
        };
        window.onhashchange = function(a) {
            var b = a.newURL.split("#")[1],
            c = a.oldURL.split("#")[1];
            w(c, b)
        };
        var x = function() {
            var a = [];
            b(".index-new-banner-circle").css("right", (window.innerWidth - 1190) / 2);
            var c = 0,
            d = function() {
                c == a.length ? c = 0 : c < 0 && (c = a.length - 1),
                0 === c ? b(".spe-banner").css("opacity", 1) : b(".spe-banner").css("opacity", 0),
                b(".switch-banner").removeClass("choosen"),
                b("#switch-banner-" + c).addClass("choosen"),
                b(".index-new-banner-background").find("div.fade-banner").fadeOut(),
                b(".new-banner-" + c).fadeIn()
            };
            b(".banner-right-arrow").click(function(a) {
                a.stopPropagation(),
                c++,
                d()
            }),
            b(".banner-left-arrow").click(function(a) {
                a.stopPropagation(),
                c--,
                b(".switch-banner").removeClass("choosen"),
                d()
            }),
            b(document).delegate(".switch-banner", "click",
            function(a) {
                a.stopImmediatePropagation();
                var e = b(this).attr("data");
                c = parseInt(e),
                d()
            }),
            b(document).delegate(".index-new-banner-link", "click",
            function(a) {
                a.stopImmediatePropagation();
                var c = b(".choosen").attr("data"),
                d = h[c];
                b(".index-new-banner-link").css("cursor", "pointer"),
                p == -999 ? window.open(d.click_url) : p.user.user_type == -1 || p.user.user_type >= 100 ? window.open(d.ade_click_url ? d.ade_click_url: d.click_url) : window.open(d.media_click_url ? d.media_click_url: d.click_url)
            });
            var e, g, h, i = 8e3,
            j = function() {
                g > 1 && (e = setTimeout(function() {
                    c < a.length - 1 ? c += 1 : c = 0,
                    d(),
                    j()
                },
                i))
            };
            f.indexNew.getBannerImage(function(c) {
                h = c,
                g = h.length,
                b(h).each(function(c) {
                    var d = this;
                    if (a.push(d.img_url), d.isSpe) {
                        var e = ['<div class="index-new switch-banner" id="switch-banner-' + c + '" data="' + c + '"></div>'];
                        b(".index-new-banner-circle").append(e.join("")),
                        b(".index-new-banner-background").append('<div class="spe-banner" style="cursor:pointer;"><div id="info"></div><div id="container"></div></div>')
                    } else {
                        var e = ['<div class="index-new switch-banner" id="switch-banner-' + c + '" data="' + c + '"></div>'];
                        b(".index-new-banner-circle").append(e.join(""));
                        var f = ['<div class="fade-banner new-banner-' + c + '" style="background-image:url(' + d.img_url + ');display:none;cursor:pointer;"></div>'];
                        b(".index-new-banner-background").append(f.join(""))
                    }
                }),
                h.length <= 1 && b(".switch-banner").hide(),
                d(),
                b("div.index-new-banner").hover(function() {
                    clearTimeout(e)
                },
                function() {
                    j()
                }),
                j()
            })
        },
        y = function() {
            h.init()
        },
        z = function() {
            var a = new c.StringBuffer;
            a.append('<div class="index-new-bottom-newrank">'),
            a.append('<i class="index-new-bottom-newrank-img" style="background-image:url(' + String.changeUrl("newrankcn", "code") + ')"></i>'),
            a.append('<div class="index-new-bottom-weixin-text">鏂版</div>'),
            a.append('<div class="index-new-bottom-weixin-text">newrankcn</div>'),
            a.append("</div>"),
            a.append('<div class="index-new-bottom-newrankco">'),
            a.append('<i class="index-new-bottom-newrankco-img" style="background-image:url(' + String.changeUrl("newrankco", "code") + ')"></i>'),
            a.append('<div class="index-new-bottom-weixin-text">钀ラ攢鏂版鏍�</div>'),
            a.append('<div class="index-new-bottom-weixin-text">newrankco</div>'),
            a.append("</div>"),
            a.append('<div class="index-new-bottom-newrankgov">'),
            a.append('<i class="index-new-bottom-newrankgov-img" style="background-image:url(' + String.changeUrl("newrankgov", "code") + ')"></i>'),
            a.append('<div class="index-new-bottom-weixin-text">鏀挎柊姒�</div>'),
            a.append('<div class="index-new-bottom-weixin-text">newrankgov</div>'),
            a.append("</div>"),
            a.append('<div class="index-new-bottom-xdnphb">'),
            a.append('<i class="index-new-bottom-xdnphb-img" style="background-image:url(' + String.changeUrl("newranklist", "code") + ')"></i>'),
            a.append('<div class="index-new-bottom-weixin-text">鏂版鎺掕姒�</div>'),
            a.append('<div class="index-new-bottom-weixin-text">newranklist</div>'),
            a.append("</div>"),
            a.append('<div class="index-new-bottom-vhd">'),
            a.append('<i class="index-new-bottom-vhd-img" style="background-image:url(' + String.changeUrl("vhd999", "code") + ')"></i>'),
            a.append('<div class="index-new-bottom-weixin-text">閲忓瓙绋嬪簭</div>'),
            a.append('<div class="index-new-bottom-weixin-text">vhd999</div>'),
            a.append("</div>"),
            b(".index-new-bottom-weixin-group").html(a.toString())
        },
        A = function() {
            var a = ['<div class="new_footer_main">', '<div class="new_footer_left">', "   <span>涓婃捣鐪嬫淇℃伅绉戞妧鏈夐檺鍏徃</span>", '   <span style="color: #929292;">澶嶆棪澶у鏂伴椈瀛﹂櫌鎻愪緵鍏ㄦ柟浣嶅鏈敮鎸�</span>', "</div>", '<div class="new_footer_right clear">', "   <span>漏" + (new Date).getFullYear() + " NEWRANK 娌狪CP澶�14042332鍙�-2</span>", '<a id="beian" class="beian" href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402005073" target="_blank"><img src="../../assets/img/index/new_index/wangjing.png"/>娌叕缃戝畨澶� 31010402005073鍙�</a>', '<a id="_pingansec_bottomimagesmall_brand" class="trustutn" href="//si.trustutn.org/info?sn=488170331027727219055&certType=1" target="_blank"><img src="//v.trustutn.org/images/cert/brand_bottom_small.jpg"/></a>', "</div>", "</div>"];
            b("#foot").html(a.join("")).addClass("index_new_footer")
        };
        return {
            init: function() {
                r(),
                k(),
                u(),
                q(),
                t(),
                x(),
                v(),
                y(),
                z(),
                A(),
                w()
            }
        }
    })().init()
}),
define("static/index/index-new-api", ["jquery", "ade-api-common", "json"],
function(a) {
    var b = (a("jquery"), a("memory")),
    c = a("api-common"),
    d = a("ade-api-common");
    a("json");
    var e = c.getCommonData,
    f = b.urlBase;
    return {
        indexNew: function() {
            var a = f + "indexNew/",
            b = f + "editor/ads/";
            return {
                hotArticle: function(b) {
                    e(a + "hotArticle", {},
                    b)
                },
                changeHotArticleNewData: function(b) {
                    e(a + "changeHotArticleNewData", {},
                    b)
                },
                getNri: function(b, c) {
                    e(a + "getNri", {
                        rankDate: b
                    },
                    c)
                },
                searchCmsMedia: function(b) {
                    e(a + "searchCmsMedia", {},
                    b)
                },
                IndexNewHotSell: function(a) {
                    e(f + "account/ade/open/IndexNewHotSell", {},
                    a)
                },
                searchNotice: function(b) {
                    e(a + "searchNotice", {},
                    b)
                },
                getBannerImage: function(b) {
                    e(a + "getBannerImage", {},
                    b)
                },
                searchReportAnalyzeAndHottest: function(b) {
                    e(a + "searchReportAnalyzeAndHottest", {},
                    b)
                },
                getEditorNewAdsReturn: function(a) {
                    e(b + "getEditorNewAdsReturn", {},
                    a)
                }
            }
        } (),
        account: function() {
            var a = b.urlBase,
            d = a + "index/",
            f = c.getCommonDataSync,
            g = a + "m/";
            return {
                getAutocompleteAccount: function(a, b) {
                    f(d + "getAutocompleteAccount", {
                        keyword: a
                    },
                    !1, b)
                },
                getAccountDetail: function(a, b) {
                    e(g + "getAccountDetail", {
                        account: a
                    },
                    b)
                }
            }
        } (),
        scheduleFind: function() {
            var a = f + "ade/v1/api/display/";
            return {
                tradeMoney: function(b) {
                    d.request({
                        url: a + "tradeMoney",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                hotSell: function(b) {
                    d.request({
                        url: a + "hotSell",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                hotPush: function(b) {
                    d.request({
                        url: a + "hotPush",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                toBuyInfo: function(b) {
                    d.request({
                        url: a + "toBuyInfo",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                hotPoster: function(b) {
                    d.request({
                        url: a + "hotPoster",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                hotDistribution: function(b) {
                    d.request({
                        url: a + "hotDistribution",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                kolListByHome: function(b) {
                    d.request({
                        url: a + "kolListByHome",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                getAdsMessages: function(b) {
                    d.request({
                        url: a + "getAdsMessages",
                        method: "GET",
                        param: {},
                        success: b
                    })
                },
                getShoppingMessages: function(b) {
                    d.request({
                        url: a + "getShoppingMessages",
                        method: "GET",
                        param: {},
                        success: b
                    })
                }
            }
        } ()
    }
});