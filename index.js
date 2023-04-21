import express from "express";
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config.js'


const app = express();

//Conectar a la base de datos
db.authenticate()
    .then( () => console.log('Contectado a la base de datos'))
    .catch( error => console.log(error) );

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

app.use( ( req, res, next ) => {
    const year = new Date();

    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

//Agregar bodyparser para leer los datos del form
app.use(express.urlencoded( {extended: true} ));

//Definir la carpeta pública
app.use( express.static('public') );

//Agregar el router
app.use('/', router);

app.listen(() => {
    console.log(`El puerto está funcionando en el puerto ${port}`);
});