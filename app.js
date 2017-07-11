const express = require('express')
const path =  require('path')
const app = express();

app.use(function(req, res, next) {  
          // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
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

