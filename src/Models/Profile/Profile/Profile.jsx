import React from 'react'
import {
  avatar,
  file_icon,
  setting_icon_violet,
  time,
  vector_profile,
} from '../../../assest/img'
import profileStyle from './Profile.module.scss'

const Profile = (props) => {
  return (
    <div>
      <div className={profileStyle.container}>
        <div className={profileStyle.content}>
          <div className={profileStyle.header}>
            <h3 className={profileStyle.header_h3}>Профиль</h3>
            <img
              className={profileStyle.header_img}
              src={avatar}
              alt="avatar"
            />
            <p className={profileStyle.header_name}>Садыкова Айканыш</p>
            <p className={profileStyle.header_plece}>Бишкек, Кыргызстан</p>
          </div>
          <div className={profileStyle.all_buttons}>
            <div
              onClick={() => props.changeText(1)}
              className={profileStyle.buttons}
            >
              <div className={profileStyle.buttons_left}>
                <img
                  className={profileStyle.buttons_img}
                  src={time}
                  alt="time"
                />
                <p className={profileStyle.buttons_p}>История заказов</p>
              </div>
              <img
                className={profileStyle.buttons_vector}
                src={vector_profile}
                alt="vector_profile"
              />
            </div>

            <div
              onClick={() => props.changeText(2)}
              className={profileStyle.buttons}
            >
              <div className={profileStyle.buttons_left}>
                <img
                  className={profileStyle.buttons_img}
                  src={file_icon}
                  alt="time"
                />
                <p className={profileStyle.buttons_p}>Учебный план</p>
              </div>
              <img
                className={profileStyle.buttons_vector}
                src={vector_profile}
                alt="vector_profile"
              />
            </div>
            <div
              onClick={() => props.changeText(3)}
              className={profileStyle.buttons}
            >
              <div className={profileStyle.buttons_left}>
                <img
                  className={profileStyle.buttons_img}
                  src={setting_icon_violet}
                  alt="time"
                />
                <p className={profileStyle.buttons_p}>Настройки профиля</p>
              </div>

              <img
                className={profileStyle.buttons_vector}
                src={vector_profile}
                alt="vector_profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
