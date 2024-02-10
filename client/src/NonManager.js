import React from "react";
import { Link } from "react-router-dom";
import EmpNav from "./EmpNav";
import {Button} from 'react-bootstrap';

function NonManager() {
    return (
        <div>
            <EmpNav />
            <h1 className='title_inventory'>Home</h1>
            <div className="Inventory">       
                <Link to='nonManagerBilling'>
                    <Button className="btn btn-primary"  style={{ boxShadow: "0 0 10px 10px rgba(0,0,255,0.2)" }} > Billing </Button>
                </Link>
                <Link to='nonManagerInventory'>
                    <Button className="btn btn-success"  style={{ boxShadow: "0 0 10px 10px rgba(0,255,120,0.2)" }} > Inventory </Button>
                </Link>
            </div>
        </div>
    );
}

export default NonManager;

