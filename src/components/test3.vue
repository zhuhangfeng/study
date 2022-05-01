<template>
  <div class="content" ref="div2" @scroll="scrollChange">
      <div class="content-zhanwei"  ref="div1"></div>
      <div class="content-zhongx" ref="div3" style="border:1px solid red">
          <p  v-for="(item,index) in getList" :key="index">
            {{item}}    
          </p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            num:15,
            itemHeight:30,
            start:0,
            end:15,
        }
    },
    computed:{
        getList(){
            return this.list.slice(this.start,this.end)
        }
    },
    mounted(){
        for(var i=0;i<10000;i++){
            this.list.push('列表'+i)
        }
        this.$refs.div1.style.height = this.itemHeight * this.list.length +'px';
        this.$refs.div2.style.height = this.itemHeight * this.num +'px';
    },
    methods:{
        scrollChange(){
            // console.log(this.$refs.div2.scrollTop)
            let scrollTop = this.$refs.div2.scrollTop
            this.start = Math.ceil(scrollTop / this.itemHeight)
            this.end = this.start + this.num
            // console.log(this.start,this.end)
            this.$refs.div3.style.top = this.start*this.itemHeight +'px'
            console.log(this.$refs.div3.style.top)
        }
    }
}
</script>

<style>
    .content{
        position: relative;
        width: 200px;
        border: 1px solid black;
        overflow-y: scroll;
    }
    .content-zhongx{
        position:absolute;
        top: 0;
        left: 0;
    }
    h4{
        line-height: 30px;
    }
</style>