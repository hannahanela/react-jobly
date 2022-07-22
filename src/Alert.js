import React from "react";

/** Alert: displays error messages for incorrect form inputs.
 * 
 *  Props:
 *  - errors [ error messages ]
 * 
 *  { LoginForm, ProfileForm, SignupForm } -> Alert
 */
function Alert({ error }){

    return (
        <div className="alert alert-danger">
            {error.map((e, idx) => <p key={idx}>{e}</p>)}
        </div>
    )
}

export default Alert;