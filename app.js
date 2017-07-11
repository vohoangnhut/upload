const express = require('express')
const path =  require('path')
const app = express();

const uploadAPI = require('./upload')


app.use(express.static(path.join(__dirname,'upload'),{maxAge: 0}))//315360000 }))

app.set('port', process.env.PORT || 8080)

app.get('/', (req,res)=>{
    res.end('still alive')
})

app.get('/upload', uploadAPI.upload)

app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})
