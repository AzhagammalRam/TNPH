import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import ExecutiveEventsAndCeremonies from '../../components/FormComponents/ExecutiveEventsAndCeremonies';
import ExecutiveEventsAndCeremoniesReport from '../../components/FormComponents/ExecutiveEventsAndCeremoniesReport';

const EventsAndCeremonies = () => {
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
                        <h4 className='title-clr'>Events And Ceremonies</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card bg-white">
                        <div className="card-body pt-3">
                            <div className="tab-content pt-2">
                            <div className="tab-pane fade show active pt-3" >
                                <ExecutiveEventsAndCeremonies />
                                <ExecutiveEventsAndCeremoniesReport />
                            </div>
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
    return <ComputerProgrammerNav activeEventsAndCeremonies={"active"}>{PageContent}</ComputerProgrammerNav>;
  } else if (userRole === "Principal") {
    return <PrincipalNav activeEventsAndCeremonies={"active"}>{PageContent}</PrincipalNav>;
  }   else if (userRole === "SPCamp") {
    return <SPCampNav activeEventsAndCeremonies={"active"}>{PageContent}</SPCampNav>;
  }  else if (userRole === "SP") {
    return <SPNav activeEventsAndCeremonies={"active"}>{PageContent}</SPNav>;
  } else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};

export default EventsAndCeremonies;
