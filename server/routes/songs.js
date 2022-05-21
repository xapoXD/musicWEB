var express = require('express');
var router = express.Router();
var debug = require('debug')('router:songs');

router.get("/", function (req, res, next) {
    const articles = controller.getAll();
    res.send(articles);
});

/*
router.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    const article = {
        image: body.image,
        title: body.title,
        date: new Date().toISOString(),
        text: body.text
    }

    const stm = db.prepare("INSERT INTO songs (name, songlocation, text) VALUES (?,?,?,?)");
    stm.run(...Object.values(songs))
    res.send(songs);
}); */

// post na songu

router.post('/', function(req , res) {
    var multiparty = require('multiparty');
    var form = new multiparty.Form();
    var fs = require('fs');

    form.parse(req, function(err, fields, files) {

        console.log(files);
       // files.file[0].path; - cesta k souboru !!!!!!!!
        // odsud moje ...
        const CestaKFilu = "/server/public/songs/" + Nazev(10) +".mp3";

        fs.copyFile(files.file[0].path, CestaKFilu,(err) => {
            if (err) {
                console.log("Error Found:", err);
            }
            else {

                // Get the current filenames
                // after the function
                getCurrentFilenames();
                console.log("\nFile Contents of copied_file:", fs.readFileSync("copied_file.txt", "utf8"));
            }
        });





        //var imgArray = files.imatges;
        /*
                    var newPath = './public/songs/'+fields.imgName+'/';
                    var singleImg = imgArray[i];
                    newPath+= singleImg.originalFilename;
                    readAndWriteFile(singleImg, newPath);

                res.send("File uploaded to: " + newPath);
        */
    });

    function readAndWriteFile(singleImg, newPath) {

        fs.readFile(singleImg.path , function(err,data) {
            fs.writeFile(newPath,data, function(err) {
                if (err) console.log('ERRRRRR!! :'+err);
                console.log('Fitxer: '+singleImg.originalFilename +' - '+ newPath);
            })
        })
    }

    function Nazev(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

})

module.exports = router;