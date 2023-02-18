import React, { useContext } from "react";
import userContext from "./userContext";
import "./Homepage.css";

/** Homepage : it renders a welcome homepage
 *
 * JoblyRoutes -> Homepage
 */

function Homepage() {
  console.log("In Homepage");
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage text-center">
      <h1 className="display-1">Jobly</h1>
      {currentUser.isLoggedIn ? (
        <div className="homepage-headers">
          <h2 className="lead">All the jobs in one, convenient place.</h2>
          <h2> Welcome back, {currentUser.data.firstName} </h2>
        </div>
      ) : (
        <div className="homepage-headers">
          <h2 className="lead">All the jobs in one, convenient place.</h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
