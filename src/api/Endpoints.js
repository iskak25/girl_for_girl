const Endpoints = {
  BASE_URL: 'https://g4g.herokuapp.com/api/v1',

  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    ACTIV: '/auth/active/',
    GETREGION: '/regions',
  },
  RECOVERY: {
    CHECKEMAIL: '/password/forgot/',
    NEWCODE: '/password/reset/',
    NEWPASSWORD: '/password/reset/',
  },
  ADDPRODUCTS: {
    PRODUCT: '/product/',
    ADDFILE: '/image/upload/product/',
  },
  GETUSER: {
    GETUSERID: '/user/',
    GETALLUSER: '/user',
  },
  REGIONS: '/regions',
  BASKET: '/myBasket/',
  QUETIONS: '/questions',
  ROLE: '/role/',
  ORDER: '/order',
}

export default Endpoints
