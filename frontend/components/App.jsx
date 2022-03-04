import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
// import GreetingContainer from "./greeting/greeting_container";
import NavBarContainer from "./nav_bar/nav_bar_container"
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container"
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container"
import Modal from "./modal/modal"
import { FaChair } from 'react-icons/fa';

const App = () => (
    <div>
        <Modal />
        <header className="header">
            <Link to="/" className="nav-bar-link">
                <FaChair className="logo" /> 
                <h1>EmptyChairs</h1><h3>®</h3> 
            </Link>
            <NavBarContainer />
        </header>
        
        <Route exact path="/" component={RestaurantIndexContainer} />

        <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
        
        {/* <AuthRoute path="/signin" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;