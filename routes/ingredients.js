const express = require("express");
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');
const apiKeyAuth = require('../middleware/apiKeyAuth');

router.post('/', apiKeyAuth, ingredientsController.createIngredient);

module.exports = router;
