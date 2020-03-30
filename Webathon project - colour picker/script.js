function changeColor(sideBar,topBar,bckgnd,content,footer) {
    document.getElementById("side-bar").style.backgroundColor = sideBar;
    document.getElementById("top-bar").style.backgroundColor = topBar;
    document.getElementById("window").style.backgroundColor = bckgnd;
    document.getElementById("main-content-1").style.backgroundColor = content;
    document.getElementById("main-content-2").style.backgroundColor = content;
    document.getElementById("main-content-3").style.backgroundColor = content;
    document.getElementById("footer-1").style.backgroundColor = footer;
    document.getElementById("footer-2").style.backgroundColor = footer;
    
    document.getElementById("hex1").innerHTML = sideBar;
    document.getElementById("hex2").innerHTML = topBar;
    document.getElementById("hex3").innerHTML = bckgnd;
    document.getElementById("hex4").innerHTML = content;
    document.getElementById("hex5").innerHTML = footer;
}

function co() {
    var copyText = document.getElementById("hex1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
} 
//sideBar,topBar,mainContent,footer,bckgnd