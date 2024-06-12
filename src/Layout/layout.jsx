import React from 'react'
import Header from '../Components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer'

const Layout = () => {
  return (
    <div className=''>
<Header />,
<Outlet />,
<Footer />,
    </div>
  )
}

export default Layout