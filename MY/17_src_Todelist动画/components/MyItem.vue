<template>
  <transition
    name="animate__animated animate__bounce"
    appear
    enter-active-class="animate__fadeInTopLeft"
    leave-active-class="animate__fadeOutBottomRight"
  >
    <div class="MyItem">
      <div>
        <input
          type="checkbox"
          :checked="Todolist.done"
          @change="handleCheck(Todolist.id)"
        />{{ Todolist.name }}
      </div>
      <button @click="handleDelete(Todolist.id)">删除</button>
    </div>
  </transition>
</template>

<script>
import "animate.css";
export default {
  name: "MyItem",
  data() {
    return {};
  },
  props: ["Todolist"],
  methods: {
    //改变是否选中
    handleCheck(id) {
      //调用爷爷传过来的函数
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.MyItem {
  width: 506px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  button {
    border: none;
    background-color: red;
    margin-right: 10px;
    color: #fff;
    display: none;
    cursor: pointer;
  }
}
.MyItem:hover {
  background-color: aquamarine;
}
.MyItem:hover button {
  display: block;
}
.MyItem:last-child {
  border-bottom: 1px solid black;
}
// .test-enter-active{
//   animation:identifier 2s linear;
// }
// .test-leave-active{
//   animation:identifier 2s linear reverse;
// }
// @keyframes identifier {
//   from{
//     transform: translateX(-100%);
//   }
//   to{
//     transform: translateX(0px);
//   }
// }
</style>