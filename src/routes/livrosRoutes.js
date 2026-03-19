const express = require("express");

const router = express.Router();

const livrosController = require("../controllers/livrosController");

router.get("/", livrosController.listarLivros);

router.get("/:id", livrosController.listarLivrosPorId);

module.exports = router;
