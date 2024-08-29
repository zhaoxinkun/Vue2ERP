/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：Sidebar
* Date: 2024-08-22 14:53
* Update: 2024-08-22 14:53
*/
<!--侧边栏组件-->
<template>

  <!--  侧边栏布局-->
  <el-aside class="aside" width="200px">

    <!--      侧边栏 添加router书属性,可以使用路由-->
    <!--    :default-active="$route.path" exact   获取路由地址,并精确匹配-->
    <!--    菜单-->
    <el-menu
        :default-active="$route.path" exact
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router>
      <!--使用菜单小组件,制作无限极递归.不仅遍历数据,并把遍历出来的数据传递过去-->
      <SidebarForCom v-for="val in items " :key="val.url" :val="val"></SidebarForCom>
    </el-menu>

  </el-aside>

</template>


<script>
// 导入sidebar组件,无限极递归
import SidebarForCom from "@/Container/components/Sidebar/SidebarForCom.vue";
// 导入公共数据-菜单
import items from "@/utils/menu"

export default {
  name: "Sidebar",
  data() {
    return {
      // 菜单数据
      items
    }
  },
  // 注册组件
  components: {
    SidebarForCom,
  },
  methods: {
    handleOpen() {
    },
    handleClose() {
    }
  }

}

</script>


<style scoped lang="scss">

</style>
