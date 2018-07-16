import Mock from 'mockjs'
import { login, logout, getUserInfo } from './user'

Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)

export default Mock
