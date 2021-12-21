import React, { useEffect } from "react";
import Cartcard from "../componets/Cartcard";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchCarts } from '../redux/cart/operations';
import { getCarts } from '../redux/cart/selectors';
import { clearCheckoutOrderErrorAction } from '../redux/order/actions';
import Header from "../componets/header";
const Cart = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const carts = getCarts(selector);
    const history = useHistory();
    const isEmpty = carts.results && carts.results.length > 0 ? false : true;

    useEffect(() => {
        dispatch(fetchCarts());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header totalCart={carts.totalCart} />
            <section>
                <div className="cartcontainer">
                    <div style={{ marginTop: 20 }} className="title">
                        <h2>My Cart</h2>

                        {isEmpty && (
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alighItems: 'center', flexDirection: 'column' }}>
                                <p style={{ textAlign: 'center' }}>Cart is empty. Please go to shopping in order to add product to cart.</p>
                                <button onClick={() => history.push("/")} style={{ margin: '20px auto' }} className="custom-btn">
                                    Go to Shopping
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="cartbox">

                        {!isEmpty && carts.results.map((cart) => <Cartcard key={cart.id} cart={cart} />)}
                    </div>
                    <br /><br />
                    <div className="subtotla">
                        <div className="checkout">
                            <p>SUBTOTAL:<span className="amount">{carts.totalPrice}</span></p>
                            <p>{carts.totalCart} <span>-ITEMS</span></p>
                            <button className="custom-btn"
                                onClick={() => {
                                    history.push("/checkout");
                                    dispatch(clearCheckoutOrderErrorAction());
                                }}
                                type="submit">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;