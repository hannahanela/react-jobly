import { NavLink } from "react-router-dom";

/** Nav: links to jobs, companies and homepage
 *
 *
 *
 *
 * App -> Nav -> {Homepage / , CompanyList /companies , JobsList /jobs }
 */

function Nav() {
  console.log("In Nav");

  return (
    <div>
      <nav className="NavBar">
        <NavLink to={`/`}> Jobly </NavLink>
        <NavLink to={`/companies`}> Companies</NavLink>
        <NavLink to={`/jobs`}> Jobs </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
