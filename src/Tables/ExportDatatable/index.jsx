import React, { useMemo } from 'react'
import DataTable from 'react-data-table-component';

const ExportDatatable = ({data , columns}) => {
    const customStyles = {
        rows: {
            style: {
                fontSize: '1rem',
            },
        },
    }

    // const convertArrayOfObjectsToCSV = (array) => {
    //     let result;

    //     const columnDelimiter = ',';
    //     const lineDelimiter = '\n';
    //     const keys = Object.keys(array[0]);

    //     result = '';
    //     result += keys.join(columnDelimiter);
    //     result += lineDelimiter;

    //     array.forEach(item => {
    //         let ctr = 0;
    //         keys.forEach(key => {
    //             if (ctr > 0) result += columnDelimiter;

    //             result += item[key];

    //             ctr++;
    //         });
    //         result += lineDelimiter;
    //     });

    //     return result;
    // }

    // const downloadCSV = (array) => {
    //     const link = document.createElement('a');
    //     let csv = convertArrayOfObjectsToCSV(array);
    //     if (csv == null) return;

    //     const filename = 'export.csv';

    //     if (!csv.match(/^data:text\/csv/i)) {
    //         csv = `data:text/csv;charset=utf-8,${csv}`;
    //     }

    //     link.setAttribute('href', encodeURI(csv));
    //     link.setAttribute('download', filename);
    //     link.click();
    // }

    // const actionsMemo = useMemo(() => <ExportButton onExport={() => downloadCSV(data)} />, [data]);

    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                noDataComponent="There are no records to display"
                striped={true}
                customStyles={customStyles}
                responsive={true}
            />
        </div>
    )
}

export default ExportDatatable
