import React, { useState } from "react";

/** SearchForm: renders basic search box.
 *
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SignupForm({ signup }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
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
  function handleSubmit(evt) {
    console.log("In handleSubmit=", formData.SignUp);
    evt.preventDefault();
    signup(formData);
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
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
