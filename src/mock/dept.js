const deptTree = [
  {
    id: 0,
    title: '部门目录',
    expand: true,
    selected: false,
    checked: false,
    children: [
      {
        id: 1,
        title: '信息技术部',
        expand: true,
        selected: false,
        checked: false,
        children: [
          {
            id: 2,
            title: '测试部',
            expand: true,
            selected: false,
            checked: false,
            children: [
              {
                id: 3,
                title: '测试一部',
                expand: true,
                selected: false,
                checked: false,
                children: []
              }
            ]
          },
          {
            id: 4,
            title: '研发部',
            expand: true,
            selected: false,
            checked: false,
            children: []
          },
          {
            id: 5,
            title: '产品部',
            expand: true,
            selected: false,
            checked: false,
            children: []
          }
        ]
      }
    ]
  }
]

const depts = [
  {
    deptId: 1,
    deptCode: 'TH1001',
    deptName: '信息技术部',
    parentId: 0,
    remark: '信息技术部'
  },
  {
    deptId: 2,
    deptCode: 'TH1002',
    deptName: '测试部',
    parentId: 1,
    remark: '测试部'
  },
  {
    deptId: 3,
    deptCode: 'TH1003',
    deptName: '测试一部',
    parentId: 2,
    remark: '测试一部'
  },
  {
    deptId: 4,
    deptCode: 'TH1004',
    deptName: '研发部',
    parentId: 1,
    remark: '研发部'
  },
  {
    deptId: 5,
    deptCode: 'TH1005',
    deptName: '产品部',
    parentId: 1,
    remark: '产品部'
  }
]

export const getDepts = req => {
  return {
    code: 0,
    data: depts,
    msg: ''
  }
}

export const getDeptTree = req => {
  return {
    code: 0,
    data: deptTree,
    msg: ''
  }
}
