import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ConferencesRoot from '../Models/Conferences/ConferencesRoot/ConferencesRoot'
import RootForums from '../Models/Forums/RootForums/RootForums'

const ConferencesPages = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ConferencesRoot />
      <Footer />
    </div>
  )
}

export default ConferencesPages
