import React from 'react'
import NavBar from '../Components/NavBar'
import Dashboard from '../Components/Dashboard'
import UserDetail from '../Components/UserDetail'

const DashboardPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-black text-white">
        <NavBar/>
        <Dashboard/>
        <UserDetail/>
    </div>
  )
}

export default DashboardPage