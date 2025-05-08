import React, { useState ,useEffect, useRef} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';
function Sex() {
  const [sexName, setSexName] = useState('');
  const [sexes, setSexes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);
  
  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialSexes = async () => {
      try {
        const res = await axios.get(`${API_BASE}/sex`);
        setSexes(res.data);
      } catch (err) {
        console.error("Failed to fetch Sexes", err);
      }
    };
  
    fetchInitialSexes();
  }, []);
  
    const fetchsexes = async () => {
      try {
        const res = await axios.get(`${API_BASE}/sex`);
        setSexes(res.data);
      } catch (err) {
        console.error("Failed to fetch Sexes", err);
      }
    };
  const handleSave = async () => {
    if (!sexName.trim()) return alert('Please enter a sex option');
    try {
      await axios.post(`${API_BASE}/sex`, { name: sexName });
      setSexName('');
      fetchsexes();
    } catch (err) {
      console.error("Failed to save", err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(sexes[index].name);
  };

  const handleUpdate = async(index) => {
    const sex = sexes[index];
    try {
      await axios.put(`${API_BASE}/sex/${sex.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchsexes();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handleDelete = async(index) => {
    const sex = sexes[index];
    try {
     await axios.delete(`${API_BASE}/sex/${sex.id}`);
      fetchsexes();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
   
    <div className='master-organization'>
      <h4 className='title-clr'>Sex</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Sex :</h6>
          </div>
          <div className='col-md-5'>
            <input
              type="text"
              name="sexName"
              value={sexName}
              onChange={(e) => setSexName(e.target.value)}
              className='form-control'
              placeholder="Enter sex (e.g. Male, Female)"
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
              <th>Sex</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sexes.map((sex, index) => (
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
                    sex.name
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
            {sexes.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No Sex added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
   
  );
}

export default Sex;
