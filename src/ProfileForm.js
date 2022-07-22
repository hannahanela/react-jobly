import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";

/** ProfileForm: renders basic Profile box.
 * //TODO: update docstring formdata
 * states:
 *  = error : an array of error messages
 *
 *  Props:
 *  - editProfile fn: calls parent function to update currUser using an
 *    API request
 *
 *  context:
 *  - currUser : currently logged in user (object)
 *
 *  { CompanyList, JobList } -> ProfileForm
 */

function ProfileForm({ editProfile }) {
  const navigate = useNavigate();
  const { currUser } = useContext(userContext);
  const initialState = currUser;
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState([]);

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
  async function handleSubmit(evt) {
    console.log("In handleSubmit=", formData);
    evt.preventDefault();
    try {
      await editProfile(formData);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
        disabled="disabled"
      />
      <input
        name="firstName"
        placeholder="Enter first name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        placeholder="Enter last name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      {error.length !== 0 && <Alert error={error} />}
      <button>Save Changes</button>
    </form>
  );
}

export default ProfileForm;
