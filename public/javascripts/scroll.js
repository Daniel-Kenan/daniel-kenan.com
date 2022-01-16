
let prevScrollpos = pageYOffset,
header = document.getElementsByClassName('menu')[0];
window.onscroll = () => {
    var currentScrollPos = pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.opacity = "1";
    } else {
        header.style.opacity = "0.71";
        
        // menu_opt.setAttribute("src","/images/PinClipart.com_menu-clip-art_1128307.png");
    }
    prevScrollpos = currentScrollPos;
}
