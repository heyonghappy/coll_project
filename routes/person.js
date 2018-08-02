'use strict'

const _ = require('lodash'),
    Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js')


const People = require('../db_models/people')

module.exports = class personController {

    /**
   * 获取清单
   * @param  ctx
   */

    static async getAllPerson(ctx) {
        let peoples = await People.findAll({
            attributes: ['id', 'chinese_name', 'english_name', 'Avatar'],
            raw: true
        })
        ctx.body = peoples
    }

    static async register(ctx) {
        console.log('register===',ctx.request.body)
        // let peoples = await People.findAll({
        //     attributes: ['id', 'chinese_name', 'english_name', 'Avatar'],
        //     raw: true
        // })
        // ctx.body = peoples
    }
    static async login(ctx) {
        console.log('login===',ctx.request.body)
        // let peoples = await People.findAll({
        //     attributes: ['id', 'chinese_name', 'english_name', 'Avatar'],
        //     raw: true
        // })
        // ctx.body = peoples
    }
}