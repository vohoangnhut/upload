const express = require('express')
const path =  require('path')
const app = express();

app.set('port', process.env.PORT || 8080)

app.get('/', (req,res)=>{
    res.end('still alive')
})

app.listen(app.get('port'), function(){console.log(`app is running on port ${app.get('port')}`)})
