<template>
    <span>{{ ts }}</span>
</template>

<script>
export default {
  name: 'Time',
  data () {
    return {
      ts: ''
    }
  },
  methods: {
    getTime () {
      let date = new Date()
      let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let day = week[date.getDay()]
      let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日 ' + hour + ':' + minute + ':' + second + ' ' + day
    }
  },
  mounted () {
    let that = this
    that.ts = that.getTime()
    setInterval(function () {
      that.ts = that.getTime()
    }, 1000)
  }
}
</script>
