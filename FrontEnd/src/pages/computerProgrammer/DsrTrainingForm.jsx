import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import MinisterialStrength from '../../components/FormComponents/MinisterialStrength';
import ExecutiveStrength from '../../components/FormComponents/ExecutiveStrength';
import RpcStrength from '../../components/FormComponents/RpcStrength';
import MinisterialLeave from '../../components/FormComponents/MinisterialLeave';
import ExecutiveLeave from '../../components/FormComponents/ExecutiveLeave';
import ExecutiveEventsAndCeremonies from '../../components/FormComponents/ExecutiveEventsAndCeremonies';
import Planning from '../../components/FormComponents/Planning';
import ExecutiveLeaveReport from '../../components/FormComponents/ExecutiveLeaveReport';
import MinisterialLeaveReport from '../../components/FormComponents/MinisterialLeaveReport';
import ExecutiveEventsAndCeremoniesReport from '../../components/FormComponents/ExecutiveEventsAndCeremoniesReport';
import RpcLeave from '../../components/FormComponents/RpcLeave';
import RpcLeaveReport from '../../components/FormComponents/RpcLeaveReport';
import { Button } from 'react-bootstrap';
import DSRTimetable from '../../components/FormComponents/DSRTimetable';

function DsrTrainingForm() {

    const userRole = sessionStorage.getItem("role");

    const PageContent = (    
    <main className="pt-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 row">
                    <div className='col-md-2'><h4 className='title-clr'>Create DSR</h4></div>
                    <div className='col-md-3'><input type='date' className='form-control'></input></div>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card bg-white">
                    <div className="card-body pt-3">
                        <ul className="nav nav-tabs nav-tabs-bordered">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#Ministerial">Ministerial</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Executive">Executive</button>
                        </li>
                        { userRole !== 'SPCamp' && userRole !== 'SP' && (
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#Rpc">RPC</button>
                        </li>
                        )}
                        </ul>
                        <div className="tab-content pt-2">
                        <div className="tab-pane fade show active Ministerial" id="Ministerial">
                            <h5 className='title-clr'>Strength</h5>
                            <MinisterialStrength />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                            </div>
                            </div>
                            <hr></hr>
                            <h5 className='title-clr'>Leave</h5>
                            <MinisterialLeaveReport />
                            <br></br>
                            <MinisterialLeave />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="tab-pane fade pt-3" id="Executive">
                            <h5 className='title-clr'>Strength</h5>
                            <ExecutiveStrength />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                            <hr></hr>
                            <h5 className='title-clr'>Leave</h5>
                            <ExecutiveLeaveReport /><br></br>
                            <ExecutiveLeave />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                            <hr></hr>
                            <h5 className='title-clr'>Events And Ceremonies</h5>
                            <ExecutiveEventsAndCeremoniesReport />
                            <br></br>
                            <ExecutiveEventsAndCeremonies />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                            <hr></hr>
                            <DSRTimetable />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade pt-3" id="Rpc">
                        <h5 className='title-clr'>Strength</h5>
                            <RpcStrength />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                            <hr></hr>
                            <h5 className='title-clr'>Leave</h5>
                            <RpcLeaveReport /><br></br>
                            <RpcLeave />
                            <div className='col-md-12 row p-4'>
                                <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Comments</label>
                                <div className="col-sm-5">
                                <textarea className="form-control bg-white" name="notice_message" rows="3" required></textarea>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='p-5 txt-align-center'>
                    <Button variant='warning '>Edit</Button>&nbsp;
                    <Button variant='success'>Save</Button>&nbsp;
                    <Button variant='primary'>Save & Close</Button>&nbsp;
                    <Button variant='info'>Forward</Button>&nbsp;
                    <Button variant='info'>Forward To</Button>
                </div>
            </div>
        </div>
    </main>
  );
  // Conditionally wrap with the correct nav
if (userRole === "Comppgm") {
    return <ComputerProgrammerNav >{PageContent}</ComputerProgrammerNav>;
  } else if (userRole === "Principal") {
    return <PrincipalNav >{PageContent}</PrincipalNav>;
  } else if (userRole === "SPCamp") {
      return <SPCampNav >{PageContent}</SPCampNav>;
  }  else if (userRole === "SP") {
    return <SPNav >{PageContent}</SPNav>;
  }  else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};
export default DsrTrainingForm
