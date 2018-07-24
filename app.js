const koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')

const fs = require('fs')
const router = require('./routes')


const app = new koa()
// const router = new Router()

app.use(cors({ credentials: true, maxAge: 2592000 }))

// router.get('/getJson',async ctx=>{
    // 后端允许cors跨域请求
    // await cors();
//     ctx.body=JSON.parse(fs.readFileSync( './package.json'));
// })

app.use(router.personApi.routes())
   .use(router.personApi.allowedMethods())

app.listen(3006)
console.log(`server started at http://127.0.0.1:3006`)