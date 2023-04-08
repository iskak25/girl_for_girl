import axios from 'axios'
import { BASE_URL } from './Endpoints'

const interceptors = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export default interceptors
