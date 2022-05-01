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
    <br>
    <h1>{{personList.length}}</h1>
    <ul>
      <li v-for="item in personList" :key="item.id">{{item.name}}</li>
    </ul>
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
    console.log(this.$store)
  },
  computed:{
    //借助mapState生成计算属性，从state中读取数据(对象写法)
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

  //数组写法
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),

    //借助mapGetters生成计属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'getNum'})

    ...mapGetters('countAbout',['getNum'])
  },
  methods:{
    ...mapMutations('countAbout',{add:'JIA',sub:'JIAN'}),
    ...mapActions('countAbout',{jiShuAdd:'jijian',ddAgainAdd:'ddagainadd'})
  }
};
</script>

<style>
</style>