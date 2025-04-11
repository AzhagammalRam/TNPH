import React from 'react';
import { PrincipalNav } from '../../components';
import { Link } from 'react-router-dom';
import DashboardGrid from '../../components/FormComponents/DashboardGrid'
import Planning from '../../components/FormComponents/Planning';
import DashboardPricipalCard from '../../components/FormComponents/DashboardPricipalCard';
import MinisterialLeaveReport from '../../components/FormComponents/MinisterialLeaveReport';
import ExecutiveLeaveReport from '../../components/FormComponents/ExecutiveLeaveReport';
import ExecutiveEventsAndCeremoniesReport from '../../components/FormComponents/ExecutiveEventsAndCeremoniesReport';

const IndexPrincipal = () => {
  sessionStorage.setItem("role", "Principal");
   return (
    <PrincipalNav activeDashboard={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-10">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to Vice Principal / Principal Dashboard</h6>
                </div>
                <div className="col-md-2">
                  <Link to="/DsrTrainingForm" className="btn btn-success m-2 text-white" role="button" rel="nofollow"><i className="fa fa-plus me-2"></i> Create DSR</Link>
                </div>
                </div>
                <div className='row'>
                  <DashboardPricipalCard />
                </div>
                <div className="row">
                  <DashboardGrid />
                </div>
                <div id="leave"></div>
                <div className="row">
                  <h4 className='title-clr'>Leave</h4>
                  <MinisterialLeaveReport />
                </div>
                <div id="events"></div>
                <div className="row">
                  <h4 className='title-clr'>Events & Ceremonies</h4>
                  <ExecutiveEventsAndCeremoniesReport />
                </div>
                <div id="timetable"></div>
                <div className='row'>
                  <Planning />
                </div>
            </div>
        </main>
    </PrincipalNav>
  );
};

export default IndexPrincipal;
