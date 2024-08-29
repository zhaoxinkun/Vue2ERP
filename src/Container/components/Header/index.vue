<!--头部组件,整和所有组件-->
<script>
// 导入面包屑组件
import Breadcrumb from "./Breadcrumb.vue"

// 导入lang组件
import Lang from "./Lang"

// 导入清除token APi
import {removeToken} from "@/utils/token";

export default {
  name: "index",
  components: {
    Breadcrumb,
    Lang
  },
  methods: {
    // 退出接口
    goBack() {
      removeToken() //清除token
      //跳回login页面
      this.$router.push("/login")
    }
  }
}
</script>

<template>
  <!--  整个头部组件-->
  <div class="app-breadcrumb">
    <!--    面包屑组件-->
    <Breadcrumb></Breadcrumb>
    <!--    右侧按钮组件-->

    <div class="right-menu">
      <Lang style="margin-right: 5px"></Lang>
      <!--      国际化的时候-->
      <!--      <el-button type="danger" round @click="goBack" size="mini" icon="el-icon-search">{{$t("message.layout")}}</el-button>-->
      <!--      非国际化-->
      <el-button type="danger" round @click="goBack" size="mini" icon="el-icon-search">退出</el-button>

    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
