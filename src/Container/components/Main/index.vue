/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：Main
* Date: 2024-08-22 14:53
* Update: 2024-08-22 14:53
*/
<!--中心组件,没有内容,基本就是渲染-->
<template>
  <div>
    <!--    纯渲染组件,做路由出口-->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>


<style scoped lang="scss">

</style>
