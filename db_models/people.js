const Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js')

const People = mySequelize.define('people', {
    chinese_name: { type: Sequelize.STRING },
    english_name: { type: Sequelize.STRING },
    avatar: { type: Sequelize.STRING },
    login_name:{ type: Sequelize.STRING },
    password:{ type: Sequelize.STRING }
})


module.exports = People;
