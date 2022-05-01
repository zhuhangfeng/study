<template>
	<div class="title">
		<h1 >{{msg}}</h1>
		<School :getSchool="getSchool"/>
		<!-- 多次触发 -->
		<!-- <Student v-on:atguigu="getStudent"/> -->
		<!-- 只能触发一次 -->
		<!-- <Student v-once:atguigu="getStudent"/> -->

		<Student ref="studentRef" @demo="m1"/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student},
		data(){
			return{
				msg:'你好'
			}
		},
		methods:{
			getSchool(value){
				this.msg = value
			},
			getStudent(value){
				this.msg = value
			},
			m1(){
				console.log('chufal')
			}
		},
		mounted(){
			// setTimeout(() => {
			// 	this.$refs.studentRef.$on('atguigu',this.getStudent)
			// }, 3000);
				this.$refs.studentRef.$on('atguigu',this.getStudent)//多次触发
				this.$refs.studentRef.$once('atguigu',this.getStudent)//只触发一次

		}
	}
</script>

<style scoped>
	.title{
		background-color:cadetblue;
		padding: 10px;
	}
</style>
