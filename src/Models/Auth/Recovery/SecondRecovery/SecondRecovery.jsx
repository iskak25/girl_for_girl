import React from 'react'
import NumberInput from '../../components/NumberInput/NumberInput'
import secondRecovery from './SecondRecovery.module.scss'

const SecondRecovery = (props) => {
  return (
    <>
      <div className={secondRecovery.container}>
        <p className={secondRecovery.p}></p>
        <NumberInput />
        <div className={secondRecovery.button}>
          <button onClick={() => props.onNext()} className={secondRecovery.btn}>
            Подтвердить
          </button>
        </div>
      </div>
    </>
  )
}

export default SecondRecovery
