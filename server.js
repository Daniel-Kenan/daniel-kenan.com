
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
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('index')
})
app.get('/resume',(req,res)=>{
    res.render('resume')
})

app.get('/preview/:project_name',(req,res)=>{
    const {project_name} = req.params;
    const name = project_name
    const pages = ['curate','racing','construction', 'eco','portfolio','music']
    
    if(pages.includes(name)) res.render(name)
    else {res.redirect('/')}
})




app.get('/blog/:page', (req, res)=>{
    res.redirect('https://medium.com/@sdanielkenan')
    // let menu = req.query;
    // menu = Object.keys(menu).length == true ? true : false ;
   
    // if (req.params.page == "story")  res.render('story',{menu:menu}); 
    // if (req.params.page == "git")  res.render('git',{menu:menu});
    // if (req.params.page == "network")  res.render('Networking4SoftwareEngineers',{menu:menu});
    // if (req.params.page == "jspro")  res.render('debugging',{menu:menu});
})
    
app.get('/blog' , (req, res)=>{
    res.redirect('https://medium.com/@sdanielkenan')
})

app.listen(port);