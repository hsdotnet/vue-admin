<template>
  <Card>
    <div class="search-bar">
      <div class="left"></div>
      <div class="right">
        <ButtonGroup class="mr5">
          <Button type="primary"><Icon type="plus"/>新增</Button>
          <Button type="error"><Icon type="close"/>删除</Button>
        </ButtonGroup>
        <Button><Icon type="ios-reload"/>刷新</Button>
      </div>
    </div>
    <div style="display:flex;flex:auto;">
      <div style="width:230px;max-width:230px;min-width:230px;flex:0 0 230px;padding:0 5px;">
        <Tree class="tree" :data="treeData" :render="treeRender"/>
      </div>
      <div style="flex:auto;overflow-x: hidden">
        <Table border :columns="columns" :data="data" size="small"></Table>
      </div>
    </div>
  </Card>
</template>

<script>
import { getDepts, getDeptTree } from '@/api/dept'
export default {
  name: 'Dept',
  data () {
    return {
      treeData: [],
      searchKey: '',
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '编号', width: 70, key: 'deptId' },
        { title: '部门名称', width: 200, key: 'deptName' },
        { title: '部门Code', width: 100, key: 'deptCode' },
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
