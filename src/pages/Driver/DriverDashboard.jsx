import React from "react";
import { Container, Row, Col, Card, Navbar, Nav, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const DriverDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light vh-100 p-3" style={{ width: "250px", position: "fixed" }}>
        <div className="text-center mb-4">
          <h5>ShareRide</h5>
          <p>Driver</p>
        </div>
        <Nav className="flex-column">
          <Nav.Item>
            <Link to="/driver-dashboard" className="nav-link">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/my-rides" className="nav-link">My Rides</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/earnings" className="nav-link">Earnings</Link>
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
          <Navbar.Brand href="#">Driver Dashboard</Navbar.Brand>
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
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#ffe0e6" }}>
                <Card.Body>
                  <h5>Total Earnings</h5>
                  <h2>$3,200</h2>
                  <p className="text-success">+10% from last week</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#e0f7ff" }}>
                <Card.Body>
                  <h5>Completed Rides</h5>
                  <h2>120</h2>
                  <p className="text-success">+8% from last month</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="text-center shadow-sm" style={{ backgroundColor: "#e0ffe6" }}>
                <Card.Body>
                  <h5>Pending Requests</h5>
                  <h2>5</h2>
                  <p className="text-danger">Action Required</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <Row className="mt-4">
            <Col lg={8}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Earnings Over Time</h5>
                  {/* Replace with a chart library like Chart.js or Recharts */}
                  <div className="placeholder-chart">Line Chart</div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Ride Types</h5>
                  {/* Replace with a chart library like Chart.js or Recharts */}
                  <div className="placeholder-chart">Pie Chart</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Recent Activity */}
          <Row className="mt-4">
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>Recent Activity</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Accepted ride request from Jane Doe</li>
                    <li className="list-group-item">Completed ride to City Center</li>
                    <li className="list-group-item">Updated vehicle information</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DriverDashboard;
