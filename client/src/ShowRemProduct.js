import React from 'react'
import Nav from './Nav';

function ShowRemProduct() {
  return (
    <div>
        <Nav />
        <div className='showRemProduct'>
            <input type="text" name="showRemProduct" placeholder='--Product ID--'></input>
            <div>
                <button className='btn btn-primary'><b>Show </b></button>
                <button className='btn btn-danger'><b>Remove </b></button>
            </div>
        </div>
    </div>
  )
}

export default ShowRemProduct;
