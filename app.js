const express = require('express')
const path =  require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();

app.use(cors())

const uploadAPI = require('./upload')



app.use(express.static(path.join(__dirname,'public'),{maxAge: 0}))//315360000 }))

app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'})) // parse application/json
app.use(cookieParser());

app.set('port', process.env.PORT || 8080)

app.get('/', (req,res)=>{
    res.end('still alive')
})

app.get('/uploadImage' , uploadAPI.upload)

app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})

