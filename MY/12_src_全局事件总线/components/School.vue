<template>
	<div class="demo">
		{{msg}}
		<button @click="seedStudent">点击传值给兄弟学生</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				msg:'',
				name:'我是学校'
			}
		},
		methods:{
			seedStudent(){
				this.$bus.$emit('School', this.name)
			}
		},
		mounted(){
			this.$bus.$on('hello',(data)=>{
				this.msg = data
			})
		},
		beforeDestroy(){
			this.$off('hello')
			console.log('1111')
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