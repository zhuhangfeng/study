<template>
  <div id="app">
    <!-- 完整版组件之间传值 -->
    <MyHeader />
    <MyList :Todolist="Todolist" />
    <MyFooter :Todolist="Todolist"/>
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
      Todolist: JSON.parse(localStorage.getItem("Todolist")) || [],
    };
  },
  mounted() {
    //添加一项
    this.$bus.$on("addListItem", (data) => {
      this.Todolist.unshift(data);
    });
    //选中后更改数组里的值
    this.$bus.$on("checkTodo", (id) => {
      this.Todolist.forEach((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
      });
    });
    //删除选中项
    this.$bus.$on("deleteTodo", (id) => {
      this.Todolist = this.Todolist.filter((item) => {
        return item.id !== id;
      });
    });
    //修改
    this.$bus.$on("setClick",(id,value)=>{
      this.Todolist.forEach((item)=>{
        if(item.id === id){
          item.name = value
        }
      })
    })
    // 全选or取消全选
    this.$bus.$on("allSelect", (done) => {
      this.Todolist.forEach((item) => {
        item.done = done;
      });
    });
    //清除所选
    this.$bus.$on("clearSelect", () => {
      this.Todolist = this.Todolist.filter((item) => {
        return !item.done;
      });
    });
  },
  methods: {},
  watch: {
    Todolist: {
      deep: true,
      handler(value) {
        localStorage.setItem("Todolist", JSON.stringify(value));
      },
    },
  },
  beforeDestroy(){
    this.$bus.$off()
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
