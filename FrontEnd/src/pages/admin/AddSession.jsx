import React, { useState } from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const AddSession = () => {
  // Dummy data
  const modules = [
    { module_name: "Computer Science" },
    { module_name: "Mathematics" },
    { module_name: "Physics" }
  ];
  const venues = [
    { venue_name: "Room A101" },
    { venue_name: "Room B202" },
    { venue_name: "Room C303" }
  ];
  const lecturers = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "David Johnson" }
  ];

  // State for form fields
  const [weekDay, setWeekDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [venue, setVenue] = useState('');
  const [lecturer, setLecturer] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting form data
  };

  return (
    <>
    {/* <AdminNav activeCourses={"active"}> */}
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Create New Class Session</h4>
                </div>
                </div>
                <div className="row pb-5">
                <div className="col-md-10 m-auto">
                    <div className="card bg-white">
                    <div className="card-body">
                        <h5 className="card-title">Add Session</h5>
                        <Link to="/group-session">
                        <button type="button" name="cid" className="btn btn-outline-success mb-4"><i className="bi bi-arrow-left me-2"></i>Classes</button>
                        </Link>
                        {/* General Form Elements */}
                        <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Week Day</label>
                            <div className="col-sm-5">
                                <select className="form-select bg-white" name="week_day" required value={weekDay} onChange={(e) => setWeekDay(e.target.value)}>
                                    <option value="" disabled>Select a week day</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </select>
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Start Time</label>
                            <div className="col-sm-5">
                            <input type="time" className="form-control bg-white" name="start_time" required value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">End Time</label>
                            <div className="col-sm-5">
                            <input type="time" className="form-control bg-white" name="end_time" required value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Module name</label>
                            <div className="col-sm-5">
                            <select className="form-select bg-white" name="module" required value={moduleName} onChange={(e) => setModuleName(e.target.value)}>
                                <option value="" disabled>Select a module</option>
                                {modules.map((module, index) => (
                                    <option key={index} value={module.module_name}>{module.module_name}</option>
                                ))}
                            </select>
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Session Type</label>
                            <div className="col-sm-5">
                            <select className="form-select bg-white" name="session_type" required value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
                                <option value="" disabled>Select a Session Type</option>
                                <option value="Lecture">Lecture</option>
                                <option value="Tutorial">Tutorial</option>
                            </select>
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label fw-bolder">Venue</label>
                            <div className="col-sm-5">
                            <select className="form-select bg-white" name="venue" required value={venue} onChange={(e) => setVenue(e.target.value)}>
                                <option value="" disabled>Select a venue</option>
                                {venues.map((venue, index) => (
                                    <option key={index} value={venue.venue_name}>{venue.venue_name}</option>
                                ))}
                            </select>
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <label htmlFor="inputText" className="col-sm-2 col-form-label fw-bolder">Lecturer's name</label>
                            <div className="col-sm-5">
                            <select className="form-select bg-white" name="lecturer" required value={lecturer} onChange={(e) => setLecturer(e.target.value)}>
                                <option value="" disabled>Select Lecturer's name</option>
                                {lecturers.map((lecturer, index) => (
                                    <option key={index} value={lecturer.name}>{lecturer.name}</option>
                                ))}
                            </select>
                            {/* Error message */}
                            </div>
                        </div>
                        {/* More form fields */}
                        <div className="row mb-3">
                            <div className="col-sm-5 m-auto">
                            <button type="submit" className="btn btn-primary fw-bolder" name="submit">Add Session</button>
                            </div>
                        </div>
                        </form>{/* End General Form Elements */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    {/* </AdminNav> */}
    </>
  );
};

export default AddSession;
