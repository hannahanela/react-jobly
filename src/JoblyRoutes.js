import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./ComapnyList";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** JoblyRoutes: handles routes to the components in Jobly app
 *
 * App -> JoblyRoutes -> {Homepage, CompanyList, CompanyDetails, JobList }
 */

function JoblyRoutes({ updateUser, login, signup }) {
  console.log("In JoblyRoutes");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:name" element={<CompanyDetails />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm login={login} />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route
        path="/profile"
        element={<ProfileForm updateUser={updateUser} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default JoblyRoutes;
