import React, { useState } from "react";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const RideRequest = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [rideType, setRideType] = useState("standard");
  const [rideDate, setRideDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const rideRequest = {
      pickupLocation,
      dropoffLocation,
      rideType,
      rideDate,
      paymentMethod,
    };
    
    // Here, you would typically send this data to your backend API to handle the ride request
    console.log("Ride Request: ", rideRequest);

    // After the request is submitted, you could redirect or display a confirmation
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3>Request a Ride</h3>
          <Form onSubmit={handleSubmit}>
            {/* Pickup Location */}
            <Form.Group controlId="pickupLocation">
              <Form.Label>Pickup Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pickup Location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </Form.Group>

            {/* Dropoff Location */}
            <Form.Group controlId="dropoffLocation">
              <Form.Label>Dropoff Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Dropoff Location"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                required
              />
            </Form.Group>

            {/* Ride Type */}
            <Form.Group controlId="rideType">
              <Form.Label>Ride Type</Form.Label>
              <Form.Control
                as="select"
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
                <option value="carpool">Carpool</option>
              </Form.Control>
            </Form.Group>

            {/* Ride Date (optional) */}
            <Form.Group controlId="rideDate">
              <Form.Label>Preferred Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={rideDate}
                onChange={(e) => setRideDate(e.target.value)}
              />
            </Form.Group>

            {/* Payment Method */}
            <Form.Group controlId="paymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <InputGroup>
                <InputGroup.Radio
                  aria-label="Credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                <Form.Control
                  type="text"
                  value="Credit Card"
                  disabled
                />
                <InputGroup.Radio
                  aria-label="Cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <Form.Control
                  type="text"
                  value="Cash"
                  disabled
                />
              </InputGroup>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Request Ride
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RideRequest;
