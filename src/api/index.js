import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import setting from '../../setting.js'

var instance = axios.create({
    baseURL: `http://${setting.host}:${setting.server_port}`,
    timeout: 4000
    //    headers: {'X-Custom-Header': 'foobar'}
})

const createAPI = (url, method, config) => {
    config = config || {};
    console.log(url)
    console.log(method)
    return instance({
        url,
        method,
        ...config
    })
}


export default {
    createAPI:createAPI
}