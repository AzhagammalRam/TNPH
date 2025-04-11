import React from 'react';
import { AdminNav } from '../../components';
import { lable } from '../../assets';
import { Link } from 'react-router-dom';

const ProfileAdmin = () => {
    const dummyData = {
        name: "John Doe",
        job_title: "Administrator",
        staff_department: "Administration",
        staff_faculty: "Faculty of Management",
        staff_id: "123456",
        email: "johndoe@example.com"
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    return (
        <AdminNav activeProfile={"active"}>
            <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className='title-clr'>Profile</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card bg-white">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img src={lable} alt="Profile" className="rounded-circle img-fluid w-50 w-50" />
                                <h2 className="display-7 fw-bold text-primary">{dummyData.name}</h2>
                                <h3 className="text-muted">{dummyData.job_title}</h3>
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
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                                    </li>
                                </ul>
                                <div className="tab-content pt-2">
                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 className="card-title display-6 mb-4 text-primary">Profile Details</h5>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Full Name</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.name}</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">University</div>
                                            <div className="col-lg-9 col-md-8 h6">Institute Of Finance Management</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Job</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.job_title}</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Department</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.staff_department}</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Faculty</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.staff_faculty}</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Staff ID</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.staff_id}</div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-lg-3 col-md-4 label h6 text-muted">Email</div>
                                            <div className="col-lg-9 col-md-8 h6">{dummyData.email}</div>
                                        </div>

                                        <br />
                                    </div>

                                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row mb-3">
                                                <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <img src={lable} alt="Profile" className="rounded-circle img-fluid w-50" />
                                                    <div className="pt-2">
                                                        <Link className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></Link>
                                                        <Link className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="name" type="text" className="form-control bg-white" value={dummyData.name} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="Username" className="col-md-4 col-lg-3 col-form-label">Staff ID</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="staff_id" type="text" className="form-control bg-white" value={dummyData.staff_id} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="job_title" type="text" className="form-control bg-white" value={dummyData.job_title} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Department</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="staff_department" type="text" className="form-control bg-white" value={dummyData.staff_department} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Faculty</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="staff_faculty" type="text" className="form-control bg-white" value={dummyData.staff_faculty} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="email" type="email" className="form-control bg-white" value={dummyData.email} onChange={(e) => console.log(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary" name="submit">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-change-password">
                                        <form onSubmit={handleSubmit}>
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
                                    </div>
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

export default ProfileAdmin;
