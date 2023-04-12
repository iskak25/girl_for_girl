import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Text from '../../components/Text/Text'
import newPasswordStyle from '../NewPassword/NewPassword.module.scss'
import { newPassword } from '../../../../redux/features/recovery/recoverySlice'
import { useEffect } from 'react'

const NewPassword = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.recovery.value)
  // useEffect(() => {
  //   console.log(posts)
  // }, [posts])
  // console.log(posts)

  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const vales = {
    password,
    confirmPass,
  }
  const userData = JSON.stringify(vales, null, 2)
  const data = { userData, posts }
  return (
    <>
      <div className={newPasswordStyle.newPassword_container}>
        <div className={newPasswordStyle.newPassword}>
          <h3 className={newPasswordStyle.newPassword_text}>
            Придумайте новый пароль
          </h3>
          <div className={newPasswordStyle.newPassword_input}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className={newPasswordStyle.input_big}
              type="password"
              placeholder="новый пароль"
              value={password}
              name="phoneNumber"
            />
          </div>
          <div className={newPasswordStyle.newPassword_input}>
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              className={newPasswordStyle.input_big}
              type="password"
              placeholder="Придумайте новый пароль"
              value={confirmPass}
              name="phoneNumber"
            />
          </div>
          {/* <Link to="/"> */}
          <button
            className={newPasswordStyle.btn}
            onClick={() => dispatch(newPassword(data))}
          >
            Восстановить
          </button>
          {/* </Link> */}
          <Text
            className={newPasswordStyle.text}
            p={'вспомнили пароль? '}
            a={'войти'}
          />
          <Text
            className={newPasswordStyle.text}
            p={'нет аккаунта? '}
            a={'зарегистрироваться   '}
          />
        </div>
      </div>
    </>
  )
}

export default NewPassword
