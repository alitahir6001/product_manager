import {useState} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductMgrForm';
import AllTheProducts from './AllTheProducts'

// import { navigate } from '@reach/router';

const Create = props => {
    const products = props.products
    const setProducts = props.setProducts // We now have access to the state variables from App.jsx
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })

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

        Axios.post("http://localhost:8000/api/products", product)
            .then(res => {
                setProduct({
                title: "",
                price: 0,
                description: "",
                })
            // Add new item to local product list in state. In order to do that, you MUST use the 'setter' in this case (setProducts)
            setProducts([...products, res.data.results]) // We are updating the array we are seeing on the page

            })
                
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);

            })
    }

    return (
        <>
            <ProductForm 
                inputs={product}
                title = "Create Product"
                submitValue = "Create"
                handleInputChange = {handleChange}
                handleSubmit = {handleSubmit}
                errors = {errors}
            />
        <AllTheProducts data ={products} />
        </>
    )
}

export default Create;