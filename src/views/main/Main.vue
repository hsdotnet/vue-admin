<template>
  <div :class="['layout top-layout', theme]">
    <div class="layout-header">
      <Header :collapsed="collapsed" @on-toggle="handleNavToggle" />
    </div>
    <div class="layout layout-has-sider">
      <div :class="['layout-sider', collapsed ? 'min': '']">
        <SiderNav :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList" />
      </div>
      <div class="layout">
        <div class="layout-tab">
          <div class="tab-warpper">
            <TabNav v-if="isTab" :value="$route" @on-select="handleClick" :list="tagNavList" @on-close="handleCloseTab" />
            <div v-else class="tab-nav-breadcrumb">
              <Breadcrumb>
                <BreadcrumbItem v-for="item in breadCrumbList" :to="item.to" :key="`bread-crumb-${item.name}`">
                  <IconFont :type="item.icon || ''" />
                  {{ showTitle(item) }}
                </BreadcrumbItem>
              </Breadcrumb>
              <Time class="time" />
            </div>
          </div>
        </div>
        <div class="layout-content">
          <div class="layout-content-wrapper">
            <div class="wrapper">
              <keep-alive :include="cacheList">
                <router-view/>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SiderControl/>
  </div>
</template>

<script>
import IconFont from '_c/icon-font'
import Header from '_c/main/header'
import SiderNav from '_c/main/sider-nav'
import TabNav from '_c/main/tab-nav'
import SiderControl from '_c/main/sider-control'
import Time from '_c/time'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList, getNextName, showTitle } from '@/libs/util'
export default {
  name: 'Main',
  components: {
    IconFont,
    Header,
    SiderNav,
    TabNav,
    SiderControl,
    Time
  },
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    tagNavList () {
      return this.$store.state.app.tagNavList
    },
    tagRouter () {
      return this.$store.state.app.tagRouter
    },
    userAvator () {
      return this.$store.state.user.avatorImgPath
    },
    isTab () {
      return this.$store.state.user.isTab
    },
    theme () {
      return this.$store.state.app.theme
    },
    cacheList () {
      return this.tagNavList.length ? this.tagNavList.filter(item => !(item.meta && item.meta.notCache)).map(item => item.name) : []
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    },
    breadCrumbList () {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    ...mapMutations([
      'setBreadCrumb',
      'setTagNavList',
      'setTheme',
      'addTag'
    ]),
    ...mapActions([
      'handleLogin'
    ]),
    showTitle (item) {
      return showTitle(item, this)
    },
    turnToPage (name) {
      if (name.indexOf('isTurnByHref_') > -1) {
        window.open(name.split('_')[1])
        return
      }
      this.$router.push({
        name: name
      })
    },
    handleNavToggle (state) {
      this.collapsed = state
    },
    handleCloseTab (res, type, name) {
      const nextName = getNextName(this.tagNavList, name)
      this.setTagNavList(res)
      if (type === 'all') this.turnToPage('home')
      else if (this.$route.name === name) this.$router.push({ name: nextName })
    },
    handleClick (item) {
      this.turnToPage(item.name)
    }
  },
  watch: {
    '$route' (newRoute) {
      this.setBreadCrumb(newRoute.matched)
      this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    }
  },
  mounted () {
    const that = this
    that.collapsed = document.documentElement.clientWidth < 768
    window.onresize = function () {
      setTimeout(function () {
        that.collapsed = document.documentElement.clientWidth < 768
      }, 200)
    }
    if (localStorage.theme) {
      that.setTheme(localStorage.theme)
    }
    if (that.$store.state.user.isTab) {
      that.setTagNavList()
      that.addTag(that.$store.state.app.homeRoute)
    } else {
      that.setBreadCrumb(that.$route.matched)
    }
  }
}
</script>
