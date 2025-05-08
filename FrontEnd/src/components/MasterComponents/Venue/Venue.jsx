import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function Venue() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [venue, setVenue] = useState('');
  const [venueList, setVenueList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ location_id: '', venue: '' });

  const locationfetchedOnce = useRef(false);
  const venuefetchedOnce = useRef(false);

  useEffect(() => {
    if (locationfetchedOnce.current) return; // Prevent duplicate fetch
    locationfetchedOnce.current = true;
    const fetchInitialLocations = async () => {
      try {
        const res = await axios.get(`${API_BASE}/locations`);
        setLocations(res.data);
      } catch (err) {
        console.error("Failed to fetch Locations", err);
      }
    };

    fetchInitialLocations();
  }, []);

  useEffect(() => {
    if (venuefetchedOnce.current) return; // Prevent duplicate fetch
    venuefetchedOnce.current = true;
    const fetchInitialVenues = async () => {
      try {
        const res = await axios.get(`${API_BASE}/venues`);
        setVenueList(res.data);
      } catch (err) {
        console.error("Failed to fetch Venues", err);
      }
    };

    fetchInitialVenues();
  }, []);

  const fetchVenues = async () => {
    try {
      const res = await axios.get(`${API_BASE}/venues`);
      setVenueList(res.data);
    } catch (err) {
      console.error("Failed to fetch Venues", err);
    }
  };

  const handleSave = async (e) => {
    if (!venue.trim() || !selectedLocation) {
      return alert('Please enter a location and select an organization');
    }
    console.log(selectedLocation);
    try {
      const res = await axios.post(`${API_BASE}/venues`, {
        location_id: selectedLocation,
        venue: venue,
      });
       setVenue('');
      setSelectedLocation('');
      fetchVenues();
    } catch (err) {
      console.error("Failed to create Venue", err);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditData({ location_id: item.location_id, venue: item.venue });
  };

   const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE}/venues/${editId}`, editData);
      setEditId(null);
      setEditData({ location_id: '', venue: '' });
      fetchVenues();
    } catch (err) {
      console.error('Failed to update Venue', err);
    }
  };

   const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/venues/${id}`);
      fetchVenues();
    } catch (err) {
      console.error('Failed to delete Venue', err);
    }
  };

   const getOrgNameById = (id) => {
   
    const org = locations.find((org) => org._id === id || org.id === id);
    return org ? org.location : 'N/A';
  };

  return (
   
    <div className='master-organization'>
      <h4 className='title-clr'>Venue</h4>
      <div className="master-organization-form w-100 p-3 mb-3">
        <div className='row w-75 mb-3'>
          <div className='col-md-4 '>
            <label className='form-label'>Location:</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className='form-control'
            >
              <option value="">-- Select Location --</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc.id}>{loc.location.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Venue:</label>
            <input
              type="text"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className='form-control'
              placeholder='Enter venue'
            />
          </div>
          <div className='col-md-4 d-flex align-items-end'>
            <button className='btn btn-primary ' onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>

      <div className="master-organization-table p-3 mb-3">
        <Table bordered className='smtbl responsive w-75'>
          <thead>
            <tr className='text-center'>
              <th>Sl.No</th>
              <th>Location</th>
              <th>Venue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {venueList.length === 0 ? (
              <tr >
                <td colSpan="4" className='text-center'>No venues added yet.</td>
              </tr>
            ) : (
              venueList.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {editId === item.id ? (
                      <select
                        value={editData.location_id}
                        onChange={(e) => setEditData({ ...editData, location_id: e.target.value })}
                        className='form-control'
                      >
                        {locations.map((loc, i) => (
                          <option key={i} value={loc.id}>{loc.location.toUpperCase()}</option>
                        ))}
                      </select>
                    ) : (
                      getOrgNameById(item.location_id)
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <input
                        type='text'
                        value={editData.venue}
                        onChange={(e) => setEditData({ ...editData, venue: e.target.value })}
                        className='form-control w-50'
                      />
                    ) : (
                      item.venue
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

export default Venue;
