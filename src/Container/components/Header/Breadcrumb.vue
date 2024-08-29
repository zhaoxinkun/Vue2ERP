<!--面包屑组件-->

<script>
export default {
  name: "Breadcrumb",
  mounted() {
    // 挂载的时候,执行,并传值当前的路由matched
    this.getRouterMatched(this.$route.matched)
  },
  data() {
    return {
      items: []
    }
  },
  watch: {
    // 监听路由变化
    $route(newVal, oldVal) {
      // 实时的传进去
      this.getRouterMatched(newVal.matched)
      console.log("Container---Header---Breadcrumb----当前路由的matched", this.items)
    }
  },
  methods: {
    // 获取路由matched的方法
    getRouterMatched(matched) {  //matched === this.$route.matched
      // 判断是不是首页
      if (matched?.[1].name === "index") {
        // 是的话,替换掉他的数据,变为,只有一个
        matched = [{
          path: "/home", name: "home", meta: {
            title: "企业首页"
          }
        }]
      }
      // 赋值
      this.items = matched;
    }
  }

}
</script>

<template>

  <el-breadcrumb separator-class="el-icon-arrow-right">
    <span class="el-icon-s-home"> <b>当前位置:</b></span>
    <el-breadcrumb-item v-for="val in items" :key="val.url" :to="val.path">{{ val.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>

</template>

<style scoped lang="scss">

</style>
