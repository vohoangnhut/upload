const path =  require('path')
var fs      = require('fs')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upload(req,res){

    console.log('come to upload ------')

    var namefile = '_' + Math.random().toString(36).substr(2, 9) + '.png';

    console.log('__dirname : '+ __dirname)

    fs.writeFile( path.join(__dirname,'/public/upload/') + namefile , req.body.file , 'base64', function(err) {
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