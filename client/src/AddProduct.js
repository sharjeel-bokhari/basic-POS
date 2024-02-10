import React from 'react';
import {Form, Button} from 'react-bootstrap/';
import "./App.css";
import Nav from './Nav';
import { useState } from 'react';
import { Alert } from 'react-bootstrap/';
import axios, { Axios } from 'axios';


const Addproduct = () => {

  const [PRODUCT_ID,setPRODUCT_ID] = useState(0);
  const [PROD_CMPNY,setPROD_CMPNY] = useState('');
  const [PROD_NAME,setPROD_NAME] = useState('');
  const [PROD_PRICE, setPROD_PRICE] = useState(0);
  const [CATEGORY, setCATEGORY] = useState("");
  const [QUANTITY,setQUANTITY] = useState(0);

  const AddProducts = () => {
      axios.post('http://localhost:3001/create', { 
        name: PROD_NAME, 
        cmpny: PROD_CMPNY, 
        price: PROD_PRICE, 
        quantity: QUANTITY, 
        category: CATEGORY 
      }).then(() => {
        console.log("SUCCESS");
      })
  }

  return (
    <div>
        <Nav />
      <div className="addProduct"> 
        <input type ="text" style={{margin: '10px'}} placeholder='Product Company' name ="PROD_CMPNY" onChange={(event)=> {
          setPROD_CMPNY(event.target.value);
        }}/>
        <input type="text" style={{margin: '10px'}} placeholder='Product Name' name ="PROD_NAME" onChange={(event)=> {
          setPROD_NAME(event.target.value);
        }}/>
        <input type="number" style={{margin: '10px'}} placeholder='Product Price' name ="PROD_PRICE" onChange={(event)=> {
          setPROD_PRICE(event.target.value);
        }} />
        <input type="number" style={{margin: '10px'}} placeholder='Quantity' name ="QUANTITY" onChange={(event)=> {
          setQUANTITY(event.target.value);
        }} />
      
        
        <Form.Group className="mb-3">
            <Form.Select style={{margin: '10px', width: '97%'}} id="designationSelect" name="CATEGORY" onChange={(event)=> {
          setCATEGORY(event.target.value);
        }}>
                  <option>--CATEGORY--</option>
                  <option>BEVARGES</option>
                  <option>MEDICINE</option>
                  <option>BAKERY</option>
                  <option> SEA FOOD </option>
                  <option>MEAT </option>
                  <option>PREPARED FOODS</option>
                  <option>FRUITS/VEGETABLES</option>
                  <option>CLEANING</option>
                  <option> SNACKS</option>
                  <option>OTHER</option>

              </Form.Select>
          </Form.Group>
        <button className="btn btn-dark" onClick={AddProducts} > Add</button>

      </div>

    </div>
  )
}

export default Addproduct;