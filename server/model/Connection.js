/*const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('songs.sqlite', options);

export default db;
*/

const sqlite = require('better-sqlite3');
const path = require('../');
const db = new sqlite(path.resolve('songs.sqlite'), {fileMustExist: true});

function query(sql, params) {
    return db.prepare(sql).all(params);
}

module.exports = {
    query
}