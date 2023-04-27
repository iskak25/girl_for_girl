import $api from '../../../api'
import Endpoints from '../../../api/Endpoints'

export default class HomeService {
  static async addQuestion(QuestionData) {
    return await $api.post(`${Endpoints.QUETIONS}`, QuestionData)
  }
}
