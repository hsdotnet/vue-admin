import axios from '@/libs/api.request'

export const getDeptInfo = (deptId) => {
  return axios.request({
    url: '/dept/getDeptById',
    params: {
      deptId
    },
    method: 'get'
  })
}

export const getDepts = () => {
  return axios.request({
    url: '/dept/getDepts',
    method: 'get'
  })
}

export const getDeptTree = () => {
  return axios.request({
    url: '/dept/getDeptTree',
    method: 'get'
  })
}
