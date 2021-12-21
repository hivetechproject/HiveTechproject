import logo from './logo.svg';
import './App.css';
import './style2.css'
import './style.css';
import './assets/css/homepage.css';
import './assets/css/cart.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFromLocalStorage } from './redux/users/operations';
import { getUser } from './redux/users/selectors';
import { getCarts } from './redux/cart/selectors';

//components
import landing from './containers/landing';
import Homepage from './containers/home';
import Shipping from './containers/shipping';
import Signup from './containers/signup';
import Header from './componets/header';
import Fotter from './componets/footer';
import Cart from './containers/cart';
import Signin from './containers/signin';
import ThankYou from './containers/thankyou';
import Products from './containers/Products';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const carts = getCarts(selector);
  const token = user ? user.token : null;
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={token ? Homepage : landing} />
        <Route exact path='/checkout' component={Shipping} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/thank-you' component={ThankYou} />
        <Route exact path='/product' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <Fotter />
    </Router>

  );
}

export default App;
