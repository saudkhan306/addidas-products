import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { addidasData } from './csvjson';
import Listing from './componants/addidas/Listing';
import ProductDetail from './componants/addidas/ProductDetail';
import { Link, Route, Switch } from 'react-router-dom';
import {useState} from "react"
import Cart from './componants/Cart';


function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCart,setIsCart] = useState(false)

  const updateWishlist=(val)=>{
    if(wishlist.find(wishData => wishData.productId === val)) {
      setWishlist(wishlist.filter(c=>c.productId !== val))
    }
    else {
      setWishlist([...wishlist, addidasData.find(wishData => wishData.productId == val)])
    }
  }
  const updateCart = (cartVal) => {
    console.log(cartVal)
    if(cart.find(cartData => cartData.productId === cartVal)) setCart(cart.filter(e=>e.productId !== cartVal))
    else setCart([...cart, addidasData.find(cartData => cartData.productId === cartVal)])
  }
  
  return <>
      <header className="bg-dark py-3 text-white text-center">
        <div className="container">
          <div className="d-flex w-100 justify-content-between">
            <div className="welcome-text">
              <Link to="/" className="btn btn-light btn-sm me-3">Home</Link>
              <span>Welcome to Addidas Products</span>
            </div>
            <div className="buttons">
              <Link className='button' to='/wishlist'>
                <i className="far fa-heart"></i>
                <span>{wishlist.length}</span>
              </Link>
              <Link className='button' to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Switch>
        <Route exact path="/" render={(props) => 
          <Listing wishlist={wishlist} updateWishlist={updateWishlist} updateCart={updateCart} cart={cart} addidasData={addidasData} />}
        />
        
        <Route exact path="/cart" render={(props) => 
          <Cart wishlist={wishlist} updateWishlist={updateWishlist} updateCart={updateCart} data={cart} isCart={true} />}
        />
        <Route exact path="/wishlist" render={(props) => 
          <Cart wishlist={wishlist} updateWishlist={updateWishlist} data={wishlist} updateCart={updateCart} isCart={false} />}
        />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
      <footer className="bg-dark py-3 text-center text-white">Footer</footer>
  </>
}

export default App;
