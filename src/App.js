import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainRoutes from './MainRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
