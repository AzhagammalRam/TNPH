import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { Button } from 'react-bootstrap';

function ExecutiveEventsAndCeremoniesReport() {
  const userRole = sessionStorage.getItem("role");

    const columns = [
        { field: "id", headerName: "S.No", width: 70 },
        { field: "name", headerName: "Name of the Event", width: 150 },
        { field: "from", headerName: "From	", width: 120 },
        { field: "fromtime", headerName: "From time", width: 150 },
        { field: "to", headerName: "To", width: 150 },
        { field: "totime", headerName: "To Time", width: 150 },
        { field: "type", headerName: "Type", width: 150 },
        { field: "noofdays", headerName: "No of Days ", width: 150 },
        ...(userRole === 'SPCamp'
          ? [{ field: "publishTo", headerName: "Publish To", width: 150 }]
          : []),
        { field: "venue", headerName: "Venue", width: 150 },
        {
          field: "action",
          headerName: "Actions",
          width: 250,
          renderCell: (params) => (
            <div>
            <Button variant="warning">Edit</Button> &nbsp;
            <Button variant="danger">Delete</Button>
          </div>
          ),
        }
      ];
       const GridData = [
        {
          id: 1,
          name: 'Independence Day Parade',
          from: '15-08-2025',
          fromtime: '9:00 AM',
          to: '15-08-2025',
          totime: '11:00 AM',
          type: 'OutDoor',
          noofdays:'1',
          publishTo:'All PTS',
          venue:'HQ Office'
        },
       ];
    
  return (
    <>
    <div className='container'>
    <div className="table-responsive">
      <DataGrid
        rows={GridData}
        columns={columns}
        initialState={{
        pagination: {
        paginationModel: {
        pageSize: 10,
        },
        },
        }}
    />
    </div>
    </div>
    </>
  )
}

export default ExecutiveEventsAndCeremoniesReport