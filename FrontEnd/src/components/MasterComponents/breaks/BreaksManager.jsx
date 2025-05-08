import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';


function BreaksManager() {
  const [breakName, setBreakName] = useState('');
  const [breaksList, setBreaksList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;

    const fetchInitialBreaks = async () => {
      try {
        const res = await axios.get(`${API_BASE}/breaks`);
        setBreaksList(res.data);
      } catch (err) {
        console.error('Failed to fetch Breaks', err);
      }
    };

    fetchInitialBreaks();
  }, []);

  const fetchBreaks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/breaks`);
      setBreaksList(res.data);
    } catch (err) {
      console.error('Error fetching breaks:', err);
    }
  };

  const handleSave = async () => {
    if (!breakName.trim()) return alert('Please enter a break name');
    try {
      await axios.post(`${API_BASE}/breaks`, { name: breakName });
      setBreakName('');
      fetchBreaks();
    } catch (err) {
      console.error('Error saving break:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(breaksList[index].name);
  };

  const handleUpdate = async (index) => {
    const breakItem = breaksList[index];
    try {
      await axios.put(`${API_BASE}/breaks/${breakItem.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchBreaks();
    } catch (err) {
      console.error('Error updating break:', err);
    }
  };

  const handleDelete = async (index) => {
    const breakItem = breaksList[index];
    try {
      await axios.delete(`${API_BASE}/breaks/${breakItem.id}`);
      fetchBreaks();
    } catch (err) {
      console.error('Error deleting break:', err);
    }
  };

  return (
   
      <div className='master-organization'>
        <h4 className='title-clr'>Breaks</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Break Name :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="breakName"
                value={breakName}
                onChange={(e) => setBreakName(e.target.value)}
                className='form-control'
                placeholder="Enter Break Name"
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
          <Table bordered id="breaksTable" className='smtbl responsive w-75'>
            <thead>
              <tr className='text-center'>
                <th>Sl.No</th>
                <th>Break Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {breaksList.map((brk, index) => (
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
                      brk.name
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
              {breaksList.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Breaks added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
  );
}

export default BreaksManager;
