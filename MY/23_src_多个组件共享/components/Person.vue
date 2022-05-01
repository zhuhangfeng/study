<template>
  <div>
      <h1>人员列表</h1>
      <h2>使用上面数据{{sum}}</h2>
      <input type="text" v-model="name"><button @click="add">添加</button>
      <ul>
          <li v-for="item in personList" :key="item.id">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import {mapState,mapMutations} from 'vuex';
export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // }
        ...mapState('personAbout',['personList','sum']),
        ...mapState('countAbout',['su9/'])
    },
    methods:{
        add(){
            this.$store.commit('personAbout/ADDPERSON',{id:nanoid(),name:this.name})
            this.name = ''
        },
        // ...mapMutations({add:ADDPERSON})
    }
}
</script>

<style>

</style>