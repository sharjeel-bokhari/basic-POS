import React from 'react';
import Nav from './Nav';
import {Table,Form} from 'react-bootstrap';

function AddBillMan() {
  return (
    <div>
        <Nav />
        <div className='addBillMan'>
            <div className='addBillMan1'>    
                <input type="number" name="addBillProdID" placeholder='--Product ID--' />
                <Form>
                    <fieldset>
                        <Form.Group>
                            <Form.Select id="designationSelect" name="designation">
                                <option>--Product Name--</option>

                            </Form.Select>
                        </Form.Group>
                    </fieldset>
                </Form>
                <input type="number" name="addBillProdName" placeholder='--Quantity--' />
                <button type='submit' className='btn btn-dark'>Add Product</button>
            </div>
            <button style={{ marginLeft: "auto", width: "10%"}} type='submit' className='btn btn-danger'>Finish</button>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>BILL #</th>
                        <th>Product #</th>
                        <th> Product Name </th>
                        <th>Price / Unit</th>
                        <th> Quantity </th>
                        <th> Total  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>NULL</b></td>
                        <td><b>NULL</b></td>
                        <td><b>NULL</b></td>
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

export default AddBillMan;
