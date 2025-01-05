function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; path=/";
}

function getCookie(cname) {
    var nameEQ = cname + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i!=ca.length; ++i) {
        var c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1, c.length); }
        if (c.startsWith(nameEQ)) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
}

var styles = ["beach", "white", "desert", "surf", "carboniferous"];
var current_style_index = null;
function current_style() {
    return styles[current_style_index];
}
function set_stylesheet() {
    var loc = window.location.pathname;
    loc = loc.substring(loc.lastIndexOf("bohrium.github.io/"), loc.length);
    var filenm = "";
    for (var i=0; i!=loc.split("/").length-2; ++i) {
        filenm += "../";
    }
    filenm += "css/"+current_style()+".css";
    document.getElementById("pagestyle").href = filenm;
}
function swapStyleSheet() {
    current_style_index = (current_style_index + 1) % styles.length;
    setCookie("style_index", current_style_index.toString());
    set_stylesheet();
}

function initate() {
    var toggler = document.getElementById("toggler");
    toggler.onclick = function () {swapStyleSheet();};

    var cookie_style_index = getCookie("style_index");
    if (cookie_style_index == null) {
        setCookie("style_index", "0");
        current_style_index = 0;
    } else {
        current_style_index = parseInt(cookie_style_index);
    }
    set_stylesheet();
}

window.onload = initate;


