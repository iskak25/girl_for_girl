import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../../../../redux/features/components'

import theeStepsStyle from './ThreeSteps.module.scss'

const ThreeSteps = (props) => {
  const items = [0, 1, 2]
  const dispatch = useDispatch()

  const step = useSelector((state) => state.activ.step)

  return (
    <>
      <div className={theeStepsStyle.container}>
        <div className={theeStepsStyle.button}>
          {props.page ? (
            <button
              onClick={() => dispatch(decrement())}
              className={theeStepsStyle.btn}
            >
              назад
            </button>
          ) : (
            <div></div>
          )}
        </div>

        <div className={theeStepsStyle.item}>
          {items.map((i) => (
            <div
              key={i}
              className={
                props.page == i
                  ? theeStepsStyle.list_activ
                  : theeStepsStyle.list
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ThreeSteps
