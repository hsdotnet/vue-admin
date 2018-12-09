<template>
    <div ref="auiWrapper" class="aui-wrapper">
        <layout-header></layout-header>
        <layout-aside></layout-aside>
        <layout-control></layout-control>
        <layout-main></layout-main>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import LayoutHeader from '_c/layout/header'
import LayoutAside from '_c/layout/aside'
import LayoutControl from '_c/layout/control'
import LayoutFooter from '_c/layout/footer'
import LayoutMain from '_c/layout/main'
export default {
    name: 'Layout',
    components:{
        LayoutHeader,
        LayoutAside,
        LayoutControl,
        LayoutFooter,
        LayoutMain
    }
}
</script>
