'use strict'

const config = require('config')
const jwt = require('jsonwebtoken')
const jwtSecret = config.get('jwt.secret')

const codeMap = {
    '-1': 'fail',
    '200': 'success',
    '401': 'token expired',
    '500': 'server error',
    '10001': 'params error'
}

const utilFn = {
    resuccess(data) {
        return {
            code: 200,
            success: true,
            message: codeMap['200'],
            data: data || null
        }

    },
    refail(message, code, data) {
        return {
            code: code,
            success: false,
            message: message || codeMap[code],
            data: data || null
        }
    }
}

module.exports = class utils {
    static util(ctx, next) {
        ctx.set('X-Request-Id', ctx.req.id)
        ctx.util = utilFn;
        if (!ctx.header || !ctx.header.authorization) {
            return;
        }
        const parts = ctx.header.authorization.split(' ');

        let decode = jwt.decode(parts[1], jwtSecret)
        ctx.people=decode.people;
        return next()
    }
}