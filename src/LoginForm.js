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
  console.log("In loginForm", "State:", formData);

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
    console.log("In handleSubmit=", formData.login);
    evt.preventDefault();
    let user = create(formData.username);
    updateUser(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="login" //TODO: loginTerm
        placeholder="Enter username"
        onChange={handleChange}
      />
      <input
        password="password" //TODO: loginTerm
        placeholder="Enter password"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
