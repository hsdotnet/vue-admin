<template>
  <Card>
    <div class="search-bar">
      <div class="left">
        <Input clearable placeholder="用户名" class="search-input" v-model="searchData.usreName" />
        <Input clearable placeholder="邮箱" class="search-input" v-model="searchData.email" />
        <ButtonGroup class="ml5">
          <Button type="primary" icon="md-search" @click="search">查询</Button>
          <Button icon="md-close" @click="clear">清空</Button>
        </ButtonGroup>
      </div>
      <div class="right">
        <ButtonGroup class="mr5">
          <Button type="primary" icon="md-add" @click="add">新增</Button>
          <Button type="error" icon="md-close" @click="batchDel">删除</Button>
        </ButtonGroup>
      </div>
    </div>
    <Table border :columns="columns" :data="data" size="small"></Table>

    <Modal
      title="用户管理"
      v-model="modal"
      :closable="false"
      :mask-closable="false">
      <Form ref="userForm" :model="formData" :rules="userRules" :label-width="80">
        <FormItem label="用户名" prop="userName">
          <Input type="text" v-model="formData.userName"/>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="formData.password"/>
        </FormItem>
        <FormItem label="真实姓名" prop="realName">
          <Input type="text" v-model="formData.realName"/>
        </FormItem>
        <FormItem label="出生日期">
          <DatePicker type="date" v-model="formData.birthday"/>
        </FormItem>
        <FormItem label="性别">
          <RadioGroup v-model="formData.sex">
            <Radio label="1">男</Radio>
            <Radio label="0">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="邮箱">
          <Input type="text" v-model="formData.email"/>
        </FormItem>
        <FormItem label="备注">
          <Input type="textarea" v-model="formData.remark"/>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="cancel">取消</Button>
        <Button type="primary" @click="save">保存</Button>
      </div>
    </Modal>
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
        {
          title: '性别',
          width: 70,
          key: 'sex',
          align: 'center',
          render: (h, params) => {
            const row = params.row
            const color = row.sex === 1 ? 'green' : 'blue'
            const text = row.sex === 1 ? '男' : '女'
            return h('Tag', {
              props: { color: color }
            }, text)
          }
        },
        {
          title: '出生日期',
          width: 100,
          key: 'birthday',
          align: 'center',
          render: (h, params) => {
            return h('div', moment().format('YYYY-MM-DD'))
          }
        },
        { title: '邮箱', width: 200, key: 'email' },
        { title: '备注', key: 'remark' },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 110,
          render: (h, params) => {
            var that = this
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  icon: 'md-checkbox-outline',
                  size: 'small'
                },
                style: {
                  fontSize: '14px',
                  marginRight: '5px'
                },
                on: {
                  click () {
                    that.edit(params.row)
                  }
                }
              }, ''),
              h('Button', {
                props: {
                  type: 'error',
                  icon: 'md-trash',
                  size: 'small'
                },
                style: {
                  fontSize: '14px'
                },
                on: {
                  click () {
                    that.del(params.row)
                  }
                }
              }, '')
            ])
          }
        }
      ],
      data: [],
      searchData: {
        usreName: '',
        email: ''
      },
      modal: false,
      selectRows: [],
      formData: {
        userId: 0,
        userName: '',
        password: '',
        realName: '',
        sex: '1',
        birthday: '',
        email: '',
        remark: ''
      },
      userRules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '真实姓名不能为空', trigger: 'blur' }
        ]
      }
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
      this.searchData.usreName = ''
      this.searchData.email = ''
      this.getTableData()
    },
    add () {
      this.modal = true
    },
    edit (user) {
      this.modal = true
      this.formData.userId = user.userId
      this.formData.userName = user.userName
      this.formData.realName = user.realName
      this.formData.sex = user.sex.toString()
      this.formData.birthday = user.birthday
      this.formData.email = user.email
      this.formData.remark = user.remark
    },
    del (user) {
      this.$Modal.confirm({
        title: '系统提示',
        content: '确定要删除【' + user.userName + '】？',
        onOk: () => { }
      })
    },
    batchDel () {
      if (this.selectRows.length === 0) {
        this.$Message.warning('请选择要删除的记录')
        return
      }
      this.$Modal.confirm({
        title: '系统提示',
        content: '确定要删除选择的记录？',
        onOk: () => { }
      })
    },
    reset () {
      this.$refs['userForm'].resetFields()
      this.formData.userId = 0
      this.formData.userName = ''
      this.formData.password = ''
      this.formData.realName = ''
      this.formData.sex = '1'
      this.formData.birthday = ''
      this.formData.email = ''
      this.formData.remark = ''
    },
    cancel () {
      this.modal = false
      this.reset()
    },
    save () {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          this.reset()
          this.modal = false
        }
      })
    }
  },
  mounted () {
    this.getTableData()
  }
}
</script>
