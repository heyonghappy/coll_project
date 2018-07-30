const Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js')

var People = mySequelize.define('people', {
    chinese_name: { type: Sequelize.STRING },
    english_name: { type: Sequelize.STRING },
    avatar: { type: Sequelize.STRING }
})


module.exports = {
    People:People
}
