import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Text from '../../components/Text/Text'
import newPasswordStyle from '../NewPassword/NewPassword.module.scss'

const NewPassword = () => {
  return (
    <>
      <div className={newPasswordStyle.newPassword_container}>
        <div className={newPasswordStyle.newPassword}>
          <h3 className={newPasswordStyle.newPassword_text}>
            Придумайте новый пароль
          </h3>
          <div className={newPasswordStyle.newPassword_input}>
            <Input type={'password'} placeholder={'новый пароль'} />
          </div>
          <div className={newPasswordStyle.newPassword_input}>
            <Input type={'password'} placeholder={'Придумайте новый пароль'} />
          </div>
          <Link to="/">
            <Button value={'Восстановить'} />
          </Link>
          <Text p={'вспомнили пароль? '} a={'войти'} />
          <Text p={'нет аккаунта? '} a={'зарегистрироваться   '} />
        </div>
      </div>
    </>
  )
}

export default NewPassword
