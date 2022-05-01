<template>
  <div class="MyFooter" v-show="Todolist.length">
    <div class="MyFooter-input">
      <input type="checkbox" v-model="isAll" />已完成{{
        doneTotal
      }}
      / 全部{{ Todolist.length }}
    </div>
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["Todolist","checkAll","clearSelect"],
  data() {
    return {
      num: "",
    };
  },
  computed: {
    doneTotal() {
      //   const newTodo = this.Todolist.filter(item=>{
      //       return item.done == true;
      //   });
      //   return this.num = newTodo.length
      return this.Todolist.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll:{
      get(){
        return this.doneTotal === this.Todolist.length && this.Todolist.length >0
      },
      set(value){
        this.checkAll(value)
      }
      
    }
  },
  methods: {
    clearAll(){
      console.log('111')
      this.clearSelect()
    }
  },
};
</script>

<style lang="less" scoped>
.MyFooter {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  .MyFooter-input_text {
    height: 30px;
    line-height: 30px;
  }
  button {
    background-color: red;
    color: #fff;
    border: none;
    height: 30px;
    line-height: 30px;
  }
}
</style>