<template>
    <div :class="classes" @click.stop="check">
        <IconFont :type="icon" :class="iconClasses" />
        <span><slot></slot></span>
        <IconFont v-if="closable" type="close" :class="closeIconClasses" @click.native.stop="close"/>
    </div>
</template>

<script>
import IconFont from '_c/icon-font'
const prefixCls = 'tab'
export default {
  name: 'Tab',
  components: {
    IconFont
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'navicon-round'
    },
    name: {
      type: [String, Number]
    }
  },
  computed: {
    classes () {
      return prefixCls
    },
    iconClasses () {
      return `${prefixCls}-icon`
    },
    closeIconClasses () {
      return `${prefixCls}-close-icon`
    }
  },
  methods: {
    close (event) {
      if (this.name === undefined) {
        this.$emit('on-close', event)
      } else {
        this.$emit('on-close', event, this.name)
      }
    },
    check () {
      if (this.name === undefined) {
        this.$emit('on-change')
      } else {
        this.$emit('on-change', this.name)
      }
    }
  }
}
</script>

<style lang="less">
  @import './tab.less';
</style>
