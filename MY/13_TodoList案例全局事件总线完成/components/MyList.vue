<template>
    <div class="MyList">
        <MyItem v-for="item in Todolist" :key="item.id" :Todolist="item"/>
    </div>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:'MyList',
    components:{MyItem},
    props:['Todolist'],
    methods:{
    }
}
</script>

<style lang="less" scoped>
   .MyList{
       margin: 10px;
       text-align: left;
       
   }
</style>