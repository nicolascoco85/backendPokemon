const express = require('express')
const EntrenadorController = require('../controllers/entrenadorController');

const api = express.Router();

api.get('/:id', EntrenadorController.getEntrenadorById);
api.get('', EntrenadorController.getEntrenadors);
api.post('', EntrenadorController.createEntrenador);
api.put('/:id', EntrenadorController.updateEntrenador);
api.delete('/:id', EntrenadorController.deleteEntrenador);

module.exports = api;