var a;

function show_hide() {
    if (a == 1) {
        document.getElementById("close").style.display = "block";
        document.getElementById("js").style.marginTop="13em";
        return a = 0;
    }
    else {
        document.getElementById("close").style.display = "none";
        document.getElementById("js").style.marginTop="-70px";
        return a = 1;
    }
}
