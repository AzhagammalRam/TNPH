import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ComputerProgrammerNav from '../../ComputerProgrammerNav';

function Locations() {
  const organizations = ['TNPH', 'PTS', 'ISTC']; 

  const [selectedOrg, setSelectedOrg] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ org: '', location: '' });

  const handleSave = () => {
    if (!selectedOrg || !location.trim()) {
      return alert('Please select an organization and enter a location');
    }

    const newEntry = { org: selectedOrg, location };
    setLocations([...locations, newEntry]);
    setSelectedOrg('');
    setLocation('');
  };

  const handleEdit = (index) => {
    const data = locations[index];
    setEditIndex(index);
    setEditData({ org: data.org, location: data.location });
  };

  const handleUpdate = (index) => {
    const updatedList = [...locations];
    updatedList[index] = { ...editData };
    setLocations(updatedList);
    setEditIndex(null);
    setEditData({ org: '', location: '' });
  };

  const handleDelete = (index) => {
    const updatedList = locations.filter((_, i) => i !== index);
    setLocations(updatedList);
  };

  return (
    <ComputerProgrammerNav>
    <div className='master-organization'>
      <h4 className='title-clr'>Locations</h4>
      <div className="master-organization-form w-100 p-3 mb-3">
        <div className='row w-75 mb-3'>
          <div className='col-md-4 '>
            <label className='form-label'>Organization:</label>
            <select
              value={selectedOrg}
              onChange={(e) => setSelectedOrg(e.target.value)}
              className='form-control'
            >
              <option value="">-- Select Organization --</option>
              {organizations.map((org, index) => (
                <option key={index} value={org}>{org}</option>
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
            <button className='btn btn-primary ' onClick={handleSave}>Save</button>
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
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <select
                        value={editData.org}
                        onChange={(e) => setEditData({ ...editData, org: e.target.value })}
                        className='form-control'
                      >
                        {organizations.map((org, i) => (
                          <option key={i} value={org}>{org}</option>
                        ))}
                      </select>
                    ) : (
                      item.org
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        value={editData.location}
                        onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                        className='form-control w-50 '
                      />
                    ) : (
                      item.location
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
    </ComputerProgrammerNav>
  );
}

export default Locations;
