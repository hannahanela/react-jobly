import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import JoblyRoutes from "./JoblyRoutes";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
/** App : handles rendering the navigation bar
 *
 *  State:
 *  - currUser: { TODO: user object }
 *  - token
 *
 *  Context:
 *  - userData: first name, username, apply/applied
 *
 * App ->{Nav, JoblyRoutes}
 */
const DEFAULT_USER = "";

function App() {
  //{useanme ; fstname ;lastname ;passpwrd ,email}
  const [currUser, setCurrUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState("");
  console.log("In App", "state:", currUser, token);

  //useEffect will change the user using the token ? to update user
  // TODO: username input value from form
  useEffect(
    function getUserDataWithToken() {
      async function fetchUserDataWithToken() {
        var decoded = jwt_decode(token);
        let userResult = await JoblyApi.getUserData(decoded.username, token);
        setCurrUser(userResult);
      }
      fetchUserDataWithToken();
    },
    [token]
  );

  // FIXME: what's going on with our currUser context??

  /** Login a user and update token. */

  function login(username, password) {
    async function fetchTokenFromLogin() {
      try {
        let newToken = await JoblyApi.getTokenForCurrUser(username, password);
        setToken(newToken);
      } catch (err) {
        // TODO render error
      }
    }
    fetchTokenFromLogin(username, password);
  }

  /** Logout a user and remove token. */
  function logout(evt) {
    evt.PreventDefault();
    // handle click
    setToken("");
  }

  /** Signup a new user and update token. */
  // will be passed an object ******
  function signup(userData) {
    async function fetchTokenWithSignup(userData) {
      try {
        let newToken = await JoblyApi.getTokenForNewUser(userData);
        setToken(newToken);
        // TODO: render error
      } catch (err) {}
    }
    fetchTokenWithSignup(userData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={{ currUser }}>
          <BrowserRouter>
            <Nav logout={logout} />
            <JoblyRoutes
              // updateUser={updateUser}
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
