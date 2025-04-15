const express = require('express');
const { getTemperature } = require('../controllers/temperature-controller');
const router = express.Router();

router.get('/', getTemperature);

module.exports = router;
