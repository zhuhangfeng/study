<template>
  <div>
    <h1>我是home的内容</h1>
      <div class="routerlink">
      <router-link class="router-link-active" active-class="active" to="/home/homechildren">h1</router-link>
      <router-link class="router-link-active" active-class="active" to="/home/homechildren2">h2</router-link>

      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home'

}
</script>

<style scoped>
  .routerlink {
  display: flex;
  align-items:flex-start;
  flex-flow: column;
}
.router-link-active {
  width: 100px;
  height: 50px;
  margin: 10px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
  /* background-color: antiquewhite; */
  border: 1px solid bisque;
}
.active{
  background-color:cadetblue;
}
</style>