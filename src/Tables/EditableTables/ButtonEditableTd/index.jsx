import React, { useState } from 'react'

const ButtonEditableTd = ({ data , show }) => {
    const [value, setValue] = useState(data);
    return (
        <>
            {show ? <input type="text" className='form-control w-75' value={value} onChange={(e) => setValue(e.target.value)} />
             : <p className='fs-6 m-0'>{value}</p>}
        </>
    )
}

export default ButtonEditableTd
