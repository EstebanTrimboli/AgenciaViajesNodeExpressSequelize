import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonio = db.define('testimonios', {
    nombre: {
        type: Sequelize.STRING
    },

    email: {
        type: Sequelize.STRING
    },

    mensaje: {
        type: Sequelize.STRING
    }
});