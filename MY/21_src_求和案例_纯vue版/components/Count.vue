<template>
  <div>
    <h1>当前求和为{{ Count }}</h1><br>
    <!-- <select ref="selectValue"> -->
      <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="jiShuAdd">当前和为奇数再加</button>
    <button @click="ddAgainAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n:1,
      Count:0
    };
  },
  methods:{
    add(){
      this.Count +=this.n
      // this.Count +=  parseInt(this.$refs.selectValue.value)
    },
    sub(){
      // this.Count -=  parseInt(this.$refs.selectValue.value)
      this.Count -= this.n

    },
    jiShuAdd(){
      if(this.Count%2!==0){
      // this.Count +=  parseInt(this.$refs.selectValue.value)
      this.Count += this.n

      }
    },
    ddAgainAdd(){
      setTimeout(()=>{
      // this.Count +=  parseInt(this.$refs.selectValue.value)
      this.Count += this.n

      },2000)
    }
  }
};
</script>

<style>
</style>