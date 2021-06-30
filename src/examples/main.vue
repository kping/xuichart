<template>
  <div class="main-wrapper">
    <div class="main-sider">
      <el-menu
        :default-active="'1'"
        class="el-menu-vertical-demo"
        router>
        <el-menu-item v-for="item in menuList" :index="item.index" :key="item.index" :route="{path: item.path}" >
          <i :class="item.icon"></i>
          <span slot="title">
            {{item.name}}
          </span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      return {
        menuList: [
          {
            index: '1',
            icon: 'el-icon-collection',
            name: '线图',
            path: '/main/line',
          },
          {
            index: '2',
            icon: 'el-icon-receiving',
            name: '柱图',
            path: '/main/bar',
          },
          {
            index: '3',
            icon: 'el-icon-sell',
            name: '饼图',
            path: '/main/pie',
          },
          {
            index: '4',
            icon: 'el-icon-sell',
            name: '酷炫效果图',
            path: '/main/cool',
          },
        ],
      }
    },
    mounted() {

    },
    methods: {},
  }
</script>

<style scoped>

</style>
