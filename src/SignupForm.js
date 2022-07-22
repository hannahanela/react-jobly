import React, { useState } from "react";
import Alert from "./Alert";

/** SearchForm: renders basic search box.
 *
 *  State:
 *  - error
 *
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SignupForm({ signup }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState([]);
  console.log("In SignUpForm", "State:", formData);
  console.log("in signupForm", "signup = ", signup);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** handleSubmit : calls parent function to SignUp for results */
  async function handleSubmit(evt) {
    console.log("In handleSubmit=", formData.SignUp);
    evt.preventDefault();
    try {
      await signup(formData);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Enter username"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="Enter first name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Enter last name"
        onChange={handleChange}
      />
      <input name="email" placeholder="Enter email" onChange={handleChange} />
      {error.length !== 0 && <Alert error={error} />}
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
