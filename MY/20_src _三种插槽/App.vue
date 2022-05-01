<template>
  <div class="app">
    <Category title="游戏">
      <template scope="{games}">
      <ul>
        <li v-for="(g,index) in games" :key="index">
          {{g}}
        </li>
      </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
      <ol>
        <li v-for="(g,index) in games" :key="index">
          {{g}}
        </li>
      </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">
          {{g}}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category';
export default {
  name: "App",
  components:{Category},
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
