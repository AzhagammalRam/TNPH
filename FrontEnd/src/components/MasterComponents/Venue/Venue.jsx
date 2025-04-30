import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function Venue() {
  const locations = ['All PTS,ISTC & TNPH', 'All PTS', 'All ISTC', 'TNPH'];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [venue, setVenue] = useState('');
  const [venueList, setVenueList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ location: '', venue: '' });

  const handleSave = () => {
    if (!selectedLocation || !venue.trim()) {
      return alert('Please select a location and enter a venue');
    }

    const newEntry = { location: selectedLocation, venue };
    setVenueList([...venueList, newEntry]);
    setSelectedLocation('');
    setVenue('');
  };

  const handleEdit = (index) => {
    const data = venueList[index];
    setEditIndex(index);
    setEditData({ location: data.location, venue: data.venue });
  };

  const handleUpdate = (index) => {
    const updatedList = [...venueList];
    updatedList[index] = { ...editData };
    setVenueList(updatedList);
    setEditIndex(null);
    setEditData({ location: '', venue: '' });
  };

  const handleDelete = (index) => {
    const updatedList = venueList.filter((_, i) => i !== index);
    setVenueList(updatedList);
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
                <option key={index} value={loc}>{loc}</option>
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
              <tr>
                <td colSpan="4" className='text-center'>No venues added yet.</td>
              </tr>
            ) : (
              venueList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <select
                        value={editData.location}
                        onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                        className='form-control'
                      >
                        {locations.map((loc, i) => (
                          <option key={i} value={loc}>{loc}</option>
                        ))}
                      </select>
                    ) : (
                      item.location
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
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
                    {editIndex === index ? (
                      <button className='btn btn-success btn-sm me-2' onClick={() => handleUpdate(index)}>Update</button>
                    ) : (
                      <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(index)}>Edit</button>
                    )}
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(index)}>Delete</button>
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
