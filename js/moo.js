function clear_tabs(evt, depth) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent" + depth);
    for (i = 0; i != tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks" + depth);
    for (i = 0; i != tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

function open_tab(evt, tab_name, depth) {
    clear_tabs(evt, depth);

    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";

    if (depth==0) {
        clear_tabs(evt, 1);
    }
}

open_tab(event, 'Home', 0);
