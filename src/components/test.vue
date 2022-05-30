<template>
  <div
    class="list-view"
    :style="{height: `${height}px`,}" @scroll="handleScroll"
  >
    <div
      class="list-view-phantom"
      :style="{
        height: contentHeight,
      }"
    ></div>
    <ul ref="content" class="list-view-content">
      <li
        class="list-view-item"
        :style="{
          height: itemHeight + 'px',
        }"
        v-for="(item, index) in visibleData"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "ListView",
  props: {
    data: {
      type: Array,
      default: function () {
        const list = [];
        for (let i = 0; i < 1000000; i++) {
          list.push("列表" + i);
        }
        return list;
      },
    },
    height: {
      type: Number,
      default: 400,
    },
    itemHeight: {
      type: Number,
      default: 30,
    },
  },
  computed: {
    contentHeight() {
      return this.data.length * this.itemHeight + "px";
    },
  },
  mounted() {
    this.updateVisibleData();
  },
  data() {
    return {
      visibleData: [],
    };
  },
  methods: {
    updateVisibleData(scrollTop) {
      scrollTop = scrollTop || 0;
      console.log('1111',this.$el.clientHeight)

      const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight); // 取得可见区域的可见列表项数量
      console.log(visibleCount)
      const start = Math.floor(scrollTop / this.itemHeight); // 取得可见区域的起始数据索引
      console.log('start',start)

      const end = start + visibleCount; // 取得可见区域的结束数据索引
      console.log('end',end)
      this.visibleData = this.data.slice(start, end); // 计算出可见区域对应的数据，让 Vue.js 更新
      console.log(this.visibleData)
      this.$refs.content.style.webkitTransform = `translate3d(0, ${
        start * this.itemHeight
      }px, 0)`; // 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
    },
    handleScroll() {
      const scrollTop = this.$el.scrollTop;
      console.log('scrollTop',scrollTop)
      this.updateVisibleData(scrollTop);
    },
  },
};
</script>
<style lang="css" scoped>
.list-view {
  overflow: auto;
  position: relative;
  border: 1px solid #aaa;
  width: 200px;
}
.list-view-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}
.list-view-content {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
}
.list-view-item {
  padding: 5px;
  color: #666;
  line-height: 30px;
  box-sizing: border-box;
}
</style>
