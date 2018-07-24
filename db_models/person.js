const Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js')

var Person = mySequelize.define('user', {
    chinese_name: { type: Sequelize.STRING },
    english_name: { type: Sequelize.STRING },
    avatar: { type: Sequelize.STRING }
})


module.exports = {
    Person:Person
}
