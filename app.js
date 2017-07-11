const express = require('express')
const path =  require('path')
const app = express();

app.use(function(req, res, next) {  
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
 }); 

const uploadAPI = require('./upload')



app.use(express.static(path.join(__dirname,'upload'),{maxAge: 0}))//315360000 }))

app.set('port', process.env.PORT || 8080)

app.get('/', (req,res)=>{
    res.end('still alive')
})

app.get('/uploadImage' , uploadAPI.upload)

app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})

