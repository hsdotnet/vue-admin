import Mock from 'mockjs'
import { login, logout, getUserInfo, getUsers } from './user'
import { getRoles } from './role'
import { getDepts, getDeptTree } from './dept'

Mock.mock(/\/login/, login)
Mock.mock(/\/getUserInfo/, getUserInfo)
Mock.mock(/\/getUsers/, getUsers)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/getRoles/, getRoles)
Mock.mock(/\/getDepts/, getDepts)
Mock.mock(/\/getDeptTree/, getDeptTree)

export default Mock
