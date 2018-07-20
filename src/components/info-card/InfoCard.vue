<template>
  <div class="info-card" :style="{background: bgColor}">
    <div class="left-area">
      <IconFont class="icon" :type="icon"/>
    </div>
    <div class="right-area">
      <div class="count">{{ count }}</div>
      <div class="desc">{{ title }}</div>
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
    icon: {
      type: String,
      default: ''
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
.info-card{
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  .left-area{
    .icon{
      opacity: 0.1;
      font-size: 100px;
      line-height: 100px;
      color: #fff;
    }
  }
  .right-area{
    text-align: right;
    .count{
      padding-top: 20px;
      font-size: 34px;
      line-height: 36px;
      font-weight: 300;
      color: #fff;
    }
    .desc{
      color: #fff;
      font-size: 16px;
      font-weight: 300;
    }
  }
}
</style>
