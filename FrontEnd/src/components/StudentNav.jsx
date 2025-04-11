import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lable, user } from '../assets';

function StudentNav({username,position,activeDashboard,activeProfile,activeTimetable,children}) {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const defaultClasses = "";

  /* useEffect(() => {
    // Simulate content loading
    const loadingTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);

    return () => clearTimeout(loadingTimer);
  }, []); */

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    if (sidebar && content) {
      sidebar.classList.toggle("open");
      content.classList.toggle("open");
    }
  };

  const handleProgressBar = () => {
    const progressBar = document.querySelector('.progress .progress-bar');
    if (progressBar) {
      progressBar.style.width = window.scrollY > 300 ? '100%' : '0%';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleProgressBar);
    return () => window.removeEventListener('scroll', handleProgressBar);
  }, []);

  return (
    <div className="container-fluid position-relative d-flex p-0">
      {/* Spinner */}
      {/* {!contentLoaded && (
        <div className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )} */}

      {/* Sidebar */}
      <div className="sidebar pe-4 pb-3 container-color">
        <nav className="navbar bg-white navbar-dark">
          <Link to="/index-student" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">TNPH</h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src={lable} alt="" style={{ width: "40px", height: "40px" }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">{username}</h6>
              <span>{position}</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/index-student" className={`nav-item nav-link ${activeDashboard || defaultClasses}`}><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
            <Link to="/week-classes" className={`nav-item nav-link ${activeTimetable || defaultClasses}`}><i className="fa fa-clock me-2"></i>Timetable</Link>
            <Link to="/profile-student" className={`nav-item nav-link ${activeProfile || defaultClasses}`}><i className="fa fa-user me-2"></i>Profile</Link>
            <Link to="/" className="nav-item nav-link"><i className="fa fa-sign-out-alt me-2"></i>Logout</Link>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <nav className="navbar navbar-expand bg-gray navbar-dark sticky-top px-4 py-0">
          <Link className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"><i className="far fa-calendar-alt"></i></h2>
          </Link>
          <Link className="sidebar-toggler flex-shrink-0" onClick={handleSidebarToggle}>
            <i className="fa fa-bars"></i>
          </Link>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fa fa-bell me-lg-2"></i>
                <span className="d-none d-lg-inline-flex">Notification</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <Link className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </Link>
                <hr className="dropdown-divider" />
                <Link className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </Link>
                <hr className="dropdown-divider" />
                <Link className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </Link>
                <hr className="dropdown-divider" />
                <Link className="dropdown-item text-center">See all notifications</Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <img className="rounded-circle me-lg-2" src={lable} alt="" style={{ width: "40px", height: "40px" }} />
                <span className="d-none d-lg-inline-flex">{username}</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                <Link to="/profile-student" className="dropdown-item">My Profile</Link>
                <Link to="/" className="dropdown-item">Log Out</Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}

        {/* Main Content */}
        {children}
      </div>
      {/* Content End */}

      {/* Back to Top */}
      {showBackToTop && <button className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleBackToTopClick}><i className="bi bi-arrow-up"></i></button>}
    </div>
  );
}

export default StudentNav;
