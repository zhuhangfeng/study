<template>
  <div class="app">
    <Dingbu/>
    <div class="routerlink">
      <router-link class="router-link-active" active-class="active" to="/home"
        >home</router-link
      ><br />
      <router-link class="router-link-active" active-class="active" to="/about"
        >about</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Dingbu from './components/Dingbu'
export default {
  name: "App",
  components:{Dingbu},
  data() {
    return {};
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style scoped>
.routerlink {
  display: flex;
  align-items: center;
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
