import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
    
    
    <Navbar />
    <Outlet />
    <Footer />
    
    
    
    
    
    </>
  )
}

export default LayoutOne