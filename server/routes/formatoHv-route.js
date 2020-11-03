/*jshint esversion:8 */

const express = require('express');
const formatoHvController = require('../controllers/formatoHv-controller');

const router = express.Router();

router.get('/', formatoHvController.formatoHv);

module.exports = router;