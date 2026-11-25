const express = require('express');
const { classify } = require('../controllers/classify.controller');

const router = express.Router();

router.post('/classify', classify);

module.exports = router;