<template>
    <div class="aui-footer">
  <p><a href="https://www.renren.io/" target="_blank">人人开源</a>2018 © renren.io</p>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'Footer',
    data () {
    return {
      
    }
  },
    methods: {
    ...mapMutations([
      'setAsideFold'
    ])
  },
    computed:{
      
    }
}
</script>
