import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RootForums from '../Models/Forums/RootForums/RootForums'
import TrainingsRoot from '../Models/Trainings/TrainingsRoot/TrainingsRoot'

const TrainingsPages = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <TrainingsRoot />
      <Footer />
    </div>
  )
}

export default TrainingsPages
