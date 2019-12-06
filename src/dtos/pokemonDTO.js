const GenericModelDTO = require('./genericModelDTO')

class PokemonDTO extends GenericModelDTO {
    constructor(){
		super()
		this.id = null
		this.numero = null
		this.nombre = null
    }

    hydrate(data){
        super.hydrate(data)
    }
}

module.exports = PokemonDTO