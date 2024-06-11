// atributos do usuário no banco de dados

const Sequelize = require('sequelize');
const DataTypes = require('sequelize');
const database = require('../db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING, // Alterado para STRING
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Ativo', 'Inativo'),
        allowNull: false
    }
});

module.exports = Usuario;