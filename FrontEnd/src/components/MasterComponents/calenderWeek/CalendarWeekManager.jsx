import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';



function CalendarWeekManager() {
  const [calendarWeek, setCalendarWeek] = useState('');
  const [calendarWeeks, setCalendarWeeks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;

    const fetchInitialCalendarWeeks = async () => {
      try {
        const res = await axios.get(`${API_BASE}/calendar-weeks`);
        setCalendarWeeks(res.data);
      } catch (err) {
        console.error('Failed to fetch Calendar Weeks', err);
      }
    };

    fetchInitialCalendarWeeks();
  }, []);

  const fetchCalendarWeeks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/calendar-weeks`);
      setCalendarWeeks(res.data);
    } catch (err) {
      console.error('Error fetching calendar weeks:', err);
    }
  };

  const handleSave = async () => {
    if (!calendarWeek.trim()) return alert('Please enter a calendar week');
    try {
      await axios.post(`${API_BASE}/calendar-weeks`, { name: calendarWeek });
      setCalendarWeek('');
      fetchCalendarWeeks();
    } catch (err) {
      console.error('Error saving calendar week:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(calendarWeeks[index].name);
  };

  const handleUpdate = async (index) => {
    const calendarWeek = calendarWeeks[index];
    try {
      await axios.put(`${API_BASE}/calendar-weeks/${calendarWeek.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchCalendarWeeks();
    } catch (err) {
      console.error('Error updating calendar week:', err);
    }
  };

  const handleDelete = async (index) => {
    const calendarWeek = calendarWeeks[index];
    try {
      await axios.delete(`${API_BASE}/calendar-weeks/${calendarWeek.id}`);
      fetchCalendarWeeks();
    } catch (err) {
      console.error('Error deleting calendar week:', err);
    }
  };

  return (
   
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
    
  );
}

export default CalendarWeekManager;
