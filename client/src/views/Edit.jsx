import {useState, useEffect} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductMgrForm';
import { navigate } from '@reach/router';

const Edit = props => {
    const [product, setProduct] = useState(false); // since you're passing false, use the ternary operator

    useEffect (() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data.results[0]))
        .catch(err => console.log(err))
    }, [props]) // empty array being passed props here because we're querying the database, but also because since we're using a variable in useEffect, you have to pass that variable here.


    const [errors,setErrors] = useState({
        title: "",
        price: 0,
        description: ""
    })
    
    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })    
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.put(`http://localhost:8000/api/products/${props.id}`, product) // when copied from Create.jsx, this is now a PUT route because we need to update/edit, not create a new one. Also changed to string interpolater (pass it a variable in the url) so we can edit the appropriate product.
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);

            })
    }

    return (
        <>
            {
                product ? 
                <ProductForm 
                    inputs={product}
                    title = "Edit Product"
                    submitValue = "Edit"
                    handleInputChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    errors = {errors}
                /> : <h2>Loading....</h2>
            }
            
            </>
    )
}


export default Edit;
