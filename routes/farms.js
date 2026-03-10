const express = require("express");
const router = express.Router();
const farmsController = require('../controllers/farmsController');

router.get('/', farmsController.getAllFarms);

module.exports = router;
