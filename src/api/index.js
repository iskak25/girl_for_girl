import axios from 'axios'
import Endpoints from './Endpoints'

const $api = axios.create({
  withCredentials: true,
  baseURL: Endpoints.BASE_URL.url,
})
const user = JSON.parse(localStorage.getItem('user'))
const token = user.accessToken
// console.log(token)

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default $api
