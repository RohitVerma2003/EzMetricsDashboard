import React from 'react'
import Accordian from '../Accordian'
import "./style.css"

const LeftSideBar = ({showAccordian , setShowAccordian}) => {
  return (
    <div className={`h-100 leftSideBar`} style={{background: "white" , width : `${showAccordian ? '25%' : '0%'}` , height : '100vh'}}>
        <Accordian showAccordian={showAccordian} setShowAccordian={setShowAccordian}/>
    </div>
  )
}

export default LeftSideBar
