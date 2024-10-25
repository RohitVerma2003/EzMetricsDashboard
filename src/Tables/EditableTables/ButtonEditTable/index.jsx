import React from 'react'
import ButtonEditableRow from '../ButtonEditableRow'
import StandardModal from '../../../Components/StandardModal'

const ButtonEditTable = () => {
    const data = [
        ['1', 'Mark', 'CEO', 'demo@example.com', '9898989898'],
        ['2', 'Larry', 'Manager', 'demo@example.com', '	9797979797'],
        ['3', 'John', 'Employee', 'demo@example.com', '9696969696'],
    ]
    return (
        <div className=' table-responsive'>
            <StandardModal id={"modal" + data[0][0]} data={data[0]} />
            <StandardModal id={"modal" + data[1][0]} data={data[1]} />
            <StandardModal id={"modal" + data[2][0]} data={data[2]} />
            <table className='table table-striped w-100'>
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele, index) => (
                        <tr key={index}>
                            <ButtonEditableRow key={index} data={ele} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ButtonEditTable
