'use strict'

const config = require('config')
const Router = require('koa-router')
const person = require('./person')
const project_accessory = require('./project_accessory')

const personRouter = new Router({ prefix: '/person' })
const projectRouter = new Router({ prefix: '/project' })

exports.personApi = personRouter
  .get('/getAllpersons', person.getAllPerson)
  .post('/register', person.register)
  .post('/login', person.login)



exports.projectApi = projectRouter
  .get('/getprojecttypes', project_accessory.get_project_types)

 