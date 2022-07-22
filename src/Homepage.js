import "./App.css";
import React from "react";
import { useContext } from "react";
import userContext from "./userContext";

/** Homepage : it renders a welcome homepage
 *
 * JoblyRoutes -> Homepage
 */

function Homepage() {
  console.log("In Homepage");
  const { currUser } = useContext(userContext);

  return (
    <div>
      {currUser ? (
        <div>
          <h1>Jobly</h1>
          <h2>All the jobs in one, convenient place.</h2>
          <h1> Welcome back, {currUser.firstName} </h1>
        </div>
      ) : (
        <div>
          <h1>Jobly</h1>
          <h2>All the jobs in one, convenient place.</h2>
        </div>
      )}
    </div>
  );
}

export default Homepage;
