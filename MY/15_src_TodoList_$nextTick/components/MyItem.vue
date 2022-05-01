<template>
  <div class="MyItem">
    <div>
      <input
        type="checkbox"
        :checked="Todolist.done"
        @change="handleCheck(Todolist.id)"
      />
      <span v-show="!Todolist.isEdit">{{ Todolist.name }}</span>
      <input ref="inputSet" v-show="Todolist.isEdit" type="text" :value="Todolist.name" @blur="add(Todolist,$event)"/>
    </div>
    <button @click="handleDelete(Todolist.id)">删除</button>
    <button v-show="!Todolist.isEdit" @click="handleSet(Todolist)">修改</button>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {};
  },
  props: ["Todolist"],
  mounted(){
  },
  methods: {
    //改变是否选中
    handleCheck(id) {
      //调用爷爷传过来的函数
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo', id)
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit('deleteTodo',id)
      }
    },
    //点击编辑事件，添加isEdit属性
    handleSet(Todolist){
      if(Todolist.hasOwnProperty('isEdit')){
        Todolist.isEdit = true
      }else{
      this.$set(Todolist,'isEdit',true)
      }
      this.$nextTick(function(){
      this.$refs.inputSet.focus()

      })

    },
     add(Todolist,e) {
       Todolist.isEdit = false;
       if(!e.target.value.trim()) return alert('输入不能为空')
         this.$bus.$emit('setClick',Todolist.id,e.target.value)
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