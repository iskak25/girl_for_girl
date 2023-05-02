import React from 'react'
import { useSelector } from 'react-redux'
import { avatar } from '../../../../assest/img'
import userAvatarStyle from './UserAvatar.module.scss'
const UserAvatar = () => {
  const getUser = useSelector((state) => state.getIdUser.userId)

  return (
    <>
      <div className={userAvatarStyle.header}>
        <h3 className={userAvatarStyle.header_h3}>Профиль</h3>
        <img
          className={userAvatarStyle.header_img}
          src={getUser.image_url ? getUser.image_url : avatar}
          alt="avatar"
        />
        <p className={userAvatarStyle.header_name}>
          <span>{getUser?.lastName}</span> {getUser?.firstName}
        </p>
        <p className={userAvatarStyle.header_plece}>
          {getUser?.region.name}, Кыргызстан
        </p>
      </div>
    </>
  )
}

export default UserAvatar
