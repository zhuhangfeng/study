<template>
  <div>
    <button :disabled="pageNo==1" @click="pageChange(pageNo-1)">上一页</button>
    <button v-show="continuesStartEnd.start!==1" @click="pageChange(1)">1</button>
    <button v-show="continuesStartEnd.start>2">...</button>

      <button v-for="(item, index) in continuesStartEnd.end" :key="index" class="page" @click="pageChange(item)" v-show="item >= continuesStartEnd.start" :class="pageNo == item?'active':'' ">{{ item }}</button>

    <button v-show="continuesStartEnd.end <= pageTotal -2">...</button>
    <button v-show="continuesStartEnd.end !== pageTotal" @click="pageChange(pageTotal)">{{ pageTotal }}</button>
    <button :disabled="pageNo==continuesStartEnd.end" @click="pageChange(pageNo+1)">下一页</button>

    <button>共{{ total }}条</button>

    {{ continuesStartEnd.start }}----{{ continuesStartEnd.end }}---{{ pageNo }}
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  data(){
      return{
      }
  },
  computed: {
    pageTotal() {
      return Math.ceil(this.total / this.pageSize);
    },
    continuesStartEnd() {
      let start = 0;
      let end = 0;
      if (this.continues > this.pageTotal) {
        start = 1;
        end = this.pageTotal;
      } else {
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }

        if (end > this.pageTotal) {
          start = this.pageTotal - this.continues + 1;
          end = this.pageTotal;
        }
      }
      return { start, end };
    },
  },
  methods:{
      pageChange(page){
          this.$emit('getPage',page)
      }
  }
};
</script>

<style>
button {
  margin: 10px;
}
.active{
    background-color: aqua;
}
</style>