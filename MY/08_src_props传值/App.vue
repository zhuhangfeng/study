<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Student name='zhangs' sex='男' :age='18'/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
