import React from 'react';
import { ComputerProgrammerNav } from '../../components';
import { Link } from 'react-router-dom';
import DashboardGrid from '../../components/FormComponents/DashboardGrid'

const IndexComputerProgrammer = () => {
  sessionStorage.setItem("role", "Comppgm");

   return (
    <ComputerProgrammerNav activeDashboard={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-9">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to Comp Programmer / CLI / CDI</h6>
                </div>
                <div className="col-md-3 txt-align-center">
                  <Link to="/DsrTrainingForm" className="btn btn-success m-2 text-white" role="button" rel="nofollow"><i className="fa fa-plus me-2"></i> Create DSR</Link>
                  <span className='col-md-2'>&nbsp;</span>
                </div>
                </div>
                <div className="row">
                  <DashboardGrid />
                </div>
            </div>
        </main>
    </ComputerProgrammerNav>
  );
};

export default IndexComputerProgrammer;
