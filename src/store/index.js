/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Mutations from './mutations'
import State from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
    Getters:{
        // currentUser:null,
        // isLogin:false,
        // menuList:[]
        // token:""
    },
    Actions:{},
    Mutations:{},
    State:{}
})

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

export default store
