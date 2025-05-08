import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function Locations() {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ organization_id: '', location: '' });

  const orgfetchedOnce = useRef(false);
  const locationfetchedOnce = useRef(false);

   useEffect(() => {
    if (orgfetchedOnce.current) return; // Prevent duplicate fetch
    orgfetchedOnce.current = true;
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

   useEffect(() => {
    if (locationfetchedOnce.current) return; // Prevent duplicate fetch
    locationfetchedOnce.current = true;
    const fetchInitialLocations = async () => {
      try {
        const res = await axios.get(`${API_BASE}/locations`);
        setLocations(res.data);
      } catch (err) {
        console.error('Failed to fetch locations', err);
      }
    };
  
    fetchInitialLocations();
  }, []);
   



  const fetchLocations = async () => {
    try {
      const res = await axios.get(`${API_BASE}/locations`);
      setLocations(res.data);
    } catch (err) {
      console.error('Failed to fetch locations', err);
    }
  };

  const handleSave = async () => {
    if (!location.trim() || !selectedOrg) {
      return alert('Please enter a location and select an organization');
    }

    try {
      await axios.post(`${API_BASE}/locations`, {
        organization_id: selectedOrg,
        location,
      });
      setLocation('');
      setSelectedOrg('');
      fetchLocations();
    } catch (err) {
      console.error('Failed to save location', err);
    }
  };

  const handleEdit = (item) => {
    
    setEditId(item.id);
    setEditData({
      organization_id: item.organization_id,
      location: item.location,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE}/locations/${editId}`, editData);
      setEditId(null);
      setEditData({ organization_id: '', location: '' });
      fetchLocations();
    } catch (err) {
      console.error('Failed to update location', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/locations/${id}`);
      fetchLocations();
    } catch (err) {
      console.error('Failed to delete location', err);
    }
  };

  const getOrgNameById = (id) => {
    const org = organizations.find((org) => org._id === id || org.id === id);
    return org ? org.name : 'N/A';
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>Locations</h4>
      <div className="master-organization-form w-100 p-3 mb-3">
        <div className='row w-75 mb-3'>
          <div className='col-md-4'>
            <label className='form-label'>Organization:</label>
            <select
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
              className='form-control'
            >
              <option value="">-- Select Organization --</option>
              {organizations.map((org) => (
                <option key={org._id || org.id} value={org._id || org.id}>
                  {org.name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='form-control'
              placeholder='Enter location'
            />
          </div>
          <div className='col-md-4 d-flex align-items-end'>
            <button className='btn btn-primary' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>

      <div className="master-organization-table p-3 mb-3">
        <Table bordered className='smtbl responsive w-75'>
          <thead>
            <tr className='text-center'>
              <th>Sl.No</th>
              <th>Organization</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.length === 0 ? (
              <tr>
                <td colSpan="4" className='text-center'>No locations added yet.</td>
              </tr>
            ) : (
              locations.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {editId === item.id ? (
                      <select
                        value={editData.organization_id}
                        onChange={(e) => setEditData({ ...editData, organization_id: e.target.value })}
                        className='form-control'
                      >
                        {organizations.map((org) => (
                          <option key={org.id} value={org.id}>
                            {org.name.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    ) : (
                      getOrgNameById(item.organization_id)
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <input
                        type="text"
                        value={editData.location}
                        onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                        className='form-control w-50'
                      />
                    ) : (
                      item.location
                    )}
                  </td>
                  <td className='text-center'>
                    {editId === item.id ? (
                      <>
                        <button className='btn btn-success btn-sm me-2' onClick={handleUpdate}>Update</button>
                        <button className='btn btn-secondary btn-sm' onClick={() => setEditId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(item)}>Edit</button>
                        <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Locations;
