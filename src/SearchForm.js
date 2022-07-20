import React ,{ useState } from "react";

/** SearchForm: renders basic search box.
 * 
 *  Props:
 *  - search fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ search }) {
  const initialState = {name: ""};
  const [formData, setFormData] = useState(initialState);
  console.log("In SearchForm", "State:",formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    console.log("In handleSubmit", formData);
    evt.preventDefault();
    search(formData.search);
    setFormData(initialState);
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
