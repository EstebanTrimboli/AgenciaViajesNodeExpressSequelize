import { Testimonio } from '../models/testimonios.js';

const guardarTestimonio = async ( req, res ) => {
    const { nombre, email, mensaje } = req.body;

    const errores = [];

    if( nombre.trim() === '' ) {
        errores.push({error: 'El nombre es obligatorio'});
    }

    if( email.trim() === '' ) {
        errores.push({error: 'El email es obligatorio'});
    }

    if( mensaje.trim() === '' ) {
        errores.push({error: 'El mensaje es obligatorio'});
    }

    if( errores.length > 0 ) {

        //Consultar testimonios existentes
        const testimonios = await Testimonio.findAll();

        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            email,
            mensaje,
            testimonios

        })
    } else {
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimonios');
        } catch (error) {
            console.log(error);
        }
    }
    
}

export {
    guardarTestimonio
}