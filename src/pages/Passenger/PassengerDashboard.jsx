import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const PassengerDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light vh-100 p-3" style={{ width: "250px", position: "fixed" }}>
        <div className="text-center mb-4">
          <h5>ShareRide</h5>
          <p>Passenger</p>
        </div>
        <Nav className="flex-column">
          <Nav.Item>
            <Link to="/passenger-dashboard" className="nav-link">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/my-rides" className="nav-link">My Rides</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/wallet" className="nav-link">Wallet</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/profile" className="nav-link">Profile</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/settings" className="nav-link">Settings</Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 ml-250" style={{ marginLeft: "250px" }}>
        {/* Top Navbar */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Passenger Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Link to="/logout" className="nav-link">Logout</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Dashboard Content */}
        <Container className="mt-4 flex-grow-1">
          {/* Dashboard Cards */}
          <Row className="g-4">
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#e0ffe6" }}>
                <Card.Body>
                  <h5>Upcoming Rides</h5>
                  <h2>2</h2>
                  <p>Next ride in 2 days</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#e0f7ff" }}>
                <Card.Body>
                  <h5>Completed Rides</h5>
                  <h2>45</h2>
                  <p>Latest: To City Center</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#ffe0e6" }}>
                <Card.Body>
                  <h5>Wallet Balance</h5>
                  <h2>$100</h2>
                  <p className="text-success">+20% from last top-up</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Ride History */}
          <Row className="mt-4">
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Recent Rides</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Completed ride to City Center</li>
                    <li className="list-group-item">Ride from Airport to Hotel</li>
                    <li className="list-group-item">Ride to Downtown</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Ride Preferences */}
          <Row className="mt-4">
            <Col lg={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Ride Preferences</h5>
                  <p>Set your preferences for ride types, vehicle types, and more.</p>
                  <Link to="/preferences" className="btn btn-primary">Update Preferences</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </div>
  );
};

export default PassengerDashboard;
