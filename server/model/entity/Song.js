export default class Article {
    id = null;
    name = '';
    text = '';
    songlocation = '';
    
    constructor(id, name, text, songlocation) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.songlocation = songlocation;
    }
}