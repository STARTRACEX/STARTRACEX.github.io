
var logo = '  _____ _______       _____ _______ _____            _____ ______ \n / ____|__   __|/\\   |  __ \\__   __|  __ \\     /\\   / ____|  ____|\n| (___    | |  /  \\  | |__) | | |  | |__) |   /  \\ | |    | |__   \n \\___ \\   | | / /\\ \\ |  _  /  | |  |  _  /   / /\\ \\| |    |  __|  \n ____) |  | |/ ____ \\| | \\ \\  | |  | | \\ \\  / ____ \\ |____| |____ \n|_____/   |_/_/    \\_\\_|  \\_\\ |_|  |_|  \\\\_\/_/    \\_\\_____|______|'
console.log(logo);
function ud() {
    alert("未开放的内容");
}
//在顶端调用，创建以name为描述,name为i18n名的导航条,
//以i判定是否添加.personal与.setting,
//大于1：全部添加，大于0小于等于1：仅添加.setting.小于等于0: 全部掠过
function Nav(name, i) {
    document.write("<nav id=\"nav\">");
    document.write("        <div class=\"main\">");
    document.write("            <div class=\"left\">");
    document.write("                <h1><a  href=\".\/index.html\">STARTRACE<\/a> <span>|<\/span> <em i18n=\"" + name + "\">" + name + "<\/em><\/h1>");
    document.write("            <\/div>");
    document.write("            <div class=\"right\">");
    if (i >= 0) {
        if (i > 1) {
            document.write("                <div class=\"personal\">");
            document.write("                    <a href=\".\/login.html\">");
            document.write("                        <?xml version=\"1.0\" standalone=\"no\"?>");
            document.write("                        <svg t=\"1650462239564\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"1703\" width=\"32\"");
            document.write("                            height=\"32\">");
            document.write("                            <defs>");
            document.write("                                <style type=\"text\/css\"><\/style>");
            document.write("                            <\/defs>");
            document.write("                            <path");
            document.write("                                d=\"M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 654.222222a425.927111 425.927111 0 0 0-336.440889 164.238222A454.087111 454.087111 0 0 0 512 967.111111a453.973333 453.973333 0 0 0 336.440889-148.593778A425.699556 425.699556 0 0 0 512 654.222222zM512 56.888889a455.111111 455.111111 0 0 0-372.849778 716.231111 482.247111 482.247111 0 0 1 280.519111-166.968889 227.555556 227.555556 0 1 1 184.604445 0.113778 482.133333 482.133333 0 0 1 280.576 166.684444A455.111111 455.111111 0 0 0 512 56.888889z m0 170.666667a170.666667 170.666667 0 1 0 0 341.333333 170.666667 170.666667 0 0 0 0-341.333333z m102.627556 176.526222a28.444444 28.444444 0 0 1 8.021333 35.555555l-2.730667 4.323556-8.817778 11.548444a125.553778 125.553778 0 0 1-209.237333-14.904889 28.444444 28.444444 0 0 1 49.607111-27.875555 68.664889 68.664889 0 0 0 109.909334 13.539555l4.551111-5.347555 8.817777-11.548445a28.444444 28.444444 0 0 1 39.879112-5.290666z\"");
            document.write("                                fill=\"#f7f7f7\" p-id=\"1704\"><\/path>");
            document.write("                        <\/svg>");
            document.write("                    <\/a>");
            document.write("                    <div class=\"option\" id=\"personalOption\">");
            document.write("                        <a href=\".\/login.html\" i18n=\"me\">个人<\/a>");
            document.write("                        <a href=\"\" i18n=\"order\">订单<\/a>");
            document.write("                        <a href=\"\" i18n=\"friends\">好友<\/a>");
            document.write("                    <\/div>");
            document.write("                <\/div>");
        }
        if (i > 0) {
            document.write("                <div class=\"setting\">");
            document.write("                    <a href=\"\" style=\"cursor: default;\">");
            document.write("                        <?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"32\" height=\"32\" viewBox=\"0 0 48 48\"");
            document.write("                            fill=\"none\">");
            document.write("                            <rect width=\"48\" height=\"48\" fill=\"white\" fill-opacity=\"0.01\" \/>");
            document.write("                            <path");
            document.write("                                d=\"M18.2838 43.1712C14.9327 42.1735 11.9498 40.3212 9.58787 37.8669C10.469 36.8226 11 35.4733 11 34C11 30.6863 8.31371 28 5 28C4.79955 28 4.60139 28.0098 4.40599 28.029C4.13979 26.7276 4 25.3801 4 24C4 21.9094 4.32077 19.8937 4.91579 17.9994C4.94381 17.9998 4.97188 18 5 18C8.31371 18 11 15.3137 11 12C11 11.0487 10.7786 10.1491 10.3846 9.34999C12.6975 7.19937 15.5205 5.5899 18.6521 4.72302C19.6444 6.66807 21.6667 8.00001 24 8.00001C26.3333 8.00001 28.3556 6.66807 29.3479 4.72302C32.4795 5.5899 35.3025 7.19937 37.6154 9.34999C37.2214 10.1491 37 11.0487 37 12C37 15.3137 39.6863 18 43 18C43.0281 18 43.0562 17.9998 43.0842 17.9994C43.6792 19.8937 44 21.9094 44 24C44 25.3801 43.8602 26.7276 43.594 28.029C43.3986 28.0098 43.2005 28 43 28C39.6863 28 37 30.6863 37 34C37 35.4733 37.531 36.8226 38.4121 37.8669C36.0502 40.3212 33.0673 42.1735 29.7162 43.1712C28.9428 40.7518 26.676 39 24 39C21.324 39 19.0572 40.7518 18.2838 43.1712Z\"");
            document.write("                                fill=\"none\" stroke=\"#f7f7f7\" stroke-width=\"3\" stroke-linejoin=\"round\" \/>");
            document.write("                            <path");
            document.write("                                d=\"M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z\"");
            document.write("                                fill=\"none\" stroke=\"#f7f7f7\" stroke-width=\"3\" stroke-linejoin=\"round\" \/>");
            document.write("                        <\/svg>");
            document.write("                    <\/a>");
            document.write("                    <div class=\"option\">");
            document.write("                        <a id=\"lang_zh\" href=\"\">简体中文<\/a>");
            document.write("                        <a id=\"lang_en\" href=\"\">English<\/a>");
            document.write("                        <a id=\"lang_ru\" href=\"\">русский<\/a>");
            document.write("                    <\/div>");
            document.write("                <\/div>");
        }
    }
    document.write("            <\/div>");
    document.write("        <\/div>");
    document.write("    <\/nav>");
}
//底部和回到顶部，在页面末尾调用
function Footer() {
    document.write("<footer id=\"footer\">");
    document.write("        <div class=\"footer-about\">");
    document.write("            <ul id=\"fo-list\" class=\"footer-option o\">");
    document.write("                <li class=\"footertab\">");
    document.write("                    <span i18n=\"about\">关于<\/span>");
    document.write("                    <ul class=\"i\">");
    document.write("                        <li><a href=\"#\" target=\"_blank\" i18n=\"about\">关于<\/a><\/li>");
    document.write("                        <li><a href=\".\/useraggrement.html\" target=\"_blank\" i18n=\"useraggrement\">用户协议<\/a><\/li>");
    document.write("                        <li><a href=\".\/privacy.html\" target=\"_blank\" i18n=\"privacy\">隐私政策<\/a><\/li>");
    document.write("                        <li><a href=\".\/PES.html\" target=\"_blank\" i18n=\"photosensitiveepilepsy\">光敏性发作警告<\/a><\/li>");
    document.write("                    <\/ul>");
    document.write("                <\/li>");
    document.write("                <li class=\"footertab\">");
    document.write("                    <span i18n=\"feedback\">反馈<\/span>");
    document.write("                    <ul class=\"i\">");
    document.write("                        <li><a href=\"\" i18n=\"faq\">常见问题<\/a><\/li>");
    document.write("                        <li><a href=\"\" i18n=\"vulnerabilities\">报告漏洞<\/a><\/li>");
    document.write("                        <li><a href=\"\" i18n=\"sopport\">客服服务<\/a><\/li>");
    document.write("                    <\/ul>");
    document.write("                <\/li>");
    document.write("                <li class=\"footertab\">");
    document.write("                    <span i18n=\"cooperation\">合作<\/span>");
    document.write("                    <ul class=\"i\">");
    document.write("                        <li><a href=\"\" i18n=\"pubcoop\">公益合作<\/a><\/li>");
    document.write("                        <li><a href=\"\" i18n=\"buscoop\">商务合作<\/a><\/li>");
    document.write("                        <li><a href=\"\" i18n=\"adcoop\">广告投放<\/a><\/li>");
    document.write("                        <li><a id=\"joinus\" href=\".\/joinus.html\" target=\"_blank\" i18n=\"joinus\">招贤纳士<\/a><\/li>");
    document.write("                    <\/ul>");
    document.write("                <\/li>");
    document.write("                <li class=\"footertab\">");
    document.write("                    <span>其他<\/span>");
    document.write("                    <ul>");
    document.write("                        <li><a href=\".\/doc.html\">转到文献库<\/a><\/li>");
    document.write("                    <\/ul>");
    document.write("");
    document.write("                <\/li>");
    document.write("            <\/ul>");
    document.write("            <div class=\"footer-cannal\" style=\"display: block;\">");
    document.write("                <a class=\"footerqr\" href=\"https:\/\/github.com\/STARTRACEX\" target=\"_blank\">");
    document.write("                    <svg t=\"1655171075206\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\"");
    document.write("                        xmlns=\"http:\/\/www.w3.org\/2000\/svg\" p-id=\"2859\" width=\"36\" height=\"36\">");
    document.write("                        <path");
    document.write("                            d=\"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z\"");
    document.write("                            p-id=\"2860\" fill=\"#f4f4f4\"><\/path>");
    document.write("                    <\/svg>");
    document.write("                <\/a>");
    document.write("                <a class=\"footerqr\" href=\"#footer\">");
    document.write("                    <svg style=\"transform: translateY(1.2px);\" t=\"1655135087965\" class=\"icon\" viewBox=\"0 0 1024 1024\"");
    document.write("                        version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" p-id=\"8317\" width=\"36\" height=\"36\">");
    document.write("                        <path");
    document.write("                            d=\"M684.2624 336.639078c10.256998 0 20.405555 0.753152 30.472294 1.873715C687.354982 211.026227 551.049933 116.304896 395.467162 116.304896c-173.940736 0-316.424704 118.557184-316.424704 269.103923 0 86.8992 47.403622 158.259405 126.61801 213.608038l-31.648051 95.184896 110.615859-55.468339c39.581082 7.834419 71.337677 15.888896 110.837965 15.888896 9.929523 0 19.775181-0.490189 29.539021-1.257677-6.182093-21.154816-9.763738-43.312435-9.763738-66.302054C415.242342 448.825139 533.955994 336.639078 684.2624 336.639078zM514.125517 250.849178c23.825613 0 39.60873 15.673958 39.60873 39.484314 0 23.715123-15.783117 39.607091-39.60873 39.607091-23.716147 0-47.513088-15.891968-47.513088-39.607091C466.612429 266.522112 490.40937 250.849178 514.125517 250.849178zM292.671693 329.939456c-23.713075 0-47.648154-15.891968-47.648154-39.607091 0-23.810253 23.934054-39.484314 47.648154-39.484314 23.715123 0 39.499264 15.673958 39.499264 39.484314C332.170957 314.04759 316.386816 329.939456 292.671693 329.939456zM973.059686 583.260979c0-126.504141-126.593434-229.620736-268.773478-229.620736-150.553088 0-269.128499 103.116493-269.128499 229.620736 0 126.72215 118.576538 229.620736 269.128499 229.620736 31.510938 0 63.294157-7.945933 94.942208-15.877632l86.79127 47.525376-23.796941-79.073894C925.73696 717.806285 973.059686 654.621286 973.059686 583.260979zM617.027379 543.668224c-15.755469 0-31.648051-15.673958-31.648051-31.661056 0-15.766118 15.892582-31.643648 31.648051-31.643648 23.934054 0 39.60873 15.877632 39.60873 31.643648C656.636109 527.994266 640.961434 543.668224 617.027379 543.668224zM791.077581 543.668224c-15.647027 0-31.430144-15.673958-31.430144-31.661056 0-15.766118 15.783117-31.643648 31.430144-31.643648 23.715123 0 39.605658 15.877632 39.605658 31.643648C830.684262 527.994266 814.793626 543.668224 791.077581 543.668224z\"");
    document.write("                            p-id=\"8318\" fill=\"#f4f4f4\"><\/path>");
    document.write("                    <\/svg>");
    document.write("                <\/a>");
    document.write("                <a class=\"footerqr\" href=\"https:\/\/space.bilibili.com\/372446173\" target=\"_blank\">");
    document.write("                    <svg t=\"1655132403671\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"3000\" width=\"36\"");
    document.write("                        height=\"36\">");
    document.write("                        <path");
    document.write("                            d=\"M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z\"");
    document.write("                            p-id=\"3001\" fill=\"#f4f4f4\"><\/path>");
    document.write("                    <\/svg>");
    document.write("                    <img src=\".\/img\/bilibiliqr.png\">");
    document.write("                <\/a>");
    document.write("                <a class=\"footerqr\" href=\"#footer\">");
    document.write("                    <?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"36\" height=\"36\" viewBox=\"0 0 48 48\" fill=\"none\"\">");
    document.write("                    <path d=\" M23 43H43V5H14V15\" stroke=\"#f4f4f4\" stroke-width=\"3\" stroke-linejoin=\"round\" \/>");
    document.write("                    <path d=\"M5 15H23V43H5L5 15Z\" fill=\"none\" stroke=\"#f4f4f4\" stroke-width=\"3\"");
    document.write("                        stroke-linejoin=\"round\" \/>");
    document.write("                    <path d=\"M13 37H15\" stroke=\"#f4f4f4\" stroke-width=\"3\" stroke-linecap=\"round\"");
    document.write("                        stroke-linejoin=\"round\" \/>");
    document.write("                    <path d=\"M28 37H30\" stroke=\"#f4f4f4\" stroke-width=\"3\" stroke-linecap=\"round\"");
    document.write("                        stroke-linejoin=\"round\" \/>");
    document.write("                    <\/svg>");
    document.write("                    <img src=\".\/img\/homeqr.png\">");
    document.write("                <\/a>");
    document.write("            <\/div>");
    document.write("        <\/div>");
    document.write("        <div id=\"footer-beian\">");
    document.write("            <a href=\"http:\/\/www.beian.gov.cn\/\" target=\"_blank\" i18n=\"llpb\"> &nbsp; <\/a>");
    document.write("            <a href=\".\/cookie.html\" target=\"_blank\">Cookie<\/a>");
    document.write("        <\/div>");
    document.write("        <div id=\"footer-copyright\">");
    document.write("            <a href=\"\">&copy;STARTRACE<\/a>");
    document.write("            <a href=\"https:\/\/github.com\/STARTRACEX\" i18n=\"pagedesine\">页面设计：计科2101王世超<\/a>");
    document.write("        <\/div>");
    document.write("    <\/footer>");

    document.write("<div id=\"totop\">");
    document.write("        <a href=\"\">");
    document.write("            <svg t=\"1650535477964\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"#\" p-id=\"5015\" width=\"36\"");
    document.write("                height=\"36\">");
    document.write("                <path");
    document.write("                    d=\"M484.538555 297.401434 78.508052 703.407378c-11.784394 11.813047-11.784394 30.912034 0 42.724057 11.81714 11.81407 30.94171 11.81407 42.757826 0l386.211109-386.181433 379.830795 379.806235c11.453866 11.482519 30.039153 11.482519 41.491996 0 11.511171-11.453866 11.511171-30.039153 0-41.516556L534.372543 303.776631c-1.543146-1.539053-3.417843-2.296299-5.200442-3.412726-0.691755-0.935302-1.055029-2.085498-1.933025-2.962471-11.784394-11.784394-30.912034-11.784394-42.695405 0L484.538555 297.401434zM484.538555 297.401434\"");
    document.write("                    p-id=\"5016\" fill=\"#f7f7f7\"><\/path>");
    document.write("            <\/svg>");
    document.write("        <\/a>");
    document.write("    <\/div>");

}
//加载动画，在任何地方调用，需要jqury
function LoadingKf() {
    document.write("<div id=\"loading\">");
    document.write("        <div class=\"kf_spinner\"><\/div>");
    document.write("<\/div>");
    document.onreadystatechange = function () {
        $('body').css({ 'overflow-y': 'hidden' });
        $('html').css({ 'overflow-y': 'hidden' });
        if (document.readyState == "complete") {
            $("#loading").hide();
            $('body').css({ 'overflow-y': 'auto' });
            $('html').css({ 'overflow-y': 'auto' });
        }
    }
}



