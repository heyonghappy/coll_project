import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import setting from '../../setting.js'

import persons from './modules/persons'
 
Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            persons: persons
        }
    })
}