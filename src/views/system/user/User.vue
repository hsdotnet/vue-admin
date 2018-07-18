<template>
  <Card>
    <div class="search-bar">
      <div class="left">
        <Input clearable placeholder="用户名" class="search-input" v-model="usreName" />
        <Input clearable placeholder="邮箱" class="search-input" v-model="email" />
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
  </Card>
</template>

<script>
import moment from 'moment'
import { getUsers } from '@/api/user'
export default {
  name: 'User',
  data () {
    return {
      columns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '编号', width: 70, key: 'userId' },
        { title: '用户名', width: 100, key: 'userName' },
        { title: '真实姓名', width: 100, key: 'realName' },
        { title: '性别', width: 70, key: 'sex', align: 'center', 
          render: (h, params) => {
            const row = params.row
            const color = row.sex === 1 ? 'green' : 'blue'
            const text = row.sex === 1 ? '男' : '女'
            return h('Tag', {
              props: { color: color }
            }, text)
          }
        },
        { title: '出生日期', width: 100, key: 'birthday', align: 'center',  
          render: (h, params) => {
            return h('div', moment().format('YYYY-MM-DD'))
          }
        },
        { title: '邮箱', width: 200, key: 'email' },
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
      usreName: '',
      email: ''
    }
  },
  methods: {
    getTableData () {
      var that = this
      getUsers(1, '', '').then(res => {
        that.data = res.data
      })
    },
    search () {
      this.getTableData()
    },
    clear () {
      this.usreName = ''
      this.email = ''
      this.getTableData()
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
