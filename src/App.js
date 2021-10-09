
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, withRouter } from 'react-router';
import Home from "./Pages/Home/Home"
import NotFound from './Pages/NotFound/NotFound';
import AuthPage from './Pages/AuthPage/AuthPage';
import Shop from './Pages/Shop/Shop';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import CartPage from './Pages/CartPage/CartPage';
import Wishlist from './Pages/Wishlist/Wishlist';
import Checkout from './Pages/Checkout/Checkout';
import Invoice from './Pages/InvoicePage/Invoice';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import UserAccount from './Pages/UserAccount/UserAccount';
import { useEffect, useRef } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
function App(props) {
  const navRef = useRef(0);
  const {location} = props;
  useEffect(()=>{
    navRef.current.scrollIntoView();
  },[location])
  const user = useSelector((state)=> state.user.user,shallowEqual)
  return (
    <div className="App"  >
      <div className=""ref={navRef}></div>
        <Navbar />
        <Switch>
          <Route path="/auth" component={()=> <AuthPage user={user}/>} />
          <Route path="/" component={Home} exact/>
          <Route path="/shop" component={Shop}/>
          <Route path="/single-product/:productID" component={SingleProduct}/>
          <Route path="/cart" component={CartPage}/>
          <Route path="/wishlist" component={Wishlist}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/invoice/:invoiceID" component={Invoice} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user-account/:userID" component={UserAccount} />

          <Route component={NotFound}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default withRouter(App);
