import { Viaje } from "../models/Viaje.js";
import { Testimonio } from "../models/testimonios.js";

const paginaInicio = async ( req, res, next ) => {

const promiseDB = [];  //Creo un arreglo al que le agrego las dos consultas para que se ejecuten al mismo tiempo y una no pause la otra

promiseDB.push( Viaje.findAll( {limit: 3} ) );
promiseDB.push( Testimonio.findAll( {limit: 3} ) );

    try {
        const resultado = await Promise.all( promiseDB ); 

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
        return next();
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = ( req, res, next ) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
    return next();
}

const paginaViajes = async ( req, res, next ) => {

    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Viajes'
    });

    return next();
}

const paginaTestimonios = async ( req, res, next ) => {

    try {
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });
    } catch (error) {
        console.log(error);
    }

    next();
}

const paginaDetalleViaje = async ( req, res, next ) => {
    const { slug } = req.params

    try {
        const viaje = await viaje.findOne( { where: {slug} } );
        res.render('viaje', {
            pagina: 'Informacion del viaje',
            viaje
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje
}