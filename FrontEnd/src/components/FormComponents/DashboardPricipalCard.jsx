import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPricipalCard() {

  return (
    <>
    {/* Rest of the content code */}
    <main className="pt-3">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-red text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-person-fill display-4 mb-3"></i>
                <h5 className="card-title">Current Batch Detail</h5>
              </div>
              <Link to="/BatchDetails" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>                   
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-orange text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-exclamation-diamond-fill display-4 mb-3"></i>
                <h5 className="card-title">Leave Details</h5>
              </div>
              <a href="#leave" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-green text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-book display-4 mb-3"></i>
                <h5 className="card-title">Events</h5>
              </div>
              <a href="#events" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-blue text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-calendar-event display-4 mb-3"></i>
                <h5 className="card-title">Timetable</h5>
              </div>
              <a href="#timetable" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>                 
        </div>
      </div>
    </main>
    </>
  );
}

export default DashboardPricipalCard;