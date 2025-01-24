import React, { useState } from 'react';
import { Modal, Container, Navbar, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Passengers = () => {

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light vh-100 p-3" style={{ width: '250px' }}>
        <div className="text-center mb-4">
          <h5>ShareRide</h5>
          <p>Admin</p>
        </div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="mb-2">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/users" className="mb-2">
            Users
          </Nav.Link>
          <Nav.Link as={Link} to="/rides" className="mb-2">
            Rides
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <Navbar bg="light" expand="lg" className="shadow-sm">
          <Container fluid>
            <Form className="d-flex me-auto ms-5">
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

        {/* Passengers Content */}
        <Container className="mt-4">
          <div className="text-end mb-3">
            {/* <button type="button" className="btn btn-primary">
              <h4 className="text-white">+ Add Driver</h4>
            </button> */}
          </div>

          <h1 className="text-center">Passengers</h1>

          <div className="d-flex justify-content-center align-items-center">
            <table className="border border-1 p-5 text-center shadow mt-3">
              <thead className="border border-2">
                <tr>
                  <th scope="col" className="p-4">Name</th>
                  <th scope="col" className="p-4">Address</th>
                  <th scope="col" className="p-4">Age</th>
                  <th scope="col" className="p-4">Vehicle</th>
                  <th scope="col" className="p-4"></th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">123 Main St</td>
                  <td className="p-4">35</td>
                  <td className="p-4">Toyota Corolla</td>
                  <td className="p-4 text-center">
                    <button type="button" className="bg-danger border border-0">
                      {/* Add delete icon here */}
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <button type="button" className="btn">
                      {/* Add edit icon here */}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Passengers;
