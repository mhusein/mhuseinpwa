function includeJs(jsFilePath) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;
    document.body.appendChild(js);
}

includeJs("./js/favorit.js");
includeJs("./js/pasang_klasemen.js");
includeJs("./js/pasang_scorers.js");
includeJs("./js/pasang_favorit.js");
