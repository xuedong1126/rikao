import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    list:[]
  },
  getters:{
    filters(state){
      console.log(state);
      state.list.filter(item=>item.title.includes(state.txt))
    }
  },
  mutations: {
    getList(state,paylode){
      state.list=paylode
    }
  },
  actions: {
    getList(context){
      axios.get('/list').then(res=>{
        console.log(res);
        context.commit('getList',res.data)
      })
    }
  },
  modules: {
  }
})
