import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const YearGroup = () => {
  // Dummy data for groups
  const groups = [
    { id: 1, groupName: 'Group A', color: 'bg-khaki' },
    { id: 2, groupName: 'Group B', color: 'bg-khaki' },
    { id: 3, groupName: 'Group C', color: 'bg-khaki' },
    // Add more dummy groups as needed
  ];

  return (
    <AdminNav activeCourses={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>
                    {' Classes TimeTable'}
                    </h4>
                </div>
                </div>
                <div className="pb-3">
                <Link to="/course-year">
                    <button type="button" name="cid" className="btn btn-outline-success"><i className="bi bi-arrow-left me-2"></i>Years</button>
                </Link>
                </div>
                <div className="row d-flex justify-content-center">
                {/* Render group cards */}
                {groups.map((group) => (
                    <div key={group.id} className="col-lg-3 col-md-4 mb-3 max-w-280">
                    <div className={`card ${group.color} text-white h-100`}>
                        <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <i className="bi bi-people display-4 mb-3"></i> {/* Group icon */}
                        <h5 className="card-title h6">Group: {group.groupName}</h5>
                        </div>
                        <Link to={"/group-session"} className="nav-link text-white">
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
};

export default YearGroup;
