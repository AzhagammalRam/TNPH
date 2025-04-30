import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MinisterialAttendance() {
  return (
    <div className="container">
      <p className="sec_title">Attendance</p>
      <Container>
        <Row>
            <Col><label>Number of Staff:</label></Col>
            <Col><label>Staff Presented:</label></Col>
        </Row>
    </Container>
    </div>
  )
}

export default MinisterialAttendance