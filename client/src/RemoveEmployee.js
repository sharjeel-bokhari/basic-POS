import React, { useState } from 'react';
import Nav from './Nav';
import "./App.css";
import { Button, Modal } from 'react-bootstrap';

function RemoveEmployee (){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);    
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav />
            <div className='RemoveEmployee'>
                <input type="text" placeholder='--Name of Employee to Remove--' name="remEmp" ></input>
                <Button className='btn btn-danger' onClick={handleShow}> Remove </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remove Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Are you sure you want to delete this employee! </Modal.Body>
                    
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>No</Button>
                        <Button variant="danger" onClick={handleClose}>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default RemoveEmployee;
