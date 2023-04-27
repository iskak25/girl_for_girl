import axios from 'axios'
import Endpoints from './Endpoints'

const $api = axios.create({
  baseURL: Endpoints.BASE_URL,
})
const user = JSON.parse(localStorage.getItem('user'))
const token = user ? user.accessToken : ''

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})
// 0500918888
// l465
// 231

export default $api
