$(document).ready(function () {
    var lang = getCookie("lang");
    if (lang === "" || lang == null) {
        lang = navigator.language;
        lang = lang.substring(0, 2);
        setCookie("lang", lang, 365);
    }
    cssControl(lang);
    $("[i18n]").i18n({
        lang: lang,
        filePath: "./i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true
        
    });
    $("#lang_zh").click(function () {
        $("[i18n]").i18n({
            lang: "zh",
            filePath: "./i18n/"
        });
        lang = "zh";
        cssControl(lang);
        setCookie("lang", lang, 365);
    });
    $("#lang_ru").click(function () {
        $("[i18n]").i18n({
            lang: "ru",
            filePath: "./i18n/"
        });
        lang = "ru";
        cssControl(lang);
        setCookie("lang", lang, 365);
    });
    $("#lang_en").click(function () {
        $("[i18n]").i18n({
            lang: "en",
            filePath: "./i18n/"
        });
        lang = "en";
        setCookie("lang", lang, 365);
        cssControl(lang);
    });
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    function setCookie(name, value, time) {
        var time = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    function cssControl(lang) {
        var personaloption = document.getElementById("personalOption");
        if (personaloption == null) {
            return;
        }
        if (lang == "en") {
            personaloption.style.width = "4.75em";
        }
        if (lang == "ru") {
            personaloption.style.width = "4.2em";
        }
        if (lang == "zh") {
            personaloption.style.width = "4em";
        }
    }
});

