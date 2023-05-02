import React from 'react'
import adminStyle from './AdminSteps.module.scss'

import { steps } from '../../../../redux/features/components'
import { useDispatch, useSelector } from 'react-redux'
import { people, setting, user } from '../../../../assest/img'
import UserAvatar from '../../../Profile/Profile/UserAvatar/UserAvatar'

const AdminSteps = () => {
  const dispatch = useDispatch()

  const items = [
    { desc: 'Профиль', img: setting },
    { desc: 'Настройки', img: user },
    { desc: 'Пользователи', img: people },
  ]

  const step = useSelector((state) => state.activ.step)
  // if (step === 3) {
  //   return step == 2
  // }

  return (
    <div>
      <div className={adminStyle.item}>
        {items.map((i, index) => (
          <div
            onClick={() => dispatch(steps(index))}
            key={index}
            // className={
            //   props.page == i ? adminStyle.list_activ : adminStyle.list
            // }
          >
            <div
              className={
                step == index
                  ? adminStyle.adminContainer_activ
                  : adminStyle.adminContainer
              }
            >
              <img className={adminStyle.adminImg} src={i.img} alt="" />
              <p className={adminStyle.adminText}>{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminSteps
