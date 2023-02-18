import React from "react";
import "./Alert.css";

/** Alert: displays error messages for incorrect form inputs.
 *
 *  Props:
 *  - errors [ error messages ]
 *
 *  { LoginForm, ProfileForm, SignupForm } -> Alert
 */ //TODO: replace with errors
function Alert({ error }) {
  return (
    // TODO: assuming all errors are red
    <div className="Alert mt-3">
      <div className="alert alert-danger">
        {error.map((e, idx) => (
          <p key={idx}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default Alert;
