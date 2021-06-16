import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import AllTheProducts from './views/AllTheProducts';
import Create from './views/Create';
import Show from './views/Show';
import Edit from './views/Edit';
import {useState, useEffect} from 'react';
import Axios from 'axios';



function App() {
  const [products, setProducts] = useState([]);

  
  function newFunction() {
    Axios.get("http://localhost:8000/api/products") // Make this a function
    .then(res => setProducts(res.data.results)) // this '.results' is from the controllers
    .catch(err => console.log(err))
  }

  
    useEffect(() => {
      newFunction()
          }, [])  
  
  
  return (

    <div className="App">
      <div className="d-flex col-6 mx-auto justify-content-around flex-wrap">
        <Link to="/">All The Products</Link>
        {/* <Link to="/new">Add A Product</Link>  These lines were commented out once I moved the create form to the main page */}
      </div>

{/* Create now has access to setProducts, because we've passed it inside the component as a prop */}

      {/* <Create setProducts = {setProducts} products = {products}/>  */}


      <br></br> <br></br> <hr></hr>
      <br></br><br></br>  
      {/* This is a pretty ugly way to get what you want, but at least it works */}

      <Router>
        {/* <AllTheProducts path="/" products = {products} /> */}
        <Show path = "/show/:id" />
        <Edit path = "/edit/:id" />
        <Create path="/" />
      </Router>
    </div>
  );
}

export default App;




// What I did: Combined the "create product" page and the "view all products" page onto the main page. 

// What happened and what i want: 1) The Form values dont clear upon submitting, and wont re-render the page with the updated list of products, which is what i want



// What I want II: The "show" route works (if you manually punch in the url with the proper ID, it'll display the card), i need to create links on the main page for each product already made to do just that.