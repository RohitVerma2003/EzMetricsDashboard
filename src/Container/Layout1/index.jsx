import React from 'react'
import Header from '../../Components/Header'
import { Outlet } from 'react-router-dom'

const Layout1 = ({showAccordian , setShowAccordian}) => {
  return (
    <div >
      <Header showAccordian={showAccordian} setShowAccordian={setShowAccordian}/>
      <Outlet/>
    </div>  
  )
}

export default Layout1