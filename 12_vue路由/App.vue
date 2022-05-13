<template>
  <div class="container">
    <div style="border-bottom: 1px solid black; font-size: 30px">
      <a  @click="goTohome">users/home</a>|
      <a @click="goToprofile">users/eduardo/profile</a>|
      <a @click="goToposts">users/eduardo/posts</a>|
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  methods: {
	  goTohome(){
		  this.$router.push({
			  path:'/users/home'
		  })
	  },
	  goToprofile(){
		  this.$router.push({
			  path:'/users/posts'
		  })
	  },
	  goToposts(){
		  this.$router.push({
			  name:'profile'
		  })
	  }
  },
};
</script>

<style lang="less" scoped>
.container {
  a {
    margin: 10px;
  }
}
</style>
