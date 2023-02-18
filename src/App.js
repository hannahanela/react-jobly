import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import RoutesList from "./RoutesList";
import userContext from "./userContext";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';

const DEFAULT_USER = { data: null, isLoggedIn: false };

/** App : handles rendering the navigation bar
 *
 *  State:
 *  - currentUser: { data:{username, firstName, lastName, isAdmin, jobs}, isLoggedIn }
 *        where jobs is { id, title, companyHandle, companyName, state }
 *  - token
 *
 *  Context:
 *  - currentUser
 *
 * App ->{Nav, RoutesList}
 */
function App() {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );
  console.log("In App", "state:", currentUser, token);

  useEffect(
    function loadUserData() {
      async function getCurrentUser() {
        if (token) {
          try {
            const storedToken = localStorage.getItem("token");
            let { username } = jwt_decode(storedToken);
            let userResult = await JoblyApi.getUserData(
              username,
              storedToken
            );

            setCurrentUser((currentUser) => ({
              ...currentUser,
              data: userResult,
              isLoggedIn: true
            }));
          } catch(err) {
            console.error("Problem loading", err);
            setCurrentUser({
              data: null,
              isLoggedIn: false
            });
          }
        } else {
          setCurrentUser({
            data: null,
            isLoggedIn: false
          });
        }
      }
      getCurrentUser();
    },
    [token]
  );

  /** Login a user and update token. */
  async function login(username, password) {
    console.log("entered login");
    let newToken = await JoblyApi.getTokenForCurrentUser(username, password);
    console.log("newToken=", newToken);
    localStorage.setItem("token", `${newToken}`);
    // token = localStorage.getItem("token");
    // console.log("token=", token);
    setToken(newToken);
    setCurrentUser((currentUser) => ({
      ...currentUser,
      isLoggedIn: true,
    }));
  }

  /** Logout a user and remove token. */
  function logout(evt) {
    console.log("INSIDE LOGOUT!!!!");
    evt.preventDefault();
    localStorage.setItem("token", undefined);
    setToken(undefined);
    console.log("remove token?", localStorage.getItem("token"));
    setCurrentUser((currentUser) => ({
      ...currentUser,
      data: null,
      isLoggedIn: false,
    }));
  }

  /** Signup a new user and update token. */
  // will be passed an object ******
  async function signup(userData) {
    let newToken = await JoblyApi.getTokenForNewUser(userData);
    localStorage.setItem("token", `${newToken}`);
    setToken(newToken);
  }

  /** Edit a user's profile information. */
  async function editProfile(userData) {
    const storedToken = localStorage.getItem("token");
    let updatedUser = await JoblyApi.updateUser(userData, storedToken);
    setCurrentUser((currentUser) => ({
      ...currentUser,
      data: updatedUser,
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={{ currentUser, token }}>
          <BrowserRouter>
            <Nav logout={logout} />
            <div className="container px-5 mb-5">
              <RoutesList
                editProfile={editProfile}
                login={login}
                signup={signup}
              />
            </div>
          </BrowserRouter>
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
