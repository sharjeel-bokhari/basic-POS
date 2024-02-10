import {React} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";

function EmpLogin() {
    return (
        <div className="forms">
                <label><b> WELCOME TO THE </b></label>   
                <label><b>POINT OF SALE </b></label>
                
            <div className="login">
                <label><b>Employee ID:</b></label>
                <input type='text' placeholder="Employee id..."></input>
                <label><b>Password:</b></label>
                <input type='text' placeholder="Password..." ></input>
                <button className="btn btn-primary">Login</button>
                 
                
            </div>
             
        </div>
    );
}

export default EmpLogin;