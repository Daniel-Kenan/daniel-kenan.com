"use strict"

let msg = document.getElementsByClassName("msg")[0] ,
content  = document.getElementById("message") ;
msg.addEventListener('keyup', e=>{
    let text = msg.innerHTML ,
    value = text.replace('&nbsp'," ",text);
    content.value = value ;
}
)
