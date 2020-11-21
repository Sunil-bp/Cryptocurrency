<template>
  <div id="app">
    <topbar></topbar>
    <maintable></maintable>
  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import maintable from './components/maintable.vue'
export default {
  name: 'App',
  components: {
    topbar:topbar,
    maintable:maintable
  },
  data: () => ({


  }),
  mounted: function () {
  window.setInterval(() => {
    console.log("[app][created] Getting api data on regular basis ");
    this.get_data_from_api("https://api.coinranking.com/v1/public/coins/?limit=100")
  }, 1000*60)
},
  created: function(){
    console.log("[app][created] Checking getting api data ");
    this.get_data_from_api("https://api.coinranking.com/v1/public/coins/?limit=100")
  },


  methods:{
  get_data_from_api: function(url){
    console.log("[app][methods][get_data_from_api] ");
    console.log("[app][method][get_data_from_api] connecting to api");
    this.$store.dispatch('refresh_button_load')
    const baseURI = url;
    this.$http.get(baseURI)
    .then(response => {
      console.log("[app][method][get_data_from_api] success!")
      // console.log(response.data.data.coins);
      console.log("[app][method][get_data_from_api] updating data to component ");
      var list_data = []
      for (var key in response.data.data.coins) {
          var val = response.data.data.coins[key]
          list_data.push(val)
          // console.log(val);
        }

      this.$store.dispatch('set_api_data',list_data)
    })
    .catch(error => {
      console.log("[app][method][get_data_from_api] failed!")
      console.log(error)
      this.$store.dispatch('error_in_api')
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
