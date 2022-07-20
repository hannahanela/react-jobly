import { Link } from "react-router-dom";

/** Nav: links to jobs, companies and homepage
 *
 *
 *
 *
 * App -> Nav
 */
//TODO: when active make it a different color using NavLink!

function Nav() {
  return (
    <div>
      <nav className="NavBar">
        <Link to={`/`}> Jobly </Link>
        <Link to={`/companies`}> Companies</Link>
        <Link to={`/jobs`}> Jobs </Link>
      </nav>
    </div>
  );
}

export default Nav;
