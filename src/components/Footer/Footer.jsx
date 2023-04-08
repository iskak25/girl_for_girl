import React from 'react'
import footerStyle from './Footer.module.scss'
import { Link } from 'react-router-dom'
import {
  footerLogo,
  telegram,
  tikTok,
  instagram,
  facebook,
} from '../../assest/img'

const Footer = () => {
  return (
    <>
      <div className={footerStyle.container}>
        <div className={footerStyle.content}>
          <div className={footerStyle.logo}>
            <img
              className={footerStyle.img}
              src={footerLogo}
              alt="footerLogo"
            />
          </div>

          <div className={footerStyle.right}>
            <div className={footerStyle.right_content}>
              <div className={footerStyle.text}>
                <Link to="">
                  <p className={footerStyle.text_p}>Менторская программа</p>
                </Link>
                <Link to="">
                  <p className={footerStyle.text_p}>Тренинги</p>
                </Link>
                <Link to="">
                  <p className={footerStyle.text_p}>Магазин</p>
                </Link>
                <Link to="">
                  <p className={footerStyle.text_p}>Конференции</p>
                </Link>
                <Link to="">
                  <p className={footerStyle.text_p}>Видеоуроки</p>
                </Link>
              </div>
              <div className={footerStyle.right_logo}>
                <a href="*">
                  <img
                    className={footerStyle.right_logo_item}
                    src={facebook}
                    alt="facebook"
                  />
                </a>
                <a href="*">
                  <img
                    className={footerStyle.right_logo_item}
                    src={tikTok}
                    alt="tikTok"
                  />
                </a>
                <a href="@iskak2512">
                  <img
                    className={footerStyle.right_logo_item}
                    src={telegram}
                    alt="telegram"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    className={footerStyle.right_logo_item}
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </div>
            </div>

            <div className={footerStyle.line}>
              <hr className={footerStyle.line_hr} />
            </div>

            <div className={footerStyle.end}>
              <p>© 2023 Все права защищены</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
