import React, { Component } from 'react';
import "./App.css";
import EmpLogin from "./EmpLogin";
import './images/bg.jpeg';
import ManagerLogin from './ManagerLogin';
import NonManager from './NonManager';
import Employee from './Employee';
import ShowEmployees from './ShowEmployees'
import AddEmployee from './AddEmployee';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Inventory_suppliers from './inventory_suppliers';
import RemoveEmployee from './RemoveEmployee';
import NonManagerInventory from './NonManagerInv';
import ManBilling from './ManBilling';
import Billing from './Billing';
import AddProduct from './AddProduct';
import ShowRemProduct from './ShowRemProduct';
import NonManAddProd from './NonManAddProd';
import NonManShowProd from './NonManShowProd';
import AddBillMan from './AddBillMan';
import NonManBill from './NonManBill';
import BillSummaryMan from './BillSummaryMan';
import BillSummaryNonMan from './BillSummaryNonMan';

class App extends Component {
render() {
	return (
		<BrowserRouter>
			<div className="app">
				<Routes>
					<Route path="/" element={<EmpLogin/>} />
					<Route path="/managerLogin" element={<ManagerLogin/>} />
					<Route path="/managerLogin/employee" element={<Employee/>} />
					<Route path="/managerLogin/employee/addEmployee" element={<AddEmployee/>} />
					<Route path="/managerLogin/employee/showEmployees" element={<ShowEmployees/>} />
					<Route path="/managerLogin/employee/removeEmployee" element={<RemoveEmployee />} />

					<Route path="/managerLogin/inventory_suppliers" element={<Inventory_suppliers/>} />
					<Route path="/managerLogin/inventory_suppliers/addProduct" element={<AddProduct />} />
					<Route path="/managerLogin/inventory_suppliers/showRemProduct" element={<ShowRemProduct />} />

					<Route path="/managerLogin/billing" element={<ManBilling/>} />
					<Route path="/managerLogin/billing/addBillMan" element={ <AddBillMan />} />
					<Route path="/managerLogin/billing/billSummaryMan" element={<BillSummaryMan />} />


					<Route path="/nonManager" element={<NonManager/>} />
					<Route path="/nonManager/nonManagerInventory" element={<NonManagerInventory />} />
					<Route path="/nonManager/nonManagerInventory/nonManagerAddProduct" element={<NonManAddProd />} />
					<Route path="/nonManager/nonManagerInventory/nonManagerShowProduct" element={<NonManShowProd />} />

					<Route path="/nonManager/nonManagerBilling" element={<Billing />} />
					<Route path="/nonManager/nonManagerBilling/nonManAddBill" element={<NonManBill/>} />
					<Route path="/nonManager/nonManagerBilling/BillSummaryNonMan" element={<BillSummaryNonMan/>} />

				</Routes>
			</div>
		</BrowserRouter>
	);
  }
}

export default App;

