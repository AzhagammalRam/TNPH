import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'react-bootstrap';

function RpcLeaveReport() {
    const columns = [
        { field: "id", headerName: "S.No", width: 70 },
        { field: "designation", headerName: "Designation", width: 150 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "leaveType", headerName: "Type of Leave	", width: 120 },
        { field: "permissionHrs", headerName: "Permission Hrs", width: 150 },
        { field: "from", headerName: "From", width: 150 },
        { field: "to", headerName: "To", width: 150 },
        { field: "noOfdays", headerName: "No of Days ", width: 150 },
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
          designation: "AR", // Proper date format
          name: "Test",
          leaveType: "CL",
          permissionHrs: "",
          from: "07-04-2025",
          to:"25-04-2025",
          noOfdays:"18 Days",
        },
       ];
    
  return (
    <>
            <div className="container">
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

export default RpcLeaveReport