import React from "react";
import './App.css'
import {Table} from 'react-bootstrap';
import EmpNav from "./EmpNav";

function BillSummaryNonMan () {
    return (
        <div>
            <EmpNav />
            <div className="summary">
                <div className="billIdSummary">
                    <input style={{ margin: "4.14%" }} type="number" name="addBillProdName" placeholder='--Bill Number--' />
                </div>
                <div className="dateSummary">
                    <input type="date" name="addBillProdName" placeholder='--Date--' />
                </div>
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

export default BillSummaryNonMan;