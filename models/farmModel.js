const db = require("../database/db");

const Farm = {
    getAll: (callback) => {
        const sql = "Select * From farms";
        db.all(sql, [], (err, rows) => {
            callback(err, rows);
        });
    },

    getById: (id, callback) => {
        const sql = "Select * From farms Where id = ?";
        db.get(sql, [id], (err, row) => {
            callback(err, row);
        });
    },
};

module.exports = Farm;