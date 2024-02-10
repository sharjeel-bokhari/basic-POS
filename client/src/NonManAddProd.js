import React from 'react'
import EmpNav from './EmpNav';

function NonManAddProd() {
  return (
    <div>
        <EmpNav />
        <div className='RemoveEmployee'>
            <input type="text" name="nonManagerAddProduct" placeholder='--Product ID--'></input>
            <button className='btn btn-primary'> <b>Add </b></button>
            
        </div>
    </div>
  )
}

export default NonManAddProd;
