import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RootForums from '../Models/Forums/RootForums/RootForums'

const ConferencesPages = () => {
  return (
    <div>
      {' '}
      <Navbar />
      <RootForums />
      <Footer />
    </div>
  )
}

export default ConferencesPages
