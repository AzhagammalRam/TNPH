import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ExecutiveEventsAndCeremonies() {
  const userRole = sessionStorage.getItem("role");

  const [leaveData, setLeaveData] = useState([
    { id: 1,  nameoftheevent: '', from: '', fromtime: '', to: '', totime: '', type: '',noofdays:'',publishTo:'',venue:'' }
  ]);
  
  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      name: '',
      from: '',
      fromtime: '',
      to: '',
      totime: '',
      type: '',
      noofdays:'',
      publishTo:'',
      venue:''
    };
    setLeaveData([...leaveData, newRow]);
  };

  const handleDeleteRow = (id) => {
    setLeaveData(leaveData.filter(row => row.id !== id));
  };

  return (
    <div className="container">
      {/* <p className="sec_title">Events and Ceremonies</p> */}
      <Container>
        <Row>
          <Col dir="rtl"><Button onClick={handleAddRow} className="btn btn-success mb-2">Add Row</Button></Col>
        </Row>
      </Container>
      
      <Table responsive bordered className='mdtbl'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Event</th>
            <th>From</th>
            <th>From Time</th>
            <th>To</th>
            <th>To Time</th>
            <th>Type</th>
            <th>No of Days</th>
            { userRole === 'SPCamp' && (
              <th>Publish To</th>
            )}
            <th>Venue</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveData.map((item, index) => (
            <tr key={item.id}>
              <td className='tblTitle'><label>{index + 1}</label></td>
              <td><input name="nameoftheevent" defaultValue={item.name} type="text" placeholder="Name of the Event" /></td>
              <td><input name="from" defaultValue={item.from} type="date" placeholder="From" /></td>
              <td><input name="fromtime" defaultValue={item.fromtime} type="text" placeholder="From Time" /></td>
              <td><input name="to" defaultValue={item.to} type="date" placeholder="To" /></td>
              <td><input name="totime" defaultValue={item.totime} type="text" placeholder="To Time" /></td>
              <td><input name="type" defaultValue={item.type} type="text" placeholder="Type" /></td>
              <td><input name="type" defaultValue={item.noofdays} type="text" placeholder="No of Days" /></td>
              { userRole === 'SPCamp' && (
              <td><Form.Select aria-label="Default select example" name="publishTo" defaultValue={item.publishTo}>
              <option> - Select - </option>
              <option value="1">All PTS</option>
              <option value="2">All ISTC</option>
              <option value="3">TNPH Only</option>
            </Form.Select></td>
              )}
              <td><input name="type" defaultValue={item.venue} type="text" placeholder="Venue" /></td>
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
  )
}

export default ExecutiveEventsAndCeremonies