import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Listing from './componants/addidas/Listing';
import ProductDetail from './componants/addidas/ProductDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return <>
      <header className="bg-dark py-3 text-white text-center">Welcome to Addidas Products</header>
      <Switch> 
        <Route exact path="/" component={Listing} />
        <Route exact path="/products:id" component={ProductDetail} />
      </Switch>
      <footer className="bg-dark py-3 text-center text-white">Footer</footer>
  </>
}

export default App;
