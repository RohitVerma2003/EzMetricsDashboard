import React from 'react';
import AccordianItem from '../AccordianItem';
import './style.css'

const Accordian = ({showAccordian}) => {
    return (
        <div className={`accordion acd ${showAccordian ? 'd-block' : 'd-none'}`} style={{overflowY:"scroll", height:"100vh" , overflowX:"hidden"}} id="accordionExample">
            <AccordianItem/>
        </div>
    )
}

export default Accordian
