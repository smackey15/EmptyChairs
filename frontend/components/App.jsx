import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container"
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container"
// import LoginFormContainer from "./session/login_form_container"
// import SignupFormContainer from "./session/signup_form_container"
import Modal from "./modal/modal"
import { FaChair } from 'react-icons/fa';
import SplashPhoto from "./splash_photo.jsx"
import ReservationShowContainer from "./reservations/reservation_show_container"

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

        <Route exact path="/" component={SplashPhoto} />
        <Route exact path="/" component={RestaurantIndexContainer} />

        <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
        <Route exact path="/reservations/:id" component={ReservationShowContainer} />        
        
        {/* <AuthRoute path="/signin" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;