import axios from 'axios'
import $api from '../../../api'
import Endpoints from '../../../api/Endpoints'

// SignUp user
const signup = async (userData) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL}${Endpoints.AUTH.REGISTER}`,
    userData,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.data
}

// SignIn user
const signin = async (userData) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL}${Endpoints.AUTH.LOGIN}`,
    userData,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// activ user

const activUser = async (code) => {
  const response = await axios.get(
    `${Endpoints.BASE_URL}${Endpoints.AUTH.ACTIV}${code}`,
    code,
  )
  return response.data
}

const getRegion = async () => {
  const response = await axios.get(`${Endpoints.BASE_URL}${Endpoints.REGIONS}`)
  return response.data
}

const authService = {
  signup,
  signin,
  activUser,
  getRegion,
}

export default authService

// export class AuthServiceGet {
//   static async getRegion() {
//     return await $api.get(`${Endpoints.REGIONS}`, {
//       headers: { 'Content-Type': 'application/json' },
//     })
//   }
// }
