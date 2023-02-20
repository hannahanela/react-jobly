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
 *  - currentUser: user object used to determine if a user is logged in.
 *      { data:{username, firstName, lastName, isAdmin, jobs}, isLoggedIn }
 *        where jobs is { id, title, companyHandle, companyName, state }
 *  - token: authentication JWT for logged in users.
 *
 *  Context:
 *  - currentUser: user object from API.
 *
 * App ->{ Nav, RoutesList }
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
    let newToken = await JoblyApi.getTokenForCurrentUser(username, password);
    localStorage.setItem("token", `${newToken}`);

    setToken(newToken);
    setCurrentUser((currentUser) => ({
      ...currentUser,
      isLoggedIn: true,
    }));
  }

  /** Logout a user and remove token. */
  function logout(evt) {
    evt.preventDefault();
    localStorage.setItem("token", undefined);

    setToken(undefined);
    setCurrentUser((currentUser) => ({
      ...currentUser,
      data: null,
      isLoggedIn: false,
    }));
  }

  /** Signup a new user and update token. */
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
    </div>
  );
}

export default App;
