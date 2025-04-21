import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ComputerProgrammerNav from '../../ComputerProgrammerNav';

function Sex() {
  const [sexName, setSexName] = useState('');
  const [sexes, setSexes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!sexName.trim()) return alert('Please enter a sex option');
    const newEntry = { name: sexName };
    setSexes([...sexes, newEntry]);
    setSexName('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(sexes[index].name);
  };

  const handleUpdate = (index) => {
    const updatedList = [...sexes];
    updatedList[index].name = editName;
    setSexes(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = sexes.filter((_, i) => i !== index);
    setSexes(updatedList);
  };

  return (
    <ComputerProgrammerNav>
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
    </ComputerProgrammerNav>
  );
}

export default Sex;
