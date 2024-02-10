import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function EmpNav() {
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/nonManager">POS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/nonManager' >Home</Nav.Link>
                    <Nav.Link as={Link} to="/nonManager/nonManagerBilling">Billing</Nav.Link>
                    <Nav.Link as={Link} to="/nonManager/nonManagerInventory">Inventory</Nav.Link>
                    <Link to="/">
                        <button className="btn btn-primary">Logout</button>
                    </Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default EmpNav;

