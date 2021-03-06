var settings = require('../setting'),
    Sequelize = require('sequelize');

var MySequelize = new Sequelize(settings.db, settings.mysql_username, settings.mysql_password, {
    host: settings.host,
    port:settings.mysql_host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 30000
    }
});

module.exports = MySequelize;