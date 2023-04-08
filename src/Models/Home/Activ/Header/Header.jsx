import React from 'react'
import headerStyle from './Header.module.scss'
import { Link } from 'react-router-dom'
import { header_img } from '../../../../assest/img'

const Header = () => {
  return (
    <>
      <div className={headerStyle.text}>
        <p className={headerStyle.text_h1}>РАСТИ ВМЕСТЕ С НАМИ</p>
        <div className={headerStyle.img}>
          <img src={header_img} alt="header_img" />
        </div>
        <Link to="/loginPage">
          <button className={headerStyle.header_button}>
            Зарегистрироваться
          </button>
        </Link>
      </div>
    </>
  )
}

export default Header
