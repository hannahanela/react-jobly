import React, { useState } from "react";

/** ProfileForm: renders basic Profile box.
 *
 *  Props:
 *  - Profile fn: calls parent function to filter API request
 *
 *  { CompanyList, JobList } -> ProfileForm
 */

function ProfileForm({ Profile }) {
  const initialState = {};
  const [formData, setFormData] = useState(initialState);
  console.log("In ProfileForm", "State:", formData);

  /**handelChange : updates form input  */
  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("In handleChange", "name", name, "value", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }
  /** handleSubmit : calls parent function to Profile for results */
  function handleSubmit(evt) {
    console.log("In handleSubmit=", formData.Profile);
    evt.preventDefault();
    Profile(formData.Profile);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username" //TODO: add a feature to make it (can't change)
        placeholder="Enter username"
        onChange={handleChange}
      />
      <input
        password="first-name"
        placeholder="Entir first" //TODO: add in value (user info)
        onChange={handleChange}
      />
      <input
        password="last-name"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <input
        password="email"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <button>Save Changes</button>
    </form>
  );
}

export default ProfileForm;
