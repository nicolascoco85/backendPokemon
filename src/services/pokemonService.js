const PokemonDAO = require('../daos/pokemonDAO')

class PokemonService{
    static async get(id) {
		try {
			const pokemon = await PokemonDAO.fetch(id)
			return pokemon
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const pokemons = await PokemonDAO.find(filter.filterData(), filter.pagination)
			return pokemons
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await PokemonDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(pokemon) {
		try {
			pokemon = await PokemonDAO.save(pokemon)
            return pokemon
		} catch (err) {
			throw err
		}
    }

	static async update(id, pokemon) {
		try {
			pokemon = await PokemonDAO.update(id, pokemon)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await PokemonDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = PokemonService