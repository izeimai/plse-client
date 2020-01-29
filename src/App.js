import React, { useState } from "react";
//import axios from 'axios';
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // removed Switch
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";
import AdminPage from "../src/components/AdminPage";
import LoginForm from "../src/components/LoginForm";
import LandingPage from "../src/components/LandingPage";
import InputForm from "../src/components/InputForm";
import ProfilePage from "../src/components/ProfilePage";
import BodyBackgroundColor from "react-body-backgroundcolor";
import Nav from "./components/nav";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  // render() {
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Nav />
        <PrivateRoute path="/admin" component={AdminPage} />

        <BodyBackgroundColor backgroundColor="#fadadd">
          <Route
            path="/login"
            render={props => <LoginForm {...props} isAuthed={true} />}
          />
        </BodyBackgroundColor>

        <BodyBackgroundColor backgroundColor="gray">
          <Route path="/landing" component={LandingPage} />
        </BodyBackgroundColor>

        <BodyBackgroundColor backgroundColor="#fadadd">
          <Route path="/inputform" component={InputForm} />
        </BodyBackgroundColor>

        <BodyBackgroundColor backgroundColor="#fadadd">
          <Route path="/profile" component={ProfilePage} />
        </BodyBackgroundColor>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
