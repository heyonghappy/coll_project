// import createAPI from '../../api'


import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';
import setting from '../../../setting.js'
import { axiosInstance } from '../../api'
 

export default {
    namespaced: true,
    state: {
        all_person_list: []

    },
    mutations: {
        SET_VALUE(state, payload) {
            state.all_person_list = payload
        }

    },
    actions: {
        REGISTE(){

        },
        LOGIN(){

        },
        GET_ALL_PERSON_LIST(context) {
            axiosInstance({
                url: '/person/getAllPersons',
                method: 'get'
            }).then((result) => {
                if (result.status == 200) {
                    context.commit('SET_VALUE', result.data)
                }

            }).catch((error) => {
                console.log('GET_ALL_PERSON_LIST===', error)

            })
        }

    }
}