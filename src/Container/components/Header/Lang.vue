<!--  国际化组件-->
<script>
export default {
  name: "Lang",
  methods: {
    switchLang(type) {
      this.$i18n.locale = type;
    }
  }
}
</script>

<template>


  <!--  &lt;!&ndash;  <el-dropdown size="mini" split-button type="primary">&ndash;&gt;-->
  <!--  &lt;!&ndash;    {{ $t("message.lang")}}&ndash;&gt;-->
  <!--    <el-dropdown-menu slot="dropdown">-->
  <!--      <el-dropdown-item><span @click="$event=>switchLang('zh')">中文</span></el-dropdown-item>-->
  <!--      <el-dropdown-item><span @click="$event=>switchLang('en')">English</span></el-dropdown-item>-->
  <!--    </el-dropdown-menu>-->
  <!--  </el-dropdown>-->

  <el-dropdown size="mini" split-button type="primary">
    国际化
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item><span>中文</span></el-dropdown-item>
      <el-dropdown-item><span>English</span></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

</template>

<style scoped lang="scss">

</style>
