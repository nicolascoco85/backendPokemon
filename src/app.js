var express = require('express');
const bodyParser = require('body-parser');
//<import-routes>
const usuarioRouter = require('./routes/usuarioRouter')
const { isAuth } = require('./middlewares/authMiddleware')
const pokemonRouter = require('./routes/pokemonRouter')
const entrenadorRouter = require('./routes/entrenadorRouter')
//</import-routes>
const app = express();
const cors = require('cors')

//cors
app.use(cors())

//middleware
    //body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//<routes>
app.use('/auth', usuarioRouter)
app.use('/pokemons', isAuth, pokemonRouter)
app.use('/entrenadors', isAuth, entrenadorRouter)
//</routes>

//erros
app.use((req, res, next) => {
    var error = new Error('Not found.')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({
        error: err.message
    })
})

module.exports = app;