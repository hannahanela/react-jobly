import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignupForm.css";

/** SearchForm: renders basic search box.
 *
 *  States:
 *  = error : an array of error messages
 *  - formData :
 *
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  //TODO: update intialstate
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
      navigate("/companies");
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className="SignupForm">
      <div className="container col-md-6">
        <h2 className="display-2 mb-4">Sign Up</h2>
        <Card bg="dark">
          <Form className="row m-3" onSubmit={handleSubmit}>
            <Form.Group className="mt-2 mb-3">
              <Form.Label className="">Username</Form.Label>
              <Form.Control
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mt-2 mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
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

export default SignupForm;
