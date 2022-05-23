var express = require('express');
var router = express.Router();
var debug = require('debug')('router:songs');

//import SongController from "../controller/SongController";
//const controller = new SongController();

router.get("/", function (req, res, next) {
    const articles = controller.getAll();
    res.send(articles);
});

// post na songu

router.post('/', function(req , res) {
    var multiparty = require('multiparty');
    var form = new multiparty.Form();
    var fs = require('fs');

    form.parse(req, function (err, fields, files) {

        console.log(files);
        // files.file[0].path; - cesta k souboru !!!!!!!!
       var CestaKFilu = "public/songs/";
       var s = files.file[0].originalFilename;
       CestaKFilu = CestaKFilu + s;

       console.log("Cesta: " + CestaKFilu);
       fs.copyFile(files.file[0].path, CestaKFilu, (err) => {
           if (err) {
               console.log("Error Found VOLEEE:", err);
           }
       });
      
       var CestaZpet = "http://localhost:3001/songs/";
       CestaZpet = CestaZpet + s;
       console.log("Cesta k ulozenemu souboru " + CestaZpet);
       
       res.send(CestaZpet);
       
    });
});



module.exports = router;