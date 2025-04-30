import React from 'react'
import MasterNavBar from '../../components/MasterComponents/masterNavBar/MasterNavBar'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div className='adminDashboard'>
      <MasterNavBar/>
      <Outlet/>
    </div>
  )
}

export default AdminDashboard
