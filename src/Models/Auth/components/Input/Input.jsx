import React from 'react'
import inputStyle from '../Input/Input.module.scss'

const Input = (props) => {
  return (
    <>
      <input
        value={props.value}
        className={inputStyle.input}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  )
}

export default Input
