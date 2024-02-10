import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Button } from 'react-bootstrap';
function Employee() {
    return (
        <div>
            <Nav />
            <div className='Inventory'>
            <Link to="/managerLogin/employee/showEmployees">
                <Button className="btn btn-primary"  style={{ boxShadow: "0 0 10px 10px rgba(48,106,240,0.3)" }} > Show/Remove Employee </Button>
              </Link>
              <Link to="/managerLogin/employee/addEmployee">
              <Button className="btn btn-dark"  style={{ boxShadow: "0 0 10px 10px rgba(0,0,0,0.3)" }} > Add Employee </Button>
              </Link>
            </div>
        </div>
    );
}

export default Employee;