import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <Header/>
       
          <Outlet/>

      
    </div>
  )
}

export default Layout