const Farm = require("../models/farmModel");

exports.getAllFarms = (req, res) => {
    Farm.getAll((err, farms) => {
        if(err) return res.status(500).json({
            error: "Failed to fetch farms"
        });
        res.json(farms);
    });
};
