import $api from '../../api'
import Endpoints from '../../api/Endpoints'

export default class ProductsService {
  static async addproduct({ product, formData }) {
    const response = await $api.post(
      `${Endpoints.ADDPRODUCTS.PRODUCT}`,
      product,
    )
    const result = await $api.post(
      `${Endpoints.ADDPRODUCTS.ADDFILE}${response.data}`,
      formData,
      {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    )
  }
  static async getAllProduct() {
    return await $api.get(`${Endpoints.ADDPRODUCTS.PRODUCT}`)
  }
  static async getIdProduct(id) {
    return await $api.get(`${Endpoints.ADDPRODUCTS.PRODUCT}${id}`)
  }
  static async deleteProduct(id) {
    return await $api.delete(`${Endpoints.ADDPRODUCTS.PRODUCT}${id}`)
  }
  static async addBasket(productData) {
    return await $api.post(`${Endpoints.BASKET}`, productData)
  }
  static async getBasket() {
    return await $api.get(`${Endpoints.BASKET}`)
  }

  static async deleteBasket(id) {
    return await $api.delete(`${Endpoints.BASKET}${id}`)
  }
  static async amountProduct(userData) {
    return await $api.put(`${Endpoints.BASKET}`, userData, {
      headers: { 'Content-Type': 'application/json' },
    })
  }
  static async addOrder() {
    return await $api.post(`${Endpoints.ORDER}`)
  }
  static async getOrder() {
    return await $api.get(`${Endpoints.MYORDER}`)
  }
}
