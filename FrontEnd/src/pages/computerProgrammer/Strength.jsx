import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import MinisterialStrength from '../../components/FormComponents/MinisterialStrength';
import ExecutiveStrength from '../../components/FormComponents/ExecutiveStrength';
import RpcStrength from '../../components/FormComponents/RpcStrength';

const Strength = () => {
  const userRole = sessionStorage.getItem("role");

  const PageContent = (
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4 className='title-clr'>Strength</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card bg-white">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#MinisterialStrength">
                      MinisterialStrength
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
                  </li> )}
                </ul>
                <div className="tab-content pt-2">
                  <div className="tab-pane fade show active pt-3" id="MinisterialStrength">
                    <MinisterialStrength />
                  </div>
                  <div className="tab-pane fade pt-3" id="ExecutiveStrength">
                    <ExecutiveStrength />
                  </div>
                  { userRole !== 'SPCamp' && userRole !== 'SP' && (
                  <div className="tab-pane fade pt-3" id="Rpc">
                    <RpcStrength />
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
    return <SPNav activeStrength={"active"}>{PageContent}</SPNav>;
  } else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};

export default Strength;
