<template>
  <div class="Search">
    <h1>Search Github Users</h1>
    <div><input type="text" v-model="keywords"/><button @click="Search">Search</button></div>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js';
export default {
  name: "Search",
  data(){
    return{
      keywords:'',
    }
  },
  methods:{
    Search(){
          // this.$bus.$emit('getData', {isFirst:false,isLoading:true,errMsg:'',users:[]});
          pubsub.publish('getData',{isFirst:false,isLoading:true,errMsg:'',users:[]})

      axios.get('https://api.github.com/search/users?q='+this.keywords).then(
        response =>{
          console.log(response.data)
          // if(response.data.items)
          // this.$bus.$emit('getData', {isLoading:false,errMsg:'',users:response.data.items});
          pubsub.publish('getData',{isLoading:false,errMsg:'',users:response.data.items})

                   
        },
        error => {
          console.log(error.message)
          // this.$bus.$emit('getData', {isLoading:false,errMsg:error.message,users:[]});
          pubsub.publish('getData',{isLoading:false,errMsg:error.message,users:[]})
          
        }
      )
    }
  }
};
</script>

<style lang="less" scoped>
.Search{
    background-color: darkgray;
    height: 200px;
    width: 605px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    
}
</style>