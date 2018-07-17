<template>
    <div>
        <Tabs class="tabs" :value="ct">
            <TabPane v-for="tab in tabs" :key="tab" :name="'tab' + tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        </Tabs>
        <Button type="success" @click="handleAddTabs">Success</Button>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      ct: 'tab1',
      tabs: 1
    }
  },
  methods: {
    handleAddTabs () {
      this.tabs++
      this.ct = 'tab' + this.tabs
    }
  }
}
</script>

<style>

</style>
