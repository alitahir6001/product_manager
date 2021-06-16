import {Link} from '@reach/router';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import Delete from '../components/Delete';


const AllTheProducts = props => {
    const [products, setProducts] = useState(false); // since you're passing false, use the ternary operator below

    useEffect (() => {
        Axios.get("http://localhost:8000/api/products/")
        .then(res => setProducts(res.data.results))
        .catch(err => console.log(err))
    }, [props]) // empty array being passed props here because we're querying the database, but also because since we're using a variable in useEffect, you have to pass that variable here.

    
    // Delete
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

        return (
        // <>
        
        products ?
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((j, i) => { // This is being pulled from the api './.../products route, which maps out all the current products in the data base.
                            return <tr key={i}>
                                    <td>{j.title}</td>
                                    <td>{j.price}</td>
                                    <td>{j.description}</td>
                                    <td>
                                        <Link to={`/edit/${j._id}`}><button type="button" class="btn btn-warning">Edit</button></Link> 
                                        <Link to={`/show/${j._id}`}><button type="button" class="btn btn-info">View Product</button></Link>
                                        <Delete id={j._id} successCallback={() => removeFromDom(j._id)} />
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
                <h2>Loading....</h2>

        // </>
    )

}



export default AllTheProducts;