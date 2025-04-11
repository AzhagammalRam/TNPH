import React from 'react';
import { SPNav } from '../../components';
import { Link } from 'react-router-dom';
import Planning from '../../components/FormComponents/Planning';
import DashboardGrid from '../../components/FormComponents/DashboardGrid';
import DashboardISTCCard from '../../components/FormComponents/DashboardISTCCard';
import DashboardPTSCard from '../../components/FormComponents/DashboardPTSCard';
import DashboardEvents from '../../components/FormComponents/DashboardEvents';

const IndexSP = () => {
  sessionStorage.setItem("role", "SP");

   return (
    <SPNav activeDashboard={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-9">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to SP Dashboard</h6>
                </div>
                </div>
                <div className='row container'>
                  <div className='col-md-8'><DashboardPTSCard /><br></br><DashboardISTCCard /></div>
                  <div className='col-md-4'><DashboardEvents />
                  <hr></hr>
                  <div className='card'>

                    <div className='bg-white p-2 mb-2'>
                      <h6 className='txtred mt-2'>Leave</h6>
                      <div className='col-md-12 row'>
                        <span ><i className="fa fa-arrow-right me-lg-2"></i><b>Ministerial : 2</b></span>
                        <span ><i className="fa fa-arrow-right me-lg-2"></i><b>Executive : 4</b></span>
                        <span ><i className="fa fa-arrow-right me-lg-2"></i><b>RPC : 7</b></span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <DashboardGrid />
                </div>
            </div>
        </main>
    </SPNav>
  );
};

export default IndexSP;
