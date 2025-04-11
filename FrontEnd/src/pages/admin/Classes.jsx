import React from 'react';
import { AdminNav } from '../../components';
import { Link } from 'react-router-dom';

const Classes = () => {
  // Dummy data for classes
  const classesData = [
    { id: 1, dayOfWeek: 'Monday', moduleName: 'Class A', startTime: '09:00:00', endTime: '10:00:00', lecturerName: 'John Doe', roomName: 'Room 101' },
    { id: 2, dayOfWeek: 'Wednesday', moduleName: 'Class B', startTime: '10:00:00', endTime: '11:00:00', lecturerName: 'Jane Doe', roomName: 'Room 102' },
    { id: 3, dayOfWeek: 'Friday', moduleName: 'Class C', startTime: '13:00:00', endTime: '14:00:00', lecturerName: 'David Smith', roomName: 'Room 103' },
    // Add more dummy classes as needed
  ];

  // Generate time slots from 7:00 to 19:00
  const timeSlots = Array.from({ length: 13 }, (_, index) => index + 7);

  return (
    <>
    {/* <AdminNav activeCourses={"active"}> */}
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
                        <span><i className="bi bi-table me-2"></i></span> Classes  Weekly
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                        <div className="pb-3 d-flex justify-content-between">
                            {/* Add links for navigation */}
                            <Link to="/group-session">
                            <button type="button" className="btn btn-outline-success"><i className="bi bi-arrow-left me-2"></i>Classes</button>
                            </Link>
                            <Link>
                            <button type="button" className="btn btn-outline-info"><i className="bi bi-plus me-2"></i>Export PDF</button>
                            </Link>
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
                            {timeSlots.map((hour) => (
                                <tr key={hour}>
                                <td className="align-middle">{hour}:00 - {hour + 1}:00</td>
                                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => {
                                    const classForTimeSlot = classesData.find(
                                    (classItem) =>
                                        classItem.dayOfWeek === day &&
                                        new Date(`2000-01-01T${classItem.startTime}`).getHours() <= hour &&
                                        new Date(`2000-01-01T${classItem.endTime}`).getHours() > hour
                                    );

                                    return (
                                    <td key={`${hour}-${day}`}>
                                        {classForTimeSlot && (
                                        <>
                                            <span className="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-primary font-size16 xs-font-size13">{classForTimeSlot.moduleName}</span>
                                            <div className="margin-10px-top font-size14">{classForTimeSlot.startTime} - {classForTimeSlot.endTime}</div>
                                            <div className="font-size13 text-light-gray">{classForTimeSlot.lecturerName}</div>
                                            <div className="font-size13 text-success">{classForTimeSlot.roomName}</div>
                                        </>
                                        )}
                                    </td>
                                    );
                                })}
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
    {/* </AdminNav> */}
    </>
  );
};

export default Classes;
