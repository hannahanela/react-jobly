import "./App.css";
import React from "react";
import Nav from "./Nav";
import JoblyRoutes from "./JoblyRoutes";
import { BrowserRouter } from "react-router-dom";

/** App : handles rendering the navigation bar
 *
 *
 * App ->{Nav, JoblyRoutes}
 */

function App() {
  console.log("In App");
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
          <JoblyRoutes />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
