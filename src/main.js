import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

//using  libs
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Buefy)


export const bus = new Vue();

const store = new Vuex.Store({
  state: {
    data: [],
    button_name : "Refresh",
    table_len : 10,
    error_status : false
  },
  mutations: {
    set_len (state,number) {
      console.log('[main][vuex][mutation][set_len] setting data to ',number);
    },
    set_api_data (state,data){
      console.log("[main][mutation][set_api_data] api call was successful  ");
      state.data = data
      state.button_name = "Refresh"
      },
    error_in_api (state){
      console.log("[main][mutation][error_in_api] api call was unsuccessful  ");
      state.data = []
      },
    refresh_button_load (state){
      console.log("[main][vuex][mutation][refresh_button_load]  setting to refresh  ");
      state.button_name = "Refreshing."
      },
  },
  actions: {
    set_len (context,number) {
      console.log('[main][vuex][action][increment] setting data to ',number);
      context.commit('set_len',number)
    },
    set_api_data (context,data){
      console.log("[main][vuex][action][set_api_data] ")
      context.commit('set_api_data',data)
    },
    error_in_api (context) {
      console.log('[main][vuex][action][error_in_api] api call was unsuccessful ');
      context.commit('error_in_api')
    },
    refresh_button_load (context){
      console.log("[main][vuex][action][refresh_button_load]  setting to refresh  ");
      context.commit('refresh_button_load')
      },
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
