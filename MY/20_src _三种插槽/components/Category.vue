<template>
  <div>
    <h1>{{ title }}</h1>
    <slot :games="games">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games:['王者','魂斗罗','cf','cs']

    };
  },
};
</script>

<style>
</style>