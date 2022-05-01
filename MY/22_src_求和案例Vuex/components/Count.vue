<template>
  <div>
    <h1>当前求和为{{ sum }}</h1><br>
    <h1>当前求和10为{{ getNum }}</h1><br>
    <h1>我在{{school}}学校，学习{{subject}}</h1>
    <!-- <select ref="selectValue"> -->
      <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="jiShuAdd(n)">当前和为奇数再加</button>
    <button @click="ddAgainAdd(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n:1,
    };
  },
  mounted(){
    // this.Count = this.$store.state.sum
    // console.log(this.$store)
  },
  computed:{

    //借助mapState生成计算属性，从state中读取数据(对象写法)
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),


  //数组写法
    ...mapState(['sum','school','subject']),



    //借助mapGetters生成计属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'getNum'})

    ...mapGetters(['getNum'])
    // bigSum(){
    //   return this.$store.getters.getNum
    // }
  },
  methods:{
    // add(){
    //   this.$store.commit('JIA',this.n)
    //   // this.Count +=this.n
    //   // this.Count +=  parseInt(this.$refs.selectValue.value)
    // },
    // sub(){
    //   this.$store.commit('JIAN',this.n)
    //   // this.Count -=  parseInt(this.$refs.selectValue.value)
    //   // this.Count -= this.n

    // },

    ...mapMutations({add:'JIA',sub:'JIAN'}),
    // jiShuAdd(){
    //   // if(this.$store.state%2!==0){
    //   // this.Count +=  parseInt(this.$refs.selectValue.value)
    //   // this.Count += this.n
    //   this.$store.dispatch('jijian',this.n)
    //   // }
    // },
    // ddAgainAdd(){
    //   // setTimeout(()=>{
    //   // this.Count +=  parseInt(this.$refs.selectValue.value)
    //   // this.Count += this.n
    //   this.$store.dispatch('ddagainadd',this.n)
    //   // },2000)
    // }
    ...mapActions({jiShuAdd:'jijian',ddAgainAdd:'ddagainadd'})
  }
};
</script>

<style>
</style>