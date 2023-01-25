const Sequelize = require('sequelize');
const database = require('../config/db');

const turmas = database.define('Turma', 
{
    Turma_ID: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: 
    {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = turmas;