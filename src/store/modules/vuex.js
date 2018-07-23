import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import setting from '../../setting.js'

var instance = axios.create({
    baseURL: `http://${setting.host}:${setting.server_port}`,
    timeout: 4000
//    headers: {'X-Custom-Header': 'foobar'}
})



Vue.use(Vuex)

const state = {
    json: [],
    currentIndex:0
};

const mutations = {
    setJson(state, db) {
        console.log(db)
        state.json = db
    }
}

const actions = {
    getJson(context) {
        instance.get('/getJson'
        ).then(function (res) {
            if (res.status === 200) {
                context.commit('setJson', res.data);
            }
            }).catch(function (error) {
            console.log('actions=='+error) 
        })
    }
}

export const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
})