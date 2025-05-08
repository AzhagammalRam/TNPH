import React, { useState, useEffect ,useRef} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';



function NameOfEventsCeremonies() {
  const [eventName, setEventName] = useState('');
  const [eventList, setEventList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialEventList = async () => {
      try {
        const res = await axios.get(`${API_BASE}/events`);
        setEventList(res.data);
      } catch (err) {
        console.error('Failed to fetch Event List', err);
      }
    };
  
    fetchInitialEventList();
  }, []);

  const fetchEventList = async () => {
    try {
      const res = await axios.get(`${API_BASE}/events`);
      setEventList(res.data);
    } catch (err) {
      console.error('Error fetching event list:', err);
    }
  };

  const handleSave = async () => {
    if (!eventName.trim()) return alert('Please enter an event name');
    try {
      await axios.post(`${API_BASE}/events`, { name: eventName });
      setEventName('');
      fetchEventList();
    } catch (err) {
      console.error('Error saving event:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(eventList[index].name);
  };

  const handleUpdate = async (index) => {
    const event = eventList[index];
    try {
      await axios.put(`${API_BASE}/events/${event.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchEventList();
    } catch (err) {
      console.error('Error updating event:', err);
    }
  };

  const handleDelete = async (index) => {
    const id = eventList[index].id;
    try {
      await axios.delete(`${API_BASE}/events/${id}`);
      fetchEventList();
    } catch (err) {
      console.error('Error deleting event:', err);
    }
  };

  return (
    
      <div className='master-organization'>
        <h4 className='title-clr'>Name of Events and Ceremonies</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Event/Ceremony Name :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="eventName"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className='form-control'
                placeholder="Enter Name of Event or Ceremony"
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
          <Table bordered id="strength" className='smtbl responsive w-75'>
            <thead>
              <tr className='text-center'>
                <th>Sl.No</th>
                <th>Name of Event / Ceremony</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event, index) => (
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
                      event.name
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
              {eventList.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Event or Ceremony added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
   
  );
}

export default NameOfEventsCeremonies;
