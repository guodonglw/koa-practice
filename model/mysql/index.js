const Sequelize = require('sequelize');
const { mysql } = require('../../config/config');  // 引入mysql配置

module.exports = new Sequelize(mysql.database, mysql.username, mysql.password, {
  host: mysql.host,
  dialect: mysql.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true
  }
});