<template>
  <div class="header">
    <ul class="header-left">
      <li>
        <a @click="handleNavToggle" type="text" :class="['icon sider-nav-toggle', collapsed ? 'collapsed' : '']"><IconFont type="outdent" /></a>
      </li>
      <li>
        <router-link class="logo" to="/">Admin</router-link>
      </li>
    </ul>
    <ul class="header-right">
      <li>
        <a type="text" class="icon notification"><IconFont type="notification" /></a>
      </li>
      <li>
        <a type="text" class="icon message"><IconFont type="message" /></a>
      </li>
      <li>
        <a type="text" class="icon fullscreen"><IconFont type="fullscreen" /></a>
      </li>
      <li>
        <a type="text" class="user">
          <Dropdown @on-click="handleClick">
            <Avatar :src="userAvator" class="user-dropdown-avator"/>
            <span class="user-text">Admin</span>
            <DropdownMenu slot="list">
              <DropdownItem name="profile"><IconFont type="user"/> 个人中心</DropdownItem>
              <DropdownItem name="password"><IconFont type="key"/> 修改密码</DropdownItem>
              <DropdownItem name="setting"><IconFont type="setting"/> 个人设置</DropdownItem>
              <DropdownItem name="logout" divided><IconFont type="logout"/> 退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </a>
      </li>
      <li>
        <a type="text" class="icon setting" @click="handleControlToggle"><IconFont type="setting" /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconFont from '_c/icon-font'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Header',
  components: {
    IconFont
  },
  data () {
    return {
      open: false
    }
  },
  props: {
    collapsed: Boolean
  },
  methods: {
    ...mapActions([
      'handleLogout'
    ]),
    ...mapMutations([
      'setControlOpen'
    ]),
    handleNavToggle () {
      this.$emit('on-toggle', !this.collapsed)
    },
    handleClick (name) {
      switch (name) {
        case 'logout':
          this.handleLogout().then(() => {
            this.$router.push({
              name: 'login'
            })
          })
          break
      }
    },
    handleControlToggle () {
      this.open = !this.open
      this.setControlOpen(this.open)
    }
  },
  computed: {
    userAvator () {
      return this.$store.state.user.avatorImgPath
    }
  }
}
</script>
