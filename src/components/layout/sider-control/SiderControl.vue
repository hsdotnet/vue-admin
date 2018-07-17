<template>
  <div :class="['sider-control', open ? 'open' : '']">
    <div class="panel">
      <div class="panel-header">控制面板</div>
      <div class="panel-body">
        <Tabs class="app-tabs">
          <TabPane label="皮肤设置">
            <Theme :list="themeList" @on-change="handleThemeChange"/>
          </TabPane>
          <TabPane label="其它">
            其它
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from '_c/theme'
import { mapMutations } from 'vuex'
export default {
  name: 'SiderControl',
  components: {
    Theme
  },
  data () {
    return {
      themeList: [
        { name: 'green', bgHeader: '#00a65a', bgSider: '#222d32' },
        { name: 'blue', bgHeader: '#3c8dbc', bgSider: '#222d32' },
        { name: 'black', bgHeader: '#fff', bgSider: '#222d32' },
        { name: 'purple', bgHeader: '#605ca8', bgSider: '#222d32' },
        { name: 'red', bgHeader: '#dd4b39', bgSider: '#222d32' },
        { name: 'yellow', bgHeader: '#f39c12', bgSider: '#222d32' }
      ]
    }
  },
  computed: {
    open () {
      return this.$store.state.app.controlOpen
    }
  },
  methods: {
    ...mapMutations([
      'setTheme'
    ]),
    handleThemeChange (item) {
      localStorage.theme = item.name
      this.setTheme(item.name)
    }
  }
}
</script>

<style lang="less">
.sider-control{
  top:51px;
  bottom: 0;
  background:#fff;
  position:fixed;
  z-index:100;
  color:#333;
  transition-duration:.3s;
  transition-property:left,right;
  width:300px;
  right:-300px;
  border-left:1px solid #ddd;
  .panel{
    position:relative;
    .panel-header{
      padding: 9px 10px 10px 10px;
      font-size: 14px;
      border-bottom: 1px solid #ddd;
    }
    .panel-body{
      padding: 5px 5px 15px 5px;
      .ivu-tabs-nav .ivu-tabs-tab{
        padding: 10px;
        margin-right: 5px !important;
      }
      .ivu-tabs-bar{
        margin-bottom: 10px;
      }
    }
  }
 }
 .sider-control.open{
   right: 0;
 }
</style>
