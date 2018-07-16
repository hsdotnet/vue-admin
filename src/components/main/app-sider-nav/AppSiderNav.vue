<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <div class="sider-menu">
      <div class="sider-menu-top" v-show="!collapsed">
        <div class="sider-user-box">
          <Avatar :src="userAvator" />
          <div class="info">
            <p>Welcome，Admin</p>
            <a href="javascript:void(0);"><IconFont type="QQ" /> Online</a>
          </div>
        </div>
        <div class="menu-header">导航菜单</div>
      </div>
      <Menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion" width="auto" @on-select="handleSelect">
        <template v-for="item in menuList">
          <template v-if="item.children && item.children.length === 1">
            <app-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></app-menu-item>
            <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><IconFont :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
          </template>
          <template v-else>
            <app-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></app-menu-item>
            <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><IconFont :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
          </template>
        </template>
      </Menu>
    </div>
    <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <Avatar :src="userAvator" class="menu-user-avator"/>
      <template v-for="item in menuList">
        <app-collapsed-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :icon-size="iconSize" :parent-item="item" :key="`drop-menu-${item.name}`"></app-collapsed-menu>
        <Tooltip v-else :content="item.meta.title || item.children[0].meta.title" placement="right" :key="`drop-menu-${item.name}`">
          <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}"><IconFont :size="rootIconSize" :type="item.icon || item.children[0].icon"/></a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import IconFont from '_c/icon-font'
import AppMenuItem from './AppMenuItem.vue'
import AppCollapsedMenu from './AppCollapsedMenu.vue'
import { getUnion } from '@/libs/tools'
import mixin from './mixin'

export default {
  name: 'AppSiderNav',
  mixins: [ mixin ],
  components: {
    IconFont,
    AppMenuItem,
    AppCollapsedMenu
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedNames: []
    }
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    },
    getOpenedNamesByActiveName (name) {
      return this.$route.matched.map(item => item.name).filter(item => item !== name)
    }
  },
  computed: {
    userAvator () {
      return this.$store.state.user.avatorImgPath
    }
  },
  watch: {
    activeName (name) {
      if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
      else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    },
    openNames (newNames) {
      this.openedNames = newNames
    },
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  mounted () {
    this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
  }
}
</script>
