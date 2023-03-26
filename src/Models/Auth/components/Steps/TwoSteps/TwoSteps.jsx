import React from 'react'
import twoStepsStyle from './TwoSteps.module.scss'

const TwoSteps = (props) => {
  const items = [0, 1]

  return (
    <>
      <div className={twoStepsStyle.container}>
        <div className={twoStepsStyle.button}>
          {props.page ? (
            <button onClick={props.onPrevious} className={twoStepsStyle.btn}>
              назад
            </button>
          ) : (
            <div></div>
          )}
        </div>

        <div className={twoStepsStyle.item}>
          {items.map((i) => (
            <div
              key={i}
              className={
                props.page == i ? twoStepsStyle.list_activ : twoStepsStyle.list
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TwoSteps
