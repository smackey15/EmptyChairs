import React from "react";
import { Link } from "react-router-dom";
import {Route} from "react-router-dom";
// import GreetingContainer from "./greeting/greeting_container";
import NavBarContainer from "./nav_bar/nav_bar_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"

const App = () => (
    <div>
        <header className="header">
            <Link to="/" className="nav-bar-link">
                <h1>EmptyChairs®</h1> 
            </Link>
            {/* above link is not routed yet */}
            <NavBarContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;