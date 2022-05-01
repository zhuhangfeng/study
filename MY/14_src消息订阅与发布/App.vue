<template>
	<div class="title">
		<h1 >{{msg}}</h1>
		<School/>
		<Student/>
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
		},
		mounted(){
		}
	}
</script>

<style scoped>
	.title{
		background-color:cadetblue;
		padding: 10px;
	}
</style>
