import React from 'react';
import { StudentNav } from '../../components';

const IndexStudent = () => {
  // Dummy data
  const date = "2024-03-12";
  const today = [
    {
      module_id: "CS101",
      module_name: "Introduction to Computer Science",
      start_time: "09:00 AM",
      end_time: "11:00 AM",
      room_name: "Room A101"
    },
    {
      module_id: "MATH202",
      module_name: "Calculus II",
      start_time: "12:00 PM",
      end_time: "02:00 PM",
      room_name: "Room B202"
    },
  ];

  const notices = [
    {
      notice_message: "Reminder: Assignment due next week.",
      due_date: "2024-03-19 09:00 AM"
    },
    {
      notice_message: "Guest lecture on Machine Learning on Friday.",
      due_date: "2024-03-15 10:00 AM"
    }
  ];

  // Render notices
  const renderNotices = () => {
    if (!notices) return null;

    const alertTypes = ['secondary', 'success', 'danger', 'warning', 'info', 'dark'];

    return notices.map((notice, index) => {
      const type = alertTypes[index % alertTypes.length];

      return (
        <div key={index} className={`alert alert-${type} m-1 bg-khaki `} role="alert" style={{ width: '20rem' }}>
          <p>{notice.notice_message}</p>
          <hr />
          <p className="mb-0 text-danger"><span className="fw-bolder">Due Date: </span>{notice.due_date}</p>
        </div>
      );
    });
  };

  return (
    <StudentNav activeDashboard={"active"}>
        <main className="pt-3">
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                    <h4 className='title-clr'>Dashboard</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <span><i className="bi bi-table me-2"></i></span> Classes Today {date}
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                        <table id="example" className="table table-striped">
                            <thead>
                            <tr>
                                <th>Module Code</th>
                                <th>Module Name</th>
                                <th>Starts</th>
                                <th>Ends</th>
                                <th>Venue</th>
                            </tr>
                            </thead>
                            <tbody>
                            {today && today.map((timetable, index) => (
                                <tr key={index}>
                                <td>{timetable.module_id}</td>
                                <td>{timetable.module_name}</td>
                                <td>{timetable.start_time}</td>
                                <td>{timetable.end_time}</td>
                                <td>{timetable.room_name}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="card bg-white">
                    <div className="card-header">
                        <span><i className="bi bi-chat me-2"></i></span> Notices
                    </div>
                    <div className="card-body">
                        <div className="row d-flex justify-content-center">
                        {renderNotices()}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </StudentNav>
  );
};

export default IndexStudent;
