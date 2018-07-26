import Vue from 'vue'
import Vuex from 'vuex'
const { config } = require('./../config.js')

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    ...config
  }
})

export default store
