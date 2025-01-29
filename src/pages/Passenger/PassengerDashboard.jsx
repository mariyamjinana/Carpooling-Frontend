import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Col, Collapse, Container, Form, InputGroup, Nav, Navbar, Row } from "react-bootstrap";

function PassengerDashboard() {
  const [openUsers, setOpenUsers] = useState(false); // State to toggle the Users dropdown
  const [openRides, setOpenRides] = useState(false); // State to toggle the Rides dropdown

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/passenger-dashboard">ShareRide</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home ">Home</Nav.Link>
              <Nav.Link href="#link" className="ms-2">Ride</Nav.Link>
              <Nav.Link href="#link" className="ms-2">Wallet</Nav.Link>
              <button className="border border-0 ms-5"><FontAwesomeIcon icon={faUser} /></button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5">
              <h3 className="text-warning" style={{ fontWeight: "bold" }}>BOOK A RIDE</h3>
              <img src="https://www.appicial.com/assets/images/taxi-app/taxi-app.gif" alt="" className="w-100" />
            </div>
            <div className="col-md-6 p-5 mt-5">
              <div className="mt-5 p-3">
                <input type="text" className="form-control mt-3 " placeholder="Enter Location" />
                <input type="text" className="form-control  mt-3" placeholder="Enter Destination" />
                <div className="text-center ">
                  <button className="btn btn-primary mt-3 shadow">See Prices</button>
                  <button className="btn btn-light mt-3 ms-3 shadow">Schedule for later</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PassengerDashboard;
