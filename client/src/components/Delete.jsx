import Axios from 'axios';
// import { navigate } from '@reach/router';
// import {useState} from 'react';



const Delete = props => {
    
    // const products = props.products
    // const setProducts = props.setProducts

    // const [products,setProducts] = useState(false)
    
    
    const {id, successCallback} = props

    const handleTrash = e => {
        Axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                successCallback();
            })
            // .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }

return(

    <button className="btn btn-danger" onClick={ handleTrash }>Delete</button>
)

}


export default Delete;