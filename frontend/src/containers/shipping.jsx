import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import Empty from "../componets/default/Empty";
import { clearCarts, fetchCarts } from "../redux/cart/operations";
import { getCarts } from "../redux/cart/selectors";
import { clearCheckoutOrderErrorAction } from "../redux/order/actions";
import { checkoutOrder } from "../redux/order/operations";
import { getOrders } from "../redux/order/selectors";
import { getUser } from "../redux/users/selectors";
import Header from "../componets/header";
const Shipping = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const user = getUser(selector);
    const errors = getOrders(selector).errors;
    const history = useHistory();
    const carts = getCarts(selector);
    const [isLoading, setIsLoading] = useState(false);
    const isEmpty = carts.results && carts.results.length > 0 ? false : true;


    useEffect(() => {
        dispatch(fetchCarts());
        // eslint-disable-next-line
    }, []);

    const order_items = carts.results.map((cart) => {
        return {
            qty: cart.quantity,
            product: cart.product.id,
        };
    });

    const initialValues = {
        customer_name: user.name,
        customer_phone: "",
        address: "",
        pin_code: "",
        building_type: "",
        city: "",
        state: "",
    };
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmitCheckout = () => {
        setIsLoading(true);
        dispatch(
            checkoutOrder(
                { ...values, total_price: carts.totalPrice, total_qty: carts.totalCartItems, order_items },
                () => {
                    history.push("/thank-you");
                    dispatch(clearCheckoutOrderErrorAction());
                    dispatch(clearCarts());
                }
            )
        );

        setIsLoading(false);
    };

    return (
        <>
            <Header totalCart={carts.totalCart} />
            <div class="shiping-section">
                <div class="invoice-area">
                    <p class="invoice-heading">My items Details</p>
                    {isEmpty ? (
                        <>
                            <p>Cart is empty. Please go to shopping in order to add product to cart.</p>
                            <button onClick={() => history.push("/")} className="custom-btn">
                                Go to Shopping
                            </button>
                        </>
                    ) : (
                        <>
                            <p class="invoice-subheading">Please check your items and confirm it </p>

                            <div class="invoice-box">
                                <div class="invoice-top-area">




                                    {carts.results && carts.results.length > 0 ? (
                                        carts.results.map((cart) => {
                                            return (
                                                <div class="invoice-row">
                                                    <span class="name">{cart.product.name}</span>
                                                    <span class="qty">{cart.quantity}</span>
                                                    <span class="price">${cart.product.price}</span>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <Empty />
                                    )}


                                </div>
                                <div class="invoice-bottom-area">
                                    <div class="invoice-row">
                                        <span style={{ paddingLeft: '15%', fontWeight: 'bold' }} class="name">Total Price</span>
                                        <span class="qty">{carts.totalCartItems}</span>
                                        <span class="price">${carts.totalPrice}</span>
                                    </div>
                                </div>
                            </div>


                            <div class="form-area">
                                <div class="input-area">
                                    <span class="input-label">Full name</span>
                                    <input onChange={handleInputChange}
                                        value={values.customer_name}
                                        name="customer_name"
                                        className="input"
                                        type="text"
                                        placeholder="Enter Recipient's name" />
                                </div>
                                {errors.customer_name ? (
                                    <span className="mb-3 error-text">{errors.customer_name[0]}</span>
                                ) : null}

                                <div class="input-area">
                                    <span class="input-label">Phone Number</span>
                                    <input onChange={handleInputChange}
                                        value={values.customer_phone}
                                        name="customer_phone"
                                        className="input"
                                        type="text"
                                        placeholder="Enter Phone Number" />
                                </div>

                                {errors.customer_phone ? (
                                    <span className="mb-3 error-text">{errors.customer_phone[0]}</span>
                                ) : null}

                                <div class="input-area">
                                    <span class="input-label">Street address or P.O. Box</span>
                                    <input onChange={handleInputChange}
                                        value={values.address}
                                        name="address"
                                        className="input"
                                        type="text"
                                        placeholder="Enter Street address or P.O. Box"
                                    />
                                </div>
                                {errors.address ? <span className="mb-3 error-text">{errors.address[0]}</span> : null}


                                <div class="input-area">
                                    <span class="input-label">PIN Code</span>
                                    <input onChange={handleInputChange}
                                        value={values.pin_code}
                                        name="pin_code"
                                        className="input"
                                        type="text"
                                        placeholder="Enter PIN Code" />
                                </div>
                                {errors.pin_code ? <span className="mb-3 error-text">{errors.pin_code[0]}</span> : null}


                                <div class="input-area">
                                    <span class="input-label">Apt, suite, unit, building, floor, etc.</span>
                                    <input
                                        onChange={handleInputChange}
                                        value={values.building_type}
                                        name="building_type"
                                        className="input"
                                        type="text"
                                        placeholder="Enter Apt, suite, unit, building, floor, etc."
                                    />
                                </div>
                                {errors.building_type ? (
                                    <span className="mb-3 error-text">{errors.building_type[0]}</span>
                                ) : null}

                                <div class="input-area">
                                    <span class="input-label">City</span>
                                    <input
                                        onChange={handleInputChange}
                                        value={values.city}
                                        name="city"
                                        className="input"
                                        type="text"
                                        placeholder="Enter City" />
                                </div>
                                {errors.city ? <span className="mb-3 error-text">{errors.city[0]}</span> : null}



                                <div class="input-area">
                                    <span class="input-label">State</span>
                                    <input class="input" type="text"
                                        onChange={handleInputChange}
                                        value={values.state}
                                        name="state"
                                        className="input"
                                        type="text"
                                        placeholder="Enter State" />
                                </div>
                                {errors.state ? <span className="mb-3 error-text">{errors.state[0]}</span> : null}

                                <div class="button-area">
                                    <button onClick={onSubmitCheckout}>
                                        {isLoading ? "Submitting the order..." : "Confirm and submit"}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                </div>
                )
            </div>
        </>
    )
}

export default Shipping;