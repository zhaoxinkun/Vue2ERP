/**
* Create by TomOne
* E-mail: [email protected]/* <![CDATA[ */!function(t,e,r,n,c,a,p){try{t=document.currentScript||function(){for(t=document.getElementsByTagName('script'),e=t.length;e--;)if(t[e].getAttribute('data-yjshash'))return t[e]}();if(t&&(c=t.previousSibling)){p=t.parentNode;if(a=c.getAttribute('data-yjsemail')){for(e='',r='0x'+a.substr(0,2)|0,n=2;a.length-n;n+=2)e+='%'+('0'+('0x'+a.substr(n,2)^r).toString(16)).slice(-2);p.replaceChild(document.createTextNode(decodeURIComponent(e)),c)}p.removeChild(t)}}catch(u){}}()/* ]]> */
* Description：index
* Date: 2024-08-22 14:25
* Update: 2024-08-22 14:25
*/
<template>
  <div class="content">
    <!--    行-->
    <div class="content-row">
      <!--    一行两列,右边宽-->
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="bg-white bg-purple">
            <charts :options="line" :width="width" :height="height"></charts>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple-light">
            <charts :options="area"></charts>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--    行-->
    <div class="content-row">
      <!--    平均分配-->
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="bg-white bg-purple">
            <charts :options="pie"></charts>
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="bg-white bg-purple-light">
            <charts :options="area"></charts>
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="bg-white bg-purple-light">
            <charts :options="line"></charts>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--    行-->
    <div class="content-row">
      <!--    一行两列,左边宽-->
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple">
            <charts :options="area"></charts>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="bg-white bg-purple-light">
            <Map></Map>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
// 导入charts和map
import {Charts, Map} from "@/Echarts/components"

// 导入图表数据
import {line, area, pie} from "@/Echarts/options"

export default {
  name: "index",
  components: {
    Charts,
    Map
  },
  data() {
    return {
      line,
      area,
      pie,
      width: "100%",
      height: "300px"

    }
  }

}

</script>


<style scoped lang="scss">

</style>
