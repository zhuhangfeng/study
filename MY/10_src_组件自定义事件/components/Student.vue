<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
		<button @click="sendStudent">点击获取学生名传给父组件</button>
		<button @click="unbind">解绑自定义事件</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods:{
			sendStudent(){
				this.$emit('atguigu',this.name)
				// this.$emit('demo')
			},
			unbind(){
				this.$off('atguigu')//解绑单个
				// this.$off(['atguigu','demo'])//解绑多个
				// this.$off()//解绑全部事件
			}
		}
	}
</script>

<style lang="less" scoped>
	.demo{
		background-color: pink;
		margin: 5px;
		padding: 5px;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
