const GenericAssembler = require('./genericAssembler')


const Entrenador = require('../models/entrenador')
const EntrenadorDTO = require('../dtos/entrenadorDTO')

class EntrenadorAssembler extends GenericAssembler{

	static toDTOs(entrenadors) {
		return super.convertList(entrenadors, EntrenadorAssembler.toDTO)
	}

	static fromDTOs(entrenadorsDTO) {
		return super.convertList(entrenadorsDTO, EntrenadorAssembler.fromDTO)
	}

	static toDTO(entrenador) {
		const entrenadorDTO = super.toDTO(entrenador, EntrenadorDTO)
		entrenadorDTO.nombre = entrenador.nombre
		entrenadorDTO.pokemon = entrenador.pokemon
		
		return entrenadorDTO
	}

	static fromDTO(entrenadorDTO) {
		const entrenador = super.fromDTO(entrenadorDTO, Entrenador)
		entrenador.nombre = entrenadorDTO.nombre
		entrenador.pokemon = entrenadorDTO.pokemon
		
		return entrenador
	}

}

module.exports = EntrenadorAssembler