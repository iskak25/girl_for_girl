import React from 'react'
import buttonStyle from '../Button/Button.module.scss'

const Button = (props) => {
  return (
    <>
      <button className={buttonStyle.button}>{props.value}</button>
    </>
  )
}

export default Button
