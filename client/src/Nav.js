import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EmpLogin from './EmpLogin';
import Employee from './Employee';
import ManagerLogin from './ManagerLogin';

function Navi() {
    return (
       <>
          <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/managerLogin">POS</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/managerLogin' >Home</Nav.Link>
                <Nav.Link as={Link} to="/managerLogin/billing">Billing</Nav.Link>
                <Nav.Link as={Link} to="/managerLogin/employee">Employee</Nav.Link>
                <Nav.Link as={Link} to="/managerLogin/inventory_suppliers">Inventory</Nav.Link>
                <Link to="/">
                <button className="btn btn-primary">Logout</button>
                </Link>
              </Nav>
            </Container>
          </Navbar>
      </>
    );
}

export default Navi;