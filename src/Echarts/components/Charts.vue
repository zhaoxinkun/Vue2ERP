<!--// 封装echatrs组件-->
<script>
// 导入echarts
import * as echarts from "echarts"

export default {

  name: "Charts",
  // 传递的数据
  props: {
    // 默认数据
    // 宽
    width: {
      type: String,
      default: "100%"
    },
    // 高
    height: {
      type: String,
      default: "300px"
    },
    // 让父组件传递options,否则默认
    options: {
      type: Object,
      default: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "bar"
          }
        ]
      }
    }
  },
  mounted() {
    // 选择元素
    let myCharts = echarts.init(this.$refs.charts);
    // 配置项
    myCharts.setOption(this.options);

    // echarts自带的响应式
    window.addEventListener("resize", () => {
      myCharts.resize()
    })
  },
  data() {
    return {}
  },
  computed: {
    // 宽高数据本地化
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
  <div ref="charts" :style="style"></div>
</template>

<style scoped lang="scss">

</style>
