import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const NoticeAdmin = () => {
  // Dummy data for notices
  const notices = [
    { notice_id: 1, notice_message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", start_date: "2024-03-15", due_date: "2024-03-20" },
    { notice_id: 2, notice_message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", start_date: "2024-03-16", due_date: "2024-03-22" },
    // Add more dummy data as needed
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminNav activeNotices={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>University Public Notices</h4>
                </div>
                </div>
                <div className="row pb-5">
                <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <span><i className="bi bi-table me-2"></i></span> Notices
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                        <div className="pb-3 d-flex justify-content-between">
                            {/* Dummy buttons */}
                            <Link to={"/create-notice"} className="btn btn-outline-success p-1"><i className="bi bi-plus me-2"></i>Create Notice</Link>
                            <Link to={"/show-notice"} className="btn btn-outline-success p-1"><i className="bi bi-chat me-2"></i>Show Notices</Link>
                        </div>
                        <table className="table table-striped data-table">
                            <thead>
                            <tr>
                                <th>Notice ID</th>
                                <th>Notice Message</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Mapping over dummy notices */}
                            {notices.map((notice, index) => (
                                <tr key={index}>
                                <td>{notice.notice_id}</td>
                                <td>{notice.notice_message}</td>
                                <td>{notice.start_date}</td>
                                <td>{notice.due_date}</td>
                                <td>
                                    <form onSubmit={handleSubmit}>
                                    <button type="submit" className="btn btn-outline-success">Delete Details</button>
                                    <input type="hidden" name="notice_id" value={notice.notice_id} />
                                    </form>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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

export default NoticeAdmin;
