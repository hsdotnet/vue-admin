import { getParams } from '@/libs/util'
const users = [
  {
    userId: 1,
    userName: 'admin',
    realName: '管理员',
    sex: 1,
    age: 12,
    birthday: '2018-07-16T02:12:47.211+0000',
    deptId: 1,
    email: '524857526@qq.com',
    address: '上海市普陀区',
    remark: '无',
    avator: 'http://adminlte.la998.com/dist/img/user2-160x160.jpg',
    isTab: true
  },
  {
    userId: 2,
    userName: 'test',
    realName: '管理员',
    sex: 1,
    age: 23,
    birthday: '2018-07-16T02:12:47.211+0000',
    deptId: 1,
    email: '8387451112@qq.com',
    address: '上海市静安区',
    remark: '无',
    avator: 'http://adminlte.la998.com/dist/img/user2-160x160.jpg',
    isTab: false
  }
]

export const login = req => {
  req = JSON.parse(req.body)
  let user = users.filter(item => item.userName === req.userName)
  if (user.length === 0) {
    return {
      code: -1,
      data: null,
      msg: '用户名或者密码错误'
    }
  } else {
    return {
      code: 0,
      data: user[0].userName,
      msg: ''
    }
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  let user = users.filter(item => item.userName === params.userName)
  return {
    code: 0,
    data: user[0],
    msg: ''
  }
}

export const logout = req => {
  return {
    code: 0,
    data: null,
    msg: ''
  }
}

export const getUsers = req => {
  return {
    code: 0,
    data: users,
    msg: ''
  }
}
