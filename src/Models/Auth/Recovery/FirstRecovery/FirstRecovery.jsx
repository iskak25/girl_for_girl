import React from 'react'
import FirstRecoveryStyle from './FirstRecovery.module.scss'
import Text from '../../components/Text/Text'

const FirstRecovery = (props) => {
  return (
    <>
      <div className={FirstRecoveryStyle.container}>
        <div className={FirstRecoveryStyle.content}>
          <h2 className={FirstRecoveryStyle.h2}>
            Восстановления <br /> пароля
          </h2>
          <input
            type="email"
            placeholder="e-mail"
            className={FirstRecoveryStyle.input}
          />
          <button
            onClick={() => props.onNext()}
            className={FirstRecoveryStyle.btn}
          >
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
