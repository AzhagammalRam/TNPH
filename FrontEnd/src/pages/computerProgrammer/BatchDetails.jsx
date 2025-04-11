import React from 'react'
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import TrainingDivisionCard from '../../components/FormComponents/TrainingDivisionCard';

const BatchDetails = () => {
    const userRole = sessionStorage.getItem("role");
    const PageContent = (
        
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <h4 className='title-clr'>Batch Details</h4>
                    </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                      <div className="card bg-white">
                      <div className="card-body profile-card pt-4 d-flex flex-column">
                         <h5 className='title-clr mb-5'>PTS/Vellore/Dec2024</h5> 
                         <div className='row col-md-12'>
                         <div className='col-md-6 row mb-3'>
                            <div className='col-md-12 row'>
                              <div className='col-md-6'><b className='txtred'>From</b></div> 
                              <div className='col-md-6'>05 Dec 2024</div>
                            </div>
                          </div>
                         <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>To</b></div> 
                              <div className='col-md-6'>04 July 2025</div>
                          </div>
                         <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>No of Trainees alloted by Govt</b></div> 
                              <div className='col-md-6'>300</div>
                          </div>
                          <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>Total no of Verification Roll Received</b></div> 
                              <div className='col-md-6'>286</div>
                          </div>
                          <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>Total no of Appointment order issued</b></div> 
                              <div className='col-md-6'>286</div>
                          </div>
                          <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>No of trainees not yet reported</b></div> 
                              <div className='col-md-6'>2</div>
                          </div>
                          <div className='col-md-6 row mb-3'>
                              <div className='col-md-6'><b className='txtred'>No of trainees reported</b></div> 
                              <div className='col-md-6'>284</div>
                          </div>

                         </div>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
        </main>
    )

  // Conditionally wrap with the correct nav
  if (userRole === "Comppgm") {
    return <ComputerProgrammerNav >{PageContent}</ComputerProgrammerNav>;
  } else if (userRole === "Principal") {
    return <PrincipalNav >{PageContent}</PrincipalNav>;
  }  else if (userRole === "SPCamp") {
    return <SPCampNav >{PageContent}</SPCampNav>;
  }  else if (userRole === "SP") {
    return <SPNav activeStrengthReport={"active"}>{PageContent}</SPNav>;
  }  else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};

export default BatchDetails