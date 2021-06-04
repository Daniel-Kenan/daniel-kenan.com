class Query {
    constructor(div, url) {
        this.div = document.getElementsByClassName("query")[div];
        this.url = url;
        
    }
    request() {
        let div = this.div, url = "/blog/" +this.url ;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                div.innerHTML = this.responseText;
                div.addEventListener('click',()=>{
                   location.href =  url ;
                })
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
        // console.log(this.div)
    }
}
new Query(0, "story").request()
new Query(1, "network").request()
new Query(2, "git").request()