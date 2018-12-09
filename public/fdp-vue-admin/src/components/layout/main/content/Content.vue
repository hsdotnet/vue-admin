<template>
    <div class="aui-main__bd">
            <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cacheList">
        <router-view/>
      </keep-alive>
    </transition>
    </div>
</template>

<script>
export default {
    name: 'Content',
    computed:{
        cacheList () {
          return []
      }
    }
}
</script>
