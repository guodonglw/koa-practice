const Sequelize = require('sequelize');
const sequelize = require('./index');  // 引入sequelize实例

const Customer = sequelize.define(
  'customer',
  {
    id: {
      type: Sequelize.UUID,
      unique: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sex: {
      type: Sequelize.ENUM(['男', '女'])
    },
    address: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  }
)

module.exports = Customer;