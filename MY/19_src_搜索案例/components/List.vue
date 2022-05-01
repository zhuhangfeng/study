<template>
  <div class="List">
      <div v-show="info.isFirst"><h1>wecome to you user</h1></div>
      <div v-show="info.isLoading"><h1>loding......</h1></div>
      <div v-show="info.errMsg"><h1>{{info.errMsg}}</h1></div>
    <div v-show="info.users.length >0" class="ListItem" v-for="item in info.users" :key="item.id">
      <a :href="item.html_url">
        <img :src="item.avatar_url" alt="" />
      </a>
      <p>{{ item.login }}</p>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "List",
  data() {
    return {
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:'',
      users: [],
      }
        
    };
  },
  computed:{
  },
  mounted() {
    // this.$bus.$on("getData", (dataObj) => {
    //   this.info = {...this.info,...dataObj}
    // });

    this.pid = pubsub.subscribe('getData',(dataName,dataObj)=>{
      this.info = {...this.info,...dataObj}

    })
  },
};
</script>

<style lang="less" scoped>
.List {
  width: 605px;
  display: grid;
  grid-template-columns: auto auto auto;
  .ListItem {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-top: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>