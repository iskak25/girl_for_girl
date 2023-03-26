import React from 'react'
import { Link } from 'react-router-dom'
import textStyle from '../Text/Text.module.scss'

const Text = (props) => {
  return (
    <>
      <p className={textStyle.p}>
        {props.p}
        <Link to={props.link}>
          <span className={textStyle.a}>{props.a}</span>
        </Link>
      </p>
    </>
  )
}

export default Text
