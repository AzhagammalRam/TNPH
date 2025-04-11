import React from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function DashboardGrid() {
   // Dummy data
  
  const columns = [
    { field: "id", headerName: "S.No", width: 70 },
    { field: "batchNo", headerName: "Batch No", width: 180 },
    { field: "dsrDate", headerName: "DSR Date", width: 130 },
    { field: "dsrNo", headerName: "DSR No", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "createdBy", headerName: "Created By", width: 150 },
    { field: "publishedBy", headerName: "Published By", width: 180 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div>
        {params.value?.btn1 && <Button variant="contained" color="secondary" onClick={() => handleAction(params.row, "View")}>View</Button>}&nbsp;
        {/* {params.value?.btn2 && <Button variant="contained" color="primary" className="info" onClick={() => handleAction(params.row, "Edit")}>Edit</Button>}&nbsp; */}
        {/* {params.value?.btn4 && <Button variant="contained" color="warning" className="primary" onClick={() => handleAction(params.row, "Log")}>Log</Button>} */}
      </div>
      ),
    }
  ];
   const GridData = [
    {
      id: 1,
      batchNo: 'PTS/Vellore/Dec2024',
      dsrDate: "2024-03-30", // Proper date format
      dsrNo: "DSR-0001",
      status: "Pending",
      createdBy: "Sujatha",
      publishedBy: "Computer Programmer",
      action: { btn1: "View",  btn3: "Query", btn4: "Log" },
    },
    {
      id: 2,
      batchNo: 'PTS/Vellore/Dec2024',
      dsrDate: "2024-03-28",
      dsrNo: "DSR-0002",
      status: "Approved",
      createdBy: "Rithika",
      publishedBy: "Computer Programmer",
      action: { btn1: "View"},
    },
    {
      id: 3,
      batchNo: 'PTS/Vellore/Dec2024',
      dsrDate: "2024-03-25",
      dsrNo: "DSR-0003",
      status: "Rejected",
      createdBy: "Jenifer",
      publishedBy: "Computer Programmer",
      action: { btn1: "View", btn2: "Edit" , btn3: "Query" },
    },
    {
      id: 4,
      batchNo: 'PTS/Vellore/Dec2024',
      dsrDate: "2024-03-20",
      dsrNo: "DSR-0004",
      status: "Pending",
      createdBy: "Arya",
      publishedBy: "Computer Programmer",
      action: { btn1: "View", btn4: "Log" },
    }
   ];
 
  return ( 
    <>  
    
    <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <span><i className="bi bi-table me-2"></i></span> DSR Report
                    </div>
                    <div className="card-body">
                        <div className="table-responsive p-3">
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
                    </div>
                </div>
    </>
  );
}

export default DashboardGrid;
