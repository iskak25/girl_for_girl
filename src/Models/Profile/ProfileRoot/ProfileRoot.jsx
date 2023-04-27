import { style } from '@mui/system'
import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import HustoryProfile from '../Route/HustoryProfile/HustoryProfile'
import PlanStudy from '../Route/PlanStudy/PlanStudy'
import SetingProfile from '../Route/SetingProfile/SetingProfile'
import profileRootStyle from './ProfileRoot.module.scss'

const ProfileRoot = () => {
  const [pages, setPages] = useState(<HustoryProfile />)
  const activ_buttons = {
    border: ' 1px solid #db66e4',
  }
  function changeText(a) {
    if (a == 1) {
      setPages(<HustoryProfile />)
      style = { activ_buttons }
    } else if (a == 2) {
      setPages(<PlanStudy />)
      style = { activ_buttons }
    } else if (a == 3) {
      setPages(<SetingProfile />)
      style = { activ_buttons }
    }
  }
  return (
    <>
      <div>
        <div className={profileRootStyle.container}>
          <div className={profileRootStyle.content}>
            <div className={profileRootStyle.header_content}>
              <div className={profileRootStyle.header}>
                <h3 className={profileRootStyle.header_h3}>
                  Настройки профиля
                </h3>
              </div>
            </div>
            <div className={profileRootStyle.user}>
              <div className={profileRootStyle.left}>
                <Profile changeText={changeText} style={activ_buttons} />
              </div>
              <div className={profileRootStyle.right}>{pages}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileRoot
