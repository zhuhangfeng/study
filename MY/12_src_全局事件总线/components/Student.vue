<template>
	<div class="demo">
		{{msg}}
		<button @click="sendShool">点击传值给兄弟学校</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'我是学生',
				msg:''
			}
		},
		methods:{
			sendShool(){
				this.$bus.$emit('hello', this.name)
			}
		},
		mounted(){
			this.$bus.$on('School',(data)=>{
				this.msg = data
			})
		},
		beforeDestroy(){
			this.$off('School')
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
