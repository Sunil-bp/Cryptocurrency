<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <topbar v-bind:data="data_to_topbar" ></topbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import topbar from './components/topbar.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    topbar
  },
  data: () => ({
    data_to_topbar : {"time_remaining ":300,
                          "refreshed":true,
                          "data_to_list":10,
                          },

  }),
  mounted: function () {
  window.setInterval(() => {
    console.log("[app][created] Checking getting api data on regular basis");
    this.data_to_topbar.refreshed  = this.get_data_from_api("https://api.coinranking.com/v1/public/coins/?limit=100")
  }, 1000*60*5)
},
  created: function(){
    console.log("[app][created] Checking getting api data ");
    this.data_to_topbar.refreshed  = this.get_data_from_api("https://api.coinranking.com/v1/public/coins/?limit=100")

  },


  methods:{
  get_data_from_api: function(url){
    console.log("[app][methods][get_data_from_api] ");
    console.log("[app][method][get_data_from_api] connecting to api");
    const baseURI = url;
    this.$http.get(baseURI)
    .then(response => {
      console.log("[app][method][get_data_from_api] success!")
      console.log(response.data);
      console.log("[app][method][get_data_from_api] updating data to component ");
      return true
    })
    .catch(error => {
      console.log("[app][method][get_data_from_api] failed!")
      console.log(error)
      return false
    })

    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
