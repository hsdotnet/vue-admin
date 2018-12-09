<template>
    <div class="aui-header">
  <div class="aui-header__hd">
    <a class="aui-brand aui-brand--lg" href="javascript:;">renren-aui</a>
    <a class="aui-brand aui-brand--sm" href="javascript:;">aui</a>
  </div>
  <div class="aui-header__bd">
    <!-- aui-header__menu left -->
    <el-menu class="aui-header__menu aui-header__menu--left" mode="horizontal">
      <el-menu-item v-if="!asideTop" index="1" @click="handleAsideFold">
        <svg class="icon-svg aui-header__icon-menu aui-header__icon-menu--rz180" aria-hidden="true"><use xlink:href="#icon-outdent"></use></svg>
      </el-menu-item>
    </el-menu>
    <!-- aui-header__menu right -->
    <el-menu class="aui-header__menu aui-header__menu--right" mode="horizontal">
      <el-menu-item index="2">
          <a href="https://www.renren.io/community" target="_blank">
            <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-earth"></use></svg>
          </a>
        </el-menu-item>
      <el-menu-item index="3">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-sync"></use></svg>
      </el-menu-item>
      <el-menu-item index="4">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-fullscreen"></use></svg>
      </el-menu-item>
      <el-submenu index="2" :popper-append-to-body="false" class="not-arrow t-center">
        <template slot="title">
          <el-button size="mini">简体中文</el-button>
        </template>
        <el-menu-item index="2-1">简体中文</el-menu-item>
        <el-menu-item index="2-2">繁體中文</el-menu-item>
        <el-menu-item index="2-3">English</el-menu-item>
      </el-submenu>
      <el-submenu index="3" :popper-append-to-body="false">
        <template slot="title">
          <!--<img class="aui-avatar" src="./images/avatar.png">-->
          <span>admin</span>
        </template>
        <el-menu-item index="3-1">修改密码</el-menu-item>
        <el-menu-item index="3-2">退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="1">
        <svg class="icon-svg aui-header__icon-menu" aria-hidden="true"><use xlink:href="#icon-setting"></use></svg>
      </el-menu-item>
    </el-menu>
  </div>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'Header',
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

