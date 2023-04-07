import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import NumberInput from '../../components/NumberInput/NumberInput'
import Text from '../../components/Text/Text'
import LoginLogo from '../LoginLogo/LoginLogo'
import secondStyle from '../SecondAuth/SecondAuth.module.scss'
import numberInputStyle from '../../components/NumberInput/NumberInput.module.scss'
import ReactCodeInput from 'react-code-input'
import { useDispatch, useSelector } from 'react-redux'
import {
  activUser,
  activFunction,
} from '../../../../redux/features/auth/UserActivlice'
const SecondAuth = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true)
  const [pinCode, setPinCode] = useState('')
  const [btnIsPressed, setBtnIsPressed] = useState(false)

  const checkPinCode = () => {
    setBtnIsPressed(true)
    setIsPinCodeValid(isPinCodeValid)
    if (!isPinCodeValid) setPinCode('')
  }

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode)
    setBtnIsPressed(false)
  }

  const dispatch = useDispatch()

  const codes = useSelector((state) => state.auth.activ)
  console.log(codes)
  useEffect(() => {
    dispatch(activUser())
  }, [dispatch])

  return (
    <>
      <div className={secondStyle.second_container}>
        <div className={secondStyle.second}>
          <p className={secondStyle.numberInput_text}>
            Мы отправили код на ваш e-mail Перейдите по ссылке в письме, чтобы
            продолжить
          </p>
          <div className={secondStyle.numberInput_input}>
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
              isValid={isPinCodeValid}
              fields={4}
              onChange={handlePinChange}
              value={pinCode}
              className={secondStyle.input}
              placeholder="-"
            />
          </div>
          <div className={secondStyle.second_button}>
            <Link to="/">
              <button
                onClick={() => dispatch(activFunction(pinCode))}
                className={secondStyle.btn}
              >
                Подтвердить
              </button>
            </Link>
          </div>
          <p>
            не получили код?
            <a href="*">отправить еще раз</a>
          </p>
          <Text
            p={'вы уже зарегистрированы?'}
            link={'/LoginUser'}
            a={'войти'}
          />
        </div>
      </div>
    </>
  )
}

export default SecondAuth
