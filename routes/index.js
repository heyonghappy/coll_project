'use strict'

const config = require('config')
const Router = require('koa-router')
const person= require('./person')

const personRouter = new Router({ prefix: '/person' })

exports.personApi = personRouter
  .post('/getAllpersons',person.getAllPerson )