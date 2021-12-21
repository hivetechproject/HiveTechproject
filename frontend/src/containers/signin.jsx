import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import { clearErrorsAction } from "../redux/users/actions";
import { signIn } from "../redux/users/operations";
import { getUser } from "../redux/users/selectors";

import Header from "../componets/header";
const Signin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { search } = useLocation();
    const selector = useSelector((state) => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        email: "",
        password: "",
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };


    const onSubmitSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        dispatch(
            signIn(values, () => {
                history.push({ pathname: "/", search });
                dispatch(clearErrorsAction());
            })
        );
        setIsLoading(false);
    };

    return (
        <>
            <Header />
            <section>
                <div class="signinbox">
                    <h3>SIGN IN</h3>
                    <form onSubmit={onSubmitSignIn}>
                        <label for="email">Email Address</label><br />
                        <input type="email"
                            onChange={handleInputChange}
                            name="email"
                            placeholder="Enter Email" /><br /><br />
                        <label for="password">Password</label><br />
                        <input value={values.password} name="password"
                            onChange={handleInputChange} type="password" placeholder="Enter Password" /><br /><br />
                        {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
                        {errors.error ? <span className="error-text">{errors.error}</span> : null}
                        <br />
                        <br />

                        <button type="submit">
                            {isLoading ? "SIGNING IN..." : "SIGN IN"}
                        </button>
                    </form>
                    <p>New Customer ? <Link to={{ pathname: "sign-up", search }}>Register</Link></p>
                </div>
            </section>
        </>
    )
}

export default Signin;