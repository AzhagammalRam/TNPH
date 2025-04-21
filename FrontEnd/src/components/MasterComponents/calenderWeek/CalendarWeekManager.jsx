import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ComputerProgrammerNav from '../../ComputerProgrammerNav';

function CalendarWeekManager() {
  const [calendarWeek, setCalendarWeek] = useState('');
  const [calendarWeeks, setCalendarWeeks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!calendarWeek.trim()) return alert('Please enter a calendar week');
    const newEntry = { name: calendarWeek };
    setCalendarWeeks([...calendarWeeks, newEntry]);
    setCalendarWeek('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(calendarWeeks[index].name);
  };

  const handleUpdate = (index) => {
    const updatedList = [...calendarWeeks];
    updatedList[index].name = editName;
    setCalendarWeeks(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = calendarWeeks.filter((_, i) => i !== index);
    setCalendarWeeks(updatedList);
  };

  return (
    <ComputerProgrammerNav>
      <div className='master-organization'>
        <h4 className='title-clr'>Calendar Week</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Calendar Week :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="calendarWeek"
                value={calendarWeek}
                onChange={(e) => setCalendarWeek(e.target.value)}
                className='form-control'
                placeholder="Enter Calendar Week"
              />
            </div>
          </div>
          <div className='col-md-12 row mt-3'>
            <div className='col-md-11 text-center'>
              <button className='btn btn-primary' onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>

        <div className="master-organization-table p-3 mb-3">
          <Table bordered id="calendarWeekTable" className='smtbl responsive w-75'>
            <thead>
              <tr className='text-center'>
                <th>Sl.No</th>
                <th>Calendar Week</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {calendarWeeks.map((week, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className='form-control w-50'
                      />
                    ) : (
                      week.name
                    )}
                  </td>
                  <td className='text-center'>
                    {editIndex === index ? (
                      <button className='btn btn-success btn-sm me-2' onClick={() => handleUpdate(index)}>Update</button>
                    ) : (
                      <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(index)}>Edit</button>
                    )}
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
              {calendarWeeks.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Calendar Week added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </ComputerProgrammerNav>
  );
}

export default CalendarWeekManager;
