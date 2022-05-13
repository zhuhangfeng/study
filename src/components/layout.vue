<template>
  <el-container class="home">
    <el-aside
      style="background: #304156"
      :width="isCollapse ? '60px' : '210px'"
    >
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="rgb(64, 158, 255)"
        style="border: none"
        :collapse="isCollapse"
      >
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/gunli/pinpai" >选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="background-color: #fff; line-height: 60px;display: flex;">
        <div @click="isCollapse = !isCollapse" style="font-size: 25px;margin-right:10px">
          <i v-show="isCollapse" class="el-icon-s-unfold"></i>
          <i v-show="!isCollapse" class="el-icon-s-fold"></i>
        </div>
        <el-breadcrumb separator="/" style="line-height:60px;">
          <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="background-color: #fff">
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  color: #333;
}
</style>