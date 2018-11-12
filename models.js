const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plant');

module.exports = db;

