import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function SubjectManager() {
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;

    const fetchInitialSubjects = async () => {
      try {
        const res = await axios.get(`${API_BASE}/subjects`);
        setSubjects(res.data);
      } catch (err) {
        console.error('Failed to fetch Subjects', err);
      }
    };

    fetchInitialSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${API_BASE}/subjects`);
      setSubjects(res.data);
    } catch (err) {
      console.error('Error fetching subjects:', err);
    }
  };

  const handleSave = async () => {
    if (!subject.trim()) return alert('Please enter a subject');
    try {
      await axios.post(`${API_BASE}/subjects`, { name: subject });
      setSubject('');
      fetchSubjects();
    } catch (err) {
      console.error('Error saving subject:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(subjects[index].name);
  };

  const handleUpdate = async (index) => {
    const subject = subjects[index];
    try {
      await axios.put(`${API_BASE}/subjects/${subject.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchSubjects();
    } catch (err) {
      console.error('Error updating subject:', err);
    }
  };

  const handleDelete = async (index) => {
    const subject = subjects[index];
    try {
      await axios.delete(`${API_BASE}/subjects/${subject.id}`);
      fetchSubjects();
    } catch (err) {
      console.error('Error deleting subject:', err);
    }
  };

  return (
      <div className='master-organization'>
        <h4 className='title-clr'>Subject</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Subject :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='form-control'
                placeholder="Enter Subject"
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
          <Table bordered id="subjectTable" className='smtbl responsive w-75'>
            <thead>
              <tr className='text-center'>
                <th>Sl.No</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subj, index) => (
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
                      subj.name
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
              {subjects.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Subject added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    
  );
}

export default SubjectManager;
