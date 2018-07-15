import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex)

const state = {
    json: [],
};

const mutations = {
    setJson(state, db) {
        console.log(db)
        state.json = db
    }
}

const actions = {
    getJson(context) {
        axios.get('http://127.0.0.1:3000/getJson'
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