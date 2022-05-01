<template>
  <div>
      <div v-for="item in messageList" :key="item.id">
        <!-- 传参方式一 接在路径后面传-->
        <!-- <router-link class="router-link-active" active-class="active" :to="`/home/homechildren2/HomeChildren3?id=${item.id}&name=${item.name}`">{{item.name}}</router-link> -->

        <!-- 传参方式二 对象写法 -->
        <!-- <router-link
          class="router-link-active"
          active-class="active"
          :to="{
            name: 'haizi3',
            query: {
              id: item.id,
              name: item.name,
            },
          }"
          >{{ item.name }}
        </router-link> -->

        <!-- params对象写法 -->
        <router-link
          class="router-link-active"
          active-class="active"
          :to="{
            name: 'haizi3',
            query: {
              id: item.id,
              name: item.name,
            },
          }"
          >{{ item.name }}
        </router-link>
        <button @click="push(item)">push查看</button>
        <button @click="replace(item)">replace查看</button>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeChildren2",
  data() {
    return {
      messageList: [
        { id: "001", name: "吃饭" },
        { id: "002", name: "学习" },
        { id: "003", name: "打游戏" },
      ],
    };
  },
  mounted(){
    // console.log('111',this.$router)
  },
  methods:{
    push(item){
      this.$router.push(
        {
            name: 'haizi3',
            query: {
              id: item.id,
              name: item.name,
            },
          }
      )
    },
    replace(item){
      this.$router.replace(
        {
            name: 'haizi3',
            query: {
              id: item.id,
              name: item.name,
            },
          }
      )
    }
  }
};
</script>

<style scoped>

.routerlink {
  display: flex;
  align-items: center;
}
.router-link-active {
  width: 100px;
  height: 50px;
  margin: 10px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
}
.active{
  background-color: aqua;
}
</style>