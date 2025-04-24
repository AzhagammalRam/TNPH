import React from 'react';
import "../../../public/css/dashboard.css"
import IGDIGCard from '../../components/FormComponents/DashboardComponents/IGDIGCard';
import DIGNav from '../../components/DIGNav';


const IndexDIG = () => {
  sessionStorage.setItem("role", "DIG");

   return (
    <DIGNav activeDashboard={"active"}>
        <main className="pt-3">
            <nav class="social">
            <ul>
                    <li><a href="#">Archive <i class="fa fa-archive"></i></a></li>
                    <li><a href="#">Reports <i class="fa fa-database"></i></a></li>
                </ul>
            </nav>

            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <div className='ms-5'><h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to DIG</h6></div>
                </div>
                </div>
                <div className="row">
                    <IGDIGCard />
                </div>
            </div>
        </main>
    </DIGNav>
  );
};

export default IndexDIG;
