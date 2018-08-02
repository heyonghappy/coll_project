const koa = require('koa')
const Router = require('koa-router')
const koaJwt = require('koa-jwt')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const onerror = require('koa-onerror')
// const favicon = require('koa-favicon')
const validate = require('koa-validate')
const config = require('config')
const pathToRegexp = require('path-to-regexp')

const fs = require('fs')
const router = require('./routes')
const jwtSecret = config.get('jwt.secret')


const app = new koa()
// const router = new Router()
onerror(app)
validate(app)

app.use(cors({ credentials: true, maxAge: 2592000 }))

// router.get('/getJson',async ctx=>{
// 后端允许cors跨域请求
// await cors();
//     ctx.body=JSON.parse(fs.readFileSync( './package.json'));
// })

app
    .use(koaJwt({ secret: jwtSecret }).unless((ctx) => {
        if (/^\/person/.test(ctx.path)) {
            return pathToRegexp([
                '/person/login',
                '/person/register'
            ]).test(ctx.path)
        }
        return true
    }))
    .use(koaBody({ multipart: true }))
    .use(router.personApi.routes())
    .use(router.personApi.allowedMethods())

app.listen(3006)
console.log(`server started at http://127.0.0.1:3006`)