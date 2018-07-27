// import createAPI from '../../api'


import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import setting from '../../../setting.js'

var instance = axios.create({
    baseURL: `http://127.0.0.1:3006`,
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
    namespaced: true,
    state: {
        all_person_list:[]
        
    },
    mutations: {
        SET_VALUE(state, payload) {
            state.all_person_list = payload
        }

    },
    actions: {
        GET_ALL_PERSON_LIST(context) {
            console.log(createAPI)
            createAPI('/person/getAllPersons', 'get',{})
                .then((result) => {
                    if (res.status === 200) {
                        context.commit('SET_VALUE',result.data)
                    }
                  
                }).catch((error) => {
                    console.log('GET_ALL_PERSON_LIST===',error)

                })
        }

    }
}