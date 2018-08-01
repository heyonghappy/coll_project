'use strict'

const config = require('config')
const Router = require('koa-router')
const person= require('./person')

const personRouter = new Router({ prefix: '/person' })

exports.personApi = personRouter
  .get('/getAllpersons',person.getAllPerson )
  .post('/register',person.register )
  .post('/login',person.login )