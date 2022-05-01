<template>
  <div id="app">
    <button @click="getStudent">获取student数据</button>
    <button @click="getCar">获取汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getStudent(){
      axios.get('http://localhost:8080/api/students').then(
        response =>{
          console.log('请求成功',response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    },
    getCar(){
      axios.get('http://localhost:8080/foo/cars').then(
        response =>{
          console.log('请求成功',response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
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
