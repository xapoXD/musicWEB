import Song from "./entity/Song";
import db from "./Connection";


export default class ArticleEntityManager {
    findById(id) {
        const row = db.prepare('SELECT * FROM article WHERE id = ?').get(id);
        const article = new Article(row.id, row.title, row.text, row.date, row.image);
        return article;
    }

    findAll() {
        const rows = db.prepare('SELECT * FROM article').all();
        const collection = [];
        for (let row of rows) {
            const article = new Article(row.id, row.title, row.text, row.date, row.image);
            collection.push(article)
        }
        return collection;
    }

    findBy(filter) {

    }

    remove(id) {
        db.prepare("DELETE FROM article WHERE id = ?").run(id)
    }

    update(id, text, title, date, image) {
        const stm = db.prepare("UPDATE article SET image = ?, title = ?, date = ?, text = ? WHERE id = ?");
        const row = stm.run(image, title, date, text, id);
        return this.findById(row.id);
    }

    create(title, text, date, image) {
        const stm = db.prepare("INSERT INTO article (image, title, date, text) VALUES (?,?,?,?)");
        const row = stm.run(image, title, date, text);
        return this.findById(row.id);
    }
}