import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lable, logo1, user } from '../assets';

function IGNav({username,position,activeDashboard,activeNotices,activeProfile,activeCourses,children}) {
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
      {/* Content */} 
      <div className="content" style={{marginLeft:"0px", width:"100%"}}>
        {/* Navbar */}
        <nav className="navbar navbar-expand bg-khaki-lt  sticky-top px-4 py-0">
          <Link className="navbar-brand d-flex d-lg-none me-4">
            <h2 className="text-primary mb-0"></h2>
          </Link>
          <Link to='#'>
            <img className=" me-lg-2 p-3" src={lable} alt="" style={{ width: "120px", height: "120px" }} />
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
                <Link to="/profile-admin" className="dropdown-item">My Profile</Link>
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

export default IGNav;
