import React from 'react'
import { Link } from 'react-router-dom';


function TrainingDivisionCard() {
    return (
 <>
    {/* Rest of the content code */}
    <main className="pt-3 mt-5">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 mb-3 max-w-280">
            <div className="card bg-red text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-people display-4 mb-3"></i>
                <h5 className="card-title">Batch A</h5>
              </div>
              <Link to="/AddBatch" className="nav-link text-white">
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
                <i className="bi bi-people display-4 mb-3"></i>
                <h5 className="card-title">Batch B</h5>
              </div>
              <Link to="/AddBatch" className="nav-link text-white">
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
            <div className="card bg-blue text-white h-100">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-people display-4 mb-3"></i>
                <h5 className="card-title">Batch C</h5>
              </div>
              <Link to="/AddBatch" className="nav-link text-white">
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>                 
        </div>
      </div>
    </main>
    </>
  );
}

export default TrainingDivisionCard