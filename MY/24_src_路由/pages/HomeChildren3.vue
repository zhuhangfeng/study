<template>
  <div>
      <!-- <h1>消息编号：{{$route.params.id}}</h1>
      <h1>消息主题：{{$route.params.name}}</h1> -->
      
      <h1>消息编号：{{id}}</h1>
      <h1>消息主题：{{name}}</h1>
  </div>
</template>

<script>
export default {
    name:'HomeChildren3',
    props:['id','name'],
    mounted() {
      // console.log('touter',this.$route)
    },
}
</script>

<style scoped>

</style>