import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import setting from '../../setting.js'

import persons from './modules/persons'
import project_accessory from './modules/project_accessory'
 
Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            persons: persons,
            project_accessory:project_accessory
        }
    })
}