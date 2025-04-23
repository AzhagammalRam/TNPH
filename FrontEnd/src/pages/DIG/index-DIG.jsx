import React from 'react';
import { IGNav, SPNav } from '../../components';
import { Link } from 'react-router-dom';
import "../../../public/css/dashboard.css"
import IGDIGCard from '../../components/FormComponents/DashboardComponents/IGDIGCard';

const IndexDIG = () => {
  sessionStorage.setItem("role", "DIG");

   return (
    // <IGNav activeDashboard={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-9 mb-3">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to DIG</h6>
                </div>
                </div>
                <div className="row">
                    <IGDIGCard />
                </div>
            </div>
        </main>
    // </IGNav>
  );
};

export default IndexDIG;
