$(document).ready(function () {
    /*默认语言*/
    
    //读取浏览器中的coockie
    var lang = getCookie("lang");
    //若没有语言，则设置为用户的浏览器语言
    if (lang===""||lang==null) 
    {
        //获取浏览器语言
        lang = navigator.language;
        //只取前两个字母
        lang = lang.substring(0, 2);
        setCookie("lang", lang, 365);
        
        
    }
    cssControl(lang);

    $("[i18n]").i18n({
        lang: lang,
        filePath: "./i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n");
        }
    });
    $("#lang_zh").click(function () {
        
        $("[i18n]").i18n({
            lang: "zh",
            filePath: "./i18n/"
        });
        // document.getElementById("personalOption").style.width = "100%";
        lang = "zh";
        cssControl(lang);
        //将zh设置为coockie
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
        //调用css控制
        setCookie("lang", lang, 365);
        cssControl(lang);
    });
    //读取浏览器中的coockie
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    //保存到coockie
    function setCookie(name, value,time) {
        var time = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    //对不同的lang使用css控制
    function cssControl(lang) {
        //如果lang为en
        var personaloption = document.getElementById("personalOption");
        //如果获取元素失败
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

