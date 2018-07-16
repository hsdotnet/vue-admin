import { getParams } from '@/libs/util'
const USER_MAP = {
  admin: {
    userName: 'admin',
    userId: '1',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
    isTab: true
  },
  test: {
    userName: 'test',
    userId: '2',
    access: ['test', 'admin'],
    token: 'test',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png',
    isTab: false
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return {
    code: 0,
    data: {token: USER_MAP[req.userName].token},
    msg: ''
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return {
    code: 0,
    data: USER_MAP[params.token],
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
