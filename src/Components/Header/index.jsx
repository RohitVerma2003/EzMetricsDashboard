import React from 'react';
import logo from '../../assets/images/small_logo.svg';
import hamburger from '../../assets/images/svg-icon/collapse.svg';
import searchIcon from '../../assets/images/svg-icon/search.svg';
import './style.css'

const Header = ({showAccordian , setShowAccordian}) => {
  return (
    <div className='border position-relative w-100' style={{ background: "white" }}>
      <div className='left-header p-2 header-left d-flex justify-content-evenly just-btw'>

        <div className="logo w-25 my-2 d-flex justify-content-center align-items-center gap-2">
          <img src={logo} alt="logo-image" width={35}/>
          <div className='fw-bold text-primary'>EzyMetrics</div>
        </div>

        <div className="ham-search position-relative mx-lg-5 d-flex align-items-center justify-content-end">
          <img className='iconhover iconFilter' src={hamburger} width={20} alt="hamburger" onClick={() =>setShowAccordian(!showAccordian)}/>
          <div className='position-relative d-flex align-items-center h-75 display-none'>
            <input className="form-control border-0 h-100 mx-3 w-100" style={{ backgroundColor: "#f2f5fa" }} type="search" placeholder="Search" aria-label="Search" />
            <img src={searchIcon} alt="searchIcon" width={20} className='position-absolute iconhover iconFilter end-15'/>
          </div>
        </div>

      </div>
      <div className='right-header'></div>
    </div>
  )
}

export default Header
