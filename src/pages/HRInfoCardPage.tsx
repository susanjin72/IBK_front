import React from 'react';
// import EmployeeInfoLists from '../components/HRInfoCard';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export const HRInfoCardPage: React.FC = () => {
    const columnDefs = [
        {headerName : 'Name', field : 'name'},
        {headerName : 'Title', field : 'title'}
    ];
    const rowData = [
        {name : '1', title : '2'},
        {name : '3', title : '4'},
    ];

    return (
        <div className="w-full">
            <div className="ag-react-container" style={ {height: '200px', width: '600px'} }>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                rowSelection="single">
            </AgGridReact>
        </div></div>
    )
}