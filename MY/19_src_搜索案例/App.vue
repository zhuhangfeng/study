<template>
  <div id="app">
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search';
import List from './components/List';
export default {
  name: "App",
  components:{Search,List},
  data() {
    return {};
  },
  
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 530px;
}
</style>
