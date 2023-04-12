import axios from 'axios'
import Endpoints from '../../../api/Endpoints'

const checkemail = async (email) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.RECOVERY.CHECKEMAIL}${email}`,
    email,
  )

  return response.data
}

const newPassword = async (data) => {
  console.log(data)
  console.log(data.posts)
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.RECOVERY.NEWCODE}${data.posts}`,
    data.userData,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.data
}

const newCode = async (code) => {
  const response = await axios.get(
    `${Endpoints.BASE_URL.url}${Endpoints.RECOVERY.NEWCODE}${code}`,
    code,
  )

  return response.data
}

const recoveryService = {
  checkemail,
  newPassword,
  newCode,
}

export default recoveryService
