import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  avatar,
  file_icon,
  setting_icon_violet,
  time,
  vector_profile,
} from '../../../assest/img'
import profileStyle from './Profile.module.scss'
import UserAvatar from './UserAvatar/UserAvatar'

const Profile = (props) => {
  const navigate = useNavigate()
  const getUser = useSelector((state) => state.getIdUser.userId)
  console.log(getUser)
  function logout() {
    localStorage.removeItem('user')
    navigate(`/`)
    window.location.reload()
  }

  return (
    <div>
      <div className={profileStyle.container}>
        <div className={profileStyle.content}>
          <UserAvatar />
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
            <div onClick={logout} className={profileStyle.red_buttons}>
              <div onClick={logout} className={profileStyle.buttons_left}>
                <p className={profileStyle.buttons_p}>Выйти</p>
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
