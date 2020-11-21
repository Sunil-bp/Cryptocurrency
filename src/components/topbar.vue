<template>
  <div>
      <h1>{{tittle}}</h1>
      <button v-on:click = "refresh_data">{{this.$store.state.button_name}}</button>
  </div>
</template>

<script>

export default {
  name: 'topbar',
  data () {
    return {
      tittle : "Top Crypto Currency List",
    }
  },
  created:function(){

  },
  computed: {

  },
  methods:{
    refresh_data: function(){
      console.log("[topbar][methods][refresh data ] sending signal to app to refresh data ");
      console.log(this.$store.state.table_len)
      this.$store.dispatch('get_data_from_api')
      console.log(this.$store.state.table_len)
      this.button_name = "Refreshing .. "
      },
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
