<template>
	<div class="container">

		<Test/>

	</div>
</template>

<script>
	import Test from './components/test3'
	export default {
		name:'App',
		components:{Test},
	}
</script>

<style scoped>
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
