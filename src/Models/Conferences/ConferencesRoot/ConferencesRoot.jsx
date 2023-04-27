import React from 'react'
import ContentConferences from '../ContentConferences/ContentConferences'
import HeaderConferences from '../HeaderConferences/HeaderConferences'
import confirencesRootStyle from './ConferencesRoot.module.scss'

const ConferencesRoot = () => {
  return (
    <>
      <div className={confirencesRootStyle.container}>
        <div className={confirencesRootStyle.content}>
          <HeaderConferences />
          <ContentConferences />
        </div>
      </div>
    </>
  )
}

export default ConferencesRoot
