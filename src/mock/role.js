const roles = [
  {
    roleId: 1,
    roleName: '管理员',
    remark: '管理员'
  },
  {
    roleId: 2,
    roleName: '测试人员',
    remark: '测试人员'
  },
  {
    roleId: 3,
    roleName: '开发人员',
    remark: '开发人员'
  }
]

export const getRoles = req => {
  return {
    code: 0,
    data: {
      records: 3,
      page: 1,
      size: 10,
      total: 1,
      rows: roles
    },
    msg: ''
  }
}
