import React, { useState,useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';
function TrainingType() {
  const [trainingtype, setTrainingtype] = useState('');
  const [trainingTypes, setTrainingTypes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialTrainingTypes = async () => {
      try {
        const res = await axios.get(`${API_BASE}/training-types`);
        setTrainingTypes(res.data);
      } catch (err) {
        console.error('Error fetching training types:', err);
      }
    };
  
    fetchInitialTrainingTypes();
  }, []);

  const fetchTrainingTypes = async () => {
    try {
      const res = await axios.get(`${API_BASE}/training-types`);
      setTrainingTypes(res.data);
    } catch (err) {
      console.error('Error fetching training types:', err);
    }
  };

  const handleSave = async () => {
    if (!trainingtype.trim()) return alert('Please enter a training type');
    try {
      await axios.post(`${API_BASE}/training-types`, { name: trainingtype });
      setTrainingtype('');
      fetchTrainingTypes();
    } catch (err) {
      console.error('Error saving training type:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(trainingTypes[index].name);
  };

  const handleUpdate = async (index) => {
    const trainingType = trainingTypes[index];
    try {
      await axios.put(`${API_BASE}/training-types/${trainingType.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchTrainingTypes();
    } catch (err) {
      console.error('Error updating training type:', err);
    }
  };

  const handleDelete = async (index) => {
    const id = trainingTypes[index].id;
    try {
      await axios.delete(`${API_BASE}/training-types/${id}`);
      fetchTrainingTypes();
    } catch (err) {
      console.error('Error deleting training type:', err);
    }
  };

  return (
   
    <div className='master-organization'>
      <h4 className='title-clr'>Training Type</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Training type :</h6>
          </div>
          <div className='col-md-5'>
            <input
              type="text"
              name="trainingtype"
              value={trainingtype}
              onChange={(e) => setTrainingtype(e.target.value)}
              className='form-control'
              placeholder="Enter Training Type"
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
              <th>Training Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trainingTypes.map((type, index) => (
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
            {trainingTypes.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No Training Type added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
   
  );
}

export default TrainingType;
