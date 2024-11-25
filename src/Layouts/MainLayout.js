import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <div>
        <Outlet />
    </div>
    <Footer />

    </>
  )
}

export default MainLayout