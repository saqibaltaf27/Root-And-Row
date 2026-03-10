const Ingredient = require('../models/ingredientModel');

exports.createIngredient = (req, res) => {
    const {name, farm_id, date_received, daily_special } = req.body;

    if(!name || !farm_id || !date_received) {
        return res.status(400).json({
            error: "Missing required fields"
        });
    }

    Ingredient.create({
        name,
        farm_id,
        date_received,
        daily_special
    }, (err, result) => {
        if(err) return res.status(500).json({
            error: "Failed to create Ingredient"
        });

        res.status(201).json({
            message: "Ingredient Created", id: result.id
        });
    });
};
