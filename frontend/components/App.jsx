import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container"
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container"
import Modal from "./modal/modal"
import { FaChair, FaGithub, FaLinkedin } from 'react-icons/fa';
import SplashPhoto from "./splash_photo.jsx"
import ReservationShowContainer from "./reservations/reservation_show_container"
import ResCancel from "./reservations/reservation_cancellation_confirmation"
import UserShowContainer from "./users/user_show_container";
import CreateReviewFormContainer from "./reviews/create_review_form_container"
import EditReviewFormContainer from "./reviews/edit_review_form_container"
import RevDelete from "./reviews/review_deletion_cancellation";
import FavoriteIndexContainer from "./favorites/favorite_index_container"

const App = () => (
    <div className="page-container">
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

        <ProtectedRoute exact path="/restaurants/:restId/reviews/:revId/form" component={EditReviewFormContainer}/> 
        <ProtectedRoute exact path="/restaurants/:id/reviews/form" component={CreateReviewFormContainer} />
        <Route exact path="/revdelete" component={RevDelete}></Route>

        <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />

        <Route exact path="/reservations/:id" component={ReservationShowContainer} />        
        <Route exact path="/rescancel" component={ResCancel} />
                
        <ProtectedRoute exact path="/userprofile" component={UserShowContainer} />
        <ProtectedRoute exact path="/myfavorites" component={FavoriteIndexContainer} />
        
        <footer>
            <div>
                <a href="https://github.com/smackey15/EmptyChairs" target="_blank"><FaGithub/></a>
                <button><a href="https://smackey15.github.io/" target="_blank">Portfolio Website</a></button>
                <a href="https://www.linkedin.com/in/sean-mackey123/" target="_blank"><FaLinkedin/></a>
            </div>
        </footer>
    </div>
);

export default App;