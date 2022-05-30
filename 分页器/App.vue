<template>
  <div class="container">
    <Pagination :pageNo='pageNo' :pageSize="5" :total='101' :continues='5' @getPage='getPage'/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: "App",
  components:{Pagination},
  data() {
    return {
      pageNo:3
    };
  },
  methods:{
    getPage(page){
      console.log(page)
      this.pageNo = page
    }
  }
};
</script>

<style lang="less" scoped>
 .container{
      width: 100%;
      padding: 0;
      margin: 0;
	  height: 100%;
  }
</style>
