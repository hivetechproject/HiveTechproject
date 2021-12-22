import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Cart from './containers/cart';
import Checkout from './containers/shipping';
import Homepage from './containers/Homepage';
import Landing from './containers/landing';
import SignIn from './containers/signin';
import SignUp from './containers/signup';
import ThankYou from './containers/thankyou';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getUser } from './reducks/users/selectors';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        // eslint-disable-next-line
    }, []);


    return (
        <Switch>
            <Route exact path={"/"} component={token ? Homepage : Landing} />
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/checkout"} component={Checkout} />
            <Route exact path={"/thankyou"} component={ThankYou} />
        </Switch>
    );
};
export default Router;
