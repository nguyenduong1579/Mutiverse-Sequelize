// get the seq package
const Sequelize = require('sequelize');

// model = outline of the data we'll store against an entity
const restaurantModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
  },
  tel: {
    type: Sequelize.FLOAT, // INTEGER in sqlite
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: true,
  },
  imagelink: {
    type: Sequelize.STRING,
    allowNull: true,
  },
};

const menuModel = {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

const menuItemModel = {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT, // may end up as "REAL" in sqlite
    allowNull: false,
  },
};

module.exports = { restaurantModel, menuModel, menuItemModel };