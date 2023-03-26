import Endpoints from '../api/Endpoints'
import axios from 'axios'

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
    `${Endpoints.BASE_URL.url}/api/v1/auth/active/${code}`,
    code,
  )
  return response.data
}

const authService = {
  signup,
  signin,
  activUser,
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
