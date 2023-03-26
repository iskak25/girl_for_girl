import React from 'react'
import activRootStyle from './ActivRoot.module.scss'
import Content from './Content/Content'
import Header from './Header/Header'
import Main from './Main/Main'
import Form from './Form/Form'
import WeOffer from './WeOffer/WeOffer'

const ActivRoot = () => {
  return (
    <>
      <div className={activRootStyle.container}>
        <Header />
        <Main />
        <Content />
        <Form />
        <WeOffer />
      </div>
    </>
  )
}

export default ActivRoot
