<template>
  <Card>
    <div class="search-bar">
      <div class="left">
        <Input clearable placeholder="角色名称" class="search-input" v-model="roleName" />
        <ButtonGroup class="ml5">
          <Button type="primary"><Icon type="search" />查询</Button>
          <Button><Icon type="close" />清空</Button>
        </ButtonGroup>
      </div>
      <div class="right">
        <ButtonGroup class="mr5">
          <Button type="primary"><Icon type="plus"/>新增</Button>
          <Button type="error"><Icon type="close"/>删除</Button>
        </ButtonGroup>
        <Button><Icon type="ios-reload"/>刷新</Button>
      </div>
    </div>
    <Table border :columns="columns" :data="data" size="small"></Table>
    <div class="page-wrapper">
      <Page :total="total" :current="page" show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
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
        { title: '备注', key: 'remark' },
        {
          title: '操作', key: 'action', fixed: 'right', width: 105, 
          render: (h, params) => { 
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  icon: 'edit',
                  size: 'small'
                },
                style: {
                  fontSize: '14px',
                  marginRight: '5px'
                }
              }, ''),
              h('Button', {
                props: {
                  type: 'error',
                  icon: 'trash-a',
                  size: 'small'
                },
                style: {
                  fontSize: '14px'
                }
              }, '')
            ]);
          }
        }
      ],
      data: [],
      page: 1,
      size: 10,
      total: 0,
      roleName: ''
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
