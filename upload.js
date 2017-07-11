const path =  require('path')
var fs      = require('fs')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upload(req,res){

    console.log('come to upload ------')

    if(!req.body){
        res.end( JSON.stringify({'msg':'ERROR','req.body.file':'base64','return':'URL'}) );
        console.log('Body is empty ------')
        return;
    }

    var namefile = '_' + Math.random().toString(36).substr(2, 9) + '.png';

    fs.writeFile( __dirname + namefile , req.body.file , 'base64', function(err) {
        if (err) {
            //response.send("failed to save");
            console.log("failed to save : ----" + err)
        } else {
            console.log("succeeded in saving")

            //Local
            console.log('return client ------ file name: '+ namefile)
            res.send( namefile );
        }
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
  upload
}