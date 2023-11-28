
const express = require('express');
const { findAll, create, update, findOne, deleteOne } = require('./users.controllers');
const router = express.Router();

router.get('/users', findAll)
router.post('/users', create)
router.get('/users/:id', findOne)
router.patch('/users/:id', update)
router.delete('/users/:id', deleteOne)

module.exports = router;