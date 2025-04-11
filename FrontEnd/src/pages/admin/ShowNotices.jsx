import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const ShowNotices = () => {
  // Dummy data for notices
  const notices = [
    { id: 1, message: "Notice 1", dueDate: "2024-03-15 12:00 PM" },
    { id: 2, message: "Notice 2", dueDate: "2024-03-17 10:00 AM" },
    { id: 3, message: "Notice 3", dueDate: "2024-03-20 3:00 PM" },
    // Add more dummy notices as needed
  ];

  return (
    <AdminNav activeNotices={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Notices</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <span><i className="bi bi-chat me-2"></i></span> Notices
                    </div>
                    <div className="card-body">
                        <div className="pb-3 d-flex justify-content-between">
                        {/* Add link to navigate back to notices page */}
                        <Link to="/notice-admin">
                            <button type="button" className="btn btn-outline-success p-1"><i className="bi bi-arrow-left me-2"></i>Notices</button>
                        </Link>
                        </div>
                        <div className="row d-flex justify-content-center">
                        {/* Render notices */}
                        {notices.map((notice) => (
                            <div key={notice.id} className="alert alert-secondary bg-khaki m-1 " role="alert" style={{ width: '20rem' }}>
                            <p>{notice.message}</p>
                            <hr />
                            <p className="mb-0 text-danger"><span className="fw-bold">Due Date: </span>{notice.dueDate}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </AdminNav>
  );
};

export default ShowNotices;
