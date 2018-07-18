<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/shine.js'
export default {
  name: 'PieChart',
  props: {
    value: Array,
    text: String,
    name: String
  },
  mounted () {
    this.$nextTick(() => {
      let legend = this.value.map(_ => _.name)
      let option = {
        title: {
          text: this.text,
          x: 'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: legend
        },
        series: [
          {
            radius : '70%',
            center: ['50%', '60%'],
            name: this.name,
            type: 'pie',
            data: this.value
          }
        ]
      }
      let dom = echarts.init(this.$refs.dom, 'shine')
      dom.setOption(option)
    })
  }
}
</script>
