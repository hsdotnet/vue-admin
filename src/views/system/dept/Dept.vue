<template>
  <Card>
    <div class="search-bar">
      <Input clearable placeholder="输入关键字搜索" class="search-input" v-model="searchKey" />
      <Button class="search-btn" type="primary" @click="search"><Icon type="search" />&nbsp;&nbsp;搜索</Button>
    </div>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
          <Tree class="tree" :data="treeData" :render="treeRender"/>
      </Sider>
      <Content :style="{padding: '5px'}">
        <Table border :columns="columns" :data="data" size="small"></Table>
      </Content>
    </Layout>
  </Card>
</template>

<script>
import { getDepts, getDeptTree } from '@/api/dept'
export default {
  name: 'Role',
  data () {
    return {
      treeData: [],
      searchKey: '',
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '编号', width: 70, key: 'deptId' },
        { title: '部门名称', width: 200, key: 'deptName' },
        { title: '部门Code', width: 100, key: 'deptCode' },
        { title: '备注', key: 'remark' }
      ],
      data: []
    }
  },
  methods: {
    getTreeData () {
      getDeptTree().then(res => {
        this.treeData = res.data
      })
    },
    treeRender (h, { root, node, data }) {
      return h('span', {
        class: 'ivu-tree-title'
      }, [
        h('Icon', {
          props: {
            type: data.children.length > 0 ? 'folder' : 'document'
          },
          style: {
            marginRight: '8px'
          }
        }),
        h('span', data.title)
      ])
    },
    getTableData () {
      var that = this
      getDepts().then(res => {
        that.data = res.data
      })
    },
    search () {
      this.getTableData()
    }
  },
  mounted () {
    this.getTreeData()
    this.getTableData()
  }
}
</script>
