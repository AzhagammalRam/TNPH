import React, { useState ,useEffect, useRef} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function TypeOfLeave() {
  const [leaveType, setLeaveType] = useState('');
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialLeaveTypes = async () => {
      try {
        const res = await axios.get(`${API_BASE}/leave-types`);
        setLeaveTypes(res.data);
      } catch (err) {
        console.error('Failed to fetch Leave Types', err);
      }
    };
  
    fetchInitialLeaveTypes();
  }, []);

  const fetchLeaveTypes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/leave-types`);
      setLeaveTypes(res.data);
    } catch (err) {
      console.error('Error fetching leave types:', err);
    }
  };

  const handleSave = async () => {
    if (!leaveType.trim()) return alert('Please enter a leave type');
    try {
      await axios.post(`${API_BASE}/leave-types`, { name: leaveType });
      setLeaveType('');
      fetchLeaveTypes();
    } catch (err) {
      console.error('Error saving leave type:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(leaveTypes[index].name);
  };

  const handleUpdate = async (index) => {
    const leaveType = leaveTypes[index];
    try {
      await axios.put(`${API_BASE}/leave-types/${leaveType.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchLeaveTypes();
    } catch (err) {
      console.error('Error updating leave type:', err);
    }
  };

  const handleDelete = async (index) => {
    const id = leaveTypes[index].id;
    try {
      await axios.delete(`${API_BASE}/leave-types/${id}`);
      fetchLeaveTypes();
    } catch (err) {
      console.error('Error deleting leave type:', err);
    }
  };

  return (
   
      <div className='master-organization'>
        <h4 className='title-clr'>Type of Leave</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Type of Leave :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="leaveType"
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className='form-control'
                placeholder="Enter Type of Leave"
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
                <th>Type of Leave</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveTypes.map((type, index) => (
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
                      type.name
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
              {leaveTypes.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Type of Leave added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
   
  );
}

export default TypeOfLeave;
