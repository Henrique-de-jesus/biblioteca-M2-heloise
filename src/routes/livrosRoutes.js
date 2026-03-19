const express = require('express');

const router = express.router();

const livrosController = require('../controllers/livrosController');

router.get('/', livrosController.listarLivros)

module.exports = router