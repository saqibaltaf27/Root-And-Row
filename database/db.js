const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/root_and_row.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("DB Connection error: ", err.message);
    else console.log("Connected to SQLite database.");
});

module.exports = db;
