/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：index
* Date: 2024-08-22 14:11
* Update: 2024-08-22 14:11
*/
<template>
  <div class="app-wrapper">

    <!--    总体布局-->
    <el-container>
      <Sidebar></Sidebar>


      <el-container>
        <!--头部-->
        <el-header>
          <Header></Header>
        </el-header>

        <!--        中心-->
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>

    </el-container>

    <!--  <router-view></router-view>-->
  </div>
</template>

<script>
// 分别导入头部,中心,侧边栏 组件
import {Header, Main, Sidebar} from "@/Container/components";

export default {
  // 组件注册
  components: {
    Header,
    Main,
    Sidebar
  }
}

</script>


<style scoped lang="scss">

</style>
