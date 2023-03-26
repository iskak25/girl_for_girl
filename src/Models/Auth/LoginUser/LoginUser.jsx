import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../../../redux/features/auth/AuthSlice'
import TwoSteps from '../components/Steps/TwoSteps/TwoSteps'
import Text from '../components/Text/Text'
import LoginLogo from '../Login/LoginLogo/LoginLogo'
import loginUserStyle from '../LoginUser/LoginUser.module.scss'

const LoginUser = () => {
  const [step, setStep] = useState(0)

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const vales = {
    email,
    password,
  }
  const userData = JSON.stringify(vales, null, 2)
  return (
    <>
      <div className={loginUserStyle.loginUser_container}>
        <TwoSteps page={step} />
        <div className={loginUserStyle.content}>
          <LoginLogo />
          <div className={loginUserStyle.loginUser}>
            <div className={loginUserStyle.loginUser_input}>
              <div className={loginUserStyle.loginUser_item}>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={loginUserStyle.input_big}
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={loginUserStyle.loginUser_item}>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={loginUserStyle.input_big}
                  type="password"
                  placeholder="Пароль"
                />
              </div>
            </div>
            <div className={loginUserStyle.loginUser_button}>
              <Link to="/">
                <button
                  className={loginUserStyle.loginUser_btn}
                  onClick={() => dispatch(signin(userData))}
                  value={'Войти'}
                >
                  Войти
                </button>
              </Link>
            </div>
            <div className={loginUserStyle.loginUser_text}>
              <Text
                link={'/recovery'}
                p={'забыли пароль? '}
                a={'восстановить'}
              />

              <Text
                link={'/loginPage'}
                p={' нет аккаунта? '}
                a={'зарегистрироваться'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginUser
