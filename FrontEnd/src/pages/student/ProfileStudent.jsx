import React from 'react';
import { StudentNav } from '../../components';
import { Link } from 'react-router-dom';
import { lable } from '../../assets';

const ProfileStudent = () => {
  // Dummy session data
  const sessionData = {
    name: "John Doe",
    regno: "ABC123",
    course: "Computer Science",
    department: "Engineering",
    faculty: "Faculty of Science",
    email: "john.doe@example.com",
    gender: "Male",
    year: "3",
    group: "A",
    success: "" // Sample success message
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <StudentNav activeProfile={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className='title-clr'>Profile</h4>
                    </div>
                </div>
                {sessionData.success && (
                <div className="alert alert-success" role="alert">
                    {sessionData.success}
                </div>
                )}
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card bg-white">
                        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                            <img src={lable} alt="Profile" className="rounded-circle img-fluid w-50" />
                            <h2 className="display-7 fw-bold text-primary">{sessionData.name}</h2>
                            <h3 className="text-muted">{sessionData.regno}</h3>
                            <div className="social-links mt-2">
                            <Link className="twitter p-1"><i className="bi bi-twitter"></i></Link>
                            <Link className="facebook p-1"><i className="bi bi-facebook"></i></Link>
                            <Link className="instagram p-1"><i className="bi bi-instagram"></i></Link>
                            <Link className="linkedin p-1"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card bg-white">
                        <div className="card-body pt-3">
                            <ul className="nav nav-tabs nav-tabs-bordered">
                            <li className="nav-item">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                            </li>
                            </ul>
                            <div className="tab-content pt-2">
                            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                <h5 className="card-title display-6 mb-4 text-primary">Profile Details</h5>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Full Name</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.name}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Course</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.course}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Department</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.department}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Faculty</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.faculty}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Registration Number</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.regno}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Email</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.email}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Gender</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.gender}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Study Year</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.year}</div>
                                </div>
                                <div className="row">
                                <div className="col-lg-3 col-md-4 label h6 text-muted">Study Group</div>
                                <div className="col-lg-9 col-md-8 h6">{sessionData.group}</div>
                                </div>
                                <br />
                            </div>
                            <div className="tab-pane fade pt-3" id="profile-change-password">
                                <form method="post" onSubmit={handleSubmit}>
                                {/* Change Password Form */}
                                <div className="row mb-3">
                                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                                    <div className="col-md-8 col-lg-9">
                                    <input name="password" type="password" className="form-control bg-white" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                                    <div className="col-md-8 col-lg-9">
                                    <input name="newpassword" type="password" className="form-control bg-white" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" name="changePassword">Change Password</button>
                                </div>
                                </form>
                                {/* End Change Password Form */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </StudentNav>
  );
};

export default ProfileStudent;
