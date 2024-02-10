import React from 'react'
import EmpNav from './EmpNav';

function NonManShowProd() {
  return (
    <div>
        <EmpNav />
        <div className='showRemProduct'>
            <input type="text" name="NonManShowProduct" placeholder='--Product ID--'></input>
            <div>
                <button className='btn btn-primary'><b>Show </b></button>
            </div>
        </div>
    </div>
  )
}

export default NonManShowProd;
