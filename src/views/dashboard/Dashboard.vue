<template>
  <div>
    <Row :gutter="16">
      <Col span="6" v-for="(info, i) in infoCardData" :key="`infor-${i}`">
        <InfoCard :bgColor="info.bgColor" :countColor="info.countColor" :icon="info.icon" :count="info.count" :title="info.title" :icon-size="36" />
      </Col>
    </Row>
    <Row :gutter="20" style="padding:15px">
      <i-col span="8">
        <Card shadow>
          <PieChart style="height: 300px;" :value="pieData" text="会员等级" name="会员等级" />
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
        { title: '新反馈', icon: 'message', count: 803, bgColor: '#2d8cf0' },
        { title: '用户量', icon: 'barchart', count: 250, bgColor: '#19be6b' },
        { title: '订单量', icon: 'shopping', count: 142, bgColor: '#32c5d2' },
        { title: '分享统计', icon: 'barchart', count: 657, bgColor: '#8e44ad' }
      ],
      pieData: [
        {value: 9526, name: '普卡'},
        {value: 3689, name: '银卡'},
        {value: 1025, name: '金卡'},
        {value: 231, name: '白金卡'}
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
