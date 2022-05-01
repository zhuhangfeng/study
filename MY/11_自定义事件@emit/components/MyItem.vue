<template>
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
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {};
  },
  props: ["Todolist", "checkTodo", "deleteTodo"],
  methods: {
    //改变是否选中
    handleCheck(id) {
      //调用爷爷传过来的函数
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.deleteTodo(id);
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
</style>