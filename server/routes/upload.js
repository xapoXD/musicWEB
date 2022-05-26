var express = require('express');
var router = express.Router();
var debug = require('debug')('router:upload');

var Song = require('../model/entity/Song');
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
    console.log("Posem funguje: " + stm);
    //stm.run(name, songlocation, text);
    res.send(song);

    
});

//get 1 songu
router.get('/:id', (req, res, next) => {
    //console.log("dostalo se to sem ZASEEE");
    const id = req.params.id;
    console.log(id); // vypise se nazev brasko opravto

    try{
        const row = db.prepare('SELECT * FROM songs WHERE id = ?').get(id);
        //console.log("tady je row: " + row);
        const song = new Song(row.id, row.name, row.popis, row.songlocation);
        //console.log("song: " + song);
        res.send(song);

    }catch (e){

    }
});


module.exports = router;

