import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar'
import { Outlet } from 'react-router-dom'

const MainBody = ({showAccordian , setShowAccordian}) => {
  
  return (
    <div className='d-flex w-100 h-100 position-relative'>
      <LeftSideBar showAccordian={showAccordian} setShowAccordian={setShowAccordian}/>
      <div className='w-100 position-relative' style={{overflowY:"scroll", height:"85vh" , overflowX:"hidden"}}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainBody
