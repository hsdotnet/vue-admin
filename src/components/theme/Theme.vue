<template>
  <ul class="themes">
    <li v-for="item in list" :key="`tmeme-${item.name}`" @click="handleCheck(item)">
      <div class="theme-header" :style="{background: item.bgHeader}"></div>
      <div class="theme-sider" :style="{background: item.bgSider}"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tmeme',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleCheck (item) {
      this.$emit('on-change', item)
    }
  }
}
</script>

<style lang="less">
.themes{display: flex;flex-direction: row;flex-wrap: wrap;}
.themes li{width: 80px; height: 50px; margin: 5px 8px;background: #eee;position: relative; opacity: 0.5;cursor: pointer;}
.themes li:hover{opacity: 1;}
.themes li .theme-header{position: relative;height: 10px;}
.themes li .theme-sider{position: absolute;left: 0; top: 10px;width: 20px; height: 40px;}
</style>
