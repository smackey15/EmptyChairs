import React from "react";
import { Link } from "react-router-dom";
// import GreetingContainer from "./greeting/greeting_container";
import NavBarContainer from "./nav_bar/nav_bar_container"

const App = () => (
    <div>
        <header>
            <Link to="/" className="nav-bar-link">
                <h1>EmptyChairs</h1> 
            </Link>
            <NavBarContainer />
        </header>
    </div>
);

export default App;