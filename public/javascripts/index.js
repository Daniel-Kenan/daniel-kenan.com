let homename = document.getElementsByClassName('name')[0];
str = '';
let i = 0;

let msg = ["I am a Strategist    ", "I am passionate   ", "I am a Software Engineer   ", "I am Daniel Kenan Slinda    "]
let interval = setInterval(type, 200)
let section = 0;
let rev = false;
let cursor = true;

function type() {
    homename.innerHTML = str + cursor;
    let text = msg[section]
    str += text[i]
    if (i < text.length - 1 && rev != true) i += 1;
    if (i == text.length - 1) rev = true;
    if (rev) i--, str = str.substring(0, i);
    if (rev && i < 1) rev = false, section += 1;
    if (section == msg.length) section = 0;


}
setInterval(() => {
    if (cursor == '|') {
        cursor = ''
    } else {
        cursor = '|'
    }
}, 500)

let header = document.getElementsByClassName('header')[0] ;
header.style.width = "100vh";

onscroll = () =>{
   if (document.documentElement.scrollTop > 150){
    // header.style.display = "none";
   }
   else{}
}

