const GenericModelDTO = require('./genericModelDTO')

class EntrenadorDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.nombre = null
		this.pokemon = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = EntrenadorDTO