const Ingredient = require("../models/ingredientModel");

exports.getProvenance = (req, res) => {
    Ingredient.getRecent((err, data) => {
        if(err) return res.status(500).json({
            error: "Failed to fetch provenance"
        });
        res.json(data);
    });
};