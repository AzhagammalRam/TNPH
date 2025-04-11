import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import MinisterialLeave from '../../components/FormComponents/MinisterialLeave';
import ExecutiveLeave from '../../components/FormComponents/ExecutiveLeave';
import ExecutiveLeaveReport from '../../components/FormComponents/ExecutiveLeaveReport';
import { Col, Row } from 'react-bootstrap';
import MinisterialLeaveReport from '../../components/FormComponents/MinisterialLeaveReport';
import RpcLeave from '../../components/FormComponents/RpcLeave';
import RpcLeaveReport from '../../components/FormComponents/RpcLeaveReport';

const Leave = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  const userRole = sessionStorage.getItem("role");

  const PageContent = (
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className='title-clr'>Leave</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card bg-white">
                        <div className="card-body pt-3">
                            <ul className="nav nav-tabs nav-tabs-bordered">
                            <li className="nav-item">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#MinisterialLeave">Ministerial Leave</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#ExecutiveLeave">Executive Leave</button>
                            </li>
                            { userRole !== 'SPCamp' && userRole !== 'SP' && (
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#RpcLeave">RPC</button>
                            </li>
                            )}
                            </ul>
                            <div className="tab-content pt-2">
                            <div className="tab-pane fade show active MinisterialLeave pt-3" id="MinisterialLeave">
                                <MinisterialLeave />
                                <Row>
                                <Col className='ms-4'><h6 className='title-clr'>Number of Staff on Leave: 1</h6></Col>
                                </Row>
                                <MinisterialLeaveReport />
                                <br />
                            </div>
                            <div className="tab-pane fade pt-3 " id="ExecutiveLeave">
                                <ExecutiveLeave />
                                <Row>
                                <Col className='ms-4'><h6 className='title-clr'>Number of Staff on Leave: 1</h6></Col>
                                </Row>
                                <ExecutiveLeaveReport />
                            </div>
                            { userRole !== 'SPCamp' && userRole !== 'SP' && (
                            <div className="tab-pane fade pt-3" id="RpcLeave">
                                <RpcLeave />
                                <Row>
                                <Col className='ms-4'><h6 className='title-clr'>Number of Staff on Leave: 1</h6></Col>
                                </Row>
                                <RpcLeaveReport />
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
    return <ComputerProgrammerNav activeLeave={"active"}>{PageContent}</ComputerProgrammerNav>;
  } else if (userRole === "Principal") {
    return <PrincipalNav activeLeave={"active"}>{PageContent}</PrincipalNav>;
  }  else if (userRole === "SPCamp") {
    return <SPCampNav activeLeave={"active"}>{PageContent}</SPCampNav>;
  } else if (userRole === "SP") {
    return <SPNav activeLeave={"active"}>{PageContent}</SPNav>;
  }  else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};
export default Leave;
