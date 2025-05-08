import React, { useState, useEffect ,useRef} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function DsrStatus() {
  const [dsrStatus, setDsrStatus] = useState('');
  const [dsrStatuses, setDsrStatuses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialDsrStatuses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/dsr-statuses`);
        setDsrStatuses(res.data);
      } catch (err) {
        console.error('Failed to fetch Dsr Statuses', err);
      }
    };
  
    fetchInitialDsrStatuses();
  }, []);

  const fetchDsrStatuses = async () => {
    try {
      const res = await axios.get(`${API_BASE}/dsr-statuses`);
      setDsrStatuses(res.data);
    } catch (err) {
      console.error('Error fetching dsr statuses:', err);
    }
  };

  const handleSave = async () => {
    if (!dsrStatus.trim()) return alert('Please enter a dsr status');
    try {
      await axios.post(`${API_BASE}/dsr-statuses`, { name: dsrStatus });
      setDsrStatus('');
      fetchDsrStatuses();
    } catch (err) {
      console.error('Error saving dsr status:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(dsrStatuses[index].name);
  };

  const handleUpdate = async (index) => {
    const dsrStatus = dsrStatuses[index];
    try {
      await axios.put(`${API_BASE}/dsr-statuses/${dsrStatus.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchDsrStatuses();
    } catch (err) {
      console.error('Error updating dsr status:', err);
    }
  };

  const handleDelete = async (index) => {
    const id = dsrStatuses[index].id;
    try {
      await axios.delete(`${API_BASE}/dsr-statuses/${id}`);
      fetchDsrStatuses();
    } catch (err) {
      console.error('Error deleting dsr status:', err);
    }
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>DSR Status</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>DSR Status :</h6>
          </div>
          <div className='col-md-5'>
            <input
              type="text"
              name="dsrStatus"
              value={dsrStatus}
              onChange={(e) => setDsrStatus(e.target.value)}
              className='form-control'
              placeholder="Enter DSR Status"
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
              <th>DSR Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dsrStatuses.map((status, index) => (
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
                    status.name
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
            {dsrStatuses.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No DSR Status added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DsrStatus;
