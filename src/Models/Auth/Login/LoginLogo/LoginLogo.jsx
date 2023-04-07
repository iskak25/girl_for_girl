import React from 'react'
import logo from '../../../../assest/img/logo_black.png'
import girswater from '../../../../assest/img/girswater.png'
import logoStyle from '../LoginLogo/LoginLogo.module.scss'
const LoginLogo = () => {
  return (
    <>
      <div className={logoStyle.loginLogo}>
        <div className={logoStyle.loginLogo_header}>
          <img className={logoStyle.loginLogo_logo} src={logo} alt="logo" />
          <div className={logoStyle.loginLogo_girl}>
            <img
              className={logoStyle.loginLogo_girl_img}
              src={girswater}
              alt="girswater"
            />
            <h3>Расти вместе с нами</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginLogo
