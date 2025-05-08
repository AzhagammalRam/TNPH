import React, { useState, useEffect, useRef } from 'react';
import '../organization/organization.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';

const API_URL = `${API_BASE}/ranks`;

function Ranks() {
  const [rank, setRank] = useState('');
  const [ranks, setRanks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editId, setEditId] = useState(null);

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialRanks = async () => {
      try {
        const res = await axios.get(API_URL);
        setRanks(res.data);
      } catch (err) {
        console.error('Failed to fetch Ranks', err);
      }
    };
  
    fetchInitialRanks();
  }, []);

  const fetchRanks = async () => {
    try {
      const res = await axios.get(API_URL);
      setRanks(res.data);
    } catch (err) {
      console.error('Error fetching Ranks:', err);
    }
  };

  const handleSave = async () => {
    if (!rank.trim()) return alert('Please enter a Rank');
    try {
      await axios.post(API_URL, { name: rank });
      fetchRanks();
      setRank('');
    } catch (err) {
      console.error('Error saving rank:', err);
    }
  };

  const handleEdit = (index, item) => {
    setEditIndex(index);
    setEditName(item.name);
    setEditId(item.id);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${editId}`, { name: editName });
      fetchRanks();
      setEditIndex(null);
      setEditName('');
      setEditId(null);
    } catch (err) {
      console.error('Error updating Rank:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchRanks();
    } catch (err) {
      console.error('Error deleting Rank:', err);
    }
  };

  return (
    <div className='master-organization'>
      <h4 className='title-clr'>Ranks</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Rank:</h6>
          </div>
          <div className='col-md-8'>
            <input
              type='text'
              name="rank"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
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
              <th>Ranks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ranks.map((item, index) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='w-25'
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className='text-center'>
                  {editIndex === index ? (
                    <button className='btn btn-success btn-sm me-2' onClick={handleUpdate}>Update</button>
                  ) : (
                    <button className='btn btn-warning btn-sm me-2' onClick={() => handleEdit(index, item)}>Edit</button>
                  )}
                  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {ranks.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No Ranks added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Ranks;
