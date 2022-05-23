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
    console.log("Posem funguje: " + song.songlocation); // po sem probehne...
    var stm = db.prepare("INSERT INTO songs (name, songlocation, text) VALUES (?,?,?)");
    stm.run(...Object.values(song));
    console.log("funguj: " + stm);
    //stm.run(name, songlocation, text);
    res.send(song);
    console.log("Ulozeno: " + song);
    
});


module.exports = router;

