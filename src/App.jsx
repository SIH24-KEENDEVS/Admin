import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../Components/NavBar'
import Dashboard from '../Components/Dashboard'
import { Route, Routes } from 'react-router'
import DashboardPage from '../Pages/DashboardPage'
import Map from '../Components/Map'

function App() {

  return (
    <>
      {/* <div className="w-full h-screen">
        <NavBar/>
        <Dashboard/>
      </div> */}
      <Routes>
        <Route index path='/' element={<DashboardPage/>}/>
        <Route  path='/user' element={<Map/>}/>
      </Routes>
    </>
  )
}

export default App
