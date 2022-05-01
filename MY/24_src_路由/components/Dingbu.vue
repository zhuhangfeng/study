<template>
  <div class="Dingbu">
      <h1>hello</h1>
      <button @click="back">后退</button>
      <button @click="forword">前进</button>
      <button @click="go">正数往前，负数往后</button>
  </div>
</template>

<script>
export default {
    name:'Dingbu',
    methods:{
        back(){
            this.$router.back()
        },
        forword(){
            this.$router.forward()
        },
        go(){
            this.$router.go(3)
        }
    }
}
</script>

<style>
    .Dingbu{
        text-align: center;
    }
</style>