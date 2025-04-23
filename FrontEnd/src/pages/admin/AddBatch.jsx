import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const AddBatch = () => {
  const [formData, setFormData] = useState({
      organisation: '',
      location: '',
      trainingType: '',
      rank: '',
      role: '',
      batchNo: '',
      fromDate: '',
      toDate: '',
      rpcAlloted: '',
      verificationRoll: '',
      appointOrder: '',
      rpcNotReported: '',
      rpcReported: '',
      permanentDeduction: '',
      underTraining: '',
      casualities: '',
      od: '',
    });



    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'organisation', headerName: 'Organisation', width: 150 },
      { field: 'location', headerName: 'Location', width: 130 },
      { field: 'trainingType', headerName: 'Training Type', width: 150 },
      { field: 'rank', headerName: 'Rank', width: 100 },
      { field: 'role', headerName: 'Role', width: 100 },
      { field: 'batchNo', headerName: 'Batch No', width: 100 },
      { field: 'fromDate', headerName: 'From Date', width: 130 },
      { field: 'toDate', headerName: 'To Date', width: 130 },
      { field: 'rpcAlloted', headerName: 'RPC Allotted', width: 130 },
      { field: 'verificationRoll', headerName: 'Verification Roll', width: 150 },
      { field: 'appointOrder', headerName: 'Appoint Order', width: 130 },
      { field: 'rpcNotReported', headerName: "RPC's Not Reported", width: 160 },
      { field: 'rpcReported', headerName: "RPC's Reported", width: 140 },
      { field: 'permanentDeduction', headerName: 'Permanent Deduction', width: 180 },
      { field: 'underTraining', headerName: 'Under Training', width: 140 },
      { field: 'casualities', headerName: 'Casualities', width: 120 },
      { field: 'od', headerName: 'OD', width: 90 },
      {
        field: "action",
        headerName: "Actions",
        width: 150,
        renderCell: (params) => (
          <div>
          {params.value?.btn1 && <Button variant="contained" color="info" onClick={() => handleAction(params.row, "Edit")}>Edit</Button>}&nbsp;
          {params.value?.btn2 && <Button variant="contained" color="error" className="info" onClick={() => handleAction(params.row, "Delete")}>Delete</Button>}&nbsp;
        </div>
        ),
      }
    ];

    const [tableData, setTableData] = useState([
      {
        id: 1,
        organisation: 'Org A',
        location: 'Thiruvallur',
        trainingType: 'Basic',
        rank: 'Constable',
        role: 'Trainee',
        batchNo: 'B001',
        fromDate: '2025-01-10',
        toDate: '2025-01-20',
        rpcAlloted: '15',
        verificationRoll: '10',
        appointOrder: '8',
        rpcNotReported: '2',
        rpcReported: '6',
        permanentDeduction: '1',
        underTraining: '5',
        casualities: '0',
        od: '1',
        action: { btn1: "Edit",  btn2: "Delete" },
      },
      {
        id: 2,
        organisation: 'Org B',
        location: 'Chennai',
        trainingType: 'Advanced',
        rank: 'SI',
        role: 'Instructor',
        batchNo: 'B002',
        fromDate: '2025-02-01',
        toDate: '2025-02-10',
        rpcAlloted: '20',
        verificationRoll: '18',
        appointOrder: '15',
        rpcNotReported: '3',
        rpcReported: '12',
        permanentDeduction: '2',
        underTraining: '10',
        casualities: '1',
        od: '2',
        action: { btn1: "Edit",  btn2: "Delete" },
      }
    ]);
     
  return (
    <>
  {/* //  <ComputerProgrammerNav activeCourses={"active"}> */}
      <main className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4 className='title-clr'>
              Add Batch
            </h4>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <span><i className="bi bi-table me-2"></i></span> Batch Details
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div className="pb-3">
                    {/* Link to the previous page */}
                    <Link to={"/TrainingDivision"} className="btn btn-outline-danger p-1"><i className="bi bi-arrow-left me-2"></i>Dashboard</Link>
                  </div>
                  <div className="pb-3  d-flex justify-content-between">
                    {/* Add period Link */}
                    <Link to={"/BatchDetailsForm"} className="btn btn-outline-success p-1"><i className="bi bi-plus me-2"></i>Add Batch</Link>
                  </div>
                  <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
   {/* </ComputerProgrammerNav> */}
   </>
  );
};

export default AddBatch;
