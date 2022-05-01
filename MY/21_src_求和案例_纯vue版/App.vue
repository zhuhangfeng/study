<template>
  <div class="app">
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count';
export default {
  name: "App",
  components:{Count},
  data() {
    return {
    };
  },
  
  
};
</script>

<style>
.app{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}
h1{
  text-align: center;

}
img{
  width: 50px;
}
video{
  width: 200px;
}
</style>
