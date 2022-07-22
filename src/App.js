import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import JoblyRoutes from "./JoblyRoutes";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";

const DEFAULT_USER = null;

/** App : handles rendering the navigation bar
 *
 *  State:
 *  - currUser: { username, firstName, lastName, isAdmin, jobs }
 *        where jobs is { id, title, companyHandle, companyName, state }
 *  - token
 *
 *  Context:
 *  - userData: first name, username, apply/applied
 *
 * App ->{Nav, JoblyRoutes}
 */

function App() {
  const [currUser, setCurrUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState("");
  console.log("In App", "state:", currUser, token);

  useEffect(
    function getUserDataWithToken() {
      async function fetchUserDataWithToken() {
        //destructure decoded {username}
        let decoded = jwt_decode(token);
        let userResult = await JoblyApi.getUserData(decoded.username, token);
        setCurrUser(userResult);
      }
      if (token !== "") {
        fetchUserDataWithToken();
      }
    },
    [token]
  );

  /** Login a user and update token. */

  async function login(username, password) {
    let newToken = await JoblyApi.getTokenForCurrUser(username, password);
    setToken(newToken);
  }

  /** Logout a user and remove token. */
  function logout(evt) {
    evt.PreventDefault();
    setCurrUser(DEFAULT_USER);
    setToken("");
  }

  /** Signup a new user and update token. */
  // will be passed an object ******
  async function signup(userData) {
    let newToken = await JoblyApi.getTokenForNewUser(userData);
    setToken(newToken);
  }

  /** editProfile takes user data changes user information to
   * the newly inputted ones
   */
  async function editProfile(userData) {
    let updatedUser = await JoblyApi.updateUser(userData, token);
    setCurrUser(updatedUser);
  }

  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={{ currUser }}>
          <BrowserRouter>
            <Nav logout={logout} editProfile={editProfile} />
            <JoblyRoutes
              editProfile={editProfile}
              login={login}
              signup={signup}
            />
          </BrowserRouter>
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
