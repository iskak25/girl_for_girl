import React from 'react'
import forumsStyle from './ForumsHeader.module.scss'
const ForumsHeader = ({ title }) => {
  return (
    <>
      <div className={forumsStyle.container}>
        <div className={forumsStyle.content}>
          <div className={forumsStyle.item}>
            <h3 className={forumsStyle.item_h3}>{title}</h3>
            <button className={forumsStyle.item_button}>Подать заявку</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForumsHeader
