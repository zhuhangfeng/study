<template>
  <div id="app">
    <!-- @emit方法 -->
    <MyHeader @addListItem="addTodo"/>
    <!-- props方法 -->
    <!-- <MyHeader :addTodo="addTodo" /> -->
    <MyList :Todolist="Todolist" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <MyFooter :Todolist="Todolist" @allSelect="checkAll" @clearSelect="clearSelect"/>
    <!-- <MyFooter :Todolist="Todolist" :checkAll="checkAll" :clearSelect="clearSelect"/> -->
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";
import MyItem from "./components/MyItem";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
    MyItem,
  },
  data() {
    return {
      // Todolist: [
      //   { id: "001", name: "学习", done: false },
      //   { id: "002", name: "打游戏", done: true },
      //   { id: "003", name: "健身", done: false },
      //   { id: "004", name: "喝水", done: false },
      // ],
      Todolist: JSON.parse(localStorage.getItem('Todolist')) || [],
    };
  },
  methods: {
    //添加一个todo
    addTodo(x) {
      this.Todolist.unshift(x);
      // console.log(this.Todolist)
    },
    //勾选or取消勾选
    checkTodo(id) {
      this.Todolist.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
      });
      // console.log(this.Todolist)
    },

    //删除
    deleteTodo(id) {
     this.Todolist =  this.Todolist.filter((item)=>{
            return item.id !== id
          })
      // this.Todolist.forEach((item) => {
      //   if(item.id === id) {
      //     this.Todolist.splice(item,1)
          
      //   }
      // })
    },

    //全选
    checkAll(done){
      this.Todolist.forEach(item=>{
        item.done = done
      })
    },

    //清除所选
    clearSelect(){
     this.Todolist =  this.Todolist.filter((item)=>{
        return !item.done
      })
    }
  },
  watch:{
    Todolist:{
      deep:true,
      handler(value){
      localStorage.setItem('Todolist',JSON.stringify(value))
    }
    }
  }
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
  border: 1px solid black;
  width: 530px;
}
</style>
