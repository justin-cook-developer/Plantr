const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plant');

// Define models
const Gardner = db.define('gardner', {
  name : {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: Sequelize.INTEGER
});


const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: Sequelize.STRING,
  planted_on: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  }
});

// Specify model relationships
Plot.belongsTo(Gardner);
Gardner.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

Gardner.belongsTo(Vegetable, {as: 'favorite_vegetable'});

// Populate tables
const carrot = Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now()
});
carrot.then(carrot => {
 // create gardner
 //in next .then, create plot
 //should store each in var to make join table
})

const apple =Vegetable.create({
  name: 'apple',
  color: 'green',
  date: Date.now()
});

const pear = Vegetable.create({
  name: 'pear',
  color: 'green',
  date: Date.now()
});



module.exports = db;
