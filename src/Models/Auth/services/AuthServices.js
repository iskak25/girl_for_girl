import axios from 'axios'
import Endpoints from '../../../api/Endpoints'

// SignUp user
const signup = async (userData) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.AUTH.REGISTER}`,
    userData,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.data
}

const getRegion = async (userData) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.AUTH.GETREGION}`,
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
    `${Endpoints.BASE_URL.url}${Endpoints.AUTH.LOGIN}`,
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
  console.log(typeof code)
  const response = await axios.get(
    `${Endpoints.BASE_URL.url}${Endpoints.AUTH.ACTIV}${code}`,
    code,
  )
  return response.data
}

const authService = {
  signup,
  signin,
  activUser,
  getRegion,
}

export default authService

// import $api from '../api/interceptors'
// import Endpoints from '../api/Endpoints'

// export default class AuthService {
//   static async login(values) {
//     return $api.post(Endpoints.AUTH.LOGIN, { values })
//   }

//   static async registraton(values) {
//     return $api.post(Endpoints.AUTH.REGISTER, { values })
//   }

//   static async logout() {
//     return $api.post('/logout')
//   }
// }
