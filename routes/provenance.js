const express = require("express");
const router = express.Router();
const provenanceController = require('../controllers/provenanceController');

router.get('/', provenanceController.getProvenance);

module.exports = router;
