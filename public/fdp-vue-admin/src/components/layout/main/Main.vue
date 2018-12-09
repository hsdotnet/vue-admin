<template>
    <div class="aui-main">
      <main-header/>
      <main-content/>
    </div>
</template>

<script>
import MainHeader from '_c/layout/main/header'
import MainContent from '_c/layout/main/content'
export default {
    name: 'Main',
    components:{
      MainHeader,
      MainContent
    }
}
</script>
