import React from 'react'
import ReactCodeInput from 'react-code-input'
import secondRecovery from './SecondRecovery.module.scss'
import secondStyle from '../../Login/SecondAuth/SecondAuth.module.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import {
  checkCodeAction,
  newCode,
} from '../../../../redux/features/recovery/recoverySlice'

const SecondRecovery = (props) => {
  // const [isPinCodeValid, setIsPinCodeValid] = useState(true)
  const [pinCode, setPinCode] = useState('')
  const handlePinChange = (pinCode) => {
    setPinCode(pinCode)
    // setBtnIsPressed(false)
  }

  const dispatch = useDispatch()
  function newPage() {
    dispatch(checkCodeAction(pinCode))
    dispatch(newCode(pinCode))
    props.onNext()
  }

  useEffect(() => {
    dispatch(checkCodeAction(pinCode))
  }, [dispatch])

  return (
    <>
      <div className={secondRecovery.container}>
        <p className={secondRecovery.p}></p>
        <ReactCodeInput
          id="pinCode"
          type="number"
          inputStyle={{
            width: '88px',
            height: '118px',
            margin: '10px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            border: '1px solid #C192EE',
            fontFamily: 'Poppins',

            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '2em',
            textAlign: 'center',
          }}
          // isValid={isPinCodeValid}
          fields={4}
          onChange={handlePinChange}
          value={pinCode}
          className={secondStyle.input}
          placeholder="-"
        />
        <div className={secondRecovery.button}>
          <button onClick={newPage} className={secondRecovery.btn}>
            Подтвердить
          </button>
        </div>
      </div>
    </>
  )
}

export default SecondRecovery
