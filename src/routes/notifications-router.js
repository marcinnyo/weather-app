const express = require('express');
const { postNotification } = require('../controllers/notifications-controller');
const router = express.Router();

router.post('/', postNotification);

module.exports = router;
