<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <IconFont :type="parentItem.icon"/>
      <span>{{ showTitle(parentItem) }}</span>
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <nav-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></nav-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><IconFont :type="item.children[0].icon || ''" /><span>{{ showTitle(item.children[0]) }}</span></menu-item>
      </template>
      <template v-else>
        <nav-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></nav-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><IconFont :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script>
import IconFont from '_c/icon-font'
import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
  name: 'NavItem',
  components: {
    IconFont
  },
  mixins: [ mixin, itemMixin ]
}
</script>
