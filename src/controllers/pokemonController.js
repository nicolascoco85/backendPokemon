const GenericController = require('./genericController')
const PokemonService = require('../services/pokemonService')
const PokemonDTO = require('../dtos/pokemonDTO')
const PokemonFilter = require('../filters/pokemonFilter')
const PokemonAssembler = require('../assemblers/pokemonAssembler')

class PokemonController extends GenericController{

    static getPokemonById(req, res, next) {
        const id = req.params.id
        PokemonController.resolve(next, PokemonService.get(id), pokemon => {
            res.status(200).send({
                data: PokemonAssembler.toDTO(pokemon),
            })
        })
    }

    static getPokemons(req, res, next) {
        const filter = new PokemonFilter()
        filter.fillData(req.query)
        PokemonController.resolve(next,
                Promise.all([
                    PokemonService.find(filter), 
                    PokemonService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: PokemonAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createPokemon(req, res, next) {
        let pokemonDTO = new PokemonDTO()
        pokemonDTO.hydrate(req.body)
        PokemonController.resolve(next, PokemonService.save(PokemonAssembler.fromDTO(pokemonDTO)), pokemon => {
                res.status(201).send({
                    data: PokemonAssembler.toDTO(pokemon)
                })
            })
    }
    
    static updatePokemon(req, res, next) {
        let id = req.params.id
        let pokemonDTO = new PokemonDTO()
        pokemonDTO.hydrate(req.body)
        PokemonController.resolve(next, PokemonService.update(id, PokemonAssembler.fromDTO(pokemonDTO)), pokemon => {
                res.status(200).send({
                    data: PokemonAssembler.toDTO(pokemon)
                })
            })
    }
    
    static deletePokemon(req, res, next) {
        let id = req.params.id
        PokemonController.resolve(next, PokemonService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = PokemonController