import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Nav: links to jobs, companies and homepage
 *
 *  Props:
 *  - logout fn
 *
 * App -> Nav -> {Homepage / , CompanyList /companies , JobsList /jobs
 *                SignupForm /signup, LoginForm /login, ProfileForm /profile}
 */

function Nav({ logout }) {
  const { currUser } = useContext(userContext);
  console.log("In Nav", currUser);
  //TODO: dosen't work when invalid username/password is submitted
  return (
    <div className="Nav navbar navbar-expand-sm">
      <nav>
        {currUser.data !== null ? (
          <div className="container-fluid">
            <ul className="navbar-nav">
              <NavLink className="navbar-brand" to={`/`}>
                Jobly
              </NavLink>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/companies`}>
                  Companies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/jobs`}>
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/profile`}>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/`} onClick={logout}>
                  Log out {currUser.data.username}
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="container-fluid">
            <ul className="navbar-nav">
              <NavLink className="navbar-brand" to={`/`}>
                Jobly
              </NavLink>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/login`}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/signup`}>
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
