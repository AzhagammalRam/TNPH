import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

function EditSession() {
  // Dummy data for demonstration
  const dayOfWeek = 'Monday';
  const startTime = '09:00';
  const endTime = '11:00';
  const moduleName = 'Mathematics';
  const sessionType = 'Lecture';
  const roomName = 'Room 101';
  const lecturerName = 'John Doe';

  // Dummy data for select options
  const modules = [
    { module_name: 'Mathematics' },
    { module_name: 'Physics' },
    { module_name: 'Chemistry' }
  ];

  const venues = [
    { venue_name: 'Room 101' },
    { venue_name: 'Room 102' },
    { venue_name: 'Room 103' }
  ];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <>
    {/* <AdminNav activeCourses={"active"}> */}
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Edit Class Session</h4>
                </div>
                </div>
                <div className="row pb-5">
                <div className="col-md-10 m-auto">
                    <div className="card">      
                    <div className="card-body">
                        <h5 className="card-title txtred">Edit Session</h5>
                        <Link to="/group-session">
                        <button type="button" className="btn btn-outline-success p-1"><i className="bi bi-arrow-left me-2"></i>Classes</button>
                        </Link>
                        {/* General Form Elements */}
                        <form onSubmit={handleSubmit} className="mt-4">
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Week Day</label>
                            <div className="col-sm-5">
                            <select className="form-select" defaultValue={dayOfWeek} required>
                                <option disabled>Select a week day</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                            </div>
                        </div>                      
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Start Time</label>
                            <div className="col-sm-5">
                            <input type="time" className="form-control" defaultValue={startTime} required/>
                            </div>
                        </div>                    
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">End Time</label>
                            <div className="col-sm-5">
                            <input type="time" className="form-control" defaultValue={endTime} required/>
                            </div>
                        </div>                        
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Module name</label>
                            <div className="col-sm-5">
                            <select className="form-select" defaultValue={moduleName} required>
                                <option disabled>Select a module</option>
                                {modules.map((module, index) => (
                                <option key={index} defaultValue={module.module_name}>{module.module_name}</option>
                                ))}
                            </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Session Type</label>
                            <div className="col-sm-5">
                            <select className="form-select" defaultValue={sessionType} required>
                                <option disabled>Select a Session Type</option>
                                <option value="Lecture">Lecture</option>
                                <option value="Tutorial">Tutorial</option>
                            </select>
                            </div>
                        </div>                           
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Venue</label>
                            <div className="col-sm-5">
                            <select className="form-select" defaultValue={roomName} required>
                                <option disabled>Select a venue</option>
                                {venues.map((venue, index) => (
                                <option key={index} value={venue.venue_name}>{venue.venue_name}</option>
                                ))}
                            </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label fw-bolder">Lecturer's name</label>
                            <div className="col-sm-5">
                            <input type="text" className="form-control" defaultValue={lecturerName} required/>
                            </div>
                        </div>                                               
                        <div className="row mb-3">
                            <div className="col-sm-5 m-auto">
                            <button type="submit" className="btn btn-primary fw-bolder" name="submit">Edit Session</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    {/* </AdminNav> */}
    </>
  );
}

export default EditSession;
