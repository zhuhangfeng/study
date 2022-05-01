<template>
	<ul>
		<li :style="{opacity}">hello你好</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		data(){
			return{
				opacity:1
			}
		},
		methods:{},
		mounted(){
			
		},
		beforeDestroy(){
		},
		activated(){
			// this.setIntervalStop= setInterval(()=>{
			// 	console.log('111')
			// 	this.opacity -= 0.01;
			// 	if(this.opacity <= 0){
			// 		this.opacity = 1
			// 	}
			// },16)
		},
		deactivated(){
			// clearInterval(this.setIntervalStop)

		}
	}
</script>