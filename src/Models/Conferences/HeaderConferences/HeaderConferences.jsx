import React from 'react'
import { conferencesHeader_img } from '../../../assest/img'
import ConferencesHeaderStyle from './HeaderConferences.module.scss'
const HeaderConferences = () => {
  return (
    <>
      <div className={ConferencesHeaderStyle.container}>
        <div className={ConferencesHeaderStyle.content}>
          <div className={ConferencesHeaderStyle.text}>
            <h3 className={ConferencesHeaderStyle.text_h3}>
              Роль девушек в новом мире
            </h3>
            <p className={ConferencesHeaderStyle.text_p}>
              Приглашаем вас на конференцию 12-мая, в ПОИСКАХ НОВЫХ
              ВОЗМОЖНОСТЕЙ: НА ЧТО СПОСОБНЫ девушки, КОГДА ЭКОНОМИКУ И ОБЩЕСТВО
              «ШТОРМИТ».
            </p>
            <button className={ConferencesHeaderStyle.text_button}>
              Подать заявку
            </button>
          </div>
          <div className={ConferencesHeaderStyle.container_img}>
            <img
              className={ConferencesHeaderStyle.img}
              src={conferencesHeader_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderConferences
