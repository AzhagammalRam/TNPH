import React, { useState } from 'react';
import { lable } from '../../assets';
import { Link } from 'react-router-dom';

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    staff_id: '',
    job_title: '',
    staff_department: '',
    staff_faculty: '',
    gender: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div id="intro-example" className="text-center container-color align-items-center mt-5">
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black bgColor" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mt-1">Register here</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              className="form-control bg-white"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-id-card fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="staff_id"
                              className="form-control bg-white"
                              placeholder="Your Job's ID"
                              value={formData.staff_id}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="job_title"
                              className="form-control bg-white"
                              placeholder="Your Job Title"
                              value={formData.job_title}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-building fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select
                              name="staff_department"
                              className="form-select bg-white"
                              value={formData.staff_department}
                              onChange={handleChange}
                            >
                              <option value="" disabled>Select Your Department</option>
                              <option value="Department of Mathematics">Department of Mathematics</option>
                              <option value="Department of Computer Science">Department of Computer Science</option>
                              {/* Add more options as needed */}
                            </select>
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-university fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select
                              name="staff_faculty"
                              className="form-select bg-white"
                              value={formData.staff_faculty}
                              onChange={handleChange}
                            >
                              <option value="" disabled>Select Your Faculty</option>
                              <option value="Faculty of Computing and Mathematics (FCM)">Faculty of Computing and Mathematics (FCM)</option>
                              <option value="Faculty of Insurance and Banking (FIB)">Faculty of Insurance and Banking (FIB)</option>
                              {/* Add more options as needed */}
                            </select>
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-venus-mars fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <select
                              name="gender"
                              className="form-select bg-white"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option value="" disabled>Your Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              className="form-control bg-white"
                              placeholder="Your email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              className="form-control bg-white"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password_confirmation"
                              className="form-control bg-white"
                              placeholder="Confirm Password"
                              value={formData.password_confirmation}
                              onChange={handleChange}
                            />
                            {/* Add error message display */}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-2">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <Link className="no-link-line">Terms of service</Link>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mb-2 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                        <div className="d-flex justify-content-center mb-2 mb-lg-4">
                          <p className="small mb-0">Already have an account? <Link className="no-link-line" to="/login-staff">login at your account</Link></p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Link to="/">
                        <img src={lable} className="img-fluid rounded-4 w-50" alt="Sample image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterAdmin;
