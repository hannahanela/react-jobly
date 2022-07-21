import React, { useState } from "react";

/** loginForm: renders basic login box.
 *
 *  Props:
 *  - login fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> loginForm
 */

function LoginForm({ login }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
  console.log("In LoginForm", "State:", formData);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** handleSubmit : calls parent function to login for results */
  function handleSubmit(evt) {
    console.log("In handleSubmit=", formData);
    evt.preventDefault();
    login(formData.username, formData.password);
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
        password="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
