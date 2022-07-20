import React, { useState } from "react";

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
    console.log("In handleSubmit=", formData.search);
    evt.preventDefault();
    search(formData.search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder="Enter search term"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
