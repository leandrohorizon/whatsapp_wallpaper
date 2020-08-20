window.onload = function() {
    // console.log("Olá Mundo!");

    // console.log("url(\"" + chrome.runtime.getURL("images/wallpaper.jpg") + "\")");

    // var elements = document.body.getElementsByTagName("*");

    // var links = document.getElementsByTagName("link");
    // for (link of links) {
    //     console.log(link.href);
    //     if (link.href === "https://web.whatsapp.com/cssm_qr.0adba367ca20ff239b8cfab8111d4eac.css") {
    //         link.href = "whatsapp.css";
    //     }
    // }
    document.getElementsByTagName("body")[0].classList.add("dark");
}