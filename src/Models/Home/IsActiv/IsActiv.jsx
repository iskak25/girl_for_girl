import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sadGirl } from '../../../assest/img'
import { isActiv } from '../../../redux/features/components'
import isActivStyle from './IsActiv.module.scss'

const IsActiv = () => {
  const dispatch = useDispatch()
  const activing = useSelector((state) => state.activ.stateActiv)
  return (
    <>
      <div className={isActivStyle.container}>
        <div className={isActivStyle.content}>
          <button
            onClick={() => dispatch(isActiv())}
            className={isActivStyle.button}
          >
            включить свет
          </button>
          <img className={isActivStyle.img} src={sadGirl} alt="sadGirl" />
        </div>
      </div>
    </>
  )
}

export default IsActiv
