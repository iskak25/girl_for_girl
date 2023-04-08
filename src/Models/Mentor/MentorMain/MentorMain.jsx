import React from 'react'
import mentorMainStyle from './MentorMain.module.scss'
import Navbar from '../../../components/Navbar/Navbar'

const MentorMain = () => {
  return (
    <>
      <div className={mentorMainStyle.container}>
        <div className={mentorMainStyle.content}>
          <Navbar />
          <div className={mentorMainStyle.main_text}>
            <h2 className={mentorMainStyle.main_text_h2}>
              Стань участником
              <br /> крутого сообщества
            </h2>
            <button className={mentorMainStyle.main_btn}>Подать заявку</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentorMain
