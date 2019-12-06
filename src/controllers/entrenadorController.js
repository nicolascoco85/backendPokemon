const GenericController = require('./genericController')
const EntrenadorService = require('../services/entrenadorService')
const EntrenadorDTO = require('../dtos/entrenadorDTO')
const EntrenadorFilter = require('../filters/entrenadorFilter')
const EntrenadorAssembler = require('../assemblers/entrenadorAssembler')

class EntrenadorController extends GenericController{

    static getEntrenadorById(req, res, next) {
        const id = req.params.id
        EntrenadorController.resolve(next, EntrenadorService.get(id), entrenador => {
            res.status(200).send({
                data: EntrenadorAssembler.toDTO(entrenador),
            })
        })
    }

    static getEntrenadors(req, res, next) {
        const filter = new EntrenadorFilter()
        filter.fillData(req.query)
        EntrenadorController.resolve(next,
                Promise.all([
                    EntrenadorService.find(filter), 
                    EntrenadorService.count(filter)
                ]), results => {
            res.status(200).send({
                data: {
                    list: EntrenadorAssembler.toDTOs(results[0]),
                    total:results[1],
                    offset: filter.pagination.offset,
                    limit: filter.pagination.limit
                }
            })
        })
    }
    
    static createEntrenador(req, res, next) {
        let entrenadorDTO = new EntrenadorDTO()
        entrenadorDTO.hydrate(req.body)
        EntrenadorController.resolve(next, EntrenadorService.save(EntrenadorAssembler.fromDTO(entrenadorDTO)), entrenador => {
                res.status(201).send({
                    data: EntrenadorAssembler.toDTO(entrenador)
                })
            })
    }
    
    static updateEntrenador(req, res, next) {
        let id = req.params.id
        let entrenadorDTO = new EntrenadorDTO()
        entrenadorDTO.hydrate(req.body)
        EntrenadorController.resolve(next, EntrenadorService.update(id, EntrenadorAssembler.fromDTO(entrenadorDTO)), entrenador => {
                res.status(200).send({
                    data: EntrenadorAssembler.toDTO(entrenador)
                })
            })
    }
    
    static deleteEntrenador(req, res, next) {
        let id = req.params.id
        EntrenadorController.resolve(next, EntrenadorService.delete(id), message => {
                res.status(200).send({
                    data: message
                })
            })
    }
}

module.exports = EntrenadorController