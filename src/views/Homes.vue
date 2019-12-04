<template>
  <div>
      <input type="text" v-model="txt" @input="change">
      <Item v-for="(item,index) in list " :key="index" :items="item"/>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
import Item from '../components/Item'
export default {
    data(){
        return {
            txt:''
        }
    },
  created(){
    this.$store.dispatch('getList')
  },
  methods:{
      ...mapGetters(["filters"]),
      change(){
          this.filters(this.txt)
      }
  },
  computed:{
    ...mapState(["list"]),
    
  },
  components: {
      Item
  }
}
</script>


<style>

</style>