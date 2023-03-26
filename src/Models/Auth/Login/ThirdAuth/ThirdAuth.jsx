import React from 'react'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import LoginLogo from '../LoginLogo/LoginLogo'
import thirdStyle from '../ThirdAuth/ThirdAuth.module.scss'

const ThirdAuth = () => {
  return (
    <>
      <div className={thirdStyle.third_container}>
        <LoginLogo />
        <div className={thirdStyle.third}>
          <select
            className={thirdStyle.select}
            name="user_profile_color_2"
            required="required"
          >
            <option value="">страна проживания</option>
            <option value="1">кыргызстан</option>
            <option value="2">казакстан</option>
            <option value="3">россия</option>
          </select>
          <select
            className={thirdStyle.select}
            name="user_profile_color_2"
            required="required"
          >
            <option value="">город</option>
            <option value="1"></option>
            <option value="2">казакстан</option>
            <option value="3">россия</option>
          </select>
          <div className={thirdStyle.third_button}>
            <Button value={'зарегистрироваться'} />
          </div>
          <div className={thirdStyle.third_text}>
            <Text p={'вы уже зарегистрированы?'} a={'войти'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdAuth
