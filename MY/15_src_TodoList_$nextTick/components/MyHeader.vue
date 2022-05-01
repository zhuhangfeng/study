<template>
  <div class="MyHeader">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      if (!this.title.trim()) {
        alert("输入不能为空");
      } else {
        var obj = {
          id: nanoid(),
          name: this.title,
          done: false
        }; 
        this.$bus.$emit('addListItem', obj)
        this.title = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.MyHeader {
  margin: 10px;
  input {
    width: 500px;
    height: 30px;
  }
  input {
    outline: none;
  }
}
</style>