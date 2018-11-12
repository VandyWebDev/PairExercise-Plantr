const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');
module.exports = db;


const Gardener = db.define('gardener', {
  name: {
    type : Sequelize.STRING
  },
  age: {
    type : Sequelize.INTEGER
  }
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shade: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on : {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  }
})

Vegetable.belongsToMany(Plot, {through: 'vegetablePlot'})
Plot.belongsToMany(Vegetable, {through: 'vegetablePlot'})

Gardener.belongsTo(Vegetable, {as: 'favoriteVegetableId'})
Plot.belongsTo(Gardener, {as: 'gardenerId'})

module.exports = {
  db,
  Vegetable,
  Plot,
  Gardener
}
