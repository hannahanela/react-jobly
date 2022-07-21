import React, { useState } from "react";

/** SearchForm: renders basic search box.
 *
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SignupForm({ SignUp }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
  console.log("In SignUpForm", "State:", formData);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function createUser(username) {
    /// call api to create a user
    /// return a user { ;;;}
  }

  /** handleSubmit : calls parent function to SignUp for results */
  function handleSubmit(evt) {
    console.log("In handleSubmit=", formData.SignUp);
    evt.preventDefault();
    let user = createUser(formData);
    SignUp(formData.SignUp);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Enter SignUp term"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Enter SignUp term"
        onChange={handleChange}
      />
      <input
        name="first-name"
        placeholder="Enter SignUp term"
        onChange={handleChange}
      />
      <input
        name="last-name"
        placeholder="Enter SignUp term"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter SignUp term"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SignupForm;
