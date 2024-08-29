<script>
import * as echarts from "echarts"
// 导入地图
import chinaMap from "@/assets/Json/china.json"

// 导入员工分布api
import {employMap} from "@/api/api"

export default {
  name: "Map",
  // 父组件传递值
  props: {
    // 宽
    width: {
      type: String,
      default: "100%"
    },
    // 高
    height: {
      type: String,
      default: "400px"
    },
  },
  // 本地化数据
  data() {
    return {
      listData: []
    }
  },
  async mounted() {
    // 发送请求
    let res = await employMap();
    console.log("MapData is ", res)
    let {code, data} = res.data;
    if (code === 20000) {
      // 赋值数据
      this.listData = data;
      // 执行构建地图
      this.initMap();
      console.log("listData is ", this.listData)
    }

  },
  methods: {
    // 地图配置
    initMap() {
      let MyMap = echarts.init(this.$refs.map);
      // 注册地图
      echarts.registerMap("china", chinaMap);
      let options = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} ( / 人)'
        },
        series: [
          {
            type: "map",
            mapType: "china",
            // 标签样式
            label: {
              show: true,
              color: "#f60",
              fontsize: 12
            },
            itemStyle: {
              areaColor: "#5e84fd",
              borderColor: "#fff"
            },
            // 数据条数据
            data: this.listData
          }
        ],
        // 侧边数据条
        visualMap: {
          min: 0,
          max: 1500,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
      };
      MyMap.setOption(options);
      window.addEventListener("resize", () => {
        MyMap.resize()
      });
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<template>
  <div ref="map" :style="style">

  </div>
</template>

<style scoped lang="scss">

</style>
