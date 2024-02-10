import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

function ManBilling() {
  return (
    <div>
        <Nav />
            <h1 className='title_inventory'>BILLING</h1>
        <div>
            <div className='Inventory'>
              <Link to='addBillMan'>
                <button className='btn btn-danger' style={{ boxShadow: "0 0 10px 10px rgba(255,0,0,0.2)" }} > <b>New Bill </b></button>
              </Link>
              <Link to="billSummaryMan">  
                <button className='btn btn-success' style={{ boxShadow: "0 0 10px 10px rgba(0,255,120,0.2)" }} > <b>View Summary</b></button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ManBilling;
