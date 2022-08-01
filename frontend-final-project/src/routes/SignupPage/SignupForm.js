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
    })



    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Parent's Full Name</label>
                        <input className="input" type="text" value={signUpValues.parentName} />
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" value={signUpValues.email} />
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="password" value={signUpValues.password} />
                    </div>
                    <div className="password">
                        <label className="label">Parent Dashboard 4 Digit Pin</label>
                        <input className="input" type="text" value={signUpValues.parent4DigitPassword} />
                    </div>
                    <div className="name">
                        <label className="label">Child's Name</label>
                        <input className="input" type="text" value={signUpValues.childsName}/>
                    </div>
                    <div>
                        <button className="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
