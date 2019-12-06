const Pokemon = require('../models/pokemon');

class PokemonDAO{
    static save(pokemon){
        return new Promise((resolve, reject) => {
            Pokemon.create(pokemon, (err, pokemonStored) => {
                if (err || !pokemonStored){
                    reject({message: "no pudo guardarse el pokemon"});
                } else {
                    pokemon._id = pokemonStored._id;
                    resolve(pokemon);
                }
            });
        })
    }

    static fetch(id){
        return new Promise((resolve, reject) => {
            Pokemon.findById(id).exec((err, pokemon) => {
                if (err || !pokemon){
                    reject ({message: "No pudo econtrarse el pokemon"});
                } else {
                    resolve(pokemon);
                }
            })
        })
    }

    static find(filter, pagination){
        return new Promise((resolve, reject) => {
            Pokemon.find(filter).limit(pagination.limit).skip(pagination.offset).exec((err, pokemons) => {
                if (err || !pokemons){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(pokemons);                    
                }
            })
        })
    }

    static count(filter){
        return new Promise((resolve, reject) => {
            Pokemon.count(filter).exec((err, total) => {
                if (err){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(total);                    
                }
            })
        })
    }

    static update(id, pokemon) {
		const {_id, ...data} = pokemon._doc;
		let dtoUpdate = {$set:data}
        return new Promise((resolve, reject) => {
            Pokemon.findByIdAndUpdate(id, dtoUpdate).exec((err, pokemon2) => {
                if (err || !pokemon2){
                    console.log(err);
                    reject({message: "error interno"});
                } else {
                    resolve(pokemon2);
                }
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            
            Pokemon.findByIdAndRemove(id).exec((err, deleted) => {
                if (err || !deleted){
                    reject({message: "no se puede borrar el pokemon"});
                } else {
                    resolve({_id:id});
                }
            })
        })
    }
}

module.exports = PokemonDAO