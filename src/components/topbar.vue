<template>
  <div>
      <h1>{{tittle}}</h1>
      <p>{{data}}</p>
      <p>{{this.$store.state.table_len}}</p>
      <button v-on:click = "refresh_data">{{button_name}}</button>

  </div>
</template>

<script>
// import { bus } from '../../main.js';

  export default {
    name: 'sidebar',
    data () {
      return {
        tittle : "Top Crypto Currency List",
        button_name : "Refresh Data"
      }
    },
    props: [
      "data"
    ],
    watch: {
      '$props':{
        handler: function (val, oldVal) {
          console.log('[expense][watch] new', val)
          console.log("[expense][watch] old",oldVal);
        },
        deep: true
      }
    },


    created:function(){
      // bus.$on('sidebar', () => {
      //   console.log("[sidebar.vue][created][from bus][sidebar] open sidebar");
      //   this.drawer = true;
      //   }
      // );
    },
    computed: {

    },
    methods:{
      refresh_data: function(){
        console.log("[topbar][methods][refresh data ] sending signal to app to refresh data ");
        // window.location.href = '/profile/';
        console.log(this.$store.state.table_len)
        this.$store.commit('set_len',40)
        console.log(this.$store.state.table_len)

        this.button_name = "Refreshing .. "
      },
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
