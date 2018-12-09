<template>
    <div class="aui-aside">
  <div class="aui-aside__inner">
    <el-menu
      v-if="$store.state.asideMenuVisible"
      class="aui-aside__menu"
      :default-active="$store.state.asideMenuActive"
      :collapse="$store.state.asideFold"
      :unique-opened="true"
      :collapse-transition="false"
      :mode="$store.state.asideTop ? 'horizontal' : 'vertical'">
      <el-menu-item index="home" @click="gotoPageHandle('@@path/index.html')">
        <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-home"></use></svg>
        <span slot="title">首页</span>
      </el-menu-item>
      
      <el-menu-item index="icon" @click="gotoPageHandle('@@path/pages/icon.html')">
        <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-gift"></use></svg>
        <span slot="title">图标</span>
      </el-menu-item>

      <el-submenu index="basic" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-crown"></use></svg>
          <span>基础页面</span>
        </template>
        <el-menu-item index="basic-login" @click="gotoPageHandle('@@path/pages/login.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>登录</span>
        </el-menu-item>
        <el-menu-item index="basic-login-v2" @click="gotoPageHandle('@@path/pages/login-v2.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>登录 - v2</span>
        </el-menu-item>
        <el-menu-item index="basic-register" @click="gotoPageHandle('@@path/pages/register.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>注册</span>
        </el-menu-item>
        <el-menu-item index="basic-register-v2" @click="gotoPageHandle('@@path/pages/register-v2.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>注册 - v2</span>
        </el-menu-item>
        <el-menu-item index="basic-forget" @click="gotoPageHandle('@@path/pages/forget.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>找回密码</span>
        </el-menu-item>
        <el-menu-item index="basic-forget-v2" @click="gotoPageHandle('@@path/pages/forget-v2.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>找回密码 - v2</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="chart" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-barchart"></use></svg>
          <span>图表</span>
        </template>
        <el-menu-item index="chart-echarts" @click="gotoPageHandle('@@path/pages/echarts.html')">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>Echarts</span>
        </el-menu-item>
      </el-submenu>

      <!-- <el-submenu index="form" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-file-text"></use></svg>
          <span>表单页面</span>
        </template>
        <el-menu-item index="form-basic">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>基础表单</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="list" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-unorderedlist"></use></svg>
          <span>列表页面</span>
        </template>
        <el-menu-item index="list-basic">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>基础列表</span>
        </el-menu-item>
      </el-submenu> -->

      <!-- <el-submenu index="detail" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-detail"></use></svg>
          <span>详情页面</span>
        </template>
        <el-menu-item index="detail-basic">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>基础详情</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="error" :popper-append-to-body="false">
        <template slot="title">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-error"></use></svg>
          <span>异常页面</span>
        </template>
        <el-menu-item index="error-403">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>403</span>
        </el-menu-item>
        <el-menu-item index="error-404">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>404</span>
        </el-menu-item>
        <el-menu-item index="error-505">
          <svg class="icon-svg aui-aside__menu-icon" aria-hidden="true"><use xlink:href="#icon-fire"></use></svg>
          <span>505</span>
        </el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'Aside',
    data () {
    return {
      
    }
  },
    methods: {
    ...mapMutations([
      'setAsideFold'
    ]),
    handleAsideFold () {
      console.log(1111)
    }
  },
    computed:{
      asideTop(){
        console.log('asideTop')
        return this.$store.state.layout.asideTop
      }
    }
}
</script>
