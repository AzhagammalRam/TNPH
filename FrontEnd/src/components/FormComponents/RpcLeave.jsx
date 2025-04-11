import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RpcLeave() {
  const [leaveData, setLeaveData] = useState([
    { id: 1, designation: '', name: '', leaveType: '', permissionHrs: '', from: '', to: '', noOfDays: '' }
  ]);

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      designation: '',
      name: '',
      leaveType: '',
      permissionHrs: '',
      from: '',
      to: '',
      noOfDays: ''
    };
    setLeaveData([...leaveData, newRow]);
  };

  const handleDeleteRow = (id) => {
    setLeaveData(leaveData.filter(row => row.id !== id));
  };

  return (
    <div className="container">
      {/* <p className="sec_title">Leave</p> */}
      <Container>
        <Row>
          <Col dir="rtl"><Button onClick={handleAddRow} className="btn btn-success mb-2">Add Row</Button></Col>
        </Row>
      </Container>
      
      <Table responsive bordered className='mdtbl'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Designation</th>
            <th>Name</th>
            <th>Type of Leave</th>
            <th>Permission - Hrs</th>
            <th>From</th>
            <th>To</th>
            <th>No of Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((item, index) => (
            <tr key={item.id}>
              <td className='tblTitle'><label>{index + 1}</label></td>
              <td><Form.Select aria-label="Default select example" name="designation" defaultValue={item.designation}>
                <option> - Select - </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select></td>
              <td><input name="name" defaultValue={item.name} type="text" placeholder="Name" /></td>
              <td><Form.Select aria-label="Default select example" name="leaveType" defaultValue={item.leaveType}>
                <option> - Select - </option>
                <option value="1">CL</option>
                <option value="2">EL</option>
                <option value="3">ML</option>
                <option value="4">Permission</option>
              </Form.Select></td>
              <td><input name="permissionHrs" defaultValue={item.permissionHrs} type="text" placeholder="Hrs" /></td>
              <td><input name="from" defaultValue={item.from} type="date" placeholder="From" /></td>
              <td><input name="to" defaultValue={item.to} type="date" placeholder="To" /></td>
              <td><input name="noOfDays" defaultValue={item.noOfDays} type="text" placeholder="No of Days" /></td>
              <td><Button variant="danger" onClick={() => handleDeleteRow(item.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Container>
        <Row>
          <Col dir="rtl" className='txt-align-center'><Button className="btn btn-success mb-2">Save</Button></Col>
        </Row>
      </Container>
    </div>
  );
}

export default RpcLeave;