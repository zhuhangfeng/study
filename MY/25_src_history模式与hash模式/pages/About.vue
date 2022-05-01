<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* beforeDestroy() {
			console.log('About组件即将被销毁了')
		},*/
  /* mounted() {
			console.log('About组件挂载完毕了',this)
			window.aboutRoute = this.$route
			window.aboutRouter = this.$router
		},  */
  beforeRouteEnter(to, from, next) {
    console.log("111111111111111111111");
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "zhf") {
        next();
      } else {
        alert("权限不够，请联系管理员！！！");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to,from,next){
	  console.log('222222222222222222')
	  next()
  }
};
</script>