import $api from '../../../api'
import Endpoints from '../../../api/Endpoints'

export default class GetUserService {
  static async getUserId(userId) {
    return await $api.get(`${Endpoints.GETUSER.GETUSERID}${userId}`)
  }
  static async getRoleUser(userId) {
    return await $api.get(`${Endpoints.ROLE}${userId}`)
  }
  static async getAllUsers() {
    return await $api.get(`${Endpoints.GETUSER.GETALLUSER}`)
  }
}
