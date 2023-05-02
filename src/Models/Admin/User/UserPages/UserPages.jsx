import React from 'react'
import UserAvatar from '../../../Profile/Profile/UserAvatar/UserAvatar'
import SetingProfile from '../../../Profile/Route/SetingProfile/SetingProfile'
import userPagesStyle from './UserPages.module.scss'

const UserPages = () => {
  return (
    <>
      <div className={userPagesStyle.container}>
        <SetingProfile />
      </div>
    </>
  )
}

export default UserPages
