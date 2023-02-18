import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/** loginForm: renders basic login box.
 *
 *  states:
 * //TODO: update states (form data)
 *  = error : an array of error messages
 *
 *  Props:
 *  - login fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> loginForm
 */

function LoginForm({ login }) {
  const navigate = useNavigate();
  const initialState = { username: "", password: "" };
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
      setFormData(initialState);
      navigate("/companies");
      console.log("passed navigate to /companies");
    } catch (err) {
      console.log("err=", err);
      setError(err);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container col-md-6">
        <h2 className="display-2 mb-4">Login</h2>
        <Card bg="dark">
          <Form className="row m-3" onSubmit={handleSubmit}>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                value={formData.username}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                placeholder="Enter password"
                type="password"
                onChange={handleChange}
                value={formData.password}
              />
            </Form.Group>
            {error.length !== 0 && <Alert error={error} />}
            <div className="mt-3 mb-2">
              <Button variant="custom" type="submit">Submit</Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default LoginForm;
