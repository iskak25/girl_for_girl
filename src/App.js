import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './MainRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
