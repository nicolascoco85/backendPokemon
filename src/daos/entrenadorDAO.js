const Entrenador = require('../models/entrenador');

class EntrenadorDAO{
    static save(entrenador){
        return new Promise((resolve, reject) => {
            Entrenador.create(entrenador, (err, entrenadorStored) => {
                if (err || !entrenadorStored){
                    reject({message: "no pudo guardarse el entrenador"});
                } else {
                    entrenador._id = entrenadorStored._id;
                    resolve(entrenador);
                }
            });
        })
    }

    static fetch(id){
        return new Promise((resolve, reject) => {
            Entrenador.findById(id).exec((err, entrenador) => {
                if (err || !entrenador){
                    reject ({message: "No pudo econtrarse el entrenador"});
                } else {
                    resolve(entrenador);
                }
            })
        })
    }

    static find(filter, pagination){
        return new Promise((resolve, reject) => {
            Entrenador.find(filter).limit(pagination.limit).skip(pagination.offset).exec((err, entrenadors) => {
                if (err || !entrenadors){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(entrenadors);                    
                }
            })
        })
    }

    static count(filter){
        return new Promise((resolve, reject) => {
            Entrenador.count(filter).exec((err, total) => {
                if (err){
                    reject({message: "no se pudo realizar la busqueda"});
                }else{
                    resolve(total);                    
                }
            })
        })
    }

    static update(id, entrenador) {
		const {_id, ...data} = entrenador._doc;
		let dtoUpdate = {$set:data}
        return new Promise((resolve, reject) => {
            Entrenador.findByIdAndUpdate(id, dtoUpdate).exec((err, entrenador2) => {
                if (err || !entrenador2){
                    console.log(err);
                    reject({message: "error interno"});
                } else {
                    resolve(entrenador2);
                }
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            
            Entrenador.findByIdAndRemove(id).exec((err, deleted) => {
                if (err || !deleted){
                    reject({message: "no se puede borrar el entrenador"});
                } else {
                    resolve({_id:id});
                }
            })
        })
    }
}

module.exports = EntrenadorDAO