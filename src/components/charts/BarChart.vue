<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/shine.js'
export default {
  name: 'BarChart',
  props: {
    value: Object,
    text: String,
    name: String
  },
  mounted () {
    this.$nextTick(() => {
      let xAxisData = Object.keys(this.value)
      let seriesData = Object.values(this.value)
      let option = {
        title: {
          text: this.text,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: seriesData,
          name: this.name,
          type: 'bar'
        }]
      }
      let dom = echarts.init(this.$refs.dom, 'shine')
      dom.setOption(option)
    })
  }
}
</script>
