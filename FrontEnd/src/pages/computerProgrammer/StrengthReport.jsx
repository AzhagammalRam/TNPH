import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import MinisterialStrengthReport from '../../components/FormComponents/MinisterialStrengthReport';
import ExecutiveStrengthReport from '../../components/FormComponents/ExecutiveStrengthReport';
import RpcStrengthReport from '../../components/FormComponents/RpcStrengthReport';
import { Button } from 'react-bootstrap';

const StrengthReport = () => {
  const userRole = sessionStorage.getItem("role");

  const PageContent = (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4 className='title-clr'>Strength Report</h4>
          </div>
        </div>
        <div className="card p-3">
          <div className="col-xl-12 row bg-white p-3">
            <div className='col-md-4 row'>
              <div className='col-md-4'><h6 className='title-clr p-2'>From</h6></div>
              <div className='col-md-8'><input type='date' className="form-control" name="fromDate" /></div>
            </div>
            <div className='col-md-4 row'>
              <div className='col-md-3'><h6 className='title-clr p-2'>To</h6></div>
              <div className='col-md-8'><input type='date' className="form-control" name="toDate" /></div>
            </div>
            <div className='col-md-3 row'>
              <Button><i class="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;
              Search</Button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-xl-12">
            <div className="card bg-white">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#MinisterialStrengthReport">
                      MinisterialStrengthReport
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#ExecutiveStrength">
                      ExecutiveStrength
                    </button>
                  </li>
                  { userRole !== 'SPCamp' && userRole !== 'SP' && (
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Rpc">
                      RPC
                    </button>
                  </li>
                  )}
                </ul>
                <div className="tab-content pt-2">
                  <div className="tab-pane fade show active pt-3" id="MinisterialStrengthReport">
                    <MinisterialStrengthReport />
                  </div>
                  <div className="tab-pane fade pt-3" id="ExecutiveStrength">
                    <ExecutiveStrengthReport />
                  </div>
                  { userRole !== 'SPCamp' && userRole !== 'SP' && (
                  <div className="tab-pane fade pt-3" id="Rpc">
                    <RpcStrengthReport />
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  // Conditionally wrap with the correct nav
  if (userRole === "Comppgm") {
    return <ComputerProgrammerNav activeStrength={"active"}>{PageContent}</ComputerProgrammerNav>;
  } else if (userRole === "Principal") {
    return <PrincipalNav activeStrength={"active"}>{PageContent}</PrincipalNav>;
  }  else if (userRole === "SPCamp") {
    return <SPCampNav activeStrength={"active"}>{PageContent}</SPCampNav>;
  }  else if (userRole === "SP") {
    return <SPNav activeStrengthReport={"active"}>{PageContent}</SPNav>;
  }  else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};

export default StrengthReport;
