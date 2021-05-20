const {
  response
} = require('express');
const express = require('express');
const {
  exec
} = require('child_process');
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: false
}))
app.get('/' , (req , res)=>{
 res.sendFile(__dirname+ '/index.html') 
})
app.get('/mail',(req , res)=>{
  res.sendFile(__dirname+'/email.html')
})
app.post('/new-message', (req, res) => {
  let email = req.body.email;
  let msg = req.body.message;

  exec(`python ${__dirname}/email-bridge.py ${email} ${msg}`, (err, stdout) => {
      if (err) {
          console.log(err);
          return
      }
      console.log(stdout)
  })
})
app.listen(PORT) ; 