const express = require('express');
const { findAll, create, update, findOne, deleteOne } = require('./repairs.controllers');
const router = express.Router();

router.get('/repairs', findAll)
router.post('/repairs', create)
router.get('/repairs/:id', findOne)
router.patch('/repairs/:id', update)
router.delete('/repairs/:id', deleteOne)

module.exports = router;

// control + shift + l para seleccionar todas las similares