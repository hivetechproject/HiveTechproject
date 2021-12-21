import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { clearErrorsAction, signUpError } from "../redux/users/actions";
import { signUp } from "../redux/users/operations";
import { getUser } from "../redux/users/selectors";
import Header from "../componets/header";
const Signup = () => {
    const history = useHistory();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        if (values.password !== values.password_confirmation) {
            dispatch(signUpError({ password_confirm: ["Password are not the same."] }));
            return;
        }

        setIsLoading(true);
        dispatch(
            signUp(values, () => {
                history.push({ pathname: "/", search });
                dispatch(clearErrorsAction());
            })
        );
        setIsLoading(false);
    };

    return (
        <>
            <Header />
            <div class="signup-section">

                <span id="signup-text">SIGN UP</span>
                <form onSubmit={onSubmitSignUp} class="form-area">
                    <div class="input-area">
                        <span class="input-label">Name</span>
                        <input required onChange={handleInputChange} placeholder="Name" name='name' class="input" type="text" />
                    </div>

                    <div class="input-area">
                        <span class="input-label">Email</span>
                        <input required onChange={handleInputChange} class="input" name="email" type="text" />
                    </div>

                    <div class="input-area">
                        <span class="input-label">Password</span>
                        <input required onChange={handleInputChange} class="input" type="text" name="password" />
                    </div>

                    <div class="input-area">
                        <span class="input-label">Confirm Password</span>
                        <input required onChange={handleInputChange} class="input" name="password_confirmation" type="text" />
                    </div>

                    {errors.password_confirm ? (
                        <span className="error-text">{errors.password_confirm[0]}</span>
                    ) : null}


                    <div class="button-area" >
                        <button type="submit">	{isLoading ? "SIGNING UP..." : "SIGN UP"}</button>
                    </div>

                    <p id="already-text">
                        Have an Account ?
                        <a style={{ textDecoration: 'none', color: '#000' }}>Sign in</a>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Signup;