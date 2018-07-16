<template>
  <div>
    <Row :gutter="20" style="padding:15px">
      <i-col span="4" v-for="(info, i) in infoCardData" :key="`infor-${i}`">
        <InfoCard :bgColor="info.bgColor" :countColor="info.countColor" :icon="info.icon" :count="info.count" :title="info.title" :icon-size="36" />
      </i-col>
    </Row>
    <Row :gutter="20" style="padding:15px">
      <i-col span="8">
        <Card shadow>
          <PieChart style="height: 300px;" :value="pieData" text="用户访问来源" />
        </Card>
      </i-col>
      <i-col span="16">
        <Card shadow>
          <BarChart style="height: 300px;" :value="barData" text="每周用户活跃量"/>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import InfoCard from '_c/info-card'
import { PieChart, BarChart } from '_c/charts'
export default {
  name: 'Dashboard',
  components: {
    InfoCard,
    PieChart,
    BarChart
  },
  data () {
    return {
      infoCardData: [
        { title: '新增用户', icon: 'android-person-add', count: 803, bgColor: '#2d8cf0', countColor: '#f00' },
        { title: '累计点击', icon: 'pinpoint', count: 250, bgColor: '#19be6b', countColor: '#00a65a' },
        { title: '新增问答', icon: 'help-circled', count: 142, bgColor: '#ff9900', countColor: '#ed3f14' },
        { title: '分享统计', icon: 'android-share-alt', count: 657, bgColor: '#ed3f14', countColor: '#ff9900' },
        { title: '新增活动', icon: 'social-twitch', count: 12, bgColor: '#E46CBB', countColor: '#9A66E4' },
        { title: '新增页面', icon: 'paper-airplane', count: 14, bgColor: '#9A66E4', countColor: '#2d8cf0' }
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  }
}
</script>
