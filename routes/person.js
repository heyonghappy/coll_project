'use strict'

const _ = require('lodash'),
    Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js')


const Person = require('../db_models/person')

module.exports = class personController {

    /**
   * 获取清单
   * @param  ctx
   */

    static async getAllPerson(ctx) {
        let persons = await Person.findAll({
            attributes: ['chinese_name', 'english_name']
        });

        console.log(persons)

    }


}