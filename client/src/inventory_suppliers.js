import { Link } from 'react-router-dom';
import Nav from './Nav';

function Inventory_suppliers() {
    return (
        <div>
            <Nav />
            <h1 className='title_inventory'> Inventory</h1>
                <div className='Inventory'>
                    <Link to="addProduct">
                    <button className='btn btn-danger'> <b>Add Product </b></button>
                    </Link>
                    <Link to="showRemProduct">
                    <button className='btn btn-primary' > <b>Show/Remove Product</b></button>
                    </Link>
                <div/>
            </div>
        </div>
    );
}



export default Inventory_suppliers;