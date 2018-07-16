<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
const prefixCls = 'iconfont'
export default {
  name: 'IconFont',
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: [Number, String]
  },
  computed: {
    classes () {
      return `${prefixCls} icon-${this.type}`
    },
    styles () {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
