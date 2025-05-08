import React, { useState, useEffect, useRef } from 'react';
import './organization.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function Organization() {
  const [organizationName, setOrganizationName] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialOrganizations = async () => {
      try {
        const res = await axios.get(`${API_BASE}/organizations`);
        setOrganizations(res.data);
      } catch (err) {
        console.error("Failed to fetch Organizations", err);
      }
    };
  
    fetchInitialOrganizations();
  }, []);
  

  const fetchOrganizations = async () => {
    try {
      const res = await axios.get(`${API_BASE}/organizations`);
      setOrganizations(res.data);
    } catch (err) {
      console.error("Failed to fetch Organisations", err);
    }
  };

  const handleSave = async () => {
    if (!organizationName.trim()) return alert('Please enter an organization name');
    try {
      await axios.post(`${API_BASE}/organizations`, { name: organizationName });
      setOrganizationName('');
      fetchOrganizations();
    } catch (err) {
      console.error("Failed to save", err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(organizations[index].name);
  };

  const handleUpdate = async (index) => {
    const org = organizations[index];
    try {
      await axios.put(`${API_BASE}/organizations/${org.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchOrganizations();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleDelete = async (index) => {
    const org = organizations[index];
    try {
      await axios.delete(`${API_BASE}/organizations/${org.id}`);
      fetchOrganizations();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>Organization</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Organization Name :</h6>
          </div>
          <div className='col-md-8'>
            <input
              type='text'
              name="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
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
              <th>Organization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org, index) => (
              <tr key={org.id}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='w-25'
                    />
                  ) : (
                    org.name
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
            {organizations.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No organizations added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Organization;
