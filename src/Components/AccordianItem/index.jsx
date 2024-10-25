import React, { createRef, useEffect, useRef, useState } from 'react'
import DashboardIcon from '../../assets/images/svg-icon/dashboard.svg';
import basicUIIcon from '../../assets/images/svg-icon/basic.svg';
import advancedUIIcon from '../../assets/images/svg-icon/advanced.svg';
import pieChartIcon from '../../assets/images/svg-icon/chart.svg';
import { Link } from 'react-router-dom';
import './style.css'

const AccordianItem = () => {
    return (
        <>
            <div className="accordion-item border-0">
                <h2 className="accordion-header" id="headingNine">
                    <Link to={"/crm"}>
                        <div className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <img width={20} src={DashboardIcon} alt="icon" className='iconFilter mx-2 iconColor' />
                            Dashboard
                        </div>
                    </Link>
                </h2>
                <h2 className="accordion-header" id="headingNine">
                    <Link to={"/editable"}>
                        <div className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <img width={20} src={basicUIIcon} alt="icon" className='iconFilter mx-2 iconColor' />
                            Lead
                        </div>
                    </Link>
                </h2>
                <h2 className="accordion-header" id="headingNine">
                    <Link to={"/analytics"}>
                        <div className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <img width={20} src={advancedUIIcon} alt="icon" className='iconFilter mx-2 iconColor' />
                            Analytics
                        </div>
                    </Link>
                </h2>
                <h2 className="accordion-header" id="headingNine">
                    <Link to={"/reports"}>
                        <div className={`accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            <img width={20} src={pieChartIcon} alt="icon" className='iconFilter mx-2 iconColor' />
                            Reports
                        </div>
                    </Link>
                </h2>
            </div>
        </>
    )
}

export default AccordianItem
