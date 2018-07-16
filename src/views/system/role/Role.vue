<template>
  <Card>
    <div class="search-bar">
      <Input clearable placeholder="输入关键字搜索" class="search-input" v-model="searchKey" />
      <Button class="search-btn" type="primary" @click="search"><Icon type="search" />&nbsp;&nbsp;搜索</Button>
    </div>
    <Table border :columns="columns" :data="data" size="small"></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="total" :current="page" show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
        </div>
    </div>
  </Card>
</template>

<script>
import { getRoles } from '@/api/role'
export default {
  name: 'Role',
  data () {
    return {
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '编号', width: 70, key: 'roleId' },
        { title: '名称', width: 200, key: 'roleName' },
        { title: '备注', key: 'remark' }
      ],
      data: [],
      page: 1,
      size: 10,
      total: 0,
      searchKey: ''
    }
  },
  methods: {
    getTableData () {
      var that = this
      getRoles(that.page, that.size).then(res => {
        that.data = res.data.rows
        that.total = res.data.records
      })
    },
    search () {
      this.page = 1
      this.getTableData()
    },
    pageChange (page) {
      this.page = page
      this.getTableData()
    },
    pageSizeChange (size) {
      this.size = size
      this.getTableData()
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
