port Vue from  'vue'
import Vuex from  'vuex'
import counter from  './modules/counter'

import * from as actions from './modules/action'
import * from as getters from './getters'
import * from as mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      counter: 0,
      value: ''
  },
  getters: {
    value: state => {
        return state.value
    }
  },
  mutations,
  actions,
  modules: {
     counter,
   }
})