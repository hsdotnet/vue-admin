<template>
  <ul class="single-checkbox-list">
    <li v-for="item in list" :class="[item.name === currentValue ? 'checked' : '']" @click="handleCheck(item)">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SingleCheckboxList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleCheck (item) {
      this.currentValue = item.name
      this.$emit('on-checked', item)
    }
  }
}
</script>

<style lang="less">
.single-checkbox-list li{cursor: pointer; position: relative; height: 30px;line-height: 30px; padding-left:45px; margin-bottom: 5px;list-style: none;font-size: 14px;}
.single-checkbox-list li::before{width: 30px;height: 30px;border-radius: 3px;content: "";left: 0; position: absolute;background: #48c9a9}
.single-checkbox-list li.checked::before{content: "\E889";font-family: iconfont;position: absolute;left: 0;right: 0;top: 0;bottom: 0;font-size: 14px;font-weight: 800;color: #fff;opacity: .6;filter: alpha(opacity=60);line-height: 30px;text-align: center;}
</style>
