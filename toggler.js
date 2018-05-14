function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i!=ca.length; ++i) {
        var c = ca[i];
        while (c.charAt(0)==' ') { c = c.substring(1, c.length); }
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length, c.length); }
    }
    return null;
}

var styles = ["moo", "dark"];
var current_style_index = null;
function current_style() {
    return styles[current_style_index];
}
function swapStyleSheet() {
    current_style_index = (current_style_index + 1) % styles.length;
    setCookie("style_index", current_style_index.toString());
    alert("cookie:" + document.cookie);
    document.getElementById("pagestyle").href = "css/"+current_style()+".css";
}

function initate() {
    var toggler = document.getElementById("toggler");
    toggler.onclick = function () {swapStyleSheet();};

    var cookie_style_index = getCookie("style_index");
    if (cookie_style_index == null) {
        setCookie("style_index", "0");
    } else {
        current_style_index = parseInt(cookie_style_index);
    }
    alert("cookie:" + document.cookie);
    document.getElementById("pagestyle").href = "css/"+current_style()+".css";
}

window.onload = initate;


