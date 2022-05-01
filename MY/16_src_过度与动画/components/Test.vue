<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition appear>
      <h1 v-show="isShow">你好啊。。。。。。</h1>
      
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true,
            isShow1:true,
        }
    }
}
</script>

<style>
    h1{
        background-color: orange;
    }
    .v-enter-active{
        animation: test 1s linear;
    }
    .v-leave-active{
        animation: test 1s linear reverse;
    }
    .hh-enter-active{
        animation: test 1s linear;
    }
    .hh-leave-active{
        animation: test 1s linear reverse;
    }
    @keyframes test {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
    }
    }
</style>