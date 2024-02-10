import { Link } from 'react-router-dom';
import EmpNav from './EmpNav';

function NonManagerInventory() {
    return (
        <div>
            <EmpNav />
            <h1 className='title_inventory'> Inventory</h1>
                <div className='Inventory'>
                    <Link to="nonManagerAddProduct">
                        <button className='btn btn-danger'> <b>Add Product </b></button>
                    </Link>
                    <Link to="nonManagerShowProduct">
                        <button className='btn btn-primary' > <b>Show Product</b></button>
                    </Link>
                <div/>
            </div>
        </div>
    );
}


export default NonManagerInventory;