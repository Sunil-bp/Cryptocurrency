<template>
  <div>
    <b-select v-model="perPage" >
              <option value="5">5 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
    </b-select>
       <b-table :data=" this.$store.state.data"
                  paginated
                  pagination-rounded
                  :per-page="perPage"
                  pagination-position="top"
                  aria-previous-label="Previous page"
                  aria-page-label="Page"
                  aria-next-label="Next page"
                  aria-current-label="Current page"
                >
                <b-table-column field="iconUrl" label="Currency Icon" width="80" numeric v-slot="props">
                  <b-image
                       :src=props.row.iconUrl
                       alt="A random image"
                       ratio="6by4"
                       rounded
                   ></b-image>
                </b-table-column>

                <b-table-column field="name" label="Currency" v-slot="props">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="symbol" label="Currency Symbol" v-slot="props">
                  {{ props.row.symbol }}

                </b-table-column>

                <b-table-column field="price" label="Currency Price" centered v-slot="props">
                  {{ props.row.price }}
                </b-table-column>

                <b-table-column  field="change" label="Currency Price Change" v-slot="props">
                  {{ props.row.change }}

                </b-table-column>
        </b-table>
  </div>
</template>

<script>

export default {
  name: 'maintable',
  data () {
    return {
      perPage : 10
    }
  },
  created:function(){
      console.log();
  },
  computed: {

  },
  methods:{

    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
