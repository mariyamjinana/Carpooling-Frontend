import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';

function AdminHome() {
  return (
  < >
      <div className="container mt-4" >
        {/* Welcome Section */}
        <div className="mb-4">
          <h2>Welcome Back, Admin!</h2>
          <p className="text-muted">Here’s a quick overview of your platform.</p>
        </div>
    
        {/* KPI Cards */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Total Users</Card.Title>
                <h3>500</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Active Rides</Card.Title>
                <h3>50</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Completed Rides</Card.Title>
                <h3>450</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Pending Requests</Card.Title>
                <h3>10</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    
        {/* Activity Feed */}
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Recent Activities</Card.Title>
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Activity</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>New user registered: John Doe</td>
                  <td>2 hours ago</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ride completed: Jane Smith to Central Park</td>
                  <td>3 hours ago</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Feedback received: Driver rating 5 stars</td>
                  <td>5 hours ago</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
    
        {/* Announcements Section */}
        <Card>
          <Card.Body>
            <Card.Title>Announcements</Card.Title>
            <ul>
              <li>Platform maintenance scheduled for Saturday at 10 PM.</li>
              <li>New feature update: Real-time ride tracking.</li>
              <li>Policy reminder: Drivers must verify identity by Jan 31.</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
  </>
  );
}

export default AdminHome;
