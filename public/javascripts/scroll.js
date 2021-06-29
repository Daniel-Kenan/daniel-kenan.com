
let prevScrollpos = window.pageYOffset,
header = document.getElementsByClassName('menu')[0];
window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
        
        // menu_opt.setAttribute("src","/images/PinClipart.com_menu-clip-art_1128307.png");
    }
    prevScrollpos = currentScrollPos;
}
