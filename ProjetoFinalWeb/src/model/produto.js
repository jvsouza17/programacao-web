// atributos de produtos do banco de dados

const Sequelize = require('sequelize');
const database = require('../db');

const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING, // Mantido como STRING conforme o HTML
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
});

module.exports = Produto;
