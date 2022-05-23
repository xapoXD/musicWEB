const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('songs.sqlite', options);

export default db;