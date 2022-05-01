<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="seedSchool">点击得到学习名字</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		props:["getSchool"],
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods:{
			seedSchool(){
				alert(this.name)
				this.getSchool(this.name)
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
		margin: 5px;
		padding: 5px;
		margin-bottom: 10px;
	}
</style>