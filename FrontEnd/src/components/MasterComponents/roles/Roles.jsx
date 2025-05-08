import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

function Roles() {
  const [ranks, setRanks] = useState([]);
  const [selectedRank, setSelectedRank] = useState('');
  const [role, setRole] = useState('');
  const [rolesList, setRolesList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ rank_id: '', role: '' });

  
  const rankfetchedOnce = useRef(false);
  const rolefetchedOnce = useRef(false);

  useEffect(() => {
    if (rankfetchedOnce.current) return; // Prevent duplicate fetch
    rankfetchedOnce.current = true;
    const fetchInitialRanks = async () => {
      try {
        const res = await axios.get(`${API_BASE}/ranks`);
        setRanks(res.data);
      } catch (err) {
        console.error("Failed to fetch Ranks", err);
      }
    };

    fetchInitialRanks();
  }, []);

  useEffect(() => {
    if (rolefetchedOnce.current) return; // Prevent duplicate fetch
    rolefetchedOnce.current = true;
    const fetchInitialRoles = async () => {
      try {
        const res = await axios.get(`${API_BASE}/roles`);
        setRolesList(res.data);
      } catch (err) {
        console.error("Failed to fetch Roles", err);
      }
    };

    fetchInitialRoles();
  }, []);

     const fetchRoles = async () => {
    try {
      const res = await axios.get(`${API_BASE}/roles`);
      setRolesList(res.data);
    } catch (err) {
      console.error("Failed to fetch Roles", err);
    }
  };

     const handleSave = async () => {
    if (!role.trim() || !selectedRank) {
      return alert('Please enter a role and select a rank');
    }
  
    try {
      await axios.post(`${API_BASE}/roles`, {
        rank_id: selectedRank,
        role,
      });
      setRole('');
      setSelectedRank('');
      fetchRoles();
    } catch (err) {
      console.error('Failed to save role', err);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditData({
      rank_id: item.rank_id,
      role: item.role,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE}/roles/${editId}`, editData);
      setEditId(null);
      setEditData({ rank_id: '', role: '' });
      fetchRoles();
    } catch (err) {
      console.error('Failed to update role', err);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/roles/${id}`);
      fetchRoles();
    } catch (err) {
      console.error('Failed to delete role', err);
    }
  };

  const getOrgNameById = (id) => {
    const org = ranks.find((org) => org._id === id || org.id === id);
    return org ? org.name : 'N/A';
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
              {ranks.map((rank) => (
                <option key={rank.id} value={rank.id}>{rank.name.toUpperCase()}</option>
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
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    {editId === item.id ? (
                      <select
                        value={editData.rank_id}
                        onChange={(e) => setEditData({ ...editData, rank_id: e.target.value })}
                        className='form-control'
                      >
                        {ranks.map((rank) => (
                          <option key={rank.id} value={rank.id}>{rank.name.toUpperCase()}</option>
                        ))}
                      </select>
                    ) : (
                      getOrgNameById(item.rank_id)
                    )}
                  </td>
                  <td>
                    {editId === item.id ? (
                      <input
                        type='text'
                        value={editData.role}
                        onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                        className='form-control w-50'
                      />
                    ) : (
                      item.role
                    )}
                  </td>
                  <td className='text-center'>
                    {editId === item.id ? (
                      <button className='btn btn-success btn-sm me-2' onClick={handleUpdate}>Update</button>
                    ) : (
                      <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(item)}>Edit</button>
                    )}
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>
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
