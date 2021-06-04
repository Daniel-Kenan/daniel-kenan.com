
const express = require('express');
const {
    exec
} = require('child_process');
const app = express();
const port = process.env.PORT || 3000 ;
const ejs = require('ejs');

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/mail', (req, res) => {
    res.sendFile(__dirname + '/email.html')
})
app.post('/new-message', (req, res) => {
    let email = [req.body.email];
    let msg = [req.body.message];
    let user_name = [req.body.username]
    exec(`python ${__dirname}/email-bridge.py ${email} ${msg} ${user_name}`, (err, stdout) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(stdout)
    })
})

app.get('/blog/story', (req, res)=>{
    res.render('story')
})
app.get('/blog/network',(req,res)=>{
    res.render('Networking4SoftwareEngineers')
})
app.get('/blog/git', (req,res)=>{
    res.render('git')
})

app.listen(port);