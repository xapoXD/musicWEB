var express = require('express');
var router = express.Router();
var debug = require('debug')('router:songs');
var db = require('better-sqlite3')('songs.sqlite');

var Song = require('../model/entity/Song');
//import Song from "../model/entity/Song";
var fs = require('fs');

// get songu
router.get("/", function (req, res, next) {


    console.log("Zacina vypis songu");
    const rows = db.prepare('SELECT * FROM songs').all();
    //console.log(rows);
    const collection = [];
    for (let row of rows) {
        const song = new Song(row.id, row.name, row.popis, row.songlocation);
       // console.log(song);
        collection.push(song);
    }
    const songs = collection;
    
   // console.log(songs);
    
    res.send(songs);
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


//edit songu
router.patch("/:id", (req, res) => {
    const body = req.body;
    //console.log(body);
    const id = req.params.id;
    //console.log(id);
    if (id) {
        const song = db.prepare('SELECT * FROM songs WHERE id = ?').get(id);
        if (song) {
            Object.assign(song, body);
            const stm = db.prepare( "UPDATE songs SET name = ?, popis = ? WHERE id = ?" );
            stm.run(song.name, song.text ,parseInt(id));
        } else {
            res.sendStatus(404)
        }
        res.send(song);
        //console.log(song);
    } else {
        res.sendStatus(404);
    }
});

//delete songu
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
        //find path to file
        var location = db.prepare('SELECT songlocation FROM songs WHERE id = ?').get(id);
       // console.log(location); // objekt -> array
       // var poop = JSON.stringify(location);
        //console.log(poop);
        const LOL = Object.values(location);
       // console.log(LOL); // array -->string
        const poop = LOL.toString();
        var rofl = poop.slice(28);
       // console.log("HOTOVO: " + rofl);

        //delete file
        var path = "public/songs/" + rofl;
        console.log(path);
        fs.unlink(path, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
        });

        db.prepare('DELETE FROM songs WHERE id = ?').run(id);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }

});



module.exports = router;