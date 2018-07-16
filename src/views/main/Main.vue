<template>
  <Layout :class="['app-layout', theme]">
    <Header class="app-header">
      <AppHeader :collapsed="collapsed" @on-change="handleCollapsedChange" />
    </Header>
    <Layout>
      <Sider class="app-sider-nav" hide-trigger collapsible :width="230" :collapsed-width="50" v-model="collapsed">
        <AppSiderNav accordion :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList" />
      </Sider>
      <Layout>
        <div class="app-tabs-nav-wrapper">
          <AppTabNav v-if="isTab" :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag" />
          <div v-else class="app-tabs-nav-breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem v-for="item in breadCrumbList" :to="item.to" :key="`bread-crumb-${item.name}`">
                <IconFont :type="item.icon || ''" />
                {{ showTitle(item) }}
              </BreadcrumbItem>
            </Breadcrumb>
            <Time class="time" />
          </div>
        </div>
        <Layout class="app-content-layout">
          <Content class="app-content-wrapper">
            <div>
              <keep-alive :include="cacheList">
                <router-view/>
              </keep-alive>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    <AppSiderControl />
  </Layout>
</template>

<script>
import IconFont from '_c/icon-font'
import AppHeader from '_c/main/app-header'
import AppSiderNav from '_c/main/app-sider-nav'
import AppTabNav from '_c/main/app-tab-nav'
import AppSiderControl from '_c/main/app-sider-control'
import Time from '_c/time'
import { mapMutations, mapActions } from 'vuex'
import { getNewTagList, getNextName, showTitle } from '@/libs/util'
export default {
  name: 'Main',
  components: {
    IconFont,
    AppHeader,
    AppSiderNav,
    AppTabNav,
    AppSiderControl,
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
    theme() {
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
    handleCollapsedChange (state) {
      this.collapsed = state
    },
    handleCloseTag (res, type, name) {
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
    if(localStorage.theme) {
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
