import React, { useState } from 'react'
import ThreeSteps from '../../components/Steps/ThreeSteps/ThreeSteps'
import LoginLogo from '../../Login/LoginLogo/LoginLogo'
import FirstRecovery from '../FirstRecovery/FirstRecovery'
import NewPassword from '../NewPassword/NewPassword'
import SecondRecovery from '../SecondRecovery/SecondRecovery'
import RootRecoveryStyle from './RootRecovery.module.scss'

const RootRecovere = () => {
  const [step, setStep] = useState(0)
  const onNext = () => setStep(step + 1)
  const onPrevious = () => setStep(step - 1)
  const pages = [
    <FirstRecovery onNext={onNext} />,
    <SecondRecovery onNext={onNext} />,
    <NewPassword />,
  ]

  return (
    <>
      <div className={RootRecoveryStyle.container}>
        <div className={RootRecoveryStyle.header}>
          <ThreeSteps onPrevious={onPrevious} page={step} />
        </div>
        <div className={RootRecoveryStyle.content}>
          <div className={RootRecoveryStyle.logo}>
            <LoginLogo />
          </div>
          <div className={RootRecoveryStyle.item}>{pages[step]}</div>
        </div>
      </div>
    </>
  )
}

export default RootRecovere
