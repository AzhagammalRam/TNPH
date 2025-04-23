import React from 'react';
import { SPNav } from '../../components';
import { Link } from 'react-router-dom';
import DashboardGrid from '../../components/FormComponents/DashboardGrid'
import "../../../public/css/dashboard.css"
import IGDIGCard from '../../components/FormComponents/DashboardComponents/IGDIGCard';


const IndexIG = () => {
  sessionStorage.setItem("role", "IG");

   return (
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Dashboard</h4>
                    <h6 className='txtred'>Welcome to IG</h6>
                </div>
                </div>
                <div className="row">
                    <IGDIGCard />
                </div>
            </div>
        </main>
  );
};

export default IndexIG;
