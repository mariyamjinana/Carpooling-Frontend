import React, { useState } from 'react';
import { Modal, Container, Navbar, Nav, Form, InputGroup, Button, Collapse, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Drivers = () => {
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

        {/* Drivers Content */}
        <Container className="mt-4">
          <div className="text-end mb-3">
            {/* <button type="button" className="btn btn-primary">
              <h4 className="text-white">+ Add Driver</h4>
            </button> */}
          </div>

          <h1 className="text-center">Drivers</h1>

          <div className="d-flex justify-content-center align-items-center">
            <table className="border border-1 p-5 text-center shadow mt-3 w-100">
              <thead className="border border-2">
                <tr>
                  <th scope="col" className="p-4">Name</th>
                  <th scope="col" className="p-4">Username</th>
                  <th scope="col" className="p-4">E-mail</th>
                  <th scope="col" className="p-4">Phone</th>
                  <th scope="col" className="p-4">Address</th>
                  <th scope="col" className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">john doe</td>
                  <td className="p-4">John@gmail.com</td>
                  <td className="p-4">+91 xxxxxxxxxxx</td>
                  <td className="p-4">123 House</td>
                 <Link to={'/userdetails'}><td className="p-4"><button className='btn btn-success w-100'>view</button></td></Link>
                  <td className="p-4"><button className='btn btn-danger'>Delete</button></td>


                 
                 
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Drivers;
