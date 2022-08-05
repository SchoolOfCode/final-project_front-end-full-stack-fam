import React from "react";
import {useState} from "react";
import "./SignupForm.css";

export default function SignupForm() {

    const [signUpValues, setsignUpVales] = useState ({
        parentName: "",
        email: "",
        password: "",
        parent4DigitPassword: "",
        childsName: ""
    });

    function handleFormSubmit (event) {
        event.preventDefault();
    }

    function handleChange (event) {
        setsignUpVales({
            ...signUpValues,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Parent's Full Name</label>
                        <input className="input" type="text" name="parentName" value={signUpValues.parentName} onChange={handleChange}/>
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={signUpValues.email}onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" name="password" value={signUpValues.password} onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label className="label">Parent Dashboard 4 Digit Pin</label>
                        <input className="input" type="text" name="parent4DigitPassword" value={signUpValues.parent4DigitPassword}onChange={handleChange}/>
                    </div>
                    <div className="name">
                        <label className="label">Child's Name</label>
                        <input className="input" type="text" name="childsName" value={signUpValues.childsName}onChange={handleChange}/>
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
