import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

function CourseYear() {
  // Dummy data for demonstration
  const years = [
    { year: '1', icon: 'bi-emoji-laughing', color: 'bg-imgb', label: 'Beginner' },
    { year: '2', icon: 'bi-emoji-neutral', color: 'bg-imgr', label: 'Intermediate' },
    { year: '3', icon: 'bi-emoji-smile', color: 'bg-imgb', label: 'Pro' }
  ];

  return (
    <AdminNav activeCourses={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Classes TimeTable</h4>
                </div>
                </div>
                <div className="pb-3">
                <Link to="/classes-admin">
                    <button type="button" name="cid" className="btn btn-outline-success">
                    <i className="bi bi-arrow-left me-2"></i>Courses
                    </button>
                </Link>
                </div>
                <div className="row d-flex justify-content-center">
                {years.map((yearData, index) => (
                    <div className="col-lg-3 col-md-4 mb-3 max-w-280" key={index}>
                    <div className={`card ${yearData.color} text-white h-100`}>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <i className={`bi ${yearData.icon} display-4 mb-3`}></i>
                        <h5 className="card-title h6">YEAR {yearData.year}</h5>
                        </div>
                        <Link to={"/year-group"} className="nav-link text-white">
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </main>
    </AdminNav>
    
  );
}

export default CourseYear;
