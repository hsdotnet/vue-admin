import axios from '@/libs/api.request'

export const getRoles = (page, size) => {
  return axios.request({
    url: '/role/getRoles',
    params: {
      page,
      size
    },
    method: 'get'
  })
}
