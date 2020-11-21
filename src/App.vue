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
                          "refreshed":false,
                          "data_to_list":10,
                          },

  }),
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
