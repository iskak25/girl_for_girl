import Endpoints from '../api/Endpoints'
import axios from 'axios'

const checkemail = async (email) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.RECOVERY.CHECKEMAIL}`,
    email,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.data
}

const newPassword = async (email) => {
  const response = await axios.post(
    `${Endpoints.BASE_URL.url}${Endpoints.RECOVERY.NEWPASSWORD}`,
    email,
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.data
}

const newCode = async (code) => {
  console.log(typeof code)
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
