import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ActivRoot from '../Models/Home/Activ/ActivRoot'
import IsActiv from '../Models/Home/IsActiv/IsActiv'

const Home = () => {
  const activing = useSelector((state) => state.activ.stateActiv)
  return (
    <div>
      <Navbar />

      {activing ? (
        <>
          <ActivRoot /> <Footer />
        </>
      ) : (
        <IsActiv />
      )}
    </div>
  )
}

export default Home
