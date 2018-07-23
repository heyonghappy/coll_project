var settings = require('../settings'),
    Sequelize = require('sequelize');

var MySequelize = new Sequelize(settings.db, settings.mysql_username, settings.mysql_password, {
    host: settings.mysql_host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 30000
    }
});

module.exports = MySequelize;