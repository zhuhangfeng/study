<template>
	<div class="demo">
		{{msg}}
		<button @click="seedStudent">点击传值给兄弟学生</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';
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
				// this.$bus.$emit('School', this.name)
			}
		},
		mounted(){
			// this.$bus.$on('hello',(data)=>{
			// 	this.msg = data
			// })
			//接受数据就要订阅消息
			this.pid = pubsub.subscribe('wantStudentName',(funName, data)=>{
				console.log(funName, data)
				this.msg = data
			})
			
		},
		beforeDestroy(){
			// this.$off('hello')
			pubsub.unsubscribe(this.pid)
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