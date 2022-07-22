import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";

/** ProfileForm: renders basic Profile box.
 *
 *  Props:
 *  - editProfile fn: calls parent function to update currUser using an
 *    API request
 *
 *  { CompanyList, JobList } -> ProfileForm
 */

function ProfileForm({ editProfile }) {
  const { currUser } = useContext(userContext);
  const initialState = currUser;
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
    console.log("In handleSubmit=", formData);
    evt.preventDefault();
    editProfile(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username" //TODO: add a feature to make it (can't change)
        placeholder="Enter username"
        value={currUser.username}
        onChange={handleChange}
        disabled="disabled"
      />
      <input
        name="firstName"
        placeholder="Enter first name"
        value={currUser.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Enter last name"
        onChange={handleChange}
        value={currUser.lastName}
      />
      <input
        password="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={currUser.email}
      />
      <button>Save Changes</button>
    </form>
  );
}

export default ProfileForm;
