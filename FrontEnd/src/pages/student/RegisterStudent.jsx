import React, { useState } from 'react';
import { lable } from '../../assets';
import { Link } from 'react-router-dom';

const RegisterStudent = () => {
  // Dummy session data
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    course: '',
    year: '',
    faculty: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div>
      {/* Registration Form */}
      <div id="intro-example" className="text-center bg-image align-items-center mt-5">
      <section>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black bg-secondary" style={{ borderRadius: '25px' }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-3 mt-1">Student Register here</p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="name" name="name" className="form-control bg-white" placeholder="Your Name" onChange={handleChange} value={formData.name} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="regno" name="regno" className="form-control bg-white" placeholder="Your Registration Number" onChange={handleChange} value={formData.regno} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-book fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="course" name="course" className="form-control bg-white" placeholder="Course eg.BCS or BEF" onChange={handleChange} value={formData.course} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-calendar-alt fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="number" id="year" name="year" className="form-control bg-white" placeholder="Your year" onChange={handleChange} value={formData.year} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-graduation-cap fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="faculty" name="faculty" className="form-control bg-white" placeholder="Your Faculty eg.FCIM" onChange={handleChange} value={formData.faculty} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-venus-mars fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <select id="gender" name="gender" className="form-control bg-white" onChange={handleChange} Value={formData.gender}>
                            <option Value="" disabled selected>Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="email" name="email" className="form-control bg-white" placeholder="Your email" onChange={handleChange} value={formData.email} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="password" name="password" className="form-control bg-white" placeholder="Password" onChange={handleChange} value={formData.password} />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="confirmPassword" name="confirmPassword" className="form-control bg-white" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword} />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-2">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <Link className="no-link-line">Terms of service</Link>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>
                        <div className="d-flex justify-content-center mb-2 mb-lg-4">
                          <p className="small mb-0">Already have an account? <Link className="no-link-line" to="/login-student">login at your account</Link></p>
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
    </div>
  );
};

export default RegisterStudent;
