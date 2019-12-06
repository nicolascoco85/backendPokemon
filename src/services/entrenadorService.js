const EntrenadorDAO = require('../daos/entrenadorDAO')

class EntrenadorService{
    static async get(id) {
		try {
			const entrenador = await EntrenadorDAO.fetch(id)
			return entrenador
		} catch(err) {
			throw err
		}
    }

	static async find(filter) {
		try {
			const entrenadors = await EntrenadorDAO.find(filter.filterData(), filter.pagination)
			return entrenadors
		} catch(err) {
			throw err
		}
	}

    static async count(filter) {
		try {
			return await EntrenadorDAO.count(filter.filterData())
		} catch (err) {
			throw err
		}
    }

    static async save(entrenador) {
		try {
			entrenador = await EntrenadorDAO.save(entrenador)
            return entrenador
		} catch (err) {
			throw err
		}
    }

	static async update(id, entrenador) {
		try {
			entrenador = await EntrenadorDAO.update(id, entrenador)
			return await this.get(id)
		} catch (err) {
			throw err
		}
    }

    static async delete(id) {
		try {
			return await EntrenadorDAO.delete(id)
		} catch (err) {
			throw err
		}
    }
}

module.exports = EntrenadorService