import React, { useState ,useEffect, useRef} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE } from '../../../config/api';




function Components() {
  const [component, setComponent] = useState('');
  const [components, setComponents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const fetchedOnce = useRef(false);

  useEffect(() => {
    if (fetchedOnce.current) return; // Prevent duplicate fetch
    fetchedOnce.current = true;
  
    const fetchInitialComponents = async () => {
      try {
        const res = await axios.get(`${API_BASE}/components`);
        setComponents(res.data);
      } catch (err) {
        console.error("Failed to fetch Components", err);
      }
    };
  
    fetchInitialComponents();
  }, []);

  const fetchComponents = async () => {
    try {
      const res = await axios.get(`${API_BASE}/components`);
      setComponents(res.data);
    } catch (err) {
      console.error('Error fetching components:', err);
    }
  };

  const handleSave = async () => {
    if (!component.trim()) return alert('Please enter a component');
    try {
      await axios.post(`${API_BASE}/components`, { name: component });
      setComponent('');
      fetchComponents();
    } catch (err) {
      console.error('Error saving component:', err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(components[index].name);
  };

  const handleUpdate = async (index) => {
    const component = components[index];
    try {
      await axios.put(`${API_BASE}/components/${component.id}`, { name: editName });
      setEditIndex(null);
      setEditName('');
      fetchComponents();
    } catch (err) {
      console.error('Error updating component:', err);
    }
  };

  const handleDelete = async (index) => {
    const id = components[index].id;
    try {
      await axios.delete(`${API_BASE}/components/${id}`);
      fetchComponents();
    } catch (err) {
      console.error('Error deleting component:', err);
    }
  };

  return (
   
    <div className='master-organization'>
      <h4 className='title-clr'>Components</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Component :</h6>
          </div>
          <div className='col-md-5'>
            <input
              type="text"
              name="component"
              value={component}
              onChange={(e) => setComponent(e.target.value)}
              className='form-control'
              placeholder="Enter component name"
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
              <th>Component</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {components.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='form-control w-75'
                    />
                  ) : (
                    item.name
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
            {components.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No Components added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Components;
