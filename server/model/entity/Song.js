module.exports = class Song {
    name = '';
    id = null;
    songlocation = '';
    text = '';
    constructor(id, name, text, songlocation) {
        this.name = name;
        this.id = id;
        this.songlocation = songlocation;
        this.text = text;
    }
}