import React from "react";
import './App.css'
import {Form, Button, Table} from 'react-bootstrap';
import Nav from './Nav';

function ShowEmployees () {
    return (
        <div>
            <Nav />
            <div className="ShowEmployees">
                <Form>
                    <fieldset>
                        <Form.Group className="mb-3">
                            <Form.Control id="nameInput" placeholder="--Name--" name="name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select id="designationSelect" name="designation">
                                <option>--Designation--</option>
                                <option>Cashier</option>
                                <option>Cleaner</option>
                                <option>Technition</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">Search</Button>
                        <Button type="submit" className="btn btn-danger">Remove</Button>
                    </fieldset>
                </Form>
            </div>
            <div className="ShowEmployeesTable">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Emp_ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>NULL</b></td>
                            <td><b>NULL</b></td>
                            <td><b>NULL</b></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ShowEmployees;