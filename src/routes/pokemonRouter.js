const express = require('express')
const PokemonController = require('../controllers/pokemonController');

const api = express.Router();

api.get('/:id', PokemonController.getPokemonById);
api.get('', PokemonController.getPokemons);
api.post('', PokemonController.createPokemon);
api.put('/:id', PokemonController.updatePokemon);
api.delete('/:id', PokemonController.deletePokemon);

module.exports = api;