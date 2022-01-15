<<<<<<< HEAD

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
=======

let prevScrollpos = pageYOffset,
header = document.getElementsByClassName('menu')[0];
window.onscroll = () => {
    var currentScrollPos = pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
        
        // menu_opt.setAttribute("src","/images/PinClipart.com_menu-clip-art_1128307.png");
    }
    prevScrollpos = currentScrollPos;
}
>>>>>>> d835ef45b91d83b76f89cbc20bbd68887a7a60a4
