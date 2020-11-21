import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.config.productionTip = false

//using  libs
Vue.use(VueResource);
Vue.use(Vuex);


export const bus = new Vue();

const store = new Vuex.Store({
  state: {
    data: {},
    refreshed : true,
    table_len : 10
  },
  mutations: {
    set_len (state,number) {
      console.log('[main][vuex][mutation][set_len] setting data to ',number);
      state.table_len = number
    }
  },
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
