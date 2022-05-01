<template>
  <div class="demo">
      <h1 @click="showName">{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age+1}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
import{mixin} from '../mixin'
export default {
    data(){
        return{
            msg:'我是学生'
        }
    },
    //简单接收
    // props:['name','age','sex'],

    //配置类型接受
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // },
    mixins:[mixin],
    props:{
        name:{
            type: String,//name的类型
            required:true,//name必须传值
        },
        age:{
            type:Number,
            default:99,//如果没有必须传值就要写默认值
        },
        sex:{
            type:String,
            require:true
        }

    },
    methods:{
    }
}
</script>

<style lang="less" scoped>
    .demo{
        background-color: orange;
        h2{
            color: aqua;
        }
    }
</style>