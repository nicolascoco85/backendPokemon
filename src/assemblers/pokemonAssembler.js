const GenericAssembler = require('./genericAssembler')


const Pokemon = require('../models/pokemon')
const PokemonDTO = require('../dtos/pokemonDTO')

class PokemonAssembler extends GenericAssembler{

	static toDTOs(pokemons) {
		return super.convertList(pokemons, PokemonAssembler.toDTO)
	}

	static fromDTOs(pokemonsDTO) {
		return super.convertList(pokemonsDTO, PokemonAssembler.fromDTO)
	}

	static toDTO(pokemon) {
		const pokemonDTO = super.toDTO(pokemon, PokemonDTO)
		pokemonDTO.numero = pokemon.numero
		pokemonDTO.nombre = pokemon.nombre
		
		return pokemonDTO
	}

	static fromDTO(pokemonDTO) {
		const pokemon = super.fromDTO(pokemonDTO, Pokemon)
		pokemon.numero = pokemonDTO.numero
		pokemon.nombre = pokemonDTO.nombre
		
		return pokemon
	}

}

module.exports = PokemonAssembler