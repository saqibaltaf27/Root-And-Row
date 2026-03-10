const db = require('../database/db');

// Create Tables
db.serialize(() => {
    db.run(`
        Create Table If Not Exists farms(
        id Integer Primary Key AutoIncrement,
        name Text Not Null,
        location Text Not Null,
        specialty Text Not Null)`);

    db.run(`
        Create Table If Not Exists ingredients(
        id Integer Primary Key AutoIncrement,
        name Text Not Null,
        farm_id Integer,
        date_received Text Not Null,
        daily_special Integer Default 0,
        Foreign Key(farm_id) References farms(id))`);


    // Seed Farms
    db.run(`
        Insert Into farms(name, location, specialty)
        Values('Green Valley Farms', 'Springfield County', 'Organic Root Vegetables'),
        ('Sunny Diary', 'Maple Town', 'Grass-fed Dairy'),
        ('Heritage Orchards', 'Riverdale', 'Seasonal Fruits')`);

    // Seed Ingredients
    db.run(`
        Insert Into ingredients(name, farm_id, date_received, daily_special)
        Values('Carrots', 1, datetime('now', '-2 hours'), 1),
        ('Milk', 2, datetime('now', '-3 hours'), 0),
        ('Apples', 3, datetime('now', '-1 hours'), 1)`);

    console.log('Database seeded successfully!!!');
});

