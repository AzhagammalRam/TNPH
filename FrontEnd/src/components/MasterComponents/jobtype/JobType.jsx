import React, { useState } from 'react';
import '../organization/organization.css';
import { Table } from 'react-bootstrap';
import ComputerProgrammerNav from '../../ComputerProgrammerNav';


function JobType() {
  const [jobtype, setJobtype] = useState('');
  const [jobtypes, setJobtypes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!jobtype.trim()) return alert('Please enter an Job Type');
    const newEntry = { name: jobtype };
    setJobtypes([...jobtypes, newEntry]);
    setJobtype('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(jobtypes[index].name);
  };

  const handleUpdate = (index) => {
    const updatedList = [...jobtypes];
    updatedList[index].name = editName;
    setJobtypes(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = jobtypes.filter((_, i) => i !== index);
    setJobtypes(updatedList);
  };

  return (
   <ComputerProgrammerNav>
    <div className='master-organization'>
      <h4 className='title-clr'>Job Type</h4>
      <div className="master-organization-form p-3 mb-3">
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-4 text-center'>
            <h6 className='title-clr p-2'>Job Type  :</h6>
          </div>
          <div className='col-md-8'>
            <input
              type='text'
              name="jobtype"
              value={jobtype}
              onChange={(e) => setJobtype(e.target.value)}
              
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
        <Table   bordered id="strength" className='smtbl responsive w-75'>
          <thead>
            <tr className='text-center'>
              <th>Sl.No</th>
              <th >Job Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobtypes.map((org, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className='w-25'
                    />
                  ) : (
                    org.name
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
            {jobtypes.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center">No jobtypes added yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
    </ComputerProgrammerNav>  
  );
}

export default JobType;

