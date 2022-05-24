var express = require('express');
var router = express.Router();
var debug = require('debug')('router:upload');


//import db from "../model/Connection";


//import SongController from "../controller/SongController";
//const controller = new SongController();

var db = require('better-sqlite3')('songs.sqlite');


router.post("/", (req, res) => {

    console.log("Zacina post celeho objektu do dazabaze");
    
    console.log(req.body);
    const body = req.body;
    
    const song = {
        name: body.name,
        songlocation: body.songlocation,
        text: body.text
    }
    //console.log("Posem funguje: " + song.songlocation); // po sem probehne...
    var stm = db.prepare("INSERT INTO songs (name, songlocation, popis) VALUES (?,?,?)");
    stm.run(...Object.values(song));
   
    //stm.run(name, songlocation, text);
    res.send(song);

    
});


module.exports = router;

