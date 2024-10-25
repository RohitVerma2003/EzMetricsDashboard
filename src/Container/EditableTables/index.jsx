import React from 'react'
import ButtonEditTable from '../../Tables/EditableTables/ButtonEditTable'

const EditableTables = () => {
    return (
        <div className='w-100 d-flex gap-3 flex-wrap p-3'>
            <div className='rounded-3 p-3 bg-white' style={{ width: "100%" }}>
                <p className='w-100 fs-6 fw-medium'>Lead Details</p>
                <ButtonEditTable />
            </div>
        </div>
    )
}

export default EditableTables
