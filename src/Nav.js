import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Nav: links to jobs, companies and homepage
 *
 *  Props:
 *  - logout fn
 *
 * App -> Nav -> { Homepage / , CompanyList /companies , JobsList /jobs
 *                SignupForm /signup, LoginForm /login, ProfileForm /profile }
 */

function Nav({ logout }) {
  const { currentUser } = useContext(userContext);
  console.debug("<Nav>", currentUser);

  function loggedIn(user) {
    return (
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
              Log out {user.username}
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }

  function loggedOut() {
    return (
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
    )
  }

  return (
    <div className="Nav navbar navbar-expand-sm">
      <nav>
        {currentUser.data !== null ? (
          loggedIn(currentUser.data)
        ) : (
          loggedOut()
        )}
      </nav>
    </div>
  );
}

export default Nav;
