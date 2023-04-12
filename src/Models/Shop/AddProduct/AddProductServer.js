// import axios from 'axios'
// import Endpoints from '../../../api/Endpoints'

// const addFile = async (userData) => {
//   const response = await axios.post(
//     `${Endpoints.BASE_URL.url}${Endpoints.ADDPRODUCT.ADDFILE}`,
//     userData,
//     // `Bearer ${localStorage.getItem('user')}`,
//   )

//   return response.data
// }

// const AddProductServer = {
//   addFile,
// }

// export default AddProductServer
import $api from '../../../api'
import Endpoints from '../../../api/Endpoints'

export default class AuthService {
  static async addproduct({ productData, fileData }) {
    const response = await $api.post(
      `${Endpoints.ADDPRODUCTS.ADDPRODUCT}`,
      productData,
    )
    const result = await $api.post(
      `${Endpoints.ADDPRODUCTS.ADDFILE}${response.data}`,
      fileData,
    )
    // return $api.post(Endpoints.ADDPRODUCT.ADDFILE, file)
  }
}

// const addNewPost = async ({ postData, formData }) => {
//   const response = await axios.post(${API_URL}create/new-post, postData, {
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   })

//   const result = await axios.post(
//     ${API_URL}create/new-post-image/${response.data},
//     formData,
//     {
//       headers: {
//         Authorization: Bearer ${token},
//         'Content-Type': multipart/form-data,
//       },
//     }
//   )

//   return result.data
// }
