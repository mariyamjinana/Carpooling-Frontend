import { faCar, faMagnifyingGlass, faMoneyBill1Wave, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, Form, Button, InputGroup, Collapse, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const navigate = useNavigate()
  const [openUsers, setOpenUsers] = useState(false); // State to toggle the Users dropdown
  const [openRides, setOpenRides] = useState(false); // State to toggle the Rides dropdown

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light vh-100 p-3" style={{ width: '250px' }}>
        <div className="text-center mb-4">
          <h5>ShareRide</h5>
          <p>Admin</p>
        </div>
        <Nav className="flex-column">
          <Nav.Link className="mb-2">Dashboard</Nav.Link>
          <Nav.Link
            className="mb-2"
            onClick={() => setOpenUsers(!openUsers)} // Toggle Users dropdown
            aria-controls="users-collapse"
            aria-expanded={openUsers}
          >
            Users
          </Nav.Link>
          <Collapse in={openUsers}>
          
          <div id="users-collapse" className="ps-3">
              <Nav.Link href='/drivers' className="mb-2">Drivers</Nav.Link>
              <Nav.Link href='/passengers' className="mb-2">Passengers</Nav.Link>
              
            </div>
               
          </Collapse>

          <Nav.Link className="mb-2" onClick={() => setOpenRides(!openRides)} aria-controls="rides-collapse" aria-expanded={openRides}>
            Rides
          </Nav.Link>
          <Collapse in={openRides}>
            <div id="rides-collapse" className="ps-3">
              <NavLink className="mb-2">Active Rides</NavLink>
              <NavLink className="mb-2">Completed Rides</NavLink>
              <Nav.Link className="mb-2">Cancelled Rides</Nav.Link>
            </div>
          </Collapse>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        {/* Top Navbar */}
<Navbar bg="light" expand="lg" className="shadow-sm">
  <Container fluid>
    {/* Add 'mx-auto' class to center the search bar */}
    <Form className="d-flex mx-auto" style={{ width: '50%' }}>
      <InputGroup>
        <Form.Control type="search" placeholder="Search" className="rounded-0" />
      </InputGroup>
    </Form>
    <Nav>
      <Nav.Link href="#notifications"></Nav.Link>
      <Nav.Link href="#profile">David Greymaax</Nav.Link>
    </Nav>
  </Container>
</Navbar>


        {/* Dashboard Content */}
        <Container className="mt-4">
          {/* Dashboard Cards */}
          <Row className="g-4">
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#ffe0e6' }}>
                <Card.Body>
                  <h5><FontAwesomeIcon icon={faUser}/> Total Users</h5>
                  <h2 style={{fontWeight:"bolder"}}>15,000</h2>
                  <p className="text-success">Increased by 60%</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#e0f7ff' }}>
                <Card.Body>
                  <h5><FontAwesomeIcon icon={faCar} /> Daily Rides</h5>
                  <h2 style={{fontWeight:"bolder"}}>45,6334</h2>
                  <p className="text-danger">Decreased by 10%</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: '#e0ffe6' }}>
                <Card.Body>
                  <h5><FontAwesomeIcon icon={faMoneyBill1Wave} /> Total Earnings</h5>
                  <h2>95,5741</h2>
                  <p className="text-success">Increased by 5%</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <Row className="mt-4">
            <Col lg={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Visit And Sales Statistics</h5>
                  {/* Replace with a chart library like Chart.js or Recharts */}
                  <div className="placeholder-chart">Bar Chart</div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Traffic Sources</h5>
                  {/* Replace with a chart library like Chart.js or Recharts */}
                  <div className="placeholder-chart">Pie Chart</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
