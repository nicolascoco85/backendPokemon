const GenericFilter = require('./genericFilter');
class PokemonFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            numero: null,
			nombre: null,
        })
    }

};

module.exports = PokemonFilter;