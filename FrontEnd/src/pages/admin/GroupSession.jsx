import React from 'react';
import { AdminNav, ComputerProgrammerNav } from '../../components';
import { Link } from 'react-router-dom';

const GroupSession = () => {
  // Dummy data for timetable
  const timetable = [
    { 
      day_of_week: "Monday", 
      start_time: "08:00", 
      end_time: "10:00", 
      module_id: "MATH101", 
      module_name: "Mathematics", 
      session_type: "Lecture", 
      room_name: "Room 101",
      class_id: 1
    },
    { 
      day_of_week: "Tuesday", 
      start_time: "09:00", 
      end_time: "11:00", 
      module_id: "PHY101", 
      module_name: "Physics", 
      session_type: "Lab", 
      room_name: "Room 102",
      class_id: 2
    },
    // Add more dummy data as needed
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
  {/* //  <ComputerProgrammerNav activeCourses={"active"}> */}
      <main className="pt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h4 className='title-clr'>
              Course GROUP Classes TimeTable
            </h4>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-md-12 mb-3">
            <div className="card bg-white">
              <div className="card-header">
                <span><i className="bi bi-table me-2"></i></span> Classes TimeTable
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div className="pb-3">
                    {/* Link to the previous page */}
                    <Link to={"/TrainingDivision"} className="btn btn-outline-danger p-1"><i className="bi bi-arrow-left me-2"></i>Dashboard</Link>
                  </div>
                  <div className="pb-3  d-flex justify-content-between">
                    {/* Add period Link */}
                    <Link to={"/add-session"} className="btn btn-outline-success p-1"><i className="bi bi-plus me-2"></i>Add Period</Link>
                    {/* Show class sessions Link */}
                    <Link to={"/class-admin"} className="btn btn-outline-success p-1"><i className="bi bi-calendar me-2"></i>Class Sessions</Link>
                  </div>
                  <table id="example" className="table table-striped data-table">
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Time Start</th>
                        <th>Time End</th>
                        <th>Module Code</th>
                        <th>Module Name</th>
                        <th>Session Type</th>
                        <th>Venue</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Mapping over dummy timetable */}
                      {timetable.map((table, index) => (
                        <tr key={index}>
                          <td>{table.day_of_week}</td>
                          <td>{table.start_time}</td>
                          <td>{table.end_time}</td>
                          <td>{table.module_id}</td>
                          <td>{table.module_name}</td>
                          <td>{table.session_type}</td>
                          <td>{table.room_name}</td>
                          <td>
                            {/* Link to view details */}
                            <Link name="user" to={"/edit-session"} className="btn btn-outline-secondary">View Details</Link>
                            {/* Form to delete session */}
                            <form onSubmit={handleSubmit}>
                              <button type="submit" className="btn btn-outline-success">Delete Details</button>
                              <input type="hidden" name="class_id" value={table.class_id} />
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
   {/* </ComputerProgrammerNav> */}
   </>
  );
};

export default GroupSession;
