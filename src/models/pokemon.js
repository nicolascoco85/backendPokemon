const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PokemonSchema = Schema({
	numero: {
		type: Number,
	},
	nombre: {
		type: String,
	},
	
});

module.exports = mongoose.model('Pokemon', PokemonSchema);