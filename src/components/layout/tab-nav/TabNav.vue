<template>
  <div class="tab-nav">
    <div class="close-con">
      <Dropdown transfer @on-click="handleTabClick" style="margin-top:7px;">
        <Button size="small" type="text">
          <Icon :size="18" type="ios-close-circle-outline"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem name="close-all">关闭所有</DropdownItem>
          <DropdownItem name="close-others">关闭其他</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="btn-con left-btn">
      <Button icon="ios-arrow-back" type="text" @click="handleScroll(240)"></Button>
    </div>
    <div class="btn-con right-btn">
      <Button icon="ios-arrow-forward" type="text" @click="handleScroll(-240)"></Button>
    </div>
    <div class="scroll-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
        <transition-group name="taglist-moving-animation">
          <Tab :class="item.name === value.name ? 'tab-selected' : ''"
            v-for="item in list"
            :key="`tab-nav-${item.name}`"
            :name="item.name"
            @on-close="handleClose"
            @on-select="handleSelect(item)"
            :closable="item.name !== 'home'"
            :icon="item.meta.icon"
          >{{ showTitleInside(item) }}</Tab>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '_c/tab'
import { showTitle } from '@/libs/util'
export default {
  name: 'TabNav',
  components: {
    Tab
  },
  props: {
    value: Object,
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tagBodyLeft: 0
    }
  },
  methods: {
    handlescroll (e) {
      var type = e.type
      let delta = 0
      if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    handleScroll (offset) {
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else {
        if (this.$refs.scrollOuter.offsetWidth < this.$refs.scrollBody.offsetWidth) {
          if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollOuter.offsetWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, this.$refs.scrollOuter.offsetWidth - this.$refs.scrollBody.offsetWidth)
          }
        } else {
          this.tagBodyLeft = 0
        }
      }
    },
    handleTabClick (type) {
      if (type === 'close-all') {
        // 关闭所有，除了home
        let res = this.list.filter(item => item.name === 'home')
        this.$emit('on-close', res, 'all')
      } else {
        // 关闭除当前页和home页的其他页
        let res = this.list.filter(item => item.name === this.value.name || item.name === 'home')
        this.$emit('on-close', res, 'others')
      }
    },
    handleClose (e, name) {
      let res = this.list.filter(item => item.name !== name)
      this.$emit('on-close', res, undefined, name)
    },
    handleSelect (item) {
      this.$emit('on-select', item)
    },
    showTitleInside (item) {
      return showTitle(item, this)
    }
  }
}
</script>
