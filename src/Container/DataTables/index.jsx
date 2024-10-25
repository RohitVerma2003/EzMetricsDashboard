import React from 'react'
import ExportDatatable from '../../Tables/ExportDatatable'
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DataTables = () => {
    const columns = [
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Position', selector: row => row.position, sortable: true },
        { name: 'Office', selector: row => row.office, sortable: true },
        { name: 'Age', selector: row => row.age, sortable: true },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Salary', selector: row => row.salary, sortable: true },
    ];

    const data = [
        { id: 1, name: 'Zorita Serrano', position: 'Software Engineer', office: 'San Francisco', age: 56, startDate: '2012/06/01', salary: '$115,000' },
        { id: 2, name: 'Zenaida Frank', position: 'Software Engineer', office: 'New York', age: 63, startDate: '2010/01/04', salary: '$125,250' },
        { id: 3, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, startDate: '2009/06/25', salary: '$675,000' },
        { id: 4, name: 'Vivian Harrell', position: 'Financial Controller', office: 'San Francisco', age: 62, startDate: '2009/02/14', salary: '$452,500' },
        { id: 5, name: 'Timothy Mooney', position: 'Office Manager', office: 'London', age: 37, startDate: '2008/12/11', salary: '$136,200' },
    ];

    const csvHeaders = [
        { label: 'Name', key: 'name' },
        { label: 'Position', key: 'position' },
        { label: 'Office', key: 'office' },
        { label: 'Age', key: 'age' },
        { label: 'Start Date', key: 'startDate' },
        { label: 'Salary', key: 'salary' }
    ];

    const generatePDFReport = () => {
        const doc = new jsPDF();

        doc.text('Lead Report', 20, 10);

        const tableColumns = ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Salary'];

        const tableRows = data.map(item => [
            item.name, item.position, item.office, item.age, item.startDate, item.salary
        ]);

        doc.autoTable({
            head: [tableColumns],
            body: tableRows,
        });

        doc.save('lead_report.pdf');
    };


    return (
        <div className='w-100 d-flex flex-wrap p-3 gap-3'>
            <div className='rounded-3 bg-light p-3' style={{ width: "100%", height: "fit-content" }}>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                    <p className='w-100 fs-6 fw-medium'>Lead Report</p>
                    <div className='w-100 d-flex justify-content-center align-items-center gap-3'>
                        <button className='btn btn-primary w-100 text-white'>
                            <CSVLink
                                headers={csvHeaders}
                                data={data}
                                filename="lead_report.csv"
                                style={{ color: 'white' }}
                            >
                                Download CSV
                            </CSVLink>
                        </button>
                        <button className='btn btn-primary w-100 text-white' onClick={generatePDFReport}>
                            Download PDF
                        </button>
                    </div>
                </div>
                <ExportDatatable data={data} columns={columns} />
            </div>
        </div>
    )
}

export default DataTables;
