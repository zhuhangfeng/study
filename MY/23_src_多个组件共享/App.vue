<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count';
import Person from './components/Person';
export default {
  name: "App",
  components:{Count,Person},
  data() {
    return {
    };
  },
  mounted(){
    console.log(this)
  }
  
};
</script>

<style>
</style>
