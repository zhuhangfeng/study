<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
     name="animate__animated animate__bounce"
     appear
     enter-active-class="animate__jello"
     leave-active-class="animate__fadeOutBottomRight"
     >
      <h1 v-show="isShow">你好啊。。。。。。</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}
</style>