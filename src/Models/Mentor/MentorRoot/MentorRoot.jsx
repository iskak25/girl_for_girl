import React from 'react'
import Pagination from '../../../components/Pagination/Pagination'
import AllMentor from '../AllMentor/AllMentor'
import MentorMain from '../MentorMain/MentorMain'
import rootMainStyle from './MentorRoot.module.scss'
const MentorRoot = () => {
  return (
    <>
      <div className={rootMainStyle.container}>
        <div className={rootMainStyle.content}>
          <MentorMain />
          <AllMentor title={'Наши ментора'} />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default MentorRoot
