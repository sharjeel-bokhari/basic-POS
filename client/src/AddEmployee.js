import React from 'react';
import {Form, Button} from 'react-bootstrap/';
import "./App.css";
import Nav from './Nav';

const AddEmployee = () => {
    return (
        <div>
            <Nav />
            <div>
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
                        <Form.Group className="mb-3">
                        </Form.Group>
                        <Button type="submit">Add</Button>
                    </fieldset>
                </Form>
            </div>
        </div>
    )
}

export default AddEmployee;