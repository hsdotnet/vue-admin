<template>
  <div class="info-card">
    <div class="left-area" :style="{background: bgColor}">
      <Icon class="icon" :type="icon" :size="iconSize" color="#fff"/>
    </div>
    <div class="right-area">
      <div class="right-area-warpper">
        <div class="count" :style="{color: countColor}">{{ count }}</div>
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconFont from '_c/icon-font'
export default {
  name: 'InforCard',
  components: {
    IconFont
  },
  props: {
    bgColor: {
      type: String,
      default: '#2d8cf0'
    },
    countColor: {
      type: String,
      default: '#2d8cf0'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 20
    },
    shadow: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.common{
  position: absolute;
  top: 0px;
  height: 100%;
  display: table;
  text-align: center;
}
.info-card{
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 100px;
  overflow: hidden;
  position: relative;
  .left-area{
    .common;
    width: 36%;
    left: 0;
    .icon{
      display: table-cell;
      vertical-align: middle;
    }
  }
  .right-area{
    .common;
    width: 64%;
    font-size: 14px;
    color: #999;
    right: 0;
    .right-area-warpper{
      display: table-cell;
      vertical-align: middle;
      .count{
        font-size: 40px;
      }
    }
  }
}
</style>
