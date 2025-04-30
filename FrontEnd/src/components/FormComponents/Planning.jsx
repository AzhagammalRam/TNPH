import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Planning() {
    
  // Dummy classes data
  const classesData = [
    { day_of_week: "Monday", module_name: "Shooting", start_time: "08:00", end_time: "10:00", lecturer_name: "John Doe", room_name: "Room 101" },
    { day_of_week: "Tuesday", module_name: "Theory", start_time: "09:00", end_time: "11:00", lecturer_name: "Jane Smith", room_name: "Room 102" },
    { day_of_week: "Wednesday", module_name: "Practice", start_time: "10:00", end_time: "12:00", lecturer_name: "Sarah Johnson", room_name: "Room 103" },
    { day_of_week: "Thursday", module_name: "Science", start_time: "11:00", end_time: "13:00", lecturer_name: "Michael Williams", room_name: "Room 104" },
    { day_of_week: "Friday", module_name: "History", start_time: "12:00", end_time: "14:00", lecturer_name: "David Brown", room_name: "Room 105" },
    // Add more dummy data as needed
  ];

  // Generate time slots from 7:00 to 19:00
  const timeSlots = [];
  for (let i = 7; i <= 19; i++) {
    timeSlots.push(`${i}:00 - ${i + 1}:00`);
  }

  return (
    <>
    
    <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Timetable</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <div className='row col-md-12'><div className='col-md-9'><h4 className='title-clr mt-3'><span><i className="bi bi-table me-2"></i></span> Batch PTS/Vellore/Dec2024 - Week 1 </h4></div>
                        <div className='col-md-3'><Link to="/DsrTrainingForm" className="btn btn-info m-2 text-white" role="button" rel="nofollow"><i class="fa fa-chevron-left" aria-hidden="true"></i>   Previous</Link>
                        <Link to="/DsrTrainingForm" className="btn btn-info m-2 text-white" role="button" rel="nofollow">Next  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </Link></div></div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                        <div className="pb-3 d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-info"><i className="bi bi-plus me-2"></i>Export PDF</button>
                        </div>
                        <table className="table table-bordered text-center table-striped">
                            <thead>
                            <tr className="bg-light-gray">
                                <th className="text-uppercase">Time</th>
                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                                <th className="text-uppercase">Saturday</th>
                            </tr>
                            </thead>
                            <tbody>
                            {timeSlots.map((timeSlot, index) => (
                                <tr key={index}>
                                <td className="align-middle">{timeSlot}</td>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                                    <td key={index}>
                                    {classesData.map((classData, dataIndex) => {
                                        const classStartTime = new Date(`2000-01-01T${classData.start_time}`);
                                        const classEndTime = new Date(`2000-01-01T${classData.end_time}`);
                                        const startTimeInRange = classStartTime <= new Date(`2000-01-01T${timeSlot.split(' - ')[0]}`);
                                        const endTimeInRange = classEndTime >= new Date(`2000-01-01T${timeSlot.split(' - ')[1]}`);
                                        if (classData.day_of_week === day && startTimeInRange && endTimeInRange) {
                                        return (
                                            <div key={dataIndex}>
                                            <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-primary font-size16 xs-font-size13">{classData.module_name}</span>
                                            <div className="margin-10px-top font-size14">{classData.start_time} - {classData.end_time}</div>
                                            <div className="font-size13 text-light-gray">{classData.lecturer_name}</div>
                                            <div className="font-size13 text-success">{classData.room_name}</div>
                                            </div>
                                        );
                                        }
                                        return null;
                                    })}
                                    </td>
                                ))}
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
    </>
  )
}

export default Planning