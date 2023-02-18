import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";

/** JoblyRoutes: handles routes to the components in Jobly app
 *
 *  Props:
 *  - login fn
 *  - signup fn
 *  - editProfile
 *
 * App -> JoblyRoutes -> {Homepage, CompanyList, CompanyDetails, JobList }
 */

// TODO: redirect to same page when refreshing while logged in

function JoblyRoutes({ login, signup, editProfile }) {
  console.log("In JoblyRoutes");
  const { currUser, token } = useContext(userContext);
  

  return (
    <div className="jobly-routes">
      {currUser.isLoggedIn === true ? (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/profile"
            element={<ProfileForm editProfile={editProfile} />}
          />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:name" element={<CompanyDetails />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
}

export default JoblyRoutes;
