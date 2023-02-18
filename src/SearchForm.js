import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

/** SearchForm: renders basic search box.
 *
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ search }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
  console.log("In SearchForm", "State:", formData);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }
  /** handleSubmit : calls parent function to search for results */
  function handleSubmit(evt) {
    console.log("In handleSubmit=", formData.searchTerm);
    evt.preventDefault();
    search(formData.searchTerm);
  }

  return (
    <div className="SearchForm mt-2">
      <Form className="row" onSubmit={handleSubmit}>
        <Form.Group className="col-md-10">
          <Form.Control
            className="form-control form-control-lg"
            name="searchTerm"
            placeholder="Enter search term"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="col-md-2 justify-content-end align-self-center">
          <Button variant="custom" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default SearchForm;
