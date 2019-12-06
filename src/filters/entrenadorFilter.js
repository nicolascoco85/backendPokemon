const GenericFilter = require('./genericFilter');
class EntrenadorFilter extends GenericFilter{
    constructor(){
        super();
        this.data =  Object.assign(this.data,{
            nombre: null,
			pokemon: null,
        })
    }

};

module.exports = EntrenadorFilter;