'use strict'

const _ = require('lodash'),
    Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js'),
    jwt = require('jsonwebtoken'),
    config = require('config'),
    bcrypt = require('bcryptjs');


const jwtSecret = config.get('jwt.secret'),
    jwtExpire = config.get('jwt.expire');

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
        return ctx.body = ctx.util.resuccess(peoples)
    }

    static async register(ctx) {

        let login_name = ctx.checkBody('login_name').notEmpty().len(4, 20).value;
        let password = ctx.checkBody('password').notEmpty().value;
        if (ctx.errors) {
            console.log(ctx.errors)
            return ctx.body = ctx.util.refail(null, 10001, ctx.errors)
        }

        let peoples = await People.findOne({
            where: { login_name: login_name },
            raw: true
        })
        if (peoples) {
            return ctx.body = ctx.util.refail(null, 10001, 'user already exist')
        }

        People.create({
            chinese_name: login_name,
            english_name: login_name,
            login_name: login_name,
            password: password
        })
        if (ctx.errors) {
            console.log(ctx.errors)
            return ctx.body = ctx.util.refail(null, 10001, ctx.errors)
        }


        ctx.body = ctx.util.resuccess()
    }
    static async login(ctx) {
        let login_name = ctx.checkBody('login_name').notEmpty().len(4, 20).value;
        let password = ctx.checkBody('password').notEmpty().value;
        let people = await People.findOne({
            where: { login_name: login_name },
            raw: true
        })
        if (people) {
            if (bcrypt.compareSync(people.password, password)) {
                return ctx.body = ctx.util.refail(null, 10001, 'wrong password')
            } else {
                people.token = jwt.sign(people, jwtSecret, { expiresIn: jwtExpire })

                return ctx.body = ctx.util.resuccess(people)
            }
        } else {
            return ctx.body = ctx.util.refail(null, 10001, 'wrong user name')
        }
    }
}