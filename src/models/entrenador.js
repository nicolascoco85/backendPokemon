const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EntrenadorSchema = Schema({
	nombre: {
		type: String,
	},
	pokemon: {
		type: Number,
	},
	
});

module.exports = mongoose.model('Entrenador', EntrenadorSchema);