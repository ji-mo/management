require('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('management', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql', /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  // logging: null
});

module.exports = sequelize;
