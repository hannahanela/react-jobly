import "./App.css";
import React, { useState } from "react";
import Nav from "./Nav";
import JoblyRoutes from "./JoblyRoutes";
import { BrowserRouter } from "react-router-dom";
import userContext from "./userContext";

/** App : handles rendering the navigation bar
 *
 *
 * App ->{Nav, JoblyRoutes}
 */
const DEFAULT_USER = {};

function App() {
  //{useanme ; fstname ;lastname ;passpwrd ,email}
  const [user, setUser] = useState(DEFAULT_USER);
  const [token, setToken] = useState('')

  function updateUser(newUser) {
    setUser(newUser);
  }

  //useEffect will change the user using the token ? to update user

  function login(user){
    let newToken = await login(user)
    if(newToken.error !== undefined){
    setToken(newToken)
    }
    //TODO: render error

  }


  console.log("In App");
  return (
    <div className="App">
      <header className="App-header">
        <userContext.Provider value={{ user }}>
          <BrowserRouter>
            <Nav />
            <JoblyRoutes
              updateUser={updateUser}
              login={login}
              resgister={register}
            />
          </BrowserRouter>
        </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
