import React from 'react'
import FirstRecoveryStyle from './FirstRecovery.module.scss'
import Text from '../../components/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  checkUser,
  // reset,
} from '../../../../redux/features/recovery/recoverySlice'
import { toast } from 'react-toastify'

const FirstRecovery = (props) => {
  const [email, setEmail] = useState('')

  const vales = {
    email,
  }

  const userData = vales.email

  function newPages() {
    dispatch(checkUser(userData))
    props.onNext()
  }

  const dispatch = useDispatch()
  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.recovery,
  // )
  useEffect(
    () => {
      // if (isError) {
      //   toast.error(message)
      // }
      // if (isSuccess) {
      //   // newPages()
      //   // navigate('')
      //   toast.success(message)
      // }
      // dispatch(reset())
    },
    [
      // user, isError, isSuccess, message, dispatch
    ],
  )
  return (
    <>
      <div className={FirstRecoveryStyle.container}>
        <div className={FirstRecoveryStyle.content}>
          <h2 className={FirstRecoveryStyle.h2}>
            Восстановления <br /> пароля
          </h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="e-mail"
            className={FirstRecoveryStyle.input}
          />
          <button onClick={() => newPages()} className={FirstRecoveryStyle.btn}>
            Восстановить
          </button>

          <div className={FirstRecoveryStyle.text}>
            <Text p={'Вспомнили пароль?'} link={'/LoginUser'} a={'войти'} />
          </div>
          <div className={FirstRecoveryStyle.text}>
            <Text
              p={' Нет аккаунта?'}
              link={'/LoginUser'}
              a={'Зарегистрироваться'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstRecovery
