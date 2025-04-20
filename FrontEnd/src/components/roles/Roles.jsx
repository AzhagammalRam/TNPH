import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

function Roles() {
  const ranks = ['DG', 'IG', 'DIG',"Other"]; // Replaced 'organizations' with 'ranks'

  const [selectedRank, setSelectedRank] = useState('');
  const [role, setRole] = useState('');
  const [rolesList, setRolesList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ rank: '', role: '' });

  const handleSave = () => {
    if (!selectedRank || !role.trim()) {
      return alert('Please select a rank and enter a role');
    }

    const newEntry = { rank: selectedRank, role };
    setRolesList([...rolesList, newEntry]);
    setSelectedRank('');
    setRole('');
  };

  const handleEdit = (index) => {
    const data = rolesList[index];
    setEditIndex(index);
    setEditData({ rank: data.rank, role: data.role });
  };

  const handleUpdate = (index) => {
    const updatedList = [...rolesList];
    updatedList[index] = { ...editData };
    setRolesList(updatedList);
    setEditIndex(null);
    setEditData({ rank: '', role: '' });
  };

  const handleDelete = (index) => {
    const updatedList = rolesList.filter((_, i) => i !== index);
    setRolesList(updatedList);
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>Roles</h4>
      <div className="master-organization-form w-100 p-3 mb-3">
        <div className='row w-75 mb-3'>
          <div className='col-md-4 '>
            <label className='form-label'>Rank:</label>
            <select
              value={selectedRank}
              onChange={(e) => setSelectedRank(e.target.value)}
              className='form-control'
            >
              <option value="">-- Select Rank --</option>
              {ranks.map((rank, index) => (
                <option key={index} value={rank}>{rank}</option>
              ))}
            </select>
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className='form-control'
              placeholder='Enter role'
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
              <th>Rank</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rolesList.length === 0 ? (
              <tr>
                <td colSpan="4" className='text-center'>No roles added yet.</td>
              </tr>
            ) : (
              rolesList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {editIndex === index ? (
                      <select
                        value={editData.rank}
                        onChange={(e) => setEditData({ ...editData, rank: e.target.value })}
                        className='form-control'
                      >
                        {ranks.map((rank, i) => (
                          <option key={i} value={rank}>{rank}</option>
                        ))}
                      </select>
                    ) : (
                      item.rank
                    )}
                  </td>
                  <td>
                    {editIndex === index ? (
                      <input
                        type='text'
                        value={editData.role}
                        onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                        className='form-control w-50 '
                      />
                    ) : (
                      item.role
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

export default Roles;
