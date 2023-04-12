const Endpoints = {
  BASE_URL: {
    url: 'https://g4g.herokuapp.com',
  },
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REGISTER: '/api/v1/auth/register',
    REFRESH: '/api/v1/auth/refresh',
    ACTIV: '/api/v1/auth/active/',
    GETREGION: '/api/v1/regions',
  },
  RECOVERY: {
    CHECKEMAIL: '/api/v1/password/forgot/',
    NEWCODE: '/api/v1/password/reset/',
    NEWPASSWORD: '/api/v1/password/reset/',
  },
  ADDPRODUCTS: {
    ADDFILE: '/api/v1/file/upload/',
    ADDPRODUCT: '/api/v1/product/',
  },
}

export default Endpoints