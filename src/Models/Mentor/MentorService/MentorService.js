import $api from '../../../api'
import Endpoints from '../../../api/Endpoints'

export default class MentorsService {
  static async addNewMentor({ mentor, formData }) {
    const response = await $api.post(`${Endpoints.MENTOR}`, mentor)
    const result = await $api.post(
      `${Endpoints.MENTORADDFILE}${response.data}`,
      formData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    )
  }
  static async getAllMentor() {
    return await $api.get(`${Endpoints.MENTOR}`)
  }
  static async GetIdMentor(id) {
    return await $api.get(`${Endpoints.MENTOR}${id}`)
  }
  static async deleteMentor(id) {
    return await $api.delete(`${Endpoints.MENTOR}${id}`)
  }
}
