import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Nav: links to jobs, companies and homepage
 *
 *  Props:
 *  - logout fn
 *
 * App -> Nav -> {Homepage / , CompanyList /companies , JobsList /jobs }
 */

function Nav({ logout }) {
  console.log("In Nav");
  const { currUser } = useContext(userContext);

  return (
    <div>
      <nav className="NavBar">
        {currUser ? (
          <div>
            <NavLink to={`/`}> Jobly </NavLink>
            <NavLink to={`/companies`}> Companies</NavLink>
            <NavLink to={`/jobs`}> Jobs </NavLink>
            <NavLink to={`/profile`}> Profile </NavLink>
            <NavLink to={`/`} onClick={logout}>
              Log out {currUser.username}
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to={`/login`}>Login</NavLink>
            <NavLink to={`/signup`}>Signup</NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
