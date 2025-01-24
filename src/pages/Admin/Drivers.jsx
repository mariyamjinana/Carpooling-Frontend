import React from "react";
import { Container, Row, Col, Card, Button, Table, ProgressBar, Badge } from "react-bootstrap";

const Drivers = () => {
  return (
    <Container className="mt-4">
      <Row>
        {/* Driver Profile Section */}
        <Col lg={4}>
          <Card className="p-3 shadow-sm">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Driver Profile"
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <h4>John Doe</h4>
              <p className="text-muted">john.doe@email.com</p>
              <Badge bg="success" className="mb-3">
                Active
              </Badge>
              <p>
                <strong>Phone:</strong> +1 123-456-7890
              </p>
              <p>
                <strong>License:</strong> DL-123456789
              </p>
              <Button variant="outline-primary" className="me-2">
                Suspend Driver
              </Button>
              <Button variant="outline-secondary">Send Message</Button>
            </div>
          </Card>
        </Col>

        {/* Driver Statistics */}
        <Col lg={8}>
          <Row>
            <Col md={4}>
              <Card className="p-3 text-center shadow-sm">
                <h6>Total Rides</h6>
                <h4>450</h4>
                <p className="text-success">+10% this month</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 text-center shadow-sm">
                <h6>Total Earnings</h6>
                <h4>$12,340</h4>
                <p className="text-success">+5% this month</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-3 text-center shadow-sm">
                <h6>Average Rating</h6>
                <h4>4.8</h4>
                <p className="text-muted">Based on 300 reviews</p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Trip History */}
      <Row className="mt-4">
        <Col>
          <Card className="p-3 shadow-sm">
            <h5>Trip History</h5>
            <Table responsive striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Passenger</th>
                  <th>Distance</th>
                  <th>Earnings</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-01-01</td>
                  <td>Jane Smith</td>
                  <td>15 km</td>
                  <td>$25</td>
                  <td>
                    <Badge bg="success">Completed</Badge>
                  </td>
                </tr>
                <tr>
                  <td>2025-01-02</td>
                  <td>Robert Brown</td>
                  <td>10 km</td>
                  <td>$18</td>
                  <td>
                    <Badge bg="danger">Cancelled</Badge>
                  </td>
                </tr>
                <tr>
                  <td>2025-01-03</td>
                  <td>Emily White</td>
                  <td>20 km</td>
                  <td>$30</td>
                  <td>
                    <Badge bg="success">Completed</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      {/* Feedback Section */}
      <Row className="mt-4">
        <Col lg={6}>
          <Card className="p-3 shadow-sm">
            <h5>Feedback</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-3">
                <strong>Jane Smith:</strong> "Great driver! Very punctual and polite."
              </li>
              <li className="mb-3">
                <strong>Robert Brown:</strong> "The ride was smooth, but the car was not very clean."
              </li>
              <li>
                <strong>Emily White:</strong> "Excellent service. Would recommend!"
              </li>
            </ul>
          </Card>
        </Col>

        {/* Goals/Progress */}
        <Col lg={6}>
          <Card className="p-3 shadow-sm">
            <h5>Progress</h5>
            <div className="d-flex align-items-center">
              <ProgressBar
                now={75}
                label="75% Target Achieved"
                variant="info"
                className="flex-grow-1 me-3"
                style={{ height: "30px" }}
              />
              <p className="mb-0">Target: 500 Rides</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Drivers;
