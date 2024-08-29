/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：SidebarForCom
* Date: 2024-08-22 16:43
* Update: 2024-08-22 16:43
*/
<template>
  <div>
    <!--  做好一个组件,然后v-for循环他-->

    <!-- 没有子集的 -->
    <el-menu-item :index="val.url" v-if="!val.children">
      <i :class="val.icon"></i>
      <span slot="title">{{val.title}}</span>
    </el-menu-item>


    <!-- 有子集的  申请类别-->
    <el-submenu :index="val.url" v-else>
      <template slot="title">
        <i :class="val.icon"></i>
        <span>{{ val.title }}</span>
      </template>
      <!--        <el-menu-item :index="val.children.url">办公</el-menu-item>-->
      <!--        <el-menu-item :index="val.children.url">差旅</el-menu-item>-->
      <!--        <el-menu-item :index="val.children.url">请假</el-menu-item>-->
      <!--      再次递归组件,这里已经是接收过来的数据了-->
      <SidebarForCom v-for="childrenVal in val.children " :key="childrenVal.url" :val="childrenVal"></SidebarForCom>
    </el-submenu>

  </div>
</template>

<script>

export default {

  name: "SidebarForCom",
  mounted() {
    console.log("Container--Sidebar--SidebarForCom--",this.val)
    console.log("Container--Sidebar--SidebarForCom--",this.val.url)
  },
  // 接收数据
  props: {
    // 第一次接收数据
    val: {
      required: true,
      type: Object,
    }
  },

}

</script>


<style scoped lang="scss">

</style>
