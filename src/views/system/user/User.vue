<template>
  <Card>
    <div class="search-bar">
      <Input clearable placeholder="输入关键字搜索" class="search-input" v-model="searchKey" />
      <Button class="search-btn" type="primary" @click="search"><Icon type="search" />&nbsp;&nbsp;搜索</Button>
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
        { title: '备注', key: 'remark' }
      ],
      data: [],
      searchKey: ''
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
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
