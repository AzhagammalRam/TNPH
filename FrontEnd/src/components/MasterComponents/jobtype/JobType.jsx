// src/pages/JobType.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../organization/organization.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api'; // Adjust path as needed

function JobType() {
  const [jobtype, setJobtype] = useState('');
  const [jobtypes, setJobtypes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editId, setEditId] = useState(null);

   const fetchedOnce = useRef(false);

    useEffect(() => {
       if (fetchedOnce.current) return; // Prevent duplicate fetch
       fetchedOnce.current = true;
     
       const fetchInitialJobtypes = async () => {
         try {
           const res = await axios.get(`${API_BASE}/job-types`);
           setJobtypes(res.data);
         } catch (err) {
           console.error("Failed to fetch Jobtypes", err);
         }
       };
     
       fetchInitialJobtypes();
     }, []);

  const fetchJobTypes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/job-types`);
      setJobtypes(res.data);
    } catch (err) {
      console.error('Error fetching job types:', err);
    }
  };

  const handleSave = async () => {
    if (!jobtype.trim()) return alert('Please enter a Job Type');
    try {
      await axios.post(`${API_BASE}/job-types`, { name: jobtype });
      fetchJobTypes();
      setJobtype('');
    } catch (err) {
      console.error('Error saving job type:', err);
    }
  };

  const handleEdit = (index, job) => {
    setEditIndex(index);
    setEditName(job.name);
    setEditId(job.id);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE}/job-types/${editId}`, { name: editName });
      fetchJobTypes();
      setEditIndex(null);
      setEditName('');
      setEditId(null);
    } catch (err) {
      console.error('Error updating job type:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/job-types/${id}`);
      fetchJobTypes();
    } catch (err) {
      console.error('Error deleting job type:', err);
    }
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>Job Type</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Job Type  :</h6>
          </div>
          <div className='col-md-8'>
            <input
              type='text'
              name="jobtype"
              value={jobtype}
              onChange={(e) => setJobtype(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-12 row mt-3'>
          <div className='col-md-12 text-center'>
            <button className='btn btn-primary' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>

      <div className="master-organization-table p-3 mb-3">
        <Table bordered id="strength" className='smtbl responsive w-75'>
          <thead>
            <tr className='text-center'>
              <th>Sl.No</th>
              <th>Job Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobtypes.map((job, index) => (
              <tr key={job.id}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='w-25'
                    />
                  ) : (
                    job.name
                  )}
                </td>
                <td className='text-center'>
                  {editIndex === index ? (
                    <button className='btn btn-success btn-sm me-2' onClick={handleUpdate}>Update</button>
                  ) : (
                    <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(index, job)}>Edit</button>
                  )}
                  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {jobtypes.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No job types added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default JobType;
