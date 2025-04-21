import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ComputerProgrammerNav from '../../ComputerProgrammerNav';

function SubjectManager() {
  const [subject, setSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');

  const handleSave = () => {
    if (!subject.trim()) return alert('Please enter a subject');
    const newEntry = { name: subject };
    setSubjects([...subjects, newEntry]);
    setSubject('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(subjects[index].name);
  };

  const handleUpdate = (index) => {
    const updatedList = [...subjects];
    updatedList[index].name = editName;
    setSubjects(updatedList);
    setEditIndex(null);
    setEditName('');
  };

  const handleDelete = (index) => {
    const updatedList = subjects.filter((_, i) => i !== index);
    setSubjects(updatedList);
  };

  return (
    <ComputerProgrammerNav>
      <div className='master-organization'>
        <h4 className='title-clr'>Subject</h4>
        <div className="master-organization-form p-3 mb-3">
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-4 text-center'>
              <h6 className='title-clr p-2'>Subject :</h6>
            </div>
            <div className='col-md-5'>
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='form-control'
                placeholder="Enter Subject"
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
          <Table bordered id="subjectTable" className='smtbl responsive w-75'>
            <thead>
              <tr className='text-center'>
                <th>Sl.No</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subj, index) => (
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
                      subj.name
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
              {subjects.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center">No Subject added yet.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </ComputerProgrammerNav>
  );
}

export default SubjectManager;
