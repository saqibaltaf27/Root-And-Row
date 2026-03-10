const db = require('../database/db');

const Ingredient = {
    create: (data, callback) => {
        const sql = `
        Insert Into ingredients (name, farm_id, date_received, daily_special)
        Values (?, ?, ?, ?)
        `;

        const { name, farm_id, date_received, daily_special } = data;
        db.run(sql, [name, farm_id, date_received, daily_special ? 1 : 0], 
            function (err) {
                callback(err, { id: this.lastID});
            });
    },

    getRecent: (callback) => {
        const sql = `
        Select a.*, b.name as farm_name, b.location, b.specialty 
        From ingredients a
        join farms b on a.farm_id = b.id 
        Where a.date_received >= datetime('now', '-1 day')`;

        db.all(sql, [], (err, rows) => callback(err, rows));
    },
};

module.exports = Ingredient;