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
        
        let login_name=ctx.checkBody('login_name').notEmpty().len(4,20).value;
        let password=ctx.checkBody('password').notEmpty().value;
        if(ctx.errors){
            console.log(ctx.errors)
           return ctx.body=ctx.util.refail(null,10001,ctx.errors)
        }

        let peoples = await People.findOne({
            where: {login_name:login_name},
            raw: true
        })
        console.log("peoples",peoples)
        if(peoples){
            console.log('123')
            return ctx.body=ctx.util.refail(null,10001,'user already exist')
        }

         People.create({
            chinese_name:login_name,
            english_name:login_name,
            login_name:login_name,
            password:password
        })
        if(ctx.errors){
            console.log(ctx.errors)
           return ctx.body=ctx.util.refail(null,10001,ctx.errors)
        }


        ctx.body=ctx.util.resuccess()
    }
    static async login(ctx) {
        let login_name=ctx.checkBody('login_name').notEmpty().len(4,20).value;
        let password=ctx.checkBody('password').notEmpty().value;
        let people = await People.findOne({
            where: {login_name:login_name},
            raw: true
        })
        if(people){
           if(people.password!==password){
            return ctx.body=ctx.util.refail(null,10001,'wrong password')
           }else{
               console.log('登录成功')
           }
        }else{
            return ctx.body=ctx.util.refail(null,10001,'wrong user name')
        }
    }
}