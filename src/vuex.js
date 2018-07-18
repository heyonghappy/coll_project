import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import setting from '../setting.js'

axios.defaults.baseURL = `http://${setting.host}:${setting.server_port}`;


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
        axios.get('/getJson'
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