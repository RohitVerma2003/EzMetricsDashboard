import React, { useState } from 'react';
import ButtonEditableTd from '../ButtonEditableTd';
import '../../../assets/icons/themify-icons/themify-icons.css';

const ButtonEditableRow = ({ data }) => {
    const pencilIcon = '\uE61C';
    const trashIcon = '\uE605';
    const eyeIcon = '\uE63D';
    const [show, setShow] = useState(false);

    return (
        <>
            {data?.map((ele, index) => (
                <td key={index} className='align-middle'>
                    <ButtonEditableTd key={index} data={ele} show={show} />
                </td>
            ))}
            <td className='d-flex'>
                <button className='btn btn-primary mx-1' data-bs-toggle="modal" data-bs-target={`#modal${data[0]}`}>
                    <span style={{ fontFamily: 'themify' }}>{eyeIcon}</span>
                </button>
                <button className='btn btn-primary mx-1' onClick={() => setShow(true)}>
                    <span style={{ fontFamily: 'themify' }}>{pencilIcon}</span>
                </button>
                <button className='btn btn-danger mx-1'>
                    <span style={{ fontFamily: 'themify' }}>{trashIcon}</span>
                </button>
                {show && <button className='btn btn-success m-1' onClick={() => setShow(false)}>Save</button>}
            </td>
        </>
    );
}

export default ButtonEditableRow;
