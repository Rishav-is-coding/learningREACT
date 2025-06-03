import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

//pass components dynamically
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
