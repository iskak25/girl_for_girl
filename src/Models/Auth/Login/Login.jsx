// import { Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
// import FirstAuth from '../../Models/Auth/Login/FirstAuth/FirstAuth'
import loginStyle from '../Login/Login.module.scss'
import SecondAuth from './SecondAuth/SecondAuth'
import FirstAuth from './FirstAuth/FirstAuth'
import LoginLogo from './LoginLogo/LoginLogo'
import ThreeSteps from '../components/Steps/ThreeSteps/ThreeSteps'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [step, setStep] = useState(0)
  const onNext = () => setStep(step + 1)
  const onPrevious = () => setStep(step - 1)
  const pages = [<FirstAuth onNext={onNext} />, <SecondAuth onNext={onNext} />]
  // const step = useSelector((state) => state.activ.step)

  return (
    <>
      <div className={loginStyle.container}>
        <div className={loginStyle.content}>
          <div className={loginStyle.login_heder}>
            <ThreeSteps page={step} />
          </div>
          <div className={loginStyle.content_item}>
            <div className={loginStyle.login_logo}>
              <LoginLogo />
            </div>
            <div className={loginStyle.item}>{pages[step]}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
