import React from 'react';
import { ComputerProgrammerNav, PrincipalNav, SPCampNav, SPNav } from '../../components';
import ExecutiveEventsAndCeremoniesReport from '../../components/FormComponents/ExecutiveEventsAndCeremoniesReport';
import { Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


const EventsAndCeremoniesReport = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  const userRole = sessionStorage.getItem("role");

  const optionsArray = [
    { key: "pts", label: "PTS" },
    { key: "istc", label: "ISTC" },
    { key: "tnph", label: "TNPH" },
  ];

  const changeMarket = (selected) => {
    console.log(selected);
  };


  const PageContent = (
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className='title-clr'>Events And Ceremonies Report</h4>
                    </div>
                </div>
                <div className="card p-3">
                  <div className="col-xl-12 row bg-white p-3">
                    <div className='col-md-3 row'>
                      <div className='col-md-4'><h6 className='title-clr p-2'>From</h6></div>
                      <div className='col-md-8'><input type='date' className="form-control" name="fromDate" /></div>
                    </div>
                    <div className='col-md-3 row'>
                      <div className='col-md-4'><h6 className='title-clr p-2'>To</h6></div>
                      <div className='col-md-8'><input type='date' className="form-control" name="toDate" /></div>
                    </div>
                    <div className='col-md-5 row'>
                      <div className='col-md-4'><h6 className='title-clr p-2'>Organization</h6></div>
                      <div className='col-md-7'>
                      <DropdownMultiselect className="form-control"
                        options={optionsArray}
                        name="org"
                        handleOnChange={(selected) => changeMarket(selected)}
                        // selectDeselectLabel={"All"}
                      />
                      </div>
                    </div>
                    <div className='col-md-2 row'>
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
                            <div className="tab-content pt-2">
                            <div className="tab-pane fade show active pt-3" >
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
  } else if (userRole === "SPCamp") {
    return <SPCampNav activeEventsAndCeremonies={"active"}>{PageContent}</SPCampNav>;
  } else if (userRole === "SP") {
    return <SPNav activeEventsAndCeremonies={"active"}>{PageContent}</SPNav>;
  } else {
    return <div>Unauthorized</div>; // fallback for unexpected roles
  }
};

export default EventsAndCeremoniesReport;
