<template>
  <Card>
    <div class="search-bar">
      <div class="left">
        <Input clearable placeholder="角色名称" class="search-input" v-model="roleName" />
        <ButtonGroup class="ml5">
          <Button type="primary" @click="search"><Icon type="search" />查询</Button>
          <Button @click="clear"><Icon type="close" />清空</Button>
        </ButtonGroup>
      </div>
      <div class="right">
        <ButtonGroup class="mr5">
          <Button type="primary" @click="add"><Icon type="plus"/>新增</Button>
          <Button type="error" @click="batchDel"><Icon type="close"/>删除</Button>
        </ButtonGroup>
      </div>
    </div>
    <Table border :columns="columns" @on-select="tableSelect" @on-select-cancel="tableSelectCancel" :data="data" size="small"></Table>
    <div class="page-wrapper">
      <Page :total="total" :current="page" show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange"></Page>
    </div>

    <Modal
      title="角色管理"
      v-model="modal"
      :closable="false"
      :mask-closable="false">
      <Form ref="roleForm" :model="formData" :rules="roleRules" :label-width="80">
        <FormItem label="角色名称" prop="roleName">
          <Input type="text" v-model="formData.roleName"/>
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
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 105,
          render: (h, params) => {
            var that = this
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
                  icon: 'trash-a',
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
      page: 1,
      size: 10,
      total: 0,
      roleName: '',
      modal: false,
      selectRows: [],
      formData: {
        roleId: 0,
        roleName: '',
        remark: ''
      },
      roleRules: {
        roleName: [
          { required: true, message: '角色名称不能为空', trigger: 'blur' }
        ]
      }
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
    tableSelect (selection, row) {
      this.selectRows.push(row)
    },
    tableSelectCancel (selection, row) {
      this.selectRows = selection
    },
    pageChange (page) {
      this.page = page
      this.getTableData()
    },
    pageSizeChange (size) {
      this.size = size
      this.getTableData()
    },
    search () {
      this.page = 1
      this.getTableData()
    },
    clear () {
      this.roleName = ''
      this.getTableData()
    },
    add () {
      this.modal = true
    },
    edit (role) {
      this.modal = true
      this.formData.roleId = role.roleId
      this.formData.roleName = role.roleName
      this.formData.remark = role.remark
    },
    del (role) {
      this.$Modal.confirm({
        title: '系统提示',
        content: '确定要删除【' + role.roleName + '】？',
        onOk: () => { }
      })
    },
    reset () {
      this.$refs['roleForm'].resetFields()
      this.formData.roleId = 0
      this.formData.roleName = ''
      this.formData.remark = ''
    },
    cancel () {
      this.modal = false
      this.reset()
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
    save () {
      this.$refs['roleForm'].validate((valid) => {
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
