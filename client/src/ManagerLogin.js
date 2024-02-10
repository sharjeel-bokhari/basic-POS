import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from './Nav'

function ManagerLogin() {
    return (
        <div>
            <Nav />
            <h1 className='title_inventory'>Home</h1>
            <div className="Inventory">       
                <Link to='billing'>
                    <Button className="btn btn-primary"  style={{ boxShadow: "0 0 10px 10px rgba(0,0,255,0.2)" }} > Billing </Button>
                </Link>
                <Link to='inventory_suppliers'>
                    <Button className="btn btn-success"  style={{ boxShadow: "0 0 10px 10px rgba(0,255,120,0.2)" }} > Inventory </Button>
                </Link>
                <Link to='employee'>
                    <Button className="btn btn-danger"  style={{ boxShadow: "0 0 10px 10px rgba(255,0,0,0.2)" }} > Employee </Button>
                </Link>
            </div>
        </div>
    );
}

export default ManagerLogin;

