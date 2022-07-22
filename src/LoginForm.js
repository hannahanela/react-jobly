import React, { useState } from "react";
import Alert from "./Alert";

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
  const [error, setError] = useState([]);
  console.log("In LoginForm", "State:", formData, error);

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
  async function handleSubmit(evt) {
    console.log("In handleSubmit=", formData);
    evt.preventDefault();
    try {
      await login(formData.username, formData.password);
    } catch(err) {
      console.log("err=", err);
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
        password="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {error.length !== 0 && <Alert error={error} />}
      <button>Submit</button>
    </form>
  );
}

export default LoginForm;
