<script>
import MyBanner from "@/components/global/my-banner/layout.vue";

export default {
  name: "globalCOM",
  components: {MyBanner}
}
</script>

<template>
  <div>
    全局组件

    <myhelllo></myhelllo>
    <myhelllo02></myhelllo02>
    <my-banner></my-banner>
  </div>
</template>

<style scoped lang="scss">

</style>
